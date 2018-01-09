webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" [ngStyle]=\"{display: service.viewLoader ? 'flex' : ''}\">\r\n  <div class=\"container-spanner\">\r\n    <svg viewBox=\"0 0 100 100\">\r\n      <circle cx=\"50%\" cy=\"50%\" r=\"45\"></circle>\r\n    </svg>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n<div class=\"block\">\r\n  <div class=\"left-bar\" *ngIf=\"service.viewMenu\">\r\n\r\n    <div class=\"menu\">\r\n      <ul>\r\n        <li class=\"btn\" \r\n          [routerLink]=\"['/desk']\" \r\n          routerLinkActive=\"active\"\r\n        >Страница</li>\r\n\r\n        <li class=\"btn\" \r\n          [routerLink]=\"['/messages']\" \r\n          routerLinkActive=\"active\"\r\n        >Мои сообщения\r\n\r\n          <span class=\"btn-num animate\" \r\n            [ngStyle]=\"{'display': service.numNewMsg === 0 ? 'none' : 'inline-flex'}\"\r\n          >{{service.numNewMsg}}</span>\r\n        </li>\r\n\r\n        <li class=\"btn\" (click)=\"exit()\">Выход</li>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n  <div class=\"block center\">\r\n    <div class=\"main-block\">\r\n      <div class=\"loader\" *ngIf=\"service.viewLoader\"></div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"block\">\r\n    <div class=\"right-bar\" *ngIf=\"service.viewMenu\">\r\n      <!-- что-то еще.. -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"clear\"></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(service, auth, router) {
        this.service = service;
        this.auth = auth;
        this.router = router;
    }
    AppComponent.prototype.exit = function () {
        this.service.firstPageIsAuth = false;
        this.service.viewMenu = false;
        this.auth.logOut();
        this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main.style.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__desktop_desktop_component__ = __webpack_require__("../../../../../src/app/desktop/desktop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_auth_guard_service__ = __webpack_require__("../../../../../src/app/service/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__msg_msg_component__ = __webpack_require__("../../../../../src/app/msg/msg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__msg_in_list_msg_in_list_component__ = __webpack_require__("../../../../../src/app/msg.in.list/msg.in.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__editlabel_editlabel_component__ = __webpack_require__("../../../../../src/app/editlabel/editlabel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__auth_auth_component__["a" /* AuthComponent */] },
    { path: 'desk', component: __WEBPACK_IMPORTED_MODULE_5__desktop_desktop_component__["a" /* DesktopComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__service_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_10__messages_messages_component__["a" /* MessagesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__service_auth_guard_service__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__auth_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_5__desktop_desktop_component__["a" /* DesktopComponent */],
                __WEBPACK_IMPORTED_MODULE_10__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__msg_msg_component__["a" /* MsgComponent */],
                __WEBPACK_IMPORTED_MODULE_12__msg_in_list_msg_in_list_component__["a" /* MsgInListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__editlabel_editlabel_component__["a" /* EditlabelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__service_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_7__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__service_auth_guard_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"avatar\">\r\n\t<img *ngIf=\"visibleAvatar\" [src]=\"service.myAvatar\" alt=\"\">\r\n</div>\r\n\r\n<div class=\"auth-form message light\">\r\n\t<div class=\"message-wrapper\">\r\n\t\t<input type=\"text\" \r\n\t\t\t[disabled]=\"viewLoader\" \r\n\t\t\t[(ngModel)]=\"name\" \r\n\t\t\t(keydown)=\"enter($event)\"\r\n\t\t\t[ngStyle]=\"{'border-bottom-color': name ? '#40a8cc' : ''}\"\r\n\t\t\tplaceholder=\"Имя\">\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"auth-form message light\">\r\n\t<div class=\"message-wrapper\">\r\n\t\t<input type=\"password\" \r\n\t\t\t[disabled]=\"viewLoader\" \r\n\t\t\t[(ngModel)]=\"pass\" \r\n\t\t\t(keydown)=\"enter($event)\"\r\n\t\t\t[ngStyle]=\"{'border-bottom-color': pass ? '#40a8cc' : ''}\"\r\n\t\t\tplaceholder=\"Пароль\">\r\n\t</div>\r\n</div>\r\n\r\n<button class=\"btn auth-btn\" style=\"justify-content: center\" [disabled]=\"viewLoader\" (click)=\"logIn()\">ОК</button>\r\n\r\n\r\n\r\n<div class=\"auth-form message light alert animate\" *ngIf=\"alert\">\r\n\t<div class=\"message-wrapper\">\r\n\t\t<span [hidden]=\"!alertName\">Введите корректный логин</span>\r\n\t\t<br [hidden]=\"!alertBr\">\r\n\t\t<span [hidden]=\"!alertPass\">Введите пароль</span>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = (function () {
    function AuthComponent(router, auth, service) {
        this.router = router;
        this.auth = auth;
        this.service = service;
        this.viewLoader = false;
        this.visibleAvatar = false;
        this.pass = '';
        this.name = '';
        this.alert = false;
        this.alertPass = false;
        this.alertName = false;
        this.alertBr = false;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.service.firstPageIsAuth = true;
    };
    AuthComponent.prototype.logIn = function () {
        var _this = this;
        if (this.name === '' || this.pass === '') {
            this.check();
        }
        else {
            this.alert = false;
            this.service.viewLoader = true;
            this.service.myName = this.name;
            this.router.navigate(['/desk']);
            setTimeout(function () {
                _this.visibleAvatar = true;
                _this.service.answerMsg(6, null, 5000, ['Эй, друг', 'куда пропал?)']);
                _this.service.answerMsg(5, null, 7300, ['Привет!', 'У меня тут кошка рожает', 'Нужна срочно твоя помощь!']);
            }, 400);
        }
    };
    AuthComponent.prototype.enter = function (e) {
        this.alert = false;
        if (e.code.toLowerCase() === 'enter') {
            this.logIn();
        }
    };
    AuthComponent.prototype.check = function () {
        this.alert = true;
        this.alertName =
            this.name === ''
                ? true
                : false;
        this.alertPass =
            this.pass === ''
                ? true
                : false;
        this.alertBr = this.alertName && this.alertPass;
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'auth',
            template: __webpack_require__("../../../../../src/app/auth/auth.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__service_main_service__["a" /* MainService */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/desktop/desktop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message light\">\r\n\t<!-- <div class=\"message-back\"><a routerLink=\"/desk\"><span>🢐</span>  Назад</a></div> -->\r\n\t<div class=\"message-wrapper\">\r\n\t\tМоя страница\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"row message\">\r\n\t<div class=\"half\">\r\n\t\t<div class=\"avatar\">\r\n\t\t\t<img [src]=\"service.myAvatar\" alt=\"\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"half\">\r\n\r\n\t\t<div>\r\n\t\t\t<label>Имя:</label>\r\n\t\t\t<editlabel [value]=\"service.myName\" name=\"name\" (onSave)=\"newValue($event)\"></editlabel>\r\n\t\t</div>\r\n\r\n\t\t<div>\r\n\t\t\t<label>Дата рождения:</label>\r\n\t\t\t<editlabel [value]=\"'13.05.1991'\" name=\"date\"></editlabel>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"clear\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/desktop/desktop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { DoCheck } from '@angular/core';
var DesktopComponent = (function () {
    function DesktopComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    DesktopComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.service.viewLoader = false; }, 100);
    };
    DesktopComponent.prototype.newValue = function (e) {
        if (e.name === 'name') {
            this.service.myName = e.value;
        }
        ;
    };
    DesktopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-desktop',
            template: __webpack_require__("../../../../../src/app/desktop/desktop.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_main_service__["a" /* MainService */]])
    ], DesktopComponent);
    return DesktopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/editlabel/editlabel.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\"\r\n\t[(ngModel)]=\"value\" \r\n\t[disabled]=\"disabled\"\r\n\t[ngStyle]=\"{width: value.length*8 + 'px' }\"\r\n\t#input\r\n>\r\n<label (click)=\"edit(input)\" [hidden]=\"!disabled\">✎</label>\r\n<label (click)=\"save()\" [hidden]=\"disabled\">✔</label>"

/***/ }),

/***/ "../../../../../src/app/editlabel/editlabel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditlabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditlabelComponent = (function () {
    function EditlabelComponent() {
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.disabled = true;
    }
    EditlabelComponent.prototype.ngOnInit = function () {
    };
    EditlabelComponent.prototype.edit = function (e) {
        this.disabled = false;
        setTimeout(function () { e.select(); }, 50);
    };
    EditlabelComponent.prototype.save = function (e) {
        this.disabled = true;
        this.onSave.emit({
            value: this.value,
            name: this.name
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], EditlabelComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], EditlabelComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditlabelComponent.prototype, "onSave", void 0);
    EditlabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'editlabel',
            template: __webpack_require__("../../../../../src/app/editlabel/editlabel.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], EditlabelComponent);
    return EditlabelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main.style.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  width: 100%;\n  padding: 15px;\n  box-sizing: border-box;\n}\n.avatar {\n  height: 150px;\n  width: 150px;\n  background: #a9a9a9;\n  border-radius: 50%;\n  margin: 30px auto;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n}\n.avatar img {\n  -webkit-animation: msg-show2 0.5s linear;\n          animation: msg-show2 0.5s linear;\n  border-radius: 50%;\n  border: 1px solid red;\n}\n.half {\n  float: left;\n}\n.half:nth-child(1) {\n  width: 150px;\n}\n.half:nth-child(2) {\n  padding-left: 30px;\n}\n.half label {\n  font-size: 13px;\n  padding-right: 5px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.half .avatar {\n  margin: 0 auto;\n}\neditlabel {\n  -webkit-animation: msg-show2 0.5s linear;\n          animation: msg-show2 0.5s linear;\n}\neditlabel label {\n  color: #40a8cc;\n  cursor: pointer;\n}\neditlabel label:hover {\n  color: #40a8cc;\n}\neditlabel input {\n  background: transparent;\n  border: none;\n  border-bottom: 2px solid #fff;\n  color: white;\n  padding: 5px;\n  width: auto;\n  text-align: center;\n  max-width: 200px;\n}\neditlabel input[disabled] {\n  border-color: transparent !important;\n}\neditlabel input[disabled]:focus {\n  border-color: transparent !important;\n}\neditlabel input:focus {\n  outline: none;\n  border-color: #40a8cc;\n}\n.container {\n  width: 960px;\n  margin: 50px auto 0;\n}\n.container .clear {\n  clear: both;\n}\n.block {\n  padding: 5px;\n  float: left;\n  box-sizing: border-box;\n  width: 20%;\n}\n.block.center {\n  width: 60%;\n}\n.block .main-block,\n.block .left-bar,\n.block .right-bar {\n  border-radius: 3px;\n  padding: 5px;\n}\n.block .main-block ul,\n.block .left-bar ul,\n.block .right-bar ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.auth-form,\n.auth-btn {\n  width: 250px;\n  margin: 0 auto;\n  display: block;\n}\n.message {\n  background: #424242;\n  color: white;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  position: relative;\n  border-radius: 2px;\n  font-size: 13px;\n  margin-bottom: 5px;\n}\n.message-img {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 36px;\n  width: 36px;\n}\n.message-img img {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n}\n.message-wrapper {\n  margin-left: 56px;\n  padding: 10px 10px 6px 0;\n}\n.message-autor {\n  font-weight: 700;\n}\n.message-autor span {\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n  padding-left: 5px;\n}\n.message-label {\n  padding: 5px 0;\n  color: rgba(255, 255, 255, 0.8);\n}\n.message.light {\n  background: #626262;\n  line-height: 24px;\n}\n.message.light.alert {\n  margin-top: 50px;\n  background: rgba(255, 0, 0, 0.2);\n}\n.message.light.alert .message-wrapper {\n  font-size: 14px;\n}\n.message.light .message-wrapper {\n  margin-left: 0;\n  text-align: center;\n  font-size: 17px;\n  padding: 10px;\n}\n.message.light .message-wrapper input {\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  background: transparent;\n  line-height: 20px;\n  color: white;\n  padding-top: 2px;\n  /* Firefox 19+ */\n  /* Firefox 18- */\n}\n.message.light .message-wrapper input:focus {\n  outline: none;\n  border-color: white;\n}\n.message.light .message-wrapper input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.message.light .message-wrapper input::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.message.light .message-wrapper input:-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.message.light .message-wrapper input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.message.light .message-back {\n  padding: 0 10px;\n  position: absolute;\n  line-height: 42px;\n}\n.message.light .message-back span {\n  font-size: 16px;\n}\na {\n  text-decoration: none;\n  color: white;\n}\n.answer {\n  opacity: 1;\n  height: 14px;\n  line-height: 14px;\n  margin-bottom: 10px;\n  font-size: 12px;\n  padding: 5px 0 0 56px;\n  font-style: italic;\n}\n.answer span {\n  opacity: 0;\n}\n@-webkit-keyframes show {\n  from {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes show {\n  from {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes msg-show {\n  from {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes msg-show {\n  from {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes msg-show2 {\n  from {\n    opacity: 0;\n  }\n  80% {\n    opacity: 1;\n  }\n}\n@keyframes msg-show2 {\n  from {\n    opacity: 0;\n  }\n  80% {\n    opacity: 1;\n  }\n}\nmsg .message,\nmsg-in-list .message {\n  -webkit-animation: msg-show 0.6s linear;\n          animation: msg-show 0.6s linear;\n}\n.animate {\n  -webkit-animation: msg-show 0.1s linear;\n          animation: msg-show 0.1s linear;\n}\n.new-chat {\n  font-size: 13px;\n  text-align: center;\n}\n.italic {\n  font-style: italic;\n}\n.light-color {\n  color: rgba(255, 255, 255, 0.3);\n}\nspan.iam {\n  color: #000;\n  display: inline-block;\n  background: #40a8cc;\n  height: 14px;\n  width: 14px;\n  line-height: 15px;\n  text-align: center;\n  border-radius: 50%;\n  font-size: 11px;\n  font-weight: 700;\n}\nmsg-in-list:focus {\n  outline: none;\n}\nmsg-in-list:hover .message {\n  box-shadow: 0 0 3px 1px #40a8cc, 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n.btn {\n  background: rgba(0, 0, 0, 0.12);\n  padding: 10px;\n  border-radius: 2px;\n  margin-bottom: 5px;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n  color: white;\n  min-width: 120px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.btn .btn-num {\n  height: 10px;\n  width: 10px;\n  padding: 3px;\n  font-size: 10px;\n  background: #40a8cc;\n  line-height: 12px;\n  padding: 5px;\n  border-radius: 12px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  right: 9px;\n  bottom: 9px;\n}\n.btn:hover,\n.btn .active {\n  background: #40a8cc;\n}\n.btn:hover .btn-num,\n.btn .active .btn-num {\n  background: rgba(0, 0, 0, 0.5);\n}\n.btn.active {\n  background: #40a8cc;\n}\n.btn.active .btn-num {\n  background: rgba(0, 0, 0, 0.5);\n}\n.btn:focus {\n  outline: none;\n}\n.load {\n  display: inline-block;\n  height: 10px;\n  width: 47px;\n  background: url(data:image/gif;base64,R0lGODlhgAAUAPcAAEBAQACqzzpMUACSsDJZYQCHoBBwgQCewCVkcQB8kRxqeQCYuACozACEnD5FRjFaYgChxTpNUQChxACMphprejtLTz9CQ0BBQT5ERTdSWT9DRACFnTNXYAVzhUBAQQCNqT1GSQClyQCdvgClyACWtjVVXTdRVwB7kACpzj5ERwCqzgB9kj9CQgCbvACQrQB1hwCixhNufzVVXihhbQCFngCKpDZTWjxJTC5cZhhsfT1GSixeaQB2iQCjxz1HSydibgVzhDlPVUBBQj5FSBVtfhprewCRrzxKTS1dZzhQVzRWXglyhCxeaACXtgCMqACauzVUXB1pdzdRWDNXXwB7jydibwCHnzpNUgB5jT1HSgCGnjlOUwCGnwB1iACfwQCgwwlygwCLpTtLTiVkcDVUWzRWXwCCmQB3iiJmdAB0hjFbZACLpxhsewCXtwB/litfaytfajxJSyZjbwB4jDFaYwB0hwCJowCDmjhQVgCVtBNugACnywCPrACBlzlOUgCdvyFndQCBmACJoipgbCpgawCPqwB6jgCIogCcvh9odgB9kwCRrjZTWwCCmjlPUx1peA1xggCHoS1daA1xgyRlci5cZwB/lSRlcwCTsgCTsQCDmyVkcgCaugB+lAB5jgCWtSZjcACOqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMTNFMDU4RThCRDExRTdCNkMzQTk3MDVEMUYzRTI4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgyMTNFMDU5RThCRDExRTdCNkMzQTk3MDVEMUYzRTI4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODIxM0UwNTZFOEJEMTFFN0I2QzNBOTcwNUQxRjNFMjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODIxM0UwNTdFOEJEMTFFN0I2QzNBOTcwNUQxRjNFMjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3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) no-repeat;\n  background-size: auto 7px;\n  background-position: left bottom;\n}\n.new-msg-no-read {\n  background: #40a8cc;\n  padding: 2px 10px;\n  font-size: 12px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"flagList\">\r\n\r\n\t<div class=\"message light\">\r\n\t\t<div class=\"message-back\"><a routerLink=\"/desk\"><span>🢐</span>  Назад</a></div>\r\n\t\t<div class=\"message-wrapper\">\r\n\t\t\tСообщения\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<msg-in-list\r\n\t\t*ngFor=\"let item of service.sortedList\"\r\n\t\t[name]=\"item.name\"\r\n\t\t[avatar]=\"item.avatar\"\r\n\t\t[lastMsg]=\"service.listLastMessage[item.id].msg\"\r\n\t\t[writes]=\"item.writes\"\r\n\t\t[read]=\"service.refContacts[item.id].read\"\r\n\t\t[isNewChat]=\"!service.listLastMessage[item.id].msg \"\r\n\r\n\t\t[routerLink]=\"['/messages']\" \r\n\t\t[queryParams]=\"{id : item.id}\"\r\n\t></msg-in-list>\r\n\r\n</div>\r\n<div *ngIf=\"!flagList\">\r\n\r\n\t<div class=\"message light\">\r\n\t\t<div class=\"message-back\"><a routerLink=\"/messages\"><span>🢐</span>  Назад</a></div>\r\n\t\t<div class=\"message-wrapper\">\r\n\t\t\t{{contact.name}}\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"service.messages[id]\">\r\n\t\t<msg \r\n\t\t\t*ngFor=\"let msg of service.messages[id]\" \r\n\t\t\t[msgArray]=\"msg.messages\" \r\n\t\t\t[author]=\"msg.go === 'out' ? service.myName : contact.name\"\r\n\t\t\t[time]=\"msg.date\"\r\n\t\t\t[avatar]=\"msg.go === 'out' ? service.myAvatar : contact.avatar\"\r\n\t\t></msg>\r\n\t</div>\r\n\t<div *ngIf=\"!service.messages[id]\" class=\"new-chat\">Сообщений пока нет, будьте первым кто напишет.</div>\r\n\r\n\t<div class=\"answer\">\r\n\t\t<span [ngStyle]=\"{animation: service.refContacts[id].writes ? 'show  2s infinite linear' : ''}\">{{contact.name}} пишет..</span>\r\n\t</div>\r\n\r\n\t<div class=\"message light\">\r\n\t\t<div class=\"message-wrapper\">\r\n\t\t\t<input type=\"text\" \r\n\t\t\t\t[(ngModel)]=\"service.refContacts[id].newMsg\" \r\n\t\t\t\t(keydown)=\"enter($event)\"\r\n\t\t\t\tid=\"input\"\r\n\t\t\t\tplaceholder=\"Сообщение\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = (function () {
    function MessagesComponent(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.flagList = true;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['id']) {
                _this.id = +params['id'];
                // Получаем информацию о контакте
                _this.contact = _this.service.refContacts[_this.id]; //this.service.getContactInfo(this.id);
                if (!_this.contact) {
                    // Если информацию о контакте получить не удалось
                    _this.router.navigate(['/messages']);
                }
                else {
                    // Получили
                    _this.flagList = false;
                    // Мы можем читать новые сообщения
                    _this.service.read = _this.id;
                    _this.service.refContacts[_this.id].read = true;
                    // Обновляем количество нечитанных диалогов
                    _this.service.numNewMsg = _this.service.countNewMsg(_this.service.sortedList);
                    _this.service.getMessages(_this.id);
                    setTimeout(function () { return document.getElementById('input').focus(); }, 100);
                }
            }
            else {
                // ID нет -> Список сообщений
                _this.flagList = true;
                // Мы не можем читать новые сообщения
                _this.service.read = null;
                _this.id = null;
                _this.service.getLastMessages();
            }
        });
    };
    // Отправляем сообщение
    MessagesComponent.prototype.enter = function (e) {
        if (e.code.toLowerCase() === 'enter' && this.service.refContacts[this.id].newMsg) {
            this.service.sendMsg(this.id);
        }
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__service_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/msg.in.list/msg.in.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message\">\r\n\t<div class=\"message-img\"><img [src]=\"avatar\" alt=\"\"></div>\r\n\t<div class=\"message-wrapper\">\r\n\t\t<div class=\"message-autor\">{{name}} <span>{{time ? (time | date:'HH:mm') : ''}}</span></div>\r\n\t\t<div class=\"message-text\">\r\n\t\t\t<div class=\"message-label\" \r\n\t\t\t\t[ngClass]=\"{italic: isNewChat || writes, 'light-color': isNewChat}\">\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"load\" *ngIf=\"writes\"></div>\r\n\t\t\t\t<span *ngIf=\"writes\">Набирает сообщение..</span>\r\n\r\n\t\t\t\t<span *ngIf=\"!writes\" [ngClass]=\"{'new-msg-no-read': !read}\">\r\n\t\t\t\t\t<span *ngIf=\"IAM\" class=\"iam\">Я</span> {{msg}}\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/msg.in.list/msg.in.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgInListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MsgInListComponent = (function () {
    function MsgInListComponent() {
        this.isNewChat = false;
        this.IAM = false;
    }
    MsgInListComponent.prototype.ngOnInit = function () {
    };
    MsgInListComponent.prototype.checkMsg = function () {
        if (this.msg.length > 75) {
            this.msg = this.msg.substr(0, 75) + '..';
        }
        this.IAM = !!(this.lastMsg.go === 'out');
        // if (this.lastMsg.go === 'out') {
        //   this.IAM = true;
        // } else {
        // }
    };
    MsgInListComponent.prototype.ngOnChanges = function () {
        // console.log(this.lastMsg);
        if (this.lastMsg) {
            this.msg = this.lastMsg.messages[this.lastMsg.messages.length - 1];
            this.time = this.lastMsg.date;
            this.checkMsg();
        }
        else {
            this.msg = 'Это новый чат с другом..';
            this.isNewChat = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MsgInListComponent.prototype, "lastMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MsgInListComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MsgInListComponent.prototype, "avatar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MsgInListComponent.prototype, "writes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MsgInListComponent.prototype, "read", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MsgInListComponent.prototype, "isNewChat", void 0);
    MsgInListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'msg-in-list',
            template: __webpack_require__("../../../../../src/app/msg.in.list/msg.in.list.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MsgInListComponent);
    return MsgInListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/msg/msg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"message\">\r\n\t<div class=\"message-img\"><img [src]=\"avatar\" alt=\"\"></div>\r\n\t<div class=\"message-wrapper\">\r\n\t\t<div class=\"message-autor\">{{author}} <span>{{time | date:'HH:mm'}}</span></div>\r\n\t\t<div class=\"message-text\">\r\n\t\t\t<div class=\"message-label\" *ngFor=\"let msg of msgArray\">\r\n\t\t\t\t{{msg}}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/msg/msg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MsgComponent = (function () {
    function MsgComponent() {
        this.time = new Date();
    }
    MsgComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MsgComponent.prototype, "msgArray", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MsgComponent.prototype, "author", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Date)
    ], MsgComponent.prototype, "time", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MsgComponent.prototype, "avatar", void 0);
    MsgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'msg',
            template: __webpack_require__("../../../../../src/app/msg/msg.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MsgComponent);
    return MsgComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(auth, service, router) {
        this.auth = auth;
        this.service = service;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.isAuth().then(function (isLoggedIn) {
            if (isLoggedIn) {
                _this.service.viewMenu = true;
            }
            else {
                console.log('Unauthorized');
                _this.router.navigate(['/']);
            }
            return isLoggedIn;
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/service/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(service) {
        this.service = service;
        this.isLoggedIn = false;
    }
    AuthService.prototype.isAuth = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isLoggedIn) {
                resolve(_this.isLoggedIn);
            }
            else {
                if (_this.service.firstPageIsAuth && _this.logIn()) {
                    setTimeout(function () {
                        resolve(_this.isLoggedIn);
                    }, 1500);
                }
                else {
                    resolve(false);
                }
            }
        });
    };
    AuthService.prototype.logIn = function () {
        this.isLoggedIn = true;
        return true;
    };
    AuthService.prototype.logOut = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/service/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Stages = (function () {
    function Stages() {
        this[1] = this[2] = this[3] = this[4] = this[5] = this[6] = this[7] = this[8] = this.end = false;
        this.check = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    Stages = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        // Класс шагов	
        ,
        __metadata("design:paramtypes", [])
    ], Stages);
    return Stages;
}());
var MainService = (function () {
    function MainService() {
        this.viewLoader = false;
        this.viewMenu = false;
        this.myName = 'Basil';
        this.myAvatar = 'img/logo-0.jpg';
        // Список с последними сообщениями
        this.listLastMessage = {};
        // Отсортированный список контактов в зависимости от списка последних сообщений
        this.sortedList = [];
        // Количество новых сообщений
        this.numNewMsg = 0;
        // Флаг можем ли мы читать сейчас сообщения от кого-то
        this.read = null;
        this.listContacts = [
            { id: 1, name: 'Виктория', avatar: 'img/logo-4.jpg', lastMsg: null, writes: false, newMsg: '', read: true },
            { id: 2, name: 'Павел', avatar: 'img/logo-1.jpg', lastMsg: null, writes: false, newMsg: '', read: true },
            { id: 3, name: 'Йода', avatar: 'img/logo-2.jpg', lastMsg: null, writes: false, newMsg: '', read: true },
            { id: 4, name: 'Денис', avatar: 'img/logo-3.jpg', lastMsg: null, writes: false, newMsg: '', read: true },
            { id: 5, name: 'Ева', avatar: 'img/logo-5.jpg', lastMsg: null, writes: false, newMsg: '', read: true },
            { id: 6, name: 'Журавль', avatar: 'img/logo-6.jpg', lastMsg: null, writes: false, newMsg: '', read: true },
        ];
        this.messages = {
            '3': [
                { go: 'out', date: new Date(2011, 0, 1, 2, 3, 4, 567), messages: ['Lorem ipsum dolor.'] },
                { go: 'in', date: new Date(2011, 0, 1, 4, 10, 4, 567), messages: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil.', 'Lorem ipsum.'] },
                { go: 'out', date: new Date(2011, 0, 1, 4, 12, 4, 567), messages: ['Lorem ipsum dolor sit amet, consectetur.', 'Lorem ipsum.'] },
                { go: 'in', date: new Date(2011, 0, 1, 17, 20, 4, 567), messages: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dicta mollitia sint illo nemo at?'] }
            ],
        };
        // Массив ссылок на аккаунты
        this.refContacts = this.initRefsContacts();
        this.answers = {
            new: {
                1: {
                    1: 'Привет)',
                    2: 'Привет!',
                    3: 'Хаюшки))',
                    4: 'Ооо, давно не списывались, ну привет))',
                    5: 'приветствую, друг!'
                },
                2: {
                    1: 'у меня отличн, устаю только немного) а ты как?',
                    2: 'у меня молоко убежало:\'(',
                    3: 'да я только и делаю что жду тебя;)',
                    4: 'да хорошо, такая радость что списались спустя долгое время',
                    5: 'нормик, только что молоко на кухне было спасен:)',
                    6: 'Живу жизнь нелегкую. Как ты?'
                },
                3: {
                    1: 'славно)',
                    2: 'душа радуется за тебя)',
                    3: 'прекрасно))',
                },
                4: {
                    1: 'Ну у меня чуть молоко не убежало, а моих сил хватило, чтобы с ним совладать'
                },
                5: {
                    1: 'чего смешного?)',
                    2: 'чего это тебя развеселило?',
                    3: 'чтооо?))',
                    4: 'и что было сказано такого смешного, а?'
                },
                6: {
                    1: 'Никак нет!'
                },
                7: {
                    1: 'бот? кто бот? я не бот!',
                    2: 'о каком боте идет речь?'
                },
                8: {
                    1: 'Ну пока)',
                    2: 'Окей, тоже побегу',
                    3: 'пока пока;)',
                    4: 'до связи!',
                    5: 'До скорого!',
                    6: 'всего хорошего)'
                },
                9: {
                    1: 'не понятно как то увы))',
                    2: 'что??',
                    3: 'и к чему это?)'
                }
            },
            yet: {
                1: {
                    1: 'уже ведь поздоровались)',
                    2: 'не путайся, здоровались ведь!',
                    3: 'мб хочешь наоборот попращаться?))',
                    4: 'как ты мог забыть а? мы ведь здоровались',
                    5: 'и еще раз привет)) ага)'
                },
                2: {
                    1: 'узнавал бедняга.',
                    2: 'ну давай еще раз поспрашивает как мы))',
                    3: 'да и я конечно тоже за пару минут забыл как у тебя дела;)',
                    4: 'пропить таблетки для памяти?',
                    5: 'повторюсь, еще в мире живых!)',
                    6: 'эх, друг мой друг'
                },
                3: {
                    1: 'славно)',
                    2: 'душа радуется за тебя)',
                    3: 'прекрасно))',
                },
                4: {
                    1: 'Да все хорошо с этим молоком, опять ты меня не слушаешь!'
                },
                5: {
                    1: 'ну хватит хихикать тут!',
                    2: 'я так обижусь!',
                    3: 'перестань ржать там',
                    4: 'ну все, больше ни слова от меня'
                },
                6: {
                    1: 'а вот и ДА!'
                },
                7: {
                    1: 'не буду больше про бота говорить)',
                    2: 'Так чтобы я больше не слышал слова \'бот\'!'
                },
                9: {
                    1: 'не понятно как то увы))',
                    2: 'что??',
                    3: 'и к чему это?)'
                }
            }
        };
    }
    MainService.prototype.initRefsContacts = function () {
        var temp = [];
        this.listContacts.forEach(function (el) {
            temp[el.id] = el;
            el.stages = new Stages;
        });
        return temp;
    };
    // Возвращает список последних сообщений
    MainService.prototype.createListLastMsg = function (contacts, messeges) {
        var temp = [];
        contacts.forEach(function (el) {
            var tempMsg = messeges[el.id];
            temp[el.id] = {};
            temp[el.id].msg
                = tempMsg
                    ? tempMsg[tempMsg.length - 1]
                    : null;
        });
        return temp;
    };
    // Возвращает отсортированный список
    MainService.prototype.createSortedList = function (contacts, listLastMsg) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_underscore__["sortBy"](this.listContacts, function (el) {
            return _this.listLastMessage[el.id].msg
                ? -_this.listLastMessage[el.id].msg.date.getTime()
                : -1;
        });
    };
    // Подсчитывает количество нечитанных диалогов
    MainService.prototype.countNewMsg = function (sortedList) {
        return __WEBPACK_IMPORTED_MODULE_1_underscore__["reduce"](sortedList, function (num, item) {
            // console.log(item.read);
            return item.read
                ? num
                : num + 1;
        }, 0);
    };
    // Получаем список последних сообщений и сортированный список
    MainService.prototype.getLastMessages = function () {
        this.listLastMessage = this.createListLastMsg(this.listContacts, this.messages);
        this.sortedList = this.createSortedList(this.listContacts, this.listLastMessage);
        this.numNewMsg = this.countNewMsg(this.sortedList);
    };
    // Получаем последнее сообщение по ID
    MainService.prototype.getMessages = function (id) {
        this.refContacts[id].lastMsg =
            this.messages[id]
                ? this.getLastMessage(id)
                : null;
    };
    // Получаем ссылку на последнее сообщение
    MainService.prototype.getLastMessage = function (id) {
        return this.getLastElement(this.messages[id]);
    };
    // Возвращает последний элемент массива
    MainService.prototype.getLastElement = function (arr) {
        return arr[arr.length - 1];
    };
    MainService.prototype.sendMsg = function (id) {
        if (this.refContacts[id].lastMsg && this.refContacts[id].lastMsg.go === 'out') {
            this.pushMsg(this.refContacts[id].newMsg, id);
        }
        else {
            this.createNewMsg(this.refContacts[id].newMsg, id, 'out');
        }
        this.answerMsg(id, this.refContacts[id].newMsg, 1200, null);
        this.refContacts[id].newMsg = '';
    };
    // (id, схематичное сообщение, задержка, заданный ответ)
    MainService.prototype.answerMsg = function (id, msg, delay, customAnsw) {
        var _this = this;
        var answArray, period;
        if (msg) {
            // Если попрощались то не ответит;)
            if (this.refContacts[id].stages.end)
                return;
            // Массив с ответами
            answArray = this.respondTo(id, msg);
        }
        else {
            answArray = customAnsw;
        }
        // Если вообще никакого ответа нету, то выкидываем
        if (!answArray)
            return;
        setTimeout(function () { return _this.writesFlag(id, true); }, delay);
        period = (delay + 4000) / answArray.length;
        answArray.forEach(function (e, ind) {
            setTimeout(function () {
                if ((ind === 0 && !_this.refContacts[id].lastMsg)
                    || (ind === 0 && _this.refContacts[id].lastMsg.go === 'out')
                    || _this.refContacts[id].lastMsg.go === 'out') {
                    _this.createNewMsg(e, id, 'in');
                }
                else {
                    // Сообщение его последнее, поэтому добавляем к нему
                    _this.pushMsg(e, id);
                }
                // Скидываем флаг, что кто то пишет
                if (ind === answArray.length - 1) {
                    _this.writesFlag(id, false);
                    // Отмечаем прочитались ли сообщения
                    _this.refContacts[id].read =
                        _this.read === id
                            ? true
                            : false;
                    _this.getLastMessages();
                }
            }, period * (ind + 1));
        });
    };
    // Меняем флаг написания сообщения для ID
    MainService.prototype.writesFlag = function (id, flag) {
        this.refContacts[id].writes = flag;
    };
    // Создаем новое сообщение
    MainService.prototype.createNewMsg = function (msg, id, go) {
        this.checkLastMsg(id);
        this.messages[id].push({
            go: go,
            messages: [msg],
            date: new Date()
        });
        this.refContacts[id].lastMsg = this.getLastMessage(id);
    };
    // Добавляем в последнее сообщение
    MainService.prototype.pushMsg = function (msg, id) {
        this.refContacts[id].lastMsg.messages.push(msg);
    };
    // Проверяем есть ли последнее сообщение
    MainService.prototype.checkLastMsg = function (id) {
        if (!this.refContacts[id].lastMsg) {
            this.messages[id] = [];
        }
    };
    MainService.prototype.respondTo = function (id, input) {
        var answer = [];
        input = input.toLowerCase();
        if (this.match('(привет|здравствуй|приветствую|здрасте|здарова|хай|hi|прива|прив|здоров)(\\s|!|\\.|$)', input))
            answer.push(this.testAnswer(id, 1, this.getRandomInt(1, 5)));
        if (this.match('как дела', input) || this.match('как жизнь', input) || this.match('как поживаешь', input) || this.match('как ты', input))
            answer.push(this.testAnswer(id, 2, this.getRandomInt(1, 6)));
        if (this.match('(хорошо|отлично|прекрасно|здоровски)(\\s|!|\\.|$)', input))
            answer.push(this.testAnswer(id, 3, this.getRandomInt(1, 3)));
        if (this.match('молоко', input))
            answer.push(this.testAnswer(id, 4, 1));
        if (this.match('ха', input) || this.match('хи', input) || this.match('лол', input) || this.match('смешной', input))
            answer.push(this.testAnswer(id, 5, this.getRandomInt(1, 4)));
        if (this.match('нет', input))
            answer.push(this.testAnswer(id, 6, 1));
        if (this.match('бот', input))
            answer.push(this.testAnswer(id, 7, this.getRandomInt(1, 2)));
        if (this.match('(пока|досвид|прощай|покеда|bye)(\\s|!|\\.|$)', input))
            answer.push(this.testAnswer(id, 8, this.getRandomInt(1, 6)));
        if (!answer.length) {
            answer.push(this.testAnswer(id, 9, this.getRandomInt(1, 3)));
        }
        return answer;
    };
    MainService.prototype.match = function (regex, input) {
        return new RegExp(regex).test(input);
    };
    MainService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    MainService.prototype.testAnswer = function (id, stage, number) {
        if (this.refContacts[id].stages[stage] && !this.refContacts[id].stages.end) {
            if (this.refContacts[id].stages.check[stage - 1] === 0) {
                this.refContacts[id].stages.check[stage - 1]++;
                return this.answers.yet[stage][number];
            }
            else {
                return 'куриные мозги?;)';
            }
        }
        else {
            this.refContacts[id].stages[stage] = true;
            if (stage === 8)
                this.refContacts[id].stages.end = true;
            return this.answers.new[stage][number];
        }
    };
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



// if (environment.production) {
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
// }
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map