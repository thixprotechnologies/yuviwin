<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a @click="$router.push({ name: 'Invite' })"><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"
                        style="color: #fff;"></i></a>
                <a href="javascript:void(0)">Agent Million Cash Growth Plan</a>
                <router-link :to="{ name: 'Home' }"><i class="fa-solid fa-home"></i></router-link>
            </div>
            <!-- End top nav -->

            <!-- Start Growth Level box -->
            <div class="payment-method-mainBox Growth-1st-box">
                <div class="payment-method-box">
                    <img src="../assets/img/daimond-grow.png">
                    <h3>Agent Million Cash Growth Plan</h3>
                    <p>The BET Agent Million Cash Growth Plan is divided into 8 levels, and each level has generous rewards.
                        Complete the highest level and get a reward of <span>*1,00,00,000</span> immediately.</p>
                </div>
            </div>
            <!-- End Growth Level box -->

            <!-- Start grow-level-box design -->
            <div class="grow-level-box">
                <div class="grow-level-box-inner" @click="starttask(1)">
                    <div>
                        <h4>Level 1</h4>
                        <h5>Iron</h5>
                    </div>

                    <p>+&#8377; {{ getlevelamount(1) }}</p>
                </div>
                <div class="grow-level-box-inner-task-toggle hide mt-4" id="levelstart1">
                    <p>Level 1 is easy to upgrade. You can start right away!</p>

                    <div v-if="Users.level > 1" class="progress w-100 my-2">
                        <div class="progress-bar w-100" role="progressbar" aria-valuenow="1" aria-valuemin="0"
                            aria-valuemax="1"></div>
                    </div>
                    <div v-if="Users.level === 1" class="progress w-100 my-2">
                        <div class="progress-bar" :style="{ width: progressWidth + '%' }" role="progressbar"
                            aria-valuenow="1" aria-valuemin="0" aria-valuemax="100">{{ progressWidth }} %</div>
                    </div>

                    <button type="button" class="task-btn" @click="showtasks(1)">{{ this.Users.level > 1 ? 'Completed' :
                        'Start task' }}</button>
                </div>
                <div class="grow-level-box-inner-main-toggle hide mt-4" id="leveltask1">
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(1, 10) }} user to receive it.</p>
                    </div>
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>When you share the link and someone registers through your link, that person can become your
                            subordinate, and you can get *1 immediately.</p>
                    </div>
                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext1">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext1')">Copy</button>
                        </div>
                    </div>
                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext2">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext2')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(1, 0)">Received
                            Awards</button>
                    </div>
                </div>

                <div class="grow-level-box-inner mt-4" @click="starttask(2)">
                    <div>
                        <h4>Level 2</h4>
                        <h5>Bronze</h5>
                    </div>

                    <p>+&#8377; {{ getlevelamount(2) }}</p>
                </div>
                <div class="grow-level-box-inner-task-toggle hide mt-4" id="levelstart2">
                    <p>Level 2 is easy to upgrade. You can start right away!</p>

                    <div v-if="Users.level > 2" class="progress w-100 my-2">
                        <div class="progress-bar w-100" role="progressbar" aria-valuenow="1" aria-valuemin="0"
                            aria-valuemax="1"></div>
                    </div>
                    <div v-if="Users.level === 2" class="progress w-100 my-2">
                        <div class="progress-bar" :style="{ width: progressWidth + '%' }" role="progressbar"
                            :aria-valuenow="this.dwn" aria-valuemin="0" :aria-valuemax="getinvitecount(2, 10)">{{ progressWidth }} %</div>
                    </div>
                    <button type="button" class="task-btn" @click="showtasks(2)">{{ this.Users.level > 2 ? 'Completed' :
                        'Start task' }}</button>
                </div>
                <div class="grow-level-box-inner-main-toggle hide mt-4" id="leveltask2">
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(2, 10) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>Introduce tha game play of YUVIWIN, and introduce tha method of recharging YUVIWIN.</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext3">
                                <p>Register to receive *1. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext3')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext4">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext4')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(2, 0)">Received
                            Awards</button>
                    </div>
                </div>
                <div class="grow-level-box-inner mt-4" @click="starttask(3)">
                    <div>
                        <h4>Level 3</h4>
                        <h5>Silver</h5>
                    </div>

                    <p>+&#8377; {{ getlevelamount(3) }}</p>
                </div>
                <div class="grow-level-box-inner-task-toggle hide mt-4" id="levelstart3">
                    <p>Level 3 is easy to upgrade. You can start right away!</p>
                    <div v-if="Users.level > 3" class="progress w-100 my-2">
                        <div class="progress-bar w-100" role="progressbar" aria-valuenow="1" aria-valuemin="0"
                            aria-valuemax="1"></div>
                    </div>
                    <div v-if="Users.level === 3" class="progress w-100 my-2">
                        <div class="progress-bar" :style="{ width: progressWidth + '%' }" role="progressbar"
                            :aria-valuenow="this.dwn" aria-valuemin="0" :aria-valuemax="getinvitecount(3, 10)">{{ progressWidth }} %</div>
                    </div>
                    <button type="button" class="task-btn" @click="showtasks(3)">{{ this.Users.level > 3 ? 'Completed' :
                        'Start task' }}</button>
                </div>
                <div class="grow-level-box-inner-main-toggle hide mt-4" id="leveltask3">
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(3, 10) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>Expend tha scope of sending promotional content including adding more Facebook groups, watsapp
                            groups, Instagram, YouTube comments , telegram groups.
                            <br>Increase the frequency of sending content
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext5">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext5')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext6">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext6')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(3, 0)">Received
                            Awards</button>
                    </div>
                </div>
                <div class="grow-level-box-inner mt-4" @click="starttask(4)">
                    <div>
                        <h4>Level 4</h4>
                        <h5>Gold</h5>
                    </div>

                    <p>+&#8377; {{ getlevelamount(4) }}</p>
                </div>
                <div class="grow-level-box-inner-task-toggle hide mt-4" id="levelstart4">
                    <p>Level 4 is easy to upgrade. You can start right away!</p>
                    <div v-if="Users.level > 4" class="progress w-100 my-2">
                        <div class="progress-bar w-100" role="progressbar" aria-valuenow="1" aria-valuemin="0"
                            aria-valuemax="1"></div>
                    </div>
                    <div v-if="Users.level === 4" class="progress w-100 my-2">
                        <div class="progress-bar" :style="{ width: progressWidth + '%' }" role="progressbar"
                            :aria-valuenow="this.dwn" aria-valuemin="0" :aria-valuemax="getinvitecount(4, 10)">{{ progressWidth }} %</div>
                    </div>
                    <button type="button" class="task-btn" @click="showtasks(4)">{{ this.Users.level > 4 ? 'Completed' :
                        'Start task' }}</button>
                </div>
                <div class="grow-level-box-inner-main-toggle hide mt-4" id="leveltask4">
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(4, 10) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>Try to create your own watsapp groups, telegram groups, Facebook groups, Invite all your
                            subordinates, and all social networking site friends to join tha group, and share tha game
                            experience in tha group</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext7">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext7')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext8">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext8')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(4, 0)">Received
                            Awards</button>
                    </div>
                </div>
                <div class="grow-level-box-inner mt-4" @click="starttask(5)">
                    <div>
                        <h4>Level 5</h4>
                        <h5>Platinum</h5>
                    </div>

                    <p>+&#8377; {{ getlevelamount(5) }}</p>
                </div>
                <div class="grow-level-box-inner-task-toggle hide mt-4" id="levelstart5">
                    <p>Level 5 is easy to upgrade. You can start right away!</p>
                    <div v-if="Users.level > 5" class="progress w-100 my-2">
                        <div class="progress-bar w-100" role="progressbar" aria-valuenow="1" aria-valuemin="0"
                            aria-valuemax="1"></div>
                    </div>
                    <div v-if="Users.level === 5" class="progress w-100 my-2">
                        <div class="progress-bar" :style="{ width: progressWidth + '%' }" role="progressbar"
                            :aria-valuenow="this.dwn" aria-valuemin="0" :aria-valuemax="getinvitecount(5, 10)">{{ progressWidth }} %</div>
                    </div>
                    <button type="button" class="task-btn" @click="showtasks(5)">{{ this.Users.level > 5 ? 'Completed' :
                        'Start task' }}</button>
                </div>
                <div class="grow-level-box-inner-main-toggle hide mt-4" id="leveltask5">
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(5, 10) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>Introduce tha gameplay of YUVIWIN, and introduce the method of recharging YUVIWIN</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext9">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext9')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext10">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext10')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(5, 0)">Received
                            Awards</button>
                    </div>
                </div>
                <div class="grow-level-box-inner mt-4" @click="starttask(6)">
                    <div>
                        <h4>Level 6</h4>
                        <h5>Diamond</h5>
                    </div>

                    <p>+&#8377; {{ getlevelamount(6) }}</p>
                </div>
                <div class="grow-level-box-inner-task-toggle hide mt-4" id="levelstart6">
                    <p>Level 6 is easy to upgrade. You can start right away!</p>
                    <div v-if="Users.level > 6" class="progress w-100 my-2">
                        <div class="progress-bar w-100" role="progressbar" aria-valuenow="1" aria-valuemin="0"
                            aria-valuemax="1"></div>
                    </div>
                    <div v-if="Users.level === 6" class="progress w-100 my-2">
                        <div class="progress-bar" :style="{ width: progressWidth + '%' }" role="progressbar"
                            :aria-valuenow="this.dwn" aria-valuemin="0" :aria-valuemax="getinvitecount(6, 10)">{{ progressWidth }} %</div>
                    </div>
                    <button type="button" class="task-btn" @click="showtasks(6)">{{ this.Users.level > 6 ? 'Completed' :
                        'Start task' }}</button>
                </div>
                <div class="grow-level-box-inner-main-toggle hide mt-4" id="leveltask6">
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(6, 1) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext11">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext11')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext12">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext12')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(6, 1)">Received
                            Awards</button>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(6, 2) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext13">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext13')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext14">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext14')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(6, 2)">Received
                            Awards</button>
                    </div>
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(6, 3) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext15">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext15')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext16">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext16')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(6, 3)">Received
                            Awards</button>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(6, 4) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext17">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext17')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext18">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext18')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(6, 4)">Received
                            Awards</button>
                    </div>
                </div>
                <div class="grow-level-box-inner mt-4" @click="starttask(7)">
                    <div>
                        <h4>Level 7</h4>
                        <h5>Master</h5>
                    </div>

                    <p>+&#8377; {{ getlevelamount(7) }}</p>
                </div>
                <div class="grow-level-box-inner-task-toggle hide mt-4" id="levelstart7">
                    <p>Level 7 is easy to upgrade. You can start right away!</p>
                    <div v-if="Users.level > 7" class="progress w-100 my-2">
                        <div class="progress-bar w-100" role="progressbar" aria-valuenow="1" aria-valuemin="0"
                            aria-valuemax="1"></div>
                    </div>
                    <div v-if="Users.level === 7" class="progress w-100 my-2">
                        <div class="progress-bar" :style="{ width: progressWidth + '%' }" role="progressbar"
                            :aria-valuenow="this.dwn" aria-valuemin="0" :aria-valuemax="getinvitecount(7, 10)">{{ progressWidth }} %</div>
                    </div>
                    <button type="button" class="task-btn" @click="showtasks(7)">{{ this.Users.level > 7 ? 'Completed' :
                        'Start task' }}</button>
                </div>
                <div class="grow-level-box-inner-main-toggle hide mt-4" id="leveltask7">
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(7, 1) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext19">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext19')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext20">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext20')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(7, 1)">Received
                            Awards</button>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(7, 2) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext21">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext21')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext22">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext22')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(7, 2)">Received
                            Awards</button>
                    </div>
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(7, 3) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext23">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext23')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext24">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext24')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(7, 3)">Received
                            Awards</button>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(7, 4) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext25">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext25')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext26">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext26')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(7, 4)">Received
                            Awards</button>
                    </div>
                </div>
                <div class="grow-level-box-inner mt-4" @click="starttask(8)">
                    <div>
                        <h4>Level 8</h4>
                        <h5>Crown</h5>
                    </div>

                    <p>+&#8377; {{ getlevelamount(8) }}</p>
                </div>
                <div class="grow-level-box-inner-task-toggle hide mt-4" id="levelstart8">
                    <p>Level 8 is easy to upgrade. You can start right away!</p>
                    <div v-if="Users.level > 8" class="progress w-100 my-2">
                        <div class="progress-bar w-100" role="progressbar" aria-valuenow="1" aria-valuemin="0"
                            aria-valuemax="1"></div>
                    </div>
                    <div v-if="Users.level === 8" class="progress w-100 my-2">
                        <div class="progress-bar" :style="{ width: progressWidth + '%' }" role="progressbar"
                            :aria-valuenow="this.dwn" aria-valuemin="0" :aria-valuemax="getinvitecount(8, 10)">{{ progressWidth }} %</div>
                    </div>
                    <button type="button" class="task-btn" @click="showtasks(8)">{{ this.Users.level > 8 ? 'Completed' :
                        'Start task' }}</button>
                </div>
                <div class="grow-level-box-inner-main-toggle hide mt-4" id="leveltask8">
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(8, 1) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>

                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext27">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext27')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext28">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext28')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(8, 1)">Received
                            Awards</button>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(8, 2) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>

                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext29">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext29')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext30">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext30')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(8, 2)">Received
                            Awards</button>
                    </div>
                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(8, 3) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext31">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext31')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext32">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext32')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(8, 3)">Received
                            Awards</button>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Reward Conditions:</h4>
                        <p>Invite {{ getinvitecount(8, 4) }} effective user to receive it
                            <br> *Recharges 100 or more, it is a effective user
                        </p>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content">
                        <h4>Upgrade Skills:</h4>
                        <p>The task is devided into 4 stage and every time you complete a stage you can get rewarded for
                            that stage</p>

                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Lucky Bonus promotion, content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext33">
                                <p>Register to receive *10. Multiple invite and rewards for make money..</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext33')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-LuckyBonus mt-4">
                        <h4>Platform introduction, promotion content and links</h4>
                        <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex">
                            <div class="grow-level-box-inner-main-toggle-content-LuckyBonus-flex-box1" id="copytext34">
                                <p>Daily Check in rewards &#8377; 1 - &#8377; 50. Task rewards HOT GAME - Crash. Up to 90%
                                    winning rate . Register to receive &#8377; 20.</p>
                                <a href="javascript:void(0)">{{ getRefurl() }}</a>
                            </div>

                            <button class="flex-box-1-btn" @click="copytext('copytext34')">Copy</button>
                        </div>
                    </div>

                    <div class="grow-level-box-inner-main-toggle-content-share mt-4">
                        <h4>You can share them on:</h4>
                        <div class="grow-level-box-inner-main-toggle-content-share-links">
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-telegram"></i></a>
                        </div>

                        <button type="submit" class="grow-level-box-inner-main-toggle-content-LuckyBonus-submit-btn mt-4"
                            @click="recivereward(8, 4)">Received
                            Awards</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- End grow-level-box-design -->
    </section>
</template>
<script>
export default {
    data() {
        return {
            levelamount: [
                "3",
                "50",
                "300",
                "1500",
                "4000",
                "100000",
                "1000000",
                "10000000"
            ],
            levelsdetails: '',
            leveldownload: [
                "1",
                "1",
                "5",
                "20",
                "50",
                "1000",
                "100000",
                "1000000"
            ],
            dwn: 0,
            requiredDwn: 0,
            progressWidth: 0,
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.getlevels();
            this.getRefurl();
        });
    },
    methods: {
        getRefurl() {
            const baseURL = window.location.origin;
            const loginRoute = this.$router.resolve({ name: 'Login', query: { LTCKE: this.Users.usercode } });
            return baseURL + loginRoute.href;
        },
        getRefurl() {
            const baseURL = window.location.origin;
            const loginRoute = this.$router.resolve({ name: 'Login', query: { LTCKE: this.Users.usercode } });
            return baseURL + loginRoute.href;
        },
        copytext(id) {
            const textToCopy = document.getElementById(id).textContent.trim();
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        },
        starttask(name) {
            if (this.Users.level >= name) {
                var level = 'levelstart' + name;
                var task = 'leveltask' + name;
                if (document.getElementById(task).classList.contains('hide')) {
                    if (document.getElementById(level).classList.contains('hide')) {
                        document.getElementById(level).classList.remove('hide');
                        document.getElementById(task).classList.add('hide');
                    } else {
                        document.getElementById(level).classList.add('hide');
                        document.getElementById(task).classList.add('hide');
                    }
                } else {

                    document.getElementById(level).classList.add('hide');
                    document.getElementById(task).classList.add('hide');
                }
            }
        },
        showtasks(name) {
            var level = 'levelstart' + name;
            var task = 'leveltask' + name;
            document.getElementById(level).classList.add('hide');
            document.getElementById(task).classList.remove('hide');

        },
        getlevelamount(level) {
            return this.levelamount[level - 1];
        },
        getinvitecount(level, sub) {
            if (level >= 5) {
                return this.leveldownload[level - 1];
            } else {
                return (this.leveldownload[level - 1] / 10) * sub;
            }
        },
        async getlevels() {
            const res = await this.callApi('post', '/api/user/v1/levels-details');
            if (res.status === 200) {
                this.levelsdetails = res.data.levels;
                this.levelamount = res.data.levelsamt;
                this.dwn = res.data.dwncount;
                this.requiredDwn = res.data.requireddwn;
                this.progressWidth = (this.dwn / this.requiredDwn) * 100;
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
        async recivereward(level, sub_level) {
            const data = new FormData();
            data.append('level', level);
            data.append('sub_level', sub_level);
            const res = await this.callApi('post', '/api/user/v1/levels/rewards-claim', data);
            if (res.status === 200) {
                if (res.data.status) {
                    this.salert(res.data.msg);
                } else {
                    this.ealert(res.data.msg);
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
        }
    }
}
</script>
