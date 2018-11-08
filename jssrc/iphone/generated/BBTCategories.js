function addWidgetsBBTCategories() {
    BBTCategories.setDefaultUnit(kony.flex.DP);
    var BBTCflexmain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "BBTCflexmain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox05d4db7d5ecf94b",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    BBTCflexmain.setDefaultUnit(kony.flex.DP);
    var FlexSearchAnimation = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexSearchAnimation",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "CopyslFbox0caf9e2db833049",
        "top": "-100%",
        "width": "100%",
        "zIndex": 8
    }, {}, {});
    FlexSearchAnimation.setDefaultUnit(kony.flex.DP);
    var searchTbox = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "7%",
        "id": "searchTbox",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "4.00%",
        "onTextChange": AS_TextField_485bcb1f8d424ca28f0ba23596d7d9f3,
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1%",
        "width": "61.39%",
        "zIndex": 5
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var searchBtn = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "7%",
        "id": "searchBtn",
        "isVisible": true,
        "left": "68%",
        "onClick": AS_Button_570cf0088d394736b0f35815ebd219db,
        "skin": "CopyslButtonGlossBlue03f9811fb185e45",
        "text": "Cancel",
        "top": "1%",
        "width": "30%",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexSearchAnimation.add(searchTbox, searchBtn);
    var bblbl = new kony.ui.Label({
        "height": "4%",
        "id": "bblbl",
        "isVisible": true,
        "left": "2%",
        "skin": "bbcum",
        "top": "12%",
        "width": "95%",
        "zIndex": 5
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var FlexSegmentCategories = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "83.46%",
        "id": "FlexSegmentCategories",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "16%",
        "width": "100%",
        "zIndex": 5
    }, {}, {});
    FlexSegmentCategories.setDefaultUnit(kony.flex.DP);
    var CategorySeg = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "catid": "",
            "catlbl": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "CategorySeg",
        "isVisible": true,
        "left": "2%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_c797460a794f4fb686a4c82298edcc2a,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0d475bfc39c194e",
        "rowTemplate": FlexRowCatTemplate,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexRowCatTemplate": "FlexRowCatTemplate",
            "catlbl": "catlbl"
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
    FlexSegmentCategories.add(CategorySeg);
    BBTCflexmain.add(FlexSearchAnimation, bblbl, FlexSegmentCategories);
    var km482097e5b8f4715abe5dd19b272f7a7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "12%",
        "id": "flexmaster",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0%",
        "width": "100%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "CopyslFbox0a39942e29ef84b"
    }, {}, {});
    km482097e5b8f4715abe5dd19b272f7a7.setDefaultUnit(kony.flex.DP);
    var kmcc695638ad3455ea6d2b0c424948b3a = new kony.ui.Image2({
        "height": "90%",
        "id": "imgback",
        "left": "16dp",
        "onTouchStart": AS_Image_da82c41b65924461a20418c119496694,
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
    var kmf2ec4fb567341c5b832c8d64c72dd75 = new kony.ui.Image2({
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
    var km8efc59df808419c921363612e74e905 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgsearch",
        "left": "76.00%",
        "onTouchStart": AS_Image_da72b6f9c6804f95b3c00da17ce53a79,
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
    var km0b8a8b01d0a4d35969a926bbd2fc937 = new kony.ui.Label({
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
    km482097e5b8f4715abe5dd19b272f7a7.add(kmcc695638ad3455ea6d2b0c424948b3a, kmf2ec4fb567341c5b832c8d64c72dd75, km8efc59df808419c921363612e74e905, km0b8a8b01d0a4d35969a926bbd2fc937);
    BBTCategories.add(BBTCflexmain, km482097e5b8f4715abe5dd19b272f7a7);
};

function BBTCategoriesGlobals() {
    BBTCategories = new kony.ui.Form2({
        "addWidgets": addWidgetsBBTCategories,
        "enabledForIdleTimeout": false,
        "id": "BBTCategories",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_2d879320827644939a25ed3d2c8ec703,
        "preShow": AS_Form_764872e0b3e649c69e6d742d5336568b,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};