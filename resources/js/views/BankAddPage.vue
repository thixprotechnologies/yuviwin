<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="javascript:void(0)">Bank Details</a>
                <a @click="$router.push({ name: 'Withdraw' })"><i class="fa-solid fa-arrow-right-from-bracket" style="color: #fff;"></i> </a>
            </div>
            <!-- End top nav -->

            <div class="bankAccount-form">
                <div id="form">
                    <div class="inputBox">
                        <label for="bankname">Your  Name ( as per bank )</label>
                        <input type="text" id="name" v-model="user.name" ref="name"
                            placeholder="Ex. State Bank of India" autocomplete="off">
                    </div>
                    <div class="inputBox">
                        <label for="bankname">Bank Name</label>
                        <input type="text" id="bankname" v-model="user.bankname" ref="bankname"
                            placeholder="Ex. State Bank of India" autocomplete="off">
                    </div>

                    <div class="inputBox">
                        <label for="accountnumber">Account Number</label>
                        <input type="text" id="accountnumber" v-model="user.accountNumber" ref="accountnumber"
                            placeholder="Ex. 44220002366055" autocomplete="off">
                    </div>
                    <div class="inputBox">
                        <label for="ifsccode">IFSC Code</label>
                        <input type="text" id="ifsccode" v-model="user.ifscCode" ref="ifsccode" placeholder="Ex. SBIN022222"
                            autocomplete="off">
                        <!-- <button type="button" class="verify-btn">Verify</button> -->
                    </div>

                    <!-- <div class="inputBox">
                        <label for="profession">Branch</label>
                        <input type="text" id="profession" name="profession" placeholder="Ex. Raipur chitchgard....."
                            autocomplete="off">
                    </div>

                    <div class="inputBox">
                        <label for="Ex-no">Ser as Primary</label>
                        <select name="Ex-no" id="Ex-no">
                            <option value="Ex-no1">Ex. No</option>
                            <option value="Ex-no2">Ex-no</option>
                            <option value="Ex-no3">Ex-no</option>
                            <option value="Ex-no4">Ex-no</option>
                        </select>
                    </div> -->
                </div>
                <div class="bankAccount-submit-btns">
                    <button class="cancel-btn" type="button" @click="$router.push({ name: 'Home' })">Cancel</button>
                    <button :class="{ 'addBank-btn': isBankDetailsValid() }" @click="isBankDetailsValid() ? addBankdetails() : null" type="button">Add Bank</button>
                </div>
            </div>

        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            user: {
                username: null,
                name:null,
                bankname: null,
                ifscCode: null,
                accountNumber: null,
            },
            validationPatterns: {
                bankname:/^[a-zA-Z\s]+$/,
                name:/^[a-zA-Z\s]+$/,
                accountNumber: /^[0-9]+$/,
                ifscCode: /^[A-Za-z]{4}\d{7}$/
            }
        }
    },
    mounted() {
        this.GetUser().then(() => {
            // this.user.username = this.Users.username;
            // this.user.bankname = this.Users.bankname;
            // this.user.ifscCode = this.Users.ifsc;
            // this.user.accountNumber = parseInt(this.Users.paytm);//.match(/\d+/g);
        });
    },
    methods: {
        isBankDetailsValid() {
            return this.validateBankDetails();
        },
        validateBankDetails() {
            if(this.user.bankname == "" || this.user.ifscCode == "Not Added"){
                return false;
            }
            const isValidName = this.validationPatterns.name.test(this.user.name);
            const isValidBankname = this.validationPatterns.bankname.test(this.user.bankname);
            const isValidAccountNumber = this.validationPatterns.accountNumber.test(this.user.accountNumber);
            const isValidIfscCode = this.validationPatterns.ifscCode.test(this.user.ifscCode);
            if (!isValidName) {
                // this.$refs.name.focus();
                // console.error('Invalid name');
                return false;
            }
            if (!isValidBankname) {
                // this.$refs.bankname.focus();
                // console.error('Invalid bank name');
                return false;
            }
            if (!isValidAccountNumber) {
                if (this.$refs.accountnumber) {
                    // this.$refs.accountnumber.focus();
                    // console.error('Invalid account number');
                }
                return false;
            }
            if (!isValidIfscCode) {
                // this.$refs.ifsccode.focus();
                // console.error('Invalid IFSC code');
                return false;
            }
            return true;
        },
        async addBankdetails(){
            var formdata = new  FormData();
            formdata.append('accountNumber',this.user.accountNumber);
            formdata.append('ifscCode',this.user.ifscCode);
            formdata.append('name',this.user.name);
            formdata.append('bankname',this.user.bankname);
            const res = await this.callApi('post', 'api/user/v1/bank-add',formdata);
            if (res.status === 200) {
                this.salert(res.data.msg);
                this.$router.push({ name: 'Withdraw' });
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
