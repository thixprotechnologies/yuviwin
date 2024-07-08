<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="javascript:void(0)">Rewards</a>
                <router-link :to="{ name: 'Home' }"><i class="fa-solid fa-home"></i></router-link>
            </div>
            <!-- End top nav -->

            <!-- Start reward box -->
            <div class="rewards-boxes">
                <div class="row">
                    <div v-for=" rows  in  tasks " :key="rows.id" :rowsrec="rows" class="col-12">
                        <div class="rewards-box" :class="{'rewards-box2': rows.type == 2,'rewards-box3':rows.type == 3 }">
                            <h5 v-if="rows.type == 1">{{ getTaskType(rows.type) }}: Bonus</h5>
                            <h5 v-if="rows.type == 2">{{ getTaskType(rows.type) }}: {{ rows.game_count }} Game Play</h5>
                            <h5 v-if="rows.type == 3">{{ getTaskType(rows.type) }}: {{ rows.rechare_value }} Recharge</h5>
                            <div class="rewards-box-text2">
                                <div class="progress-bar">
                                    <div v-if="rows.type == 1" class="percentage" style="width:100%"></div>
                                    <div v-if="rows.type == 2" class="percentage" :style="{ 'width': this.game.gameCount == 0 ? '0%' : getProgress(rows.game_count,this.game.gameCount) }"></div>
                                    <div v-if="rows.type == 3" class="percentage" :style="{ 'width': this.game.recharge == 0 ? '0%' : getProgress(rows.rechare_value,this.game.recharge) }"></div>
                                </div>
                                <p v-if="rows.type == 1" >₹{{ rows.amount }} claim for new account create.</p>
                                <p v-if="rows.type == 2" >₹{{ rows.amount }} claim for {{ rows.game_count }} total game play for every day.</p>
                                <p v-if="rows.type == 3" >₹{{ rows.amount }} claim for &#8377; {{ rows.rechare_value }} total recharge  for every day.</p>
                                <div v-if="rows.is_claimed == true" class="join-get-btn">
                                    <a href="javascript:void(0)">Claimed</a>
                                </div>
                                <div v-if="rows.is_claimed == false"  class="join-get-btn">
                                    <a href="javascript:void(0)" @click="taskClaim(rows.bonus_plan_id)">Claim</a>
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
.rewards-boxes .progress-bar {
    position: relative;
    height: 1.5rem;
    border-radius: 2rem;
    border-radius: 2rem;
    overflow: hidden;
    border: 1px solid #ffffff;
    margin-top: 4rem;
}

.rewards-boxes .progress-bar .percentage {
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
export default {
    data() {
        return {
            tasks: [],
            game: {
                isclaim100: false,
                isclaim1000: false,
                gameCount: 0,
                recharge: 0,
            }
        }

    },
    mounted() {
        this.getTaskList();
        // this.getCountGame();
    },
    methods: {
        getProgress(game,total){
            if(game <= total ){
                return '100%';
            }else{
                var per = (total/game)*100;
                return per.toString()+"%";
            }
        },
        getTaskType(type){
            if(type == 1){
                return 'Wellcome';
            }else if(type==2){
                return 'Game Count';
            }else if(type == 3){
                return 'Rechare';
            }else{
                return 'NA';
            }
        },
        async taskClaim(taskID){
            const formData = new FormData();
            formData.append('task_id',taskID);
            const res = await this.callApi('post', 'api/user/v1/task-claim', formData);
            if (res.status === 200) {
                if(res.data.status == true){
                    this.salert(res.data.message)
                }else{
                    this.ialert(res.data.message)
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
        async getTaskList() {
            //  var username = localStorage.getItem("ruser");
            let formData = new FormData();
            // formData.append("username", username);
            const res = await this.callApi('post', 'api/user/v1/task-reward', formData);
            if (res.status === 200) {
                this.tasks = res.data.tasks;
                this.game.gameCount = res.data.game_count;
                this.game.recharge = res.data.recharge;
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
        async getCountGame() {
            const formData = new FormData();
            var username = localStorage.getItem("ruser");
            formData.append('username', username);
            const res = await this.callApi('post', 'api/user/v1/gameCount', formData);
            if (res.status === 200) {
                this.game.gameCount = res.data.gamecount;
                if (this.game.gameCount >= 100) {
                    this.game.isclaim100 = true;
                }
                if (this.game.gameCount >= 1000) {
                    this.game.isclaim1000 = true;
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
    },
}
</script>
