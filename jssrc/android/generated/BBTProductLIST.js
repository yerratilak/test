function addWidgetsBBTProductLIST() {
    BBTProductLIST.setDefaultUnit(kony.flex.DP);
    var kme3083983fab4de6a6b09ccd0179608a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "id": "flexmaster",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0%",
        "width": "100%",
        "zIndex": 5,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "height": "12%",
        "isVisible": true,
        "skin": "CopyslFbox0a39942e29ef84b"
    }, {}, {});
    kme3083983fab4de6a6b09ccd0179608a.setDefaultUnit(kony.flex.DP);
    var kmd8a205e691f439eacda269aca66fbaa = new kony.ui.Image2({
        "height": "90%",
        "id": "imgback",
        "left": "16dp",
        "onTouchStart": AS_Image_e79c27b25b834fb180db657e854670b2,
        "src": "ic_menu_back.png",
        "top": "5dp",
        "width": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km259768c2aa74e309616949efdec1661 = new kony.ui.Image2({
        "height": "90%",
        "id": "imglogo",
        "left": "26.67%",
        "src": "bestbuylogo.png",
        "top": "5.08%",
        "width": "44.00%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmb4d381365a94c9f9711b9ebd50a1fac = new kony.ui.Image2({
        "height": "100%",
        "id": "imgsearch",
        "left": "76.00%",
        "src": "ic_menu_search.png",
        "top": "0.70%",
        "width": "24.00%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km24375c84cee452c996f7ff5699878da = new kony.ui.Label({
        "height": "2%",
        "id": "BorderLine",
        "left": "0.09%",
        "textStyle": {},
        "top": "95%",
        "width": "100%",
        "zIndex": 5,
        "isVisible": true,
        "skin": "CopyslLabel08d346956ed7b4a"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    kme3083983fab4de6a6b09ccd0179608a.add(kmd8a205e691f439eacda269aca66fbaa, km259768c2aa74e309616949efdec1661, kmb4d381365a94c9f9711b9ebd50a1fac, km24375c84cee452c996f7ff5699878da);
    var bblbl = new kony.ui.Label({
        "id": "bblbl",
        "isVisible": true,
        "left": "2%",
        "skin": "bbcum",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "13%",
        "width": "95%",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var BBTPflexmain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "83.75%",
        "id": "BBTPflexmain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "15%",
        "width": "100.10%",
        "zIndex": 5
    }, {}, {});
    BBTPflexmain.setDefaultUnit(kony.flex.DP);
    var SegProdList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblonsale": "!!ON SALE!!",
            "prdimg": "imagedrag.png",
            "prdprice": "Label",
            "prdrating": "Label",
            "prdtitle": "Label"
        }, {
            "lblonsale": "!!ON SALE!!",
            "prdimg": "imagedrag.png",
            "prdprice": "Label",
            "prdrating": "Label",
            "prdtitle": "Label"
        }, {
            "lblonsale": "!!ON SALE!!",
            "prdimg": "imagedrag.png",
            "prdprice": "Label",
            "prdrating": "Label",
            "prdtitle": "Label"
        }],
        "groupCells": false,
        "height": "88.12%",
        "id": "SegProdList",
        "isVisible": true,
        "left": "2%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_hd41bd8da2974cf6acd8690b15f480f5,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "right": "3%",
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0375491d7bb1049",
        "rowTemplate": FlexProductSegTemplateMain,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "1%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FleProductListRowTemplateOnsale": "FleProductListRowTemplateOnsale",
            "FlexProdListProdDetailsDet": "FlexProdListProdDetailsDet",
            "FlexProdListProdDetailsImg": "FlexProdListProdDetailsImg",
            "FlexProdListProdDetailsMain": "FlexProdListProdDetailsMain",
            "FlexProductSegTemplateMain": "FlexProductSegTemplateMain",
            "lblonsale": "lblonsale",
            "prdimg": "prdimg",
            "prdprice": "prdprice",
            "prdrating": "prdrating",
            "prdtitle": "prdtitle"
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var PrdPage = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": 45,
        "id": "PrdPage",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0.05%",
        "skin": "slFbox",
        "top": "91.09%",
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    PrdPage.setDefaultUnit(kony.flex.DP);
    var btnprev = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": 33,
        "id": "btnprev",
        "isVisible": true,
        "left": "2.00%",
        "onClick": AS_Button_b81628a6fda2459f97e13015d3d89f77,
        "skin": "CopyslButtonGlossBlue03890809f26784c",
        "text": "<<Prev",
        "top": "9.73%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnnxt = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": 32,
        "id": "btnnxt",
        "isVisible": true,
        "left": "73.61%",
        "onClick": AS_Button_db968a89796c4ab188c53e837f852722,
        "skin": "CopyslButtonGlossBlue03890809f26784c",
        "text": "Next>>",
        "top": "10.34%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var pagelbl = new kony.ui.Label({
        "height": "92.76%",
        "id": "pagelbl",
        "isVisible": true,
        "left": "26.91%",
        "skin": "CopyslLabel084aef9e73ccb42",
        "text": "page 0 of 0",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    PrdPage.add(btnprev, btnnxt, pagelbl);
    BBTPflexmain.add(SegProdList, PrdPage);
    BBTProductLIST.add(kme3083983fab4de6a6b09ccd0179608a, bblbl, BBTPflexmain);
};

function BBTProductLISTGlobals() {
    BBTProductLIST = new kony.ui.Form2({
        "addWidgets": addWidgetsBBTProductLIST,
        "enabledForIdleTimeout": false,
        "id": "BBTProductLIST",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_eabbe98ecf33444ea85e74428a5b1f1a,
        "skin": "CopyslForm0hdab569fc23e4b"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};