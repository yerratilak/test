//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "BestBuyAppThilak",
    appName: "BestBuyAppThilak",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.35.107",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "BestBuyAppThilak",
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeCategoryRowTemplate();
    initializeProductReviewRowTemplate();
    initializeProductsRowTemplate();
    BBTCategoriesGlobals();
    BBTProductDetailsGlobals();
    BBTProductLISTGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: AS_AppEvents_60245f8331c6445e92e487ad32f6fea3,
        showstartupform: function() {
            BBTCategories.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;