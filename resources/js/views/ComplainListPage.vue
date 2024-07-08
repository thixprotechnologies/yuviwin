<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="#"><ion-icon name="arrow-back-outline"></ion-icon> Complaints</a>
                <router-link :to="{name: 'Profile'}" style="color: #fff;"><i class="fa-solid fa-arrow-right-from-bracket"></i></router-link>
            </div>
            <!-- End top nav -->
            <!-- ist -->
            <div class="complaints-table">

                <div v-for="rows  in   complains" :key="rows.id" :rowsrec="rows" >
                    <div class="complaints-table-inner">
                        <div class="complaints-table-heading">
                            <h4>Ticket. : <span>{{rows.id}}  </span> &nbsp; &nbsp;<span>{{formattedTime(rows.created_at)}}</span></h4>
                        </div>

                        <div class="complaints-table-detail">
                            <h5>Support Type : <span class="complaints-table-detail-span">{{rows.type}}</span></h5>

                            <h5>For Transaction : <span class="complaints-table-detail-span">{{rows.tnx_id}}</span>
                            </h5>

                            <h5>Complaint Description : <span class="complaints-table-detail-span">{{ rows.reason }}</span></h5>

                            <h5>Amount : <span class="complaints-table-detail-span">{{rows.amount}}</span></h5>

                            <h5 v-if="rows.type == 'Recharge'">OrderId : <span class="complaints-table-detail-span">{{rows.utr}}</span></h5>


                            <!-- <h5 v-if="rows.type != 'Recharge'">Wallet : <span class="complaints-table-detail-span"></span></h5> -->
                            <h5  v-if="rows.UPID != 'null' && rows.type == 'Recharge'">UPID : <span class="complaints-table-detail-span">{{rows.UPID}}</span></h5>

                            <!-- <h5  v-if="rows.type != 'Recharge'">A/c : <span class="complaints-table-detail-span">55550125004711</span></h5> -->

                            <!-- <h5  v-if="rows.type != 'Recharge'">IFSC :<span class="complaints-table-detail-span">FDRL0005555</span></h5> -->

                            <h5 >Complaint Resolution :
                                <span class="complaints-table-detail-span">{{ rows.response }}</span>
                            </h5>

                            <h5>Status :
                                <span class="complaints-table-detail-span mt-0"  :class="{ 'text-success': rows.status == 2, 'text-danger': rows.status == 3 }">{{statusGet(rows.status)}}</span>
                            </h5>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: null,
        },
        type: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            complains:'',
        }
    },
    mounted() {
            this.GetUser().then(() => {
                this.checkData();
            });
    },
    methods: {
        formattedTime(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleDateString() +' '+date.toLocaleTimeString(); // Adjust format as needed
    },
        statusGet(status){
            if(status == 2){
                return 'Complete';
            }else if(status == 0){
                return 'Cancelled';
            }else{
                return 'Pending';
            }
        },
        async checkData() {
            const res = await this.callApi('post', '/api/user/v1/complanes');
            if (res.status === 200) {
              this.complains = res.data.data;
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
