<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <router-link :to="{ name: 'Home' }"><i class="fa-solid fa-home"></i></router-link>
                <a href="javascript:void(0)">Game Order</a>
                <a  @click="this.telegram()" href="javascript:void(0)"><img src="../assets/img/telegram-icon.png"></a>
            </div>
            <!-- End top nav -->

            <!-- Start invite app banner design -->
            <div class="bet-filter-box game-record">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#betFilter1" type="button" role="tab" aria-controls="betFilter1"
                            aria-selected="true">
                            Fast Parity
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#betFilter2"
                            type="button" role="tab" aria-controls="betFilter2" aria-selected="false">
                            Parity
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#betFilter4"
                            type="button" role="tab" aria-controls="betFilter4" aria-selected="false">
                            Circle
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#betFilter3"
                            type="button" role="tab" aria-controls="betFilter3" aria-selected="false">
                            Jet
                        </button>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="betFilter1" role="tabpanel" aria-labelledby="betFilter1-tab">
                        <div class="betFilter-table-box">
                            <div class="row hbetrecords" v-for=" rows  in  fastbetrecord " :key="rows.id" :rowsrec="rows">
                                <div class="col-6 pb-2 hd">{{ rows.period }}</div>
                                <div class="col-6 pb-2 hd txtend">{{ rows.time }}</div>
                                <div class="col-3  pb-2">Select</div>
                                <div class="col-2  pb-2">Point</div>
                                <div class="col-2  pb-2">Result</div>
                                <div class="col-5  pb-2 txtend">Amount</div>
                                <div class="col-3  pb-2">
                                    <div class="record">

                                        <div class="period-id">
                                            <div class="result " :class="getcolorfast(rows.ans)">
                                                <div class="violet" :style="isvoilet(rows.ans)"></div>
                                                <div class="option" style="position: relative;">{{ short(rows.ans) }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2  pb-2">{{ rows.amount }}</div>
                                <div class="col-2  pb-2" v-html="getele(rows.number)">
                                </div>
                                <div class="col-5  pb-2 txtend"
                                    v-html="betamountfast(rows.amount, rows.ans, rows.res, rows.color2)">
                                </div>
                                <div class="col-12">
                                    <div class="row bdend">
                                        <div class="col-6"></div>
                                        <div class="col-6 txtend">Fee: &#8377; {{ getfeefastParity(rows.amount, rows.ans,
                                            rows.color2) }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="betFilter2" role="tabpanel" aria-labelledby="betFilter2-tab">
                        <div class="row hbetrecords" v-for=" rows  in  paritybetreocrd " :key="rows.id" :rowsrec="rows">
                            <div class="col-6 pb-2 hd">{{ rows.period }}</div>
                            <div class="col-6 pb-2 hd txtend">{{ rows.time }}</div>
                            <div class="col-3  pb-2">Select</div>
                            <div class="col-2  pb-2">Point</div>
                            <div class="col-2  pb-2">Result</div>
                            <div class="col-5  pb-2 txtend">Amount</div>
                            <div class="col-3  pb-2">
                                <div class="record">
                                    <div class="period-id">
                                        <div class="result " :class="getcolor(rows.ans)">
                                            <div class="violet" :style="isvoilet(rows.ans)"></div>
                                            <div class="option" style="position: relative;">{{ short(rows.ans) }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2  pb-2">{{ rows.amount }}</div>
                            <div class="col-2  pb-2" v-html="getele(rows.number)">
                            </div>
                            <div class="col-5  pb-2 txtend"
                                v-html="betamountparity(rows.amount, rows.ans, rows.res, rows.color2)">
                            </div>
                            <div class="col-12">
                                <div class="row bdend">
                                    <div class="col-6"></div>
                                    <div class="col-6 txtend">Fee: &#8377; {{ getfeeParity(rows.amount, rows.ans,
                                        rows.color2) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="betFilter4" role="tabpanel" aria-labelledby="betFilter4-tab">
                        <div class="row hbetrecords" v-for=" rows  in  circlebetrecord " :key="rows.id" :rowsrec="rows">
                            <div class="col-6 pb-2 hd">{{ rows.period }}</div>
                            <div class="col-6 pb-2 hd txtend">{{ rows.time }}</div>
                            <div class="col-3  pb-2">Select</div>
                            <div class="col-3  pb-2">Point</div>
                            <div class="col-3  pb-2">Result</div>
                            <div class="col-3  pb-2 txtend">Amount</div>
                            <div class="col-3  pb-2"><span class="rstslt" :class="getResultClass(rows.ans)"
                                    v-html="getMultiplyer(rows.ans)"></span></div>
                            <div class="col-3  pb-2">{{ rows.amount }}</div>
                            <div class="col-3  pb-2"><span class="rstview" :class="getResultClass(rows.fres)">{{
                                getMultiplyer(rows.ans) }}</span>
                            </div>
                            <div class="col-3  pb-2 txtend" v-html="betamount(rows.amount, rows.ans, rows.res)">
                            </div>
                            <div class="col-12">
                                <div class="row bdend">
                                    <div class="col-6"></div>
                                    <div class="col-6 txtend">Fee: &#8377; {{ getfee(rows.amount) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="betFilter3" role="tabpanel" aria-labelledby="betFilter3-tab">
                        <div class="row hbetrecords" v-for=" rows  in  jetRecords " :key="rows.id" :rowsrec="rows">
                            <div class="col-6 pb-2 hd">{{rows.period}}</div>
                            <div class="col-6 pb-2 hd txtend">{{rows.time}}</div>
                            <div class="col-3  pb-2">Point</div>
                            <div class="col-3  pb-2 d-flex justify-content-center align-items-center">Status</div>
                            <div class="col-3  pb-2 d-flex justify-content-center align-items-center">Result</div>
                            <div class="col-3  pb-2 txtend">Amount</div>
                            <div class="col-3  pb-2">{{rows.amount}}</div>
                            <div class="col-3  pb-2 d-flex justify-content-center align-items-center">{{ rows.status }}</div>
                            <div class="col-3  pb-2 d-flex justify-content-center align-items-center">{{ crashpoint(rows.winpoint) }}</div>
                            <div class="col-3  pb-2 txtend" v-html="getJetResult(rows.amount,rows.winpoint,rows.status)">
                            </div>
                            <div class="col-12">
                                <div class="row bdend">
                                    <div class="col-6"></div>
                                    <div class="col-6 txtend">Fee: &#8377; {{(rows.amount*2/100).toFixed(2)}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.hbetrecords {
    margin-top: .5rem;
    color: #fff;
    border: 1px solid #f9fcff;
    /* background: linear-gradient(#4a80f5, #af8bf6); */
    background: var(--bs-gray-dark);
    padding: .5rem;
    font-size: 1.4rem;
}

.hbetrecords .txtend {
    text-align: end;
}

.hbetrecords .bdend {
    border-top: 1px solid #f9fcff;
}

.hbetrecords .rstview {
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    text-align: center;
    display: block;
}

.hbetrecords .rstslt {
    width: 3rem;
    height: 3rem;
    font-size: 1.7rem;
    border-radius: 0.5rem;
    text-align: center;
    display: block;
}

.hbetrecords .rstslt.green {
    background-color: green;
}

.hbetrecords .rstslt.green {
    background-color: green;
}

.hbetrecords .rstslt.gold {
    background-color: #f9ab13;
}

.hbetrecords .rstslt.yellow {
    background-color: green;
}

.hbetrecords .rstslt.red {
    background-color: red;
}

.hbetrecords .rstslt.violet {
    background-color: #9400d3;
}

.hbetrecords .rstview.red {
    background-color: red;
}

.hbetrecords .rstview.green {
    background-color: green;
}

.hbetrecords .rstview.yellow {
    background-color: red;
}

.hbetrecords .rstview.gold {
    background-color: #f9ab13;
}

.hbetrecords .rstview.violet {
    background-color: #9400d3;
}

.hbetrecords .hd {
    font-size: 1.8rem;
}

.hbetrecords .rslt.red {
    color: red;
}

.hbetrecords .rslt.green {
    color: green;
}

/* new style end  */
.bet-filter-box.game-record {
    margin-top: 7rem;
    background-image: none !important;
    height: unset;
}

.game-record.bet-filter-box .nav-pills {
    height: unset;
}

/* .bet-filter-box.game-record .avitor-game1-table {
    text-align: center;
} */

.cresultbox {
    display: inline-flex;
    overflow: hidden;
}

.cresultbox .result {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    margin: 0 5px;
    background: #dee2e6;
    color: #333;
    line-height: 30px;
    font-size: 18px;
}

.cresultbox .result.gold {
    background-color: #f9ab13;
    background-size: 100%;

}

.cresultbox .result.red {
    background-color: red;
    background-size: 100%;
}

.cresultbox .result.violet {
    background-color: #9400d3;
    background-size: 100%;
}

.cresultbox .result.green {
    background-color: green;
    background-size: 100%;
}

.cresultbox .result.que {
    text-align: center;
}

/* parity and fast parity  */
.record .period-id {
    margin: auto;
    font-size: 1.3rem;
    color: var(--bg-color);
    display: flex;
    flex-direction: column;
    text-align: center;
}

.record .result {
    color: #fff;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    box-shadow: 0 0 5px rgb(0 0 0/40%);
    height: 3rem;
    width: 3rem;
    position: relative;
}

.record .result .option {
    position: absolute;
    top: 0.2rem;
    font-size: 1.8rem;
}

.record .result.waiting {
    background: rgb(194 194 194);
    ;
}

.result .option.waiting {
    font-size: 2rem;
    border-radius: 50%;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.result.red {
    background: red;
}

.result.violet {
    background: #9400d3;
}

.result.green {
    background: green;
}

.result .red {
    background-color: red;
    position: absolute;
    width: 1.5rem;
    height: 3rem;
    border-radius: 0 15px 15px 0;
    color: var(--bg-color);
    text-align: center;
    display: inline-block;
    box-shadow: 0 0 2px rgb(0 0 0/40%);
}

.result .violet {
    background-color: #9400d3;
    position: absolute;
    width: 1.5rem;
    height: 3rem;
    border-radius: 0 15px 15px 0;
    color: var(--bg-color);
    text-align: center;
    display: inline-block;
    box-shadow: 0 0 2px rgb(0 0 0/40%);
}

.result .green {
    background-color: green;
    position: absolute;
    width: 1.5rem;
    height: 3rem;
    border-radius: 0 15px 15px 0;
    color: var(--bg-color);
    text-align: center;
    display: inline-block;
    box-shadow: 0 0 2px rgb(0 0 0/40%);
}

.result .red.active,
.result .green.active,
.result .violet.active {
    display: none;
}
</style>
<script>

export default {
    data() {
        return {
            fastbetrecord: '',
            paritybetreocrd: '',
            circlebetrecord: '',
            jetRecords: ''
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.getUserBetOrder();
        });
    },
    methods: {
        crashpoint(point){
            if(point == 1){
                return '1.00x'
            }else{
                return point+'x'
            }
        },
        async getUserBetOrder() {
            const res = await this.callApi('post', 'api/user/v1/all-bet-order');
            if (res.status === 200) {
                this.fastbetrecord = res.data.fastparity;
                this.paritybetreocrd = res.data.parity;
                this.circlebetrecord = res.data.circle;
                this.jetRecords = res.data.jet;
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
        getcolorfast(stat) {
            if (stat == "red") {
                return 'red';
            } else if (stat == "green") {
                return 'green';
            } else if (stat == "violet") {
                return 'violet';
            } else {
                var intvalue = parseInt(stat);
                var point = intvalue % 2;
                if (point == 1) {
                    return 'green';
                } else if (point == 0) {
                    return 'red';
                }
                return 'nothing';
            }
        },
        getcolor(stat) {
            if (stat == "red") {
                return 'red';
            } else if (stat == "green") {
                return 'green';
            } else if (stat == "violet") {
                return 'violet';
            } else {
                var intvalue = parseInt(stat);
                var point = intvalue % 2;
                if (point == 1) {
                    return 'green';
                } else if (point == 0) {
                    return 'red';
                }
                return 'nothing';
            }
        },
        isvoilet(stat) {
            var intvalue = parseInt(stat);
            if (intvalue == 5 || intvalue == 0) {
                return { display: 'inline-block' };
            } else {
                return { display: 'none' };
            }
        },
        short(stat) {
            if (stat == "red") {
                return 'R';
            } else if (stat == "green") {
                return 'G';
            } else if (stat == "violet") {
                return 'V';
            } else {
                var intvalue = parseInt(stat);
                return intvalue;
            }
        },
        getele(ele) {
            if (ele % 2 == 1) {
                if (ele == 5) {
                    return '<div class="record"><div class="period-id"><div class="result green"><div class="violet"></div><div class="option" style="position: relative;">' + ele + '</div></div></div></div>';
                } else {
                    return '<div class="record"><div class="period-id"><div class="result green"><div class="option" style="position: relative;">' + ele + '</div></div></div></div>';
                }

            } else if (ele % 2 == 0) {
                if (ele == 0) {
                    return '<div class="record"><div class="period-id"><div class="result red"><div class="violet"></div><div class="option" style="position: relative;">' + ele + '</div></div></div></div>';
                } else {
                    return '<div class="record"><div class="period-id"><div class="result red"><div class="option" style="position: relative;">' + ele + '</div></div></div></div>';
                }
            } else {
                return '<div class="" style="margin-left: 25%;color: var(--bg-color);font-size: 1.2rem;"><span>Wait</span></div>';
            }
        },
        betamountfast(x, y, z, a) {
            var f;
            if (z == "fail") {
                f = 98 / 100 * x;
                return '<span class="rslt red">-' + f.toFixed(2) + '</span>';
            } else if (z == 'success') {
                if (a == "violet") {
                    if (y == "green" || y == "red") {
                        f = 96 / 100 * x * .5;
                        return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
                    } else if (y == "violet") {
                        f = 98 / 100 * x * 3.5;
                        return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
                    } else {
                        f = 98 / 100 * x * 8;
                        return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
                    }
                } else {
                    if (y == "green" || y == "red") {
                        f = 98 / 100 * x * 2;
                        return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
                    } else if (y == "violet") {
                        f = 98 / 100 * x * 3.5;
                        return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
                    } else {
                        f = 98 / 100 * x * 8;
                        return '<span class="rslt green">-' + f.toFixed(2) + '</span>';
                    }
                }

            } else {
                return '*';
            }
        },
        getfeefastParity(ans, ans1, ans2) {
            if (ans1 == "violet") {
                if (ans2 == "green" || ans2 == "red") {
                    return 4 / 100 * ans * 2;
                } else if (ans2 == "violet") {
                    return 2 / 100 * ans * 2;
                } else {
                    return 2 / 100 * ans * 2;
                }
            } else {
                if (ans2 == "green" || ans2 == "red") {
                    return 2 / 100 * ans * 2;
                } else if (ans2 == "violet") {
                    return 2 / 100 * ans * 2;
                } else {
                    return 2 / 100 * ans * 2;
                }
            }
        },
        betamountparity(x, y, z, a) {
            var f;
            if (z == "fail") {
                f = 98 / 100 * x;
                return '<span class="rslt red">-' + f.toFixed(2) + '</span>';
            } else if (z == 'success') {
                if (a == "violet") {
                    if (y == "green" || y == "red") {
                        f = 90 / 100 * x * 0.5;
                        return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                    } else if (y == "violet") {
                        f = 95 / 100 * x * 3.5;
                        return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                    } else {
                        f = 95 / 100 * x * 8;
                        return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                    }
                } else {
                    if (y == "green" || y == "red") {
                        f = 97.5 / 100 * x * 2;
                        return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                    } else if (y == "violet") {
                        f = 95 / 100 * x * 3.5;
                        return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                    } else {
                        f = 95 / 100 * x * 8;
                        return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                    }
                }

            } else {
                return '<div class="" style="margin-left: 25%;color: #fff;font-size: 1.2rem;"><span>Wait</span></div>';
            }
        },
        getfeeParity(ans, ans1, ans2) {
            if (ans1 == "violet") {
                if (ans2 == "green" || ans2 == "red") {
                    return 10 / 100 * ans * 2;
                } else if (ans2 == "violet") {
                    return 5 / 100 * ans * 2;
                } else {
                    return 5 / 100 * ans * 2;
                }
            } else {
                if (ans2 == "green" || ans2 == "red") {
                    return 2.5 / 100 * ans * 2;
                } else if (ans2 == "violet") {
                    return 5 / 100 * ans * 2;
                } else {
                    return 5 / 100 * ans * 2;
                }
            }
        },
        getResultClass(name) {
            return name;
        },
        getResultHtml(name) {
            if (name == 'wait') {
                return `<div class="cresultbox"><div class="result que"><i class="fa-solid fa-hourglass-start"></i></div></div>`;
            } else {
                return `<div class="cresultbox"><div class="result ${name}"></div></div>`;
            }
        },
        betamount(x, y, z) {
            var f;
            if (z == "fail") {
                f = 97.5 / 100 * x;
                return '<span class="rslt red">-' + f.toFixed(2) + '</span>';
            } else if (z == 'success') {
                if (y == "green") {
                    f = 97.5 / 100 * x * 50;
                    return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                } else if (y == "red") {
                    f = 97.5 / 100 * x * 3;
                    return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                }
                else if (y == "violet") {
                    f = 97.5 / 100 * x * 5;
                    return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                } else if (y == "gold") {
                    f = 97.5 / 100 * x * 2;
                    return '<span class="rslt green">' + f.toFixed(2) + '</span>';
                }
            } else {
                return '<span class="rslt"></span>';
            }
        },
        getStatus(y) {
            if (y == 'fail') {
                return true;
            } else if (y == 'success') {
                return true;
            } else {
                return false;
            }
        },
        getMultiplyer(ans) {
            if (ans == 'red') {
                return '3x';
            } else if (ans == 'violet') {
                return '5x';
            } else if (ans == 'gold') {
                return '2x';
            } else if (ans == 'green') {
                return '50x';
            } else {
                return '';
            }
        },
        getfee(ans) {
            return 2.5 / 100 * ans * 2;
        },
        getJetResult(amt,mlt,status){
            if(status == 'success'){
                return '<span class="rslt green">+' + (amt*mlt).toFixed(2) + '</span>';
            }else if(status == 'fail'){
                return '<span class="rslt red">-' + (amt).toFixed(2) + '</span>';
            }else{
                return '<span class="rslt">**</span>';
            }
        }
    }
}
</script>
