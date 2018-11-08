//Type your code here
function showloadingindicator() {
    kony.application.showLoadingScreen("loadskin", "LoadingScreen", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "ffffff77"
    });
}

function dismissloadingindicator() {
    kony.application.dismissLoadingScreen();
}