<template>
    <section class="home-section">
        <div class="center" style="min-height: 100vh!important;padding-bottom: 0;">
            <div class="top-nav-inivte">
                <a @click="$router.push({ name: 'Home' })"><i class="fa-solid fa-home" style="color: #fff;"></i></a>
                <a href="javascript:void(0)">Circle</a>
                <a  @click="this.telegram()" href="javascript:void(0)"><img src="../assets/img/telegram-icon.png"></a>
            </div>
            <div class="wheel-game-box">
                <div class="wheel-game-box-period">
                    <div class="Period">
                        <p>Period <i class="fa fa-calendar-o" aria-hidden="true"></i></p>
                        <h4>{{ nexttimestamp }}</h4>
                    </div>
                </div>

                <!-- PERIODS BOTTOM TILES -->
                <div class="col-12  PERIODS-TILES" id="rx20">
                    <span @click="$router.push({ name: 'GameHistory', params: { game: 'circle' } })"
                        class="wlrcd wlb justify-content-center align-items-center"><i
                            class="fa-solid fa-clock-rotate-left"></i></span>
                    <span v-for="rows  in   resultrec" :key="rows.id" :rowsrec="rows" class="wlrcd wlb"
                        :class="getResultClass(rows.clo)"></span>
                    <span class="wlrcd wlb">?</span>
                </div>
            </div>
            <div class="wheel-box-design">
                <div class="stop-wheel"><img src="../assets/img/stopWheel.png"></div>
                <div style="display:flex;justify-content: center;align-items: center;">
                    <svg id="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 597 597" fill="none"
                        style="transform: rotate(3deg); height: 300px;">
                        <circle cx="298.652" cy="298.25" r="290.836" fill="#ffd76e" />
                        <path
                            d="M199.219 24.8281C188.536 28.7791 178.147 33.1691 168.196 38.2907L298.725 298.177L199.219 24.8281Z"
                            fill="#ff0000" />
                        <path
                            d="M12.2068 247.691C10.3045 258.666 8.98752 269.934 8.25586 281.348L298.579 298.322L12.2068 247.691Z"
                            fill="#ffd76e" />
                        <path
                            d="M138.784 55.2656C129.419 61.4116 120.346 68.2892 111.713 75.4595L298.579 298.177L138.784 55.2656Z"
                            fill="#ff0000" />
                        <path
                            d="M231.559 15.1699C220.438 17.8039 209.609 21.0232 199.073 24.8279L298.579 298.177L231.559 15.1699Z"
                            fill="#ffd76e" />
                        <path d="M332.383 9.31638C321.262 8.14572 310.14 7.41406 298.58 7.41406V298.176L332.383 9.31638Z"
                            fill="#008000" />
                        <path d="M298.578 7.41406C287.164 7.41406 275.897 8.14572 264.775 9.31638L298.578 298.176V7.41406Z"
                            fill="#ffd76e" />
                        <path
                            d="M46.742 152.869C41.1814 162.527 36.0597 172.624 31.5234 183.16L298.58 298.323L46.742 152.869Z"
                            fill="#9400d3" />
                        <path
                            d="M31.5222 183.014C27.1322 193.257 23.1812 203.939 19.9619 214.768L298.579 298.177L31.5222 183.014Z"
                            fill="#ffd76e" />
                        <path
                            d="M19.9626 214.768C16.7433 225.45 14.1094 236.425 12.207 247.692L298.726 298.177L19.9626 214.768Z"
                            fill="#ff0000" />
                        <path
                            d="M65.3244 124.627C58.5932 133.7 52.4472 143.065 46.7402 152.869L298.578 298.323L65.3244 124.627Z"
                            fill="#ffd76e" />
                        <path
                            d="M111.713 75.459C103.079 82.7756 94.8845 90.5312 87.1289 98.7258L298.725 298.323L111.713 75.459Z"
                            fill="#ffd76e" />
                        <path
                            d="M87.1287 98.7246C79.3731 106.919 72.0565 115.553 65.3252 124.625L298.579 298.322L87.1287 98.7246Z"
                            fill="#ff0000" />
                        <path
                            d="M168.051 38.291C157.954 43.4126 148.149 48.9733 138.784 55.2656L298.579 298.324L168.051 38.291Z"
                            fill="#ffd76e" />
                        <path
                            d="M577.341 214.768C574.122 203.939 570.171 193.257 565.781 183.014L298.725 298.177L577.341 214.768Z"
                            fill="#ff0000" />
                        <path
                            d="M565.781 183.013C561.245 172.624 556.27 162.527 550.563 152.723L298.725 298.177L565.781 183.013Z"
                            fill="#ffd76e" />
                        <path
                            d="M365.747 15.1697C354.918 12.5357 343.797 10.6334 332.383 9.31641L298.58 298.176L365.747 15.1697Z"
                            fill="#9400d3" />
                        <path
                            d="M585.097 247.692C583.195 236.425 580.561 225.45 577.341 214.768L298.725 298.177L585.097 247.692Z"
                            fill="#ffd76e" />
                        <path
                            d="M588.903 315.15C589.196 309.59 589.342 303.883 589.342 298.176C589.342 292.469 589.196 286.908 588.903 281.201L298.58 298.176L588.903 315.15Z"
                            fill="#ffd76e" />
                        <path
                            d="M588.901 281.348C588.316 269.934 586.999 258.813 584.95 247.691L298.432 298.176L588.901 281.348Z"
                            fill="#ff0000" />
                        <path
                            d="M550.564 152.869C544.857 143.065 538.711 133.7 531.98 124.627L298.58 298.177L550.564 152.869Z"
                            fill="#9400d3" />
                        <path
                            d="M458.52 55.2656C449.154 49.1196 439.35 43.4126 429.253 38.291L298.725 298.177L458.52 55.2656Z"
                            fill="#9400d3" />
                        <path
                            d="M429.253 38.2907C419.156 33.1691 408.913 28.7791 398.231 24.8281L298.725 298.177L429.253 38.2907Z"
                            fill="#ffd76e" />
                        <path
                            d="M398.086 24.8279C387.55 21.0232 376.722 17.8039 365.6 15.1699L298.58 298.177L398.086 24.8279Z"
                            fill="#ff0000" />
                        <path
                            d="M510.177 98.7258C502.421 90.5312 494.226 82.7756 485.593 75.459L298.58 298.177L510.177 98.7258Z"
                            fill="#ff0000" />
                        <path
                            d="M486.031 75.897C477.398 68.5804 468.325 61.8491 458.96 55.7031L299.019 298.615L486.031 75.897Z"
                            fill="#ffd76e" />
                        <path
                            d="M531.98 124.625C525.249 115.553 517.932 106.919 510.177 98.7246L298.58 298.176L531.98 124.625Z"
                            fill="#ffd76e" />
                        <path
                            d="M264.923 9.31641C253.656 10.6334 242.534 12.5357 231.56 15.1697L298.58 298.176L264.923 9.31641Z"
                            fill="#ff0000" />
                        <path
                            d="M398.086 571.671C408.768 567.72 419.158 563.33 429.109 558.209L298.58 298.322L398.086 571.671Z"
                            fill="#ffd76e" />
                        <path
                            d="M429.255 558.208C439.352 553.087 449.156 547.526 458.521 541.234L298.58 298.176L429.255 558.208Z"
                            fill="#ff0000" />
                        <path
                            d="M458.521 541.234C467.887 535.088 476.959 528.21 485.593 521.04L298.58 298.176L458.521 541.234Z"
                            fill="#ffd76e" />
                        <path
                            d="M332.381 587.036C343.649 585.719 354.77 583.817 365.745 581.183L298.725 298.176L332.381 587.036Z"
                            fill="#ffd76e" />
                        <path d="M298.58 589.085C309.994 589.085 321.262 588.353 332.383 587.182L298.58 298.322V589.085Z"
                            fill="#9400d3" />
                        <path
                            d="M485.593 521.04C494.226 513.723 502.421 505.968 510.177 497.773L298.58 298.176L485.593 521.04Z"
                            fill="#9400d3" />
                        <path
                            d="M365.745 581.329C376.866 578.695 387.695 575.476 398.231 571.671L298.725 298.322L365.745 581.329Z"
                            fill="#ff0000" />
                        <path
                            d="M577.343 381.732C580.563 371.049 583.197 360.075 585.099 348.807L298.58 298.322L577.343 381.732Z"
                            fill="#ffd76e" />
                        <path
                            d="M565.781 413.486C570.171 403.243 574.122 392.56 577.341 381.732L298.725 298.322L565.781 413.486Z"
                            fill="#ff0000" />
                        <path
                            d="M298.58 298.176L585.099 348.66C587.001 337.686 588.318 326.418 589.05 315.004L298.58 298.176Z"
                            fill="#9400d3" />
                        <path
                            d="M550.563 443.63C556.123 433.972 561.245 423.875 565.781 413.339L298.725 298.176L550.563 443.63Z"
                            fill="#ffd76e" />
                        <path
                            d="M531.978 471.872C538.71 462.8 544.856 453.434 550.563 443.63L298.725 298.176L531.978 471.872Z"
                            fill="#ff0000" />
                        <path
                            d="M510.177 497.773C517.932 489.579 525.249 480.945 531.98 471.872L298.58 298.176L510.177 497.773Z"
                            fill="#ffd76e" />
                        <path
                            d="M12.207 348.807C14.1094 360.075 16.7433 371.049 19.9626 381.732L298.579 298.322L12.207 348.807Z"
                            fill="#9400d3" />
                        <path
                            d="M65.3252 471.872C72.0565 480.945 79.3731 489.579 87.1287 497.773L298.725 298.176L65.3252 471.872Z"
                            fill="#ff0000" />
                        <path
                            d="M31.5234 413.486C36.0597 423.875 41.035 433.972 46.742 443.777L298.58 298.322L31.5234 413.486Z"
                            fill="#ff0000" />
                        <path
                            d="M46.7402 443.63C52.4472 453.434 58.5932 462.8 65.3244 471.872L298.578 298.176L46.7402 443.63Z"
                            fill="#ffd76e" />
                        <path
                            d="M19.9619 381.732C23.1812 392.56 27.1322 403.243 31.5222 413.486L298.579 298.322L19.9619 381.732Z"
                            fill="#ffd76e" />
                        <path
                            d="M8.25586 315.15C8.84119 326.564 10.1582 337.686 12.2068 348.807L298.726 298.322L8.25586 315.15Z"
                            fill="#ffd76e" />
                        <path
                            d="M8.2554 281.348C7.96274 286.908 7.81641 292.615 7.81641 298.176C7.81641 303.737 7.96274 309.443 8.2554 315.15L298.579 298.176L8.2554 281.348Z"
                            fill="#ff0000" />
                        <path
                            d="M168.051 558.209C178.148 563.33 188.391 567.72 199.073 571.671L298.579 298.322L168.051 558.209Z"
                            fill="#ff0000" />
                        <path
                            d="M199.219 571.671C209.755 575.476 220.583 578.695 231.705 581.329L298.725 298.322L199.219 571.671Z"
                            fill="#ffd76e" />
                        <path d="M264.923 587.036C276.044 588.353 287.312 588.938 298.726 588.938V298.176L264.923 587.036Z"
                            fill="#ffd76e" />
                        <path
                            d="M231.56 581.329C242.388 583.963 253.509 585.865 264.923 587.182L298.726 298.322L231.56 581.329Z"
                            fill="#ff0000" />
                        <path
                            d="M111.713 521.04C120.346 528.357 129.419 535.088 138.784 541.234L298.579 298.176L111.713 521.04Z"
                            fill="#9400d3" />
                        <path
                            d="M138.784 541.234C148.149 547.38 157.954 553.087 168.051 558.209L298.579 298.322L138.784 541.234Z"
                            fill="#ffd76e" />
                        <path
                            d="M87.1289 497.773C94.8845 505.968 103.079 513.723 111.713 521.04L298.579 298.322L87.1289 497.773Z"
                            fill="#ffd76e" />
                        <circle cx="298.902" cy="298.5" r="294" stroke="#28313F" stroke-width="8" />
                        <path
                            d="M298.902 522.5C175.372 522.5 74.9023 422.03 74.9023 298.5C74.9023 174.97 175.372 74.5 298.902 74.5C422.433 74.5 522.902 174.97 522.902 298.5C522.902 422.03 422.433 522.5 298.902 522.5Z"
                            fill="url(#paint0_radial_11026_44189)" />
                        <circle cx="298.902" cy="298.5" r="225" stroke="#28313F" stroke-width="8" />
                        <defs>
                            <radialGradient id="paint0_radial_11026_44189" cx="0" cy="0" r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(298.904 298.434) scale(224.038)">
                                <stop offset="0.676481" stop-color="#1C1F29" />
                                <stop offset="0.7857" stop-color="#191B22" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

                <div class="wheel-inner-img-part">
                    <!-- <img src="../assets/img/wheel-building.png"> -->
                    <p id="betmessage"></p>
                    <div class="count-down" id="timer3" style="font-size: 4rem;position: absolute;left: 50%;top: 45%;transform: translate(-50%,-58%);">
                        <span>0</span><span>0</span>:<span>0</span><span>0</span>
                    </div>
                </div>

                <div v-if="allowedbet == true"  class="wheel-buttons-box">
                    <button type="button" class="gold" id="joingold" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" @click="join('gold')">2x</button>
                    <button type="button" class="red" id="joinred" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" @click="join('red')">3x</button>
                    <button type="button" class="violet" id="joinviolet" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
                        @click="join('violet')">5x</button>
                    <button type="button" class="green" id="joingreen" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
                        @click="join('green')">50x</button>
                </div>
                <div v-if="allowedbet == false"  class="wheel-buttons-box">
                    <button type="button" class="gold active" >2x</button>
                    <button type="button" class="red active">3x</button>
                    <button type="button" class="violet active">5x</button>
                    <button type="button" class="green active">50x</button>
                </div>
            </div>
            <div class="bet-filter-box">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#betFilter" type="button" role="tab" aria-controls="betFilter"
                            aria-selected="true">
                            All Bets
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#betFilter4"
                            type="button" role="tab" aria-controls="betFilter4" aria-selected="false">
                            My Bets
                        </button>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="betFilter" role="tabpanel" aria-labelledby="betFilter-tab">
                        <div class="betFilter-table-box">
                            <table class="avitor-game1-table">
                                <tr class="heading">
                                    <th>Period</th>
                                    <th>user</th>
                                    <th>select</th>
                                    <th>Amount</th>
                                </tr>

                                <tr v-for=" rows  in  betsAll " :key="rows.id" :rowsrec="rows">
                                    <td>{{ rows.period }}</td>
                                    <td>{{ this.userencode(rows.username) }}</td>
                                    <td>
                                        <div class="cresultbox">
                                            <div class="result" :class="getResultClass(rows.ans)"></div>
                                        </div>
                                    </td>
                                    <td>{{ rows.amount }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="betFilter4" role="tabpanel" aria-labelledby="betFilter4-tab"
                        style="height: 200px;overflow: scroll;">
                        <table class="avitor-game1-table">
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
                                    <div class="cresultbox">
                                        <div class="result" :class="getResultClass(rows.ans)"></div>
                                    </div>
                                </td>
                                <td>{{ rows.amount }}</td>
                                <td v-html="getResultHtml(rows.fres)">
                                </td>
                                <td v-html="betamount(rows.amount, rows.ans, rows.res)"></td>
                                <td>{{ rows.time }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="wlbox " id="c_resulPopup">
                <div v-if="this.userlastresult.isbet == true"  class="wlbox-main">
                    <div v-if="this.userlastresult.isbet == false" class="top" style="background: green;">
                        <img src="../assets/img/coin.png" alt="coin" class="ccon">
                        <img src="../assets/img/crown.png" alt="crown" class="ccrn">
                        <h2 v-if="this.userlastresult.isbet == false">Winner</h2>
                        <h2 v-else>
                            {{ userlastresult.issuccess ? 'You Won' : 'You Lose' }}
                        </h2>
                    </div>
                    <div v-else class="top" :style="{ color: (!userlastresult.issuccess) ? 'red' : 'green' }">
                        <img src="../assets/img/coin.png" alt="coin" class="ccon">
                        <img src="../assets/img/crown.png" alt="crown" class="ccrn">
                        <h2>
                            {{ userlastresult.issuccess ? 'You Won' : 'You Lose' }}
                        </h2>
                    </div>
                    <div  class="result">
                        <div class="option" :class="getResultClass(this.userlastresult.last.clo)">
                        </div>
                    </div>
                    <div  class="row curresult px-4 mt-3">
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
                            &#8377; {{ userlastresult.amount }}
                        </div>
                    </div>
                    <div v-if="this.userlastresult.isbet == true" class="yourresult">
                        <div class="mainr">
                            <div class="row">
                                <div class="col-4">Select</div>
                                <div class="col-4  text-center">Fee</div>
                                <div class="col-4  text-end">Amount</div>
                            </div>
                            <div  v-for=" rows  in  userlastresult.ans " :key="rows.id" :rowsrec="rows" class="row">
                                <div class="col-4">
                                    <div class="select " :class="rows.ans" ></div>
                                </div>
                                <div class="col-4  text-center">-&#8377; {{getBetCharges(rows.amount)}}</div>
                                <div class="col-4  text-end" :style="{  color: (rows.res == 'success') ? 'green' : 'red' }">+100</div>
                            </div>
                        </div>
                    </div>
                    <div class="btnok">
                        <button type="button" @click="hidePoupbet()">Ok</button>
                    </div>
                </div>
            </div>
            <div class="circle-popup">
                <div class="offcanvas fast-parity-offcanva offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" :class="betclass(betbox.title)" id="offcanvasBottomLabel">Join {{
                            betbox.title }}</h5>
                    </div>
                    <div class="offcanvas-body small">
                        <div class="circle-popup-body">
                            <div class="circle-popup-body-recharge">
                                <h4>&#8377; {{ balance }}</h4>
                                <router-link :to="{ name: 'Recharge' }"
                                    class="circle-popup-body-recharge-btn">Recharge</router-link>
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
                            <button class="contract-money-confirm-btn"  data-bs-dismiss="offcanvas" @click="confirmbet()">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.wlrcd.wlb.red {
    background: red;
}

.wlrcd.wlb.gold {
    background: #ffd76e;
}

.wlrcd.wlb.green {
    background: green;
}

.wlrcd.wlb.violet {
    background: #9400d3;
}

/* bet popup start */
.circle-popup .offcanvas.show {
    transform: none;
    max-width: 480px;
    width: 100%;
    margin: auto;
}

.circle-popup .offcanvas {
    max-width: 480px;
    width: 100%;
    margin: auto;
    background: #090f1f;
    border-radius: 14px 14px 0 0;
    padding: 1rem 2.8%;
}

.circle-popup .offcanvas-header {
    padding: 1.4rem 2.8%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.offcanvas-title {
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
}

.circle-popup-body .circle-popup-body-recharge {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #22487c3d;
    height: 55px;
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
}

.circle-popup-body .circle-popup-body-recharge h4 {
    color: #fff;
    /*-webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
    font-size: 2rem;
    font-weight: 800;
    margin: 0 1rem;
    letter-spacing: .3px;
}

.circle-popup-body-recharge .circle-popup-body-recharge-btn {
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
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: .3px;
    padding: 1rem 0;
}

.contract-money-box {
    padding: 1rem 0;
}

.contract-money-inner-box {
    color: #fff;
    font-size: 1.6rem;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 2px;
    border: 1.4px solid #fff;
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
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: .3px;
}

.second-contract-money-box div h4 {
    font-size: 2rem;
    color: #f9ab13;
    font-weight: 700;
}

.contract-money-inner-box-subheading {
    color: #fff;
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

.circle-popup .offcanvas-bottom {
    height: auto !important;
}

.circle-popup .button-group {
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

/* bet popup end */
.betamount-cl {
    margin: 1.5rem 2.8%;
}

.betamount-cl .heading {
    font-size: 2rem;
    color: #fff;
}

.betamount-cl .amount-input {
    border: 1px solid #afafaf30;
    border-radius: 10px;
    position: relative;
    padding: 1rem 3%;
    display: flex;
    background: #afafaf30;
}

.betamount-cl .amount-input .amount-sign {
    background: #075507;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    text-align: center;
    position: relative;
}

.betamount-cl .amount-input .amount-sign i {
    font-size: 1.6rem;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.betamount-cl .amount-input .amount {
    -moz-appearance: textfield;
    color: #fff;
    font-size: 2rem;
    padding: 0 1rem;
    border: none;
    width: 100%;
    background: transparent;
}

.betamount-cl .amount-input .amount-options {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    justify-content: space-around;
    width: 7rem;

}

.betamount-cl .amount-input .amount-increase,
.betamount-cl .amount-input .amount-decrease {
    height: 3rem;
    width: 3rem;
    background: var(--yellow-color);
    right: 3rem;
    color: #090f1f;
    font-size: 2rem;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    user-select: none;
}


.betamount-cl .amount-input .amount::-webkit-inner-spin-button,
.betamount-cl .amount-input .amount::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.amount-options-two {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    padding: 1rem 0;
    height: 2rem;
}

.amount-options-two .amount-option-two {
    font-size: 1.8rem;
    color: #000;
    background: #ffffffe0;
    text-align: center;
    user-select: none;
    cursor: pointer;
    border: 1px solid #afafaf30;
}

.game-details-cl {
    color: #fff;
    padding: var(--padding);
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

.result.gold {
    background-color: #f9ab13;
    background-size: 100%;

}

.result.red {
    background-color: red;
    background-size: 100%;
}

.result.violet {
    background-color: #9400d3;
    background-size: 100%;
}

.result.green {
    background-color: green;
    background-size: 100%;
}

.result.que {
    text-align: center;
}

.wheel-buttons-box .gold {
    border-color: #f9ab13;
    color: #f9ab13;
}

.wheel-buttons-box .red {
    border-color: red;
    color: red;
}

.wheel-buttons-box .violet {
    border-color: #9400d3;
    color: #9400d3;
}

.wheel-buttons-box .green {
    border-color: green;
    color: green;
}

.wheel-buttons-box .gold.active,
.wheel-buttons-box .violet.active,
.wheel-buttons-box .red.active,
.wheel-buttons-box .green.active {
    border-color: #ffffffb3 !important;
    color: #ffffffb3 !important;
}
</style>
<script>
export default {
    data() {
        return {
            user: {
                username: null,
            },
            nexttimestamp: null,
            resultrec: '',
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
            userlastresult: {
                isbet: false,
                issuccess: false,
                amount: 0,
                ans: null,
                last: {}
            },
            allowedbet:false,
            wheelInterval: null,
            refreshcountdown: null,
            timerCounter: null,
        }
    },
    mounted: function () {
        this.GetUser().then(() => {
            this.user.username = this.Users.username;
            this.fechresultrec().then(() => {
                this.start();
            });
            this.fatchUserResults();
            this.countdown();
        });
        this.refreshcountdown = setInterval(this.countdown, 1000);
        this.timerCounter = setInterval(this.timer, 100);
    },
    beforeUnmount: function () {
        clearInterval(this.refreshcountdown);
        clearInterval(this.timerCounter);
        if (this.wheelInterval) {
            clearInterval(this.wheelInterval);
        }
    },
    methods: {
        start() {
            if (this.resultrec.length > 0) {
                this.ani = this.resultrec[this.resultrec.length - 1].ans;
                document.getElementById("circle").style.transform = "rotate(" + this.ani + "deg)";
            }
        },
        wheelroate() {
            const wheel = document.getElementById("circle");
            const style = window.getComputedStyle(wheel);
            const transform = style.getPropertyValue("transform");
            const matrix = transform.split("(")[1].split(")")[0].split(",");
            let anglenew = Math.round(Math.atan2(matrix[1], matrix[0]) * (180 / Math.PI));
            anglenew = (anglenew + 30) % 360;
            wheel.style.transform = "rotate(" + anglenew + "deg)";
        },
        getBetCharges(amount) {
            return (amount * 2.5) / 100;
        },
        getbetwinAmount(amount) {
            var f;
            if (this.betbox.target == "green") {
                f = 97.5 / 100 * amount * 50;
                return f.toFixed(2);
            } else if (this.betbox.target == "gold") {
                f = 97.5 / 100 * amount * 2;
                return f.toFixed(2);
            } else if (this.betbox.target == "red") {
                f = 97.5 / 100 * amount * 3;
                return f.toFixed(2);
            } else if (this.betbox.target == "violet") {
                f = 97.5 / 100 * amount * 5;
                return f.toFixed(2);
            }

        },
        timer() {
            var countDownDate = Date.now();
            var distance = 30000 - (countDownDate % 30000);

            var seconds = Math.floor(distance / 1000);
            var milliseconds = distance % 1000;

            var sec1 = Math.floor(seconds / 10);
            var sec2 = seconds % 10;

            var milisec1 = Math.floor(milliseconds / 100);
            document.getElementById('timer3').innerHTML = "<span>" + sec1 + "</span><span>" + sec2 + "</span>:<span>0</span><span>" + milisec1 + "</span>";

        },
        countdown() {
            var countDownDate = Date.now();
            var distance = 30000 - (countDownDate % 30000);
            distance = Math.floor(distance / 1000);
            // var countDownDate = Date.parse(new Date) / 1e3;
            // var distance = 30 - countDownDate % 30;
            // var i = distance / 60,
            // n = distance % 60;
            // var minutes = Math.floor(i);
            // var seconds = ('0' + Math.floor(n)).slice(-2);
            // var sec1 = (seconds % 100 - seconds % 10) / 10;
            // var sec2 = seconds % 10;
            // document.getElementById('timer').innerHTML = "<span>0</span><span>" + Math.floor(minutes) + "</span>:<span>" + sec1 + "</span><span>" + sec2 + "</span>";
            // document.getElementById('timer3').innerHTML = "<span>0</span><span>" + Math.floor(minutes) + "</span>:<span>" + sec1 + "</span><span>" + sec2 + "</span>";
            var dis = distance % 2;
            if (dis == 0 && 5 < distance) {
                this.getBets();
            }
            if (30 > distance) {
                this.allowedbet = true;
                this.betbox.timeout = true;
            }
            if ((5 > distance && distance >= 0)) {
                if (!this.wheelInterval) {
                    this.wheelInterval = setInterval(this.wheelroate, 1);
                }
                document.getElementById("betmessage").innerHTML = "Wait For Result";
            } else {
                document.getElementById("betmessage").innerHTML = "Place your bets";
                if (this.wheelInterval) {
                    clearInterval(this.wheelInterval);
                    this.wheelInterval = null;
                }

                this.start();
            }
            if (5 >= distance) {
                // document.getElementById("joinred").classList.add("active");
                // document.getElementById("joinviolet").classList.add("active");
                // document.getElementById("joingreen").classList.add("active");
                // document.getElementById("joingold").classList.add("active");
                this.betbox.timeout = false;
                this.allowedbet = false;

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
            }
            if (30 == distance || 29 == distance || 28 == distance) {
                this.fechresultrec().then(() => {
                    if(this.userlastresult.isbet == true){
                        document.getElementById("c_resulPopup").classList.add("show");
                        setTimeout(()=>{
                            document.getElementById('c_resulPopup').classList.remove('show');
                        },5000)
                    }
                    this.fatchUserResults();
                    this.GetUser();
                });
            } else {
                document.getElementById("c_resulPopup").classList.remove("show");
            }
        },
        hidePoupbet(){
            document.getElementById("c_resulPopup").classList.remove("show");
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
        join(label) {
            if (this.betbox.timeout) {
                if (label == "gold") {
                    this.betbox.target = "gold";
                    this.betbox.boxcolor = "gold";
                    this.betbox.title = "Gold";
                } else if (label == "red") {
                    this.betbox.target = "red";
                    this.betbox.boxcolor = "red";
                    this.betbox.title = "Red";
                } else if (label == "violet") {
                    this.betbox.target = "violet";
                    this.betbox.boxcolor = "violet";
                    this.betbox.title = "Violet";
                } else if (label == "green") {
                    this.betbox.target = "green";
                    this.betbox.boxcolor = "green";
                    this.betbox.title = "Green";
                }
            }

        },
        betclass(name) {
            return name + ' ' + this.betbox.boxcolor;
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
        async fechresultrec() {
            const data = new FormData();
            data.append("username", this.user.username);
            const res = await this.callApi('post', 'api/user/v1/circle/results', data);
            if (res.status === 200) {
                this.resultrec = res.data.data;
                this.nexttimestamp = res.data.next;
                this.userlastresult = res.data.userbet;

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
            const res = await this.callApi('post', 'api/user/v1/user/circle', data);
            if (res.status === 200) {
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
            // this.hidebetbox();
            if (this.balance >= this.betbox.amount && this.betbox.timeout == true) {
                var data = new FormData();
                data.append("username", this.user.username);
                data.append("period", this.nexttimestamp);
                data.append("amount", this.betbox.amount);
                data.append("ans", this.betbox.target);
                const res = await this.callApi('post', 'api/user/v1/user/bet/circle', data);
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
                this.walert("Low Balance! Please Recharge First.");
            }

        },
        async getBets() {
            const data = new FormData();
            data.append('period', this.nexttimestamp)
            const res = await this.callApi('post', '/api/user/v1/circle/bets', data);
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
    }
}
</script>
