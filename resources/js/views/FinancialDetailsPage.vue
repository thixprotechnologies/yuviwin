<template>
    <section class="home-section">
        <div class="center">
            <div class="top-nav-inivte">
                <a href="javascript:void(0)">Financial Details</a>
                <a @click="$router.push({ name: 'Profile' })"><i class="fa-solid fa-arrow-right-from-bracket" style="color: #fff;"></i></a>
            </div>
            <div class="Financial-boxes">
                <div class="row">
                    <div v-if="isLoading" class="loading-box">
                        <div class="rect-spinner" tabindex="1" aria-label="rect spinner">
                            <div class="container">
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                                <div class="rect"></div>
                            </div>
                        </div>
                    </div>

                    <div v-for="data in transection" class="col-12">
                        <div class="Financial-box" :class="{ 'Financial-box3': data.status === 2 }">
                            <div class="Financial-box-head ">
                                <h4>{{ data.reason }}</h4>
                                <h4>&#8377; {{ data.amount }}</h4>
                            </div>
                            <div class="Financial-box-bottom">
                                <div class="Financial-box-bottom-1">
                                    <p>Transaction ID: <br> {{ data.id }}</p>
                                </div>
                                <div class="Financial-box-bottom-2">
                                    <p>Date & Time:<br> {{ data.time }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="!isLoading" class="loadmore-btn">
                        <input type="submit" value="Load More">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.loadmore-btn input {
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

:root {
    --radius: 50%;
    --size: 2em;
    --offset: 25px;
    --background: #f5f5f7;
}

.dot-spinner,
.rect-spinner {
    display: grid;
    place-items: center;
    position: relative;
    width: 4.25em;
    height: 4.25em;
}

.dot-spinner:focus,
.rect-spinner:focus {
    outline: 4px solid blue;
    border-radius: var(--radius);
}

.rect-spinner {
    width: 4em;
    height: 4em;
}

.rect-spinner {
    margin-left: -8px;
    margin-top: 3px;
    --size: 1.5em;
}

/* .spinner-block {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
.loading-box {
    display: flex;
    justify-content: center;
    align-content: center;
    min-height: 80vh;
    flex-wrap: wrap;
}

.rect {
    --size: 1em;
    --degrees: 0deg;
    position: absolute;
    width: var(--size);
    aspect-ratio: 4;
    top: calc(var(--size) / 2);
    left: calc(var(--size) / 2);
    background-color: #1d1d1d;
    border-radius: 20px;
    opacity: 0;
    animation: animate-in;
    animation-duration: 800ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: alternate;
    animation-iteration-count: infinite;
}

.comet-spinner {
    --radius: 1em;
    --tracksize: 0.75em;
    --degrees: 0deg;
    width: calc(var(--radius) * 2 + var(--tracksize));
    aspect-ratio: 1;
    border-radius: 50%;
    padding: var(--tracksize);
    background: conic-gradient(from var(--degrees), #1BB8F7, #F8509C calc(var(--degrees) + 140deg), transparent calc(var(--degrees) + 210deg));
    position: relative;
    display: grid;
    place-items: center;
    animation: comet linear 1000ms infinite;
}

.comet-spinner .inner-circle {
    width: calc(var(--radius) * 2 + var(--tracksize));
    background-color: var(--background);
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
}

.comet-spinner .comet {
    width: var(--tracksize);
    height: var(--tracksize);
    background-color: #1BB8F7;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #FFDC55;
    z-index: 3;
    left: calc((var(--tracksize) / 2));
    top: 0;
    margin: -2px;
    translate: calc(cos(var(--degrees)) * var(--radius)) calc(sin(var(--degrees)) * var(--radius));
}

.rect:nth-of-type(0) {
    --degrees: 0deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(0 * 50ms);
}

.rect:nth-of-type(1) {
    --degrees: 22.5deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(1 * 50ms);
}

.rect:nth-of-type(2) {
    --degrees: 45deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(2 * 50ms);
}

.rect:nth-of-type(3) {
    --degrees: 67.5deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(3 * 50ms);
}

.rect:nth-of-type(4) {
    --degrees: 90deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(4 * 50ms);
}

.rect:nth-of-type(5) {
    --degrees: 112.5deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(5 * 50ms);
}

.rect:nth-of-type(6) {
    --degrees: 135deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(6 * 50ms);
}

.rect:nth-of-type(7) {
    --degrees: 157.5deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(7 * 50ms);
}

.rect:nth-of-type(8) {
    --degrees: 180deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(8 * 50ms);
}

.rect:nth-of-type(9) {
    --degrees: 202.5deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(9 * 50ms);
}

.rect:nth-of-type(10) {
    --degrees: 225deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(10 * 50ms);
}

.rect:nth-of-type(11) {
    --degrees: 247.5deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(11 * 50ms);
}

.rect:nth-of-type(12) {
    --degrees: 270deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(12 * 50ms);
}

.rect:nth-of-type(13) {
    --degrees: 292.5deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(13 * 50ms);
}

.rect:nth-of-type(14) {
    --degrees: 315deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(14 * 50ms);
}

.rect:nth-of-type(15) {
    --degrees: 337.5deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(15 * 50ms);
}

.rect:nth-of-type(16) {
    --degrees: 360deg;
    transform: rotate(calc(var(--degrees))) translateX(var(--offset));
    animation-delay: calc(16 * 50ms);
}

@keyframes animate-in {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes comet {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-360deg);
    }
}
</style>
<script>
export default {
    data() {
        return {
            user: {
                username: null
            },
            currentpage: 1,
            totalPage: 1,
            transection: [],
            isLoading: false // Initially not loading
        }
    },
    mounted() {
        this.isLoading = true;
        this.GetUser().then(() => {
            this.user.username = this.Users.username;
            this.getTransData().then(() => {
                this.isLoading = false;
            });
        });
    },
    methods: {
        async getTransData() {
            // const data = requ
            const res = await this.callApi('post', 'api/user/v1/transection');
            if (res.status === 200) {
                this.transection = res.data.data;
                this.totalPage = res.data.last_page;
                this.currentpage = res.data.page;
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
