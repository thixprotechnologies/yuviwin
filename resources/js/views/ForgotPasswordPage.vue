<template>
    <section class="home-section">
        <div class="center">
            <div class="login-form" style="padding: 0 2.8%;">
                <div class="otp-box">
                    <img src="../assets/img/resate-box-img.png">
                    <h4>Set your New Password</h4>
                    <p>Please enter your New Password to Login into your account</p>
                    <div class="inputBox">
                        <label for="username">Mobile Number</label>
                        <input type="text" id="username" @input="validateUsername" ref="usernameInput"
                            v-model="user.username" placeholder="Ex. 9887012345" autocomplete="off">
                    </div>

                    <!-- <div class="inputBox">
                        <label for="profession">Confirm Password</label>
                        <input type="password" id="profession" name="profession" placeholder="Ex. ********"
                            autocomplete="off">
                    </div> -->

                    <div class="login-box1-btn">
                        <button type="submit" id="otpbtn" @click="sendOtp()">Send Code</button>
                    </div>
                    <!-- END OTP FIELD -->
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.login-box1-btn .active {
    background: var(--yellow-color);
    color: var(--black-color);
}
</style>
<script>
export default {
    data() {
        return {
            user: {
                username: null,
                type: 'forgot-Password'
            }
        }
    },
    mounted() {
        this.GetUser()
    },
    methods: {
        validateUsername() {
            this.user.username = this.user.username.replace(/\D/g, '');
            if (this.user.username.length > 10) {
                this.user.username = this.user.username.slice(0, 10);
            }
            if (this.user.username.length == 10) {
                document.getElementById('otpbtn').classList.add("active");
            }
            else {
                document.getElementById('otpbtn').classList.remove("active");
            }
            return /^\d{10}$/.test(this.user.username);
        },
        focusInput(refName) {
            this.$refs[refName].focus();
        },
        async sendOtp() {
            if (!this.validateUsername()) {
                this.focusInput('usernameInput');
                this.ealert('Invalid Mobile Number');
                return;
            }else{
                var data = new FormData();
                data.append('username',this.user.username)
                data.append('type',this.user.type)
                const res = await this.callApi('post', 'api/user/v1/otp', data);
            if (res.status === 200) {
                this.salert(res.data.msg);
                const userData = res.data.data;

                this.$router.push({
                    name: 'OtpVerify',
                    params: {
                        user: userData.username,
                        type: userData.type
                    }
                });
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
    },
};
</script>
