<template>
     <section class="home-section">
      <div class="center">
          <div class="top-nav-inivte">
            <router-link :to="{ name: 'Invite'}"><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180" style="color: #fff;"></i></router-link>
              <a href="javascript:void(0)">Privilege</a>
              <a href="#"><img src="../assets/img/telegram-icon.png"></a>
          </div>
        <!-- End top nav -->

        <!-- Start Privilege box design -->
        <div class="Privilege-boxes">
            <div class="Privilege-box">
              <h4>3 Level Invitess, each user will generate commission</h4>
              <img src="../assets/img/Privilege-users.png">
            </div>
        </div>
        <!-- End Privilege box design -->

        <div class="my-order-box">
            <div class="my-order-box-inner">
              <div class="my-order-box-text">
                <p>My Order Commission</p>
                <h4>&#8377; {{  bonus }}</h4>
                <div class="my-order-box-text-line1"></div>
            </div>

            <router-link :to="{name:'Invite'}" class="list-of-icon-part"><img src="../assets/img/rightArrow.png"></router-link>
            </div>
          </div>

          <div class="refer-get-box">
              <div class="refer-get-box-inner">
                  <p class="reward-price">Reward &#8377; 1 for each registered user</p>
                  <img src="../assets/img/refer-get-heading.png">

                  <div class="refer-get-reward">
                    <h5>&#8377; 1</h5>
                    <p>Upon your subordinate’s Account Create, you’ll receive &#8377; 1.</p>
                  </div>
              </div>

              <div class="Revenue-box">
                <div class="Revenue-box-inner">
                  <div class="Revenue-box-text">
                    <p>My Invitation Revenue</p>
                    <h4>&#8377; {{  totalIncome }}</h4>
                    <div class="Revenue-box-text-line1"></div>
                </div>

                <router-link :to="{name:'InviteDetails'}" class="list-of-icon-part"><img src="../assets/img/rightArrow.png"></router-link>
                </div>
              </div>
          </div>

      </div>
  </section>
</template>
<script>
import anime from "animejs";

export default {
    data() {
        return {
            totalIncome: 0,
            todayIncome:0,
            reftoday:0,
            reftotal:0
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.InviteDetails();
        });
    },
    methods: {
        setCountIncome(val) {
            const obj = { n: this.count };
            anime({
                targets: obj,
                n: parseFloat(val).toFixed(2),
                duration: 500,
                easing: "linear",
                update: () => {
                    this.totalIncome = parseFloat(obj.n).toFixed(2);
                },
            });
        },
        setCounttodayIncome(val) {
            const obj = { n: this.count };
            anime({
                targets: obj,
                n: parseFloat(val).toFixed(2),
                duration: 500,
                easing: "linear",
                update: () => {
                    this.todayIncome = parseFloat(obj.n).toFixed(2);
                },
            });
        },
        async InviteDetails() {
            const res = await this.callApi('post', '/api/user/v1/invite-details');
            if (res.status === 200) {
                this.totalIncome = res.data.total.toFixed(2);
                this.todayIncome = res.data.today.toFixed(2);
                this.reftoday = res.data.reftoday;
                this.reftotal = res.data.reftotal;
                this.setCountIncome(this.totalIncome);
                this.setCounttodayIncome(this.todayIncome);
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
</script>
