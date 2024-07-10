<template>
    <!-- Start first page -->
    <section class="home-section">
        <div class="center">
            <div class="top-nav">
                <div class="profile-toggle">
                    <router-link :to="{ name: 'Profile' }"><img src="../assets/img/profile-icon.png"></router-link>
                    <div class="prodile-toggle-detail">
                        <h4>{{ this.username }}</h4>
                        <p>#{{ this.userId }}</p>
                    </div>
                </div>

                <div class="logo"><img src="../assets/img/login-box-logo.png"></div>

                <div class="recharge-btn">
                    <router-link :to="{ name: 'Recharge' }"><img src="../assets/img/money-icon.png"> Recharge</router-link>
                </div>
            </div>
            <!-- End top nav -->

            <!-- Start withdraw box -->
            <div class="withdraw-box">
                <p style="">Available Balance</p>
                <h3>&#8377; {{ this.balance }}</h3>
                <img src="../assets/img/withdraw-bg.png" class="widthdraw-bg">
                <img src="../assets/img/coin.png" class="coin">
                <img src="../assets/img/down-shape.png" class="down-shape">
                <img src="../assets/img/shape1.png" class="withdraw-shape">
                <img src="../assets/img/shape1.png" class="withdraw-shape2">

                <div class="withdraw-btn" @click="this.$router.push({ name: 'Withdraw' });">
                    <router-link :to="{ name: 'Withdraw' }">Get it Now Withdraw</router-link>
                </div>
            </div>
            <!-- End withdraw-box -->

            <!-- Start download app banner design -->
            <div class="download-app-img" @click="this.downloadApk()">
                <img src="../assets/img/download-app-banner.png">
            </div>
            <!-- End download app banner design -->

            <!-- Start flex buttons -->
            <div class="flex-buttons">
                <router-link :to="{ name: 'Rewards' }"><img src="../assets/img/task-icon.png">Task Reward</router-link>
                <router-link :to="{ name: 'CheckIn' }"><img src="../assets/img/check-list.png"> Check In</router-link>

            </div>
            <!-- End flex-buttons -->

            <!-- Start game icon design -->
            <div class="game-icon-box">
                <div class="row">
                    <div class="col-6 game-img">
                        <router-link :to="{ name: 'FastParty' }"><img src="../assets/img/game1.png"></router-link>
                    </div>
                    <div class="col-6 game-img">
                        <router-link :to="{ name: 'Parity' }"><img src="../assets/img/game3.png"></router-link>
                    </div>
                    <div class="col-6 game-img">
                        <router-link :to="{ name: 'Circle' }"><img src="../assets/img/game4.png"></router-link>
                    </div>
                    <div class="col-6 game-img">
                        <router-link :to="{ name: 'JetGame' }"><img src="../assets/img/game2.png"></router-link>
                    </div>

                    <!-- <div class="col-6 game-img">
                        <router-link onclick="alert('Comming Soon')"><img src="../assets/img/game2.png"></router-link>
                    </div> -->
                </div>
            </div>
            <!-- End game icon design -->
            <div class="win__box active" v-if="this.user.isbonus">
                <img src="../assets/img/winbon.png" alt="win">
                <div class="content">
                    <h2>Bonus</h2>
                    <p>Dear User you have new bonus &#8377; {{ this.user.bonus }}.</p>
                    <div class="btn__group">
                        <button @click="readBonus('view')" class="accept__btn">View </button>
                        <a href="javascript:void(0)" @click="readBonus('clear')" class="learn__more-btn">Clear</a>
                    </div>
                </div>
            </div>
            <!-- Start bottom bar -->
            <div class="bottom-bar">
                <div class="bottmo-bar-link active">
                    <router-link :to="{ name: 'Home' }"><i class="fa fa-home" aria-hidden="true"></i> YUVIWIN</router-link>
                </div>

                <div class="bottmo-bar-link">
                    <router-link :to="{ name: 'Invite' }"><i class="fa fa-user-plus" aria-hidden="true"></i>
                        Invite</router-link>
                </div>

                <div class="bottmo-bar-link">
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
    <!-- End first page -->
</template>

<style scoped>
/* COOKIE CONSENT BOX */

.logo img {
    top: 1px;
    width: 14rem;
    height: 64px;
    position: absolute;
    left: 30%;
}

.win__box {
    --clr-primary: #c1610c;
    --clr-accent: #615f5f;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    max-width: 400px;
    width: 100%;
    border-radius: 15px;
    text-align: center;
    padding: 25px 25px 30px;
    /* transform: translateX(0px); */
    background-color: #ffffff;
    z-index: 1000;
}

.win__box.hide {
    display: none;
    /* transform: translateX(-500px); */
}

.win__box.active {
    display: flex;
}

.win__box>img {
    max-width: 90px;
}

.win__box .content {
    margin-top: 10px;
}

.win__box .content h2 {
    font-size: 24px;
    font-weight: 700;
}

.win__box .content p {
    font-size: 15px;
    margin: 5px 0 20px;
    color: var(--clr-accent);
}

.win__box .content .btn__group {
    display: flex;
    justify-content: center;
    align-items: center;
}

.win__box .content .btn__group * {
    margin: 0 10px;
}

.win__box .content .btn__group .accept__btn {
    padding: 10px 20px;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid var(--clr-primary);
    color: #ffffff;
    background-color: var(--clr-primary);
}

.win__box .content .btn__group .accept__btn:hover {
    background-color: #ffffff;
    color: var(--clr-primary);
}

.win__box .content .btn__group .learn__more-btn {
    text-decoration: none;
    color: var(--clr-primary);
}

.win__box .content .btn__group .learn__more-btn:hover {
    text-decoration: underline;
}

/* For medium devices */
@media screen and (max-width: 600px) {
    .win__box {
        padding: 20px 10px;
    }
}

/* For small devices */
@media screen and (max-width: 400px) {
    .win__box {}

    .win__box .content .btn__group {
        flex-direction: column;
        gap: 15px;
    }
}

/* For extra-small devices */
@media screen and (max-width: 320px) {
    .win__box {}
}
</style>
<script>

export default {
    data() {
        return {
            user: {
                username: null,
                bonus: 0,
                isbonus: false
            }
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.getBonus()
        });
    },
    watch() {
        const winBox = document.getElementsByClassName('win__box');
        if (winBox.classList.contains('active')) {
            document.body.classList.add('no-scroll');
            // winBox.style.display = 'block';
        } else {
            // winBox.style.display = 'none';
        }
    },
    methods: {
        async getBonus() {
            const res = await this.callApi('post', 'api/user/v1/tbonus');
            if (res.status === 200) {
                this.user.bonus = res.data.bonus;
                this.user.isbonus = res.data.isbonus;
            } else {
                if (res.status === 400) {
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
        async readBonus(type) {
            const res = await this.callApi('post', '/api/user/v1/markbon');
            if (res.status === 200) {
                if (type == 'view') {
                    this.user.bonus = res.data.bonus;
                    this.user.isbonus = res.data.isbonus;
                    this.$router.push({
                        name: 'InviteDetails',
                    });
                } else if (type == 'clear') {
                    this.user.bonus = res.data.bonus;
                    this.user.isbonus = res.data.isbonus;
                }

            } else {
                if (res.status === 400) {
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
};

</script>
