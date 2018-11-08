/*-------------Category list segment animation code -----------*/
function categoriesAnimation() {
    var transformObject = kony.ui.makeAffineTransform();
    transformObject.translate(270, 0);
    var transformObject1 = kony.ui.makeAffineTransform();
    transformObject1.translate(0, 0);
    animationConfig = {
        duration: 0.5,
        fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    animationDef = {
        0: {
            "transform": transformObject
        },
        100: {
            "transform": transformObject1
        }
    };
    animationDefObject = kony.ui.createAnimation(animationDef);
    BBTCategories.CategorySeg.setAnimations({
        visible: {
            definition: animationDefObject,
            config: animationConfig
        }
    });
}
/*-------------Product list segment animation code -----------*/
function ProductListAnimation() {
    var transformObject = kony.ui.makeAffineTransform();
    transformObject.scale(0, 0);
    var transformObject1 = kony.ui.makeAffineTransform();
    transformObject1.scale(1, 1);
    animationConfig = {
        duration: 1,
        fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    animationDef = {
        0: {
            "transform": transformObject
        },
        100: {
            "transform": transformObject1
        }
    };
    animationDefObject = kony.ui.createAnimation(animationDef);
    BBTProductLIST.SegProdList.setAnimations({
        visible: {
            definition: animationDefObject,
            config: animationConfig
        }
    });
}
/*-------------Product list pagination animation code -----------*/
function ProductpaginationAnimation() {
    var transformObject = kony.ui.makeAffineTransform();
    transformObject.rotate3D(90, 0, 1, 0);
    var animationObject = kony.ui.createAnimation({
        "100": {
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": transformObject
        }
    });
    var animationConfig = {
        "delay": 0.5,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_BACKWARDS,
        "duration": 1
    };

    function callbackConfig() {
        var config = {
            "animationEnd": function() {}
        };
        return config;
    }
    BBTProductLIST.PrdPage.pagelbl.animate(animationObject, animationConfig, callbackConfig());
}
/*-------------Product Reviews list segment animation code -----------*/
function ProductReviewsAnimation() {
    var transformObject = kony.ui.makeAffineTransform();
    transformObject.scale(0, 0);
    var transformObject1 = kony.ui.makeAffineTransform();
    transformObject1.scale(1, 1);
    animationConfig = {
        duration: 1,
        fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    animationDef = {
        0: {
            "transform": transformObject
        },
        100: {
            "transform": transformObject1
        }
    };
    animationDefObject = kony.ui.createAnimation(animationDef);
    BBTProductDetails.ProdReviewsSeg.setAnimations({
        visible: {
            definition: animationDefObject,
            config: animationConfig
        }
    });
}
/*-------------Product search  animation code -----------*/
function SearchAnimationShow() {
    BBTCategories.BBTCflexmain.FlexSearchAnimation.isVisible = true;
    BBTCategories.BBTCflexmain.FlexSearchAnimation.opacity = '0.8';
    BBTCategories.BBTCflexmain.FlexSearchAnimation.zIndex = '8';
    var animDefinition = {
        0: {
            "top": "0%"
        },
        100: {
            "top": "10%"
        }
    };
    var animDef = kony.ui.createAnimation(animDefinition);
    var animConfig = {
        "duration": 1.5,
        "iterationCount": 1,
        "delay": 0,
        "direction": kony.anim.DIRECTION_NONE,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    BBTCategories.FlexSearchAnimation.animate(animDef, animConfig, {
        animationStart: SearchAniStart,
        animationEnd: SearchAniEnd
    });
    BBTCategories.forceLayout();
}

function SearchAniStart() {
    BBTCategories.forceLayout();
}

function SearchAniEnd() {}

function SearchAnimationHide() {
    var animDefinition = {
        0: {
            "top": "0%"
        },
        100: {
            "top": "-100%",
            "opacity": 0.0,
            "zIndex": 1,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    };
    var animDef = kony.ui.createAnimation(animDefinition);
    var animConfig = {
        "duration": 1.5,
        "iterationCount": 1,
        "delay": 0,
        "direction": kony.anim.DIRECTION_NONE,
        "fillMode": kony.anim.FILL_MODE_FORWARDS
    };
    BBTCategories.FlexSearchAnimation.animate(animDef, animConfig, {
        animationStart: SearchAniCanStart,
        animationEnd: SearchAniCanEnd
    });
    BBTCategories.BBTCflexmain.FlexSearchAnimation.opacity = '0';
    BBTCategories.BBTCflexmain.FlexSearchAnimation.zIndex = '1';
}

function SearchAniCanStart() {
    BBTCategories.forceLayout();
}

function SearchAniCanEnd() {
    BBTCategories.forceLayout();
}

function cancelMethod() {
    var searchbtn = BBTCategories.FlexSearchAnimation.searchBtn.text;
    if (searchbtn == "Cancel") {
        SearchAnimationHide();
    } else {
        var searchtxt = BBTCategories.FlexSearchAnimation.searchTbox.text;
        if (searchtxt === "") {
            alert("Please enter keywords to get the results");
            return false;
        }
        if (searchtxt !== "") {
            if (!searchtxt.match(/[A-Za-z0-9 ]/)) //+#-.
            {
                alert("Please search for valid keyword");
                BBTCategories.FlexSearchAnimation.searchTbox.text = "";
                return false;
            }
            //return false;
        }
        var pageid = 1;
        searchproducts(pageid);
    }
}