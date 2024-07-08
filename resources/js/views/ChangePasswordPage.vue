<template>
    <section class="home-section">
        <div class="center">
            <div class="login-form" style="padding: 0 2.8%;">
                <div class="otp-box">
                    <img src="../assets/img/resate-box-img.png">
                    <h4>Set your New Password</h4>
                    <p>Please enter your New Password to Login into your account</p>
                    <div class="inputBox">
                        <label for="password">Password</label>
                        <input type="password" id="password" @input="validatePassword" ref="password"
                            v-model="userData.password" placeholder="Ex. ********" autocomplete="off">
                        <button type="button" @click="togglePasswordVisibility('password')" class="eye-btn"><i
                                class="fa-solid fa-eye-slash" style="color: #22487c;"></i></button>
                        <small id="passwordMessage"></small>
                    </div>
                    <div class="inputBox">
                        <label for="confirmpassword">Confirm Password</label>
                        <input type="password" id="confirmpassword" @input="validateConfirmPassword" ref="confirmpassword"
                            v-model="userData.confirmpassword" placeholder="Ex. ********" autocomplete="off">
                        <button type="button" class="eye-btn" @click="togglePasswordVisibility('confirmpassword')"><i
                                class="fa-solid fa-eye-slash" style="color: #22487c;"></i></button>
                    </div>
                    <div class="login-box1-btn"  @click="updatePassword()">
                        <button type="submit" :class="{ active: isActive() }" id="otpbtn">Update
                            Password</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.login-box1-btn .active {
    background: var(--yellow-color) !important;
}
</style>
<script>

export default {
    data() {
        return {
            userData: {
                confirmpassword: null,
                password: null,
                username: null
            },
        }
    },
    created() {
    },
    mounted() {
        if (this.$route.query) {
            this.userData.username = this.$route.query.user;
        } else {
            this.$router.go(-1);
        }
    },
    methods: {
        isActive() {
            if (this.userData.password !== null) {
                return this.userData.confirmpassword !== null &&
                    this.userData.confirmpassword === this.userData.password &&
                    this.userData.password !== null &&
                    this.userData.password.length >= 6;
            } else {
                return false;
            }
        },
        validatePassword() {
            if (this.userData.password !== null) {
                return this.userData.password !== null &&
                    this.userData.password.length >= 6
            } else {
                return true;
            }

        },
        validateConfirmPassword() {
            if (this.userData.password !== null) {
                return this.userData.confirmpassword !== null &&
                    this.userData.confirmpassword === this.userData.password &&
                    this.userData.password !== null &&
                    this.userData.password.length >= 6;
            } else {
                return true;
            }
        },
        focusInput(refName) {
            this.$refs[refName].focus();
        },
        togglePasswordVisibility(fieldId) {
            const passwordField = document.getElementById(fieldId);
            const eyeIcon = passwordField.nextElementSibling.querySelector('i');
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            } else {
                passwordField.type = 'password';
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            }
        },
        async updatePassword() {
            if (!this.validateConfirmPassword()) {
                this.focusInput('confirmpassword');
                // this.ealert('Invalid Mobile Number');
                return;
            }
            if (!this.validatePassword()) {
                this.focusInput('password');
                this.ealert('Invalid Password');
                return;
            }
            var data = new FormData();
            data.append('username',this.userData.username);
            data.append('password',this.userData.password);
            data.append('confirmpassword',this.userData.confirmpassword);
            const res = await this.callApi('post', '/api/user/v1/changePasswrod', data);
            if (res.status === 200) {
                this.salert(res.data.msg)
                this.$router.push({ name: 'Login'});
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
    }
}
</script>
