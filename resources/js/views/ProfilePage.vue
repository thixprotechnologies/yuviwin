<template>
  <section class="home-section">
    <div class="center">
      <div class="top-nav-inivte">
        <a href="javascript:void(0)">Profile</a>
        <router-link :to="{ name: 'Home' }"
          ><i class="fa fa-home" aria-hidden="true"></i
        ></router-link>
      </div>
      <!-- End top nav -->

      <!-- Start profile setting design -->
      <div class="main-profile-setting">
        <div class="main-profile-setting-head">
          <div class="main-profile-setting-head-first">
            <img src="../assets/img/profile-demo.png" />
            <div>
              <h4>Mob: {{ this.username }}</h4>
              <p>ID: {{ this.userId }}</p>
            </div>
          </div>

          <div class="main-profile-setting-head-setting-btn">
            <router-link :to="{ name: 'ProfileEdit' }"
              ><i class="fa fa-user-plus" aria-hidden="true"></i>
              Edit</router-link
            >
          </div>
        </div>

        <div class="balance-Information-box">
          <h4>Balance Information</h4>
          <div class="row">
            <div class="col-6">
              <div class="balance-box">
                <div class="balance-box-border-line1"></div>
                <img src="../assets/img/balance-icon1.png" />
                <div class="balance-text">
                  <h5>Available Balance</h5>
                  <p>&#8377; {{ this.balance }}</p>
                </div>
              </div>
            </div>
            <!-- 2 -->
            <div class="col-6">
              <div class="balance-box2">
                <div class="balance-box-border-line2"></div>
                <img src="../assets/img/balance-icon2.png" />
                <div class="balance-text">
                  <h5>Available Bonus</h5>
                  <p>&#8377; {{ this.bonus }}</p>
                </div>
              </div>
            </div>
            <!-- <div class="col-6">
                    <div class="balance-box balance-box3">
                        <div class="balance-box-border-line3"></div>
                        <img src="../assets/img/balance-icon3.png">
                        <div class="balance-text">
                            <h5>Wagering Remaining</h5>
                            <p>₹0.00</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="balance-box">
                        <div class="balance-box-border-line1"></div>
                        <img src="../assets/img/balance-icon4.png">
                        <div class="balance-text">
                            <h5>Balance Hold</h5>
                            <p>₹0.00</p>
                        </div>
                    </div>
                </div> -->
          </div>
        </div>
      </div>

      <!-- Start download app banner design -->
      <div class="profile-setting-download-app-img" @click="this.downloadApk()">
        <img src="../assets/img/download-app-banner.png" />
      </div>
      <!-- End download app banner design -->

      <!-- Start profile setting list -->
      <div class="profile-setting-list">
        <div class="list" @click="$router.push({ name: 'RedeemCode' })">
          <router-link :to="{ name: 'RedeemCode' }" class="list-of-img-part"
            ><img src="../assets/img/rank-icon3.png" />Redeem Code</router-link
          >
          <router-link :to="{ name: 'RedeemCode' }" class="list-of-icon-part"
            ><img src="../assets/img/rightArrow.png"
          /></router-link>
        </div>
        <div class="list" @click="$router.push({ name: 'GameOrder' })">
          <router-link :to="{ name: 'GameOrder' }" class="list-of-img-part"
            ><img src="../assets/img/profileSetting-list1.png" /> Order
            Record</router-link
          >
          <router-link :to="{ name: 'GameOrder' }" class="list-of-icon-part"
            ><img src="../assets/img/rightArrow.png"
          /></router-link>
        </div>

        <div class="list" @click="$router.push({ name: 'FinancialDetails' })">
          <router-link
            :to="{ name: 'FinancialDetails' }"
            class="list-of-img-part"
            ><img src="../assets/img/profileSetting-list2.png" /> Financial
            Details</router-link
          >
          <router-link
            :to="{ name: 'FinancialDetails' }"
            class="list-of-icon-part"
            ><img src="../assets/img/rightArrow.png"
          /></router-link>
        </div>

        <div class="list" @click="redirectToTelegram">
          <a href="#" class="list-of-img-part"
            ><img src="../assets/img/profileSetting-list3.png" /> Follow Us</a
          >
          <a href="#" class="list-of-icon-part"
            ><img src="../assets/img/rightArrow.png"
          /></a>
        </div>

        <div class="list" @click="$router.push({ name: 'Complains' })">
          <router-link :to="{ name: 'Complains' }" class="list-of-img-part"
            ><img src="../assets/img/profileSetting-list4.png" />
            Complains</router-link
          >
          <router-link :to="{ name: 'Complains' }" class="list-of-icon-part"
            ><img src="../assets/img/rightArrow.png"
          /></router-link>
        </div>

        <div class="list" @click="this.downloadApk()">
          <a href="javascript:void(0)" class="list-of-img-part"
            ><img src="../assets/img/profileSetting-list5.png" /> Download</a
          >
          <a href="javascript:void(0)" class="list-of-icon-part"
            ><img src="../assets/img/rightArrow.png"
          /></a>
        </div>

        <div class="logout-btn" @click="this.logout()">
          <button type="button">
            <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
          </button>
        </div>
      </div>
      <!-- End profile setting list -->

      <!-- End profile setting design -->

      <!-- Start bottom bar -->
      <div class="bottom-bar">
        <div class="bottmo-bar-link">
          <router-link :to="{ name: 'Home' }"
            ><i class="fa fa-home" aria-hidden="true"></i> YUVIWIN</router-link
          >
        </div>

        <div class="bottmo-bar-link">
          <router-link :to="{ name: 'Invite' }"
            ><i class="fa fa-user-plus" aria-hidden="true"></i>
            Invite</router-link
          >
        </div>

        <div class="bottmo-bar-link">
          <router-link :to="{ name: 'Recharge' }"
            ><i class="fa fa-credit-card" aria-hidden="true"></i>
            Recharge</router-link
          >
        </div>

        <div class="bottmo-bar-link active">
          <router-link :to="{ name: 'Profile' }"
            ><i class="fa fa-user" aria-hidden="true"></i> Profile</router-link
          >
        </div>
      </div>
      <!-- End bottom bar -->
    </div>
  </section>
</template>
<script>
export default {
  data() {},
  mounted() {
    this.GetUser();
  },
  methods: {
    redirectToTelegram() {
      window.location.href = "https://t.me/Yuviwin_com";
    },
  },
};
</script>
