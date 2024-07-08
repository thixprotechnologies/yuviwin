<template>
    <section class="home-section">
        <div class="center fast-parity-game" style="min-height: 100vh!important;">
            <div class="top-nav-inivte" style="background:#fff;">
                <a @click="$router.push({ name: 'Home' })"><i class="fa-solid fa-arrow-left" style="color: var(--bg-color);"></i></a>
                <a href="javascript:void(0)" style="color: var(--bg-color);">Fast-Parity</a>
                <a href="javascript:void(0)" style="color: var(--bg-color);"><img src="../assets/img/telegram-icon.png"></a>
            </div>
            <div class="game-details-fp">
                <div class="basic-details">
                    <div class="first">
                        <h2>Balance</h2>
                        <p>&#8377; {{ this.balance }}</p>
                    </div>
                    <div class="last">
                        <h2>Fast Parity</h2>
                    </div>
                </div>
                <div class="game-top">
                    <div class="">
                        <div class="left-content">
                            <h2>Period</h2>
                            <p>{{ nexttimestamp }}</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="right-content">
                            <h2>Count Down</h2>
                            <span id="time">
                                <div>
                                    <span class="timer">0</span>
                                    <span class="timer">0</span>
                                    <span class="timer-demo">:</span>
                                    <span class="timer">0</span>
                                    <span class="timer">0</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="game-options">
                    <div class="game-option red" id="joinred" @click="join('Red')">
                        <img src="../assets/img/games/rocket.png" alt="join game">
                        <p>Join Red</p>
                    </div>
                    <div class="game-option violet" id="joinviolet" @click="join('Violet')">
                        <img src="../assets/img/games/rocket.png" alt="join game">
                        <p>Join violet</p>
                    </div>
                    <div class="game-option green" id="joingreen" @click="join('Green')">
                        <img src="../assets/img/games/rocket.png" alt="join game">
                        <p>Join Green</p>
                    </div>
                </div>
                <div class="game-options-two">
                    <div class="game-option" id="join1" @click="join('join1')">
                        <p>1</p>
                    </div>
                    <div class="game-option" id="join2" @click="join('join2')">
                        <p>2</p>
                    </div>
                    <div class="game-option" id="join3" @click="join('join3')">
                        <p>3</p>
                    </div>
                    <div class="game-option" id="join4" @click="join('join4')">
                        <p>4</p>
                    </div>
                    <div class="game-option" id="join5" @click="join('join5')">
                        <p>5</p>
                    </div>
                    <div class="game-option" id="join6" @click="join('join6')">
                        <p>6</p>
                    </div>
                    <div class="game-option" id="join7" @click="join('join7')">
                        <p>7</p>
                    </div>
                    <div class="game-option" id="join8" @click="join('join8')">
                        <p>8</p>
                    </div>
                    <div class="game-option" id="join9" @click="join('join9')">
                        <p>9</p>
                    </div>
                    <div class="game-option" id="join0" @click="join('join0')">
                        <p>0</p>
                    </div>
                </div>
                <div class="fp_popup hidden" id="resultPopup">
                    <div class=" fpp_details">
                        <div class="record fpp_record">
                            <div class="result " :class="getcolor(this.userlastresult.last.clo)">
                                <div class="violet " v-show="this.userlastresult.last.res1 === 'violet'"></div>
                                <div class="option" style="position: relative;"> {{ this.userlastresult.last.ans }}</div>
                            </div>
                        </div>
                        <div class="fppu_details">
                            <span class="heading" v-if="this.userlastresult.isbet == false">
                                Winner
                            </span>
                            <span v-else class="heading" :class="{ 'red': !userlastresult.issuccess }"
                                v-html="userResult()">
                            </span>
                            <span class="details" v-if="this.userlastresult.ans != null">You Select : <br> {{
                                this.userlastresult.ans }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bet-filter-box fast-bg" style="height: 180px;">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style="border: none;">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#betFilter1" type="button" role="tab" aria-controls="betFilter1"
                            aria-selected="true" style="color: rgb(156 163 175);">
                            Records
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#betFilter2"
                            type="button" role="tab" aria-controls="betFilter2" aria-selected="false"
                            style="color: rgb(156 163 175);">
                            Probability
                        </button>
                    </li>
                </ul>
                <div class="tab-pane fade show active" id="betFilter1" role="tabpanel" aria-labelledby="betFilter1-tab">
                    <div class="game-records">
                        <div class="records" ref="recordsContainer" @scroll="updateScrollProgress()">
                            <div class="record">
                                <div class="period-id">
                                    <div class="result waiting">
                                        <div class="option waiting"><i class="fa-solid fa-question"></i></div>
                                    </div>
                                    {{ nexttimestamp % 1000 }}
                                </div>
                            </div>
                            <div class="record" v-for=" row  in  resultrec " :key="row.id">
                                <div class="period-id">
                                    <div class="result " :class="getcolor(row.clo)">
                                        <div class="violet " v-show="row.res1 === 'violet'"></div>
                                        <div class="option" style="position: relative;">{{ row.ans }}</div>
                                    </div>
                                    {{ row.period % 1000 }}
                                </div>
                            </div>

                        </div>
                        <div class="game-records-scroll-progress">
                            <div ref="scrollProgress"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="betFilter2" role="tabpanel"
                    aria-labelledby="betFilter2-tab">
                    <div class="probability" v-if="prediction.length > 0">
                        <div  class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor(prediction[0].clo)">
                                        <span class="option" style="position: relative;">{{ short(prediction[0].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[2].count_ans }}</span>
                        </div>
                        <div  class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor(prediction[1].clo)">
                                        <span class="option" style="position: relative;">{{ short(prediction[1].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[2].count_ans }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor(prediction[2].clo)">
                                        <span class="option" style="position: relative;">{{ short(prediction[2].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[2].count_ans }}</span>
                        </div>
                    </div>
                    <div class="probability-two" v-if="prediction.length > 0">
                        <div  class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor(prediction[3].clo)">
                                        <span class="violet"  style="right: 0;" :style="isvoilet(prediction[3].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[3].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[3].count_ans }}</span>
                        </div>
                        <div  class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor(prediction[4].clo)">
                                        <span class="violet"  style="right: 0;" :style="isvoilet(prediction[4].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[4].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[4].count_ans }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor(prediction[5].clo)">
                                        <span class="violet"  style="right: 0;" :style="isvoilet(prediction[5].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[5].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[5].count_ans }}</span>
                        </div>
                        <div  class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor(prediction[6].clo)">
                                        <span class="violet"  style="right: 0;" :style="isvoilet(prediction[6].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[6].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[6].count_ans }}</span>
                        </div>
                        <div  class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result"  style="right: 0;" :class="getcolor(prediction[7].clo)">
                                        <span class="violet" :style="isvoilet(prediction[7].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[7].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[7].count_ans }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result"  style="right: 0;" :class="getcolor(prediction[8].clo)">
                                        <span class="violet" :style="isvoilet(prediction[8].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[8].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[8].count_ans }}</span>
                        </div>
                        <div  class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor(prediction[9].clo)">
                                        <span class="violet"  style="right: 0;" :style="isvoilet(prediction[9].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[9].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[9].count_ans }}</span>
                        </div>
                        <div  class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result"  style="right: 0;" :class="getcolor(prediction[10].clo)">
                                        <span class="violet" :style="isvoilet(prediction[10].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[10].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[10].count_ans }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result"  style="right: 0;" :class="getcolor(prediction[11].clo)">
                                        <span class="violet" :style="isvoilet(prediction[11].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[11].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[11].count_ans }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <sapn class="record">
                                <span class="period-id">
                                    <span class="result"  style="right: 0;" :class="getcolor(prediction[12].clo)">
                                        <span class="violet" :style="isvoilet(prediction[12].clo)"></span>
                                        <span class="option" style="position: relative;">{{ short(prediction[12].clo) }}</span>
                                    </span>
                                </span>
                            </sapn>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction[12].count_ans }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bet-filter-box bet-history">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#betFilter" type="button" role="tab" aria-controls="betFilter"
                            aria-selected="true" style="color: rgb(156 163 175);">
                            All Bets
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#betFilter4"
                            type="button" role="tab" aria-controls="betFilter4" aria-selected="false"
                            style="color: rgb(156 163 175);">
                            My Bets
                        </button>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="betFilter" role="tabpanel" aria-labelledby="betFilter-tab">
                        <div class="betFilter-table-box">
                            <table class="avitor-game1-table game-table">
                                <tr class="heading">
                                    <th>Period</th>
                                    <th>Select</th>
                                    <th>Point</th>
                                    <th>Result</th>
                                    <th>Amount</th>
                                </tr>

                                <tr>
                                    <td>
                                        <span><img src="../assets/img/bet-filter-table-user-icon.png" /></span>J**** 01
                                    </td>
                                    <td>700.00 INR</td>
                                    <td>---</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span><img src="../assets/img/bet-filter-table-user-icon.png" /></span>J**** 01
                                    </td>
                                    <td>700.00 INR</td>
                                    <td>---</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span><img src="../assets/img/bet-filter-table-user-icon.png" /></span>J**** 01
                                    </td>
                                    <td>700.00 INR</td>
                                    <td>---</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span><img src="../assets/img/bet-filter-table-user-icon.png" /></span>J**** 01
                                    </td>
                                    <td>700.00 INR</td>
                                    <td>---</td>
                                    <td>---</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span><img src="../assets/img/bet-filter-table-user-icon.png" /></span>J**** 01
                                    </td>
                                    <td>700.00 INR</td>
                                    <td>---</td>
                                    <td>---</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="betFilter4" role="tabpanel" aria-labelledby="betFilter4-tab"
                        style="height: 200px;overflow: scroll;">
                        <table class="avitor-game1-table game-table">
                            <tr class="heading">
                                <th>Period</th>
                                <th>Select</th>
                                <th>Point</th>
                                <th>Result</th>
                                <th>Amount</th>
                            </tr>
                            <tr v-for=" rows  in  betrec " :key="rows.id" :rowsrec="rows">
                                <td>{{ rows.period }}</td>
                                <td>
                                    <div class="record">
                                        <div class="period-id">
                                            <div class="result " :class="getcolor(rows.ans)">
                                                <div class="violet" :style="isvoilet(rows.ans)"></div>
                                                <div class="option" style="position: relative;">{{ short(rows.ans) }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ rows.amount }}</td>
                                <td v-html="getele(rows.number)">
                                </td>
                                <td v-html="betamount(rows.amount, rows.ans, rows.res, rows.color2)"></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="fast-parity-popup">
                <div class="offcanvas fast-parity-offcanva offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel" style="visibility: hidden;">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" :class="betclass(betbox.title)" id="offcanvasBottomLabel">Join {{
                            betbox.title }}</h5>
                    </div>
                    <div class="offcanvas-body small">
                        <div class="fast-parity-popup-body">
                            <div class="fast-parity-popup-body-recharge">
                                <h4>&#8377; {{ balance }}</h4>
                                <router-link :to="{ name: 'Recharge' }"
                                    class="fast-parity-popup-body-recharge-btn">Recharge</router-link>
                            </div>
                            <div class="contract-money-box">
                                <p>Contract Money</p>
                                <div id="amountlist">
                                    <span id="10" @click="selectmultiply(10)"
                                        class="contract-money-inner-box active-contract">10</span>
                                    <span id="100" @click="selectmultiply(100)" class="contract-money-inner-box">100</span>
                                    <span id="1000" @click="selectmultiply(1000)"
                                        class="contract-money-inner-box">1000</span>
                                    <span id="10000" @click="selectmultiply(10000)"
                                        class="contract-money-inner-box">10000</span>
                                </div>
                            </div>
                            <div class="second-contract-money-box">
                                <p>Number</p>
                                <div>
                                    <div class="contract-money-box">
                                        <div>
                                            <span class="contract-money-inner-box" @click="minus(5)">-5</span>
                                            <span class="contract-money-inner-box" @click="minus(1)">-1</span>
                                        </div>
                                    </div>
                                    <h4>{{ betbox.multiply }}</h4>
                                    <div class="contract-money-box">
                                        <div>
                                            <span class="contract-money-inner-box" @click="plus(1)">+1</span>
                                            <span class="contract-money-inner-box" @click="plus(5)">+5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="contract-money-inner-box-subheading">Total Contract Money is <span>&#8377; {{
                                betbox.amount }}</span></div>
                            <div class="button-group">
                                <button class="contract-money-cancel-btn" @click="closebetbox()">Cancel</button>
                                <button class="contract-money-confirm-btn" @click="confirmbet()">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.hidden {
    display: none !important;
}

.fast-parity-game {
    background-color: #fff;
    position: relative;

}
/* probability */
.probability{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: var(--padding);
    margin-top: -115px;
    gap: 1rem;
}
.probability-two{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: var(--padding);
    margin-top: -25px;;
    gap: 1rem;
}
/* popup design  fast parity */
.fp_popup {
    display: flex;
    height: 150px;
    min-width: 150px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    border: 10px solid #9d9d9d5c;
    border-radius: 10px;
    padding: 1rem;
    justify-content: center;
    align-items: center;
}

.fpp_details {
    isplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.fpp_record {
    display: flex;
    justify-content: center;
    width: 100%
}

.fppu_details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
}

.fppu_details .heading {
    font-size: 1.4rem;
    color: green;
    text-align: center;
}

.fppu_details .heading.red {
    color: red;
}

.fppu_details .details {
    font-size: 1.2rem;
    text-align: justify;
    text-align: center;
}

.game-details-fp {
    margin-top: 6rem;
    background: linear-gradient(rgb(90, 96, 128) -4.92%, rgb(159, 165, 189) 100%);
    color: var(--bg-color);
    padding: var(--padding);
    position: relative;
}

.game-top {
    width: 100%;
    color: #fff;
    display: inline-flex;
    justify-content: space-between;
}

.left-content {
    padding: 2rem 0;
    text-align: left;
}

.left-content h2,
.right-content h2 {
    font-size: 1.2rem;
}

.left-content p,
.right-content p {
    font-size: 1.8rem;
}

.right-content {
    padding: 2rem 0;
    text-align: end;
}

.right-content .timer {
    text-align: center;
    min-width: 1.2rem;
    border-radius: 0.25rem;
    padding: 0.25rem;
    background: rgba(255, 255, 255, 0.20);
    margin: 0 0.15rem;
    display: inline-block
}

.right-content .timer-demo {
    border-radius: 0.25rem;
    padding: 0.25rem;
    display: inline-block;
}

#time {
    font-size: 1.1rem;
    line-height: .75rem;
}

.basic-details {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
}

.basic-details .first {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    min-height: 40px;
    border-radius: 10px;
    padding: 0.2rem 0.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.basic-details .last {
    background: #fff;
    color: var(--bg-color);
    min-height: 40px;
    border-radius: 10px;
    padding: 0.2rem 0.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.first p,
.first h2,
.last h2 {
    font-size: 1.4rem;
}

.first h2 {
    color: green;
}

.game-options {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.game-options-two {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 1rem 0;
    gap: 1rem;
}

.game-options-two .game-option {
    height: 4rem !important;
}

.game-option {
    height: 6rem;
    position: relative;
    border: 1px solid #fff;
    background-color: #fff;
    border-radius: 5px;
}

.game-option.active {
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    background-color: rgba(255, 255, 255, 0.2) !important;
    border-radius: 5px;
}

.game-option.red {
    border: 1px solid red;
    background-color: red;
    border-radius: 5px;
}

.game-option.green {
    border: 1px solid green;
    background-color: green;
    border-radius: 5px;
}

.game-option.violet {
    border: 1px solid #9400d3;
    background-color: #9400d3;
    border-radius: 5px;
}

.game-option p {
    font-size: 1.5rem;
    text-align: center;
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    z-index: 3;
}

.game-option .amt {
    font-size: 1.5rem;
    text-align: center;
    position: absolute;
    color: var(--bg-color);
    z-index: 3;
    color: #fff;
    right: 0.4rem;
    top: -1.3rem;
    background: #8BC34A;
    border-radius: 50%;
    padding: 0.4rem;
}

.game-option img {
    height: 3rem;
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
}

/* .game-options-two .game-option i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: #e1e1e1;
    transform-origin: center;
    z-index: 2;
} */

.game-options-two .game-option p {
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--bg-color);
}

.bet-filter-box.fast-bg {
    background: #fff;
    background: #fff;
    height: 180px;
    padding: 0;
}

.bet-filter-box.fast-bg .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background: #f0f8ff;
    color: #000 !important;
}

.game-records {
    display: flex;
    flex-wrap: wrap;
    align-content: baseline;
    position: relative;
}

.game-records-scroll-progress {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5px;
    height: 100%;
    background-color: lightgray;
    z-index: 1;
}

.game-records-scroll-progress div {
    width: 100%;
    height: 5px;
    background-color: #007bff;
    transition: height 0.3s ease;
}

.records {
    display: flex;
    margin-top: 1rem;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 100px;
}

.records .record {
    width: 10%;
    padding: 1px;
    display: grid;
    justify-content: center;
}

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

.game-table tr th,
.game-table tr td {
    color: #000 !important;
}

.avitor-game1-table.game-table .heading {
    background: #afafaf;
    position: sticky;
    top: 0px;
    z-index: 1;
}

.bet-filter-box.bet-history {
    background: #fff;
    background: #fff;
    height: unset;
}

.bet-filter-box.bet-history .nav-pills {
    border: none;
}

.bet-filter-box.bet-history .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background: #f0f8ff;
    color: #000 !important;
}

.bet-filter-box.bet-history .bet-filter-box .nav-pills {
    border: none;
}

/* betting popup  */
.fast-parity-popup .offcanvas.show {
    transform: none;
    max-width: 480px;
    width: 100%;
    margin: auto;
}

.fast-parity-popup .offcanvas {
    max-width: 480px;
    width: 100%;
    margin: auto;
    background: #fff;
    border-radius: 14px 14px 0 0;
    padding: 1rem 2.8%;
}

.fast-parity-popup .offcanvas-header {
    padding: 1.4rem 2.8%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.offcanvas-title {
    font-size: 2rem;
    color: #090f1f;
    font-weight: 700;
}

.offcanvas-title.red {
    color: red !important;
}

.offcanvas-title.violet {
    color: #9400d3 !important;
    ;
}

.offcanvas-title.green {
    color: green !important;
    ;
}

.fast-parity-popup-body .fast-parity-popup-body-recharge {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #22487c3d;
    height: 55px;
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
}

.fast-parity-popup-body .fast-parity-popup-body-recharge h4 {
    color: #090f1f;
    /*-webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
    font-size: 2rem;
    font-weight: 800;
    margin: 0 1rem;
    letter-spacing: .3px;
}

.fast-parity-popup-body .fast-parity-popup-body-recharge input {
    color: #090f1f;
    font-weight: 600;
    background: transparent;
    font-size: 2rem;
    margin: 0 1rem;
    letter-spacing: .3px;
}

.fast-parity-popup-body .fast-parity-popup-body-recharge input[type="number"]::-webkit-inner-spin-button,
.fast-parity-popup-body .fast-parity-popup-body-recharge input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    /* Optional: Adjust spacing */
}

.fast-parity-popup-body-recharge .fast-parity-popup-body-recharge-btn {
    background: linear-gradient(45deg, #ffd76e, #f9ab13);
    width: 100px;
    height: 35px;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contract-money-box p {
    color: #090f1f;
    font-size: 1.2rem;
    letter-spacing: .3px;
    padding: 1rem 0;
}

.contract-money-box {
    padding: 1rem 0;
}

.contract-money-inner-box {
    color: #090f1f;
    font-size: 1.2rem;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 2px;
    border: 1.4px solid #9a9a9a;
}

.contract-money-box div {
    display: flex;
    align-items: center;
    padding: 1rem 0;
}

.active-contract {
    border: 1.4px solid #4a80f5;
}

.second-contract-money-box div {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.second-contract-money-box p {
    color: #090f1f;
    font-size: 1.2rem;
    letter-spacing: .3px;
}

.second-contract-money-box div h4 {
    font-size: 2rem;
    color: #f9ab13;
    font-weight: 700;
}

.contract-money-inner-box-subheading {
    color: #090f1f;
    font-size: 1.2rem;
    letter-spacing: .3px;
}

.contract-money-inner-box-subheading span {
    color: #f9ab13;
    font-size: 1.8rem;
    margin: 0 .4rem;
    font-weight: 800;
}

.fast-parity-popup .button-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.contract-money-confirm-btn {
    background: var(--yellow-color);
    border-radius: 8px;
    color: var(--black-color);
    font-size: 2.2rem;
    font-weight: 700;
    height: 50px;
    width: 100%;
    letter-spacing: .3px;
    margin-top: 2rem;
}

.contract-money-cancel-btn {
    background: #fff;
    border: 2px solid #f9ab13;
    border-radius: 8px;
    color: var(--black-color);
    font-size: 2.2rem;
    font-weight: 700;
    height: 50px;
    width: 100%;
    letter-spacing: .3px;
    margin-top: 2rem;
}

.fast-parity-popup .offcanvas-bottom {
    height: auto !important;
}
</style>
<script>
export default {
    data() {
        return {
            user: {
                username: null,
            },
            resultrec: '',
            nexttimestamp: null,
            betrec: '',
            betresult: {},
            betbox: {
                title: null,
                target: null,
                boxcolor: null,
                timeout: false,
                multiply: 1,
                factor: 10,
                amount: 10,
                page: 1,
                page1: 1,
                total: 1000,
                total1: null,
            },
            userlastresult: {
                isbet: false,
                issuccess: false,
                amount: 0,
                ans: null,
                last: {}
            },
            refreshcountdown: null,
            timerCounter: null,
            prediction: [],
        }
    },
    mounted: function () {
        this.GetUser().then(() => {
            this.user.username = this.Users.username;
            this.fechresultrec();
            this.fatchUserResults();
            this.countdown();
        });
        this.refreshcountdown = setInterval(this.countdown, 1000);
        this.timerCounter = setInterval(this.timer, 100);
    },
    beforeUnmount: function () {
        clearInterval(this.refreshcountdown);
        clearInterval(this.timerCounter);

    },
    methods: {
        userResult() {
            if (this.userlastresult.issuccess) {
                return 'Win &#8377; ' + this.userlastresult.amount;
            } else {
                return 'Lose &#8377; ' + this.userlastresult.amount;
            }
        },
        updateScrollProgress() {
            const container = this.$refs.recordsContainer;
            const scrollProgress = this.$refs.scrollProgress;

            const maxHeight = container.scrollHeight - container.clientHeight;
            const percentageScrolled = (container.scrollTop / maxHeight) * 100;

            scrollProgress.style.height = percentageScrolled + '%';
        },
        timer() {
            var countDownDate = Date.now();
            var distance = 30000 - (countDownDate % 30000);

            var seconds = Math.floor(distance / 1000);
            var milliseconds = distance % 1000;

            var sec1 = Math.floor(seconds / 10);
            var sec2 = seconds % 10;

            var milisec1 = Math.floor(milliseconds / 100);
            document.getElementById('time').innerHTML = '<div> <span class="timer">' + sec1 + '</span> <span class="timer">' + sec2 + '</span> <span class="timer-demo">:</span> <span class="timer">0</span> <span class="timer">' + milisec1 + '</span> </div>';

        },
        countdown() {
            var countDownDate = Date.now();
            var distance = 30000 - (countDownDate % 30000);
            distance = Math.floor(distance / 1000);

            // var i = distance / 60,
            //     n = distance % 60;
            // var minutes = Math.floor(i);
            // var seconds = ('0' + Math.floor(n)).slice(-2);
            // var sec1 = (seconds % 100 - seconds % 10) / 10;
            // var sec2 = seconds % 10;
            if (7 < distance) {
                document.getElementById("joinred").classList.remove("active");
                document.getElementById("joinviolet").classList.remove("active");
                document.getElementById("joingreen").classList.remove("active");
                document.getElementById("join0").classList.remove("active");
                document.getElementById("join1").classList.remove("active");
                document.getElementById("join2").classList.remove("active");
                document.getElementById("join3").classList.remove("active");
                document.getElementById("join4").classList.remove("active");
                document.getElementById("join5").classList.remove("active");
                document.getElementById("join6").classList.remove("active");
                document.getElementById("join7").classList.remove("active");
                document.getElementById("join8").classList.remove("active");
                document.getElementById("join9").classList.remove("active");
                this.betbox.timeout = true;
            }
            if (7 > distance) {
                document.getElementById("joinred").classList.add("active");
                document.getElementById("joinviolet").classList.add("active");
                document.getElementById("joingreen").classList.add("active");
                document.getElementById("join0").classList.add("active");
                document.getElementById("join1").classList.add("active");
                document.getElementById("join2").classList.add("active");
                document.getElementById("join3").classList.add("active");
                document.getElementById("join4").classList.add("active");
                document.getElementById("join5").classList.add("active");
                document.getElementById("join6").classList.add("active");
                document.getElementById("join7").classList.add("active");
                document.getElementById("join8").classList.add("active");
                document.getElementById("join9").classList.add("active");
                this.betbox.timeout = false;

                var listItems = document.getElementById('amountlist').childNodes;
                for (let i = 0; i < listItems.length; i++) {
                    listItems[i].classList.remove('active-contract');
                }
                this.betbox.amount = this.betbox.factor * this.betbox.multiply
                document.getElementById("10").className = "contract-money-inner-box active-contract";
                this.betbox.multiply = 1;
                this.betbox.factor = 10;
                this.betbox.amount = 10;
                const offcanvas = document.getElementById('offcanvasBottom');
                offcanvas.classList.remove('show');
                offcanvas.setAttribute('aria-hidden', 'true');
                offcanvas.style.visibility = 'hidden';
            }
            if (30 == distance || 29 == distance) {
                this.fechresultrec().then(() => {
                    document.getElementById('resultPopup').classList.remove('hidden');
                    this.fatchUserResults();
                    if (this.resultrec[0].period == (this.nexttimestamp - 1)) {
                        this.GetUser();
                    }
                });
            } else {
                document.getElementById('resultPopup').classList.add('hidden');
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
        betamount(x, y, z, a) {
            var amount;
            var f;
            if (z == "fail") {
                f = 98 / 100 * x;
                amount = "<span style='color:red;font-size:1.4rem;'> -" + (f.toFixed(2)) + " &#8377;</span>";
                return amount;
            } else if (z == 'success') {
                if (a == "violet") {
                    if (y == "green" || y == "red") {
                        f = 98 / 100 * x * 1.5;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else if (y == "violet") {
                        f = 98 / 100 * x * 4.5;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else {
                        f = 98 / 100 * x * 9;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    }
                } else {
                    if (y == "green" || y == "red") {
                        f = 98 / 100 * x * 2;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else if (y == "violet") {
                        f = 98 / 100 * x * 1.5;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    } else {
                        f = 98 / 100 * x * 9;
                        amount = "<span style='color:green;font-size:1.4rem;'>+" + f.toFixed(2) + " &#8377;</span>";
                        return amount;
                    }
                }

            } else {
                return '<div class="" style="margin-left: 25%;color: var(--bg-color);font-size: 1.2rem;"><span>Wait</span></div>';
            }
        },
        toggleOffcanvas() {
            const offcanvas = document.getElementById('offcanvasBottom');
            offcanvas.classList.toggle('show');
            if (offcanvas.getAttribute('aria-hidden') === 'true') {
                offcanvas.setAttribute('aria-hidden', 'false');
                offcanvas.setAttribute('role', 'dialog');
            } else {
                offcanvas.setAttribute('aria-hidden', 'true');
            }
            if (offcanvas.style.visibility === 'hidden' || offcanvas.style.visibility == "") {
                offcanvas.style.visibility = 'visible';
            } else {
                offcanvas.style.visibility = 'hidden';
            }
        },
        join(label) {
            if (this.betbox.timeout) {
                if (label == "Green") {
                    this.betbox.target = "green";
                    this.betbox.boxcolor = "green";
                    this.betbox.title = label;
                } else if (label == "Red") {
                    this.betbox.target = "red";
                    this.betbox.boxcolor = "red";
                    this.betbox.title = label;
                } else if (label == "Violet") {
                    this.betbox.target = "violet";
                    this.betbox.boxcolor = "violet";
                    this.betbox.title = label;
                } else {
                    var intvalue = parseInt(label.trim().match(/\d+/));
                    this.betbox.target = intvalue;
                    this.betbox.title = intvalue;
                }
                this.toggleOffcanvas();
            }

        },
        betclass(name) {
            return name + ' ' + this.betbox.boxcolor;
        },
        closebetbox() {
            var listItems = document.getElementById('amountlist').childNodes;
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].classList.remove('active-contract');
            }
            this.betbox.amount = this.betbox.factor * this.betbox.multiply
            document.getElementById("10").className = "contract-money-inner-box active-contract";
            this.betbox.multiply = 1;
            this.betbox.factor = 10;
            this.betbox.amount = 10;
            this.toggleOffcanvas();
        },
        selectmultiply(multi) {
            var listItems = document.getElementById('amountlist').childNodes;
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].classList.remove('active-contract');
            }
            this.betbox.factor = multi;
            this.betbox.amount = this.betbox.factor * this.betbox.multiply
            document.getElementById(multi).className = "contract-money-inner-box active-contract " + this.betbox.target;
        },
        plus(value) {
            this.betbox.multiply = this.betbox.multiply + value;
            this.betbox.amount = this.betbox.factor * this.betbox.multiply
        },
        minus(value) {
            if (this.betbox.multiply > value) {
                this.betbox.multiply = this.betbox.multiply - value;
                this.betbox.amount = this.betbox.factor * this.betbox.multiply
            }
        },
        multiply(value) {
            if (this.balance >= this.betbox.amount * value) {
                this.betbox.amount = this.betbox.amount * value
            }
        },
        add(value) {
            this.betbox.amount = value
        },
        maxvalue() {
            this.betbox.amount = this.balance;
        },
        division(value) {
            if (10 <= this.betbox.amount / value) {
                this.betbox.amount = this.betbox.amount / value
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
        isvoilet(stat) {
            var intvalue = parseInt(stat);
            if (intvalue == 5 || intvalue == 0) {
                return { display: 'inline-block' };
            } else {
                return { display: 'none' };
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
        async fechresultrec() {
            const data = new FormData();
            data.append("username", this.user.username);
            const res = await this.callApi('post', 'api/user/v1/fast-parity/results', data);
            if (res.status === 200) {
                this.resultrec = res.data.data;
                this.nexttimestamp = res.data.next;
                this.userlastresult = res.data.userbet;
                this.prediction = res.data.prediction;
                console.log(typeof this.prediction);
            } else {
                if (res.status === 401) {
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
        async fatchUserResults() {
            const data = new FormData();
            data.append("username", this.user.username);
            const res = await this.callApi('post', 'api/user/v1/user/fast-parity', data);
            if (res.status === 200) {
                this.betrec = res.data.data;
            } else {
                if (res.status === 401) {
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
        async confirmbet() {
            // document.getElementById("blackscreen").style.display = "none";
            if (this.balance >= this.betbox.amount) {
                if (this.betbox.timeout) {
                    var data = new FormData();
                    data.append("username", this.user.username);
                    data.append("period", this.nexttimestamp);
                    data.append("amount", this.betbox.amount);
                    data.append("ans", this.betbox.target);
                    const res = await this.callApi('post', 'api/user/v1/user/bet/fast-parity', data);
                    if (res.status === 200) {
                        this.salert("Bet Placed Successfully");
                        this.fatchUserResults();
                        this.GetUser();
                    } else {
                        if (res.status === 401) {
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
                    this.walert("Timeout! Please wait for next round.");
                }
            } else {
                this.walert("Low Balance! Please Recharge First.");
            }
        },
    }
}

</script>
