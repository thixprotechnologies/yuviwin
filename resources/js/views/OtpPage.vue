<template>
    <section class="home-section">
        <div class="center">
            <form class="login-form" style="padding: 0 2.8%;">
                <div class="otp-box">
                    <img src="../assets/img/otp-box-img.png">
                    <h4>OTP Verification</h4>
                    <p>Enter your 6 digit verification code that we have sent on your email</p>
                    <form method="post">
                        <!-- OTP FIELD  //:conditionalClass=""   -->
                        <v-otp-input ref="otpInput" input-classes="newotpinput text-center rounded"
                        separator="-" inputType="number"
                            :num-inputs="6"  :value="otpValue"  :should-auto-focus="true"
                            :should-focus-order="true"  @on-change="handleOnChange" @on-complete="handleOnComplete"/>
                        <div class="otp-verification-text">
                            <h5>Didn't received the Code <span id="timeotp">{{ formattedTime }}</span></h5>
                            <a v-if="countdown == 0" href="javascript:void(0)" @click="resendOtp()">Resend OTP?</a>
                        </div>

                        <div class="login-box1-btn">
                            <button type="button" id="submitotp" @click="verifyOtp()">Verify Now</button>
                        </div>
                    </form>
                    <!-- END OTP FIELD -->

                </div>
            </form>
        </div>
    </section>
</template>
<style scoped>
.otp-input-container{
    display: flex;
    justify-content: center;
}
input[type="number"]{
    width: 200px !important;
    /* font-size: 1.2rem; */
    height: 100px !important;
    /* border: 1.3px solid #6283B0;
    background: transparent;
    border-radius: 8px !important;
    color: var(--white-color); */
}

.newotpinput:focus{
    box-shadow: none;
    border: 1.4px solid var(--white-color);
    background: transparent;
    color: var(--white-color);
    box-shadow: 0 0 5px #ffffff, 0 0 25px #ffffff, 0 0 50px #ffffff, 0 0 100px #ffffff;
}
.login-box1-btn .active {
    background: var(--yellow-color) !important;
}
</style>
<script>

export default {
    props: {
        user: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            // inputs: [
            //     { value: '' },
            //     { value: '' },
            //     { value: '' },
            //     { value: '' },
            //     { value: '' },
            //     { value: '' }
            // ],
            otpValue: '',
            otp:'',
            intervalId: null,
            countdown: 120,
        }
    },
    created() {
        if (!this.user || !this.type) {
            this.$router.go(-1);
        }
    },
    mounted() {
        // if (this.countdown > 0) {
        //     this.startCountdown();
        // }
        // Retrieve the countdown value from session storage if available
        const storedCountdown = parseInt(sessionStorage.getItem('countdown'));
        if (!isNaN(storedCountdown) && storedCountdown != 0) {
            this.countdown = storedCountdown;
        }
        this.startCountdown();
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
        sessionStorage.removeItem('countdown');

    },
    computed: {
        formattedTime() {
            const minutes = Math.floor(this.countdown / 60);
            const seconds = this.countdown % 60;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    },
    watch: {
        countdown(newVal) {
            sessionStorage.setItem('countdown', newVal);
        },
        otp(newval){
            if(newval.length == 6){
                document.getElementById('submitotp').classList.add('active');
            } else {
                document.getElementById('submitotp').classList.remove('active');
            }
        }
    },
    methods: {
        startCountdown() {
            this.intervalId = setInterval(() => {
                if (this.countdown > 0) {
                    this.countdown--;
                } else {
                    clearInterval(this.intervalId);
                }
            }, 1000); // Update the countdown every second (1000 milliseconds)
        },
        handleOnComplete(otp) {
            document.getElementById('submitotp').classList.add('active');
        },
        handleOnChange(value) {
            if(value.length == 6){
                this.otp = value
                document.getElementById('submitotp').classList.add('active');
            }else{
                document.getElementById('submitotp').classList.remove('active');
            }
        },
        onInput(index) {
            if (this.inputs[index].value && index < this.inputs.length - 1) {
                this.$refs.otpInputs[index + 1].focus();
            }
            if (this.inputs[index].value !== null && this.inputs[index].value > 9) {
                this.inputs[index].value = Math.floor(this.inputs[index].value / 10);
            }
            if (!this.inputs[index].value && index > 0) {
                this.$refs.otpInputs[index - 1].focus();
            }
            const otpValues = this.inputs.map(input => input.value).join('');
            if (otpValues.length === this.inputs.length) {
                document.getElementById('submitotp').classList.add('active');
            } else {
                document.getElementById('submitotp').classList.remove('active');
            }
        },
        shouldDisable(index) {
            // return index !== 0 && !this.inputs[index - 1].value && !this.inputs[index].value;
            return index !== 0 && !this.inputs[index - 1].value && !this.inputs[index].value;
        },
        async verifyOtp() {
            if (this.otp.length === 6) {
                const formData = new FormData();
                formData.append('username', this.user);
                formData.append('type', this.type);
                formData.append('otp', this.otp);
                const res = await this.callApi('post', '/api/user/v1/otp/verify', formData);
                if (res.status === 200) {
                    if (res.data.status) {
                        if (res.data.type == 'forgot-Password') {
                            this.$router.push({
                                name: 'ChangePassword',
                                query: {
                                    user: res.data.user,
                                }
                            });
                        } else if (res.data.type == 'account-verify') {
                            this.salert('Account Created Successfully');
                            this.$router.push({ name: 'Login' })
                        } else if (res.data.type == 'login') {
                            localStorage.setItem('ruser', res.data.user);
                            localStorage.setItem('systoken', res.data.token);
                            this.salert(res.data.msg)
                            setTimeout(() => {
                                localStorage.removeItem('ruser');
                            }, 3600 * 1000);
                            this.$router.push({ name: 'Home' });
                        }
                    } else {
                        this.ialert(res.data.msg);
                    }
                } else {
                    if (res.status === 400) {
                        this.ialert(res.data.msg)
                    } else if (res.status == 422) {
                        for (let i in res.data.errors) {
                            this.ealert(res.data.errors[i][0])
                        }
                    }
                    else {
                        this.swralert()
                    }
                }
            } else {
                document.getElementById('submitotp').classList.remove('active');
            }
        },
        async resendOtp() {
            const formData = new FormData();
            formData.append('username', this.user);
            formData.append('type', this.type);
            const res = await this.callApi('post', '/api/user/v1/otp/resend', formData);
            if (res.status === 200) {
                if (res.data.status) {
                    this.salert(res.data.msg);
                    this.countdown = 120;
                } else {
                    this.ialert(res.data.msg);
                }
            } else {
                if (res.status === 400) {
                    this.ialert(res.data.msg)
                } else if (res.status == 422) {
                    for (let i in res.data.errors) {
                        this.ealert(res.data.errors[i][0])
                    }
                }
                else {
                    this.swralert()
                }
            }
        }
    },
};


</script>
