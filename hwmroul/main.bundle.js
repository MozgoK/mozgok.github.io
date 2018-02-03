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

module.exports = "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\"\r\n  crossorigin=\"anonymous\"> -->\r\n<!-- <link href=\"https://fonts.googleapis.com/css?family=Fira+Sans\" rel=\"stylesheet\"> -->\r\n\r\n<div class=\"loader\" [ngStyle]=\"{display: loader.visible ? 'flex' : '', opacity: loader.op ? 1 : 0}\">\r\n  <div class=\"container-spanner\" [ngStyle]=\"{display: loader.container ? 'block' : 'none'}\">\r\n    <svg viewBox=\"0 0 100 100\">\r\n      <circle cx=\"50%\" cy=\"50%\" r=\"45\"></circle>\r\n    </svg>\r\n  </div>\r\n</div>\r\n\r\n\r\n<link href=\"https://fonts.googleapis.com/css?family=Fira+Sans|Vollkorn|Roboto\" rel=\"stylesheet\">\r\n<div>\r\n  <div class=\"my-row\">\r\n      <div class=\"my-col\">\r\n\r\n          <div class=\"first info-block\">\r\n            <span class=\"header\">Меньше всего выпадали:</span>\r\n            <span \r\n              *ngFor=\"let el of arrAllNumbers\"\r\n              [style.display]=\"el.count === firstMinCounter ? '' : 'none'\"\r\n              [ngClass]=\"el.color\"\r\n              [class.cell-clicked]=\"cellClicked === el.number\"\r\n              (click)=\"clickCell(el.number)\"\r\n            >\r\n              {{el.number}}\r\n              <div class=\"count\"></div>\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"second info-block\">\r\n            <span class=\"header\">Чуть больше:</span>\r\n            <span \r\n              *ngFor=\"let el of arrAllNumbers\"\r\n              [style.display]=\"el.count === secondMinCounter ? '' : 'none'\"\r\n              [ngClass]=\"el.color\"\r\n              [class.cell-clicked]=\"cellClicked === el.number\"\r\n              (click)=\"clickCell(el.number)\"\r\n            >\r\n              {{el.number}}\r\n              <div class=\"count\"></div>\r\n            </span>\r\n          </div>\r\n          \r\n          <div class=\"first info-block\">\r\n            <p class=\"header scroll\">Сортированный список в порядке возрастания даты:</p>\r\n            <div class=\"sorted-list\">\r\n              <table>\r\n                <tr>\r\n                  <th>Место</th>\r\n                  <th>Дата</th>\r\n                  <th>Число</th>\r\n                  <th>Выпадений</th>\r\n                </tr>\r\n                <tr \r\n                  *ngFor=\"let el of sortedList; let i = index\"\r\n                  [ngClass]=\"{'second-number': i%2 == 0, 'yellow-number': el.index > 300, 'orange-number': el.index > 400, 'deep-orange-number': el.index > 500 }\"\r\n                >\r\n                  <td>{{el.index}}</td>\r\n                  <td>{{games[el.index].time*1000 | date:'HH:mm | dd.MM'}}</td>\r\n                  <td>\r\n                    <div\r\n                      class=\"td-cell tooltip\"\r\n                      [ngClass]=\"arrAllNumbers[el.number | numberWin].color\"\r\n                      [class.cell-clicked]=\"cellClicked === el.number\"\r\n                      (click)=\"clickCell(el.number)\"\r\n                    >\r\n                      {{arrAllNumbers[el.number | numberWin].number}}\r\n                      <div class=\"count\" \r\n                        [ngClass]=\"{'first': arrAllNumbers[el.number | numberWin].count === firstMinCounter, \r\n                                    'second': arrAllNumbers[el.number | numberWin].count === secondMinCounter}\">\r\n                      </div>\r\n                      <span class=\"tooltiptext\">{{games[el.index].gold}}</span>\r\n                    </div>\r\n                  </td>\r\n                  <td>{{arrAllNumbers[el.number | numberWin].count}}</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n          </div>\r\n        \r\n\r\n      </div>\r\n\r\n      <div class=\"my-col\">\r\n\r\n        <div class=\"common-block\">\r\n          \r\n          <div class=\"block\">\r\n\r\n              <div class=\"cell null\">\r\n                <div class=\"cell-inner green\" (click)=\"clickCell('00')\" [class.cell-clicked]=\"cellClicked === '00'\">\r\n                  00\r\n                  <div class=\"count\" [ngClass]=\"{'first-info': arrNullNumbers[1].count === firstMinCounter, 'second-info': arrNullNumbers[1].count === secondMinCounter}\">\r\n                    {{arrNullNumbers[1].count}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"cell null\">\r\n                <div class=\"cell-inner green\" (click)=\"clickCell('0')\" [class.cell-clicked]=\"cellClicked === '0'\">\r\n                  0\r\n                  <div class=\"count\" [ngClass]=\"{'first-info': arrNullNumbers[0].count === firstMinCounter, 'second-info': arrNullNumbers[0].count === secondMinCounter}\">\r\n                    {{arrNullNumbers[0].count}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"block\" *ngFor=\"let indBlock of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]\">\r\n            <div class=\"cell\" *ngFor=\"let ind of [indBlock*3 + 2, indBlock*3 + 1, indBlock*3 + 0]\">\r\n              <div class=\"cell-inner\" \r\n                [ngClass]=\"arrNumbers[ind].color\"\r\n                [class.hover]=\"\r\n                  (indBlock === 0 && fields[0][0].over) || (indBlock === 1 && fields[0][0].over) || (indBlock === 2 && fields[0][0].over) || (indBlock === 3 && fields[0][0].over) ||\r\n                  (indBlock === 4 && fields[0][1].over) || (indBlock === 5 && fields[0][1].over) || (indBlock === 6 && fields[0][1].over) || (indBlock === 7 && fields[0][1].over) ||\r\n                  (indBlock === 8 && fields[0][2].over) || (indBlock === 9 && fields[0][2].over) || (indBlock === 10 && fields[0][2].over) || (indBlock === 11 && fields[0][2].over) ||\r\n                  (ind === indBlock*3 + 0 && fields[1][0].over) || (ind === indBlock*3 + 1 && fields[1][1].over) || (ind === indBlock*3 + 2 && fields[1][2].over) ||\r\n                  (ind < 18 && fields[2][0].over) || (ind >= 18 && fields[2][1].over) ||\r\n                  ((ind + 1)%2 === 0 && fields[3][0].over) || ((ind + 1)%2 != 0 && fields[3][1].over)\"\r\n                [class.cell-clicked]=\"cellClicked === (ind + 1) + ''\"\r\n                (click)=\"clickCell((ind + 1) + '')\"\r\n              >\r\n                {{ind + 1}}\r\n                <div class=\"count\" [ngClass]=\"{'first-info': arrNumbers[ind].count === firstMinCounter, 'second-info': arrNumbers[ind].count === secondMinCounter}\">\r\n                  {{arrNumbers[ind].count}}\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"status-block\">\r\n          <div class=\"status-cell green\">\r\n            Зеленых - {{colorsCount.green}}\r\n          </div>\r\n          <div class=\"status-cell red\">\r\n            Красных - {{colorsCount.red}}\r\n          </div>\r\n          <div class=\"status-cell black\">\r\n            Черных - {{colorsCount.black}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"first info-block statistics float\">\r\n          <p class=\"header scroll\">Последние 25 игр:</p>\r\n          <div class=\"sorted-list\">\r\n            <table>\r\n              <tr>\r\n                <th>№</th>\r\n                <th>Дата</th>\r\n                <th>Число</th>\r\n                <!-- <th>Выпадений</th> -->\r\n              </tr>\r\n              <tr\r\n                *ngFor=\"let el of games | slice:0:25; let i = index\"\r\n                [ngClass]=\"{\r\n                  'second-number': i%2 == 0, \r\n                  'deep-orange-number': consecutiveNumbers.flag && i < consecutiveNumbers.num\r\n                }\"\r\n              >\r\n                <td>{{el.id + '' | slice:-3}}</td>\r\n                <td>{{el.time*1000 | date:'HH:mm | dd.MM'}}</td>\r\n                <td>\r\n                  <div \r\n                    class=\"td-cell tooltip\" \r\n                    [ngClass]=\"arrAllNumbers[el.number | numberWin].color\" \r\n                    [class.cell-clicked]=\"cellClicked === el.number\"\r\n                    (click)=\"clickCell(el.number)\"\r\n                  >\r\n                    {{el.number}}\r\n                    <span class=\"tooltiptext\">{{el.gold}}</span>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        \r\n        </div>\r\n\r\n        <div class=\"first info-block statistics float\">\r\n          <p class=\"header\">По областям:</p>\r\n          <div class=\"sorted-list fields\">\r\n            <div>\r\n\r\n\r\n              <table>\r\n                <tr class=\"hr-div\">\r\n                  <th>Область</th>\r\n                  <th>Выпадений</th>\r\n                </tr>\r\n\r\n                <ng-template ngFor let-ind=\"index\" let-field [ngForOf]=\"fields\">\r\n                  <tr \r\n                    *ngFor=\"let item of field; let i = index;\" \r\n                    (mouseover)=\"item.over = true\" \r\n                    (mouseleave)=\"item.over = false\"\r\n                    [ngClass]=\"{'min': item.min, 'last': i === fields[0].length - 1, 'hover-row': item.over, 'hr-div': i === field.length - 1 && ind !== fields.length - 1}\"\r\n                  >\r\n                    <td>{{item.text}}</td>\r\n                    <td>{{item.num}}</td>\r\n                  </tr>\r\n                </ng-template>\r\n                \r\n              </table>\r\n            </div>\r\n        \r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n      </div>\r\n</div>\r\n\r\n<div class=\"timer\" [style.opacity]=\"(timerObj.minutes === 0 && timerObj.seconds === 0) ? 0 : 1 \" [class.error]=\"flagError\">\r\n  Reload after {{timerObj.minutes | number:'2.'}}:{{timerObj.seconds | number:'2.'}}\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".second-number {\n  background: rgba(0, 0, 0, 0.06);\n}\n.yellow-number {\n  background: #FFC107;\n}\n.orange-number {\n  background: #FF9800;\n}\n.deep-orange-number {\n  background: #FF5722;\n}\nbody {\n  background: linear-gradient(0deg, #333333, #5a5454);\n  color: white !important;\n  font-family: 'Segoe UI', 'Roboto', serif;\n}\ntable,\nth,\ntd {\n  border: 1px solid white;\n  border-collapse: collapse;\n}\n.my-col {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 10px;\n  float: left;\n}\n.my-col:after {\n  content: '';\n  clear: both;\n  display: block;\n}\n.my-row:after {\n  content: '';\n  clear: both;\n  display: block;\n}\n.common-block {\n  margin: -2px 0 20px -2px;\n}\n.common-block .block {\n  float: left;\n}\n.common-block:after {\n  content: '';\n  clear: both;\n  display: block;\n}\n.cell {\n  height: 80px;\n  width: 50px;\n  padding: 2px;\n}\n.cell.null {\n  height: 122px;\n}\n.cell .cell-inner {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  border-radius: 3px;\n  font-family: inherit;\n  cursor: pointer;\n}\n.cell .cell-inner .count {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 12px;\n  height: 30px;\n  width: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0) 49%, rgba(255, 255, 255, 0.3) 50%);\n  padding-right: 3px;\n  padding-bottom: 0px;\n  border-bottom-right-radius: 3px;\n  color: white;\n}\n.cell .cell-inner .count.first-info {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0) 52%, #03A9F4 53%);\n}\n.cell .cell-inner .count.second-info {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0) 52%, #FF9800 53%);\n}\n.red {\n  background: #333532;\n  color: red;\n}\n.black {\n  background: #282a27;\n  color: #fff;\n}\n.green {\n  background: #8BC34A;\n  color: #fff;\n}\n.info-block {\n  width: 500px;\n  text-align: center;\n  color: white;\n  margin-bottom: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.03);\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.87);\n  background: white;\n}\n.info-block.float {\n  float: left;\n}\n.info-block.float + .float {\n  margin-left: 20px;\n}\n.info-block.statistics {\n  width: 337px;\n}\n.info-block.statistics .sorted-list {\n  overflow-x: hidden;\n  max-height: 470px;\n}\n.info-block.statistics .sorted-list.fields table td {\n  padding: 7px 0;\n  width: 50%;\n  cursor: default;\n}\n.info-block.statistics .sorted-list.fields .min {\n  background: rgba(244, 67, 54, 0.1);\n}\n.info-block.statistics .sorted-list.fields .hover-row {\n  background: rgba(0, 0, 0, 0.06);\n}\n.info-block.statistics .sorted-list table td {\n  min-width: 50px;\n}\n.info-block.first .count {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0) 52%, #03A9F4 53%);\n}\n.info-block.second .count {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0) 52%, #FF9800 53%);\n}\n.info-block span:not(.header):not(.tooltiptext) {\n  margin: 5px;\n  height: 34px;\n  width: 34px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 3px;\n  font-size: 14px;\n  position: relative;\n  font-family: inherit;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.23), 0 3px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 0;\n  transition: all .2s;\n  cursor: pointer;\n}\n.info-block span:not(.header):not(.tooltiptext) .count {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 12px;\n  height: 12px;\n  width: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.info-block .header {\n  margin: 0;\n  color: white;\n  background: #00BCD4;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding: 12px 20px;\n}\n.info-block .header.scroll {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n.sorted-list {\n  max-height: 500px;\n  overflow: auto;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-right: none;\n}\n.sorted-list table {\n  width: 100%;\n  font-size: 14px;\n}\n.sorted-list table th {\n  padding: 4px;\n  font-weight: 500;\n}\n.sorted-list table td {\n  min-width: 100px;\n}\n.sorted-list table td .td-cell {\n  width: 80%;\n  height: 100%;\n  border-radius: 3px;\n  padding: 4px;\n  position: relative;\n  font-family: inherit;\n  transition: all .2s;\n  cursor: pointer;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.23), 0 3px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 0;\n  margin: 2px auto;\n}\n.sorted-list table td .td-cell .count {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  font-size: 12px;\n  height: 12px;\n  width: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  background: none;\n}\n.sorted-list table td .td-cell .count.first {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0) 52%, #03A9F4 53%);\n}\n.sorted-list table td .td-cell .count.second {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0) 52%, #FF9800 53%);\n}\ntable,\nth,\ntd {\n  border: none;\n}\n/* width */\n::-webkit-scrollbar {\n  width: 5px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.cell {\n  height: 50px;\n}\n.cell.null {\n  height: 77px;\n}\n.cell.null .cell-inner {\n  border-color: black;\n}\n.cell .cell-inner {\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.23), 0 3px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  box-sizing: border-box;\n  transition: all .2s;\n}\n.cell .cell-inner .count {\n  font-size: 10px;\n  height: 24px;\n  width: 24px;\n  background: none;\n  border-bottom-right-radius: 0;\n}\n.status-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-bottom: 20px;\n}\n.status-block .status-cell {\n  width: 120px;\n  padding: 4px;\n  position: relative;\n  font-family: inherit;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.23), 0 3px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 0;\n  margin: 2px 15px;\n  font-size: 14px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  box-sizing: border-box;\n}\n.status-block .status-cell.green {\n  border-color: black;\n}\n.hr-div {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.hover {\n  background: #F44336;\n  color: white;\n}\n.cell-clicked {\n  background: #F44336;\n  color: white;\n}\n.timer {\n  width: 170px;\n  padding: 4px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  font-family: inherit;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.23), 0 3px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 0;\n  font-size: 14px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n  box-sizing: border-box;\n  background: #282a27;\n  color: #fff;\n  transition: all .3s;\n}\n.timer.error {\n  background: #F44336;\n  color: white;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  position: absolute;\n  z-index: 1000;\n  top: 0;\n  bottom: auto;\n  right: 110%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity .1s;\n  width: 100%;\n  padding: 4px;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.23), 0 3px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 0;\n  font-size: 14px;\n  text-align: center;\n  box-sizing: border-box;\n  background: #FFEB3B;\n  color: #212121;\n}\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}\n@media (max-width: 768px) {\n  body,\n  .my-col {\n    width: inherit;\n  }\n  .my-col,\n  .info-block.float {\n    float: none;\n  }\n  .status-block {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 120px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .info-block {\n    width: auto !important;\n  }\n  .info-block.float {\n    margin-left: 0 !important;\n  }\n  .red,\n  .black,\n  .green {\n    font-weight: 600;\n  }\n  .common-block .block {\n    float: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n  }\n  .cell {\n    float: left;\n    height: 34px !important;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n  }\n  .sorted-list table td {\n    min-width: 80px;\n  }\n  .first.info-block.statistics.float:last-child {\n    margin-bottom: 0;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Obj */
/* unused harmony export Sorted */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Obj = (function () {
    function Obj(number, color) {
        this.number = number;
        this.color = color;
        this.count = 0;
    }
    return Obj;
}());

var Sorted = (function () {
    function Sorted() {
        this.counter = 0;
        this.arr = [];
    }
    Sorted.prototype.clear = function () {
        this.arr = [];
    };
    return Sorted;
}());

var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.games = [];
        this.firstMinCounter = 0;
        this.flagError = false;
        this.sortedList = [];
        this.consecutiveNumbers = {
            flag: false,
            num: 0,
            required: 10
        };
        this.colorsCount = {
            green: 0,
            red: 0,
            black: 0
        };
        this.fields = [
            [
                { text: '1st 12', num: 0, min: false },
                { text: '2nd 12', num: 0, min: false },
                { text: '3rd 12', num: 0, min: false }
            ],
            [
                { text: '1st line', num: 0, min: false },
                { text: '2nd line', num: 0, min: false },
                { text: '3rd line', num: 0, min: false }
            ],
            [
                { text: '1 to 18', num: 0, min: false },
                { text: '19 to 36', num: 0, min: false }
            ],
            [
                { text: 'Even', num: 0, min: false },
                { text: 'Odd', num: 0, min: false }
            ]
        ];
        this.arrNumbers = [
            new Obj('1', 'red'), new Obj('2', 'black'), new Obj('3', 'red'),
            new Obj('4', 'black'), new Obj('5', 'red'), new Obj('6', 'black'),
            new Obj('7', 'red'), new Obj('8', 'black'), new Obj('9', 'red'),
            new Obj('10', 'black'), new Obj('11', 'black'), new Obj('12', 'red'),
            new Obj('13', 'black'), new Obj('14', 'red'), new Obj('15', 'black'),
            new Obj('16', 'red'), new Obj('17', 'black'), new Obj('18', 'red'),
            new Obj('19', 'black'), new Obj('20', 'black'), new Obj('21', 'red'),
            new Obj('22', 'black'), new Obj('23', 'red'), new Obj('24', 'black'),
            new Obj('25', 'red'), new Obj('26', 'black'), new Obj('27', 'red'),
            new Obj('28', 'red'), new Obj('29', 'black'), new Obj('30', 'red'),
            new Obj('31', 'black'), new Obj('32', 'red'), new Obj('33', 'black'),
            new Obj('34', 'red'), new Obj('35', 'black'), new Obj('36', 'red'),
        ];
        this.arrNullNumbers = [
            new Obj('0', 'green'), new Obj('00', 'green')
        ];
        this.arrAllNumbers = [];
        this.cellClicked = '';
        this.loader = {
            visible: false,
            op: false,
            container: false
        };
        this.timerObj = {
            minutes: 0,
            seconds: 0
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initArrAllNumbers();
        this.getGames();
    };
    AppComponent.prototype.initArrAllNumbers = function () {
        var _this = this;
        this.arrAllNumbers.push(this.arrNullNumbers[0]);
        this.arrNumbers.forEach(function (el) { _this.arrAllNumbers.push(el); });
        this.arrAllNumbers.push(this.arrNullNumbers[1]);
    };
    AppComponent.prototype.numberWin = function (value) {
        return value === '00' ? 37 : +value;
    };
    AppComponent.prototype.loaderFunc = function (flag) {
        var _this = this;
        if (flag) {
            this.loader.visible = this.loader.op = true;
            setTimeout(function () { return _this.loader.container = true; }, 300);
        }
        else {
            this.loader.container = this.loader.op = false;
            setTimeout(function () {
                _this.loader.visible = false;
                _this.timer();
            }, 300);
        }
    };
    AppComponent.prototype.getGames = function () {
        var _this = this;
        this.loaderFunc(true);
        this.http.get('https://rovlpj.com/heroes/getter.php').subscribe(function (data) {
            _this.games = data;
            // console.log(this.games);
            _this.checkErrors();
            _this.counterGames();
        });
    };
    AppComponent.prototype.counterGames = function () {
        var _this = this;
        this.arrAllNumbers.forEach(function (el) { return el.count = 0; });
        this.games.forEach(function (el, ind, arr) {
            _this.arrAllNumbers[_this.numberWin(el.number)].count++;
        });
        this.counterFields();
        this.countingСolor();
        this.searchMinCounters();
        // console.log('firstMinCounter: ' + this.firstMinCounter);
        // console.log('secondMinCounter: ' + this.secondMinCounter);
        // console.log(this.arrNullNumbers);
        // console.log(this.arrNumbers);
        this.sortedListFunc();
        this.checkConsecutiveNumbers();
        this.loaderFunc(false);
    };
    AppComponent.prototype.searchFirstMinCounterFunc = function (el) {
        if (el.count < this.firstMinCounter) {
            this.firstMinCounter = el.count;
        }
    };
    AppComponent.prototype.searchSecondMinCounterFunc = function (el) {
        if (el.count < this.secondMinCounter && el.count > this.firstMinCounter) {
            this.secondMinCounter = el.count;
        }
    };
    AppComponent.prototype.searchMinCounters = function () {
        this.firstMinCounter = this.secondMinCounter = 2000;
        this.arrAllNumbers.forEach(this.searchFirstMinCounterFunc.bind(this));
        this.arrAllNumbers.forEach(this.searchSecondMinCounterFunc.bind(this));
    };
    AppComponent.prototype.sortedListFunc = function () {
        var flagArr = [];
        this.sortedList = [];
        for (var index = 0; index < 38; index++) {
            flagArr.push(false);
        }
        for (var index = 0; index < this.games.length; index++) {
            if (this.sortedList.length >= 38) {
                break;
            }
            else {
                var el = this.games[index];
                var elNum = this.numberWin(el.number);
                if (!flagArr[elNum]) {
                    this.sortedList.push({
                        index: index,
                        number: el.number
                    });
                    flagArr[elNum] = true;
                }
            }
        }
        this.sortedList.sort(function (first, second) {
            if (first.index > second.index) {
                return -1;
            }
            if (first.index < second.index) {
                return 1;
            }
        });
    };
    AppComponent.prototype.countingСolor = function () {
        var _this = this;
        this.colorsCount.green = this.colorsCount.red = this.colorsCount.black = 0;
        this.arrAllNumbers.forEach(function (el) {
            switch (el.color) {
                case 'green':
                    _this.colorsCount.green += el.count;
                    break;
                case 'red':
                    _this.colorsCount.red += el.count;
                    break;
                case 'black':
                    _this.colorsCount.black += el.count;
                    break;
            }
        });
    };
    AppComponent.prototype.checkConsecutiveNumbers = function () {
        this.consecutiveNumbers.flag = true;
        this.consecutiveNumbers.num = 1;
        var tempColor = this.arrAllNumbers[this.numberWin(this.games[0].number)].color;
        for (var i = 1; i < 24; i++) {
            var el = this.games[i];
            if (this.arrAllNumbers[this.numberWin(el.number)].color !== tempColor) {
                break;
            }
            else {
                this.consecutiveNumbers.num++;
            }
        }
        if (this.consecutiveNumbers.num < this.consecutiveNumbers.required) {
            this.consecutiveNumbers.flag = false;
        }
    };
    AppComponent.prototype.counterFields = function () {
        this.fields.forEach(function (el) { return el.forEach(function (innEl) {
            innEl.num = 0;
            innEl.min = false;
        }); });
        this.arrNumbers.forEach(this.counterField.bind(this));
        // Находим max в областях
        this.fields.forEach(function (el) {
            var tempArr = [];
            var tempMin = 0;
            el.forEach(function (innEl) {
                tempArr.push(innEl.num);
            });
            tempMin = Math.min.apply(Math, tempArr);
            el.forEach(function (innEl) {
                if (innEl.num === tempMin) {
                    innEl.min = true;
                }
            });
        });
    };
    AppComponent.prototype.counterField = function (el) {
        var number = +el.number, count = el.count;
        switch (true) {
            case (number >= 1 && number <= 12):
                this.fields[0][0].num += count;
                break;
            case (number >= 13 && number <= 24):
                this.fields[0][1].num += count;
                break;
            case (number >= 25 && number <= 36):
                this.fields[0][2].num += count;
                break;
        }
        switch (true) {
            case ((number % 3) === 1):
                this.fields[1][0].num += count;
                break;
            case ((number % 3) === 2):
                this.fields[1][1].num += count;
                break;
            case ((number % 3) === 0):
                this.fields[1][2].num += count;
                break;
        }
        switch (true) {
            case (number >= 1 && number <= 18):
                this.fields[2][0].num += count;
                break;
            case (number >= 19 && number <= 36):
                this.fields[2][1].num += count;
                break;
        }
        switch (true) {
            case (number % 2 === 0):
                this.fields[3][0].num += count;
                break;
            case (number % 2 === 1):
                this.fields[3][1].num += count;
                break;
        }
    };
    AppComponent.prototype.clickCell = function (ind) {
        this.cellClicked =
            this.cellClicked === ind
                ? ''
                : ind;
    };
    AppComponent.prototype.timer = function () {
        var _this = this;
        var nowDate = new Date(), minutes = nowDate.getMinutes(), seconds = nowDate.getSeconds(), remainderOfDivision = minutes % 10;
        var needS, temp;
        temp = remainderOfDivision < 3
            ? 3
            : remainderOfDivision < 8
                ? 8
                : 13;
        needS = (temp - (minutes % 10)) * 60 - seconds;
        // this.timerFunc(needS);
        this.timerObj.id = setInterval(function () {
            needS--;
            _this.timerFunc(needS);
        }, 1000);
    };
    AppComponent.prototype.timerFunc = function (seconds) {
        if (seconds >= 0) {
            this.timerObj.seconds = seconds % 60;
            this.timerObj.minutes = Math.floor(seconds / 60);
        }
        else {
            clearInterval(this.timerObj.id);
            // Загружаем данные
            this.getGames();
        }
    };
    AppComponent.prototype.checkErrors = function () {
        var _this = this;
        var flag = true, arrErrors = [];
        this.games.forEach(function (el, ind, arr) {
            if (arr[ind - 1] && (arr[ind - 1].time - el.time) !== 600) {
                flag = false;
                arrErrors.push(ind);
            }
        });
        if (!flag) {
            this.flagError = true;
            console.clear();
            console.log('Ошибки! (' + arrErrors.length + ')');
            arrErrors.forEach(function (el) {
                console.log(_this.games[el]);
            });
        }
        else {
            this.flagError = false;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number_win_pipe__ = __webpack_require__("../../../../../src/app/number.win.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__number_win_pipe__["a" /* NumberWinPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/number.win.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberWinPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberWinPipe = (function () {
    function NumberWinPipe() {
    }
    NumberWinPipe.prototype.transform = function (value, args) {
        return value === '00' ? 37 : +value;
    };
    NumberWinPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Pipe */])({
            name: 'numberWin'
        })
    ], NumberWinPipe);
    return NumberWinPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map