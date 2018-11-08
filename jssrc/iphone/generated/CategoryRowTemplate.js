function initializeCategoryRowTemplate() {
    FlexRowCatTemplate = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "FlexRowCatTemplate",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "segFlexSkin"
    }, {}, {});
    FlexRowCatTemplate.setDefaultUnit(kony.flex.DP);
    var catlbl = new kony.ui.Label({
        "id": "catlbl",
        "isVisible": true,
        "left": "4.92%",
        "skin": "CatRowSkin",
        "text": "Label",
        "top": "28.06%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexRowCatTemplate.add(catlbl);
}