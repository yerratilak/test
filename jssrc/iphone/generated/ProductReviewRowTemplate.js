function initializeProductReviewRowTemplate() {
    FlexContainerPRRTemplate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "id": "FlexContainerPRRTemplate",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "segFlexSkin"
    }, {}, {});
    FlexContainerPRRTemplate.setDefaultUnit(kony.flex.DP);
    var prdtitle = new kony.ui.Label({
        "id": "prdtitle",
        "isVisible": true,
        "left": "4px",
        "skin": "ProdTitleSkin",
        "text": "Label",
        "top": "4px",
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
    var ratingimg = new kony.ui.Image2({
        "id": "ratingimg",
        "isVisible": true,
        "left": "4px",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "4px",
        "width": "96%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var ratingdesc = new kony.ui.Label({
        "id": "ratingdesc",
        "isVisible": true,
        "left": "4px",
        "skin": "ProdTitleSkin",
        "text": "Label",
        "top": "4px",
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
    FlexContainerPRRTemplate.add(prdtitle, ratingimg, ratingdesc);
}