//startup.js file
var appConfig = {
    appId: "BestBuyAppThilak",
    appName: "BestBuyAppThilak",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.35.107",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: null,
    secureurl: null,
    middlewareContext: "BestBuyAppThilak"
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
        APILevel: 7200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: "spaiphone/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        kony.application.setApplicationInitializationEvents({
            init: appInit,
            postappinit: AS_AppEvents_60245f8331c6445e92e487ad32f6fea3,
            showstartupform: function() {
                BBTCategories.show();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: ["FormEntry", "Error", "Crash"]
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								