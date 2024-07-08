<template>
      <section class="home-section">
      <div class="center" style="min-height: 100vh!important;">
          <div class="top-nav-inivte">
                <a @click="$router.push({name: 'Invite'})"><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180" style="color: #fff;"></i></a>
              <a href="javascript:void(0)">Invite Link</a>
              <a  @click="this.telegram()" href="javascript:void(0)"><img src="../assets/img/telegram-icon.png"></a>
          </div>
        <!-- End top nav -->

        <!-- Start reward box -->
        <div class="reward-box">
            <img src="../assets/img/reward-box-img.png">
            <h4>*The Invitee will get &#8377; 1 reward my invite link</h4>
            <a href="#" class="copy-link" id="reflink">https://yuviwin.com/login?LTCKE={{ this.refcode }}</a>
            <div class="copy-link-btn" @click="copyLink()">
              <a href="javascript:void(0);">Copy link and share</a>
            </div>
        </div>
        <!-- End reward box -->

        <!-- Start refer box -->
        <div class="refer-box">
            <img src="../assets/img/logo2.png">
            <div class="refer-box-img-main">
                <img src="../assets/img/refer-earn.png">
            </div>

            <div class="refer-earn-icons">
                <a href="javascript:void(0)"><img src="../assets/img/refer-icon1.png"> Send your unique refferal link</a>
                <a href="javascript:void(0)"><img src="../assets/img/refer-icon2.png"> User register with your bank</a>
                <a href="javascript:void(0)"><img src="../assets/img/refer-icon3.png"> User complete the first deposit</a>
                <a href="javascript:void(0)"><img src="../assets/img/refer-icon4.png"> You Receive &#8377; 1</a>
            </div>
        </div>
        <!-- End rafer box -->


      </div>
  </section>
</template>
<script>
export default{
    data(){
        return{
            refcode: null,
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.refcode = this.Users.usercode;
        });
    },
    methods:{
        copyLink(){
            var inputc = document.body.appendChild(document.createElement("input"));
            inputc.value = document.getElementById("reflink").textContent;
            inputc.focus();
            inputc.select();
            document.execCommand('copy');
            inputc.parentNode.removeChild(inputc);
            this.salert("Copied Successfully")
        }
    }
}
</script>
