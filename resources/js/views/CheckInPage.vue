<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="javascript:void(0)">Check In</a>
                <a @click="$router.push({ name: 'Home' })"><i class="fa-solid fa-arrow-right-from-bracket" style="color: #fff;"></i> </a>
            </div>
            <!-- End top nav -->

            <!-- Start check in box -->
            <div style="padding: var(--padding);">
                <div class="checkIn-box">
                    <div class="row">
                        <div class="col-4" v-for="(dayData, index) in checkindata" :key="index">
                            <div class="check-box" :class="{ 'checked': !dayData.status }">
                                <img src="../assets/img/check.png">
                                <p>Day {{ dayData.day }}</p>
                                <h5>+{{ dayData.amount }}</h5>
                            </div>
                        </div>
                        <div class="check-in-btn" @click="checkIn()">
                            <button type="button">Check In</button>
                        </div>
                    </div>
                </div>

                <div class="check-box-reward-gift">
                    <p>Check in for 7 Consecutive days to get treasure box, and receive mysterious prizes</p>
                    <img src="../assets/img/check-reward-gift.png">
                </div>
            </div>
            <!-- End check in box -->
        </div>
    </section>
</template>
<style scoped>
.check-box.checked {
    background: radial-gradient(#f06550, #d28b35) !important;
}
</style>

<script>
export default {
    data() {
        return {
            checkindata: {},
            user: {
                username: null,
                days: 0,
                status: false,
            }
        }
    },
    created() {
        this.GetUser().then(() => {
            this.user.username = this.Users.username;
            this.checkinDetails();
        });
    },
    // mounted: function () {
    //     this.GetUser().then(() => {
    //         this.user.username = this.Users.username;
    //         this.checkinDetails();
    //     });
    // },
    methods: {
        async checkinDetails() {
            var data = new FormData();
            data.append("username", this.user.username);
            const res = await this.callApi('post', 'api/user/v1/checkInDetials', data);
            if (res.status === 200) {
                this.checkindata = res.data.checkInData;
                this.user.days = res.data.days;
                this.user.status = res.data.status;
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
        async checkIn() {
            if (this.user.status == true) {
                const formdata = new FormData();
                formdata.append('username', this.user.username);
                const res = await this.callApi('post', 'api/user/v1/checkIn', formdata);
                if (res.status === 200) {
                    if (res.data.status == true) {
                        this.salert(res.data.message);
                    } else {
                        this.walert(res.data.message);
                    }
                    this.checkinDetails();
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
                this.ialert('Come Again tomarrow for check bonus');
            }
        }
    }
}
</script>
