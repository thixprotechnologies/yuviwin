<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="javascript:void(0)">UPI Details</a>
                <a @click="$router.push({ name: 'Home' })"><i class="fa-solid fa-arrow-right-from-bracket" style="color: #fff;"></i> </a>
            </div>
            <!-- End top nav -->

            <div class="bankAccount-form">
                <div id="form">
                    <div class="inputBox">
                        <label for="profession">Actual Name</label>
                        <input type="text" id="name" v-model="user.name" name="name" placeholder="Ex. ABC..." autocomplete="off">
                    </div>
                    <div class="inputBox">
                        <label for="profession">UPI Address</label>
                        <input type="text" id="upi" v-model="user.upi" name="upi" placeholder="Ex. paytm1800@ybl"
                            autocomplete="off">
                    </div>

                    <!-- <div class="inputBox">
                        <label for="profession">Confirm UPI Address</label>
                        <input type="text" id="profession" name="profession" placeholder="Ex. paytm1800@ybl"
                            autocomplete="off">
                    </div> -->
                </div>
                <div class="bankAccount-submit-btns">
                    <button class="cancel-btn" type="button" @click="deleteUpi()">Delete</button>
                    <button class="addBank-btn" type="button" @click="addBankdetails()">Update Upi</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        bank: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            user: {
                username: null,
                name:null,
                upi: null,
                id:null,
            },
        }
    },
    mounted() {
        if (!this.bank) {
            this.$router.push({ name: 'Recharge' });
        } else {
            this.user.id = this.bank;
            this.GetUser().then(() => {
                this.getBankdetails();
                // this.userData.username = this.Users.username;
            });
        }
        this.GetUser().then(() => {
        });
    },
    methods: {
        isBankDetailsValid() {
            return true;//this.validateBankDetails();
        },
        async getBankdetails() {
            var formdata = new FormData();
            formdata.append('id', this.user.id);
            const res = await this.callApi('post', '/api/user/v1/bankDetails', formdata);
            if (res.status === 200) {
                if (res.data.back) {
                    this.salert('invalid bank details.');
                    this.$router.go(-1);
                } else {
                    this.user.upi = res.data.bank.upi_id;
                    this.user.name = res.data.bank.name;
                }
            } else {
                if (res.status === 401) {
                    this.logout();
                } else if (res.status == 400) {
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
        async deleteUpi(){
            var formdata = new  FormData();
            formdata.append('id',this.user.id);
            const res = await this.callApi('post', '/api/user/v1/upi-delete',formdata);
            if (res.status === 200) {
                this.salert(res.data.msg);
                this.$router.go(-1);
            } else {
                if (res.status === 401) {
                    this.logout();
                }else if (res.status == 400) {
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
        // validateBankDetails() {
        //     if(this.user.bankname == "" || this.user.ifscCode == "Not Added"){
        //         return false;
        //     }
        //     const isValidName = this.validationPatterns.name.test(this.user.name);
        //     const isValidBankname = this.validationPatterns.bankname.test(this.user.bankname);
        //     const isValidAccountNumber = this.validationPatterns.accountNumber.test(this.user.accountNumber);
        //     const isValidIfscCode = this.validationPatterns.ifscCode.test(this.user.ifscCode);
        //     if (!isValidName) {
        //         this.$refs.name.focus();
        //         console.error('Invalid name');
        //         return false;
        //     }
        //     if (!isValidBankname) {
        //         this.$refs.bankname.focus();
        //         console.error('Invalid bank name');
        //         return false;
        //     }
        //     if (!isValidAccountNumber) {
        //         if (this.$refs.accountnumber) {
        //             this.$refs.accountnumber.focus();
        //             console.error('Invalid account number');
        //         }
        //         return false;
        //     }
        //     if (!isValidIfscCode) {
        //         this.$refs.ifsccode.focus();
        //         console.error('Invalid IFSC code');
        //         return false;
        //     }
        //     return true;
        // },
        async addBankdetails(){
            var formdata = new  FormData();
            formdata.append('upi',this.user.upi);
            formdata.append('name',this.user.name);
            formdata.append('id',this.user.id);
            const res = await this.callApi('post', '/api/user/v1/upi-add',formdata);
            if (res.status === 200) {
                this.salert(res.data.msg);
                this.$router.go(-1);
            } else {
                if (res.status === 401) {
                    this.logout();
                }else if (res.status == 400) {
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
