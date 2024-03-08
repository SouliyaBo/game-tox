var profileOpen = false;
var profileSelectOpen = false;

document.addEventListener('DOMContentLoaded', (event) => {
    const arrowRightIcon = document.getElementById('arrow-right-mobile');
    const profileDetail = document.getElementById('username-box-mobile');
    const homeLogoImage = document.getElementById('home-mobile-logo-2');

    arrowRightIcon.addEventListener('click', function () {
        if (profileOpen) {
            arrowRightIcon.style.display = 'flex';
            profileDetail.style.display = 'none';
            homeLogoImage.style.marginLeft = '32px';
            profileOpen = false;
        } else {
            arrowRightIcon.style.display = 'none';
            profileDetail.style.display = 'flex';
            homeLogoImage.style.marginLeft = '70px';
            profileOpen = true;
        }
    });
    profileDetail.addEventListener('click', function () {
        if (profileOpen) {
            arrowRightIcon.style.display = 'flex';
            profileDetail.style.display = 'none';
            homeLogoImage.style.marginLeft = '32px';
            profileOpen = false;
        } else {
            arrowRightIcon.style.display = 'none';
            profileDetail.style.display = 'flex';
            homeLogoImage.style.marginLeft = '70px';
            profileOpen = true;
        }
    });

    // Get all elements with class "mobile-header-menu"
    const menuElements = document.querySelectorAll(".mobile-header-menu");

    menuElements[0].style.backgroundColor = "#8F00FF";
    menuElements[0].style.color = "#fff";

    // Add a click event listener to each menu element
    menuElements.forEach((element) => {
        element.addEventListener("click", () => {
            // Remove the white background from all menu elements
            menuElements.forEach((menu) => {
                menu.style.backgroundColor = "#1B1B1B";
                menu.style.color = "#595959";
            });

            // Set the background color of the clicked menu to white
            element.style.backgroundColor = "#8F00FF";
            element.style.color = "#fff";
        });
    });

    // Get all elements with class "partner-logo-box"
    const partnerMenuElements = document.querySelectorAll(".partner-logo-box");

    partnerMenuElements[0].style.marginLeft = '24px';
    partnerMenuElements[partnerMenuElements.length - 1].style.marginRight = '24px';

    const profileImage = document.getElementById('profile-image-box-mobile');
    profileImage.addEventListener('click', function () {
        const selectProfileBox = document.getElementById('select-profile-box');
        if (profileSelectOpen) {
            selectProfileBox.style.display = 'none';
            profileSelectOpen = false;
        } else {
            selectProfileBox.style.display = 'flex';
            profileSelectOpen = true;
        }
    });

    var partnerCard = false;
    const partner2 = document.getElementById('partner-card');
    console.log('partner2@: ', partner2);
    partner2.addEventListener('click', function () {
        console.log("AAAA")
        const contentPartner = document.getElementById('select-profile-card2');
        if (partnerCard) {
            contentPartner.style.display = 'none';
            partnerCard = false;
        } else {
            contentPartner.style.display = 'flex';
            partnerCard = true;
        }
    });

    const walletPopupOpen = document.getElementById('open-wallet');
    walletPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const walletPopupClose = document.getElementById('wallet-close-icon');
    walletPopupClose.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
    });

    // wallet-submenu-box
    const subWalletPopupOpen = document.getElementById('open-sub-wallet');
    subWalletPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const subWalletPopupImage = document.getElementById('wallet-submenu-box');
        subWalletPopupImage.style.display = 'flex';
    });
    const subWalletPopupClose = document.getElementById('sub-wallet-close-icon');
    subWalletPopupClose.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-submenu-box');
        walletPopupImage.style.display = 'none';
    });

    // open-credit
    const creditPopupPopupOpen = document.getElementById('open-credit');
    creditPopupPopupOpen.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('credit-box');
        creditPopupImage.style.display = 'flex';
    });
    // credit-box
    const creditPopupOpen = document.getElementById('open-sub-credit');
    creditPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const creditPopupImage = document.getElementById('credit-box');
        creditPopupImage.style.display = 'flex';
    });
    const creditPopupClose = document.getElementById('credit-close-icon');
    creditPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('credit-box');
        creditPopupImage.style.display = 'none';
    });
    // cristal-box
    const cristalPopupOpen = document.getElementById('open-cristal');
    cristalPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const cristalPopupImage = document.getElementById('cristal-box');
        cristalPopupImage.style.display = 'flex';
    });
    const cristalPopupClose = document.getElementById('cristal-close-icon');
    cristalPopupClose.addEventListener('click', function () {
        const cristalPopupImage = document.getElementById('cristal-box');
        cristalPopupImage.style.display = 'none';
    });
    // wheel-box
    const wheelPopupOpen = document.getElementById('open-wheel');
    wheelPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const wheelPopupImage = document.getElementById('wheel-box');
        wheelPopupImage.style.display = 'flex';
    });
    const wheelPopupClose = document.getElementById('wheel-close-icon');
    wheelPopupClose.addEventListener('click', function () {
        const wheelPopupImage = document.getElementById('wheel-box');
        wheelPopupImage.style.display = 'none';
    });
    // deposit-box
    const depositPopupOpen = document.getElementById('open-deposit');
    depositPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const depositPopupImage = document.getElementById('deposit-box');
        depositPopupImage.style.display = 'flex';
    });
    const depositPopupClose = document.getElementById('deposit-close-icon');
    depositPopupClose.addEventListener('click', function () {
        const depositPopupImage = document.getElementById('deposit-box');
        depositPopupImage.style.display = 'none';
    });
    // invite-box
    const invitePopupOpen = document.getElementById('open-invite');
    invitePopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const invitePopupImage = document.getElementById('invite-box');
        invitePopupImage.style.display = 'flex';
    });
    const invitePopupClose = document.getElementById('invite-close-icon');
    invitePopupClose.addEventListener('click', function () {
        const invitePopupImage = document.getElementById('invite-box');
        invitePopupImage.style.display = 'none';
    });
    // cashback-box
    const cashbackPopupOpen = document.getElementById('open-cashback');
    cashbackPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const cashbackPopupImage = document.getElementById('cashback-box');
        cashbackPopupImage.style.display = 'flex';
    });
    const cashbackPopupClose = document.getElementById('cashback-close-icon');
    cashbackPopupClose.addEventListener('click', function () {
        const cashbackPopupImage = document.getElementById('cashback-box');
        cashbackPopupImage.style.display = 'none';
    });
    // cashback-detail-box
    const cashbackDetailPopupOpen = document.getElementById('open-cashback-detail');
    cashbackDetailPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('cashback-box');
        walletPopupImage.style.display = 'none';
        const cashbackPopupImage = document.getElementById('cashback-detail-box');
        cashbackPopupImage.style.display = 'flex';
    });
    const cashbackDetailPopupClose = document.getElementById('cashback-detail-close-icon');
    cashbackDetailPopupClose.addEventListener('click', function () {
        const cashbackPopupImage = document.getElementById('cashback-detail-box');
        cashbackPopupImage.style.display = 'none';
    });
    // return-box
    const returnPopupOpen = document.getElementById('open-return');
    returnPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const cashbackPopupImage = document.getElementById('cashback-box');
        cashbackPopupImage.style.display = 'flex';
    });
    const returnPopupClose = document.getElementById('cashback-close-icon');
    returnPopupClose.addEventListener('click', function () {
        const cashbackPopupImage = document.getElementById('cashback-box');
        cashbackPopupImage.style.display = 'none';
    });
    // code-box
    const codePopupOpen = document.getElementById('open-code');
    codePopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const codePopupImage = document.getElementById('code-box');
        codePopupImage.style.display = 'flex';
    });
    const codePopupClose = document.getElementById('code-close-icon');
    codePopupClose.addEventListener('click', function () {
        const codePopupImage = document.getElementById('code-box');
        codePopupImage.style.display = 'none';
    });
    // roadmap-box
    const roadmapPopupOpen = document.getElementById('open-roadmap');
    roadmapPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'none';
        const roadmapPopupImage = document.getElementById('roadmap-box');
        roadmapPopupImage.style.display = 'flex';
    });
    const roadmapPopupClose = document.getElementById('roadmap-close-icon');
    roadmapPopupClose.addEventListener('click', function () {
        const roadmapPopupImage = document.getElementById('roadmap-box');
        roadmapPopupImage.style.display = 'none';
    });
    // withdraw-box
    const withdrawPopupOpen = document.getElementById('open-withdraw');
    withdrawPopupOpen.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdraw-box');
        withdrawPopupImage.style.display = 'flex';
    });
    const withdrawPopupClose = document.getElementById('withdraw-close-icon');
    withdrawPopupClose.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdraw-box');
        withdrawPopupImage.style.display = 'none';
    });
    // quest-box
    const questPopupOpen = document.getElementById('open-quest');
    questPopupOpen.addEventListener('click', function () {
        const questPopupImage = document.getElementById('quest-box');
        questPopupImage.style.display = 'flex';
    });
    const questPopupClose = document.getElementById('quest-close-icon');
    questPopupClose.addEventListener('click', function () {
        const questPopupImage = document.getElementById('quest-box');
        questPopupImage.style.display = 'none';
    });
    // minigame-box
    const minigamePopupOpen = document.getElementById('open-minigame');
    minigamePopupOpen.addEventListener('click', function () {
        const minigamePopupImage = document.getElementById('minigame-box');
        minigamePopupImage.style.display = 'flex';
    });
    const minigamePopupClose = document.getElementById('minigame-close-icon');
    minigamePopupClose.addEventListener('click', function () {
        const minigamePopupImage = document.getElementById('minigame-box');
        minigamePopupImage.style.display = 'none';
    });
    // depositchannel-box
    const depositchannelPopupOpen = document.getElementById('open-depositchannel');
    depositchannelPopupOpen.addEventListener('click', function () {
        const depositchannelPopupImage = document.getElementById('depositchannel-box');
        depositchannelPopupImage.style.display = 'flex';
    });
    const depositchannelPopupClose = document.getElementById('depositchannel-close-icon');
    depositchannelPopupClose.addEventListener('click', function () {
        const depositchannelPopupImage = document.getElementById('depositchannel-box');
        depositchannelPopupImage.style.display = 'none';
    });
    // setting-box
    const settingPopupOpen = document.getElementById('open-setting');
    settingPopupOpen.addEventListener('click', function () {
        const settingPopupImage = document.getElementById('setting-box');
        settingPopupImage.style.display = 'flex';
    });
    const settingPopupClose = document.getElementById('setting-close-icon');
    settingPopupClose.addEventListener('click', function () {
        const settingPopupImage = document.getElementById('setting-box');
        settingPopupImage.style.display = 'none';
    });
    // history-box
    const historyPopupOpen = document.getElementById('open-history');
    historyPopupOpen.addEventListener('click', function () {
        const settingPopupImage = document.getElementById('setting-box');
        settingPopupImage.style.display = 'none';
        const historyPopupImage = document.getElementById('history-box');
        historyPopupImage.style.display = 'flex';
    });
    const historyPopupClose = document.getElementById('history-close-icon');
    historyPopupClose.addEventListener('click', function () {
        const historyPopupImage = document.getElementById('history-box');
        historyPopupImage.style.display = 'none';
    });
    // profile-box
    const profilePopupOpen = document.getElementById('open-profile');
    profilePopupOpen.addEventListener('click', function () {
        const settingPopupImage = document.getElementById('setting-box');
        settingPopupImage.style.display = 'none';
        const profilePopupImage = document.getElementById('profile-box');
        profilePopupImage.style.display = 'flex';
    });
    const profilePopupClose = document.getElementById('profile-close-icon');
    profilePopupClose.addEventListener('click', function () {
        const profilePopupImage = document.getElementById('profile-box');
        profilePopupImage.style.display = 'none';
    });
    // change-password-box
    const changePasswordPopupOpen = document.getElementById('open-change-password');
    changePasswordPopupOpen.addEventListener('click', function () {
        const settingPopupImage = document.getElementById('setting-box');
        settingPopupImage.style.display = 'none';
        const changePasswordPopupImage = document.getElementById('change-password-box');
        changePasswordPopupImage.style.display = 'flex';
    });
    const changePasswordPopupClose = document.getElementById('change-password-close-icon');
    changePasswordPopupClose.addEventListener('click', function () {
        const changePasswordPopupImage = document.getElementById('change-password-box');
        changePasswordPopupImage.style.display = 'none';
    });
    // withdraw-detail-box
    const withdrawDetailPopupOpen = document.getElementById('open-withdraw-detail');
    withdrawDetailPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('withdraw-box');
        walletPopupImage.style.display = 'none';
        const withdrawPopupImage = document.getElementById('withdraw-detail-box');
        withdrawPopupImage.style.display = 'flex';
    });
    const withdrawDetailPopupClose = document.getElementById('withdraw-detail-close-icon');
    withdrawDetailPopupClose.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdraw-detail-box');
        withdrawPopupImage.style.display = 'none';
    });


    // Back button
    const backwalletPopupClose = document.getElementById('back-wallet');
    backwalletPopupClose.addEventListener('click', function () {
        const subWalletPopupImage = document.getElementById('wallet-submenu-box');
        subWalletPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const backCreditPopupClose = document.getElementById('back-credit');
    backCreditPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('credit-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const backcristalPopupClose = document.getElementById('back-cristal');
    backcristalPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('cristal-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const backwheelPopupClose = document.getElementById('back-wheel');
    backwheelPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('wheel-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const backdepositPopupClose = document.getElementById('back-deposit');
    backdepositPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('deposit-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const backinvitePopupClose = document.getElementById('back-invite');
    backinvitePopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('invite-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const backcashbackPopupClose = document.getElementById('back-cashback');
    backcashbackPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('cashback-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const backcashdetailbackPopupClose = document.getElementById('back-cashback-detail');
    backcashdetailbackPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('cashback-detail-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('cashback-box');
        walletPopupImage.style.display = 'flex';
    });
    const codebackPopupClose = document.getElementById('back-code');
    codebackPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('code-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const roadmapbackPopupClose = document.getElementById('back-roadmap');
    roadmapbackPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('roadmap-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('wallet-popup-box');
        walletPopupImage.style.display = 'flex';
    });
    const withdrawdetailbackPopupClose = document.getElementById('back-withdraw-detail');
    withdrawdetailbackPopupClose.addEventListener('click', function () {
        const creditPopupImage = document.getElementById('withdraw-detail-box');
        creditPopupImage.style.display = 'none';
        const walletPopupImage = document.getElementById('withdraw-box');
        walletPopupImage.style.display = 'flex';
    });

    const selectDepositMenu = document.getElementById('select-deposit');
    const selectWithdrawMenu = document.getElementById('select-withdraw');
    const selectBonusMenu = document.getElementById('select-bonus');
    selectDepositMenu.addEventListener('click', function () {
        selectDepositMenu.style.color = '#ffffff';
        selectWithdrawMenu.style.color = '#646464';
        selectBonusMenu.style.color = '#646464';
        const deposit = document.getElementById('history-deposit');
        deposit.style.display = 'flex';
        const withdraw = document.getElementById('history-withdraw');
        withdraw.style.display = 'none';
        const bonus = document.getElementById('history-bonus');
        bonus.style.display = 'none';
    });
    selectWithdrawMenu.addEventListener('click', function () {
        selectDepositMenu.style.color = '#646464';
        selectWithdrawMenu.style.color = '#ffffff';
        selectBonusMenu.style.color = '#646464';
        const deposit = document.getElementById('history-deposit');
        deposit.style.display = 'none';
        const withdraw = document.getElementById('history-withdraw');
        withdraw.style.display = 'flex';
        const bonus = document.getElementById('history-bonus');
        bonus.style.display = 'none';
    });
    selectBonusMenu.addEventListener('click', function () {
        selectDepositMenu.style.color = '#646464';
        selectWithdrawMenu.style.color = '#646464';
        selectBonusMenu.style.color = '#ffffff';
        const deposit = document.getElementById('history-deposit');
        deposit.style.display = 'none';
        const withdraw = document.getElementById('history-withdraw');
        withdraw.style.display = 'none';
        const bonus = document.getElementById('history-bonus');
        bonus.style.display = 'flex';
    });

    var selectBonusList = 1
    const bonusList1 = document.getElementById('bonus-list-box-1');
    const bonusList2 = document.getElementById('bonus-list-box-2');
    const bonusList3 = document.getElementById('bonus-list-box-3');
    const bonusList4 = document.getElementById('bonus-list-box-4');
    const subBonusDetail1 = document.getElementById('sub-bonus-detail-1');
    const subBonusDetail2 = document.getElementById('sub-bonus-detail-2');
    const subBonusDetail3 = document.getElementById('sub-bonus-detail-3');
    const subBonusDetail4 = document.getElementById('sub-bonus-detail-4');
    subBonusDetail1.style.display = "flex";
    subBonusDetail2.style.display = "none";
    subBonusDetail3.style.display = "none";
    subBonusDetail4.style.display = "none";
    bonusList1.addEventListener('click', function () {
        if (selectBonusList == 1 && subBonusDetail1.style.display == "flex") {
            subBonusDetail1.style.display = "none";
        } else {
            subBonusDetail1.style.display = "flex";
        }
        subBonusDetail2.style.display = "none";
        subBonusDetail3.style.display = "none";
        subBonusDetail4.style.display = "none";
        selectBonusList = 1
    });
    bonusList2.addEventListener('click', function () {
        subBonusDetail1.style.display = "none";
        if (selectBonusList == 2 && subBonusDetail2.style.display == "flex") {
            subBonusDetail2.style.display = "none";
        } else {
            subBonusDetail2.style.display = "flex";
        }
        subBonusDetail3.style.display = "none";
        subBonusDetail4.style.display = "none";
        selectBonusList = 2
    });
    bonusList3.addEventListener('click', function () {
        subBonusDetail1.style.display = "none";
        subBonusDetail2.style.display = "none";
        if (selectBonusList == 3 && subBonusDetail3.style.display == "flex") {
            subBonusDetail3.style.display = "none";
        } else {
            subBonusDetail3.style.display = "flex";
        }
        subBonusDetail4.style.display = "none";
        selectBonusList = 3
    });
    bonusList4.addEventListener('click', function () {
        subBonusDetail1.style.display = "none";
        subBonusDetail2.style.display = "none";
        subBonusDetail3.style.display = "none";
        if (selectBonusList == 4 && subBonusDetail4.style.display == "flex") {
            subBonusDetail4.style.display = "none";
        } else {
            subBonusDetail4.style.display = "flex";
        }
        selectBonusList = 4
    });

    var selectDepositList = 1
    const depositList1 = document.getElementById('deposit-list-box-1');
    const depositList2 = document.getElementById('deposit-list-box-2');
    const depositList3 = document.getElementById('deposit-list-box-3');
    const depositList4 = document.getElementById('deposit-list-box-4');
    const subDepositDetail1 = document.getElementById('deposit-detail-text-box-1');
    const subDepositDetail2 = document.getElementById('deposit-detail-text-box-2');
    const subDepositDetail3 = document.getElementById('deposit-detail-text-box-3');
    const subDepositDetail4 = document.getElementById('deposit-detail-text-box-4');
    subDepositDetail1.style.display = "flex";
    subDepositDetail2.style.display = "none";
    subDepositDetail3.style.display = "none";
    subDepositDetail4.style.display = "none";
    depositList1.addEventListener('click', function () {
        if (selectDepositList == 1 && subDepositDetail1.style.display == "flex") {
            subDepositDetail1.style.display = "none";
        } else {
            subDepositDetail1.style.display = "flex";
        }
        subDepositDetail2.style.display = "none";
        subDepositDetail3.style.display = "none";
        subDepositDetail4.style.display = "none";
        selectDepositList = 1
    });
    depositList2.addEventListener('click', function () {
        subDepositDetail1.style.display = "none";
        if (selectDepositList == 2 && subDepositDetail2.style.display == "flex") {
            subDepositDetail2.style.display = "none";
        } else {
            subDepositDetail2.style.display = "flex";
        }
        subDepositDetail3.style.display = "none";
        subDepositDetail4.style.display = "none";
        selectDepositList = 2
    });
    depositList3.addEventListener('click', function () {
        subDepositDetail1.style.display = "none";
        subDepositDetail2.style.display = "none";
        if (selectDepositList == 3 && subDepositDetail3.style.display == "flex") {
            subDepositDetail3.style.display = "none";
        } else {
            subDepositDetail3.style.display = "flex";
        }
        subDepositDetail4.style.display = "none";
        selectDepositList = 3
    });
    depositList4.addEventListener('click', function () {
        subDepositDetail1.style.display = "none";
        subDepositDetail2.style.display = "none";
        subDepositDetail3.style.display = "none";
        if (selectDepositList == 4 && subDepositDetail4.style.display == "flex") {
            subDepositDetail4.style.display = "none";
        } else {
            subDepositDetail4.style.display = "flex";
        }
        selectDepositList = 4
    });

    // change-layout
    var selectLayout = "row"
    const onChangeLayoutButton = document.getElementById('on-change-layout');
    onChangeLayoutButton.addEventListener('click', function () {
        var homeBannerElement = document.getElementById("home-banner-box");
        var homeBannerColumnElement = document.getElementById("home-banner-box-column");
        if (selectLayout == "row") {
            homeBannerElement.style.display = "none";
            homeBannerColumnElement.style.display = "flex";

            selectLayout = "column";
        } else {
            homeBannerElement.style.display = "flex";
            homeBannerColumnElement.style.display = "none";

            selectLayout = "row";
        }

    });

    // withdraw-auto-mobile
    const withdrawAutoMobilePopupOpen = document.getElementById('openWithdrawAutoMobile');
    withdrawAutoMobilePopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('depositchannel-box');
        walletPopupImage.style.display = 'none';
        const withdrawPopupImage = document.getElementById('withdrawAutoMobile');
        withdrawPopupImage.style.display = 'flex';
    });
    const withdrawAutoMobilePopupClose2 = document.getElementById('withdraw-auto-mobile-close-icon2');
    withdrawAutoMobilePopupClose2.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawAutoMobile');
        withdrawPopupImage.style.display = 'none';
    });
    const withdrawAutoMobilePopupClose = document.getElementById('withdraw-auto-mobile-close-icon');
    withdrawAutoMobilePopupClose.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawAutoMobile');
        withdrawPopupImage.style.display = 'none';
    });

    // withdraw-favorite-mobile
    const withdrawFavoriteMobilePopupOpen = document.getElementById('openWithdrawFavoriteMobile');
    withdrawFavoriteMobilePopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('depositchannel-box');
        walletPopupImage.style.display = 'none';
        const withdrawPopupImage = document.getElementById('withdrawFavoriteMobile');
        withdrawPopupImage.style.display = 'flex';
    });
    const withdrawFavoriteMobilePopupBack = document.getElementById('withdraw-favorite-mobile-back-icon');
    withdrawFavoriteMobilePopupBack.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawFavoriteMobile');
        withdrawPopupImage.style.display = 'none';
        const withdrawPopupMenu = document.getElementById('depositchannel-box');
        withdrawPopupMenu.style.display = 'flex';
    });
    const withdrawFavoriteMobilePopupClose = document.getElementById('withdraw-favorite-mobile-close-icon');
    withdrawFavoriteMobilePopupClose.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawFavoriteMobile');
        withdrawPopupImage.style.display = 'none';
    });

    // withdraw-favorite2-mobile
    const withdrawFavorite2MobilePopupOpen = document.getElementById('openWithdrawFavorite2Mobile');
    withdrawFavorite2MobilePopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('withdrawFavoriteMobile');
        walletPopupImage.style.display = 'none';
        const withdrawPopupImage = document.getElementById('withdrawFavorite2Mobile');
        withdrawPopupImage.style.display = 'flex';
    });
    const withdrawFavorite2MobilePopupClose = document.getElementById('withdraw-favorite2-mobile-close-icon');
    withdrawFavorite2MobilePopupClose.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawFavorite2Mobile');
        withdrawPopupImage.style.display = 'none';
    });
    const withdrawFavorite2MobilePopupBack = document.getElementById('withdraw-favorite2-mobile-back-icon');
    withdrawFavorite2MobilePopupBack.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawFavorite2Mobile');
        withdrawPopupImage.style.display = 'none';
        const withdrawPopupMenu = document.getElementById('withdrawFavoriteMobile');
        withdrawPopupMenu.style.display = 'flex';
    });

    // withdraw-qr-mobile
    const withdrawQRMobilePopupOpen = document.getElementById('openWthdrawQRMobile');
    withdrawQRMobilePopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('depositchannel-box');
        walletPopupImage.style.display = 'none';
        const withdrawPopupImage = document.getElementById('withdrawQRMobile');
        withdrawPopupImage.style.display = 'flex';
    });
    const withdrawQRMobilePopupBack = document.getElementById('withdraw-qr-mobile-back-icon');
    withdrawQRMobilePopupBack.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawQRMobile');
        withdrawPopupImage.style.display = 'none';
        const withdrawPopupMenu = document.getElementById('depositchannel-box');
        withdrawPopupMenu.style.display = 'flex';
    });
    const withdrawQRMobilePopupClose = document.getElementById('withdraw-qr-mobile-close-icon');
    withdrawQRMobilePopupClose.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawQRMobile');
        withdrawPopupImage.style.display = 'none';
    });

    // withdraw-qr2-mobile
    const withdrawQR2MobilePopupOpen = document.getElementById('openWthdrawQR2Mobile');
    withdrawQR2MobilePopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('withdrawQRMobile');
        walletPopupImage.style.display = 'none';
        const withdrawPopupImage = document.getElementById('withdrawQR2Mobile');
        withdrawPopupImage.style.display = 'flex';
    });
    const withdrawQR2MobilePopupClose = document.getElementById('withdraw-qr2-mobile-close-icon');
    withdrawQR2MobilePopupClose.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawQR2Mobile');
        withdrawPopupImage.style.display = 'none';
    });
    const withdrawQR2MobilePopupBack = document.getElementById('withdraw-qr2-mobile-back-icon');
    withdrawQR2MobilePopupBack.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawQR2Mobile');
        withdrawPopupImage.style.display = 'none';
        const withdrawPopupMenu = document.getElementById('withdrawQRMobile');
        withdrawPopupMenu.style.display = 'flex';
    });

    // withdraw-truemoney-mobile
    const withdrawTruemoneyMobilePopupOpen = document.getElementById('openWithdrawTruemoneyMobile');
    withdrawTruemoneyMobilePopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('depositchannel-box');
        walletPopupImage.style.display = 'none';
        const withdrawPopupImage = document.getElementById('withdrawTruemoneyMobile');
        withdrawPopupImage.style.display = 'flex';
    });
    const withdrawTruemoneyMobilePopupBack = document.getElementById('withdraw-truemoney-mobile-back-icon');
    withdrawTruemoneyMobilePopupBack.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawTruemoneyMobile');
        withdrawPopupImage.style.display = 'none';
        const withdrawPopupMenu = document.getElementById('depositchannel-box');
        withdrawPopupMenu.style.display = 'flex';
    });
    const withdrawTruemoneyMobilePopupClose = document.getElementById('withdraw-truemoney-mobile-close-icon');
    withdrawTruemoneyMobilePopupClose.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawTruemoneyMobile');
        withdrawPopupImage.style.display = 'none';
    });

    // withdraw-confirm-mobile
    const withdrawConfirmMobilePopupOpen = document.getElementById('openWithdrawConfirmMobile');
    withdrawConfirmMobilePopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('depositchannel-box');
        walletPopupImage.style.display = 'none';
        const withdrawPopupImage = document.getElementById('withdrawConfirmMobile');
        withdrawPopupImage.style.display = 'flex';
    });
    const withdrawConfirmMobilePopupBack = document.getElementById('withdraw-confirm-mobile-back-icon');
    withdrawConfirmMobilePopupBack.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawConfirmMobile');
        withdrawPopupImage.style.display = 'none';
        const withdrawPopupMenu = document.getElementById('depositchannel-box');
        withdrawPopupMenu.style.display = 'flex';
    });
    const withdrawConfirmMobilePopupClose = document.getElementById('withdraw-confirm-mobile-close-icon');
    withdrawConfirmMobilePopupClose.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdrawConfirmMobile');
        withdrawPopupImage.style.display = 'none';
    });

    // withdraw-box-deposit
    const depositBoxPopupOpen = document.getElementById('openDeposit');
    depositBoxPopupOpen.addEventListener('click', function () {
        const walletPopupImage = document.getElementById('depositchannel-box');
        walletPopupImage.style.display = 'none';
        const withdrawPopupImage = document.getElementById('withdraw-box');
        withdrawPopupImage.style.display = 'flex';
    });
    const depositConfirmMobilePopupBack = document.getElementById('withdraw-box-back');
    depositConfirmMobilePopupBack.addEventListener('click', function () {
        const withdrawPopupImage = document.getElementById('withdraw-box');
        withdrawPopupImage.style.display = 'none';
        const withdrawPopupMenu = document.getElementById('depositchannel-box');
        withdrawPopupMenu.style.display = 'flex';
    });

    // Manage favorite game
    var images = document.querySelectorAll('.game-demon-inactive-image');
    images.forEach(function (img) {
        img.addEventListener('click', function () {
            if (this.src.includes('demon-inactive.png')) {
                this.src = '../../images/mobile/demon-active.png';
                this.classList.remove('game-demon-inactive-image');
                this.classList.add('game-demon-active-image');
            } else {
                this.src = '../../images/mobile/demon-inactive.png';
                this.classList.remove('game-demon-active-image');
                this.classList.add('game-demon-inactive-image');
            }
        });
    });
    var imagesColumn = document.querySelectorAll('.game-demon-inactive-column');
    imagesColumn.forEach(function (img) {
        img.addEventListener('click', function () {
            if (this.src.includes('demon-inactive.png')) {
                this.src = '../../images/mobile/demon-active.png';
                this.classList.remove('game-demon-inactive-column');
                this.classList.add('game-demon-active-column');
            } else {
                this.src = '../../images/mobile/demon-inactive.png';
                this.classList.remove('game-demon-active-column');
                this.classList.add('game-demon-inactive-column');
            }
        });
    });

    var toggleButton = document.getElementById('toggleDisplayFavorite');
    var displayAll = true;
    toggleButton.addEventListener('click', function () {
        var gameCards = document.querySelectorAll('.game-card');
        var gameCardsColumn = document.querySelectorAll('.game-column');
        if (displayAll) {
            gameCards.forEach(function (card) {
                if (card.querySelector('.game-demon-inactive-image')) {
                    card.classList.remove('active-game');
                    card.classList.add('inactive-game');
                }
            });
            gameCardsColumn.forEach(function (card) {
                if (card.querySelector('.game-demon-inactive-column')) {
                    card.classList.remove('active-game');
                    card.classList.add('inactive-game');
                }
            });
        } else {
            gameCards.forEach(function (card) {
                card.classList.remove('inactive-game');
                card.classList.add('active-game');
            });
            gameCardsColumn.forEach(function (card) {
                card.classList.remove('inactive-game');
                card.classList.add('active-game');
            });
        }

        displayAll = !displayAll;
    });

    document.getElementById('open-movie').addEventListener('click', function () {
        window.open('https://www.i-moviehd.com/category/%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87-hd/', '_blank');
    });
});