function initializeProductsRowTemplate() {
    FlexProductSegTemplateMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "FlexProductSegTemplateMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "segFlexSkin"
    }, {}, {});
    FlexProductSegTemplateMain.setDefaultUnit(kony.flex.DP);
    var FleProductListRowTemplateOnsale = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FleProductListRowTemplateOnsale",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0%",
        "skin": "CopyslFbox0357a0b1a0c004d",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FleProductListRowTemplateOnsale.setDefaultUnit(kony.flex.DP);
    var lblonsale = new kony.ui.Label({
        "id": "lblonsale",
        "isVisible": true,
        "left": "0%",
        "skin": "onsaleheaderskin",
        "text": "!!ON SALE!!",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FleProductListRowTemplateOnsale.add(lblonsale);
    var FlexProdListProdDetailsMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexProdListProdDetailsMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1dp",
        "skin": "slFbox",
        "top": "2dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexProdListProdDetailsMain.setDefaultUnit(kony.flex.DP);
    var FlexProdListProdDetailsImg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexProdListProdDetailsImg",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0px",
        "skin": "slFbox",
        "top": "10px",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    FlexProdListProdDetailsImg.setDefaultUnit(kony.flex.DP);
    var prdimg = new kony.ui.Image2({
        "height": "300px",
        "id": "prdimg",
        "isVisible": true,
        "left": 0,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": 0,
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexProdListProdDetailsImg.add(prdimg);
    var FlexProdListProdDetailsDet = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexProdListProdDetailsDet",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "35%",
        "skin": "slFbox",
        "top": "20px",
        "width": "65.33%",
        "zIndex": 1
    }, {}, {});
    FlexProdListProdDetailsDet.setDefaultUnit(kony.flex.DP);
    var prdtitle = new kony.ui.Label({
        "id": "prdtitle",
        "isVisible": true,
        "left": "0dp",
        "skin": "ProdTitleSkin",
        "text": "Label",
        "top": "0dp",
        "width": "97%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var prdprice = new kony.ui.Label({
        "id": "prdprice",
        "isVisible": true,
        "left": "0dp",
        "skin": "ProdTitleSkin",
        "text": "Label",
        "top": "0dp",
        "width": "97%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var prdrating = new kony.ui.Label({
        "id": "prdrating",
        "isVisible": true,
        "left": "0dp",
        "skin": "ProdTitleSkin",
        "text": "Label",
        "top": "0dp",
        "width": "97%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexProdListProdDetailsDet.add(prdtitle, prdprice, prdrating);
    FlexProdListProdDetailsMain.add(FlexProdListProdDetailsImg, FlexProdListProdDetailsDet);
    FlexProductSegTemplateMain.add(FleProductListRowTemplateOnsale, FlexProdListProdDetailsMain);
}