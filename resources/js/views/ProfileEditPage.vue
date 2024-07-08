<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="javascript:void(0)">Edit Profile</a>
                <a @click="$router.push({ name: 'Profile' })"><i class="fa-solid fa-arrow-right-from-bracket" style="color: #fff;"></i> </a>
            </div>
            <!-- End top nav -->

            <div class="bankAccount-form">
                <div id="form">
                    <div class="member-detail-dashboard-profile">
                        <!-- <div class="d-flex justify-content-center">
                            <div class="avatar-upload">
                                <div class="avatar-edit">
                                    <input type='file' id="imageUpload"
                                        accept=".png, .jpg, .jpeg" />
                                    <label for="imageUpload"></label>
                                </div>
                                <div class="avatar-preview">
                                    <div id="imagePreview" style="background-image: url('uploads/profile-demo.png');">
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <div class="inputBox">
                            <label for="nickname">Nick Name</label>
                            <input type="text" id="nickname" name="nickname" v-model="user.nickname"
                                placeholder="Ex. ABC..." autocomplete="off">
                        </div>
                        <div class="inputBox">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" v-model="user.name" placeholder="Ex. ABC..."
                                autocomplete="off">
                        </div>
                        <div class="inputBox">
                            <label for="password">Password</label>
                            <input type="password" id="password" @input="validatePassword" ref="password"
                                v-model="user.password" placeholder="Ex. ********" autocomplete="off">
                            <button type="button" @click="togglePasswordVisibility('password')" class="eye-btn"><i
                                    class="fa-solid fa-eye-slash" style="color: #22487c;"></i></button>
                                <small id="passwordMessage"></small>
                        </div>
                        <div class="inputBox">
                            <label for="confirmpassword">Confirm Password</label>
                            <input type="password" id="confirmpassword"  @input="validateConfirmPassword"
                                ref="confirmpassword" v-model="user.confirmpassword" placeholder="Ex. ********"
                                autocomplete="off">
                            <button type="button" class="eye-btn" @click="togglePasswordVisibility('confirmpassword')"><i
                                    class="fa-solid fa-eye-slash" style="color: #22487c;"></i></button>
                        </div>
                    </div>

                </div>
                <div class="bankAccount-submit-btns">
                    <!-- <button class="cancel-btn" type="button">Cancel</button> -->
                    <button class="addBank-btn" type="button" id="adddetails" @click="updateDetails()">
                        Update Details</button>
                </div>
            </div>

        </div>
    </section>
</template>
<script>

export default {
    data() {
        return {
            user:{
                nickname:null,
                name:null,
                password:null,
                confirmpassword:null,
                username:null
            },
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.user.nickname = this.Users.nickname;
            this.user.name = this.Users.name;
            this.user.username = this.Users.username;
        });
    },
    methods: {
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
        validatePassword() {
            if(this.user.password!==null){
                return this.user.password !== null &&
                this.user.password.length >= 6
            }else{
                return true;
            }

        },
        validateConfirmPassword() {
            if(this.user.password!==null){
                return this.user.confirmpassword !== null &&
                this.user.confirmpassword === this.user.password &&
                this.user.password !== null &&
                this.user.password.length >= 6;
            }else{
                return true;
            }
        },
        focusInput(refName) {
            this.$refs[refName].focus();
        },
        async updateDetails(){
            if (!this.validatePassword()) {
                this.focusInput('password');
                this.ealert('Password length should be minmium 6.');
                return;
            }
            if (!this.validateConfirmPassword()) {
                this.focusInput('confirmpassword');
                this.ealert('Passwords do not match');
                return;
            }
            const res = await this.callApi('post', 'api/user/v1/updateDetails', this.user);
            if (res.status === 200) {
                this.salert(res.data.msg);
                this.$router.push({ name: 'Profile' });

            } else {
                if (res.status === 401) {
                    this.logout();
                }else if (res.status == 400) {
                    this.ialert(res.data.msg)
                }else if (res.status == 422) {
                    for (let i in res.data.errors) {
                        this.ealert(res.data.errors[i][0])
                    }
                }
                else {
                    this.swralert()
                }
            }

        },
    }
}
</script>
