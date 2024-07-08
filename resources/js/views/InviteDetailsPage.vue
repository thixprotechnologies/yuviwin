<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <router-link :to="{ name: 'Invite' }"><i class="fa-solid fa-home"></i></router-link>
                <a href="javascript:void(0)">Invite Details</a>
                <a  @click="this.telegram()" href="#"><img src="../assets/img/telegram-icon.png"></a>
            </div>
            <!-- End top nav -->

            <!-- Start invite app banner design -->
            <div class="invite-banner-part" style="margin-top: 4rem;">
                <div class="invite-income-detail-box">
                    <div class="invite-income-detail-box-1">
                        <img src="../assets/img/invite-income-icon1.png">
                        <div>
                            <h5>Invited Today</h5>
                            <h3>{{ reftoday }}</h3>
                            <p>Total: {{ reftotal }}</p>
                        </div>
                    </div>

                    <div class="amount-line"></div>

                    <div class="invite-income-detail-box-1">
                        <img src="../assets/img/invite-income-icon2.png">
                        <div>
                            <h5>Today’s Income</h5>
                            <h3>&#8377; {{ todayIncome }}</h3>
                            <p>Total: &#8377; {{ totalIncome }}</p>
                        </div>
                    </div>
                </div>

                <div v-if="this.inviteRecords == ''" class="income-head-bottom">
                    <img src="../assets/img/income-detail-btn.png">
                    <div class="income-head-bottom-2">
                        <img src="../assets/img/income-head-bottom-img.png">
                        <h4>No Income</h4>
                        <div class="check-in-btn">
                            <button type="button" @click="$router.push({ name: 'MyLink' })">Invite Now</button>
                        </div>
                    </div>
                </div>
                <div v-if="this.inviteRecords != ''" v-for="rows  in  inviteRecords " :key="rows.id" :rowsrec="rows"
                    class="income">
                    <details>
                        <summary>
                            <div>
                                <h3><strong>Level {{ rows.level }} Bonus</strong></h3><span style="color: green;">&#8377; + {{
                                    rows.amount }}</span>
                            </div>
                        </summary>
                        <div>
                            <dl>
                                <div>
                                    <dt>Time</dt>
                                    <dd>{{ rows.created_at }}</dd>
                                </div>
                                <div>
                                    <dt>From</dt>
                                    <dd>{{ rows.giver }}</dd>
                                </div>
                                <div>
                                    <dt>Your Code</dt>
                                    <dd>{{ rows.usercode }}</dd>
                                </div>
                            </dl>
                        </div>
                    </details>
                </div>
                <div class="check-in-btn">
                    <button type="button" @click="$router.push({ name: 'MyLink' })">Invite Now</button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.income h1 {
    font-weight: 700;
    line-height: 1.125;
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
}

.income h2 {
    margin-top: 0.25em;
    color: #999;
    font-size: clamp(1.125rem, 2.5vw, 1.25rem);
}

.income h2+* {
    margin-top: 1.5em;
}

.income summary {
    position: relative;
    cursor: pointer;
    list-style: none;
}

.income summary::-webkit-details-marker {
    display: none;
}

.income summary div {
    display: flex;
    align-items: center;
}

.income summary h3 {
    display: flex;
    flex-direction: column;
}

.income summary small {
    color: #999;
    font-size: 0.875em;
    line-height: 2;
}

.income summary strong {
    font-weight: 700;
    font-size: 2rem;
}

.income summary span:first-child {
    width: 4rem;
    height: 4rem;
    border-radius: 10px;
    background-color: #f3e1e1;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin-right: 1.25em;
}

.income summary span:first-child svg {
    width: 2.25rem;
    height: 2.25rem;
}

.income summary span:last-child {
    font-weight: 700;
    margin-left: auto;
    font-size: 1.4rem;
}

.income summary:focus {
    outline: none;
}

.income summary .plus {
    color: #289672;
}

.income details {
    padding: var(--padding);
    padding-bottom: 0.5rem;
    background: linear-gradient(#ffffff17, transparent);
    color: #fff;
    border-bottom: 1px solid #b5bfd9;
}

.income details[open] {
    box-shadow: -3px 0 0 #b5bfd9;
}

.income details:first-of-type {
    border-top: 1px solid #b5bfd9;
}

.income details>div {
    padding: 1.6em 0 0;
    font-size: 0.875em;
}

.income dl {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.income dl dt {
    font-weight: 700;
    font-size: 1.2rem;
}

.income dl dd {
    font-size: 1.1rem;
}
</style>
<script>
import anime from "animejs";

export default {
    data() {
        return {
            totalIncome: 0,
            todayIncome: 0,
            reftoday: 0,
            reftotal: 0,
            inviteRecords: ''
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
                this.inviteRecords = res.data.records;
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
