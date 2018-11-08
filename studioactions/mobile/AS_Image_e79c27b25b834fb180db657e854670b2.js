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