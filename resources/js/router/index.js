import { createRouter, createWebHistory } from "vue-router"; //createWebHashHistory

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/HomePage.vue"),
        meta: { title: "Home", requiresAuth: true },
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/LoginPage.vue"),
        meta: { title: "Login", requiresAuth: false },
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () => import("../views/ForgotPasswordPage.vue"),
        meta: { title: "Forgot Password", requiresAuth: false },
    },
    {
        path: "/otp/:user/:type", // Define the route with both user and type parameters
        name: "OtpVerify",
        component: () => import("../views/OtpPage.vue"),
        meta: { title: "Forgot Password", requiresAuth: false },
        props: true,
        props: (route) => ({
            user: route.params.user,
            type: route.params.type,
        }),
    },
    {
        path: "/change-password", // Define the route with both user and type parameters
        name: "ChangePassword",
        component: () => import("../views/ChangePasswordPage.vue"),
        meta: { title: "Change Password", requiresAuth: false },
    },
    {
        path: "/rewards",
        name: "Rewards",
        component: () => import("../views/RewardsPage.vue"),
        meta: { title: "Rewards", requiresAuth: true },
    },
    {
        path: "/invite",
        name: "Invite",
        component: () => import("../views/InvitePage.vue"),
        meta: { title: "Invites", requiresAuth: true },
    },
    {
        path: "/invite-details",
        name: "InviteDetails",
        component: () => import("../views/InviteDetailsPage.vue"),
        meta: { title: "Invite Detials", requiresAuth: true },
    },
    {
        path: "/privilege",
        name: "Privilege",
        component: () => import("../views/PrivilegePage.vue"),
        meta: { title: "Privilege", requiresAuth: true },
    },
    {
        path: "/my-link",
        name: "MyLink",
        component: () => import("../views/MyLinkPage.vue"),
        meta: { title: "Referal Link", requiresAuth: true },
    },
    {
        path: "/ranks",
        name: "Ranks",
        component: () => import("../views/RankPage.vue"),
        meta: { title: "Ranks Page", requiresAuth: true },
    },
    {
        path: "/agent-growth-plans",
        name: "AgentPlans",
        component: () => import("../views/AgentPlansPage.vue"),
        meta: { title: "Agent Plans", requiresAuth: true },
    },
    {
        path: "/complain/create",
        name: "ComplaneCreate",
        component: () => import("../views/ComplaneCreatePage.vue"),
        meta: { title: "Complane Create", requiresAuth: true },
        props: route => ({
            id: route.query.id,
            type: route.query.type
        })
    },

    // games

    {
        path: "/game-order",
        name: "GameOrder",
        component: () => import("../views/GameOrderPage.vue"),
        meta: { title: "Game Order", requiresAuth: true },
    },
    {
        path: "/redeem-code",
        name: "RedeemCode",
        component: () => import("../views/RedeemCodePage.vue"),
        meta: { title: "Game Order", requiresAuth: true },
    },
    {
        path: "/game-history/:game",
        name: "GameHistory",
        component: () => import("../views/GameHistoryPage.vue"),
        meta: { title: "Game Order", requiresAuth: true },
        props: true,
        props: (route) => ({
            game: route.params.game,
        }),
    },
    {
        path: "/fast-party",
        name: "FastParty",
        component: () => import("../views/FirstPartyPage.vue"),
        meta: { title: "FastParty", requiresAuth: true },
    },
    {
        path: "/jet",
        name: "JetGame",
        component: () => import("../views/JetReNewPageTWO.vue"),
        meta: { title: "JetGame", requiresAuth: true },
    },
    // {
    //     path: "/jetnew",
    //     name: "JetGameNEW",
    //     component: () => import("../views/JetReNewPageTWO.vue"),
    //     meta: { title: "JetGame", requiresAuth: true },
    // },
    {
        path: "/parity",
        name: "Parity",
        component: () => import("../views/ParityPage.vue"),
        meta: { title: "Parity", requiresAuth: true },
    },
    {
        path: "/circle",
        name: "Circle",
        component: () => import("../views/CirclePage.vue"),
        meta: { title: "Circle", requiresAuth: true },
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/ProfilePage.vue"),
        meta: { title: "Profile", requiresAuth: true },
    },
    {
        path: "/complain",
        name: "Complains",
        component: () => import("../views/ComplainListPage.vue"),
        meta: { title: "Complain List", requiresAuth: true },
    },
    {
        path: "/profile-edit",
        name: "ProfileEdit",
        component: () => import("../views/ProfileEditPage.vue"),
        meta: { title: "Profile Edit", requiresAuth: true },
    },
    {
        path: "/checkin",
        name: "CheckIn",
        component: () => import("../views/CheckInPage.vue"),
        meta: { title: "Check In", requiresAuth: true },
    },
    {
        path: "/recharge",
        name: "Recharge",
        component: () => import("../views/RechargePage.vue"),
        meta: { title: "Recharge", requiresAuth: true },
    },
    {
        path: "/recharge/records",
        name: "RechargRecord",
        component: () => import("../views/RechargeRecordPage.vue"),
        meta: { title: "Recharge Record", requiresAuth: true },
    },
    {
        path: "/withdraw/records",
        name: "WithdrawRecord",
        component: () => import("../views/WithdrawRecordPage.vue"),
        meta: { title: "Withdraw Record", requiresAuth: true },
    },
    {
        path: "/deposit",
        name: "Deposit",
        component: () => import("../views/DepositPage.vue"),
        meta: { title: "Recharge", requiresAuth: true },
    },
    {
        path: "/deposit/help",
        name: "DepositHelp",
        component: () => import("../views/DepositHelpPage.vue"),
        meta: { title: "Recharge", requiresAuth: true },
    },
    {
        path: "/makepayment/:user/:type/:amount", // Define the route with both user and type parameters
        name: "MakePayment",
        component: () => import("../views/MakeDepositPage.vue"),
        meta: { title: "Make Payment", requiresAuth: false },
        props: true,
        props: (route) => ({
            user: route.params.user,
            type: route.params.type,
            amount: route.params.amount,
        }),
    },
    {
        path: "/withdraw",
        name: "Withdraw",
        component: () => import("../views/WithdrawPage.vue"),
        meta: { title: "Withdraw", requiresAuth: true },
    },
    {
        path: "/agent-withdraw",
        name: "AgentWithdraw",
        component: () => import("../views/AgentWithdrawPage.vue"),
        meta: { title: "Agent Withdraw", requiresAuth: true },
    },
    {
        path: "/add-upi",
        name: "AddUpi",
        component: () => import("../views/UpiAddPage.vue"),
        meta: { title: "UPI ADD", requiresAuth: true },
    },
    {
        path: "/:bank/edit-upi",
        name: "EditUpi",
        component: () => import("../views/UpiEditPage.vue"),
        meta: { title: "UPI ADD", requiresAuth: true },
        props: true,
        props: (route) => ({
            bank: route.params.bank,
        }),
    },
    {
        path: "/add-bank",
        name: "AddBank",
        component: () => import("../views/BankAddPage.vue"),
        meta: { title: "Bank Details", requiresAuth: true },
    },
    {
        path: "/:bank/edit-bank",
        name: "EditBank",
        component: () => import("../views/BankEditPage.vue"),
        meta: { title: "Bank Details", requiresAuth: true },
        props: true,
        props: (route) => ({
            bank: route.params.bank,
        }),
    },
    {
        path: "/financial-details",
        name: "FinancialDetails",
        component: () => import("../views/FinancialDetailsPage.vue"),
        meta: { title: "Financial Details", requiresAuth: true },
    },
    {
        path: "/:notFound",
        name: "PageNotFound",
        component: () => import("../views/NotFoundPage.vue"),
        meta: { title: "404", requiresAuth: false },
    },
];

const router = createRouter({
    history: createWebHistory(), //createWebHashHistory(), // Use the base variable here
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `YUVIWIN | ${to.meta.title || "YUVIWIN"}`;
    if (to.meta.requiresAuth) {
        if (localStorage.getItem("ruser") !== null) {
            //username
            next();
        } else {
            next({ name: "Login" });
        }
    } else {
        next();
    }
});

export default router;
