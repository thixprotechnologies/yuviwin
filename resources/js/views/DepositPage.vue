<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a @click="$router.push({ name: 'Recharge' })"><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"
                        style="color: #fff;"></i></a>
                <a href="javascript:void(0)">Recharge Deposit</a>
                <router-link :to="{ name: 'DepositHelp' }" style="font-size: 1.4rem;">Help</router-link>
            </div>
            <!-- End top nav -->

            <!-- Start payment method box -->
            <div class="payment-method-mainBox">
                <div class="payment-method-box">
                    <img src="../assets/img/paymentMethod-icon.png">
                    <p>Recharge Amount</p>
                    <h4>&#8377; {{ user.amount }}</h4>
                </div>
            </div>

            <!-- Withdraw method box -->
            <div class="Withdraw-method-box">
                <h4>Select Payment Method</h4>
                <div id="form">
                    <p style="font-size: 1.4rem; color: #fff;">Manual Methods</p>
                    <!-- 2 -->
                    <label for="flexRadioDefault2" class="upiLabel" @click="setType('PhonePe')">
                        <div class="Withdraw-method-box-amount-box">
                            <div class="Withdraw-method-box-amount-box-img">
                                <img src="../assets/img/phonepe.png" style="width: 40px;">
                                <div class="line"></div>
                                <p>Phonepe</p>
                            </div>
                            <div class="Withdraw-method-box-amount-box-add-upi-btn">

                                <div class="form-check" style="position: static!important; padding-top: 0!important;">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" required>
                                </div>
                            </div>
                        </div>
                    </label>

                    <!-- 3 -->
                    <label for="flexRadioDefault3" class="upiLabel" @click="setType('Paytm')">
                        <div class="Withdraw-method-box-amount-box">
                            <div class="Withdraw-method-box-amount-box-img">
                                <img src="../assets/img/paytm.png" style="width: 40px;">
                                <div class="line"></div>
                                <p>Paytm</p>
                            </div>
                            <div class="Withdraw-method-box-amount-box-add-upi-btn">

                                <div class="form-check" style="position: static!important; padding-top: 0!important;">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault3" required>
                                </div>
                            </div>
                        </div>
                    </label>

                    <!-- 4 -->
                    <label for="flexRadioDefault4" class="upiLabel" @click="setType('Gpay')">
                        <div class="Withdraw-method-box-amount-box">
                            <div class="Withdraw-method-box-amount-box-img">
                                <img src="../assets/img/googlepay.png" style="width: 40px;">
                                <div class="line"></div>
                                <p>GPay</p>
                            </div>
                            <div class="Withdraw-method-box-amount-box-add-upi-btn">

                                <div class="form-check" style="position: static!important; padding-top: 0!important;">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault4" required>
                                </div>
                            </div>
                        </div>
                    </label>
                    <!-- <p style="font-size: 1.4rem; color: #fff;">Auto Methods</p>
                    <label for="flexRadioDefault5" class="upiLabel" @click="setType('upigateway')">
                        <div class="Withdraw-method-box-amount-box">
                            <div class="Withdraw-method-box-amount-box-img">
                                <img src="../assets/img/googlepay.png" style="width: 40px;">
                                <div class="line"></div>
                                <p>upigateway</p>
                            </div>
                            <div class="Withdraw-method-box-amount-box-add-upi-btn">

                                <div class="form-check" style="position: static!important; padding-top: 0!important;">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault5" required>
                                </div>
                            </div>
                        </div>
                    </label>
                    <label for="flexRadioDefault6" class="upiLabel" @click="setType('cxmoney')">
                        <div class="Withdraw-method-box-amount-box">
                            <div class="Withdraw-method-box-amount-box-img">
                                <img src="../assets/img/googlepay.png" style="width: 40px;">
                                <div class="line"></div>
                                <p>cxmoney</p>
                            </div>
                            <div class="Withdraw-method-box-amount-box-add-upi-btn">

                                <div class="form-check" style="position: static!important; padding-top: 0!important;">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault6" required>
                                </div>
                            </div>
                        </div>
                    </label> -->
                    <!-- 1
                  <label for="flexRadioDefault5" class="upiLabel">
                      <div class="Withdraw-method-box-amount-box">
                        <div class="Withdraw-method-box-amount-box-img">
                          <img src="../assets/img/upi.png">
                          <div class="line"></div>
                          <p>UPI</p>
                        </div>
                        <div class="Withdraw-method-box-amount-box-add-upi-btn">

                          <div class="form-check" style="position: static!important; padding-top: 0!important;">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" required>
                          </div>
                        </div>

                      </div>
                  </label> -->
                </div>
            </div>

            <div class="tips-box">
                <h5>Tips :</h5>
                <p>Welcome to use the quick recharge mode, please use APP to complete the payment of ₹500</p>
                <p>The transaction funds are guaranteed by the Rdx platform throughout the process, which is very safe.</p>
                <p>Please do not include any words in remarks.</p>
            </div>
            <!-- End withdraw box -->
            <!-- End payment method box -->
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            user: {
                username: null,
                amount: null,
                type: null
            },
        }
    },
    created() {
    },
    mounted() {
        if (this.$route.query && this.$route.query.user && this.$route.query.amount) {
            this.user.username = this.$route.query.user;
            this.user.amount = this.$route.query.amount;
            this.GetUser().then(() => {
                this.user.username = this.Users.username;
            });
        } else {
            this.$router.push({ name: 'Recharge' });
        }
    },
    methods: {
        setType(type) {
            this.user.type = type;
            if (type == 'upigateway') {
                window.location = `/payment/online/${this.user.username}/${this.user.amount}/${this.user.type}`;
            }
            else if (type == 'cxmoney') {
                window.location = `/payment/online/${this.user.username}/${this.user.amount}/${this.user.type}`;
            }else{
                this.$router.push({
                name: 'MakePayment',
                params: {
                    amount: this.user.amount,
                    user: this.user.username,
                    type: this.user.type,
                }
            });
            }

        }
    }
}
</script>
