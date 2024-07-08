<template>
    <section class="home-section">
        <div class="center parity-game popup-container" style="min-height: 100vh!important;">
            <div class="top-nav-inivte">
                <a @click="$router.push({name:'Home'})"><i class="fa-solid fa-home" style="color: #fff;"></i></a>
                <a href="javascript:void(0)">Parity</a>
                <a  @click="this.telegram()" href="javascript:void(0)"><img src="../assets/img/telegram-icon.png"></a>
            </div>
            <div class="game-details-pg">

                <div class="basic-details">
                    <div class="first">
                        <h2>Balance</h2>
                        <p>&#8377; {{ this.balance }}</p>
                    </div>
                    <div class="last">
                        <h2>Parity</h2>
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

                <div v-if="allowedbet == true" class="game-options">
                    <div class="game-option red" id="joinred" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('Red')">
                        <img src="../assets/img/games/rocket.png" alt="join game">
                        <p>Join Red</p>
                    </div>
                    <div class="game-option violet" id="joinviolet" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" @click="join('Violet')">
                        <img src="../assets/img/games/rocket.png" alt="join game">
                        <p>Join violet</p>
                    </div>
                    <div class="game-option green" id="joingreen" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" @click="join('Green')">
                        <img src="../assets/img/games/rocket.png" alt="join game">
                        <p>Join Green</p>
                    </div>
                </div>
                <div v-if="allowedbet == true" class="game-options-two">
                    <div class="game-option" id="join1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join1')">
                        <p>1</p>
                    </div>
                    <div class="game-option" id="join2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join2')">
                        <p>2</p>
                    </div>
                    <div class="game-option" id="join3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join3')">
                        <p>3</p>
                    </div>
                    <div class="game-option" id="join4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join4')">
                        <p>4</p>
                    </div>
                    <div class="game-option" id="join5" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join5')">
                        <p>5</p>
                    </div>
                    <div class="game-option" id="join6" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join6')">
                        <p>6</p>
                    </div>
                    <div class="game-option" id="join7" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join7')">
                        <p>7</p>
                    </div>
                    <div class="game-option" id="join8" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join8')">
                        <p>8</p>
                    </div>
                    <div class="game-option" id="join9" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join9')">
                        <p>9</p>
                    </div>
                    <div class="game-option" id="join0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('join0')">
                        <p>0</p>
                    </div>
                </div>
                <div v-if="allowedbet == true" class="btn-box">
                <div class="item yellow left" id="joinred" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('Big')">
                        <p style="text-align: center;color: #fff;">Big</p>
                    </div>
                    <div class="item green right" id="joinred" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('Small')">
                        <p style="text-align: center;color: #fff;">Small</p>
                    </div>

            </div>
                <div v-if="allowedbet == false" class="game-options">
                    <div class="game-option red active" id="joinred" >
                        <img src="../assets/img/games/rocket.png" alt="join game">
                        <p>Join Red</p>
                    </div>
                    <div class="game-option violet active">
                        <img src="../assets/img/games/rocket.png" alt="join game">
                        <p>Join violet</p>
                    </div>
                    <div class="game-option green active" id="joingreen">
                        <img src="../assets/img/games/rocket.png" alt="join game">
                        <p>Join Green</p>
                    </div>
                </div>
                <div v-if="allowedbet == false" class="game-options-two">
                    <div class="game-option active" >
                        <p>1</p>
                    </div>
                    <div class="game-option active">
                        <p>2</p>
                    </div>
                    <div class="game-option active">
                        <p>3</p>
                    </div>
                    <div class="game-option active">
                        <p>4</p>
                    </div>
                    <div class="game-option active">
                        <p>5</p>
                    </div>
                    <div class="game-option active">
                        <p>6</p>
                    </div>
                    <div class="game-option active">
                        <p>7</p>
                    </div>
                    <div class="game-option active">
                        <p>8</p>
                    </div>
                    <div class="game-option active">
                        <p>9</p>
                    </div>
                    <div class="game-option active">
                        <p>0</p>
                    </div>
                </div>

                <div class="btn-box" v-if="allowedbet == false">
                  <div class="item yellow_back" id="joinred" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('Big')" aria-disabled="true">
                        <p style="text-align: center;color: #fff">Big</p>
                    </div>
                    <div class="item yellow_back" id="joinred" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom" @click="join('Small')" aria-disabled="true">
                        <p style="text-align: center; color: #fff">Small</p>
                    </div>


                </div>
            </div>

                <!-- Buttons to trigger the popup -->



            <div class="bet-filter-box fast-bg">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style="border: none;">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#betFilter1" type="button" role="tab" aria-controls="betFilter1"
                            aria-selected="true" style="color: rgb(156 163 175);">
                            Records
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-home-tab"  type="button" role="tab" @click="$router.push({name:'GameHistory',params:{ game:'parity'}})" style="color: rgb(156 163 175);">
                            History
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

                            <div class="record" v-for=" row  in  resultrec " :key="row.id">
                                <div class="period-id">
                                    <div class="result " :class="getcolor(row.clo)">
                                        <div class="violet " v-show="row.res1 === 'violet'"></div>
                                        <div class="option" style="position: relative;">{{ row.ans }} {{ (row.ans <=4)?'S':'B'}}</div>
                                    </div>
                                    {{ row.period % 1000 }}
                                </div>
                            </div>
                            <div class="record">
                                <div class="period-id">
                                    <div class="result waiting">
                                        <div class="option waiting"><i class="fa-solid fa-question"></i></div>
                                    </div>
                                    {{ nexttimestamp % 1000 }}
                                </div>
                            </div>
                        </div>
                        <div class="game-records-scroll-progress">
                            <div ref="scrollProgress"></div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="betFilter2" role="tabpanel" aria-labelledby="betFilter2-tab">
                    <div class="probability">
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('red')">
                                        <span class="option" style="position: relative;">{{ short('red')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction.red }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                <span class="result" :class="getcolor('Big')">
                                    <span class="option" style="position: relative;">{{ short('Big') }}</span>
                                </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction.Big }}</span>
                         </div>
                         <div class="d-flex justify-content-around align-items-center" style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                <span class="result" :class="getcolor('Small')">
                                    <span class="option" style="position: relative;">{{ short('Small') }}</span>
                                </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction.Small }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('violet')">
                                        <span class="option" style="position: relative;">{{ short('violet')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction.violet }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('green')">
                                        <span class="option" style="position: relative;">{{ short('green')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction.green }}</span>
                        </div>
                    </div>
                    <div class="probability-two">
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('0')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('0')"></span>
                                        <span class="option" style="position: relative;">{{ short('0')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['0'] }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('1')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('1')"></span>
                                        <span class="option" style="position: relative;">{{ short('1')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['1'] }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('2')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('2')"></span>
                                        <span class="option" style="position: relative;">{{ short('2')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['2'] }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('3')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('3')"></span>
                                        <span class="option" style="position: relative;">{{ short('3')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['3'] }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('4')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('4')"></span>
                                        <span class="option" style="position: relative;">{{ short('4')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['4'] }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('5')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('5')"></span>
                                        <span class="option" style="position: relative;">{{ short('5')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['5'] }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('6')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('6')"></span>
                                        <span class="option" style="position: relative;">{{ short('6')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['6'] }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('7')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('7')"></span>
                                        <span class="option" style="position: relative;">{{ short('7')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['7'] }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('8')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('8')"></span>
                                        <span class="option" style="position: relative;">{{ short('8')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['8'] }}</span>
                        </div>
                        <div class="d-flex justify-content-around align-items-center"
                            style="border: 1px solid #aeaeae;padding: 0.5rem;">
                            <span class="record">
                                <span class="period-id">
                                    <span class="result" :class="getcolor('9')">
                                        <span class="violet" style="right: 0;" :style="isvoilet('9')"></span>
                                        <span class="option" style="position: relative;">{{ short('9')
                                        }}</span>
                                    </span>
                                </span>
                            </span>
                            <span style="font-size: 1.5rem;font-weight: 600;"> {{ prediction['9'] }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bet-filter-box bet-history-pg">



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
                            <table class="avitor-game1-table game-table pagepage">
                                <tr class="heading">
                                    <th>Period</th>
                                    <th>user</th>
                                    <th>select</th>
                                    <th>big/Small</th>
                                    <th>Amount</th>
                                </tr>

                                <tr v-if="betsAll != ''" v-for=" rows  in  betsAll" :key="rows.id" :rowsrec="rows">
                                    <td>{{ rows.period }}</td>
                                    <td>{{ this.userencode(rows.username) }}</td>
                                    <td>
                                        <div class="record">
                                            <div class="period-id">
                                                <div class="result" :class="getcolor(rows.ans)">
                                                    <div class="violet" :style="isvoilet(rows.ans)"></div>
                                                    <div class="option" style="position: relative;">
                                                        {{ rows.ans === "Small" ? 'S' : (rows.ans === "Big" ? 'B' : short(rows.ans)) }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{ rows.ans }}</td>
                                    <td>{{ rows.amount }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="betFilter4" role="tabpanel" aria-labelledby="betFilter4-tab"
                        style="height: 200px;overflow: scroll;">
                        <table class="avitor-game1-table game-table pagepage">
                            <tr class="heading">
                                <th>Period</th>
                                <th>Select</th>
                                <th>Point</th>
                                <th>Result</th>
                                <th>Amount</th>
                                <th>time</th>
                            </tr>
                            <tr v-for=" rows  in  betrec " :key="rows.id" :rowsrec="rows">
                                <td>{{ rows.period }}</td>
                                <td>
                                    <div class="record">
                                        <div class="period-id">
                                            <div class="result " :class="getcolor(rows.ans)">
                                                <div class="violet" :style="isvoilet(rows.ans)"></div>
                                                <div class="option" style="position: relative;">
                                                        {{ rows.ans === "Small" ? 'S' : (rows.ans === "Big" ? 'B' : short(rows.ans)) }}
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ rows.amount }}</td>
                                <td v-html="getele(rows.number)">
                                </td>
                                <td v-html="betamount(rows.amount, rows.ans, rows.res, rows.color2)"></td>
                                <td>{{ rows.time }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="wlbox " id="resultPopup">
                <div v-if="this.userlastparity.isbet == true" class="wlbox-main">
                    <div v-if="this.userlastparity.isbet == false" class="top" style="background: green;">
                        <img src="../assets/img/coin.png" alt="coin" class="ccon">
                        <img src="../assets/img/crown.png" alt="crown" class="ccrn">
                        <h2 v-if="this.userlastparity.isbet == false">Winner</h2>
                        <h2 v-else>
                            {{ userlastparity.issuccess ? 'You Won' : 'You Lose' }}
                        </h2>
                    </div>
                    <div v-else class="top" :style="{ color: (!userlastparity.issuccess) ? 'red' : 'green' }">
                        <img src="../assets/img/coin.png" alt="coin" class="ccon">
                        <img src="../assets/img/crown.png" alt="crown" class="ccrn">
                        <h2>
                            {{ userlastparity.issuccess ? 'You Won' : 'You Lose' }}
                        </h2>
                    </div>
                    <div class="result" :class="getcolor(this.userlastparity.last.clo)">
                        <div class="option" style="display: block;" :class="getResultClass(this.userlastparity.last.clo)">
                            <div class="violet " v-show="this.userlastparity.last.res1 === 'violet'"></div>
                            <div class="option2" style="position: relative;">{{ this.userlastparity.last.ans }} {{ this.userlastparity.last.ans <= 4 ? 'S' : 'B' }}</div>
                        </div>
                    </div>
                    <div class="row curresult px-4 mt-3">
                        <div class="col-6">
                            Period:
                        </div>
                        <div class="col-6 text-end">
                            {{ nexttimestamp - 1 }}
                        </div>
                        <div class="col-6">
                            Your Bet Price:
                        </div>
                        <div class="col-6 text-end">
                            &#8377; {{ formattedAmount }}
                        </div>
                    </div>
                    <div v-if="this.userlastparity.isbet == true" class="yourresult">
                        <div class="mainr">
                            <div class="row">
                                <div class="col-4">Select</div>
                                <div class="col-4  text-center">Fee</div>
                                <div class="col-4  text-end">Amount</div>
                            </div>
                            <div v-for=" rows  in  userlastparity.ans " :key="rows.id" :rowsrec="rows" class="row">
                                <div class="col-4 text-center text-white">
                                    <div class="select center-content" :class="getcolor(rows.ans)">{{ short(rows.ans) }}</div>
                                </div>
                                <div class="col-4  text-center">-&#8377; {{ getfeeParity(rows.amount, rows.ans,
                                            rows.color2) }}</div>
                                <div class="col-4  text-end" :style="{ color: (rows.res == 'success') ? 'green' : 'red' }">
                                    {{getResultAmount(rows.amount, rows.ans, rows.res, rows.color2)}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="btnok">
                        <button type="button" @click="hidePoupbet()">Ok</button>
                    </div>
                </div>
            </div>
            <div class="fast-parity-popup">
                <div class="offcanvas fast-parity-offcanva offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel" >
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
                            <div class="contract-money-inner-box-subheading">Total Betting Money : <span>&#8377;
                                    {{ betbox.amount }}</span></div>
                            <div class="contract-money-inner-box-subheading">Betting Charge : <span
                                    style="color: red;">-&#8377;
                                    {{ getBetCharges(betbox.amount) }}</span></div>
                            <div class="contract-money-inner-box-subheading">Total Win Money : <span
                                    style="color: green;">&#8377;
                                    {{ getbetwinAmount(betbox.amount) }}</span></div>
                                <button class="contract-money-confirm-btn" data-bs-dismiss="offcanvas" @click="confirmbet()">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.big-color-class {
  background-color: #c13bf2; /* Example color for Big */
}
.small-color-class {
  background-color: #3977cd; /* Example color for Small */
}

.center-content {
    text-align: center;
}
/* .no-scroll {
  overflow: hidden;
} */
/* Button styles */
.btn-box {
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
}

.yellow_back {
    background-color: rgba(240, 234, 234, 0.2);
    border-radius: 1px solid rgba(135, 130, 130, 0.2);
}

.item {
  cursor: pointer;
  padding: 10px 20px;
  width: 55%;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 5px;
}


.left {
    background-color: #c13bf2;
    border: 1px solid #c13bf2;
    border-radius: 5px;
    width: 60%;
}

.right {
  background-color: #3977cd;/* Blue color */
  border: 1px solid #3977cd;
  border-radius: 5px;
  width: 60%;
}

/* Popup styles */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.popup-container {
    position: relative; /* Ensure relative positioning */
    z-index: 9999; /* Set a high z-index value to ensure it appears above other content */
}

.popup-join {
  background: white;
  width: 100%;
  max-width: 400px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.3s forwards;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}


.info .li {
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}

.info .li.active {
  background-color: #fb4e4e;
  color: white;
}

.stepper-box .li {
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}

.digit-box input {
  text-align: center;
  width: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.foot .left,
.foot .right {
  flex: 1;
  text-align: center;
  padding: 15px;
  cursor: pointer;
}

.foot .left {
  background-color: #555;
  color: white;
}

.foot .right {
  background-color: #fb4e4e;
  color: white;
}

/* .btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
} */

/* new popup design css start */
.wlbox-main .result .option2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.wlbox-main .result .violet {
    height: 4rem !important;
    width: 2rem !important;
    border-radius: 0 2rem 2rem 0 !important;

}

/* new popup design css end */
.hidden {
    display: none !important;
}

.parity-game {
    background-color: #fff;
    position: relative;

}

.bet-filter-box.fast-bg .fade:not(.show) {
    display: none;
    opacity: 0;
}

/* probability */
.probability {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
}

.probability-two {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    padding: 1rem;
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

.game-details-pg {
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
    font-size: 1.3rem;
    text-align: center;
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    z-index: 3;
}

/* .game-option .amt {
    font-size: 1.4rem;
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
} */

.game-option img {
    height: 3rem;
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
}



.game-options-two .game-option p {
    font-size: 1.3rem;
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
    border-radius: 10%;
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



.pagepage.game-table tr th,
.pagepage.game-table tr td {
    color: #000 !important;
}

.avitor-game1-table.game-table .heading {
    background: #afafaf;
    position: sticky;
    top: 0px;
    z-index: 1;
}

.bet-filter-box.bet-history-pg {
    background: #fff;
    background: #fff;
    height: unset;
    padding: 0;
}

.bet-filter-box.bet-history-pg .nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background: #f0f8ff;
    color: #000 !important;
}

.bet-filter-box.bet-history-pg .bet-filter-box .nav-pills {
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

.fast-parity-popup .offcanvas-title {
    font-size: 2rem;
    color: #090f1f;
    font-weight: 700;
}
.offcanvas-title.Small {
    color: #3977cd !important;
}
.offcanvas-title.Big {
    color: #c13bf2 !important;
}

.fast-parity-popup .offcanvas-title.red {
    color: red !important;
}

.fast-parity-popup .offcanvas-title.violet {
    color: #9400d3 !important;
    ;
}

.fast-parity-popup .offcanvas-title.green {
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
    font-size: 1.6rem;
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
    justify-content: space-between;
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
    text-align: end;
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

.bet-filter-box.fast-bg {
    height: 230px;
}

/*Media quaries*/
@media screen and (max-width: 991px) {
    .bet-filter-box.fast-bg {
        height: 200px;
    }
}

@media screen and (max-width: 768px) {
    .bet-filter-box.fast-bg {
        height: 200px;
    }
}

@media screen and (max-width: 650px) {
    .bet-filter-box.fast-bg {
        height: 200px;
    }
}
</style>
<script>
// import Popup from '../components/Popup.vue';

export default {
//     components: {
//     Popup
//   },
    data() {
        return {
            showPopupDialog: false,
            selectedChoice: '',
            selectedAmount: 1,
            quantity: 1,
            selectedMultiplier: 1,
            user: {
                username: null,
            },
            resultrec: '',
            nexttimestamp: null,
            betrec: '',
            betsAll: '',
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
            userlastparity: {
                isbet: false,
                issuccess: false,
                amount: 0,
                ans: null,
                last: {}
            },
            prediction: {
                red: 0,
                green: 0,
                violet: 0,
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
            },
            allowedbet:false,

        }
    },
    computed: {
    totalAmount() {
      return this.selectedAmount * this.quantity * this.selectedMultiplier;
    },
    formattedAmount() {
      return this.userlastparity.amount.toFixed(2);
    },
  },
    mounted: function () {
        this.GetUser().then(() => {
            this.user.username = this.Users.username;
            this.fechresultrec();
            this.fatchUserResults();
            this.countdown();
        });
        this.refreshcountdown = setInterval(this.countdown, 1000);

    },
    beforeUnmount: function () {
        clearInterval(this.refreshcountdown);
    },
    methods: {



        showPopup(choice) {
      this.popupChoice = choice;
      this.showPopupDialog = true;
      this.selectedChoice = choice;
    //   this.updateBodyClass();
    },

    confirmBet(totalAmount) {
    // Pass the total amount to the confirmbet method
    this.confirmbet(totalAmount);
    // Close the popup after confirming the bet
    this.closePopup();
},

    //  updateBodyClass() {
    //   if (this.showPopupDialog) {
    //     document.body.classList.add('no-scroll');
    //   } else {
    //     document.body.classList.remove('no-scroll');
    //   }
    // },
    selectAmount(amount) {
      this.selectedAmount = amount;
    },


    async placeBet() {
        // const betAmount = totalAmount.amount;
        //     const betTarget = totalAmount.choice
        if (this.balance >= this.betbox.amount) {
            if (this.betbox.timeout) {
                var data = new FormData();
                data.append("username", this.user.username);
                data.append("period", this.nexttimestamp);
                data.append("amount", this.betbox.amount);
                data.append("ans", this.betbox.target); // Set the option to 'big' or 'small'
                const res = await this.callApi('post', 'api/user/v1/user/bet/parity', data);
                if (res.status === 200) {
                    this.closebetbox();
                    this.salert(res.data.msg);
                    this.fatchUserResults();
                    this.GetUser();
                } else {
                    // Handle API errors
                }
            } else {
                this.walert("Timeout! Please wait for the next round.");
            }
        } else {
            this.walert("Low Balance! Please Recharge First.");
        }
    },


    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    increaseQuantity() {
      this.quantity++;
    },
    validateQuantity() {
      this.quantity = Math.max(1, parseInt(this.quantity) || 1);
    },
    selectMultiplier(multiplier) {
      this.selectedMultiplier = multiplier;
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
        // getResultAmount(x, y, z, a) {
        //     var f;
        //     if (z == "fail") {
        //         f = 98 / 100 * x;
        //     } else if (z == 'success') {
        //         if (a == "violet") {
        //             if (y == "green" || y == "red") {
        //                 f = 90 / 100 * x * 0.5;
        //             } else if (y == "violet") {
        //                 f = 95 / 100 * x * 3.5;
        //             } else {
        //                 f = 95 / 100 * x * 8;
        //             }
        //         } else {
        //             if (y == "green" || y == "red") {
        //                 f = 97.5 / 100 * x * 2;
        //             } else if (y == "violet") {
        //                 f = 95 / 100 * x * 3.5;
        //             } else {
        //                 f = 95 / 100 * x * 8;
        //             }
        //         }
        //     } else {
        //         f=0;
        //     }
        //     return f.toFixed(2)
        // },
        getResultAmount(x, y, z, a) {
            var amount;
            var f;
            if (z == "fail") {
                 f =  98 / 100 * x;
            } else if (z == 'success') {
                if (a == "violet") {
                    if (y == "green" || y == "red") {
                        f = 96 / 100 * x * .5;
                    } else if (y == "violet") {
                        f = 98 / 100 * x * 3.5;
                    } else if(y == "Big" || y == "Small"){
                        f = 98 / 100 * x * 2;
                    }else {
                        f = 98 / 100 * x * 8;
                    }
                } else {
                    if (y == "green" || y == "red" || y == "Big" || y == "Small") {
                        f = 98 / 100 * x * 2;
                    } else if (y == "violet") {
                        f = 98 / 100 * x * 3.5;
                    } else {
                        f = 98 / 100 * x * 8;
                    }
                }
            } else {
                f =  0;
            }
            return f.toFixed(2)
        },
        userResult() {
            if (this.userlastparity.issuccess) {
                return 'Win &#8377; ' + this.userlastparity.amount;
            } else {
                return 'Lose &#8377; ' + this.userlastparity.amount;
            }
        },
        updateScrollProgress() {
            const container = this.$refs.recordsContainer;
            const scrollProgress = this.$refs.scrollProgress;

            const maxHeight = container.scrollHeight - container.clientHeight;
            const percentageScrolled = (container.scrollTop / maxHeight) * 100;

            scrollProgress.style.height = percentageScrolled + '%';
        },
        getBetCharges(amount) {
            if (this.betbox.target == "green" || this.betbox.target == "red") {
                return (amount * 2.5) / 100;
            } else {
                return (amount * 5) / 100;
            }
        },
        getbetwinAmount(amount) {
            var f;
            if (this.betbox.target == "green" || this.betbox.target == "red") {
                f = 98 / 100 * amount * 2;
                return f.toFixed(2);
            } else if (this.betbox.target == "violet") {
                f = 98 / 100 * amount * 3.5;
                return f.toFixed(2);

            }else if (this.betbox.target === "Big") {
                f = 98 / 100 * amount * 2;
                return f.toFixed(2);

            }else if (this.betbox.target === "Small") {
                f = 98 / 100 * amount * 2;
                return f.toFixed(2);

            } else {
                f = 98 / 100 * amount * 8;
                return f.toFixed(2);
            }
        },
        countdown() {
            var countDownDate = Date.parse(new Date) / 1e3;
            var distance = 180 - countDownDate % 180;
            var i = distance / 60,
                n = distance % 60;
            var minutes = Math.floor(i);
            var seconds = ('0' + Math.floor(n)).slice(-2);
            var sec1 = (seconds % 100 - seconds % 10) / 10;
            var sec2 = seconds % 10;
            document.getElementById('time').innerHTML = '<div> <span class="timer">0</span> <span class="timer">' + Math.floor(minutes) + '</span> <span class="timer-demo">:</span> <span class="timer">' + sec1 + '</span> <span class="timer">' + sec2 + '</span> </div>';
            var dis = distance % 2;
            if (dis == 0 && 30 < distance) {
                this.getBets();
            }
            if (30 < distance) {
                this.betbox.timeout = true;
                this.allowedbet = true;
            }
            if (30 > distance) {

                this.allowedbet = false;
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
                //this.hidebetbox();
            }
            if (180 == distance || 179 == distance) {
                this.fechresultrec().then(() => {
                    if(this.userlastparity.isbet == true){
                        document.getElementById('resultPopup').classList.add('show');
                        setTimeout(()=>{
                            document.getElementById('resultPopup').classList.remove('show');
                        },5000)
                        this.fatchUserResults();
                        location.reload();
                    }
                this.fatchUserResults();
                // setTimeout(()=>{
                //         location.reload();
                //         },5000)
                this.GetUser();
                })
            }else{
                document.getElementById('resultPopup').classList.remove('show');
            }
        },
        hidePoupbet() {
            document.getElementById("resultPopup").classList.remove("show")
            location.reload();
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
        isvoilet(stat) {
            var intvalue = parseInt(stat);
            if (intvalue == 5 || intvalue == 0) {
                return { display: 'inline-block' };
            } else {
                return { display: 'none' };
            }
        },
        getResultClass(name) {
            return name;
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
                    if (y == "green" || y == "red" || y == "Big" || y == "Small") {
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
                return '<div class="" style="margin-left: 25%;color: #000;font-size: 1.2rem;"><span>Wait</span></div>';
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
                } else if(label == "Big"){
                    this.betbox.target = "Big";
                    this.betbox.title = label;

                } else if(label == "Small"){
                    this.betbox.target = "Small";
                    this.betbox.title = label;

                } else {
                    var intvalue = parseInt(label.trim().match(/\d+/));
                    this.betbox.target = intvalue;
                    this.betbox.title = intvalue;

                }
            }

        },
        betclass(name) {
            return name + ' ' + this.betbox.boxcolor;
        },
        showBetbox() {
            const offcanvas = document.getElementById('offcanvasBottom');
            offcanvas.classList.add('show');
            offcanvas.setAttribute('aria-hidden', 'false');
            offcanvas.setAttribute('role', 'dialog');
            offcanvas.style.visibility = 'visible';
        },
        hidebetbox() {
            const offcanvas = document.getElementById('offcanvasBottom');
            offcanvas.classList.remove('show');
            offcanvas.setAttribute('aria-hidden', 'true');
            // offcanvas.style.visibility = 'hidden';
            offcanvas.removeAttribute('role');
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('padding-right');
            if(offcanvas.parentNode.children.length > 1){
                offcanvas.parentNode.children.item(1).remove()
            }
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
            // this.hidebetbox();
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
        //
        short(stat) {
            if (stat == "red") {
                return 'R';
            } else if (stat == "green") {
                return 'G';
            } else if (stat == "violet") {
                return 'V';
            } else if (stat === 'Big') {
                    return 'B';
                } else if (stat === 'Small') {
                    return 'S';
                }else {
                var intvalue = parseInt(stat);
                return intvalue;
            }
        },
        getcolor(stat) {
                if (stat === "red") {
                    return 'red';
                } else if (stat === "green") {
                    return 'green';
                } else if (stat === 'Small' || stat === 'S') {
                    return 'small-color-class';
                } else if (stat === 'Big' || stat === 'B') {
                    return 'big-color-class';
                } else if (stat === "violet") {
                    return 'violet';
                } else {
                    var intvalue = parseInt(stat);
                    var point = intvalue % 2;
                    if (point === 1) {
                        return 'green';
                    } else if (point === 0) {
                        return 'red';
                    }
                    return 'nothing';
                }
            },

        async fechresultrec() {
            const data = new FormData();
            data.append("username", this.user.username);
            const res = await this.callApi('post', 'api/user/v1/parity/results', data);
            if (res.status === 200) {
                this.resultrec = res.data.data;
                this.nexttimestamp = res.data.next;
                this.userlastparity = res.data.userbet;
                if (res.data.prediction) {
                    for (let key in res.data.prediction) {
                        if (this.prediction.hasOwnProperty(key)) {
                            this.prediction[key] = res.data.prediction[key];
                        }
                    }
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
        async fatchUserResults() {
            const data = new FormData();
            data.append("username", this.user.username);
            const res = await this.callApi('post', 'api/user/v1/user/parity', data);
            if (res.status === 200) {
                console.log('data data',res.data);
                this.betrec = res.data.data;
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
        async confirmbet() {
            if(this.betbox.target == 'Big' || this.betbox.target == 'Small'){
                this.placeBet()
            }else {

            if (this.balance >= this.betbox.amount) {
                if (this.betbox.timeout) {
                    var data = new FormData();
                    data.append("username", this.user.username);
                    data.append("period", this.nexttimestamp);
                    data.append("amount", this.betbox.amount);
                    data.append("ans", this.betbox.target);
                    const res = await this.callApi('post', 'api/user/v1/user/bet/parity', data);
                    if (res.status === 200) {
                        this.closebetbox();
                        this.salert(res.data.msg);
                        this.fatchUserResults();
                        this.GetUser();
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
                    this.walert("Timeout! Please wait for next round.");
                }
            } else {
                this.walert("Low Balance! Please Recharge First.");
            }
        }
        },
        async getBets() {
            const data = new FormData();
            data.append('period', this.nexttimestamp)
            const res = await this.callApi('post', '/api/user/v1/parity/bets', data);
            if (res.status === 200) {
                this.betsAll = res.data.data;
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
        userencode(name) {
            name = name.toString();
            if (name.length > 4) {
                let lastFourDigits = name.slice(-4);
                let maskedNumber = '*'.repeat(name.length - 4) + lastFourDigits;
                return maskedNumber;
            }
        },
    },
    watch: {
    showPopupDialog(newValue) {
      this.updateBodyClass();
    },
  },


}

</script>
