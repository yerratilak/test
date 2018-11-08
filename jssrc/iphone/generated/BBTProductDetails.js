function addWidgetsBBTProductDetails() {
    BBTProductDetails.setDefaultUnit(kony.flex.DP);
    var km779004e3dcd448a84fdcb5497da0a5b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "10%",
        "id": "flexmaster",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onTouchStart": AS_FlexContainer_a1391fb7f1b649ae971ce9ebde109f00,
        "top": "0%",
        "width": "100%",
        "zIndex": 5,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "CopyslFbox0a39942e29ef84b"
    }, {}, {});
    km779004e3dcd448a84fdcb5497da0a5b.setDefaultUnit(kony.flex.DP);
    var km31c5ac856854a049d773b366b711ea2 = new kony.ui.Image2({
        "height": "90%",
        "id": "imglogo",
        "left": "26.67%",
        "src": "bestbuylogo.png",
        "top": "0%",
        "width": "44.00%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var km08ed577e56d4d0dbb6bf02e8028d335 = new kony.ui.Image2({
        "height": "90%",
        "id": "imgback",
        "left": "16dp",
        "onTouchStart": AS_Image_ca08c6af1d0b408593319cb839c15fd0,
        "src": "ic_menu_back.png",
        "top": "0dp",
        "width": "35dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmd0bf244bd2f4b72a07d9e2ff683519e = new kony.ui.Image2({
        "height": "100%",
        "id": "imgsearch",
        "left": "76%",
        "src": "ic_menu_search.png",
        "top": "0%",
        "width": "24.00%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var kmd4fbed8841b48be9b7bb54f539b832d = new kony.ui.Label({
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    km779004e3dcd448a84fdcb5497da0a5b.add(km31c5ac856854a049d773b366b711ea2, km08ed577e56d4d0dbb6bf02e8028d335, kmd0bf244bd2f4b72a07d9e2ff683519e, kmd4fbed8841b48be9b7bb54f539b832d);
    var FlexProdDetailsMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexProdDetailsMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexProdDetailsMain.setDefaultUnit(kony.flex.DP);
    var FlexContainer0i16f84f7f88942 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainer0i16f84f7f88942",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "35%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0i16f84f7f88942.setDefaultUnit(kony.flex.DP);
    var prdimg = new kony.ui.Image2({
        "height": "250px",
        "id": "prdimg",
        "isVisible": true,
        "left": "2px",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "5dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var RichText0i9a22a3372cb46 = new kony.ui.RichText({
        "id": "RichText0i9a22a3372cb46",
        "isVisible": true,
        "left": "9dp",
        "skin": "CopyslRichText0h2cf502d60824c",
        "text": "<a href=\"#\">--More--</a>",
        "top": "0dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexContainer0i16f84f7f88942.add(prdimg, RichText0i9a22a3372cb46);
    var CopyFlexContainer0c4abcdf925934b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "CopyFlexContainer0c4abcdf925934b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "37%",
        "skin": "slFbox",
        "width": "63%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0c4abcdf925934b.setDefaultUnit(kony.flex.DP);
    var titleprd = new kony.ui.Label({
        "id": "titleprd",
        "isVisible": true,
        "left": "2px",
        "skin": "ProdTitleSkin",
        "text": "Label",
        "top": "2px",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var onsale = new kony.ui.Label({
        "id": "onsale",
        "isVisible": true,
        "left": "2px",
        "skin": "ProdTitleSkin",
        "text": "Label",
        "top": "2px",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var avgrating = new kony.ui.Label({
        "id": "avgrating",
        "isVisible": true,
        "left": "2px",
        "skin": "ProdTitleSkin",
        "text": "Label",
        "top": "2px",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgrating = new kony.ui.Image2({
        "height": "50px",
        "id": "imgrating",
        "isVisible": true,
        "left": "2px",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "2px",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexContainer0c4abcdf925934b.add(titleprd, onsale, avgrating, imgrating);
    FlexProdDetailsMain.add(FlexContainer0i16f84f7f88942, CopyFlexContainer0c4abcdf925934b);
    var FlexProdDesc = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexProdDesc",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "1.56%",
        "skin": "slFbox",
        "top": "0%",
        "width": "96%",
        "zIndex": 1
    }, {}, {});
    FlexProdDesc.setDefaultUnit(kony.flex.DP);
    var prddesc = new kony.ui.Label({
        "id": "prddesc",
        "isVisible": true,
        "skin": "ProdTitleSkin",
        "text": "Label",
        "width": "96.88%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexProdDesc.add(prddesc);
    var Label0i3c84371d6e047 = new kony.ui.Label({
        "height": "0.30%",
        "id": "Label0i3c84371d6e047",
        "isVisible": true,
        "left": "6dp",
        "skin": "CopyslLabel0h78387ee56a54e",
        "top": "3dp",
        "width": "96%",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexProdReviews = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "56.49%",
        "id": "FlexProdReviews",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    FlexProdReviews.setDefaultUnit(kony.flex.DP);
    var reviewtitle = new kony.ui.Label({
        "id": "reviewtitle",
        "isVisible": true,
        "left": "2%",
        "skin": "ProdTitleSkin",
        "text": "Label",
        "top": "4%",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var ProdReviewsSeg = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "prdtitle": "Label",
            "ratingdesc": "Label",
            "ratingimg": "imagedrag.png"
        }, {
            "prdtitle": "Label",
            "ratingdesc": "Label",
            "ratingimg": "imagedrag.png"
        }, {
            "prdtitle": "Label",
            "ratingdesc": "Label",
            "ratingimg": "imagedrag.png"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "ProdReviewsSeg",
        "isVisible": true,
        "left": "1.50%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0cd5b92ce23c645",
        "rowTemplate": FlexContainerPRRTemplate,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "3%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexContainerPRRTemplate": "FlexContainerPRRTemplate",
            "prdtitle": "prdtitle",
            "ratingdesc": "ratingdesc",
            "ratingimg": "ratingimg"
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    FlexProdReviews.add(reviewtitle, ProdReviewsSeg);
    BBTProductDetails.add(km779004e3dcd448a84fdcb5497da0a5b, FlexProdDetailsMain, FlexProdDesc, Label0i3c84371d6e047, FlexProdReviews);
};

function BBTProductDetailsGlobals() {
    BBTProductDetails = new kony.ui.Form2({
        "addWidgets": addWidgetsBBTProductDetails,
        "enabledForIdleTimeout": false,
        "id": "BBTProductDetails",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "postShow": AS_Form_f9557adb00194b68b32ad79f132ba985,
        "skin": "CopyslForm0831a347beafc40"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
};