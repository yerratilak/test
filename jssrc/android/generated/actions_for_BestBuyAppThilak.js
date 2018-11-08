//actions.js file 
function AS_AppEvents_60245f8331c6445e92e487ad32f6fea3(eventobject) {
    return initsdk.call(this);
}

function AS_Button_394e6677bf4143488a79c21cc077099d(eventobject, x, y) {}

function AS_Button_570cf0088d394736b0f35815ebd219db(eventobject) {
    return cancelMethod.call(this);
}

function AS_Button_b81628a6fda2459f97e13015d3d89f77(eventobject) {
    return previousaction.call(this);
}

function AS_Button_d3a9bb8eab624fa0af1d9f024caaaf4d(eventobject) {
    return searchMethod.call(this);
}

function AS_Button_db968a89796c4ab188c53e837f852722(eventobject) {
    return nextaction.call(this);
}

function AS_Button_g9f644c6fee24d99add6181b7477c7ce(eventobject) {
    return cancelMethod.call(this);
}

function AS_FlexContainer_a1391fb7f1b649ae971ce9ebde109f00(eventobject, x, y) {
    BBTProductLIST.show();
    BBTProductDetails.destroy();
}

function AS_FlexContainer_c6d8dee1a3b0420894bf7d8f3064aebf(eventobject, x, y) {
    BBTProductLIST.show();
    BBTProductDetails.destroy();
}

function AS_Form_288678dca8864e8c87b40d3a8d1a3748(eventobject) {}

function AS_Form_2d879320827644939a25ed3d2c8ec703(eventobject) {
    categoriesAnimation();
}

function AS_Form_764872e0b3e649c69e6d742d5336568b(eventobject) {
    BBTCategories.BBTCflexmain.FlexSearchAnimation.opacity = 0;
    //showloadingindicator();
}

function AS_Form_a380284017de4e6c990545eb70caa2c3(eventobject) {}

function AS_Form_eabbe98ecf33444ea85e74428a5b1f1a(eventobject) {
    ProductListAnimation();
    BBTProductLIST.flexmaster.imgsearch.isVisible = false;
    //ProductpaginationAnimation();
}

function AS_Form_f9557adb00194b68b32ad79f132ba985(eventobject) {
    BBTProductDetails.flexmaster.imgsearch.isVisible = false;
}

function AS_Image_025232c1cde54f73a24c9b2fa9ab33ed(eventobject, x, y) {
    return gobacknextpage.call(this, null);
}

function AS_Image_06c12491d4664708bb47b6dab887de4d(eventobject, x, y) {
    return searchMethod.call(this);
}

function AS_Image_0de08ed06e9c460eac705aebddd392eb(eventobject, x, y) {
    return gobacknextpage.call(this, null);
}

function AS_Image_20189fa135154bf99bb511b722b4dbf9(eventobject, imagesrc, issuccess) {}

function AS_Image_226fd6994166426097fd4267e3096c6b(eventobject, x, y) {
    return searchMethod.call(this);
}

function AS_Image_2486fb90d32945638dd8ccba1326ccf0(eventobject, x, y) {
    return searchMethod.call(this);
}

function AS_Image_2ac948da865d410f8c101eb1b60f2247(eventobject, x, y) {
    BBTProductLIST.show();
    BBTProductDetails.destroy();
}

function AS_Image_2e7c4995a2d240ffbea99ec9580f90ba(eventobject, x, y) {
    //BBTProductLIST.show();
    var brdlength = breadcrum.length;
    var catid = breadcrum[brdlength - 1].backid;
    //Categories(catid);
    BBTCategories.show();
    BBTProductLIST.destroy();
}

function AS_Image_46b0eb536cfc4b08810d70d83818ddca(eventobject, x, y) {
    return searchMethod.call(this);
}

function AS_Image_5236ff09e1334c0cb7389f9f8b7a7092(eventobject, x, y) {
    return gobacknextpage.call(this, null);
}

function AS_Image_60e88d16fee34cf6b6bcecca623c6641(eventobject, x, y) {
    return gobacknextpage.call(this, null);
}

function AS_Image_7759dc6073af4313a6e9fde9bfd1b9ee(eventobject, x, y) {
    return searchMethod.call(this);
}

function AS_Image_7cbfde16261348d8bcc67c1155175e33(eventobject, x, y) {
    return gobacknextpage.call(this, "");
}

function AS_Image_aab67dc5a57e4ec58d831336e3e13c9c(eventobject, x, y) {
    return gobacknextpage.call(this, null);
}

function AS_Image_abf7f4996f614e26992115b02ae130a2(eventobject, x, y) {
    BBTProductLIST.show();
    BBTProductDetails.destroy();
}

function AS_Image_ae69f816a27f4f92a688c67cc34c6ba8(eventobject, x, y) {
    //BBTProductLIST.show();
    var searchbox = BBTCategories.searchTbox.text;
    if (searchbox !== "") {
        BBTCategories.searchTbox.text = "";
        BBTCategories.searchBtn.text = "Cancel";
        //onCancleClikc();
        BBTCategories.FlexSearchAnimation.top = '-100%';
    }
    var brdlength = breadcrum.length;
    var catid = breadcrum[brdlength - 1].backid;
    //Categories(catid);
    BBTCategories.show();
    BBTProductLIST.destroy();
}

function AS_Image_bb79e9fb19744b42a8d3324e2dfd290e(eventobject, x, y) {
    return onSearchIconClick.call(this);
}

function AS_Image_bcd837241e9543129a6ce52402bc21e0(eventobject, x, y) {
    return gobacknextpage.call(this, null);
}

function AS_Image_c283010043384f6a8393adc0e4f9da7a(eventobject, imagesrc, issuccess) {}

function AS_Image_c7a669a912d94371bebe85a6ef58de43(eventobject, x, y) {}

function AS_Image_ca08c6af1d0b408593319cb839c15fd0(eventobject, x, y) {
    BBTProductLIST.show();
    BBTProductDetails.destroy();
}

function AS_Image_cae0ea73bdbc412db2e4ef0384bdc4bf(eventobject, x, y) {
    return onSearchIconClick.call(this);
}

function AS_Image_d112372478bf47b8bd759eb5ae2c89a4(eventobject, imagesrc, issuccess) {}

function AS_Image_da72b6f9c6804f95b3c00da17ce53a79(eventobject, x, y) {
    return SearchAnimationShow.call(this);
}

function AS_Image_da82c41b65924461a20418c119496694(eventobject, x, y) {
    return gobacknextpage.call(this, null);
}

function AS_Image_e79c27b25b834fb180db657e854670b2(eventobject, x, y) {
    //BBTProductLIST.show();
    var searchbox = BBTCategories.searchTbox.text;
    if (searchbox !== "") {
        BBTCategories.searchTbox.text = "";
        BBTCategories.searchBtn.text = "Cancel";
        //onCancleClikc();
        BBTCategories.FlexSearchAnimation.top = '-100%';
    }
    var brdlength = breadcrum.length;
    var catid = breadcrum[brdlength - 1].backid;
    //Categories(catid);
    BBTCategories.show();
    BBTProductLIST.destroy();
}

function AS_Image_eb776cb330a7421c9c06f4f8c8bc645b(eventobject, x, y) {
    //BBTProductLIST.show();
    var brdlength = breadcrum.length;
    var catid = breadcrum[brdlength - 1].backid;
    //Categories(catid);
    BBTCategories.show();
    BBTProductLIST.destroy();
}

function AS_Image_ef3af7f0756941ca8d92de295c1633fe(eventobject, x, y) {
    return searchMethod.call(this);
}

function AS_Image_f5be8573c2b747f2a56150aef0e26f3f(eventobject, x, y) {
    BBTProductLIST.show();
    BBTProductDetails.destroy();
}

function AS_Image_f7a5e0f6173d44e99c477b9028458b8f(eventobject, x, y) {
    alert("search");
    searchMethod();
}

function AS_Image_f9c51e721a5e4d4b954915d04ffd5fb7(eventobject, x, y) {
    return gobacknextpage.call(this, null);
}

function AS_Image_fc97da9067d144a3abb53954a19eb6ad(eventobject, x, y) {
    return searchMethod.call(this);
}

function AS_Image_ff4c774c61d94f48b30c19333f5e31e3(eventobject, x, y) {
    //BBTProductLIST.show();
    var brdlength = breadcrum.length;
    var catid = breadcrum[brdlength - 1].backid;
    //Categories(catid);
    BBTCategories.show();
    BBTProductLIST.destroy();
}

function AS_Image_fffebbe2d9b44ef6a324ab4c1ce57b79(eventobject, x, y) {
    return gobacknextpage.call(this, null);
}

function AS_Image_hdf26eba14824009a9b51b9723c5b299(eventobject, imagesrc, issuccess) {}

function AS_Image_hea8a30ec7034f94a5ad0de427055394(eventobject, x, y) {
    BBTProductLIST.show();
    BBTProductDetails.destroy();
}

function AS_Image_i8ceb5afb1d943328ee45fb9200069c2(eventobject, x, y) {
    BBTProductLIST.show();
    BBTProductDetails.destroy();
}

function AS_Image_j02022513daa49b7bef8b891ac71adb2(eventobject, x, y) {
    return onSearchIconClick.call(this);
}

function AS_Segment_432858926a6a4bb8ae9342ac1dbaa984(eventobject, sectionNumber, rowNumber) {
    return getCategories.call(this);
}

function AS_Segment_b44750de47ad47349c89065b463a9335(eventobject, sectionNumber, rowNumber) {
    return getCategories.call(this);
}

function AS_Segment_c797460a794f4fb686a4c82298edcc2a(eventobject, sectionNumber, rowNumber) {
    return getCategories.call(this);
}

function AS_Segment_hd41bd8da2974cf6acd8690b15f480f5(eventobject, sectionNumber, rowNumber) {
    return getSelectedProductDetails.call(this);
}

function AS_TextField_485bcb1f8d424ca28f0ba23596d7d9f3(eventobject, changedtext) {
    var searchtbxval = BBTCategories.searchTbox.text;
    if (searchtbxval == "") {
        BBTCategories.searchBtn.text = "Cancel";
    } else {
        BBTCategories.searchBtn.text = "Search";
    }
}

function AS_TextField_a4da71b2f3a34fda88a81d04919565e7(eventobject, changedtext) {
    var searchtbxval = BBTCategories.searchTbox.text;
    if (searchtbxval == "") {
        BBTCategories.searchBtn.text = "Cancel";
    } else {
        BBTCategories.searchBtn.text = "Search";
    }
}