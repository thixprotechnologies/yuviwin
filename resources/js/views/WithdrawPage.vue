<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <router-link :to="{ name: 'WithdrawRecord' }"><i class="fa-solid fa-clock-rotate-left"></i></router-link>
                <a href="javascript:void(0)">Withdraw</a>
                <router-link :to="{ name: 'Home' }"><i class="fa-solid fa-arrow-right-from-bracket"
                        style="color: #fff;"></i> </router-link>
            </div>
            <div class="withdraw-boxes1">
                <div class="withdraw-boxes1-heading">
                    <div class="">
                        <img src="../assets/img/withdraw-money.png">
                        <h6>Balance</h6>
                    </div>

                    <p class="withdraw-boxes1-heading-amount">&#8377; {{ this.balance }}</p>
                </div>

                <div class="withdraw-boxes1-amount-box">
                    <div class="withdraw-boxes1-amount-box-inputs">
                        <label for="withdraw-boxes1-amount">Amount</label>
                        <input type="text" @input="ValidateAmount" ref="amount" v-model="user.amount"
                            id="withdraw-boxes1-amount" placeholder="Ex. ₹530 - ₹50000">
                    </div>
                    <p class="max-price">
                        Maximum: &#8377; {{ this.balance }} | Minimum: &#8377; 200
                    </p>

                    <div class="amount-flex">
                        <div class="amount-flex-1">
                            <h6>Amount &lt; ₹1500</h6>
                            <p>Fee ₹30</p>
                        </div>

                        <div class="amount-line"></div>
                        <div class="amount-flex-1">
                            <h6>Amount > = ₹1500</h6>
                            <p>Fee 2%</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Withdraw method box -->
            <div class="Withdraw-method-box">
                <h4>Withdraw Methods</h4>
                <p>Use Bank Transfer when you withdraw.</p>
                <label v-if="banksdeatials != ''" v-for=" rows  in  banksdeatials " :key="rows.id" :rowsrec="rows"
                    for="flexRadioDefault1" @click="bankset(rows.id)" class="upiLabel">
                    <div class="Withdraw-method-box-amount-box">
                        <div class="Withdraw-method-box-amount-box-img">
                            <img v-if="rows.type == 1" src="../assets/img/upi.png">
                            <img v-if="rows.type == 2" src="../assets/img/bank.png" style="width: 40px;">
                            <div class="line"></div>
                            <p v-if="rows.type == 1">{{ rows.upi_id }}</p>
                            <p v-if="rows.type == 2">{{ rows.acc_number }}</p>
                        </div>
                        <div class="Withdraw-method-box-amount-box-add-upi-btn" >
                            <button type="button" v-if="rows.type == 1" @click="editUpi(rows.id)">+Edit
                                UPI</button>
                            <button type="button" v-if="rows.type == 2" @click="editBank(rows.id)">+Edit
                                Bank</button>
                            <div class="form-check">
                                <input class="form-check-input bank" type="radio" :checked="this.user.bank == rows.id" name="bank" id="bank" :value="rows.id"
                                    required="">
                            </div>
                        </div>
                    </div>
                </label>
                <div class="Withdraw-method-box-amount-box">
                    <div class="Withdraw-method-box-amount-box-img">
                        <img src="../assets/img/upi.png" style="width: 40px;">
                        <div class="line"></div>
                        <p>Withdraw to Upi</p>
                    </div>
                    <div class="Withdraw-method-box-amount-box-add-upi-btn">
                        <button type="button" @click="this.$router.push({ name: 'AddUpi' })">+Add Upi</button>
                    </div>
                </div>
                <div class="Withdraw-method-box-amount-box">
                    <div class="Withdraw-method-box-amount-box-img">
                        <img src="../assets/img/bank.png" style="width: 40px;">
                        <div class="line"></div>
                        <p>Withdraw to Bank</p>
                    </div>
                    <div class="Withdraw-method-box-amount-box-add-upi-btn">
                        <button type="button" @click="this.$router.push({ name: 'AddBank' })">+Add Bank</button>
                    </div>
                </div>

                <div class="withdraw-method-btn">
                    <button type="button" :class="{ 'withdraw-active': allowWithdrow() }"
                        @click="withdraw()">Withdrawal</button>
                </div>
            </div>
            <!-- End withdraw box -->
            <!-- End withdraw 1 box design -->
        </div>
    </section>
</template>
<style scoped>
.withdraw-active {
    background: linear-gradient(45deg, #ffd76e, #f9ab13) !important;
    color: #000 !important;
}
</style>
<script>
export default {
    data() {
        return {
            user: {
                username: null,
                amount: null,
                bank: null,
            },
            banksdeatials: ''
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.user.username = this.Users.username;
            this.getBanksOption();
        });
    },
    methods: {
        editBank(bankId) {
            this.$router.push({ name: 'EditBank', params: { bank: bankId } });
        },
        editUpi(bankId) {
            this.$router.push({ name: 'EditUpi', params: { bank: bankId } });
        },
        allowWithdrow() {
            return this.ValidateAmount() && this.user.bank != null;
        },
        bankset(id) {
            this.user.bank = id;
        },
        ValidateAmount() {
            if (this.user.amount == null) {
                return false;
            }
            this.user.amount = this.user.amount.replace(/\D/g, '');
            if (this.user.amount < 200) {
                this.$refs.amount.style.borderColor = 'red';
            } else {
                this.$refs.amount.style.borderColor = '#22487c';
            }
            return /^[0-9]+$/.test(this.user.amount) && this.user.amount >= 200;
        },
        async withdraw() {
            if (this.allowWithdrow()) {
                if (this.user.amount >= 200) {
                    var formdata = new FormData();
                    formdata.append('username', this.user.username);
                    formdata.append('amount', this.user.amount);
                    formdata.append('bank', this.user.bank);
                    const res = await this.callApi('post', 'api/user/v1/withdraw', formdata);
                    if (res.status === 200) {
                        this.salert(res.data.msg);
                        this.$router.push({ name: 'Home' });
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
                } else {
                    this.$refs.amount.focus();
                    this.ealert("Minimum Amount is 200");
                }

            } else {
                this.ealert('Please Enter valid Amount.');
            }
        },
        async getBanksOption() {
            const res = await this.callApi('post', 'api/user/v1/banksoptions');
            if (res.status === 200) {
                this.banksdeatials = res.data.data;
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
    },
}
</script>
