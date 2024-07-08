<template>
    <section class="home-section">
        <div class="center" style="position: relative;">
            <div class="top-nav-inivte">
                <a @click="$router.push({ name: 'Recharge' })"><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"
                        style="color: #fff;"></i></a>
                <a href="javascript:void(0)">Make Payment</a>
                <a href="javascript:void(0)" style=""></a>
            </div>
            <!-- End top nav -->

            <!-- Start payment method box -->
            <div class="payment-method-QR-mainBox">
                <div class="payment-method-QR-mainBox-inner">
                    <div class="qr-img">
                        <img :src="qrCodeUrl" v-if="qrCodeUrl !== ''" alt="{{ userData.type }}">
                    </div>
                    <div class="payment-method-QR-mainBox-inner-text">
                        <h4>Payment Mode: {{ userData.type }}</h4>
                        <h4>Amount : {{ userData.amount }}</h4>
                        <h4 style="font-size:14px;">VPA: <span id="upiValue">{{ upi }}</span></h4>
                        <div class="payment-method-QR-mainBox-inner-text-buttons">
                            <button type="button" @click="copyUPI">Copy UPI</button>
                            <!-- <button type="button" @click="openPaymentApp(userData.type, upi, userData.amount)">Open 
                                APP</button>-->
                        </div>
                    </div>
                </div>
            </div>

            <div class="payment-method-QR-mainBox-process">
                <div class="progress-container">
                    <div class="step active">1</div>
                    <div class="line" :class="{ 'active': steps == 2 }"></div>
                    <div class="step" :class="{ 'active': steps == 2 }">2</div>
                    <div class="line" :class="{ 'active': steps == 3 }"></div>
                    <div class="step" :class="{ 'active': steps == 3 }">3</div>
                </div>
            </div>

            <div class="payment-method-QR-mainBox-process-inner-part">
                <div class="file-upload">
                    <div class="upload-btn-wrapper" v-if="steps == 1">
                        <input type="number" v-model="userData.utr" id="utrfield" ref="utrInput" value="0" class="upload-img-input" placeholder="UTR Number">
                        <!-- <button @click="handleUpload()" class="upload-img-btn" ><i class="fa fa-upload"
                                aria-hidden="true"></i> Upload</button>
                        <input type="file" ref="fileInput" name="myfile" id="fileInput" @change="onFileChange"
                            accept="image/*" /> -->
                            <button class="upload-img-btn" @click="onFileChange"> Submit</button>
                    </div>
                    <div class="file-preview" v-if="filePreview">
                        <img :src="filePreview" alt="File Preview" />
                    </div>
                </div>
            </div>

            <div class="payment-method-QR-mainBox-complaint-box" style="justify-content: center;" id="step2block"
                v-if="steps == 2">
                <span style="font-size: 1.4rem; color: #fff;">Our agent will process your payment <span id="clockdiv">
                        <div><span class="minutes">2</span>
                        </div>
                        <div><span class="seconds">00</span>
                        </div>
                    </span></span>
            </div>
            <div class="payment-method-QR-mainBox-complaint-box" id="step2block" v-if="steps != 1">
                <a href="#" class="QR-complaint-btn">Complaint</a>
            </div>
            <div class="payment-method" v-if="steps == 3">
                <div class="heading"><b>Payment</b> :{{ getPaymentStatus(paymentStatus) }}</div>
                <div class="sub-heading"><b>Amount</b> : &#8377; {{ userData.amount }}</div>
            </div>
            <div v-if="payment == true" class="pay-popup">
        <img src="../assets/img/success_pay.png" alt="success payment">
        <p>Yor amount &#8377; {{userData.amount}} recharge successfully Done.</p>
        <div class="btn pybtn" @click="paymentConfirm()">Ok</div>
      </div>
        </div>
    </section>
</template>
<style scoped>
    .pay-popup {
      position: absolute;
      width: 80%;
      background: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      border-radius: 2rem;
      font-size: 2rem;
      padding: 4rem 5% 1rem;
      text-align: center;
    }

    .pay-popup img {
      height: 60px;
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
    }

    .pay-popup .pybtn {
      font-size: 4rem;
      font-weight: 600;
      background: var(--bg-color);
      border-radius: 2rem;
      height: 7rem;
      width: 20rem;
      margin-top: 4rem;
      color: #fff;
      text-transform: uppercase;
    }
.payment-method {
    display: flex;
    padding: var(--padding);
    margin: 0 2.8%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.payment-method .heading {
    font-size: 2rem;
    color: #ffff;
}

.payment-method .sub-heading {
    font-size: 1.6rem;
    color: #ffff;
}

/*PAYMENT METHOD QR CODE PAGE DESIGN*/
.payment-method-QR-mainBox {
    margin-top: 6rem;
    background: var(--blue-color);
    /* padding: var(--padding); */
}

.qr-img img {
    width: 120px;
    height: auto;
}

.qr-img {
    padding: .3rem;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    align-items: center;
}

.payment-method-QR-mainBox .payment-method-QR-mainBox-inner {
    align-items: center;
    justify-content: space-between;
    padding: var(--padding);
    margin: 0 2.8%;
}

.payment-method-QR-mainBox-inner-text h4 {
    color: var(--white-color);
    font-size: 1.4rem;
    font-weight: 600;
    padding-bottom: .4rem;
}

.payment-method-QR-mainBox-inner-text-buttons {
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-top: 1rem;
}

.payment-method-QR-mainBox-inner-text-buttons button {
    background: var(--bg-color);
    font-size: 1.2rem;
    color: var(--white-color);
    height: 35px;
    width: 100%;
    border-radius: 4px;
}

.progress-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
}

.step {
    width: 30px;
    height: 30px;
    background-color: #ddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-size: 1.4rem;
    font-weight: 700;
}

.line {
    flex: 1;
    height: 2px;
    background-color: #ccc;
    z-index: 0;
}

.step.active {
    background: var(--blue-color);
    color: white;
    outline: 1.4px solid #ffffff66;
    outline-offset: 4px;
}

.line.active {
    background: var(--blue-color);
}

.payment-method-QR-mainBox-process {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
}

.file-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
    text-align: center;
}
.upload-img-input{
    color: var(--black-color);
    padding: 8px 20px;
    border-radius: 8px;
    /* max-width: 150px; */
    width: 100%;
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 20px;
}
.upload-img-input input[type=number] {
    -moz-appearance: textfield;
    -webkit-appearance: none;
    appearance: none;
}
.upload-img-btn {
    color: var(--black-color);
    padding: 8px 20px;
    border-radius: 8px;
    max-width: 150px;
    width: 100%;
    background: var(--yellow-color);
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 20px;
}

.upload-btn-wrapper input[type=file] {
    font-size: 1.4rem;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
    margin-top: 30px;
}

.file-preview {
    margin-top: 20px;
    max-width: 100%;
}

.file-preview img {
    width: 200px;
    border-radius: 10px;
}

.payment-method-QR-mainBox-complaint-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--padding);
    margin: 0 2.8%;
}

#clockdiv {
    font-family: sans-serif;
    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
}

#clockdiv>div {
    padding: 5px;
    border-radius: 3px;
    background: #01cb5f2b;
    display: inline-flex;
    transform: skew(-20deg);
}

#clockdiv div>span {
    padding: 4px;
    font-size: 1.4rem;
    border-radius: 3px;
    background: var(--green-color);
    display: inline-block;
    font-weight: 700;
}

.smalltext {
    padding-top: 5px;
    font-size: 16px;
}

.QR-complaint-btn {
    text-decoration: none !important;
    color: var(--black-color);
    font-size: 1.4rem;
    font-weight: 600;
    background: var(--background);
    max-width: 100px;
    width: 100%;
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    height: 35px;
    transform: skew(-20deg);
}

/*END PAYMENT METHOD QR CODE PAGE DESIGN*/
</style>
<script>

import QRCode from 'qrcode';
export default {
    props: {
        user: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            userData: {
                username: null,
                amount: null,
                type: null,
                utr:null,
            },
            upi: '',
            filePreview: null,
            steps: 1,
            redirect: false,
            qrCodeUrl: '',
            timerintervel: null,
            paymentid: null,
            timertime: 120,
            paymentStatus: 0,
            payment:false,
        }
    },
    beforeUnmount: function () {
        if (this.timerintervel) {
            clearInterval(this.timerintervel);
        }
    },
    created() {
        if (!this.user && !this.type && !this.amount) {
            this.$router.push({ name: 'Recharge' });
        } else {
            this.userData.username = this.user;
            this.userData.amount = this.amount;
            this.userData.type = this.type;
            this.GetUser().then(() => {
                this.userData.username = this.Users.username;
            });
        }
    },
    mounted() {
        this.getUpi().then(() => {
            const upiPaymentDetails = `upi://pay?pa=${this.upi}&pn=RDXwin&am=${this.amount}&cu=INR`; // Replace with your UPI payment details
            this.generateQRCode(upiPaymentDetails);
        })
    },
    methods: {
        async generateQRCode(paymentDetails) {
            try {
                const url = await QRCode.toDataURL(paymentDetails);
                this.qrCodeUrl = url;
            } catch (error) {
                console.error('Error generating QR code:', error);
            }
        },
        getPaymentStatus(status) {
            if (status == 0) {
                return 'Pending';
            } else {
                if (status == 3) {
                    return 'Cancled';
                } else if (status == 2) {
                    return 'Success';
                } else {
                    return 'Pending';
                }
            }
        },
        countdown() {
            var distance = this.timertime;
            var i = distance / 60,
                n = distance % 60;
            var minutes = Math.floor(i);
            var seconds = ('0' + Math.floor(n)).slice(-2);
            var sec1 = (seconds % 100 - seconds % 10) / 10;
            var sec2 = seconds % 10;
            if (distance == 0) {
                this.$router.push({ name: 'Home' });
            }
            document.getElementById('clockdiv').innerHTML = `<div><span class="minutes">${minutes}</span>
                    </div>
                    <div><span class="seconds">${sec1}${sec2}</span>
                    </div>`;
            this.timertime = this.timertime - 1;
            this.checkPayment();
        },
        async checkPayment() {
            const formdata = new FormData();
            formdata.append('paymentid', this.paymentid);
            const res = await this.callApi('post', '/api/user/v1/payment/status', formdata);
            if (res.status === 200) {
                if (res.data.status == 3) {
                    // this.ealert(res.data.msg);
                    clearInterval(this.timerintervel);
                    this.steps = 3;
                    this.paymentStatus = res.data.status;
                    setTimeout(() => {
                        this.$router.push({ name: 'Home' });
                    }, 5000);
                } else
                    if (res.data.status == 2) {
                        this.payment = true;
                        clearInterval(this.timerintervel);
                        this.steps = 3;
                        this.paymentStatus = res.data.status;
                        setTimeout(() => {
                            this.$router.push({ name: 'Home' });
                        }, 5000);
                    }
            } else {
                if (res.status === 401) {
                    this.logout();
                }else if (res.status == 400) {
                    this.ialert(res.data.msg)
                }else if (res.status == 422) {
                    for (let i in res.data.errors) {
                        this.ealert(res.data.errors[i][0])
                    }
                }
                else {
                    this.swralert()
                }
            }
        },
        paymentConfirm(){
            this.$router.push({ name: 'Home' });
        },
        async getUpi() {
            const formdata = new FormData();
            formdata.append('type', this.type);
            const res = await this.callApi('post', '/api/user/v1/getupi', formdata);
            if (res.status === 200) {
                this.upi = res.data.upi;
            } else {
                if (res.status === 401) {
                    this.logout();
                }else if (res.status == 400) {
                    this.ialert(res.data.msg)
                }else if (res.status == 422) {
                    for (let i in res.data.errors) {
                        this.ealert(res.data.errors[i][0])
                    }
                }
                else {
                    this.swralert()
                }
            }
        },
        openPaymentApp(type, upiId, amount) {
            let appUrl = '';
            switch (type) {
                case 'Paytm':
                    appUrl = `paytm://upi?pa=${upiId}&pn=Recipient&am=${amount}&cu=INR`;
                    break;
                case 'Gpay':
                    appUrl = `upi://pay?pa=${upiId}&pn=Recipient&am=${amount}&cu=INR`;
                    break;
                case 'PhonePe':
                    appUrl = `phonepe://pay?pn=Recipient&pa=${upiId}&pn=Recipient&am=${amount}&cu=INR`;
                    break;
                default:
                    break;
            }
            if (appUrl) {
                window.location.href = appUrl;
            } else {
                console.error('Invalid app type or app URL not available');
            }
        },
        handleUpload() {
            if(this.userData.utr == null){
                this.$refs.utrInput.focus();
            }else{
                this.$refs.fileInput.click();
            }
        },
        async onFileChange() {
            // const files = this.$refs.fileInput.files;
            // const filePreview = this.$refs.filePreview;
            // if (files.length === 0) {
            //     filePreview.innerHTML = 'No file selected';
            // } else {
            const utr=document.getElementById('utrfield').value;
            
                const formdata = new FormData();
                formdata.append('amount', this.userData.amount);
                formdata.append('upi', this.upi);
                formdata.append('utr', this.userData.utr);
                // formdata.append('image', files[0]);
                if(utr!='')
                {
                const res = await this.callApi('post', '/api/user/v1/payment', formdata);
                if (res.status === 200) {
                    
                    if (res.data.status) {
                        this.salert(res.data.message);
                        // this.filePreview = URL.createObjectURL(files[0]);
                        this.steps = 2;
                        this.paymentid = res.data.payId;
                        this.timerintervel = setInterval(this.countdown, 1000);
                    } else {
                        this.ealert(res.data.message);
                        
                    }
                } else {
                    if (res.status === 401) {
                    this.logout();
                }else if (res.status == 400) {
                    this.ialert(res.data.msg)
                }else if (res.status == 422) {
                        for (let i in res.data.errors) {
                            this.ealert(res.data.errors[i][0])
                        }
                    }
                    else {
                        this.swralert()
                    }
                }
                }
                else{
                 this.ealert('Enter UTR No.');
                }
            //}
        },
        copyUPI() {
    var text = document.getElementById('upiValue').innerText;
    var tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}
    }
}
</script>
