(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _body_item_view_item_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/item-view/item-view.component */ "./src/app/body/item-view/item-view.component.ts");





var appRoutes = [
    { path: '', component: _body_body_component__WEBPACK_IMPORTED_MODULE_3__["BodyComponent"] },
    { path: ':item', component: _body_item_view_item_view_component__WEBPACK_IMPORTED_MODULE_4__["ItemViewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n      <div #header><app-header></app-header></div>\n      <p style='padding-top: 100px;'></p>\n      <div #body><router-outlet></router-outlet></div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'spotify';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _body_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./body/item/item.component */ "./src/app/body/item/item.component.ts");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/song.service */ "./src/app/services/song.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _body_item_view_item_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./body/item-view/item-view.component */ "./src/app/body/item-view/item-view.component.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/loader.service */ "./src/app/services/loader.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _body_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"],
                _body_item_view_item_view_component__WEBPACK_IMPORTED_MODULE_12__["ItemViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [_services_song_service__WEBPACK_IMPORTED_MODULE_9__["SongsService"], _services_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n/* FontAwesome for working BootSnippet :> */\n#song {\n    background: #eee !important;\n}\n.btn-primary:hover,\n.btn-primary:focus {\n    background-color: #108d6f;\n    border-color: #108d6f;\n    box-shadow: none;\n    outline: none;\n}\n.btn-primary {\n    color: #fff;\n    background-color: #007b5e;\n    border-color: #007b5e;\n}\nsection {\n    padding: 60px 0;\n}\nsection .section-title {\n    text-align: center;\n    color: #007b5e;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n#song .card {\n    border: none;\n    background: #ffffff;\n}\n.mainflip {\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -moz-transition: 1s;\n    -moz-transform: perspective(1000px);\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n    position: relative;\n}\n.frontside {\n    position: relative;\n    -webkit-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    z-index: 2;\n    margin-bottom: 30px;\n    cursor: pointer;\n}\n.frontside:hover {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transition: 0.5s;\n    -webkit-transform-style: preserve-3d;\n    -moz-transition: 0.5s;\n    -moz-transform-style: preserve-3d;\n    -o-transition: 0.5s;\n    -o-transform-style: preserve-3d;\n    -ms-transition: 0.5s;\n    -ms-transform-style: preserve-3d;\n    transition: 0.5s;\n    transform-style: preserve-3d; /* IE 9 */\n  -webkit-transform: scale(1.5, 1.5); /* Safari */\n  transform: scale(1.1, 1.1);\n  \n    \n}\n.rank{\n    left: -10px;\n    position: absolute;\n    border-bottom-right-radius: 100px;\n    height: 30px;\n    width: 30px;\n    padding: 31px;\n    line-height: 0;\n    top: -10px;\n    font-size: 30px;\n}\n.badge-text{\n    position: absolute;\n    left: 16px;\n    top: 30px;\n}\n.frontside .card{\n    height: 300px;\n\n}\n.card a {\n    font-size: 18px;\n    color: #007b5e !important;\n}\n.frontside .card .card-title{\n    color: whitesmoke !important;\n}\n.frontside .card .card-body img {\n    border-radius: 50%;\n    \n}\n#loader-wrapper {\n    background-color: rgba(255,255,255,0.9);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 10000;\n}\n#loadertwo {\n    display: block;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    margin: -75px 0 0 -75px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #007a99;\n    -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n    animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n#loadertwo:before {\n    content: \"\";\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: 5px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #4da6ff;\n    -webkit-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n      animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n#loadertwo:after {\n    content: \"\";\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #80e5ff;\n    -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n      animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n@-webkit-keyframes spin {\n    0%   {\n        -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n        transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n    }\n    100% {\n        -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n        transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n    }\n}\n@keyframes spin {\n    0%   {\n        -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n        transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n    }\n    100% {\n        -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n        transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyRkFBMkY7QUFGM0YsNENBQTRDO0FBRzVDO0lBQ0ksNEJBQTRCO0NBQy9CO0FBRUQ7O0lBRUksMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsY0FBYztDQUNqQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixzQkFBc0I7Q0FDekI7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsMEJBQTBCO0NBQzdCO0FBRUQ7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0NBQ3ZCO0FBSUQ7SUFDSSx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25CO0FBR0Q7SUFDSSxvQ0FBb0M7SUFHcEMsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLDZCQUE2QixDQUNHLFVBQVU7RUFDNUMsbUNBQW1DLENBQUMsWUFBWTtFQUNoRCwyQkFBMkI7OztDQUc1QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtDQUNiO0FBR0Q7SUFDSSxjQUFjOztDQUVqQjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDO0FBRUQ7SUFDSSxtQkFBbUI7O0NBRXRCO0FBRUQ7SUFDSSx3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsMkNBQTJDLENBQUMsa0NBQWtDO0lBQzlFLG1DQUFtQyxDQUFDLHdDQUF3QztDQUMvRTtBQUVEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsMkNBQTJDLENBQUMsa0NBQWtDO01BQzVFLG1DQUFtQyxDQUFDLHdDQUF3QztDQUNqRjtBQUVEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsNkNBQTZDLENBQUMsa0NBQWtDO01BQzlFLHFDQUFxQyxDQUFDLHdDQUF3QztDQUNuRjtBQUVEO0lBQ0k7UUFDSSxnQ0FBZ0MsRUFBRSxvQ0FBb0MsRUFDeEMsVUFBVTtRQUN4Qyx3QkFBd0IsRUFBRSxnQ0FBZ0M7S0FDN0Q7SUFDRDtRQUNJLGtDQUFrQyxFQUFFLG9DQUFvQyxFQUN4QyxVQUFVO1FBQzFDLDBCQUEwQixFQUFFLGdDQUFnQztLQUMvRDtDQUNKO0FBQ0Q7SUFDSTtRQUNJLGdDQUFnQyxFQUFFLG9DQUFvQyxFQUN4QyxVQUFVO1FBQ3hDLHdCQUF3QixFQUFFLGdDQUFnQztLQUM3RDtJQUNEO1FBQ0ksa0NBQWtDLEVBQUUsb0NBQW9DLEVBQ3hDLFVBQVU7UUFDMUMsMEJBQTBCLEVBQUUsZ0NBQWdDO0tBQy9EO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZvbnRBd2Vzb21lIGZvciB3b3JraW5nIEJvb3RTbmlwcGV0IDo+ICovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcbiNzb25nIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeTpob3Zlcixcbi5idG4tcHJpbWFyeTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOGQ2ZjtcbiAgICBib3JkZXItY29sb3I6ICMxMDhkNmY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiNWU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YjVlO1xufVxuXG5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwN2I1ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNzb25nIC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuXG5cbi5tYWluZmxpcCB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1zLXRyYW5zaXRpb246IDFzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMXM7XG4gICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZnJvbnRzaWRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5mcm9udHNpZGU6aG92ZXIge1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC1tcy1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1vLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1zLXRyYW5zaXRpb246IDAuNXM7XG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTsgLyogSUUgOSAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpOyAvKiBTYWZhcmkgKi9cbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gIFxuICAgIFxufVxuLnJhbmt7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgcGFkZGluZzogMzFweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICB0b3A6IC0xMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5iYWRnZS10ZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxNnB4O1xuICAgIHRvcDogMzBweDtcbn1cblxuXG4uZnJvbnRzaWRlIC5jYXJke1xuICAgIGhlaWdodDogMzAwcHg7XG5cbn1cblxuLmNhcmQgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMDA3YjVlICFpbXBvcnRhbnQ7XG59XG5cbi5mcm9udHNpZGUgLmNhcmQgLmNhcmQtdGl0bGV7XG4gICAgY29sb3I6IHdoaXRlc21va2UgIWltcG9ydGFudDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC1ib2R5IGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIFxufVxuXG4jbG9hZGVyLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDAwO1xufVxuI2xvYWRlcnR3byB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwN2E5OTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgNSsgKi9cbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBDaHJvbWUsIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXG59XG4gXG4jbG9hZGVydHdvOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM0ZGE2ZmY7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlOyAvKiBDaHJvbWUsIE9wZXJhIDE1KywgU2FmYXJpIDUrICovXG4gICAgICBhbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlOyAvKiBDaHJvbWUsIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXG59XG4gXG4jbG9hZGVydHdvOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM4MGU1ZmY7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7IC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgNSsgKi9cbiAgICAgIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTsgLyogQ2hyb21lLCBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xufVxuIFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlICAge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgIC8qIElFIDkgKi9cbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7ICAvKiBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogSUUgOSAqL1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cbiAgICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlICAge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgIC8qIElFIDkgKi9cbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7ICAvKiBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogSUUgOSAqL1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"loader;else no_loader\">\n    <div id=\"loader-wrapper\">\n        <div id = \"loadertwo\" style=\"width:'100px';height:'100px'\"></div>\n    </div>\n</div>\n\n<ng-template #no_loader>\n    <section id=\"song bg-light\" class=\"pb-5\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <app-item *ngFor=\"let song of songs\" [song]=\"song\" class=\"col-xs-12 col-sm-3 col-md-3\" style=\"margin-bottom:10px;\"></app-item>\n            </div>\n        </div>\n    </section>\n</ng-template>\n\n\n<!-- Team -->"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/song.service */ "./src/app/services/song.service.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");




var BodyComponent = /** @class */ (function () {
    function BodyComponent(songService, loaderService) {
        this.songService = songService;
        this.loaderService = loaderService;
        this.filters = { top: 50 };
        this.loader = false;
    }
    BodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.emitLoader.subscribe(function (t) {
            console.log("Toggle Loader :" + t);
            _this.loader = t;
        });
        this.loadSongs();
    };
    BodyComponent.prototype.loadSongs = function () {
        var _this = this;
        console.log("Component requesting songs");
        this.loaderService.emitLoader.emit(true);
        this.songService.getSongs(this.filters).subscribe(function (response) {
            console.log("Subscriber get response of songs");
            _this.songs = response['data'];
            _this.loaderService.emitLoader.emit(false);
        });
        this.songService.emitSongs.subscribe(function (response) {
            console.log("event got from header");
            console.log(response);
            _this.songs = response;
        });
    };
    BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_song_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"], _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/body/item-view/item-view.component.css":
/*!********************************************************!*\
  !*** ./src/app/body/item-view/item-view.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fg-white{\n    color:white;\n    font-weight: 900;\n}\n\n#loader-wrapper {\n    background-color: rgba(255,255,255,0.9);\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 10000;\n}\n\n#loadertwo {\n    display: block;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    width: 150px;\n    height: 150px;\n    margin: -75px 0 0 -75px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #007a99;\n    -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n    animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n#loadertwo:before {\n    content: \"\";\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: 5px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #4da6ff;\n    -webkit-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n      animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n#loadertwo:after {\n    content: \"\";\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #80e5ff;\n    -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n      animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n\n@-webkit-keyframes spin {\n    0%   {\n        -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n        transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n    }\n    100% {\n        -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n        transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n    }\n}\n\n@keyframes spin {\n    0%   {\n        -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n        transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n    }\n    100% {\n        -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */  /* IE 9 */\n        transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9pdGVtLXZpZXcvaXRlbS12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7QUFDRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQiwyQ0FBMkMsQ0FBQyxrQ0FBa0M7SUFDOUUsbUNBQW1DLENBQUMsd0NBQXdDO0NBQy9FOztBQUVEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsMkNBQTJDLENBQUMsa0NBQWtDO01BQzVFLG1DQUFtQyxDQUFDLHdDQUF3QztDQUNqRjs7QUFFRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLDZDQUE2QyxDQUFDLGtDQUFrQztNQUM5RSxxQ0FBcUMsQ0FBQyx3Q0FBd0M7Q0FDbkY7O0FBRUQ7SUFDSTtRQUNJLGdDQUFnQyxFQUFFLG9DQUFvQyxFQUN4QyxVQUFVO1FBQ3hDLHdCQUF3QixFQUFFLGdDQUFnQztLQUM3RDtJQUNEO1FBQ0ksa0NBQWtDLEVBQUUsb0NBQW9DLEVBQ3hDLFVBQVU7UUFDMUMsMEJBQTBCLEVBQUUsZ0NBQWdDO0tBQy9EO0NBQ0o7O0FBQ0Q7SUFDSTtRQUNJLGdDQUFnQyxFQUFFLG9DQUFvQyxFQUN4QyxVQUFVO1FBQ3hDLHdCQUF3QixFQUFFLGdDQUFnQztLQUM3RDtJQUNEO1FBQ0ksa0NBQWtDLEVBQUUsb0NBQW9DLEVBQ3hDLFVBQVU7UUFDMUMsMEJBQTBCLEVBQUUsZ0NBQWdDO0tBQy9EO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2l0ZW0tdmlldy9pdGVtLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZy13aGl0ZXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4jbG9hZGVyLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDAwO1xufVxuI2xvYWRlcnR3byB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW46IC03NXB4IDAgMCAtNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzAwN2E5OTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgNSsgKi9cbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBDaHJvbWUsIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXG59XG4gXG4jbG9hZGVydHdvOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM0ZGE2ZmY7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlOyAvKiBDaHJvbWUsIE9wZXJhIDE1KywgU2FmYXJpIDUrICovXG4gICAgICBhbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlOyAvKiBDaHJvbWUsIEZpcmVmb3ggMTYrLCBJRSAxMCssIE9wZXJhICovXG59XG4gXG4jbG9hZGVydHdvOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICM4MGU1ZmY7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7IC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgNSsgKi9cbiAgICAgIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTsgLyogQ2hyb21lLCBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xufVxuIFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlICAge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgIC8qIElFIDkgKi9cbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7ICAvKiBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogSUUgOSAqL1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cbiAgICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlICAge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgIC8qIElFIDkgKi9cbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7ICAvKiBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogSUUgOSAqL1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/body/item-view/item-view.component.html":
/*!*********************************************************!*\
  !*** ./src/app/body/item-view/item-view.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<p style=\"padding-top:50px\"></p>\n\n\n<div *ngIf=\"loader;else no_loader\">\n        <div id=\"loader-wrapper\">\n            <div id = \"loadertwo\" style=\"width:'100px';height:'100px'\"></div>\n        </div>\n    </div>\n    \n    <ng-template #no_loader>\n            <div class=\"card\">\n          \n                    <div class=\"card-header text-center fg-white bg-danger\">\n                      {{song.name}}\n                      \n                    </div>\n                    <div class=\"card-body bg-primary fg-white\">\n                      <h5 class=\"card-title\">{{song.artists}}</h5>\n                      \n                      <div class=\"card-body\">\n                          <div class=\"row\">\n                              <div class=\"col-sm-3\">Rank</div>\n                              <div class=\"col-sm-3\">#{{song.rank}}</div>\n          \n                              <div class=\"col-sm-3\">Acousticness</div>\n                              <div class=\"col-sm-3\">{{song.acousticness}}</div>\n                          \n                              <div class=\"col-sm-3\">Danceability</div>\n                              <div class=\"col-sm-3\">{{song.danceability}}</div>\n          \n                              <div class=\"col-sm-3\">Duration</div>\n                              <div class=\"col-sm-3\">{{song.duration}}</div>\n                              \n                              <div class=\"col-sm-3\">Energy</div>\n                              <div class=\"col-sm-3\">{{song.energy}}</div>\n                              \n                              <div class=\"col-sm-3\">Instrumentalness</div>\n                              <div class=\"col-sm-3\">{{song.instrumentalness}}</div>\n                              \n                              <div class=\"col-sm-3\">Loudnessess</div>\n                              <div class=\"col-sm-3\">{{song.loudness}}</div>\n                             \n                          \n                              <div class=\"col-sm-3\">Key</div>\n                              <div class=\"col-sm-3\">{{song.songKey}}</div>\n          \n                              <div class=\"col-sm-3\">Speechiness</div>\n                              <div class=\"col-sm-3\">{{song.speechiness}}</div>\n                              <div class=\"col-sm-3\">tempo</div>\n                              <div class=\"col-sm-3\">{{song.tempo}}</div>\n                              <div class=\"col-sm-3\">Time</div>\n                              <div class=\"col-sm-3\">{{song.time}}</div>\n                              <div class=\"col-sm-3\">Valence</div>\n                              <div class=\"col-sm-3\">{{song.valence}}</div>\n                          </div>\n          \n                      </div>\n                      \n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <button class=\"btn btn-success\" [routerLink]=\"['/']\">Back</button>\n                      </div>\n                  </div>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/body/item-view/item-view.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/body/item-view/item-view.component.ts ***!
  \*******************************************************/
/*! exports provided: ItemViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemViewComponent", function() { return ItemViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_song_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/song.service */ "./src/app/services/song.service.ts");
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ "./src/app/services/loader.service.ts");





var ItemViewComponent = /** @class */ (function () {
    function ItemViewComponent(route, songService, loaderSerive) {
        this.route = route;
        this.songService = songService;
        this.loaderSerive = loaderSerive;
        this.loader = false;
    }
    ItemViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderSerive.emitLoader.subscribe(function (t) {
            console.log("Toggle loader item view:" + t);
            _this.loader = t;
        });
        this.fetchSong();
    };
    ItemViewComponent.prototype.fetchSong = function () {
        var _this = this;
        var id = this.route.snapshot.params['item'];
        this.loaderSerive.emitLoader.emit(true);
        this.songService.getSongById(id).subscribe(function (response) {
            console.log("Song fetched by id");
            console.log(response);
            _this.song = response['data'];
            _this.loaderSerive.emitLoader.emit(false);
        });
    };
    ItemViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-view',
            template: __webpack_require__(/*! ./item-view.component.html */ "./src/app/body/item-view/item-view.component.html"),
            styles: [__webpack_require__(/*! ./item-view.component.css */ "./src/app/body/item-view/item-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_song_service__WEBPACK_IMPORTED_MODULE_3__["SongsService"], src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], ItemViewComponent);
    return ItemViewComponent;
}());



/***/ }),

/***/ "./src/app/body/item/item.component.css":
/*!**********************************************!*\
  !*** ./src/app/body/item/item.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\n/* FontAwesome for working BootSnippet :> */\n#song {\n    background: #eee !important;\n}\n.btn-primary:hover,\n.btn-primary:focus {\n    background-color: #108d6f;\n    border-color: #108d6f;\n    box-shadow: none;\n    outline: none;\n}\n.btn-primary {\n    color: #fff;\n    background-color: #007b5e;\n    border-color: #007b5e;\n}\nsection {\n    padding: 60px 0;\n}\nsection .section-title {\n    text-align: center;\n    color: #007b5e;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n#song .card {\n    border: none;\n    background: #ffffff;\n}\n.mainflip {\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -moz-transition: 1s;\n    -moz-transform: perspective(1000px);\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n    position: relative;\n}\n.frontside {\n    position: relative;\n    -webkit-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    z-index: 2;\n    margin-bottom: 30px;\n\n}\n.frontside:hover {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transition: 0.5s;\n    -webkit-transform-style: preserve-3d;\n    -moz-transition: 0.5s;\n    -moz-transform-style: preserve-3d;\n    -o-transition: 0.5s;\n    -o-transform-style: preserve-3d;\n    -ms-transition: 0.5s;\n    -ms-transform-style: preserve-3d;\n    transition: 0.5s;\n    transform-style: preserve-3d; /* IE 9 */\n  -webkit-transform: scale(1.5, 1.5); /* Safari */\n  transform: scale(1.1, 1.1);\n  cursor: pointer;\n    \n}\n.rank{\n    left: -10px;\n    position: absolute;\n    border-bottom-right-radius: 100px;\n    height: 30px;\n    width: 30px;\n    padding: 31px;\n    line-height: 0;\n    top: -10px;\n    font-size: 30px;\n}\n.badge-text{\n    position: absolute;\n    left: 16px;\n    top: 30px;\n    color:whitesmoke;\n}\n.frontside .card{\n    height: 300px;\n\n}\n.card a {\n    font-size: 18px;\n    color: #007b5e !important;\n}\n.frontside .card .card-title{\n    color: whitesmoke !important;\n}\n.frontside .card .card-body img {\n    border-radius: 50%;\n    height: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9pdGVtL2l0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDJGQUEyRjtBQUYzRiw0Q0FBNEM7QUFHNUM7SUFDSSw0QkFBNEI7Q0FDL0I7QUFFRDs7SUFFSSwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQiwwQkFBMEI7Q0FDN0I7QUFFRDtJQUNJLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFJRDtJQUNJLHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLG1CQUFtQjtDQUN0QjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLG9CQUFvQjs7Q0FFdkI7QUFHRDtJQUNJLG9DQUFvQztJQUdwQyw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsNkJBQTZCLENBQ0csVUFBVTtFQUM1QyxtQ0FBbUMsQ0FBQyxZQUFZO0VBQ2hELDJCQUEyQjtFQUMzQixnQkFBZ0I7O0NBRWpCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0NBQ3BCO0FBR0Q7SUFDSSxjQUFjOztDQUVqQjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksNkJBQTZCO0NBQ2hDO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvYm9keS9pdGVtL2l0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZvbnRBd2Vzb21lIGZvciB3b3JraW5nIEJvb3RTbmlwcGV0IDo+ICovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcbiNzb25nIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeTpob3Zlcixcbi5idG4tcHJpbWFyeTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOGQ2ZjtcbiAgICBib3JkZXItY29sb3I6ICMxMDhkNmY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiNWU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YjVlO1xufVxuXG5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwN2I1ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNzb25nIC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuXG5cbi5tYWluZmxpcCB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1zLXRyYW5zaXRpb246IDFzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMXM7XG4gICAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCk7XG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZnJvbnRzaWRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbn1cblxuXG4uZnJvbnRzaWRlOmhvdmVyIHtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtbXMtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW8tdHJhbnNpdGlvbjogMC41cztcbiAgICAtby10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC1tcy10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7IC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KTsgLyogU2FmYXJpICovXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgXG59XG4ucmFua3tcbiAgICBsZWZ0OiAtMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBwYWRkaW5nOiAzMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHRvcDogLTEwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuLmJhZGdlLXRleHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDE2cHg7XG4gICAgdG9wOiAzMHB4O1xuICAgIGNvbG9yOndoaXRlc21va2U7XG59XG5cblxuLmZyb250c2lkZSAuY2FyZHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuXG59XG5cbi5jYXJkIGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzAwN2I1ZSAhaW1wb3J0YW50O1xufVxuXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLXRpdGxle1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlICFpbXBvcnRhbnQ7XG59XG5cbi5mcm9udHNpZGUgLmNhcmQgLmNhcmQtYm9keSBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDIwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/body/item/item.component.html":
/*!***********************************************!*\
  !*** ./src/app/body/item/item.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"image-flip\">\n        <div class=\"mainflip\">\n            <div class=\"frontside\" [routerLink]=\"['/',song.id]\">\n                <div class=\"card\">\n\n                      <div class=\"card-header bg-primary\">\n                        \n                    <div class=\"badge bg-danger rank\"><span class=\"badge-text\">{{song.rank}}</span></div><img class=\"img-fluid\" src=\"./assets/music.png\" alt=\"card image\"></div>\n                    \n                    <div class=\"card-body text-center bg-danger\">\n      \n                        <h5 class=\"card-title\" style=\"font-size: 14px;font-weight: 900\">{{song.name}}</h5>\n                    </div>\n                </div>\n            </div>\n            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/body/item/item.component.ts":
/*!*********************************************!*\
  !*** ./src/app/body/item/item.component.ts ***!
  \*********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemComponent.prototype, "song", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/body/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/body/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/constants/constants.ts":
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/*! exports provided: urls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urls", function() { return urls; });
var baseUrl = location.origin + "/spotify";
var songs = "/songs";
var song = "/song";
var songById = "/song/***";
var urls = /** @class */ (function () {
    function urls() {
    }
    urls.createUrlQuery = function (queryParam) {
        var params = "?";
        for (var _i = 0, _a = Object.keys(queryParam); _i < _a.length; _i++) {
            var param = _a[_i];
            params = params.concat(encodeURIComponent(param) + "=" + encodeURIComponent(queryParam[param]) + "&");
        }
        params = params.slice(0, params.length - 1);
        params = baseUrl.concat(songs + params);
        console.log(params);
        return params;
    };
    urls.createUrlPathVariable = function (path) {
        path = encodeURIComponent(path);
        var uri = baseUrl.concat(songById).replace("***", path);
        console.log(uri);
        return uri;
    };
    return urls;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*search box css start here*/\n.search-sec{\n    padding: 2rem;\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n}\n.search-slt{\n    display: block;\n    width: 100%;\n    font-size: 0.875rem;\n    line-height: 1.5;\n    color: #55595c;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    height: calc(3rem + 2px) !important;\n    border-radius:0;\n}\n.wrn-btn{\n    width: 100%;\n    font-size: 16px;\n    font-weight: 400;\n    text-transform: capitalize;\n    height: calc(3rem + 2px) !important;\n    border-radius:0;\n}\n@media (min-width: 992px){\n    .search-sec{\n        background:  #1A4668;\n    }\n}\n@media (max-width: 992px){\n    .search-sec{\n        background:rgba(26, 70, 104, 0.51);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QjtBQUM3QjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0NBQ1g7QUFDRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJO1FBQ0kscUJBQXFCO0tBQ3hCO0NBQ0o7QUFFRDtJQUNJO1FBQ0ksbUNBQW1DO0tBQ3RDO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnNlYXJjaCBib3ggY3NzIHN0YXJ0IGhlcmUqL1xuLnNlYXJjaC1zZWN7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG59XG4uc2VhcmNoLXNsdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM1NTU5NWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgaGVpZ2h0OiBjYWxjKDNyZW0gKyAycHgpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czowO1xufVxuLndybi1idG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgaGVpZ2h0OiBjYWxjKDNyZW0gKyAycHgpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czowO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAuc2VhcmNoLXNlY3tcbiAgICAgICAgYmFja2dyb3VuZDogICMxQTQ2Njg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpe1xuICAgIC5zZWFyY2gtc2Vje1xuICAgICAgICBiYWNrZ3JvdW5kOnJnYmEoMjYsIDcwLCAxMDQsIDAuNTEpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n    <div class=\"navbar-text\">\n        <section class=\"search-sec bg-primary\">\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-3 col-sm-12 p-0\">\n                    <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control search-slt\" placeholder=\"Search by song name\">\n                </div>\n                <div class=\"col-lg-4 col-md-3 col-sm-12 p-0\">\n                    <input [(ngModel)]=\"artist\" type=\"text\"  class=\"form-control search-slt\" placeholder=\"Search by artist\">\n                </div>\n                <div class=\"col-lg-1 col-md-1 col-sm-1 p-0\">\n                  <input [(ngModel)]=\"top\" type=\"number\"  class=\"form-control search-slt\" placeholder=\"top\" min=\"0\">\n                </div>\n                <div class=\"col-lg-3 col-md-3 col-sm-11 p-0\">\n                    <button type=\"button\" (click)= \"onSearch()\" class=\"btn btn-danger wrn-btn\">Search</button>\n                </div>\n            </div>\n        </section>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/song.service */ "./src/app/services/song.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(songService, router, loaderSerive) {
        this.songService = songService;
        this.router = router;
        this.loaderSerive = loaderSerive;
        this.name = "";
        this.artist = "";
        this.top = 50;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSearch = function () {
        var _this = this;
        var name = this.name;
        var artist = this.artist;
        var top = this.top;
        console.log(top);
        console.log(artist);
        console.log(name);
        var filter = {};
        if (top !== null || top !== 0) {
            filter['top'] = top;
        }
        if (artist !== "") {
            filter['artist'] = artist;
        }
        if (name !== "") {
            filter['name'] = name;
        }
        this.loaderSerive.emitLoader.emit(true);
        this.songService.getSongs(filter).subscribe(function (response) {
            console.log("Songs fetched at headers");
            console.log(response);
            _this.router.navigate(['/']);
            _this.songService.emitSongs.emit(response['data']);
            _this.loaderSerive.emitLoader.emit(false);
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_song_service__WEBPACK_IMPORTED_MODULE_2__["SongsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");




var LoaderService = /** @class */ (function () {
    function LoaderService(http) {
        this.http = http;
        this.emitLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/song.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/song.service.ts ***!
  \******************************************/
/*! exports provided: SongsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsService", function() { return SongsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var SongsService = /** @class */ (function () {
    function SongsService(http) {
        this.http = http;
        this.emitSongs = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SongsService.prototype.getSongs = function (params) {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_3__["urls"].createUrlQuery(params))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log("Songs response");
            console.log(response);
            var c = response.json();
            console.log(c);
            return c;
        }, function (error) {
            console.log("Error Occurred");
            console.log(error);
            return {};
        }));
    };
    SongsService.prototype.getSongById = function (id) {
        console.log("Getting Song by id service");
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_3__["urls"].createUrlPathVariable(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log("Fetched success song by id");
            console.log(response);
            var results = response.json();
            console.log(results);
            return results;
        }, function (error) {
            console.log("Error Occurred");
            return null;
        }));
    };
    SongsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SongsService);
    return SongsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/global/work/workspaces/defualt-workspace/spotify-frontend/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map