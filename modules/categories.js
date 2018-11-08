/*-------------Mobile Fabric SDK Init code -----------*/
function initsdk() {
    showloadingindicator();
    KNYMobileFabric = new kony.sdk();
    KNYMobileFabric.init("Thilak-Best-Buy-AppKey-New", "Thilak-Best-Buy-AppSecret-New", "https://100000037.auth.konycloud.com/appconfig", successCallback, errorCallback);

}

function successCallback(res) {
    //code for success call back
    kony.print("SDK Init Success");
    Categories("cat00000");
}

function errorCallback(res) {
    //code for failure call back
    kony.print("SDK Init Failed --" + JSON.stringify(res));
}


function getCategories() {
    BBTCategories.searchTbox.text = "";
    var selectedrow = BBTCategories.CategorySeg.selectedItems;
    showloadingindicator();
    var catid = selectedrow[0].catid;

    Categories(catid);
}

/*-------------Get Categories Code -----------*/

var categoriesarray={};


function Categories(catid) {
    showloadingindicator();
    var integrationClient = null;
    var serviceName = "BestBuyTilak";
    var operationName = "bestbuycategories";
    var params = {
        "catid": catid
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
                var subcat = result.subCategories;
                if (subcat === "" || subcat === null || subcat === undefined) {
                    alert("fetch categories failed");
                    dismissloadingindicator();
                } else {

                    if (subcat.length > 0) {
                        var pathcategories = result.path;
                        if (null !== pathcategories)

                        {
                            if (0 < pathcategories.length) {
                                //alert(categoriesResponse.path.length);
                                kony.print("tialk" + JSON.stringify(pathcategories));

                                var string = "";
                                breadcrum = [];
                                for (var i1 = 0; i1 < pathcategories.length; i1++) {
                                    breadcrum.push({
                                        "backid": pathcategories[i1].bid

                                    });
                                    if (i1 === 0) {
                                        string += "HOME";
                                    } else {
                                        string += "->" + pathcategories[i1].bname;
                                    }
                                }
                                BBTCategories.bblbl.text = string;

                            }
                            if (pathcategories.length == 1) {
                                BBTCategories.flexmaster.imgback.isVisible = false;
                            } else {
                                BBTCategories.flexmaster.imgback.isVisible = true;
                            }
                        }


                        var segmentarrar = [];
                        for (var i = 0; i < subcat.length; i++) {
                            var segdummyarray = {};
                            segdummyarray.catlbl = subcat[i].name;
                            segdummyarray.catid = subcat[i].id;
                            segmentarrar.push(segdummyarray);
                        }
                      var patco=pathcategories.length;
                      var catids=pathcategories[patco-1].bid;
                      //var c=patco-1;
                        categoriesarray.catids=segmentarrar;
                        kony.print("Tilak--"+categoriesarray);
                        BBTCategories.CategorySeg.setData(segmentarrar);
                      
                      
                        dismissloadingindicator();
                    } else {
                        alert("No More Categories found and invoking the product list call");
                        dismissloadingindicator();

                        fetchProductList(result.categoryid, "1", result.categoryname);

                    }
                }
            } else {
                alert("fetch categories failed");
                dismissloadingindicator();
            }
        },
        function(error) {
            kony.print("Integration Service Failure :" + JSON.stringify(error));
            dismissloadingindicator();
        }, options
    );
}


/*-------------Categories Breadcrum Back Button -----------*/

function gobacknextpage(btn) {


    kony.print("Request for categories list back button");

    showloadingindicator();

    kony.print(breadcrum);
    var bdlength = breadcrum.length;
    //alert(bdlength);
    //alert(breadcrum[bdlength]['backid']);

    var backcatid = breadcrum[bdlength - 2].backid;
    Categories(backcatid);
}
/*-------------Mobile Fabric SDK Init code -----------*/
function initsdk() {
    showloadingindicator();
    KNYMobileFabric = new kony.sdk();
    KNYMobileFabric.init("Thilak-Best-Buy-AppKey-New", "Thilak-Best-Buy-AppSecret-New", "https://100000037.auth.konycloud.com/appconfig", successCallback, errorCallback);

}

function successCallback(res) {
    //code for success call back
    kony.print("SDK Init Success");
    Categories("cat00000");
}

function errorCallback(res) {
    //code for failure call back
    kony.print("SDK Init Failed --" + JSON.stringify(res));
}


function getCategories() {
    BBTCategories.searchTbox.text = "";
    var selectedrow = BBTCategories.CategorySeg.selectedItems;
    showloadingindicator();
    var catid = selectedrow[0].catid;

    Categories(catid);
}

/*-------------Get Categories Code -----------*/


function Categories(catid) {
    showloadingindicator();
    var integrationClient = null;
    var serviceName = "BestBuyTilak";
    var operationName = "bestbuycategories";
    var params = {
        "catid": catid
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
                var subcat = result.subCategories;
                if (subcat === "" || subcat === null || subcat === undefined) {
                    alert("fetch categories failed");
                    dismissloadingindicator();
                } else {

                    if (subcat.length > 0) {
                        var pathcategories = result.path;
                        if (null !== pathcategories)

                        {
                            if (0 < pathcategories.length) {
                                //alert(categoriesResponse.path.length);
                                kony.print("tialk" + JSON.stringify(pathcategories));

                                var string = "";
                                breadcrum = [];
                                for (var i1 = 0; i1 < pathcategories.length; i1++) {
                                    breadcrum.push({
                                        "backid": pathcategories[i1].bid

                                    });
                                    if (i1 === 0) {
                                        string += "HOME";
                                    } else {
                                        string += "->" + pathcategories[i1].bname;
                                    }
                                }
                                BBTCategories.bblbl.text = string;

                            }
                            if (pathcategories.length == 1) {
                                BBTCategories.flexmaster.imgback.isVisible = false;
                            } else {
                                BBTCategories.flexmaster.imgback.isVisible = true;
                            }
                        }


                        var segmentarrar = [];
                        for (var i = 0; i < subcat.length; i++) {
                            var segdummyarray = {};
                            segdummyarray.catlbl = subcat[i].name;
                            segdummyarray.catid = subcat[i].id;
                            segmentarrar.push(segdummyarray);
                        }
                        var patco=pathcategories.length;
                      //var c=patco-1;
                         var catids=pathcategories[patco-1].bid;
                      //var c=patco-1;
                        categoriesarray.catids=segmentarrar;
                        kony.print("Tilak--"+categoriesarray);
                        BBTCategories.CategorySeg.setData(segmentarrar);
                        dismissloadingindicator();
                    } else {
                        alert("No More Categories found and invoking the product list call");
                        dismissloadingindicator();

                        fetchProductList(result.categoryid, "1", result.categoryname);

                    }
                }
            } else {
                alert("fetch categories failed");
                dismissloadingindicator();
            }
        },
        function(error) {
            kony.print("Integration Service Failure :" + JSON.stringify(error));
            dismissloadingindicator();
        }, options
    );
}


/*-------------Categories Breadcrum Back Button -----------*/

function gobacknextpage(btn) {


    kony.print("Request for categories list back button");

    showloadingindicator();

    kony.print(breadcrum);
    var bdlength = breadcrum.length;
    var backcatid = breadcrum[bdlength - 2].backid;
    Categories(backcatid);
}