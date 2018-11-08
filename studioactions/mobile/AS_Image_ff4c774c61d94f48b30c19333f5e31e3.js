function AS_Image_ff4c774c61d94f48b30c19333f5e31e3(eventobject, x, y) {
    //BBTProductLIST.show();
    var brdlength = breadcrum.length;
    var catid = breadcrum[brdlength - 1].backid;
    //Categories(catid);
    BBTCategories.show();
    BBTProductLIST.destroy();
}