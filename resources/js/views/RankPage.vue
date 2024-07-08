<template>
      <section class="home-section">
      <div class="center">
          <div class="top-nav-inivte">
              <router-link :to="{ name: 'Invite'}"><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180" style="color: #fff;"></i></router-link>
              <a href="javascript:void(0)">Ranking Rewards</a>
              <a href="#"><img src="../assets/img/telegram-icon.png"></a>

          </div>
        <!-- End top nav -->

        <!-- Start ranking reward design -->
        <div class="ranking-reward-box-outer">
            <div class="ranking-reward-box">
              <div class="ranking-reward-box-head">
                <img src="../assets/img/ranking-reward-decoration1.png">
                <div>
                    <h4>TOP 10 REWARDS</h4>
                    <p>Rewards will be given at 10:44 everyday</p>
                </div>
                <img src="../assets/img/ranking-reward-decoration2.png">
              </div>
              <div class="ranking-reward-inner-main">
                <div class="row">
                    <div v-for="(rows,index) in ranks.slice(0, 3)" :key="rows.id" :rowsrec="rows" :class="{ 'col-4': true, 'mt-5': index === 0 || index === 2 }">
                      <div class="ranking-reward-inner-main-BOX">
                        <img  v-if="rows.ranks == 1" src="../assets/img/rank-reward-icon1.png">
                        <img v-if="rows.ranks == 2" src="../assets/img/rank-reward-icon2.png">
                        <img v-if="rows.ranks == 3" src="../assets/img/rank-reward-icon3.png">
                        <img src="../assets/img/profile-demo.png">
                        <h4 v-if="rows.username == this.Users.usercode">You </h4>
                        <h4 v-if="rows.username != this.Users.usercode">#{{ rows.username }}</h4>
                        <h5>₹+{{ rows.amount }}</h5>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div class="ranking-reward-commission-box">
            <!-- <p>Daily commission reach ₹5,00,000 to be on the list.</p> -->
            <div v-for="(rows,index) in ranks.slice(3)" :key="rows.id" :rowsrec="rows" class="ranking-reward-commission-box-inner">
              <div class="ranking-reward-commission-box-inner-1">
                <div class="ranking-reward-commission-box-inner-1-flex1">
                  <h6>{{rows.ranks}}</h6>
                  <div class="ranking-reward-commission-box-inner-1-flex1-img">
                      <img src="../assets/img/profile-demo.png">
                      <div class="">
                        <h5 v-if="rows.username == this.Users.usercode">You </h5>
                        <h5 v-if="rows.username != this.Users.usercode">#{{ rows.username }}</h5>
                      </div>
                  </div>
                </div>
              </div>

              <div class="ranking-reward-commission-box-inner-1-flex2">
                  <h4>+₹{{ rows.amount }}<i class="fa fa-caret-down" aria-hidden="true"></i></h4>
                </div>
            </div>


        </div>
        <!-- End ranking reward design -->
      </div>
  </section>
</template>
<script>
export default {
    data() {
        return {
            ranks:'',
        }
    },
    mounted() {
            this.GetUser().then(() => {
                this.checkData();
            });
    },
    methods: {
        async checkData() {
            const res = await this.callApi('post', '/api/user/v1/ranks');
            if (res.status === 200) {
              this.ranks = res.data.data;
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
    }
}
</script>
