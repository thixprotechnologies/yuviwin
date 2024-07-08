<template>
    <section class="home-section">
        <div class="center jetgame avitor-game-center">
            <div class="avitor-game-nav">
                <div class="avitor-game-nav-draw">
                    <router-link :to="{ name: 'Profile' }"><img src="../assets/img/draw.png" /></router-link>
                    <h4>{{ period }}</h4>
                </div>

                <div class="avitor-game-nav-right">
                    <a  @click="this.telegram()" href="#"><img src="../assets/img/avt-nav-right1.png" /></a>
                    <router-link :to="{ name: 'Home' }"><img src="../assets/img/avt-nav-right3.png" /></router-link>
                </div>
            </div>
            <!-- End Avitor game navbar -->
            <div class="avitor-game-wrap-line">
                <div class="wrapes" id="resultsold">
                    <div v-for="(item, index) in record" :key="item.id" :class="'wrap' + getRandomNumber(item.id)">
                        {{ crashpoint(item.crashpoint)  }}
                    </div>

                </div>

                <div class="wrapes-RH" @click="showRecords()">
                    <a href="javascript:void(0)"><i class="fa-solid fa-clock-rotate-left fa-flip-horizontal"
                            aria-hidden="true"></i>
                        R-H
                        <i class="fa fa-sort-desc" id="down" aria-hidden="true"></i></a>
                </div>
            </div>
            <!-- Start next-round part -->
            <div class="" id="jetbox" style="height: 300px;position: relative;">
                <video autoplay muted loop>
                    <source :src="videoSource" type="video/mp4">
                </video>
                <!-- <canvas ref="canvas"></canvas> -->
                <div ref="stageContainer" id="myCanvas" style="width: 100%; height: -webkit-fill-available;"></div>
            </div>
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
                        <div class="addbtn" @click="add(100)">100</div>
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
                                            <img src="../assets/img/minus.png" v-if="this.auto > 1.01"
                                                @click="autominus()" class="plusImg">
                                            <input type="number" class="amountI" step="0.01" min="1.01" v-model="auto"
                                                placeholder="10.00">
                                            <img src="../assets/img/plus.png" v-if="this.auto < 500" @click="autoplus()"
                                                class="minusImg">
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
                                    <td>{{ crashpoint(item.winpoint) }}</td>
                                    <td>&#8377; {{ getWinLoose(item.amount, item.status, item.winpoint) }}</td>
                                    <td>{{ item.time }}</td>
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
                                    <td>{{ crashpoint(item.winpoint) }}</td>
                                    <td>&#8377; {{ getWinLoose(item.amount, item.status, item.winpoint) }}</td>
                                    <td>{{ item.time }}</td>
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
    width: fit-content;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 450px) {
    #jetbox video {
        width: unset;
        height: 100%;
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
import { io } from "socket.io-client";
import $ from "jquery";
import Konva from 'konva'
import { random } from "lodash";
export default {
    created: function () {
        document.addEventListener('visibilitychange', this.onVisibilityChange);
        this.GetUser().then(() => {
            this.username = this.Users.username;
            this.balance = this.Users.balance;
            // console.log('this', this.username);
            this.fetchhistory();
            this.userBets();
            this.usernextCurrent();
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
        for (let i = 0; i <= 3; i++) {
            var ticks = new Konva.Line();
            var text = new Konva.Text();
            this.ytickslext.push(text);
            this.yticksline.push(ticks);
        }
        for (let i = 0; i <= 3; i++) {
            var ticks = new Konva.Line();
            var text = new Konva.Text();
            this.xtickslext.push(text);
            this.xticksline.push(ticks);
        }
        // console.log(this.yticksline);
        this.crashwidth = $('#jetbox').width();
        this.crashheight = $('#jetbox').height();
        this.socket = io('wss://yuviwin.com:3000', {
            reconnect: true, // Allow reconnection
            transports: ['websocket'],
            upgrade: true,
            // secure:false
            // rejectUnauthorized:true
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
            this.jetPrepare = false;
            if (this.anim) {
                this.anim.stop();
                this.anim = null;
            }
            this.gameanimation = null;
        });
        this.socket.on('crash-update', (data) => {
            if (this.jetflying != true) {
                this.jetflying = true;
            }
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
            console.log('socket data1', data);
            this.jetflying = false;
            this.period = data.period;
            this.jetcrashed = true;
        });

        this.socket.on('removecrash', (data) => {
            console.log('socket data2', data);
            // console.log('removecrash');
            this.period = data;
            this.jetcrashed = false;
            this.jetcrashedremoved = true;
        });
        this.socket.on('prepareplane', (data) => {
            this.period = data.period;
            this.secounds = 0;
            this.secoundsx = 3;
            this.crashy = 3;
            this.multiple = 1.00;
            this.jetPrepare = true;
            this.jetcountdown = data.time;
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
            this.secounds = 0;
            this.secoundsx = 3;
            this.crashy = 3;
            this.multiple = 1.00;
            this.jetPrepare = false;
            this.jetcrashedremoved = false;
            this.period = data;
        });
    },
    unmounted: function () {
        this.socket.disconnect();
        clearInterval(this.jetintervel);
        if (this.gameanimation) {
            this.gameanimation = null
        }
        if (this.anim) {
            this.anim.stop();
            this.anim = null;
        }
    },
    watch: {
        auto(newVal) {
            if (newVal > 500) {
                this.auto = 500;
            }
        },
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
                if (this.cashoutAnimInt) {
                    clearInterval(this.cashoutAnimInt);
                }
                if (this.anim) {
                    this.anim.stop();
                    this.anim = null;
                }
                this.secounds = 0;
                this.secoundsx = 3;
                this.crashy = 3;
                this.multiple = 1.00;
                this.gameanimation = this.jetgame();
                this.allusers();
                this.usernextCurrent();
                this.fetchhistory();
            }
            this.jetbetAllowed = true;
        },
        jetcrashed(newv) {
            if (newv == true) {
                this.gameanimation = null;
                if (this.anim) {
                    this.anim.stop();
                    this.anim = null;
                }
                this.gameanimation = this.jetgame();
                this.fetchhistory();
            }
            this.jetbetAllowed = false;
        },
        jetcrashedremoved(newvalue) {
            if (newvalue == true) {
                // this.jetcountdown = 20;
                if (this.anim) {
                    this.anim.stop();
                    this.anim = null;
                }
                this.gameanimation = null;
                // this.gameanimation = this.jetgame();
                this.userBets();
            }
            this.jetbetAllowed = true;
        },
        jetPrepare(newvalue) {
            if (newvalue == true) {
                if (this.anim) {
                    this.anim.stop();
                    this.anim = null;
                }
                this.gameanimation = null;
                this.gameanimation = this.jetgame();
                this.usernextCurrent();
                this.fetchhistory();
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
    computed: {
        isOnline() {
            return navigator.onLine;
        }
    },
    methods: {
        crashpoint(point){
            if(point == 1){
                return '1.00x'
            }else{
                return point+'x'
            }
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
            var mainlayer = new Konva.Layer();

            var maingroup = new Konva.Group({
                x: 0,
                y: stage.height(),
                rotation: 270,
                red: 0,
                blue: 0,
                green: 255,
                visible: true,
                listening: true,
                perfectDrawEnabled: false,
            });

            var jetImage = new Image();
            jetImage.src = 'uploads/jet.png';
            jetImage.onload = () => {
                this.jet = new Konva.Image({
                    x: 60,//height - 20,60,
                    y: 60,//width - 55,//width - 55,//100,
                    offsetY: 30,
                    offsetX: 30,
                    rotation: 65,//90
                    image: jetImage,
                    width: 60,
                    height: 60,
                    listening: false,
                    perfectDrawEnabled: false,
                });
                if (this.jetflying == true) {
                    this.jetflyanimationMain(stage, mainlayer, maingroup, width, height);
                } else if (this.jetcrashed == true) {
                    this.jetcrashedMain(stage, mainlayer, maingroup, width, height);
                } else if (this.jetPrepare == true) {
                    this.jetPreparemain(stage, mainlayer, maingroup, width, height);
                } else {
                    this.jetOthers(stage, mainlayer, maingroup, width, height);
                    maingroup.add(this.jet);
                }
            };

            mainlayer.add(maingroup)
            stage.add(mainlayer);
        },
        jetOthers(stage, mainlayer, maingroup, width, height) {
            var squareGroup = new Konva.Group({
                listening: true,
                perfectDrawEnabled: false,
            });
            var square = new Konva.Rect({
                listening: false,
                perfectDrawEnabled: false,
            });
            var squareText = new Konva.Text({
                listening: false,
                perfectDrawEnabled: false,
            });
            squareGroup.add(square)
            squareGroup.add(squareText)
            squareText.setAttrs({
                text: 'Ready TO fly ',
                fill: 'black',
                fontSize: 20,
                rotation: 90,
                padding: 10,
                align: 'center',
            });
            square.setAttrs({
                cornerRadius: 5,
                strokeWidth: 2,
                stroke: 'red',
                height: squareText.width(),
                width: squareText.height(),
                offsetX: squareText.height(),
            })
            squareGroup.setAttrs({
                height: square.width(),
                width: square.height(),
                x: height - height * 1 / 8,
                y: width * 1 / 6,
                stroke: 'red',
                strokeWidth: 2,
                offset: [squareText.height() / 2, squareText.width() / 2]
            });

            var jetImagenew = new Image();
            jetImagenew.src = 'uploads/jetnew.png';
            jetImagenew.onload = () => {
                this.jet.setAttrs({
                    x: height / 2,
                    y: width / 2,//width - 55,
                    image: jetImagenew,
                    offsetY: 30,
                    offsetX: 30,
                    rotation: 0,//90
                    width: 60,
                    height: 60,
                    listening: false,
                    perfectDrawEnabled: false,
                })
                maingroup.add(squareGroup)
                maingroup.add(this.jet)

            }
        },
        jetcrashedMain(stage, mainlayer, maingroup, width, height) {
            const line = new Konva.Line()
            var squareGroup = new Konva.Group({
                listening: true,
                perfectDrawEnabled: false,
            });
            var square = new Konva.Rect({
                listening: false,
                perfectDrawEnabled: false,
            });
            var squareText = new Konva.Text({
                listening: false,
                perfectDrawEnabled: false,
            });
            squareGroup.add(square)
            squareGroup.add(squareText)
            squareText.setAttrs({
                text: 'Crashed ' + (this.multiple).toFixed(2) + 'X',
                fill: 'black',
                fontSize: 20,
                rotation: 90,
                padding: 5,
                align: 'center',
            });
            square.setAttrs({
                cornerRadius: 5,
                strokeWidth: 2,
                stroke: 'red',
                fill: 'red',
                height: squareText.width(),
                width: squareText.height(),
                offsetX: squareText.height(),
            })
            squareGroup.setAttrs({
                height: square.width(),
                width: square.height(),
                x: height - height * 1 / 8,
                y: width * 1 / 8,
                stroke: 'red',
                strokeWidth: 2,
            });
            var jetImagenew = new Image();
            jetImagenew.src = 'uploads/jetnew.png';
            jetImagenew.onload = () => {
                if (this.multiple < 3) {
                    this.jet.setAttrs({
                        x: 20 + (((height - 40) / 3) * this.multiple),
                        y: width - 60,
                    })
                } else {
                    this.jet.setAttrs({
                        x: height - 20,
                        y: width - 60,
                    })
                }
                this.jet.setAttrs({
                    image: jetImagenew,
                    offsetY: 30,
                    offsetX: 30,
                    rotation: 65,//90
                    width: 60,
                    height: 60,
                    listening: false,
                    perfectDrawEnabled: false,
                })

                maingroup.add(squareGroup)
                this.xGraphDraw(maingroup, width, height)
                this.yGraphDraw(maingroup, width, height)
                this.drawLine(maingroup, width, height, this.jet, line)
                maingroup.add(this.jet)
                // stage.draw()
            }
        },
        jetPreparemain(stage, mainlayer, maingroup, width, height) {
            const line = new Konva.Line()
            var squareGroup = new Konva.Group({
                listening: true,
                perfectDrawEnabled: false,
            });
            var square = new Konva.Rect({
                listening: false,
                perfectDrawEnabled: false,
            });
            var squareText = new Konva.Text({
                listening: false,
                perfectDrawEnabled: false,
            });
            squareGroup.add(square)
            squareGroup.add(squareText)
            squareText.setAttrs({
                text: 'Next Round In',
                fill: 'black',
                fontSize: 20,
                rotation: 90,
                padding: 10,
                align: 'center',
            });
            square.setAttrs({
                cornerRadius: 5,
                strokeWidth: 2,
                stroke: 'red',
                fill: 'red',
                height: squareText.width(),
                width: squareText.height(),
                offsetX: squareText.height(),
            })
            squareGroup.setAttrs({
                height: square.width(),
                width: square.height(),
                x: height - height * 1 / 8,
                y: width * 1 / 3,
                stroke: 'red',
                strokeWidth: 2,
                offset: [squareText.height() / 2, squareText.width() / 2]
            });
            var timer = new Konva.Text({
                x: height / 2 - 30,
                y: width / 2 - 30,
                text: this.jetcountdown + 'S',
                fill: 'black',
                fontSize: 30,
                rotation: 90,
                padding: 10,
                align: 'center',
                listening: false,
                perfectDrawEnabled: false,
            });
            timer.setAttrs({
                offset: [timer.width(), timer.height()]
            })
            var jetImagenew = new Image();
            jetImagenew.src = 'uploads/jetnew.png';
            jetImagenew.onload = () => {
                this.jet.setAttrs({
                    x: height / 2,
                    y: width / 2,//width - 55,
                    image: jetImagenew,
                    offsetY: 30,
                    offsetX: 30,
                    rotation: 0,//90
                    width: 60,
                    height: 60,
                    listening: false,
                    perfectDrawEnabled: false,
                })
                this.cashoutAnimInt = setInterval(() => {
                    // this.jetcountdown -= .1;
                    // this.jetcountdown = parseFloat(this.jetcountdown - 0.1).toFixed(1);
                    if (this.jetcountdown == 0) {
                        this.jetcountdown = 20;
                        clearInterval(this.cashoutAnimInt);
                    }
                }, 100);
                this.anim = new Konva.Animation((frame) => {
                    timer.setAttrs({
                        text: this.jetcountdown + 'S',
                    })
                    maingroup.add(timer)
                    maingroup.add(squareGroup)
                    maingroup.add(this.jet)
                })
                this.anim.start();

            }
        },
        jetflyanimationMain(stage, mainlayer, maingroup, width, height) {
            var squareGroup = new Konva.Group({
                listening: true,
                perfectDrawEnabled: false,
            });
            var square = new Konva.Rect({
                listening: false,
                perfectDrawEnabled: false,
            });
            var squareText = new Konva.Text({
                listening: false,
                perfectDrawEnabled: false,
            });
            var cashButton = new Konva.Rect({
                listening: true,
                perfectDrawEnabled: false,
            });
            var cashOutText = new Konva.Text({
                listening: true,
                perfectDrawEnabled: false,
            });
            const animtioncashout = new Konva.Group({
                visible: false,
                x: 50,
                y: width * 2 / 5,
                width: 120,
                height: 50,
                listening: true,
                perfectDrawEnabled: false,
            });
            const usergroup = new Konva.Group({
                x: 0,
                y: 0,
                width: stage.height(),
                height: stage.width(),
                listening: true,
                perfectDrawEnabled: false,
            });
            const line = new Konva.Line()
            maingroup.add(usergroup)
            cashOutText.on('click', () => {
                this.isbets == false;
                this.allbetcancel(this.multiple);
                this.cashoutAniX = animtioncashout.width();
                this.cashoutAnimInt = setInterval(() => {
                    maingroup.add(animtioncashout)
                    this.showAnimcashoutBtn(maingroup, animtioncashout);
                    if (this.cashoutAniX == 10) {
                        animtioncashout.destroy();
                        clearInterval(this.cashoutAnimInt);
                    }
                }, 100);
            });
            cashOutText.on('touchend', () => {
                this.isbets == false;
                this.allbetcancel(this.multiple);
                this.cashoutAniX = animtioncashout.width();
                this.cashoutAnimInt = setInterval(() => {
                    maingroup.add(animtioncashout)
                    this.showAnimcashoutBtn(maingroup, animtioncashout);
                    if (this.cashoutAniX == 10) {
                        animtioncashout.removeChildren();
                        animtioncashout.destroy();
                        clearInterval(this.cashoutAnimInt);
                    }
                }, 100);
            });
            this.anim = new Konva.Animation((frame) => {
             // console.log(frame);frameRate,timeDiff,lastTime,time
                // console.log(frame.time);
                var newx = this.jet.x();
                var newy = this.jet.y();
                if (newx < height - 20) {
                    newx = 20 + (((height - 40) / 3) * this.multiple);
                } else {
                    newx = height - 20;
                }
                    //if(this.secounds <= 3){
                        if(newy < width - 55){
                            newy = ((width - 55) / 3)*this.multiple;
                        }else{
                            newy = width - 55;
                        }
                    //}else{
                    //    newy = width - 55;
                    //}

                this.jet.setAttrs({
                    x: newx,
                    y: newy
                })
                if (this.multiple > this.crashy + 1) {
                    this.crashy = Math.floor(this.multiple);
                }
                if (this.secounds > this.secoundsx - 1) {
                    this.secoundsx = this.secounds + 1;
                }
                this.buttonGroup(maingroup, squareGroup, square, squareText, cashButton, cashOutText, height, width)
                this.xGraphDraw(maingroup, width, height)
                this.yGraphDraw(maingroup, width, height)
                this.drawLine(maingroup, width, height, this.jet, line)
                usergroup.removeChildren();
                this.showRealTimeUser(this.realTimeUsers, usergroup)
                maingroup.add(this.jet)
            });
            this.anim.start();
        },
        generateRealTimeUsers(id) {
            this.realTimeUsers.push({
                id: id,
                x: this.jet.x(),
                y: this.jet.y(),
            });
        },
        showAnimcashoutBtn(maingroup, animtioncashout) {
            animtioncashout.removeChildren();
            var coinImage = new Image();
            coinImage.src = 'uploads/btncoin.png';
            coinImage.onload = () => {
                var addCoin = new Konva.Image({
                    x: this.cashoutAniX,
                    y: animtioncashout.height() / 2,
                    offsetY: 15,
                    offsetX: 15,
                    image: coinImage,
                    opacity: Math.random(),
                    width: 30,
                    height: 30,
                    listening: false,
                    perfectDrawEnabled: false,
                });
                animtioncashout.setAttrs({
                    visible: true,
                });
                animtioncashout.add(addCoin)
                this.cashoutAniX -= 3;
            }
        },
        showRealTimeUser(users, usergroup) {
            if (users.length > 0) {
                users.forEach(user => {
                    var userImageContainer = new Konva.Group({
                        x: user.x,//this.jet.x(),//user.x,//this.jet.x(),
                        y: user.y,//this.jet.y(),//this.jet.y(),
                        listening: true,
                        perfectDrawEnabled: false,
                    });
                    const userImg = new Image();
                    userImg.src = 'uploads/userdef.png';
                    const userImage = new Konva.Image({
                        image: userImg,
                        rotation: 90,
                        width: 30,
                        offset: [15, 15],
                        height: 30,
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    userImg.onload = () => {
                        userImageContainer.add(userImage)
                    };
                    usergroup.add(userImageContainer);
                    user.x = user.x - 3;
                });
                this.realTimeUsers = this.realTimeUsers.filter(user => user.y !== 0);
            }
        },
        xGraphDraw(maingroup, width, height) {
            var currentYLabelIndex = this.secoundsx;
            const crashGraph = new Konva.Line({
                points: [35, 5, 35, width - 25],
                stroke: 'black',
                listening: false,
                perfectDrawEnabled: false,
            });

            for (let i = 0; i <= 3; i++) {
                var tickX = 5 + (((width - 30) / 3) * i);
                if (this.xchanges > (width - 30) / 3) {
                    this.xchanges = 0;
                    console.log("jksfadfj");
                } else {
                    this.xchanges = (this.multiple - (Math.trunc(this.multiple))) * ((width - 30) / 3);
                }
                if (this.secounds > 2) {
                    tickX = tickX + this.xchanges;
                }
                if ((width - 20) > tickX &&  tickX < ( 5 + (width - 30))) {
                    const tickLine = this.xticksline[i].setAttrs({
                        points: [32, tickX, 35, tickX],
                        stroke: 'black',
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    maingroup.add(tickLine);
                    const label = this.xtickslext[i].setAttrs({
                        x: 30,
                        y: tickX,
                        rotation: 90,
                        text: currentYLabelIndex.toString(),
                        fontSize: 12,
                        fill: 'black',
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    label.setAttrs({
                        offsetX: label.width() / 2,
                    });
                    maingroup.add(label);
                }

                currentYLabelIndex--;
            }

            maingroup.add(crashGraph)
        },
        yGraphDraw(maingroup, width, height) {
            var currentYLabelIndex = this.crashy;
            const crashGraph = new Konva.Line({
                points: [35, width - 25, height - 5, width - 25],
                stroke: 'black',
                listening: false,
                perfectDrawEnabled: false,
            });
            for (let i = 0; i <= 3; i++) {
                var tickY = (height - 5) - (((height - 40) / 3) * i);
                if (this.ychanges > ((height - 40) / 3)) {
                    this.ychanges = 0;
                } else {
                    this.ychanges = ((height - 40) / 3) * (this.multiple - (Math.trunc(this.multiple)));
                }
                if (this.multiple > this.crashy) {
                    tickY = tickY - this.ychanges;
                }
                if (tickY > 30 && tickY > ((height - 5) - (height - 40))) {
                    const tickLine = this.yticksline[i].setAttrs({
                        points: [tickY, width - 22, tickY, width - 25],
                        stroke: 'black',
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    maingroup.add(tickLine);
                    const label = this.ytickslext[i].setAttrs({
                        x: tickY,
                        y: width - 20,
                        rotation: 90,
                        text: currentYLabelIndex.toString(),
                        fontSize: 12,
                        fill: 'black',
                        listening: false,
                        perfectDrawEnabled: false,
                    });
                    label.setAttrs({
                        offsetY: 2,
                    });
                    maingroup.add(label);
                }
                currentYLabelIndex--;
            }
            maingroup.add(crashGraph)
        },
        drawLine(maingroup, width, height, jet, line) {
            var thirdPointX = (jet.x() + 60) / 2 - 5;
            var thirdPointY = jet.y() / 2 + 5;
            line.destroy()
            line.setAttrs({
                stroke: 'orange',
                strokeWidth: 3,
                points: [60, 0, thirdPointX, thirdPointY, jet.x(), jet.y()],
                tension: 0.8,
                listening: false,
                perfectDrawEnabled: false,
            });
            maingroup.add(line);
        },
        buttonGroup(maingroup, squareGroup, square, squareText, cashButton, cashOutText, height, width) {
            squareGroup.removeChildren()
            squareGroup.add(square)
            squareGroup.add(squareText)
            if (this.isbets) {
                squareText.setAttrs({
                    text: this.multiple + 'X',
                    fill: 'black',
                    fontSize: 40,
                    rotation: 90,
                    padding: 5,
                });
                square.setAttrs({
                    cornerRadius: [5, 5, 0, 0],
                    strokeWidth: 2,
                    stroke: 'red',
                    fill: 'red',
                    height: squareText.width(),
                    width: squareText.height(),
                    offsetX: squareText.height(),
                })
                cashOutText.setAttrs({
                    x: 0,
                    y: square.height(),
                    text: 'STOP\n' + (this.betamount * this.multiple).toFixed(2),
                    fill: '#fff',
                    fontSize: 20,
                    rotation: 90,
                    padding: 5,
                    align: 'center',
                });
                cashButton.setAttrs({
                    x: 0,
                    y: square.height(),
                    fill: '#139ade',
                    stroke: '#139ade',
                    cornerRadius: [0, 0, 5, 5],
                    strokeWidth: 5,
                    width: cashOutText.height(),
                    height: cashOutText.width(),
                    offsetX: cashOutText.height(),
                })
                squareGroup.add(cashButton)
                squareGroup.add(cashOutText)
                squareGroup.setAttrs({
                    height: cashButton.width() + square.width(),
                    width: cashButton.height() + square.height(),
                    x: height - height * 1 / 8,
                    y: width * 1 / 10,
                    stroke: 'red',
                    strokeWidth: 2,
                });
            } else {
                squareText.setAttrs({
                    text: this.multiple + 'X',
                    fill: 'black',
                    fontSize: 30,
                    rotation: 90,
                    padding: 5,
                    align: 'center',
                });
                square.setAttrs({
                    cornerRadius: 5,
                    strokeWidth: 2,
                    stroke: 'red',
                    fill: 'red',
                    height: squareText.width(),
                    width: squareText.height(),
                    offsetX: squareText.height(),
                })
                squareGroup.setAttrs({
                    height: square.width(),
                    width: square.height(),
                    x: height - height * 1 / 8,
                    y: width * 1 / 8,
                    stroke: 'red',
                    strokeWidth: 2,
                });
            }
            maingroup.add(squareGroup)
        },
        updatejetcrespoint(data) {
            let currentTimestamp = Date.now();
            this.multiple = data.crashPosition;
            this.period = data.period;
            let timeDifferenceInSeconds = Math.floor((currentTimestamp - data.periodTime) / 1000);
            let timemilisec = Math.floor((currentTimestamp - data.periodTime) % 10);
            this.secoundsdiff = timemilisec;
            if (timeDifferenceInSeconds > this.secounds) {
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
                    this.walert('Insufficent Balance');
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
                this.isbets = res.data.is_bet;
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
        allbetcancel(point) {
            this.proceedcashout(this.username, this.betamount, point);
            this.isbet = false;
            this.GetUser();
            this.userBets();
            this.usernextCurrent();
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
        },
        plus() {
            if (this.prebet != 100000) {
                if (this.prebet < 100) {
                    if (this.balance >= this.prebet + 20) {
                        this.prebet = this.prebet + 20;
                    } else {
                        this.walert('Insufficent Balance');
                    }
                } else if (this.prebet >= 100 && this.prebet < 1000) {
                    if (this.balance >= this.prebet + 100) {
                        this.prebet = this.prebet + 100;
                    } else {
                        this.walert('Insufficent Balance');
                    }
                } else if (this.prebet >= 1000 && this.prebet < 10000) {
                    if (this.balance >= this.prebet + 1000) {
                        this.prebet = this.prebet + 1000;
                    } else {
                        this.walert('Insufficent Balance');
                    }
                } else {
                    if (this.balance >= this.prebet + 10000) {
                        this.prebet = this.prebet + 10000;
                    } else {
                        this.walert('Insufficent Balance');
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
            let currentValue = parseFloat(this.auto);

            let newValue = currentValue + 1;
            this.auto = newValue.toFixed(2);

            if (this.auto > 500) {
                this.auto = "500.00";
            }
            if (this.auto < 500) {
                this.auto = parseFloat(this.auto + 1).toFixed(2); //this.auto + 1;
            } else {
                this.auto = 500;
            }
        },
        autominus() {
            // if (this.auto - 1 > 1.01) {
            //     this.auto = parseFloat(this.auto - 1).toFixed(2);
            // } else {
            //     this.auto = 1.01;
            // }
            let currentValue = parseFloat(this.auto);
            let newValue = currentValue - 1;
            this.auto = newValue.toFixed(2);
            if (this.auto < 1.01) {
                this.auto = "1.01";
            }
        },
        updatecrash(pos) {
            this.multiple = pos;
            // if (this.autobet && this.isbet) {
            //     if (this.autocashout < pos) {
            //         this.proceedcashout(this.username, this.betamount, this.autocashout);
            //         this.cashout(this.autocashout, this.betamount);
            //         this.isbet = false;
            //     }
            // }
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
    },
    data() {
        return {
            crashheight: 0,
            crashwidth: 0,
            isbets: false,
            cashoutAnimInt: null,
            cashoutAniX: 0,
            realTimeUsers: [],
            jet: null,
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
            jetstartX: 0,
            jetstartY: 0,
            multiple: 1.00,
            secounds: 0,
            secoundsdiff: 0,
            crashy: 3,
            secoundsx: 3,
            isbet: false,
            cashOutValue: 30,
            betamount: 40,
            cashoutAnimY: 50,
            ychanges: 1,
            xchanges: 0,
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
            yticksline: [],
            xticksline: [],
            ytickslext: [],
            xtickslext: [],
        }
    }
};
</script>
