<template>
    <section class="home-section">
        <div class="center">
            <div class="login-form">
                <div class="login-box">
                    <div class="login-box-logo">
                        <img src="../assets/img/login-box-logo.png">
                    </div>

                    <div class="login-box-bg">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button :class="{ 'nav-link': true, active: this.loginpage }" id="pills-home-tab"
                                    data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab"
                                    aria-controls="pills-home" aria-selected="true">Login</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button :class="{ 'nav-link': true, active: this.loginpage == false }"
                                    id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                                    type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sign
                                    Up</button>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div :class="{ 'tab-pane': true, 'fade': true, 'show': this.loginpage, 'active': this.loginpage }"
                        id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="toggle-login">
                            <h4>Login in Your Account</h4>
                            <p>Please enter your phone number and Password then we will to Login your account</p>
                            <div class="quick form-check form-switch">
                                <input class="form-check-input" v-model="user.quick" type="checkbox" id="flexSwitchCheckDefault">
                                <label  class="form-check-label"   for="flexSwitchCheckDefault">Quick Login</label>
                            </div>
                            <div class="inputBox">
                                <label for="username">Mobile Number</label>
                                <input type="text" id="username" @input="validateUsername" ref="usernameInput"
                                    v-model="user.username" placeholder="Ex. 9887012345" autocomplete="off">
                            </div>

                            <div class="inputBox" v-if="user.quick == false">
                                <label for="password">Password</label>
                                <input type="password" id="password" @input="validatePassword" ref="password"
                                    v-model="user.password" placeholder="Ex. ********" autocomplete="off">
                            </div>

                            <div class="forget-password"><router-link :to="{ name: 'ForgotPassword' }">Forget
                                    Password</router-link></div>

                            <div class="login-box1-btn" @click="login">
                                <button type="button" :class="{ 'active': makeactive('login') }">Login</button>
                            </div>
                        </div>
                    </div>
                    <div :class="{ 'tab-pane': true, 'fade': true, 'show': this.loginpage == false, 'active': this.loginpage == false }"
                        id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="toggle-login">
                            <h4>Create a New Account</h4>
                            <p>Create an account so you can manage your register account</p>

                            <div class="inputBox">
                                <label for="mobile">Mobile Number</label>
                                <input type="text" id="mobile" @input="validateMobile" ref="mobile" name="mobile"
                                    v-model="user.mobile" placeholder="Ex. +91 9887012345" autocomplete="off">
                            </div>

                            <div class="inputBox">
                                <label for="newpassword">Password</label>
                                <input type="password" id="newpassword" @input="validateNewPassword" ref="newpassword"
                                    v-model="user.password" placeholder="Ex. ********" autocomplete="off">
                            </div>

                            <div class="inputBox">
                                <label for="confirmpassword">Confirm Login Password</label>
                                <input type="password" id="confirmpassword" @input="validateConfirmPassword"
                                    ref="confirmpassword" v-model="user.confirmpassword" placeholder="Ex. ********"
                                    autocomplete="off">
                            </div>

                            <div class="inputBox">
                                <label for="invitecode">Invite Code</label>
                                <input type="text" id="invitecode" v-model="user.LTCKEValue" placeholder="Ex. HVBBC23658"
                                    autocomplete="off">
                            </div>

                            <div class="privacy-policy">
                                <div class="form-check">
                                    <input class="form-check-input" style="height: 1.8rem;width: 1.8rem;" @input="validatePrivacy" ref="privacy" type="checkbox"
                                        v-model="user.privacy" id="flexCheckDefault">
                                </div>

                                <h6 for="">By Signing up, you agree to the</h6>
                                <a href="#">Privacy Policy</a>
                            </div>

                            <div class="login-box1-btn">
                                <button :class="{ 'active': makeactive('signup') }" type="button" @click="signup">Sign
                                    Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.toggle-login .quick{
    font-size: 2rem;
    display: inline-block;
}
.toggle-login .quick label{
    color: #fff;
}
.toggle-login .quick .form-check-input:checked{
    border-color:#fbbb35;
}
.toggle-login .quick.form-switch .form-check-input{
    background-image: url('../assets/img/switch-quick.png')!important;
}
.login-box1-btn .active {
    background: var(--yellow-color) !important;
}
</style>
<script>
export default {
    data() {
        return {
            user: {
                username: null,
                password: null,
                confirmpassword: null,
                privacy: false,
                mobile: null,
                LTCKEValue: null,
                loginpage: true,
                quick: false,
            }
        }
    },
    created() {
        this.LTCKEValue = this.$route.query.LTCKE;
        if (this.LTCKEValue) {
            this.loginpage = false;
            this.user.LTCKEValue = this.LTCKEValue;
        } else {
            this.loginpage = true;
        }
    },
    methods: {
        async signup() {
            if (!this.validatePassword()) {
                this.focusInput('newpassword');
                this.ealert('Invalid Password');
                return;
            }
            if (!this.validateConfirmPassword()) {
                this.focusInput('confirmpassword');
                this.ealert('Passwords do not match');
                return;
            }
            if (!this.validateMobile()) {
                this.focusInput('mobile');
                this.ealert('Invalid Mobile Number');
                return;
            }
            if (!this.validatePrivacy()) {
                this.focusInput('privacy');
                return;
            }
            const data = new FormData();
            data.append('username', this.user.mobile);
            data.append('password', this.user.password);
            data.append('confirmpassword', this.user.confirmpassword);
            data.append('privacy', this.user.privacy);
            data.append('inviteCode', this.user.LTCKEValue);
            const res = await this.callApi('post', 'api/user/v1/register', data);
            if (res.status === 200) {
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
        },
        async login() {
            if (!this.validateUsername()) {
                this.focusInput('usernameInput');
                this.ealert('Invalid Mobile Number');
                return;
            }
            const data = new FormData();

            if (this.user.quick == true) {
                data.append('username', this.user.username);
                data.append('quick', this.user.quick);
            } else {
                if (!this.validatePassword()) {
                    this.focusInput('password');
                    this.ealert('Invalid Password');
                    return;
                }
                data.append('username', this.user.username);
                data.append('password', this.user.password);
            }
            const res = await this.callApi('post', 'api/user/v1/login', data);
            if (res.status === 200) {
                if (res.data && res.data.token) {
                    localStorage.setItem('ruser', res.data.user);
                    localStorage.setItem('systoken', res.data.token);
                    this.salert(res.data.msg)
                    setTimeout(() => {
                        localStorage.removeItem('ruser');
                    }, 3600 * 1000);
                    this.$router.push({ name: 'Home' });
                } else {
                    const userData = res.data.data;
                    this.$router.push({
                        name: 'OtpVerify',
                        params: {
                            user: userData.username,
                            type: userData.type
                        }
                    });
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
        },
        validateUsername() {
            if (this.user.username != null) {
                this.user.username = this.user.username.replace(/\D/g, '');
                if (this.user.username.length > 10) {
                    this.user.username = this.user.username.slice(0, 10);
                }
                return /^\d{10}$/.test(this.user.username);
            }
        },
        validatePassword() {
            return this.user.password !== null &&
                this.user.password.length >= 6
        },
        validateConfirmPassword() {
            return this.user.confirmpassword !== null &&
                this.user.confirmpassword === this.user.password &&
                this.user.password !== null &&
                this.user.password.length >= 6;
        },
        validateMobile() {
            if (this.user.mobile != null) {
                this.user.mobile = this.user.mobile.replace(/\D/g, '');
                if (this.user.mobile.length > 10) {
                    this.user.mobile = this.user.mobile.slice(0, 10);
                }
                return /^\d{10}$/.test(this.user.mobile);
            }
        },
        validatePrivacy() {
            return this.user.privacy === true;
        },
        focusInput(refName) {
            this.$refs[refName].focus();
        },
        makeactive(type) {
            if (type == "login") {
                if(this.user.quick == true){
                    return this.validateUsername();
                }else{
                    return this.validateUsername() && this.validatePassword();
                }
            } else if (type == 'signup') {
                return this.validateMobile() && this.validatePassword() && this.validateConfirmPassword() && this.validatePrivacy();
            }
            else {
                return false;
            }
        }
    }
}
</script>
