<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="javascript:void(0)" @click="goback()"><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"
                        style="color: #fff;"></i></a>
                <a href="javascript:void(0)">Game Order</a>
                <a  @click="this.telegram()" href="javascript:void(0)"><img src="../assets/img/telegram-icon.png"></a>
            </div>
            <!-- End top nav -->
            <div class="bet-filter-box game-record history">
                <table class="avitor-game1-table game-table">
                    <tr class="heading">
                        <th>Period</th>
                        <th>Result</th>
                        <th>Time</th>
                        <th>Date</th>
                    </tr>
                    <tr v-for=" rowss  in  record " :key="rowss.id" :rowsrec="rowss">
                        <td>{{ rowss.period }}</td>
                        <td>
                            <div v-if="type == 1" class="record">
                                <div class="period-id">
                                    <div class="result " :class="getcolorfast(rowss.ans)">
                                        <div class="violet" :style="isvoilet(rowss.ans)"></div>
                                        <div class="option" style="position: relative;">{{ rowss.ans }}  {{ rowss.ans <= 4 ? 'S' : 'B' }}</div>

                                    </div>
                                </div>
                            </div>
                            <div class="cresultbox" v-else-if="type == 2">
                                <div class="result" :class="getResultClass(rowss.clo)"></div>
                            </div>
                        </td>
                        <td>{{ this.timeGameRecord(rowss.time) }} </td>
                        <td>{{ this.dateGameRecord(rowss.time) }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>
<style scoped>

.bet-filter-box.game-record {
    margin-top: 7rem;
    background-image: none !important;
    height: unset;
}

.game-record.bet-filter-box .nav-pills {
    height: unset;
}

.bet-filter-box.game-record .avitor-game1-table {
    /* text-align: center; */
}

.bet-filter-box.game-record.history .game-table tr th, .game-table tr td{
    color: #fff!important;
}
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
    border-radius: 10%;
    display: inline-block;
    box-shadow: 0 0 5px rgb(0 0 0/40%);
    height: 3rem;
    width: 4rem;
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
    border-radius: 10%;
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
    border-radius: 10%;
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
    border-radius: 10%;
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
    border-radius: 10%;
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
    props: {
        game: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            gameName: null,
            record: '',
            type: 0,
        }
    },
    created() {
        if (!this.game) {
            this.$router.push({ name: 'PageNotFound' });
        } else {
            this.gameName = this.game;
            if (this.gameName == 'fast-parity') {
                this.type = 1;
            } else if (this.gameName == 'parity') {
                this.type = 1;
            } else if (this.gameName == 'circle') {
                this.type = 2;
            }
            console.log('type : ', this.type);
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.getUserBetOrder();
        });
    },
    methods: {
        goback() {
            if (this.gameName != null) {
                if (this.gameName == 'fast-parity') {
                    this.$router.push({ name: 'FastParty' });
                } else if (this.gameName == 'parity') {
                    this.$router.push({ name: 'Parity' })
                } else if (this.gameName == 'circle') {
                    this.$router.push({ name: 'Circle' });
                } else {
                    this.$router.push({ name: 'PageNotFound' });
                }
            } else {
                this.$router.push({ name: 'PageNotFound' });
            }
        },
        async getUserBetOrder() {
            const data = new FormData();
            data.append('game', this.gameName);
            const res = await this.callApi('post', '/api/user/v1/game-History', data);
            if (res.status === 200) {
                if (res.data.status == true) {
                    this.record = res.data.record;
                } else {
                    this.swralert()
                }
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
            var amount;
            var f;
            if (z == "fail") {
                f = 98 / 100 * x;
                amount = "<span style='color:red;font-size:1.4rem;'> -" + (f.toFixed(2)) + " &#8377;</span>";
                return amount;
            } else if (z == 'success') {
                if (a == "violet") {
                    if (y == "green" || y == "red") {
                        f = 96 / 100 * x * .5;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else if (y == "violet") {
                        f = 98 / 100 * x * 3.5;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else {
                        f = 98 / 100 * x * 8;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    }
                } else {
                    if (y == "green" || y == "red") {
                        f = 98 / 100 * x * 2;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else if (y == "violet") {
                        f = 98 / 100 * x * 3.5;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else {
                        f = 98 / 100 * x * 8;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    }
                }

            } else {
                return '<div class="" style="margin-left: 25%;color: var(--bg-color);font-size: 1.2rem;"><span>Wait</span></div>';
            }
        },
        betamountparity(x, y, z, a) {
            var amount;
            var f;
            if (z == "fail") {
                f = 98 / 100 * x;
                amount = "<span style='color:red;font-size:1.4rem;'> -" + (f.toFixed(2)) + " &#8377;</span>";
                return amount;
            } else if (z == 'success') {
                if (a == "violet") {
                    if (y == "green" || y == "red") {
                        f = 90 / 100 * x * 0.5;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else if (y == "violet") {
                        f = 95 / 100 * x * 3.5;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else {
                        f = 95 / 100 * x * 8;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    }
                } else {
                    if (y == "green" || y == "red") {
                        f = 97.5 / 100 * x * 2;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else if (y == "violet") {
                        f = 95 / 100 * x * 3.5;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else {
                        f = 95 / 100 * x * 8;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    }
                }

            } else {
                return '<div class="" style="margin-left: 25%;color: #fff;font-size: 1.2rem;"><span>Wait</span></div>';
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
            var amount;
            var f;
            if (z == "fail") {
                f = 97.5 / 100 * x;
                amount = "<span style='color:red;font-size:1.4rem;'> -" + (f.toFixed(2)) + " &#8377;</span>";
                return amount;
            } else if (z == 'success') {
                if (y == "green") {
                    f = 97.5 / 100 * x * 50;
                    amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                    return amount;

                } else if (y == "red") {
                    f = 97.5 / 100 * x * 3;
                    amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                    return amount;
                }
                else if (y == "violet") {
                    f = 97.5 / 100 * x * 5;
                    amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                    return amount;
                } else if (y == "gold") {
                    f = 97.5 / 100 * x * 2;
                    amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                    return amount;
                }
            } else {
                return "<span style='color:#fff'>**</span>";
            }
        },
    }
}
</script>
