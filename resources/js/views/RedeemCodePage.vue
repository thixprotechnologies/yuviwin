<template>
  <section class="home-section">
    <div class="center">
      <div class="top-nav-inivte">
        <router-link :to="{ name: 'Home' }"
          ><i class="fa-solid fa-home"></i
        ></router-link>
        <a href="javascript:void(0)">Redeem Code</a>
        <a @click="this.telegram()" href="javascript:void(0)"
          ><img src="../assets/img/telegram-icon.png"
        /></a>
      </div>
      <!-- End top nav -->
      <div>
        <img
          src="../assets/img/giftbanner.png"
          style="margin-top: 70px; height: 200px; width: 100%"
        />

        <div class="redeem-code-box">
          <div class="message">
            <span>Hi</span>
            <span>We have a gift for you</span>
          </div>
          <!-- <label for="gift-code">Please enter the gift code below</label> -->
          <input
            v-model="giftCode"
            type="text"
            id="gift-code"
            class="gift-code"
            placeholder="Please enter gift code"
          />
          <button class="receive-btn" @click="receiveGift">Receive</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#gift-code {
  border-radius: 50px;
  background-color: black;
}

.redeem-code-box {
  position: relative;
  height: 240px;
  width: 94%;
  border-radius: 13px;
  background: #061831;
  margin: 13px;
  padding: 20px;
  color: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.983rem;
}

.message {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
}

.message span {
  margin: 5px 0;
}

.redeem-code-box label {
  margin-bottom: 10px;
  font-weight: bold;
  color: lightgrey;
  text-align: left;
  width: 100%;
}

.redeem-code-box input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #333;
  color: lightgrey;
}

.redeem-code-box button {
  background: linear-gradient(45deg, #ffd76e, #f9ab13);
  color: #000000;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}

.redeem-code-box button:hover {
  background-color: #e68a00;
}
</style>

<script>
export default {
  data() {
    return {
      giftCode: "",
      user: {
        username: "",
      },
    };
  },
  mounted() {
    this.GetUser().then(() => {
      this.user.username = this.Users.username;
    });
  },
  methods: {
    async receiveGift() {
      var formdata = new FormData();
      formdata.append("giftCode", this.giftCode);
      formdata.append("username", this.user.username);
      const res = await this.callApi(
        "post",
        "/api/user/v1/claim_giftcode",
        formdata
      );
      if (res.status === 200) {
        this.salert(res.data.message);
      } else {
        if (res.status === 401) {
          this.logout();
        } 
        this.ealert(res.data.message);
      }
    },
    telegram() {
      // Your method to handle the telegram click
    },
  },
};
</script>
