<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="#"><ion-icon name="arrow-back-outline"></ion-icon> Complaint</a>
                <a href="#" style="font-size: 1.4rem;">Records(s)</a>
            </div>
            <!-- End top nav -->
            <div class="bankAccount-form">
                <div id="form" action="">
                    <div class="inputBox">
                        <label for="Ex-no">Complane Reason</label>
                        <select name="Ex-no" v-model="user.reason" id="Ex-no">
                            <option selected v-if="user.type == 'Recharge'" value="Did not receive the recharge amount">Did not receive the recharge
                                amount
                            </option>
                            <option selected v-if="user.type == 'Withdraw'" value="Did not receive the amount in bank">
                                Did not receive the amount in bank
                            </option>
                            <option selected v-if="user.type == 'Withdraw'" value="Did not receive the amount in Upi">
                                Did not receive the amount in Upi
                            </option>
                        </select>
                    </div>
                    <div class="inputBox" v-if="user.type == 'Recharge'">
                        <label for="Ex-no">Payment Method</label>
                        <select name="Ex-no" v-model="user.paymentMethos" id="Ex-no">
                            <option selected value="Phone Pe">Phone Pe</option>
                            <option value="Google Pe">Google Pe</option>
                            <option value="Paytm">Paytm</option>
                            <option value="Payment Gateway">Payment Gateway</option>
                        </select>
                    </div>
                    <div class="inputBox" v-if="user.type == 'Recharge'">
                        <label for="profession">UTR Number</label>
                        <input type="text" id="profession" disabled v-model="data.utr" name="profession"
                            placeholder="Ex. 44220002366055" autocomplete="off">
                    </div>
                    <div class="inputBox" v-if="user.type == 'Withdraw'">
                        <label for="profession">Tnx ID</label>
                        <input type="text" id="profession" name="profession" disabled v-model="data.rand"
                            placeholder="Ex. 44220002366055" autocomplete="off">
                    </div>
                    <div class="inputBox" v-if="user.type == 'Recharge'">
                        <label for="profession">Tnx ID</label>
                        <input type="text" id="profession" name="profession" disabled v-model="data.rand"
                            placeholder="Ex. 44220002366055" autocomplete="off">
                    </div>
                    <div class="inputBox" v-if="user.type == 'Recharge'">
                        <label for="profession">Amount</label>
                        <input type="text" id="profession" disabled name="profession" v-model="data.recharge"
                            placeholder="Ex. 44220002366055" autocomplete="off">
                    </div>
                    <div class="inputBox" v-if="user.type == 'Withdraw'">
                        <label for="profession">Amount</label>
                        <input type="text" id="profession" disabled name="profession" v-model="data.withdraw"
                            placeholder="Ex. 44220002366055" autocomplete="off">
                    </div>
                    <div class="inputBox" v-if="user.type == 'Recharge'">
                        <label for="profession">Paid To UPID(optional)</label>
                        <input type="text" id="profession" v-model="user.UPID" name="profession"
                            placeholder="Ex. 44220002366055" autocomplete="off">
                    </div>
                    <div class="inputBox" v-if="user.type == 'Recharge'">
                        <label for="profession">Upload Image</label>
                        <input type="file" ref="fileInput" name="myfile" id="fileInput" accept="image/*">
                    </div>
                    <div class="inputBox" v-if="user.type == 'Withdraw'">
                        <label for="profession">Message</label>
                        <textarea v-model="user.message" rows="5"></textarea>
                    </div>
                    <div class="bankAccount-submit-btns">
                        <button class="cancel-btn" @click="this.$router.go(-1)" type="button">Cancel</button>
                        <button class="addBank-btn" @click="addcomplain()" type="button">Add Complain</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<style scoped>
.bankAccount-form #form .inputBox input[type=file] {
    padding: 1.8rem 1.3rem !important;
}
</style>
<script>
export default {
    props: {
        id: {
            type: Number,
            default: null,
        },
        type: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            user: {
                id: null,
                type: '',
                UPID: null,
                data: '',
                paymentMethos: 'Phone Pe',
                reason: 'Did not receive the recharge amount',
                message: '',
            },
            file: null,
            data: ''
        }
    },
    mounted() {
        if (!this.id || !this.type) {
            this.$router.go(-1);
        } else {
            this.user.id = this.id;
            this.user.type = this.type;
            if(this.type == 'Recharge'){
                this.user.reason =  'Did not receive the recharge amount';
            }else if(this.type == 'Withdraw'){
                this.user.reason =  'Did not receive the amount in bank';
            }
            this.GetUser().then(() => {
                this.checkData();
            });
        }
    },
    methods: {
        handleFileInputChange(event) {
            this.file = event.target.files[0];
        },
        async checkData() {
            var data = new FormData();
            data.append('id', this.user.id);
            data.append('type', this.user.type);
            const res = await this.callApi('post', '/api/user/v1/complaneData', data);
            if (res.status === 200) {
                if (res.data.status == false) {
                    this.walert(res.data.msg);
                    this.$router.go(-1);
                } else {
                    this.data = res.data.data;
                    this.user.data = res.data.data;
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
        async addcomplain() {
            if (this.user.type == 'Recharge') {
                const files = this.$refs.fileInput.files;
                if (files.length === 0) {
                    this.walert('Please Select Image');
                    return;
                } else {
                    var data = new FormData();
                    data.append('id', this.user.id);
                    data.append('type', this.user.type);
                    data.append('reason', this.user.reason);
                    data.append('UPID', this.user.UPID);
                    data.append('paymentMethod', this.user.paymentMethos);
                    data.append('utr', this.user.data.utr);
                    data.append('tnx_id', this.user.data.rand);
                    data.append('amount', this.user.data.recharge);
                    data.append('image', files[0]);
                    const res = await this.callApi('post', '/api/user/v1/complaneAdd', data);
                    if (res.status === 200) {
                        if (res.data.status) {
                            this.salert(res.data.msg);
                            this.$router.push({ name: 'Home' });
                        } else {
                            this.walert(res.data.msg);
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
                }
            } else if (this.user.type == 'Withdraw') {
                var data = new FormData();
                data.append('id', this.user.id);
                data.append('type', this.user.type);
                data.append('reason', this.user.reason);
                data.append('tnx_id', this.user.data.rand);
                data.append('amount', this.user.data.withdraw);
                data.append('message', this.user.message);
                const res = await this.callApi('post', '/api/user/v1/complaneAdd', data);
                if (res.status === 200) {
                    if (res.data.status) {
                        this.salert(res.data.msg);
                        this.$router.push({ name: 'Home' });
                    } else {
                        this.walert(res.data.msg);
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
            }


        }
    }
}
</script>
