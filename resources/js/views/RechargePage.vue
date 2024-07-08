<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <router-link :to="{ name: 'RechargRecord' }"><i class="fa-solid fa-clock-rotate-left"></i></router-link>
                <a href="javascript:void(0)">Recharge</a>
                <router-link :to="{ name: 'Home' }"><i class="fa-solid fa-home"></i></router-link>
            </div>
            <!-- End top nav -->

            <!-- Start withdraw 1 box design -->
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
                        <input type="number" min="0" @input="ValidateAmount" ref="amount" v-model="user.amount"
                            id="withdraw-boxes1-amount" placeholder="Ex. ₹100 - ₹50000" autocomplete="off">
                    </div>
                    <p class="max-price">
                        Minimum: &#8377; 100
                    </p>
                </div>
            </div>

            <!-- Start reacharge select box -->
            <div class="reacharge-select-box">
                <h4>Or Select Amount</h4>
                <div id="form">
                    <div class="row">
                        <div class="col-4" @click="setAmount(100)">
                            <label class="reacharge-select" for="reacharge-select-1">
                                <div class="form-check reacharge-select-form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="reacharge-select-1" required>
                                </div>

                                <h3 style="color: #C3E200!important;">₹100</h3>

                            </label>
                        </div>

                        <div class="col-4" @click="setAmount(500)">
                            <label class="reacharge-select reacharge-select2" for="reacharge-select-2">
                                <div class="form-check reacharge-select-form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="reacharge-select-2" required>
                                </div>

                                <h3>₹500</h3>

                            </label>
                        </div>
                        <div class="col-4" @click="setAmount(1000)">
                            <label class="reacharge-select reacharge-select2" for="reacharge-select-6">
                                <div class="form-check reacharge-select-form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="reacharge-select-6" required>
                                </div>
                                <h3>₹1000</h3>
                            </label>
                        </div>

                        <div class="col-4" @click="setAmount(5000)">
                            <label class="reacharge-select reacharge-select2" for="reacharge-select-3">
                                <div class="form-check reacharge-select-form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="reacharge-select-3" required>
                                </div>

                                <h3>₹5000</h3>
                                <!-- <p>Select</p> -->
                            </label>
                        </div>
                        <div class="col-4" @click="setAmount(10000)">
                            <label class="reacharge-select reacharge-select2" for="reacharge-select-4">
                                <div class="form-check reacharge-select-form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="reacharge-select-4" required>
                                </div>

                                <h3>₹10000</h3>
                            </label>
                        </div>

                        <div class="col-4" @click="setAmount(50000)">
                            <label class="reacharge-select reacharge-select2" for="reacharge-select-5">
                                <div class="form-check reacharge-select-form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="reacharge-select-5" required>
                                </div>

                                <h3>₹50000</h3>

                            </label>
                        </div>
                        <img src="../assets/img/paymentpage.png" class="Imagepaymet" alt="Payment Methods Image">
                        <p class="paymentText">All Payments secured with YUVIWIN</p>
                        <div class="submit-btn">
                            <input type="submit" style="background: aliceblue;"
                                :class="{ 'recharge-active': allowRecharge() }" @click="recharge()" value="Recharge">
                        </div>
                    </div>
                </div>
            </div>
            <!-- End reacharge select box -->

            <!-- End withdraw 1 box design -->

            <!-- Start bottom bar -->
            <div class="bottom-bar">
                <div class="bottmo-bar-link">
                    <router-link :to="{ name: 'Home' }"><i class="fa fa-home" aria-hidden="true"></i> YUVIWIN</router-link>
                </div>

                <div class="bottmo-bar-link">
                    <router-link :to="{ name: 'Invite' }"><i class="fa fa-user-plus" aria-hidden="true"></i>
                        Invite</router-link>
                </div>

                <div class="bottmo-bar-link active">
                    <router-link :to="{ name: 'Recharge' }"><i class="fa fa-credit-card" aria-hidden="true"></i>
                        Recharge</router-link>
                </div>

                <div class="bottmo-bar-link">
                    <router-link :to="{ name: 'Profile' }"><i class="fa fa-user" aria-hidden="true"></i>
                        Profile</router-link>
                </div>
            </div>
            <!-- End bottom bar -->
        </div>
    </section>
</template>
<style scoped>
.paymentText{
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    font-size: 1.6rem;
    line-height: 3;
}
.Imagepaymet{
    padding: 2rem 0;
}
.recharge-active {
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
            },
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.user.username = this.Users.username;
        });
    },
    methods: {
        allowRecharge() {
            return this.ValidateAmount();
        },
        ValidateAmount() {
            if (this.user.amount == null) {
                return false;
            }
            if (typeof this.user.amount === 'string') {
                this.user.amount = this.user.amount.replace(/\D/g, '');
            }
            if (this.user.amount < 100) {
                this.$refs.amount.style.borderColor = 'red';
            } else {
                this.$refs.amount.style.borderColor = '#22487c';
            }
            return /^[0-9]+$/.test(this.user.amount) && this.user.amount >= 100;
        },
        setAmount(amount) {
            this.user.amount = amount;
        },
        recharge() {
            if (this.allowRecharge()) {
                this.$router.push({
                    name: 'Deposit',
                    query: {
                        amount: this.user.amount,
                        user: this.user.username,
                    }
                });
            } else {
                this.ealert('Please Enter valid Amount.');
            }
        }
    },
}
</script>
