<template>
    <section class="home-section">
        <div class="center parity-game" style="min-height: 100vh!important;">
            <div class="top-nav-inivte">
                <a @click="$router.push({ name: 'Recharge' })"><i class="fa-solid fa-arrow-left" style="color: #fff;"></i></a>
                <a href="javascript:void(0)">Deposit Help</a>
                <a  @click="this.telegram()" href="javascript:void(0)"><img src="../assets/img/telegram-icon.png"></a>
            </div>
            <div class="d-help">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation" >
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#phonepe"
                            type="button" role="tab" aria-controls="phonepe" aria-selected="true">
                            Phonepe
                        </button>
                    </li>
                    <li class="nav-item" role="presentation" >
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#paytm"
                            type="button" role="tab" aria-controls="paytm" aria-selected="false">
                            paytm
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#gpay"
                            type="button" role="tab" aria-controls="gpay" aria-selected="false">
                            Gpay
                        </button>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="phonepe" role="tabpanel" aria-labelledby="phonepe-tab">
                        <div class="h-content">
                            <video controls  autoplay muted loop style="width: 100%;height:450px;" controlsList="nodownload">
                                <source :src="videoSourcePhonepe">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="paytm" role="tabpanel" aria-labelledby="paytm-tab">
                        <div class="h-content">
                            <video controls autoplay muted loop  style="width: 100%;height:450px;" controlsList="nodownload">
                                <source :src="videoSourcePaytm">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="gpay" role="tabpanel" aria-labelledby="gpay-tab">
                        <div class="h-content">
                            <video controls autoplay muted loop style="width: 100%;height:450px;" controlsList="nodownload">
                                <source :src="videoSourcegpay">
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.d-help {
    padding: var(--padding);
    background-position: center;
    margin: 1.5rem 2.8%;
    margin-top: 7rem;
}

.d-help .nav-pills {
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.4rem;
    height: 45px;
}

.d-help .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background: var(--yellow-color);
    height: 35px;
    width: 120px;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: .2px;
    color: var(--bg-color);
}

.d-help .nav-pills .nav-link {
    height: 35px;
    width: 120px;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: .2px;
    color: var(--white-color);
}

.h-content {
    padding: var(--padding);
}
</style>
<script>
export default {
    data() {
        return {
            videoSourcePhonepe: '/uploads/video/phonepe.mp4',
            videoSourcePaytm: '/uploads/video/paytm.mp4',
            videoSourcegpay: '/uploads/video/gpay.mp4',
        }
    },
    methods: {
    }
}
</script>
