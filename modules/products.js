/*-------------Get Product List -----------*/
function fetchProductList(catid, pageid, cattitle) {
    showloadingindicator();
    var integrationClient = null;
    var serviceName = "BestBuyTilak";
    var operationName = "bestbuyproduct";
    var params = {
        "cateid": catid,
        "pageid": pageid
    };
    kony.store.setItem("categoryid", catid);
    var headers = {}; //If there are no headers,pass null

    //var options={"httpRequestOptions":{"timeoutIntervalForRequest":60,
    //	"timeoutIntervalForResource":600}} 
    var options = {};
    try {
        integrationClient = KNYMobileFabric.getIntegrationService(serviceName);
    } catch (exception) {
        kony.print("Exception" + exception.message);
    }
    integrationClient.invokeOperation(operationName, headers, params,
        function(result) {
            kony.print("Integration Service Response is :" + JSON.stringify(result));
            if (result.opstatus === 0) {
                var products = result.products;
                if (products === "" || products === null || products === undefined) {
                    alert("fetch products list failed");
                    dismissloadingindicator();
                } else {

                    BBTProductLIST.bblbl.text = "Category : " + cattitle;
                    //flexmaster.bblbl.text=string;
                    if (products.length > 0) {
                        var segmentarrar = [];
                        for (var i = 0; i < products.length; i++) {
                            var onsale = "";
                            var onsaleisvisible = "";
                            var onsaleskin = "";
                            if (products[i].onSale == "true") {
                                onsale = "$" + products[i].salePrice;

                                onsaleisvisible = true;
                                onsaleskin = "skinonslae";

                            } else {

                                onsale = "$" + products[i].regularPrice;
                                onsaleisvisible = false;
                                onsaleskin = "skinprice";


                            }

                            var segdummyarray = {};
                            segdummyarray.prdtitle = products[i].name;
                            segdummyarray.catid = products[i].productId;
                            var prdpricearray = {};
                            prdpricearray.text = onsale;
                            prdpricearray.skin = onsaleskin;
                            segdummyarray.prdprice = prdpricearray;
                            var onsalearray = {};
                            //onsalearray.text="$"+products[i].regularPrice;
                            onsalearray.isVisible = onsaleisvisible;
                            segdummyarray.lblonsale = onsalearray;
                          var avrarray = {};
                          if(products[i].customerReviewAverage!="" || products[i].customerReviewAverage!=0)
                            {
                              avrarray.text = "Avg User Rating: " + products[i].customerReviewAverage;
                               avrarray.isVisible = true;
                               
                            }else{
                               avrarray.text = "";
                               avrarray.isVisible = false;
                            }
                           segdummyarray.prdrating = avrarray;
                            segdummyarray.prdimg = products[i].thumbnailImage;

                            segmentarrar.push(segdummyarray);
                        }


                        BBTProductLIST.SegProdList.setData(segmentarrar);
                        //BBTCategories.Segment0bbf3d836e0fb4b.setData(segmentarrar);


                        kony.store.setItem("currentPage", result.currentPage);
                        kony.store.setItem("totpages", result.totpages);

                        kony.store.setItem("categoryname", cattitle);


                        if (parseInt(result.currentPage) <= parseInt(result.totpages)) {
                            if (parseInt(result.currentPage) == 1) {
                                BBTProductLIST.btnprev.isVisible = false;
                                kony.print('--------button preview fasle-----------');
                            } else {
                                BBTProductLIST.btnprev.isVisible = true;
                                kony.print('--------button preview true-----------');
                            }

                            if (parseInt(result.currentPage) == parseInt(result.totpages)) {

                                BBTProductLIST.btnnxt.isVisible = false;
                                kony.print('--------button next fasle-----------');
                            } else {
                                BBTProductLIST.btnnxt.isVisible = true;
                                kony.print('--------button next true-----------');
                            }
                        } else {
                            BBTProductLIST.btnnxt.isVisible = false;
                            BBTProductLIST.btnprev.isVisible = false;
                        }
                        BBTProductLIST.forceLayout();
                        BBTProductLIST.show();
                        ProductpaginationAnimation();
                        var pageno = "Total " + result.currentPage + " of " + result.totpages;
                        kony.print(pageno);
                        BBTProductLIST.pagelbl.text = pageno;
                        dismissloadingindicator();

                    } else {
                        alert("No Product found in this category");
                        dismissloadingindicator();
                    }
                }
            } else {
                alert("fetch product list failed");
                dismissloadingindicator();
            }
        },
        function(error) {
            kony.print("Integration Service Failure :" + JSON.stringify(error));
            dismissloadingindicator();
        }, options
    );
}

/*-------------Get Product Details Service call -----------*/


function getSelectedProductDetails() {
    var selectedrow = BBTProductLIST.SegProdList.selectedItems;
    showloadingindicator();
    var catid = selectedrow[0].catid;
    var prdtitle = selectedrow[0].prdtitle;
    fetchProductDetails(catid, prdtitle);
}

function fetchProductDetails(catid, cattitle) {
    showloadingindicator();
    var integrationClient = null;
    var serviceName = "BestBuyTilak";
    var operationName = "bestbuyproddetails";
    var params = {
        "product": catid
    };
    var headers = {}; //If there are no headers,pass null

    //var options={"httpRequestOptions":{"timeoutIntervalForRequest":60,
    //	"timeoutIntervalForResource":600}} 
    var options = {};
    try {
        integrationClient = KNYMobileFabric.getIntegrationService(serviceName);
    } catch (exception) {
        kony.print("Exception" + exception.message);
    }
    integrationClient.invokeOperation(operationName, headers, params,
        function(result) {
            kony.print("Integration Service Response is :" + JSON.stringify(result));
            if (result.opstatus === 0) {
                var products = result.products;
                if (products === "" || products === null || products === undefined) {
                    alert("fetch products list failed");
                    dismissloadingindicator();
                } else {

                    // BBTProductLIST.BBTPflexmain.flexmaster.bblbl.text="Category : "+cattitle;
                    //flexmaster.bblbl.text=string;
                    if (products.length > 0) {
                        products = products[0];
                        var prdimg = products.image;
                        var salePrice = products.salePrice;
                        var customerReviewAverage = products.customerReviewAverage;
                        var plot = products.plot;
                        var regularPrice = products.regularPrice;
                        var name = products.name;
                        var onSale = products.onSale;
                        var customerReviewCount = products.customerReviewCount;
                        var sku = products.sku;
                        var thumbnailImage = products.thumbnailImage;
                        BBTProductDetails.prdimg.src = thumbnailImage;
                        BBTProductDetails.titleprd.text = name;
                        BBTProductDetails.avgrating.text = "Ave Review: " + customerReviewAverage;
                        BBTProductDetails.imgrating.src = ratingrstar(customerReviewAverage);
                        BBTProductDetails.prddesc.text = plot;
                        //BBTProductDetails.bblbl.isVisible=false;
                        if (onSale === "true") {
                            BBTProductDetails.onsale.text = "On Sale! $" + salePrice;
                            BBTProductDetails.onsale.skin = 'skinonslae';
                            // BBTProductDetails.onsale.
                        } else {
                            BBTProductDetails.onsale.text = "$" + regularPrice;
                            BBTProductDetails.onsale.skin = 'skinprice';
                        }

                        if (customerReviewAverage > 0 || customerReviewAverage !== "") {
                            BBTProductDetails.reviewtitle.text = "Number Of Reviews: " + customerReviewCount;
                            ProductReviewsAnimation();
                            showprodreviews(sku);
                        } else {
                            BBTProductDetails.ProdReviewsSeg.isVisible = false;
                            BBTProductDetails.reviewtitle.text = "No Reviews";
                            //BBTProductDetails.forceLayout();
                            BBTProductDetails.show();
                        }

                        dismissloadingindicator();
                    } else {
                        alert("No Product found in this category");
                        dismissloadingindicator();
                    }
                }
            } else {
                alert("fetch product list failed");
                dismissloadingindicator();
            }
        },
        function(error) {
            kony.print("Integration Service Failure :" + JSON.stringify(error));
            dismissloadingindicator();
        }, options
    );
}

function ratingrstar(ratingp) {
    if (ratingp == 0) {
        return "bb3stars0.png";
    } else if (ratingp > 0 && ratingp < 1.5) {
        return "bb3stars1.png";
    } else if (ratingp > 1.5 && ratingp < 2.5) {
        return "bb3stars2.png";
    } else if (ratingp > 2.5 && ratingp < 3.5) {
        return "bb3stars3.png";
    } else if (ratingp > 3.5 && ratingp < 4.5) {
        return "bb3stars4.png";
    } else if (ratingp > 4.5 && ratingp < 5.5) {
        return "bb3stars5.png";
    }
}

/*-------------Get Product Reviews Service call-----------*/


function showprodreviews(skuid) {
    showloadingindicator();
    var integrationClient = null;
    var serviceName = "BestBuyTilak";
    var operationName = "bestbuyproductreviews";
    var params = {
        "revprodid": skuid,
        "pageid": 1
    };
    var headers = {}; //If there are no headers,pass null

    //var options={"httpRequestOptions":{"timeoutIntervalForRequest":60,
    //	"timeoutIntervalForResource":600}} 
    var options = {};
    try {
        integrationClient = KNYMobileFabric.getIntegrationService(serviceName);
    } catch (exception) {
        kony.print("Exception" + exception.message);
    }
    integrationClient.invokeOperation(operationName, headers, params,
        function(result) {
            kony.print("Integration Service Response is :" + JSON.stringify(result));
            if (result.opstatus === 0) {
                var reviews = result.reviews;
                if (reviews === "" || reviews === null || reviews === undefined) {
                    alert("fetch product reviews  failed");
                    dismissloadingindicator();
                } else {

                    // BBTProductLIST.BBTPflexmain.flexmaster.bblbl.text="Category : "+cattitle;
                    //flexmaster.bblbl.text=string;
                    if (reviews.length > 0) {
                        var segmentarrar = [];
                        for (var i = 0; i < reviews.length; i++) {
                            var segdummyarray = {};
                            segdummyarray.prdtitle = reviews[i].title;
                            segdummyarray.ratingimg = ratingrstar(reviews[i].rating);
                            segdummyarray.ratingdesc = reviews[i].comment;


                            segmentarrar.push(segdummyarray);
                        }
                        BBTProductDetails.ProdReviewsSeg.setData(segmentarrar);
                        BBTProductDetails.forceLayout();
                        BBTProductDetails.show();
                        dismissloadingindicator();
                    } else {
                        alert("No Product reviews found in this category");
                        dismissloadingindicator();
                    }
                }
            } else {
                alert("fetch product reviews failed");
                dismissloadingindicator();
            }
        },
        function(error) {
            kony.print("Integration Service Failure :" + JSON.stringify(error));
            dismissloadingindicator();
        }, options
    );
}

/*-------------Product List Pagination actions-----------*/


function nextaction() {
    showloadingindicator();
    var categoryid = kony.store.getItem("categoryid");
    var currentPage = kony.store.getItem("currentPage");
    var totpages = kony.store.getItem("totpages");
    var categoryname = kony.store.getItem("categoryname");



    var pageaction = parseInt(currentPage) + 1;

    //alert();return false;
    var txtboxval = BBTCategories.searchTbox.text;

    if (txtboxval !== '' && txtboxval !== null) {
        searchproducts(pageaction);
    } else {

        fetchProductList(categoryid, pageaction, categoryname);
    }


}

function previousaction() {
    showloadingindicator();
    var categoryid = kony.store.getItem("categoryid");
    var currentPage = kony.store.getItem("currentPage");
    var totpages = kony.store.getItem("totpages");
    var categoryname = kony.store.getItem("categoryname");



    var pageaction = parseInt(currentPage) - 1;

    var txtboxval = BBTCategories.searchTbox.text;

    if (txtboxval !== "" && txtboxval !== null) {
        searchproducts(pageaction);
    } else {

        fetchProductList(categoryid, pageaction, categoryname);
    }
}

/*-------------Product search service call -----------*/


function searchproducts(pageid) {
    var searchtxt = BBTCategories.searchTbox.text;

    showloadingindicator();
    var integrationClient = null;
    var serviceName = "BestBuyTilak";
    var operationName = "bestbuyproductsearch";
    var params = {
        "searchcontent": searchtxt,
        "pageid": pageid
    };
    //kony.store.setItem("categoryid", catid);
    var headers = {}; //If there are no headers,pass null

    //var options={"httpRequestOptions":{"timeoutIntervalForRequest":60,
    //	"timeoutIntervalForResource":600}} 
    var options = {};
    try {
        integrationClient = KNYMobileFabric.getIntegrationService(serviceName);
    } catch (exception) {
        kony.print("Exception" + exception.message);
    }
    integrationClient.invokeOperation(operationName, headers, params,
        function(result) {

            kony.print("Integration Service Response is :" + JSON.stringify(result));
            if (result.opstatus === 0) {
                var products = result.products;
                if (products === "" || products === null || products === undefined) {
                    alert("fetch products list failed");
                    dismissloadingindicator();
                } else {

                    BBTProductLIST.bblbl.text = "Search for : " + searchtxt;
                    //flexmaster.bblbl.text=string;
                    if (products.length > 0) {
                        SearchAnimationHide();
                        var segmentarrar = [];
                        for (var i = 0; i < products.length; i++) {
                            var onsale = "";

                            var onsaleisvisible = "";
                            var onsaleskin = "";
                            if (products[i].onSale == "true") {
                                onsale = "$" + products[i].salePrice;

                                onsaleisvisible = true;
                                onsaleskin = "skinonslae";

                            } else {

                                onsale = "$" + products[i].regularPrice;
                                onsaleisvisible = false;
                                onsaleskin = "skinprice";
                                // var onsaletext = "";

                            }

                            var segdummyarray = {};
                            segdummyarray.prdtitle = products[i].name;
                            segdummyarray.catid = products[i].productId;
                            var prdpricearray = {};
                            prdpricearray.text = onsale;
                            prdpricearray.skin = onsaleskin;
                            segdummyarray.prdprice = prdpricearray;
                            var onsalearray = {};
                            //onsalearray.text="$"+products[i].regularPrice;
                            onsalearray.isVisible = onsaleisvisible;
                            segdummyarray.lblonsale = onsalearray;
                            segdummyarray.prdrating = "Avg User Rating: " + products[i].customerReviewAverage;
                            segdummyarray.prdimg = products[i].thumbnailImage;

                            segmentarrar.push(segdummyarray);
                        }


                        BBTProductLIST.SegProdList.setData(segmentarrar);
                        //BBTCategories.Segment0bbf3d836e0fb4b.setData(segmentarrar);


                        kony.store.setItem("currentPage", result.currentPage);
                        kony.store.setItem("totpages", result.totpages);

                        kony.store.setItem("categoryname", searchtxt);


                        if (parseInt(result.currentPage) <= parseInt(result.totpages)) {
                            if (parseInt(result.currentPage) == 1) {
                                BBTProductLIST.btnprev.isVisible = false;
                                kony.print('--------button preview fasle-----------');
                            } else {
                                BBTProductLIST.btnprev.isVisible = true;
                                kony.print('--------button preview true-----------');
                            }

                            if (parseInt(result.currentPage) == parseInt(result.totpages)) {

                                BBTProductLIST.btnnxt.isVisible = false;
                                kony.print('--------button next fasle-----------');
                            } else {
                                BBTProductLIST.btnnxt.isVisible = true;
                                kony.print('--------button next true-----------');
                            }
                        } else {
                            BBTProductLIST.btnnxt.isVisible = false;
                            BBTProductLIST.btnprev.isVisible = false;
                        }
                        BBTProductLIST.forceLayout();
                        BBTProductLIST.show();
                        ProductpaginationAnimation();
                        var pageno = "Total " + result.currentPage + " of " + result.totpages;
                        kony.print(pageno);
                        BBTProductLIST.pagelbl.text = pageno;
                        dismissloadingindicator();

                    } else {
                        //BBTCategories.FlexContainer0a95ceb0b8e7a45.se
                        alert("No Product found in this category");
                        dismissloadingindicator();
                    }
                }
            } else {
                alert("fetch product list failed");
                dismissloadingindicator();
            }
        },
        function(error) {
            kony.print("Integration Service Failure :" + JSON.stringify(error));
            dismissloadingindicator();
        }, options
    );


}