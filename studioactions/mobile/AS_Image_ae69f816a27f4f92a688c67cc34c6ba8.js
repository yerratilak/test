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