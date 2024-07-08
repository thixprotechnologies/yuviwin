<template>
    <section class="home-section">
        <div class="center jetgame avitor-game-center">
            <div class="avitor-game-nav">
                <div class="avitor-game-nav-draw">
                    <router-link :to="{ name: 'Profile' }"><img src="../assets/img/draw.png" /></router-link>
                    <h4>{{ period }}</h4>
                </div>

                <div class="avitor-game-nav-right">
                    <a href="#"><img src="../assets/img/avt-nav-right1.png" /></a>
                    <router-link :to="{ name: 'Home' }"><img src="../assets/img/avt-nav-right3.png" /></router-link>
                </div>
            </div>
            <!-- End Avitor game navbar -->

            <!-- Start avitor nav bottom line -->
            <div class="avitor-game-wrap-line">
                <div class="wrapes" id="resultsold">
                    <div v-for="(item, index) in record" :key="item.id" :class="'wrap' + getRandomNumber(item.id)">
                        {{ item.crashpoint }}x
                    </div>

                </div>

                <div class="wrapes-RH" @click="showRecords()">
                    <a href="javascript:void(0)"><i class="fa-solid fa-clock-rotate-left fa-flip-horizontal"
                            aria-hidden="true"></i>
                        R-H
                        <i class="fa fa-sort-desc" id="down" aria-hidden="true"></i></a>
                </div>
            </div>
            <!-- End avitor nav bottom line -->

            <!-- Start next-round part -->
            <div class="" id="jetbox" style="height: 250px;position: relative;">
                <video autoplay muted loop>
                    <source :src="videoSource" type="video/mp4">
                </video>
                <div ref="stageContainer" id="myCanvas" style="width: 100%; height: -webkit-fill-available;"></div>
            </div>
            <!--End next-round part-->
            <div class="jetbet-box">
                <div class="row jetbet-main">
                    <div class="col-12 py-1">
                        <p>Balance : &#8377; {{ balance }}</p>
                    </div>
                    <div class="col-7 row justify-content-center align-items-center">
                        <div class="amount">
                            <img src="../assets/img/minus.png" @click="minus()" class="plusImg">
                            <input type="number" class="amountI" min="20" max="100000" v-model="prebet"
                                placeholder="10.00">
                            <img src="../assets/img/plus.png" @click="plus()" class="minusImg">
                        </div>
                    </div>
                    <div class="col-5 p-0">
                        <div class="startbet" @click="joinjetbet()">
                            <h4>JOIN</h4>
                            <p v-if="jetflying == true">(Join Next)</p>
                        </div>
                    </div>
                    <div class="col-12 py-3 d-flex justify-content-around align-items-center">
                        <div class="addbtn" @click="add(20)">20</div>
                        <div class="addbtn" @click="add(50)">50</div>
                        <div class="addbtn" @click="add(1000)">100</div>
                        <div class="addbtn" @click="add(1000)">1000</div>
                        <div class="addbtn" @click="add(10000)">10000 </div>
                    </div>
                    <div class="col-12 py-3">
                        <div class="row p-0 m-0 automain">
                            <div class="col-4 text-center">
                                Auto
                            </div>
                            <div class="col-8">
                                <div class="row auto">
                                    <div class="col-2 d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="achk" v-model="autocashout">
                                    </div>
                                    <div class="col-10 p-0 m-0 d-flex justify-content-end align-items-center">
                                        <div class="autoamt">
                                            <img src="../assets/img/minus.png" @click="autominus()" class="plusImg">
                                            <input type="number" class="amountI" min="1.01" v-model="auto"
                                                placeholder="10.00">
                                            <img src="../assets/img/plus.png" @click="autoplus()" class="minusImg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bet-filter-box" style="height:auto; overflow-y: unset; background:#fff; margin: 0;">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" style="color: #000;" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#betFilter1" type="button" role="tab" aria-controls="betFilter1"
                            aria-selected="true">
                            All Bets
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" style="color: #000;" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#betFilter2" type="button" role="tab" aria-controls="betFilter2"
                            aria-selected="false">
                            My Bets
                        </button>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="betFilter1" role="tabpanel"
                        aria-labelledby="betFilter1-tab">
                        <div class="betFilter-table-box">
                            <table class="avitor-game1-table jettable">
                                <tr class="heading">
                                    <th>Period</th>
                                    <th>point</th>
                                    <th>status</th>
                                    <th>crashed</th>
                                    <th>amount</th>
                                    <th>time</th>
                                </tr>
                                <tr v-for="(item, index) in alluserrecord" :key="item.id">
                                    <td>
                                        {{ item.period }}
                                    </td>
                                    <td>
                                        &#8377; {{ item.amount }}
                                    </td>
                                    <td>{{ item.status }}</td>
                                    <td>{{ item.winpoint }}</td>
                                    <td>&#8377; {{ getWinLoose(item.amount, item.status, item.winpoint) }}</td>
                                    <td>{{ formatTime(item.time) }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="betFilter2" role="tabpanel" aria-labelledby="betFilter2-tab">
                        <div class="betFilter-table-box">
                            <table class="avitor-game1-table jettable">
                                <tr class="heading">
                                    <th>Period</th>
                                    <th>point</th>
                                    <th>status</th>
                                    <th>crashed</th>
                                    <th>amount</th>
                                    <th>time</th>
                                </tr>
                                <tr v-for="(item, index) in betrec" :key="item.id">
                                    <td>
                                        {{ item.period }}
                                    </td>
                                    <td>
                                        &#8377; {{ item.amount }}
                                    </td>
                                    <td>{{ item.status }}</td>
                                    <td>{{ item.winpoint }}</td>
                                    <td>&#8377; {{ getWinLoose(item.amount, item.status, item.winpoint) }}</td>
                                    <td>{{ formatTime(item.time) }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
#jetbox {
    position: relative;
}

#jetbox video {
    width: 100%;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 450px) {
    #jetbox video {
        width: unset;
        height: 250px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}

/* update old style start  */
.jettable {
    text-align: center;
}

.jettable.avitor-game1-table tr th {
    color: #000 !important;
}

.jettable.avitor-game1-table td {
    color: #000 !important;
}

/* update old style end  */
.jetgame input[type=number] {
    /* Disable default increment and decrement buttons */
    -moz-appearance: textfield;
    /* Firefox */
    -webkit-appearance: none;
    /* WebKit/Blink */
    appearance: none;
    /* Standard */
}

/* Hide inner spin button */
.jetgame input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

/* Hide outer spin button */
.jetgame input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
}

.jetbet-box {
    color: #000;
    background: #fff;
    font-size: 1.8rem;
    padding: var(--padding);
}

.jetbet-box .jetbet-main {
    background: linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #ffd76e, #f9ab13) border-box;
    border-radius: 10px;
    border: 1px solid transparent;
    padding: var(--padding);
}

.jetbet-box .jetbet-main .amount {
    background: linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #ffd76e, #f9ab13) border-box;
    border-radius: 20px;
    border: 1px solid transparent;
    position: relative;
    padding: 0;
    height: 35px;
}

.jetbet-box .jetbet-main .amount .amountI {
    height: 35px;
    background: transparent;
    text-align: center;
    color: #000;
    width: 100%;
}

.jetbet-box .jetbet-main .amount .minusImg,
.jetbet-box .jetbet-main .amount .plusImg {
    height: 35px;
    width: 35px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
}

.jetbet-box .jetbet-main .amount .minusImg {
    right: 0;
}

.jetbet-box .jetbet-main .amount .plusImg {
    left: 0;
}

.jetbet-box .jetbet-main .startbet {
    min-height: 35px;
    padding: 0;
    margin: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--yellow-color);
    border-radius: 0.5rem;
    border: 1px solid #ffd76e;
    position: relative;
    color: #000;
    cursor: pointer;
    user-select: none;
}

.jetbet-box .jetbet-main .startbet h4 {
    font-size: 2.2rem;
    text-transform: uppercase;
}

.jetbet-box .jetbet-main .startbet p {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: red;
}

.jetbet-box .jetbet-main .addbtn {
    align-items: center;
    background: #dfeef1;
    color: #000;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
}

.jetbet-box .jetbet-main .addbtn.active {
    border: 1px solid #ffd76e;
}

.jetbet-box .jetbet-main .automain {
    background: linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #ffd76e, #f9ab13) border-box;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 0;
    font-size: 2rem;
    height: 35px;
}

.jetbet-box .jetbet-main .automain .autoamt {
    position: relative;
    height: 30px;

}

.jetbet-box .jetbet-main .automain .autoamt .plusImg,
.jetbet-box .jetbet-main .automain .autoamt .minusImg {
    height: 30px;
    width: 30px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
}

.jetbet-box .jetbet-main .automain .autoamt .plusImg {
    left: 0;
}

.jetbet-box .jetbet-main .automain .autoamt .amountI {
    height: 30px;
    background: transparent;
    text-align: center;
    color: #000;
    width: 100%;
}

.jetbet-box .jetbet-main .automain .autoamt .minusImg {
    right: 0;
}

.jetbet-box .jetbet-main .automain .achk {
    height: 25px;
    width: 25px;
    border-radius: 5px;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid rgba(0, 0, 0, .25);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}

.jetbet-box .jetbet-main .automain .achk:checked {
    background-color: #ffd76e;
    border-color: #ffd76e;
}

.jetbet-box .jetbet-main .automain .achk:checked[type=checkbox] {
    background-image: url('../assets/img/check2.png');
}
</style>
<script>
import axios from "axios";
import { io } from "socket.io-client";
import $ from "jquery";
import Konva from 'konva'
// import { random } from "animejs";


export default {
    data() {
        return {
            videoSource: '/uploads/video/video.mp4',
            socket: null,
            period: '***',
            prebet: 20,
            autocashout: false,
            auto: 1.01,
            betrec: [],
            record: '',
            alluserrecord: '',
            layer: null,
            jetangel: 1,
            anim: null,
            crashheight: 0,
            crashwidth: 0,
            jetstartX: 0,
            jetstartY: 0,
            jet: null,
            multiple: 0.99,
            secounds: 3,
            crashy: 3,
            isbet: false,
            cashOutValue: 30,
            betamount: 40,
            realTimeUsers: [],
            cashoutAnimY: 50,
            ychanges: 1,
            xchanges: 0,
            cashoutAnimInt: null,
            gameanimation: null,
            wsconnected: false,
            jetflying: false,
            jetcrashed: false,
            jetcrashedremoved: false,
            jetcountdown: 20,
            jetPrepare: false,
            countdownInterval: null,
            username: "null",
            balance: 0,
            jetbetAllowed: false,
            deviceWidth: 200,
        }
    },
    created: function () {
        document.addEventListener('visibilitychange', this.onVisibilityChange);
        this.GetUser().then(() => {
            this.username = this.Users.username;
            this.balance = this.Users.balance;
            // console.log('this', this.username);
            this.fetchhistory();
            this.userBets();
        });
        window.addEventListener('resize', this.handleResize);

    },
    beforeUnmount: function () {
        this.socket.removeAllListeners();
        document.removeEventListener('visibilitychange', this.onVisibilityChange);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    mounted() {
        const storedAuto = parseInt(sessionStorage.getItem('autocashout'));
        if (!isNaN(storedAuto) && storedAuto != 0) {
            this.autocashout = storedAuto;
        }

    },
    unmounted: function () {
        this.socket.disconnect();
        clearInterval(this.jetintervel);
        clearInterval(this.gameanimation);
    },
    computed: {
        isOnline() {
            return navigator.onLine;
        }
    },
    watch: {
        isOnline() {
            this.online = this.isOnline;
        },
        autocashout(newVal) {
            sessionStorage.setItem('autocashout', newVal);
        },
        cashoutAnimY(newValue) {
            if (newValue > this.crashheight) {
                this.cashoutAnimY = 50;
                if (this.cashoutAnimInt) {
                    clearInterval(this.cashoutAnimInt);
                }
            }
        },
        jetflying(newvalu) {
            if (newvalu == true) {
                this.gameanimation = this.jetgame();
                this.allusers();
            } else {
                this.anim = null;
                this.gameanimation = null;
            }
            this.jetbetAllowed = true;
        },
        jetcrashed(newv) {
            if (newv == true) {
                this.gameanimation = null;
                this.gameanimation = this.jetgame();
                this.fetchhistory();
            }
            this.jetbetAllowed = false;
        },
        jetcrashedremoved(newvalue) {
            if (newvalue == true) {
                this.gameanimation = null;
                this.gameanimation = this.jetgame();
                this.userBets();
            }
            this.jetbetAllowed = true;
        },
        jetPrepare(newvalue) {
            if (newvalue == true) {
                if (this.anim) {
                    this.anim.stop();
                }
                this.anim = null;
                this.gameanimation = null;
                this.gameanimation = this.jetgame();
                this.usernextCurrent();
            }
            this.jetbetAllowed = true;
        },
        wsconnected(newvalu) {
            if (newvalu == false) {
                this.jetflying = false;
                this.jetcrashed = false;
                this.jetcrashedremoved = false;
                this.jetcountdown = 20;
                this.jetPrepare = false;
                if (this.anim) {
                    this.anim.stop();
                    this.anim = null;
                }
                this.gameanimation = null;
                this.jetbetAllowed = false;
            }
        },
        deviceWidth(newvalu) {
            if (newvalu < 450) {
                this.crashwidth = newvalu;
            }
        }
    },
    mounted: function () {
        this.crashwidth = $('#jetbox').width();
        this.crashheight = $('#jetbox').height();
        this.jetstartX = 10;
        this.jetstartY = this.crashheight - 80;
        this.socket = io('https://ejetxb.4.us-1.fl0.io', {
            reconnect: true, // Allow reconnection
            transports: ['websocket'],
            upgrade: false,
        });
        this.socket.on('connect_error', (error) => {
            // console.error('Socket connection error:', error);
        });
        this.socket.on('connect', () => {
            this.wsconnected = true;
            // console.log(`Connected with ID ${this.socket.id}`);
        });
        this.socket.on('disconnect', () => {
            console.log(`Disconnected from server`);
            this.wsconnected = false;
            this.promopt = "WAITING FOR CONNECTION";
            this.jetflying = false;
            this.jetcrashed = false;
            this.jetcrashedremoved = false;
            this.jetcountdown = 20;
            this.jetPrepare = false;
            if (this.anim) {
                this.anim.stop();
                this.anim = null;
            }
            this.gameanimation = null;
        });
        this.socket.on('crash-update', (data) => {
            this.updatejetcrespoint(data);
        });
        this.socket.on('working', (data) => {
            // console.log(`Server Status:`, data);
            setTimeout(() => {
                // if (this.flybol) {
                //     this.jetGame();
                //     this.jet = true;
                //     this.jetcrash = false;
                //     this.jetstart = false;
                // }
            }, 500);
        });
        this.socket.on('reset', (data) => {
            // console.log('reset');
            this.period = data;
            this.jetflying = false;
            this.jetcrashed = true;

        });

        this.socket.on('updatehistory', (data) => {
            this.jetflying = false;
            this.period = data.period;
            this.jetcrashed = true;
        });

        this.socket.on('removecrash', (data) => {
            // console.log('removecrash');
            this.period = data;
            this.jetcrashed = false;
            this.jetcrashedremoved = true;
        });
        this.socket.on('prepareplane', (data) => {
            // console.log('prepareplane');
            this.period = data;
            this.secounds = 3;
            this.crashy = 3;
            this.multiple = 0.99;
            this.jetPrepare = true;
            this.jetcrashedremoved = false;
        });
        this.socket.on('betout', (data) => {
            this.generateRealTimeUsers(data);
            this.GetUser();
            this.allusers();
            this.usernextCurrent();
            this.userBets();
        });
        this.socket.on('flyplane', (data) => {
            this.jetPrepare = false;
            this.jetcrashedremoved = false;
            this.period = data;
        });
    },
    methods: {
        handleResize() {
            // Update deviceWidth when window is resized
            this.deviceWidth = window.innerWidth;
        },
        jetgame() {
            var width = this.crashwidth;
            var height = this.crashheight;
            $('#myCanvas').attr('width', width).attr('height', height);
            var stage = new Konva.Stage({
                container: this.$refs.stageContainer,
                width,
                height,
            });
            var bgLayer = new Konva.Layer();
            // stage.add(bgLayer);
            var backgroundImage = new Image();
            backgroundImage.src = 'uploads/flyback.png';
            backgroundImage.onload = () => {
                var bgRect = new Konva.Rect({
                    width: width,
                    height: height,
                    fillPatternImage: backgroundImage,
                    fillPatternScale: {
                        x: width / backgroundImage.width,
                        y: height / backgroundImage.height,
                    },
                    // opacity: 0.5,
                    listening: false,
                    perfectDrawEnabled: false,
                });
                bgLayer.add(bgRect);
                bgLayer.batchDraw();
                bgLayer.cache();
            };

            var graphGroup = new Konva.Group({
                x: 10,
                y: 0,
                listening: false,
                perfectDrawEnabled: false,
            });
            this.layer = new Konva.Layer();
            this.layer.clear();
            var jetImage = new Image();
            if (this.jetflying == true) {
                this.secounds = 3;
                this.crashy = 3;
                this.multiple = 0.99;
                jetImage.src = 'uploads/jet.png';
                jetImage.onload = () => {
                    this.jet = new Konva.Image({
                        image: jetImage,
                        width: 50,
                        height: 50,
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    this.jetflyanimation(width, height, stage, this.layer, this.jet, graphGroup)
                };
            }
            else if (this.jetcrashed == true) {
                jetImage.src = 'uploads/jetleft.png';
                jetImage.onload = () => {
                    this.jet = new Konva.Image({
                        image: jetImage,
                        width: 50,
                        height: 50,
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    this.jetcrashedAnimation(width, height, stage, this.layer, this.jet, graphGroup)
                };
            } else
                if (this.jetcrashedremoved == true) {
                    jetImage.src = 'uploads/jetTop.png';
                    jetImage.onload = () => {
                        this.jet = new Konva.Image({
                            image: jetImage,
                            width: 50,
                            height: 50,
                            listening: false,
                            perfectDrawEnabled: false,
                        });
                        this.jetcrashedremovedAnimation(width, height, stage, this.layer, this.jet, graphGroup)
                    };
                } else if (this.jetPrepare == true) {
                    jetImage.src = 'uploads/jetleft.png';
                    jetImage.onload = () => {
                        this.jet = new Konva.Image({
                            image: jetImage,
                            width: 50,
                            height: 50,
                            listening: false,
                            perfectDrawEnabled: false,
                        });
                        this.jetPrepareAnimation(width, height, stage, this.layer, this.jet, graphGroup)
                    };

                } else {
                    stage.clear();
                }
        },
        jetPrepareAnimation(width, height, stage, layer, jet, graphGroup) {
            jet.setAttrs({
                x: 10,//width-60,//10,
                y: (height - 80),
                listening: false,
                perfectDrawEnabled: false,
            });
            layer.add(graphGroup);
            // loadingGroup.add(jet);
            this.graphYDraw(width, height, this.crashy, layer, 4, graphGroup);
            this.graphxDraw(width, height, this.secounds, layer, 4, graphGroup);
            layer.add(jet);
            stage.add(layer);
        },
        jetcrashedremovedAnimation(width, height, stage, layer, jet, graphGroup) {
            jet.setAttrs({
                x: -20,
                y: -20,
                listening: false,
                perfectDrawEnabled: false,
            });
            const loadingGroup = new Konva.Group({
                x: width / 2,
                y: height / 2,
            });
            layer.add(loadingGroup);
            layer.add(graphGroup);
            const dotCount = 20;
            const dotGroup = new Konva.Group();
            for (let i = 0; i < dotCount; i++) {
                const dot = new Konva.Circle({
                    x: 50 * Math.cos((2 * Math.PI * i) / dotCount),
                    y: 50 * Math.sin((2 * Math.PI * i) / dotCount),
                    radius: 3,
                    fill: i % 2 === 0 ? 'blue' : 'red',
                });
                dotGroup.add(dot);
            }
            loadingGroup.add(dotGroup);
            loadingGroup.add(jet);
            layer.draw();
            const aboveText = new Konva.Text({
                x: width / 2,
                y: height / 2 - 70,
                text: 'NEXT FLY STARTING...',
                fontSize: 25,
                fontFamily: 'Sans-sarif',
                fill: '#ffd76e',
                align: 'center',
            });
            const timetext = new Konva.Text({
                x: -25,
                y: 60,
                text: this.jetcountdown + ' Sec',
                fontSize: 25,
                fontFamily: 'Sans-sarif',
                fill: '#ffd76e',
                align: 'center',
                listening: false,
                perfectDrawEnabled: false,
            });
            aboveText.offsetX(aboveText.width() / 2);
            aboveText.offsetY(aboveText.height() / 2);
            layer.add(aboveText);
            loadingGroup.add(timetext);
            this.countdownInterval == setInterval(() => {
                this.jetcountdown--;
                timetext.text(this.jetcountdown + ' Sec');
                if (this.jetcountdown <= 0) {
                    this.jetcountdown = 20;
                    clearInterval(this.countdownInterval);
                }
            }, 1000)
            stage.add(layer);
            this.anim = new Konva.Animation(() => {
                dotGroup.rotate(2);

            }, layer);
            this.anim.start();
        },
        jetcrashedAnimation(width, height, stage, layer, jet, graphGroup) {
            jet.setAttrs({
                x: width - 80,
                y: 10,
                listening: false,
                perfectDrawEnabled: false,
            });
            var curvedLine = new Konva.Line({
                x: 0,
                y: (height - 70) * 2 / 3 + 35,
                points: [0, 50, width - 50, 10],
                stroke: 'orange',
                strokeWidth: 4,
                tension: 1,
                listening: false,
                perfectDrawEnabled: false,
            });
            const angleInRadians = 2 * (Math.PI / 180);
            const startPoint = { x: 0, y: 50 };
            const endPoint = { x: width - 25, y: -150 };
            const midPoint = {
                x: (startPoint.x + endPoint.x) / 2,
                y: (startPoint.y + endPoint.y) / 2,
            };
            const distance = 30;
            const controlPoint = {
                x: midPoint.x + distance * Math.cos(angleInRadians),
                y: midPoint.y + distance * Math.sin(angleInRadians),
            };
            const newPoints = [startPoint.x, startPoint.y, controlPoint.x, controlPoint.y, endPoint.x, endPoint.y];
            curvedLine.points(newPoints);
            var crashed = new Konva.Group({
                x: 150,
                y: 50,
                listening: false,
                perfectDrawEnabled: false,
            });
            var label = 'Crashed ' + this.multiple;
            var simpleText = new Konva.Text({
                padding: 5,
                text: label,
                fontSize: 20,
                fill: 'red',
                align: 'center',
                listening: false,
                perfectDrawEnabled: false,
            });
            var rect = new Konva.Rect({
                fill: '#061831',
                width: simpleText.width(),
                height: simpleText.height(),
                cornerRadius: 20,
                listening: false,
                perfectDrawEnabled: false,
            });
            crashed.add(rect);
            crashed.add(simpleText);
            layer.add(crashed);
            layer.add(curvedLine);
            layer.add(graphGroup);
            this.graphYDraw(width, height, this.crashy, layer, 4, graphGroup);
            this.graphxDraw(width, height, this.secounds, layer, 4, graphGroup);
            stage.add(layer);

        },
        jetflyanimation(width, height, stage, layer, jet, graphGroup) {
            jet.setAttrs({
                x: 10,//width-60,//10,
                y: (height - 80),
                listening: false,
                perfectDrawEnabled: false,
            });
            var loadingGroup = new Konva.Group({
                x: 0,
                y: 0,
            });
            var fireAnimation = this.fireAnimation(jet);
            var curvedLine = new Konva.Line({
                x: 0,
                y: (height - 70) * 2 / 3 + 35,
                points: [0, 0, jet.x() + 5, jet.y() - 120],
                stroke: 'orange',
                strokeWidth: 4,
                tension: 1,
                listening: false,
                perfectDrawEnabled: false,
            });
            layer.add(graphGroup);
            layer.add(fireAnimation);
            layer.add(curvedLine);
            layer.add(loadingGroup);
            loadingGroup.add(jet);
            stage.add(layer);
            this.jetflyanimationMain(width, height, layer, jet, stage, fireAnimation, curvedLine, graphGroup);
        },
        jetflyanimationMain(width, height, layer, jet, stage, fireAnimation, curvedLine, graphGroup) {
            var buttonGroup = new Konva.Group({
                perfectDrawEnabled: false,
            });
            var square = new Konva.Group({
                listening: false,
                perfectDrawEnabled: false,
            });
            var squareRect = new Konva.Rect({
                listening: false,
                perfectDrawEnabled: false,
            });
            var crshbtn = new Konva.Rect({
                listening: false,
                perfectDrawEnabled: false,
            });
            var crashpointtext = new Konva.Text({
                listening: false,
                perfectDrawEnabled: false,
            });
            var cashOutButtonGroup = new Konva.Group({
                listening: true,

                perfectDrawEnabled: false,
            });
            var cashButton = new Konva.Rect({
                listening: true,
                perfectDrawEnabled: false,
            });
            var cashButtonText = new Konva.Text({
                listening: false,
                perfectDrawEnabled: false,
            });
            var cashoutAnimGroup = new Konva.Group({
                x: 180,
                y: this.cashoutAnimY,
                listening: false,
                perfectDrawEnabled: false,
            });
            cashOutButtonGroup.on('click', () => {
                this.allbetcancel(this.multiple);
                this.cashoutAnimInt = setInterval(() => {
                    this.showAnimcashoutBtn(layer, cashoutAnimGroup);
                }, 100);
            });
            this.anim = new Konva.Animation((frame) => {

                let newX = jet.x();
                let newY = jet.y();
                if (this.multiple > 3) {
                    newX = width - 80;
                    newY = 10;
                    this.jetangel = 30;
                } else {
                    // if (((width - 80) / 3) * this.secounds > width - 80) {
                    if (this.secounds > 3) {
                        newX = width - 80;// jet.x();
                    } else {
                        if(jet.x() < width - 80){
                            newX = jet.x() + 4;
                        }else{
                            newX = width - 80;
                        }
                    }
                    if ((height - 80) - ((height - 20) / 3) * this.multiple < 10) {
                        newY = 10;
                    } else {
                        if (jet.x() < (width - 80)) {
                            newY = this.jetstartY;
                        } else {
                            newY = (height - 80) - ((height - 20) / 3) * this.multiple;
                        }
                    }
                }
                const angleInRadians = 2 * (Math.PI / 180);
                const startPoint = { x: 0, y: 50 };
                const endPoint = { x: jet.x() + 10, y: jet.y() - 125 };
                const midPoint = {
                    x: (startPoint.x + endPoint.x) / 2,
                    y: (startPoint.y + endPoint.y) / 2,
                };
                const distance = 30;
                const controlPoint = {
                    x: midPoint.x + distance * Math.cos(angleInRadians),
                    y: midPoint.y + distance * Math.sin(angleInRadians),
                };
                var newPoints;
                if (this.secounds > 3) {
                    newPoints = [startPoint.x, startPoint.y, controlPoint.x, controlPoint.y, endPoint.x, endPoint.y];
                } else {
                    newPoints = [startPoint.x, startPoint.y, endPoint.x, endPoint.y];
                }
                curvedLine.points(newPoints);
                const cashOutButton = this.createButtonWithText(
                    buttonGroup,
                    square, squareRect, crshbtn, crashpointtext, cashOutButtonGroup, cashButton, cashButtonText,
                    20,
                    20,
                    200, 40,
                    this.isbet,
                    this.cashOutValue,
                );
                layer.add(cashOutButton);
                if (newY < (height - 80)) {
                    jet.rotation(-this.jetangel);
                    fireAnimation.rotation(-this.jetangel);
                    if (this.jetangel < 30) {
                        this.jetangel += 0.1;
                    }
                    curvedLine.tension(0.5);
                    fireAnimation.position({
                        x: jet.x() + 20,
                        y: jet.y() + 25,
                    });
                } else {
                    curvedLine.tension(0.5);
                    fireAnimation.position({
                        x: jet.x() + 5,
                        y: jet.y() + 30,
                    });
                }
                jet.position({ x: newX, y: newY });
                this.cashOutValue = (this.betamount * this.multiple).toFixed(2);
                if (this.crashy < this.multiple) {
                    this.crashy = Math.trunc(this.multiple);
                }
                graphGroup.removeChildren();
                this.graphYDraw(width, height, this.crashy, layer, 4, graphGroup);
                this.graphxDraw(width, height, this.secounds, layer, 4, graphGroup);
                this.showRealTimeUsers(this.realTimeUsers, graphGroup);
            });
            this.anim.start();
        },
        generateRealTimeUsers(id) {
            this.realTimeUsers.push({
                id: id, // Generate random ID between 0 and 99
                x: this.jet.x(), // Generate random X position within window width
                y: this.jet.y(), // Generate random Y position within window height
            });
        },
        showRealTimeUsers(users, graphGroup) {
            if (users.length > 0) {
                users.forEach(user => {
                    const userImg = new Image();
                    userImg.src = 'uploads/userdef.png';
                    const userImage = new Konva.Image({
                        x: user.x,//curvedLine.x(),
                        y: user.y,
                        image: userImg,
                        width: 20,
                        height: 20,
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    user.y = user.y + 2;

                    userImg.onload = () => {
                        graphGroup.add(userImage);
                    };
                });
                this.realTimeUsers = this.realTimeUsers.filter(user => user.y !== this.crashheight - 20);
            }
        },
        showAnimcashoutBtn(layer, cashoutAnimGroup) {
            cashoutAnimGroup.removeChildren();
            cashoutAnimGroup.position({ x: cashoutAnimGroup.x(), y: this.cashoutAnimY });
            for (let i = 0; i < Math.floor(Math.random() * 2) + 3; i++) {
                const size = Math.floor(Math.random() * 11) + 5; // Random size between 10 and 20
                const position = Math.floor(Math.random() * 30); // Random size between 10 and 20
                var img = new Image();
                img.src = 'uploads/btncoin.png';
                img.onload = () => {
                    var image = new Konva.Image({
                        image: img,
                        width: size,
                        height: size,
                        y: position,
                        x: position,
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    cashoutAnimGroup.add(image);
                };
            }
            layer.add(cashoutAnimGroup);
            this.cashoutAnimY += 10;
        },
        createButtonWithText(buttonGroup, square, squareRect, crshbtn, crashpointtext, cashOutButtonGroup, cashOutButton, cashOutButtonText, x, y, width, height, isBet, cashOutValue) {
            buttonGroup = buttonGroup.setAttrs({
                x: x,
                y: y,
            });
            square = square.setAttrs({
                x: 0,
                y: 0,
            });
            squareRect = squareRect.setAttrs({
                width: width,
                height: height,
                cornerRadius: 5,
                stroke: 'black',
                strokeWidth: 1,
            });
            buttonGroup.add(square);
            square.add(squareRect);
            if (isBet) {
                const crshbtnWidth = (width / 2);
                crshbtn = crshbtn.setAttrs({
                    width: crshbtnWidth,
                    height: height,
                    cornerRadius: 5,
                });
                crashpointtext = crashpointtext.setAttrs({
                    x: (crshbtnWidth / 2) - 40,
                    y: (height - 30) / 2,
                    text: this.multiple + 'X',
                    fontSize: 30,
                    fill: 'red',
                    align: 'center',
                    verticalAlign: 'middle',
                });
                const cashOutBtnWidth = width / 2;
                cashOutButtonGroup = cashOutButtonGroup.setAttrs({
                    x: cashOutBtnWidth,
                    y: height / 2 - 20,
                });
                cashOutButton = cashOutButton.setAttrs({
                    x: 0,
                    width: cashOutBtnWidth,
                    height: height,
                    cornerRadius: 5,
                    fill: '#ffd76e',
                });
                cashOutButtonText = cashOutButtonText.setAttrs({
                    x: (cashOutBtnWidth - 24) / 2,
                    y: 10,
                    text: 'STOP \n' + cashOutValue,
                    fontSize: 12,
                    fill: 'black',
                    align: 'center',
                    verticalAlign: 'middle',
                });
                cashOutButtonGroup.add(cashOutButton, cashOutButtonText);

                buttonGroup.add(crshbtn, crashpointtext, cashOutButtonGroup);
            } else {
                cashOutButtonGroup.remove();
                const crshbtnWidth = (width);
                crshbtn = crshbtn.setAttrs({
                    width: crshbtnWidth,
                    height: height,
                    cornerRadius: 5,
                });

                crashpointtext = crashpointtext.setAttrs({
                    x: (crshbtnWidth / 2) - 30,
                    y: (height - 30) / 2,
                    text: this.multiple + 'X',
                    fontSize: 30,
                    fill: 'red',
                    align: 'center',
                    verticalAlign: 'middle',
                });
                buttonGroup.add(crshbtn, crashpointtext);
            }
            return buttonGroup;
        },
        graphYDraw(width, height, currentYLabelIndex, layer, numTicksY, graphGroup) {
            const crashGraph = new Konva.Line({
                points: [width - 35, 0, width - 35, height - 20],
                stroke: 'black',
                listening: false,
                perfectDrawEnabled: false,
            });
            for (let i = 0; i <= numTicksY; i++) {
                var tickY = (((height - 20) / 3) * i);
                if (this.ychanges > 60) {
                    this.ychanges = 0;
                } else {
                    this.ychanges = 60 * (this.multiple - (Math.trunc(this.multiple)));
                }
                if (this.multiple > 3) {
                    tickY = tickY + this.ychanges;
                }
                if (tickY < height - 20) {
                    const tickLine = new Konva.Line({
                        points: [width - 32, tickY, width - 35, tickY],
                        stroke: 'black',
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    graphGroup.add(tickLine);
                    const label = new Konva.Text({
                        x: width - 30,
                        y: tickY,
                        text: currentYLabelIndex.toString(),
                        fontSize: 12,
                        fill: 'black',
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    graphGroup.add(label);
                }

                currentYLabelIndex--;
            }
            graphGroup.add(crashGraph);
        },
        graphxDraw(width, height, secounds, layer, numTicksX, graphGroup) {
            const crashGraph = new Konva.Line({
                points: [-10, height - 20, width - 35, height - 20],
                stroke: 'black',
                listening: false,
                perfectDrawEnabled: false,
            });
            for (let i = 0; i < numTicksX; i++) {
                var tickX = (((width - 35) / 3) * i);
                if (this.xchanges > 140) {
                    this.xchanges = 0;
                } else {
                    if (this.jetflying) {
                        this.xchanges += 0.12;
                    }
                }
                if (this.secounds > 4) {
                    tickX = tickX + this.xchanges;
                }
                if (tickX < width - 35) {
                    const tickLine = new Konva.Line({
                        points: [tickX, height - 20, tickX, height - 16],
                        stroke: 'black',
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    graphGroup.add(tickLine);
                    const label = new Konva.Text({
                        x: tickX,
                        y: height - 15,
                        text: secounds.toString(),
                        fontSize: 12,
                        fill: 'black',
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    graphGroup.add(label);
                }
                secounds--;
            }
            graphGroup.add(crashGraph);
        },
        fireAnimation(jet) {
            const fireAnimation = new Konva.Group({
                x: jet.x() + 20,
                y: jet.y() + 25,
                visible: true,
            });
            fireAnimation.removeChildren();
            const numParticles = 15;
            for (let i = 0; i < numParticles; i++) {
                const fireParticle = new Konva.Shape({
                    sceneFunc: function (context) {
                        context.beginPath();
                        context.moveTo(0, 0);
                        const controlX1 = Math.random() * 20 - 2;
                        const controlY1 = Math.random() * 20 - 2;
                        const controlX2 = Math.random() * 30 - 2;
                        const controlY2 = Math.random() * 30 - 2;
                        const particleSize = 20;
                        const particleSizeY = 0;
                        context.translate(-particleSize, -particleSizeY);
                        context.rotate(Math.PI);
                        context.quadraticCurveTo(controlX1, controlY1, 0, 0);
                        context.quadraticCurveTo(controlX2, controlY2, particleSize, particleSizeY);
                        context.closePath();
                        context.fillStrokeShape(this);
                    },
                    fill: '#f19a11',
                    opacity: Math.random() * 1 + 1,
                });
                fireAnimation.add(fireParticle);
            }
            return fireAnimation;
        },
        allbetcancel(point) {
            this.proceedcashout(this.username, this.betamount, point);
            this.isbet = false;
            this.GetUser();
            this.userBets();
            this.usernextCurrent();
        },
        updatejetcrespoint(data) {
            let currentTimestamp = Date.now();
            this.multiple = data.crashPosition;
            this.period = data.period;
            let timeDifferenceInSeconds = Math.floor((currentTimestamp - data.periodTime) / 1000);
            if (timeDifferenceInSeconds > 3) {
                this.secounds = timeDifferenceInSeconds;
            }
            this.jetflying = true;
        },
        getWinLoose(amount, status, multi) {
            if (status == 'success') {
                return (amount * multi).toFixed(2);
            } else if (status == 'fail') {
                return -amount;
            } else {
                return 'wait';
            }
        },
        formatTime(dateTimeString) {
            const date = new Date(dateTimeString);
            const options = { timeZone: 'Asia/Kolkata', hour12: false };
            const formattedTime = date.toLocaleTimeString('en-US', options);
            return formattedTime;
        },
        getRandomNumber(data) {
            if (data % 2 == 0) {
                return 1;
            } else {
                return 2;
            }
        },
        showRecords() {
            const resultsOld = $('#resultsold');
            const currentFlexWrap = resultsOld.css('flex-wrap');
            if (currentFlexWrap === 'wrap') {
                resultsOld.css('flex-wrap', 'nowrap');
            } else {
                resultsOld.css('flex-wrap', 'wrap');
            }
        },
        joinjetbet() {
            if (this.jetbetAllowed) {
                if (this.prebet < this.balance) {
                    var period;
                    if (this.jetflying) {
                        period = this.period + 1;
                    } else {
                        period = this.period;
                    }
                    if (this.autocashout) {
                        this.proceedbet(period, this.username, this.prebet, this.auto);
                        this.GetUser();
                        this.userBets();
                    } else {
                        this.proceedbet(period, this.username, this.prebet, null);
                        this.GetUser();
                        this.userBets();
                    }
                    var msg = 'Your Bet ' + this.prebet + ' Added';
                    this.salert(msg);
                } else {

                }
            }


        },
        proceedbet(period, username, amount, auto) {
            this.socket.emit('newBet', period, username, amount, auto);
        },
        proceedcashout(username, amount, winpoint) {
            this.socket.emit('addWin', username, amount, winpoint);
        },
        async usernextCurrent() {
            const res = await this.callApi('post', 'api/user/v1/jet/bet');
            if (res.status === 200) {
                this.isbet = res.data.is_bet;
                this.betamount = res.data.amount;
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
        makecashout(mul, amount, username) {
            this.proceedcashout(username, amount, mul);
            this.betwaiting = false;
            this.iscashout = true;
            this.isbet = false;
            this.betamount = 10;
            this.prebet = 10;
            this.cashout(mul, amount);
            this.userBets();
            this.GetUser().then(() => {
                this.username = this.Users.username;
                this.balance = this.Users.balance;
            });
        },
        cashout(mul, amt) {
            var msg = 'you amount ' + parseFloat(mul).toFixed(2) + 'x .' + 'You win ' + amt * parseFloat(mul).toFixed(2) + '.';
            var cls = '.custom-jet-toast .jet-win-toast'
            this.winloose(msg, cls);
        },
        cashoutlosse(mul, amt) {
            var msg = 'you losse ' + parseFloat(mul).toFixed(2) + 'x .';
            var cls = '.custom-jet-toast .jet-win-toast'
            this.winloose(msg, cls);
        },
        minus() {
            if (this.prebet <= 100) {
                if (20 <= this.prebet - 20) {
                    this.prebet = this.prebet - 20;
                }
            } else if (this.prebet > 100 && this.prebet <= 1000) {
                if (20 <= this.prebet - 100) {
                    this.prebet = this.prebet - 100;
                }
            } else if (this.prebet > 1000 && this.prebet <= 10000) {
                if (20 <= this.prebet - 1000) {
                    this.prebet = this.prebet - 1000;
                }
            } else {
                if (20 <= this.prebet - 10000) {
                    this.prebet = this.prebet - 10000;
                }
            }
            // if (20 < this.prebet ) {
            //     this.prebet = this.prebet - this.addprebet;
            // } else {
            //     // console.log("hello")
            // }
        },
        plus() {
            if (this.prebet != 100000) {
                if (this.prebet < 100) {
                    if (this.balance >= this.prebet + 20) {
                        this.prebet = this.prebet + 20;
                    }
                } else if (this.prebet >= 100 && this.prebet < 1000) {
                    if (this.balance >= this.prebet + 100) {
                        this.prebet = this.prebet + 100;
                    }
                } else if (this.prebet >= 1000 && this.prebet < 10000) {
                    if (this.balance >= this.prebet + 1000) {
                        this.prebet = this.prebet + 1000;
                    }
                } else {
                    if (this.balance >= this.prebet + 10000) {
                        this.prebet = this.prebet + 10000;
                    }
                }
            } else {
                this.walert('You Reached at max limit');
            }

        },
        add(amount) {
            if (this.balance >= amount) {
                this.prebet = amount;
            } else {
                this.walert('Insufficent Balance');
            }
        },
        autoplus() {
            this.auto = this.auto + 1;
        },
        autominus() {
            if (this.auto - 1 > 1.01) {
                this.auto = parseFloat(this.auto - 1).toFixed(2);
            } else {
                this.auto = 1.01;
            }
        },
        updatecrash(pos) {
            this.multiple = pos;
            if (this.autobet && this.isbet) {
                if (this.autocashout < pos) {
                    this.proceedcashout(this.username, this.betamount, this.autocashout);
                    this.cashout(this.autocashout, this.betamount);
                    this.isbet = false;
                }
            }
        },
        async allusers() {
            const res = await this.callApi('post', 'api/user/v1/jet/allbets');
            if (res.status === 200) {
                this.alluserrecord = res.data.data;
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
        async fetchhistory() {
            const res = await this.callApi('post', 'api/user/v1/jet/histroy');
            if (res.status === 200) {
                this.record = res.data.data;
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
        async userBets() {
            const res = await this.callApi('post', 'api/user/v1/jet/bets');
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
        }

    }
}
</script>
