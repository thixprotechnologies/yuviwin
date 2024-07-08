import VsToast from "@vuesimple/vs-toast";
import axios from "axios";
import anime from "animejs";
import moment from 'moment';

export default {
    data() {
        return {
            count: 1,
            userId: null,
            username: null,
            balance: null,
            Users: [],
            bonus: null,
        };
    },
    methods: {
        formatTime(dateTime) {
            return moment(dateTime).format('h:mm A'); // 'HH:mm' format for hours and minutes
        },
        timeGameRecord(time){
            let parts = time.split(';');
            return parts[0].trim();
        },
        dateGameRecord(date){
            let parts = date.split(';');
            return parts[1].trim();        },
        async callApi(method, url, dataObj) {
            try {
                const token = localStorage.getItem("systoken"); // Retrieve the token from localStorage
                const config = {
                    method: method,
                    url: url,
                    data: dataObj,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                };

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`; // Include the token in the Authorization header
                }

                return await axios(config);
            } catch (e) {
                return e.response;
            }
        },

        setCountBalanace(val) {
            const obj = { n: this.count };
            anime({
                targets: obj,
                n: parseFloat(val).toFixed(2),
                duration: 500,
                easing: "linear",
                update: () => {
                    this.balance = parseFloat(obj.n).toFixed(2);
                },
            });
        },
        setCountBonus(val) {
            const obj = { n: this.count };
            anime({
                targets: obj,
                n: parseFloat(val).toFixed(2),
                duration: 500,
                easing: "linear",
                update: () => {
                    this.bonus = parseFloat(obj.n).toFixed(2);
                },
            });
        },
        async GetUser() {
            if (localStorage.getItem("ruser") !== null) {
                var username = localStorage.getItem("ruser");
                let formData = new FormData();
                formData.append("username", username);
                const res = await this.callApi(
                    "post",
                    "/api/user/v1/getDetails",
                    formData
                );
                if (res.status === 200) {
                    this;
                    this.Users = res.data.data;
                    this.userId = this.Users.usercode;
                    this.username = this.Users.username;
                    this.balance = parseFloat(this.Users.balance).toFixed(2);
                    this.bonus = parseFloat(this.Users.bonus).toFixed(2);
                    this.setCountBonus(this.bonus);
                    this.setCountBalanace(this.balance);
                } else {
                    if (res.status === 401) {
                        this.logout();
                    }else if (res.status == 400) {
                        this.ialert(res.data.msg)
                    }else if (res.status == 422) {
                        for (let i in res.data.errors) {
                            this.ealert(res.data.errors[i][0]);
                        }
                    } else {
                        this.swralert();
                    }
                }
            }
        },
        telegram(){
            window.location = 'https://t.me/Yuviwin_Support';
        },
        downloadApk(){
            if(this.userId != null){
                window.location = `/download/apk?user_id=${this.userId}`;
                // window.location = `apk/app-release.apk`;
            }else{
                window.location = `apk/app-release.apk`;
            }
        },
        logout() {
            localStorage.removeItem("ruser");
            localStorage.removeItem("systoken");
            this.$router.push({ name: "Login" });
        },
        dalert(desc) {
            VsToast.show({
                title: null,
                message: desc,
                timeout: 300,
                position: "center-center",
            });
        },
        winloose(desc,cls) {
            VsToast.show({
                message: desc,
                timeout: 300,
                position: "center-center",
                className:cls,
            });
        },
        ialert(desc) {
            VsToast.show({
                title: null,
                message: desc,
                variant: "info",
                timeout: 300,
                position: "center-center",
            });
        },
        salert(desc) {
            VsToast.show({
                title: null,
                message: desc,
                variant: "success",
                timeout: 300,
                position: "center-center",
            });
        },
        walert(desc) {
            VsToast.show({
                title: null,
                message: desc,
                variant: "warning",
                timeout: 300,
                position: "center-center",
            });
        },
        ealert(desc) {
            VsToast.show({
                title: null,
                message: desc,
                variant: "error",
                timeout: 300,
                position: "center-center",
            });
        },

        swralert(desc = "Somethingn went wrong! Please try again.") {
            VsToast.show({
                title: null,//"Oops!",
                message: desc,
                variant: "error",
                timeout: 300,
                position: "center-center",
            });
        },
    },
};
