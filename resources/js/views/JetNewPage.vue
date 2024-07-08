<template>
    <section class="home-section">
        <div class="center avitor-game-center">
            <div class="avitor-game-nav">
                <div class="avitor-game-nav-draw">
                    <router-link :to="{ name: 'Profile' }"><img src="../assets/img/draw.png" /></router-link>
                    <h4>#5388910154</h4>
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
            <div class="next-round-box" id="jetbox" style="height: 250px;">
                <div ref="stageContainer" id="myCanvas" style="width: 100%; height: -webkit-fill-available;"></div>
            </div>
            <!--End next-round part-->

            <!-- Start BET box design -->
            <!-- <div class="bet-box">
                <div class="bet-box-head">
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Auto</label>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>

                    <div class="bet-box-head-length">
                        <p>Bet</p>
                        <a href="javascript:void(0)" @click="minus()"><img src="../assets/img/minus.png" /></a>
                        <input type="number" v-model="prebet" placeholder="10.00 INR" />
                        <a href="javascript:void(0)" @click="plus()"><img src="../assets/img/plus.png" /></a>
                    </div>
                </div>

                <div class="bet-box-head-body">
                    <div>
                        <div class="plus-length">
                            <h4 @click="add(50)">+50</h4>
                            <h4 @click="add(100)">+100</h4>
                        </div>

                        <div class="plus-length mt-1">
                            <h4 @click="add(500)">+500</h4>
                            <h4 @click="add(1000)">+1000</h4>
                        </div>
                    </div>

                    <div class="bet-btn-box" id="join_btn" style="display:none;">
                        <button type="button" @click="joinbet()">BET</button>
                    </div>
                    <div class="bet-btn-box" id="cancle_btn" style="display:none;">
                        <button type="disabled" @click="canclebet();">Cancle</button>
                    </div>
                    <div class="bet-btn-box" id="cashout_btn" style="display:none;">
                        <button type="disabled" @click="makecashout(this.multiple, this.betamount, this.username);">Cash
                            Out</button>
                    </div>
                    <div class="bet-btn-box" id="waiting_btn">
                        <button type="disabled">Waiting</button>
                    </div>
                </div>
            </div> -->
            <div class="jet-bet">
                <div class="row my-2">
                    <div class="col-8">
                        <input class="amt" type="number" v-model="prebet" placeholder="10.00 INR" />
                    </div>
                    <div class="col-4 d-flex justify-content-around align-content-center">
                        <a class="btn-jetbet" href="javascript:void(0)" @click="minus()"><img
                                src="../assets/img/minus.png" /></a>
                        <a class="btn-jetbet" href="javascript:void(0)" @click="plus()"><img
                                src="../assets/img/plus.png" /></a>
                    </div>
                </div>
                <div class="d-flex justify-content-around my-2 align-content-center">
                    <div class="addbtn" @click="add(50)">50</div>
                    <div class="addbtn" @click="add(100)">100</div>
                    <div class="addbtn" @click="add(1000)">1000</div>
                    <div class="addbtn" @click="add(5000)">5000</div>
                </div>
                <div class="row my-2">
                    <div class="col-6 bet-box-head">
                        <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault">Auto</label>
                            <input class="form-check-input" v-model="autobet" type="checkbox" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                    <div class="col-6">
                        <input class="amt" type="number" v-model="autocashout" placeholder="1.00X" />
                    </div>
                </div>
                <div class="bet-btn-box" id="join_btn"
                    :style="{ display: (!this.isbet && this.jetstart && !this.jet && !this.betwaiting) || (this.jetcrash && !this.isbet && !this.jet && !this.betwaiting) ? 'block' : 'none' }">
                    <button type="button" @click="joinbet()">BET</button>
                </div>
                <div class="bet-btn-box" id="cancle_btn" :style="{ display: this.betwaiting ? 'block' : 'none' }">
                    <button type="button" @click="canclebet();">Cancle</button>
                </div>
                <div class="bet-btn-box" id="cashout_btn" :style="{ display: this.isbet && this.jet ? 'block' : 'none' }">
                    <button type="button" @click="makecashout(this.multiple, this.betamount, this.username);">Cash
                        Out</button>
                </div>
                <div class="bet-btn-box" id="waiting_btn"
                    :style="{ display: !this.isbet && this.jet && !this.betwaiting ? 'block' : 'none' }">
                    <button type="button" @click="joinwait()">Join For Next Round</button>
                </div>
            </div>
            <div class="bet-filter-box" style="height:auto; overflow-y: unset; background-image:unset">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#betFilter1" type="button" role="tab" aria-controls="betFilter1"
                            aria-selected="true">
                            All Bets
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#betFilter2"
                            type="button" role="tab" aria-controls="betFilter2" aria-selected="false">
                            My Bets
                        </button>
                    </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="betFilter1" role="tabpanel" aria-labelledby="betFilter1-tab">
                        <div class="betFilter-table-box">
                            <table class="avitor-game1-table">
                                <tr class="heading">
                                    <th>amount</th>
                                    <th>status</th>
                                    <th>point</th>
                                    <th>final amount</th>
                                    <th>time</th>
                                </tr>
                                <tr v-for="(item, index) in alluserrecord" :key="item.id">
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
                            <table class="avitor-game1-table">
                                <tr class="heading">
                                    <th>amount</th>
                                    <th>status</th>
                                    <th>point</th>
                                    <th>final amount</th>
                                    <th>time</th>
                                </tr>
                                <tr v-for="(item, index) in betrec" :key="item.id">
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
            <!-- End Bet filter design -->

        </div>
    </section>
</template>
<style scoped>
.custom-jet-toast {
    background-color: #333;
    color: #fff;
    border-radius: 8px;
    padding: 16px;
    font-family: Arial, sans-serif;
}

.jet-win-toast {
    background-color: #28a745;
}

.jet-loss-toast {
    background-color: #dc3545;
}

.jet-bet {
    background: url('../assets/img/bet-box-bg.png');
    background-size: 100% 100%;
    background-position: center;
    margin: 0 2.8%;
    padding: 2rem;
    position: relative;
    margin-top: 1.5rem;
}

.jet-bet .amt {
    color: var(--white-color);
    background: transparent;
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
    padding: 1rem;
    height: 26px;
    border: 1px solid #ffd76e;
    border-radius: 2rem;
}

.jet-bet .addbtn {
    align-items: center;
    background-color: #0f1222;
    color: var(--white-color);
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    border-radius: 4px;
    font-weight: 600;
}

.jet-bet .btn-jetbet img {
    height: 3rem;
    width: auto;
}

.jet-bet .bet-box-head .form-switch {
    font-size: 1.6rem;
}

.jet-bet .bet-box-head .form-switch .form-check-input {
    border: none;
}

.jet-bet .form-check-input {
    box-shadow: none !important;
    background-color: #0f1222;
}

.jet-bet .form-switch .form-check-input {
    background-image: url(../assets/img/swith-circle.png);
}

.jet-bet .form-check-input:checked {
    background-color: #0f1222;
}

.jet-bet .bet-box-head .form-switch label {
    color: var(--white-color);
    font-size: 1.2rem;
    font-weight: 600;
    transform: translateY(-2px);
}

.jet-bet .bet-btn-box {
    margin-top: 1rem;
}

.jet-bet .bet-btn-box button {
    width: 100% !important;
}

.loading-bar {
    position: relative;
    height: 1.5rem;
    border-radius: 2rem;
    border-radius: 2rem;
    overflow: hidden;
    border: 1px solid #f9ab13;
}

.loading-bar .percentage {
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    display: block;
    height: auto;
    border-radius: 2rem;
    border-radius: 2rem;
    background-color: #f9ab13;
    background-image: linear-gradient(90deg, #f9ab13, #ffd76e);
    animation: animate-stripes 3s linear infinite;
}

@keyframes animate-stripes {
    0% {
        width: 0%
    }

    to {
        width: 100%
    }
}

.game-loader {
    height: 27rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 2rem;
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
            flybol: false,
            jet: true,
            jetcrash: false,
            jetstart: true,
            autobet: false,
            promopt: "WAITING FOR CONNECTION",
            balance: 0,
            username: "null",
            wsconnected: false,
            currentYLabelIndex: 4,
            betamount: 10,
            multiple: 1.0,
            cashOutValue: 0,
            ychanges: 1,
            layer: null,
            prebet: 10,
            iscashout: false,
            betwaiting: false,
            isbet: false,
            socket: null,
            online: true,
            multiple: 1.0,
            crashposition: 0,
            record: '',
            betrec: [],
            tbets: 0,
            autocashout: 1,
            currentLabelIndex: 3,
            incrementScheduled: 10,
            withdrawn: false,
            withdrawcunt: 0,
            alluserrecord: '',
            jetintervel: null,
            socket: null,
            //// userImagesData: [],
            // cashOutValue: 0,
            //realTimeUsers: [
            //    // {
            //    //     name: 'User1',
            //    //     path: [10, 5]
            //    // },
            //    // {
            //    //     name: 'User2',
            //    //     path: [12, 4]
            //    // },
            //]
        }
    },
    created: function () {
        document.addEventListener('visibilitychange', this.onVisibilityChange);
        this.GetUser().then(() => {
            this.username = this.Users.username;
            this.balance = this.Users.balance;
            // console.log('this', this.username);
            // this.fetchhistory();
            // this.userBets();
        });
    },
    beforeUnmount: function () {
        this.socket.removeAllListeners();
        document.removeEventListener('visibilitychange', this.onVisibilityChange);

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
        }
    },
    mounted: function () {
        this.socket = io('https://ejetxb.4.us-1.fl0.io', {
            reconnect: true, // Allow reconnection
            transports: ['websocket'],
            upgrade: false,
        });
        this.socket.on('connect_error', (error) => {
            console.error('Socket connection error:', error);
        });
        this.socket.on('connect', () => {
            this.wsconnected = true;
            console.log(`Connected with ID ${this.socket.id}`);
        });
        this.socket.on('disconnect', () => {
            console.log(`Disconnected from server`);
            this.wsconnected = false;
            this.promopt = "WAITING FOR CONNECTION";
        });
        this.socket.on('crash-update', (data) => {
            this.updatecrash(data);
            this.flybol = true;
            this.jet = true;
            this.jetcrash = false;
            this.jetstart = false;
        });
        this.socket.on('working', (data) => {
            console.log(`Server Status:`, data);
            setTimeout(() => {
                if (this.flybol) {
                    this.jetGame();
                    this.jet = true;
                    this.jetcrash = false;
                    this.jetstart = false;
                }
            }, 500);
        });
        this.socket.on('reset', (data) => {
            console.log('reset');
            this.jet = false;
            this.jetcrash = true;
            this.jetstart = false;
            this.jetGame();
            this.fetchhistory();
            this.userBets();
            this.currentYLabelIndex = 4;
        });

        this.socket.on('updatehistory', (data) => {
            if (this.iscashout == false && this.betwaiting == false) {
                this.canclebet();
            }
            if (this.isbet) {
                this.cashoutlosse(this.multiple, this.betamount);
            }
            // this.updatehistory(data);
        });

        this.socket.on('removecrash', () => {
            console.log('removecrash');
            this.jet = false;
            this.jetcrash = true;
            this.jetstart = false;
            this.jetGame();
        });
        this.socket.on('prepareplane', () => {
            console.log('prepareplane');
            this.jet = false;
            this.jetcrash = false;
            this.jetstart = true;
            this.jetGame();
            this.prepareplane();

            this.multiple = 1.0;
        });

        this.socket.on('betout', () => {
            // this.cashoutuser();
        });
        this.socket.on('flyplane', () => {
            this.tbets = Math.floor(Math.random() * 1000) + 1;
            setTimeout(() => {
                this.jet = true;
                this.jetcrash = false;
                this.jetstart = false;
                this.jetGame();
                this.allusers();
            }, 1000);
            if (this.betwaiting) {
                this.betwaiting = false;
                this.betamount = this.prebet;
                this.isbet = true;
                this.proceedbet(this.username, this.betamount);
            }
            this.userBets();
        });
        this.userBets();

    },
    methods: {
        jetGame() {
            if (this.wsconnected) {
                var width = $('#jetbox').width();
                var height = $('#jetbox').height();
                $('#myCanvas').attr('width', width).attr('height', height);
                var stage = new Konva.Stage({
                    container: this.$refs.stageContainer,
                    width,
                    height,
                });
                var bgLayer = new Konva.Layer();
                stage.add(bgLayer);
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
                        opacity: 0.5,
                    });
                    bgLayer.add(bgRect);
                    bgLayer.batchDraw();
                };
                var graphGroup = new Konva.Group({
                    x: 10,
                    y: 0,
                });
                this.layer = new Konva.Layer();
                this.clearLayer();

                var jetImage = new Image();
                if (this.jet) {
                    jetImage.src = 'uploads/jetleft.png';
                    jetImage.onload = () => {
                        var jet = new Konva.Image({
                            image: jetImage,
                            width: 50,
                            height: 50,
                        });
                        this.jetfly(width, height, stage, this.layer, jet, graphGroup);
                    };
                }
                if (this.jetcrash) {
                    jetImage.src = 'uploads/jetleft.png';
                    jetImage.onload = () => {
                        var jet = new Konva.Image({
                            image: jetImage,
                            width: 50,
                            height: 50,
                        });
                        this.jetCrashed(width, height, stage, this.layer, jet, graphGroup)
                    };
                }
                if (this.jetstart) {
                    jetImage.src = 'uploads/jettop.png';
                    jetImage.onload = () => {
                        var jet = new Konva.Image({
                            image: jetImage,
                            width: 50,
                            height: 50,
                        });
                        this.jetloading(width, height, stage, this.layer, jet, graphGroup)
                    };
                }
            }
        },
        clearLayer() {
            this.layer.removeChildren();
            this.layer.batchDraw();
        },
        jetfly(width, height, stage, layer, jet, graphGroup) {
            jet.setAttrs({
                x: 10,
                y: (height - 70) * 2 / 3,
            });
            layer.add(graphGroup);
            var loadingGroup = new Konva.Group({
                x: 0,
                y: 0,
            });
            layer.add(loadingGroup);
            loadingGroup.add(jet);
            var fireAnimation = this.createFireAnimation(jet);
            var curvedLine = new Konva.Line({
                x: 0,
                y: (height - 70) * 2 / 3 + 35,
                points: [0, 0, jet.x() + 5, jet.y() - 120],
                stroke: 'orange',
                tension: 2
            });
            loadingGroup.add(fireAnimation);
            loadingGroup.add(curvedLine);
            stage.add(layer);
            this.startJetAnimation(width, height, layer, jet, stage, fireAnimation, curvedLine, graphGroup);
        },
        startJetAnimation(width, height, layer, jet, stage, fireAnimation, curvedLine, graphGroup) {
            var buttonGroup = new Konva.Group();
            var square = new Konva.Group();
            var squareRect = new Konva.Rect();
            var crshbtn = new Konva.Rect();
            var crashpointtext = new Konva.Text();
            var cashOutButtonGroup = new Konva.Group();
            var cashButton = new Konva.Rect();
            var cashButtonText = new Konva.Text();
            cashOutButtonGroup.on('click', () => {
                this.cashOut();
            });
            var anim = new Konva.Animation((frame) => {
                let newX = jet.x();
                let newY = jet.y();
                if (this.multiple > 4) {
                    newX = width - 80;
                    newY = -10;
                } else {
                    if (jet.x() > width - 80) {
                        newX = jet.x();
                    } else {
                        newX = jet.x() + 3;
                    }
                    if (jet.y() <= -10) {
                        newY = 0;
                    } else {
                        if (jet.x() < (width - 80)) {
                            newY = jet.y();
                        } else {
                            newY = jet.y() - (((height - 70) * 1 / 3) / 3) * .01;//jet.y() -2;// (((height - 70) * 2 / 3)/3)*.1;
                        }
                    }
                }

                const angleInRadians = 3 * (Math.PI / 180);
                const startPoint = { x: 0, y: 0 };
                const endPoint = { x: jet.x() + 5, y: jet.y() - 120 };
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
                const cashOutButton = this.createButtonWithText(
                    buttonGroup,
                    square, squareRect, crshbtn, crashpointtext, cashOutButtonGroup, cashButton, cashButtonText,
                    (width - 400) / 2,
                    20,
                    200, 40,
                    this.isbet,
                    this.cashOutValue,
                );
                layer.add(cashOutButton);

                jet.position({ x: newX, y: newY });
                this.cashOutValue = (this.betamount * this.multiple).toFixed(2);
                if (this.currentYLabelIndex < this.multiple) {
                    this.currentYLabelIndex = Math.trunc(this.multiple);
                }
                this.drawGraph(graphGroup, this.currentYLabelIndex, 4, 10, width, height);
                // this.showRealTimeUsers(this.realTimeUsers, jet, graphGroup);
                curvedLine.tension(0.5);
                fireAnimation.position({
                    x: jet.x() + 5,
                    y: jet.y() + 35,
                });
            });
            anim.start();
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
                stroke: 'green',
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
                    fill: 'lightgreen',
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
        drawGraph(graphGroup, currentYLabelIndex, numTicksY, numTicksX, width, height) {
            const crashGraph = new Konva.Line({
                points: [width - 35, 0, width - 35, height - 10],
                stroke: 'whitesmoke',
            });
            graphGroup.removeChildren();
            graphGroup.add(crashGraph);
            if (this.ychanges > 60) {
                this.ychanges = 0;
            } else {
                this.ychanges = 30 * (this.multiple - (Math.trunc(this.multiple)));
            }
            for (let i = numTicksY; i >= 0; i--) {
                var tickY = ((numTicksY - i) / numTicksY) * (height - 40);
                if (this.multiple > 4) {
                    tickY = tickY + this.ychanges;
                }
                const tickLine = new Konva.Line({
                    points: [width - 32, tickY, width - 35, tickY],
                    stroke: 'whitesmoke',
                });
                graphGroup.add(tickLine);
                const label = new Konva.Text({
                    x: width - 30,
                    y: tickY,
                    text: currentYLabelIndex.toString(),
                    fontSize: 12,
                    fill: 'whitesmoke',
                });
                graphGroup.add(label);
                currentYLabelIndex--;
            }
            const timeGraph = new Konva.Line({
                points: [-20, height - 10, width - 35, height - 10],
                stroke: 'whitesmoke',
            });
            graphGroup.add(timeGraph);
            for (let i = 0; i <= numTicksX; i++) {
                const tickX = (i / numTicksX) * (width - 35);

                const tickLine = new Konva.Line({
                    points: [tickX, height - 10, tickX, height - 5],
                    stroke: 'whitesmoke',
                });
                graphGroup.add(tickLine);
                const label = new Konva.Text({
                    x: tickX - 10,
                    y: height + 20,
                    text: i.toString(),
                    fontSize: 10,
                    fill: 'whitesmoke',
                });
                graphGroup.add(label);
            }
        },
        createFireAnimation(jet) {
            const fireAnimation = new Konva.Group({
                x: jet.x() + 5,
                y: jet.y() + 35,
                visible: true,
            });
            fireAnimation.removeChildren();
            const numParticles = 15;
            for (let i = 0; i < numParticles; i++) {
                const fireParticle = new Konva.Shape({
                    sceneFunc: function (context) {
                        context.beginPath();
                        context.moveTo(0, 0);
                        const controlX1 = Math.random() * 20 - 5;
                        const controlY1 = Math.random() * 20 - 5;
                        const controlX2 = Math.random() * 30 - 5;
                        const controlY2 = Math.random() * 30 - 5;
                        const particleSize = 20;
                        const particleSizeY = 0;
                        context.translate(-particleSize, -particleSizeY);
                        context.rotate(Math.PI);
                        context.quadraticCurveTo(controlX1, controlY1, 0, 0);
                        context.quadraticCurveTo(controlX2, controlY2, particleSize, particleSizeY);
                        context.closePath();
                        context.fillStrokeShape(this);
                    },
                    fill: '#f19a11', //aa4203
                    opacity: Math.random() * 1 + 1,
                });
                fireAnimation.add(fireParticle);
            }
            return fireAnimation;
        },
        jetloading(width, height, stage, layer, jet, graphGroup) {
            jet.setAttrs({
                x: -25,
                y: -25,
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
                text: 'Wait For Game Start',
                fontSize: 25,
                fontFamily: 'Sans-sarif',
                fill: 'yellow',
                align: 'center',
            });
            aboveText.offsetX(aboveText.width() / 2);
            aboveText.offsetY(aboveText.height() / 2);
            layer.add(aboveText);

            stage.add(layer);
            const anim = new Konva.Animation(() => {
                dotGroup.rotate(2);
            }, layer);
            anim.start();
        },
        jetCrashed(width, height, stage, layer, jet, blastgroup) {
            stage.add(layer);
            blastgroup.setAttrs({
                x: width / 2,
                y: height / 2,
            });
            jet.setAttrs({
                x: -60 / 2,
                y: -60,
                width: 100,
                height: 100,
            });
            blastgroup.add(jet);
            const text = new Konva.Text({
                x: -130,
                y: 60,
                text: this.multiple + 'X Flew Away',
                fontSize: 30,
                fill: 'red',
            });
            blastgroup.add(text);
            const blastAnimation = new Konva.Animation((frame) => {
                const scale = Math.sin(frame.time * 0.005) + 1;
                blastgroup.scale({ x: scale / 2, y: scale / 2 });
            }, layer);
            layer.add(blastgroup);
            blastAnimation.start();
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
        prepareplane() {
            $("#join_btn").hide();
        },
        removecrash() {
            console.log(this.betwaiting, 'waiting');
            this.resetProperties();
        },
        resetProperties() {
            this.progress = 0;
            this.isBouncing = false;
            this.bouncingProgress = 0;
            this.isUpward = false;
            this.userImagesData = [];
            this.withdrawn = false;
            this.withdrawcount = 0;
        },
        canclebet() {
            this.betwaiting = false;
            this.isbet = false;
            // $('#cancle_btn').hide();
            this.betamount = 10;
            this.prebet = 10;
        },
        proceedbet(username, amount) {
            this.socket.emit('newBet', username, amount);
        },
        proceedcashout(username, amount, winpoint) {
            this.socket.emit('addWin', username, amount, winpoint);
            this.userBets();
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
        joinbet() {
            if (this.balance > this.prebet && this.prebet >= 10) {
                this.betwaiting = true;
                this.betamount = this.prebet;
                this.isbet = true;
            } else {
                this.ealert("insufficient balance");
            }
        },
        joinwait() {
            if (this.balance > this.prebet && this.prebet >= 10) {
                this.betwaiting = true;
                this.betamount = this.prebet;
            } else {
                this.ealert("insufficient balance");
            }
        },
        minus() {
            if (10 < this.prebet) {
                this.prebet = this.prebet - 1;
            } else {
                // console.log("hello")
            }
        },
        plus() {
            if (this.balance >= this.prebet + 1) {
                this.prebet = this.prebet + 1;
            } else {
                // console.log("hello")
            }
        },
        add(amount) {
            if (this.balance >=  amount) {
                this.prebet = amount;
            } else {
                // console.log("hello")
            }
        },
        updatecrash(pos) {
            this.multiple = pos.crashPosition;
            if (this.autobet && this.isbet) {
                if (this.autocashout < pos) {
                    this.proceedcashout(this.username, this.betamount, this.autocashout);
                    this.cashout(this.autocashout, this.betamount);
                    this.isbet = false;
                }
            }
        },
        // cashOut() {
        //     this.proceedcashout(this.username, this.betamount, this.multiple);
        //     this.betwaiting = false;
        //     this.iscashout = true;
        //     this.isbet = false;
        //     $('#cashout_btn').hide();
        //     $('#waiting_btn').show();
        //     // this.cashout(mul, amount);
        //     // this.cancelbet();
        //     // this.fetchbalance();
        //     // this.fetchbets();
        //     this.GetUser().then(() => {
        //         this.username = this.Users.username;
        //         this.balance = this.Users.balance;
        //     });
        // },
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
        fatchresults() {

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
