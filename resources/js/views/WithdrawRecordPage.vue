<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="javascript:void(0)">Withdraw Record</a>
                <a @click="$router.push({ name: 'Withdraw' })" style="color: #fff;"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
            </div>
            <div class="income" style="margin-top:6rem;">
                <details v-for="rows  in  withdraw " :key="rows.id" :rowsrec="rows">
                    <summary>
                        <div>
                            <h3>
                                <strong>{{ rows.type }}</strong>
                                <small :style="{ color: getStatusColor(rows.status) }" >{{ rows.status }}</small>
                            </h3>
                            <span>&#8377; {{ rows.withdraw }}</span>
                        </div>
                    </summary>
                    <div>
                        <dl>
                            <div>
                                <dt>Tnx Id</dt>
                                <dd>{{ rows.rand }}</dd>
                            </div>
                            <div>
                                <dt>Withdraw To</dt>
                                <dd>{{ rows.upi }}</dd>
                            </div>
                            <div>
                                <dt>Time</dt>
                                <dd>{{ this.formatTime(rows.created_at) }}</dd>
                            </div>
                            <div>
                                <router-link class="ncmpbtn" :to="{ name: 'ComplaneCreate', query: { id: rows.id, type: 'Withdraw' } }">Complain</router-link>
                            </div>
                        </dl>
                    </div>
                </details>
            </div>
        </div>
    </section>
</template>
<style scoped>
.ncmpbtn{
    color: #090f1f;
    background: var(--yellow-color);
    padding: 0.5rem;
    font-size: 1.6rem;
    border-radius: 1rem;

}
.income h1 {
    font-weight: 700;
    line-height: 1.125;
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
}

.income h2 {
    margin-top: 0.25em;
    color: #999;
    font-size: clamp(1.125rem, 2.5vw, 1.25rem);
}

.income h2+* {
    margin-top: 1.5em;
}

.income summary {
    position: relative;
    cursor: pointer;
    list-style: none;
}

.income summary::-webkit-details-marker {
    display: none;
}

.income summary div {
    display: flex;
    align-items: center;
}

.income summary h3 {
    display: flex;
    flex-direction: column;
}

.income summary small {
    color: #999;
    font-size: 0.875em;
    line-height: 2;
}

.income summary strong {
    font-weight: 700;
    font-size: 2rem;
}

.income summary span:first-child {
    width: 4rem;
    height: 4rem;
    border-radius: 10px;
    background-color: #f3e1e1;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin-right: 1.25em;
}

.income summary span:first-child svg {
    width: 2.25rem;
    height: 2.25rem;
}

.income summary span:last-child {
    font-weight: 700;
    margin-left: auto;
    font-size: 1.4rem;
}

.income summary:focus {
    outline: none;
}

.income summary .plus {
    color: #289672;
}

.income details {
    padding: var(--padding);
    padding-bottom: 0.5rem;
    background: linear-gradient(#ffffff17, transparent);
    color: #fff;
    border-bottom: 1px solid #b5bfd9;
}

.income details[open] {
    box-shadow: -3px 0 0 #b5bfd9;
}

.income details:first-of-type {
    border-top: 1px solid #b5bfd9;
}

.income details>div {
    padding: 1.6em 0 0;
    font-size: 0.875em;
}

.income dl {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.income dl dt {
    font-weight: 700;
    font-size: 1.2rem;
}

.income dl dd {
    font-size: 1.1rem;
}
</style>
<script>
export default {
    data() {
        return {
            withdraw: '',
        }
    },
    mounted() {
        this.GetUser().then(() => {
            this.rechargeRecord();
        });
    },
    methods: {
        getStatusColor(status){
            if(status == 'success'){
                return 'green';
            }else if(status == 'cancelled'){
                return 'red';
            }else{
                return '#999';
            }
        },
        async rechargeRecord() {
            const res = await this.callApi('post', '/api/user/v1/withdraw/records');
            if (res.status === 200) {
                this.withdraw = res.data.withdraw;
               console.log(this.withdraw)
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
    }
}
</script>
