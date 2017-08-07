webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__(257)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingComponent = (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () { };
    return PricingComponent;
}());
PricingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-pricing',
        template: __webpack_require__(258)
    }),
    __metadata("design:paramtypes", [])
], PricingComponent);

//# sourceMappingURL=pricing.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessComponent = (function () {
    function SuccessComponent(router) {
        this.router = router;
    }
    SuccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/orders']);
        }, 5000);
    };
    return SuccessComponent;
}());
SuccessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-success',
        template: __webpack_require__(259)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SuccessComponent);

var _a;
//# sourceMappingURL=success.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_hselection_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shoppingcart_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidaylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HolidaylistComponent = (function () {
    function HolidaylistComponent(activatedRoute, hselectionService, cartservice) {
        this.activatedRoute = activatedRoute;
        this.hselectionService = hselectionService;
        this.cartservice = cartservice;
        this.holidays = [];
    }
    HolidaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route = this.activatedRoute.snapshot.url[0].path;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) {
            _this.country = params['country'];
            _this.state = params['state'];
            if (_this.state == 'State') {
                _this.state = 'none';
            }
            _this.city = params['city'];
            if (_this.city == 'City') {
                _this.city = 'none';
            }
            _this.fromyear = params['fromyear'];
            _this.frommonth = params['frommonth'];
            _this.fromday = params['fromday'];
            _this.toyear = params['toyear'];
            _this.tomonth = params['tomonth'];
            _this.today = params['today'];
            var data = {
                country: _this.country,
                state: _this.state,
                city: _this.city,
                fromYear: _this.fromyear,
                fromMonth: _this.frommonth,
                fromDay: _this.fromday,
                toYear: _this.toyear,
                toMonth: _this.tomonth,
                toDay: _this.today
            };
            if (_this.route == 'freeholidaylist') {
                _this.hselectionService.getFreeHolidays(data)
                    .subscribe(function (holidays) {
                    console.log(holidays);
                    _this.holidays = holidays.theList;
                }, function (error) {
                    _this.errorMessage = error.json().errormessage;
                    console.log(_this.errorMessage);
                });
            }
            else if (_this.route == 'holidaylist') {
                _this.hselectionService.getHolidays(data)
                    .subscribe(function (holidays) {
                    _this.holidays = holidays.theList;
                    console.log(_this.holidays);
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    HolidaylistComponent.prototype.setholiday = function (holiday) {
        console.log(holiday);
        this.businessesClosed = holiday.businessesClosed;
        this.banksClosed = holiday.banksClosed;
        this.religiousHoliday = holiday.religiousHoliday;
        this.religion = holiday.religion;
    };
    return HolidaylistComponent;
}());
HolidaylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-holidaylist',
        template: __webpack_require__(260),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_hselection_service__["a" /* HselectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_hselection_service__["a" /* HselectionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _c || Object])
], HolidaylistComponent);

var _a, _b, _c;
//# sourceMappingURL=holidaylist.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hselection_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shoppingcart_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HselectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HselectionComponent = (function () {
    function HselectionComponent(hselectionService, cartservice, router) {
        this.hselectionService = hselectionService;
        this.cartservice = cartservice;
        this.router = router;
        this.myFromDateOptions = {
            height: '34px',
            width: '210px',
            disableSince: { year: 0, month: 0, day: 0 },
            alignSelectorRight: false,
            openSelectorTopOfInput: false,
            indicateInvalidDate: true,
            monthSelector: true,
            yearSelector: true,
            dateFormat: 'mm/dd/yyyy'
        };
        this.myToDateOptions = {
            height: '34px',
            width: '210px',
            disableUntil: { year: 0, month: 0, day: 0 },
            alignSelectorRight: false,
            openSelectorTopOfInput: false,
            indicateInvalidDate: true,
            monthSelector: true,
            yearSelector: true,
            dateFormat: 'mm/dd/yyyy'
        };
        this.selectedcountry = "Country";
        this.selectedstate = "State";
        this.selectedcity = "City";
        this.fromdateplaceholder = "From Date (MM/DD/YYYY)";
        this.todateplaceholder = "To Date (MM/DD/YYYY)";
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.holidays = [];
        this.showAdvDate = false;
        this.yearentry = false;
        this.fromDate = null;
        this.toDate = null;
        this.submitenabled = false;
    }
    HselectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.country) {
            this.selectedcountry = this.country;
            this.submitenabled = true;
        }
        if (this.state) {
            this.selectedstate = this.state;
        }
        if (this.city) {
            this.selectedcity = this.city;
        }
        this.hselectionService.getAllCountries().subscribe(function (countries) {
            _this.countries = countries.theList;
        });
        this.hselectionService.getYear().subscribe(function (year) {
            _this.currentyear = year.year;
        });
    };
    HselectionComponent.prototype.countrySelect = function (country) {
        var _this = this;
        this.hselectionService.getStates(country).subscribe(function (states) {
            _this.hselectionService.getCountryCites(country).subscribe(function (cities) {
                _this.cities = cities.theList;
                _this.states = states.theList;
                _this.selectedcountry = country;
                _this.selectedstate = "State";
                _this.selectedcity = "City";
                _this.submitenabled = true;
            });
        });
    };
    HselectionComponent.prototype.enablesubmit = function () {
        if (this.submitenabled && this.fromDate != null && this.toDate != null) {
            if (this.fromDate.year > 0 && this.toDate.year > 0) {
                return false;
            }
            else {
                return true;
            }
        }
        else if (this.submitenabled && this.yearselect > 1200 && this.yearselect < 9999) {
            return false;
        }
        else {
            return true;
        }
    };
    HselectionComponent.prototype.datecheck = function () {
        if (this.currentyear >= this.yearselect && this.yearselect != null) {
            return true;
        }
        else if (this.toDate != null) {
            if (this.currentyear >= this.toDate.year) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    HselectionComponent.prototype.stateSelect = function (state) {
        var _this = this;
        this.hselectionService.getCities(state, this.selectedcountry).subscribe(function (cities) {
            _this.cities = cities.theList;
            _this.selectedstate = state;
        });
    };
    HselectionComponent.prototype.citySelect = function (city) {
        this.selectedcity = city;
    };
    HselectionComponent.prototype.fetchHolidays = function () {
        if (!this.selectedstate) {
            this.selectedstate = 'none';
        }
        if (!this.selectedcity) {
            this.selectedcity = 'none';
        }
        if (this.yearentry) {
            console.log(this.toDate.year + "/" + this.toDate.month + "/" + this.toDate.day);
            console.log(this.fromDate.year + "/" + this.fromDate.month + "/" + this.fromDate.day);
            this.router.navigate(['/freeholidaylist', this.selectedcountry, this.selectedstate, this.selectedcity, this.fromDate.year, this.fromDate.month, this.fromDate.day, this.toDate.year, this.toDate.month, this.toDate.day]);
        }
        else {
            this.router.navigate(['/freeholidaylist', this.selectedcountry, this.selectedstate, this.selectedcity, this.yearselect, '1', '1', this.yearselect, '12', '31']);
        }
    };
    HselectionComponent.prototype.showDate = function () {
        this.showAdvDate = !this.showAdvDate;
        this.yearselect = null;
        this.fromDate = null;
        this.toDate = null;
        this.yearentry = !this.yearentry;
    };
    HselectionComponent.prototype.onFromDateChanged = function (event) {
        console.log(event.date);
        var toOptions = JSON.parse(JSON.stringify(this.myToDateOptions));
        toOptions.disableUntil = { year: event.date.year, month: event.date.month, day: event.date.day };
        this.myToDateOptions = toOptions;
        this.fromDate = event.date;
    };
    HselectionComponent.prototype.onToDateChanged = function (event) {
        console.log(event.date);
        var fromOptions = JSON.parse(JSON.stringify(this.myFromDateOptions));
        fromOptions.disableSince = { year: event.date.year, month: event.date.month, day: event.date.day };
        this.myFromDateOptions = fromOptions;
        this.toDate = event.date;
    };
    HselectionComponent.prototype.addtocart = function () {
        //check orders, if in orders go to holiday list, else add to cart
        var _this = this;
        //check if only one year is entered or date range, create from date and to date accordingly
        var data = {
            country: this.selectedcountry,
            state: this.selectedstate,
            city: this.selectedcity,
            fromYear: 0,
            fromMonth: 0,
            fromDay: 0,
            toYear: 0,
            toMonth: 0,
            toDay: 0
        };
        if (this.yearentry) {
            data.fromYear = this.fromDate.year;
            data.fromMonth = this.fromDate.month;
            data.fromDay = this.fromDate.day;
            data.toYear = this.toDate.year;
            data.toMonth = this.toDate.month;
            data.toDay = this.toDate.day;
        }
        else {
            data.fromYear = this.yearselect;
            data.fromMonth = 1;
            data.fromDay = 1;
            data.toYear = this.yearselect;
            data.toMonth = 12;
            data.toDay = 31;
        }
        console.log(data);
        this.cartservice.addItem(data);
        this.cartservice.getShoppingCart().subscribe(function (cartItems) {
            _this.cartnumber = cartItems.length;
            console.log("cartnumber" + _this.cartnumber);
        });
    };
    return HselectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], HselectionComponent.prototype, "country", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], HselectionComponent.prototype, "state", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], HselectionComponent.prototype, "city", void 0);
HselectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-hselection',
        template: __webpack_require__(261),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hselection_service__["a" /* HselectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hselection_service__["a" /* HselectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HselectionComponent);

var _a, _b, _c;
//# sourceMappingURL=hselection.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shoppingcart_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authenticationService, cartservice, route) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.cartservice = cartservice;
        this.route = route;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register'], { queryParams: { returnUrl: this.returnUrl } });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.useremail, this.model.password)
            .subscribe(function (result) {
            console.log(result);
            if (result === true) {
                _this.cartservice.updateLocalStorageToServer().subscribe(function (cartresult) {
                    if (cartresult === true) {
                        _this.router.navigate([_this.returnUrl]);
                    }
                    else {
                        console.log("Error while integrating carts");
                    }
                });
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (error) {
            console.log(error);
            _this.error = 'Username or password is incorrect';
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(262),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_order_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_payment_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = (function () {
    function OrderComponent(orderService, paymentservice) {
        this.orderService = orderService;
        this.paymentservice = paymentservice;
        this.orders = [];
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getuserorders().subscribe(function (userorders) {
            if (userorders) {
                _this.orders = userorders;
            }
            console.log(userorders);
        });
    };
    OrderComponent.prototype.getorderdetails = function (i) {
        this.cartitems = this.orders[i].cartItems;
    };
    OrderComponent.prototype.getpayment = function (val) {
        var _this = this;
        this.paymentservice.getPaymentDetails(val).subscribe(function (res) {
            console.log(res);
            _this.payment = res;
        });
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-order',
        template: __webpack_require__(264),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]) === "function" && _b || Object])
], OrderComponent);

var _a, _b;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shoppingcart_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, authenticationService, cartservice, route) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.cartservice = cartservice;
        this.route = route;
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log(this.returnUrl);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        console.log(this.model);
        this.authenticationService.register(this.model)
            .subscribe(function (result) {
            if (result === true) {
                _this.cartservice.updateLocalStorageToServer().subscribe(function (cartresult) {
                    if (cartresult === true) {
                        _this.router.navigate([_this.returnUrl]);
                    }
                    else {
                        console.log("Error while integrating carts");
                    }
                });
            }
            else {
                _this.error = 'Registration unsuccessful';
                _this.loading = false;
            }
        }, function (error) {
            console.log(error.json().code);
            if (error.json().code === 11000) {
                _this.error = 'Email ID already in use';
                _this.loading = false;
            }
            else {
                _this.error = 'Registration unsuccessful: Unknwon error';
                _this.loading = false;
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__(265),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shoppingcart_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingcartComponent = (function () {
    function ShoppingcartComponent(cartservice, router) {
        this.cartservice = cartservice;
        this.router = router;
        this.cartitems = [];
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.price = this.cartservice.getPricePerYear();
        this.cartservice.getShoppingCart().subscribe(function (usercartitems) {
            if (usercartitems) {
                console.log("shopping cart component");
                console.log(usercartitems);
            }
            _this.cartitems = usercartitems;
            _this.total = _this.totalprice();
            //console.log("shoppingcart component: " + this.cartitems[0].country);
        });
        console.log(this.total);
    };
    ShoppingcartComponent.prototype.removeallfromcart = function () {
        this.cartservice.clearItems();
        this.cartitems = [];
        this.cartnumber = 0;
    };
    ShoppingcartComponent.prototype.removefromcart = function (index) {
        var _this = this;
        console.log("delete index: " + index);
        this.cartservice.removeItem(index);
        this.cartitems.splice(index, 1);
        this.total = this.totalprice();
        this.cartservice.getShoppingCart().subscribe(function (cartItems) {
            _this.cartnumber = cartItems.length;
            console.log("cartnumber from delete:" + _this.cartnumber);
        });
    };
    ShoppingcartComponent.prototype.totalprice = function () {
        var total = 0;
        for (var i = 0; i < this.cartitems.length; i++) {
            total += (this.cartitems[i].toYear - this.cartitems[i].fromYear + 1) * this.price;
        }
        return total;
    };
    ShoppingcartComponent.prototype.checkout = function () {
        this.router.navigate(['/checkout']);
    };
    return ShoppingcartComponent;
}());
ShoppingcartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-shoppingcart',
        template: __webpack_require__(266),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ShoppingcartComponent);

var _a, _b;
//# sourceMappingURL=shoppingcart.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 159;


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(170);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Select Holiday Option';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(252),
        styles: [__webpack_require__(224)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_hselection_hselection_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gaurds_auth_gaurd__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_hselection_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_shoppingcart_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_holidaylist_holidaylist_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__equal_validator_directive__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_shoppingcart_shoppingcart_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_checkout_checkout_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_payment_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_order_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_common_success_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_common_failure_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_order_order_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_common_logout_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_mydatepicker__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_common_instructions_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_common_pricing_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_common_info_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// Define the routes
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_hselection_hselection_component__["a" /* HselectionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_holidaylist_holidaylist_component__["a" /* HolidaylistComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__equal_validator_directive__["a" /* CustomValidator */],
            __WEBPACK_IMPORTED_MODULE_17__components_shoppingcart_shoppingcart_component__["a" /* ShoppingcartComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_common_success_component__["a" /* SuccessComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_common_failure_component__["a" /* FailureComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_order_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_common_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_common_instructions_component__["a" /* InstructionsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_common_pricing_component__["a" /* PricingComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_common_info_component__["a" /* InfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_25_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routes */]) // Add routes to the app
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_hselection_service__["a" /* HselectionService */],
            __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_10__services_shoppingcart_service__["a" /* ShoppingcartService */],
            __WEBPACK_IMPORTED_MODULE_8__gaurds_auth_gaurd__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_19__services_payment_service__["a" /* PaymentService */],
            __WEBPACK_IMPORTED_MODULE_20__services_order_service__["a" /* OrderService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hselection_hselection_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_holidaylist_holidaylist_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shoppingcart_shoppingcart_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_checkout_checkout_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gaurds_auth_gaurd__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_success_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_failure_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_order_order_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_logout_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_common_instructions_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_common_pricing_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_common_info_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });














var routes = [
    {
        path: '',
        redirectTo: 'hselection',
        pathMatch: 'full'
    },
    {
        path: 'hselection',
        component: __WEBPACK_IMPORTED_MODULE_0__components_hselection_hselection_component__["a" /* HselectionComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_hselection_hselection_component__["a" /* HselectionComponent */]
    },
    {
        path: 'holidaylist/:country/:state/:city/:fromyear/:frommonth/:fromday/:toyear/:tomonth/:today',
        component: __WEBPACK_IMPORTED_MODULE_1__components_holidaylist_holidaylist_component__["a" /* HolidaylistComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__gaurds_auth_gaurd__["a" /* AuthGuard */]]
    },
    {
        path: 'freeholidaylist/:country/:state/:city/:fromyear/:frommonth/:fromday/:toyear/:tomonth/:today',
        component: __WEBPACK_IMPORTED_MODULE_1__components_holidaylist_holidaylist_component__["a" /* HolidaylistComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'shoppingcart',
        component: __WEBPACK_IMPORTED_MODULE_4__components_shoppingcart_shoppingcart_component__["a" /* ShoppingcartComponent */]
    },
    {
        path: 'checkout',
        component: __WEBPACK_IMPORTED_MODULE_5__components_checkout_checkout_component__["a" /* CheckoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__gaurds_auth_gaurd__["a" /* AuthGuard */]]
    },
    {
        path: 'success',
        component: __WEBPACK_IMPORTED_MODULE_7__components_common_success_component__["a" /* SuccessComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__gaurds_auth_gaurd__["a" /* AuthGuard */]]
    },
    {
        path: 'failure',
        component: __WEBPACK_IMPORTED_MODULE_8__components_common_failure_component__["a" /* FailureComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__gaurds_auth_gaurd__["a" /* AuthGuard */]]
    },
    {
        path: 'orders',
        component: __WEBPACK_IMPORTED_MODULE_9__components_order_order_component__["a" /* OrderComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__gaurds_auth_gaurd__["a" /* AuthGuard */]]
    },
    {
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_10__components_common_logout_component__["a" /* LogoutComponent */]
    },
    {
        path: 'instructions',
        component: __WEBPACK_IMPORTED_MODULE_11__components_common_instructions_component__["a" /* InstructionsComponent */]
    },
    {
        path: 'pricing',
        component: __WEBPACK_IMPORTED_MODULE_12__components_common_pricing_component__["a" /* PricingComponent */]
    },
    {
        path: 'info',
        component: __WEBPACK_IMPORTED_MODULE_13__components_common_info_component__["a" /* InfoComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shoppingcart_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authenticationService, router, cartservice, activatedRoute) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.router = router;
        this.cartservice = cartservice;
        this.activatedRoute = activatedRoute;
        console.log(this.cartnumber);
        this.route = this.activatedRoute.snapshot.url[0].path;
        if (this.route == "hselection" || this.route == "holidaylist" || this.route == "freeholidaylist") {
            this.selection = 1;
        }
        else if (this.route == "instructions") {
            this.selection = 2;
        }
        else if (this.route == "pricing") {
            this.selection = 3;
        }
        else if (this.route == "info") {
            this.selection = 4;
        }
        this.isloggedin = authenticationService.isLoggedIn();
        var curuser = authenticationService.currentUser();
        if (curuser !== false) {
            this.currentUser = curuser;
            console.log(this.currentUser);
        }
        //this.numitems = this.cartservice.getItemNum();
        this.cartservice.getShoppingCart().subscribe(function (cartItems) {
            _this.numitems = cartItems.length;
            console.log("cartnumber" + _this.numitems);
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function (event) {
        event.preventDefault();
        this.authenticationService.logout();
        this.router.navigate(['/logout']);
    };
    return NavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], NavbarComponent.prototype, "cartnumber", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(263),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CustomValidator = CustomValidator_1 = (function () {
    function CustomValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(CustomValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    CustomValidator.prototype.validate = function (c) {
        var v = c.value;
        var e = c.root.get(this.validateEqual);
        if (e && e.value != v && !this.isReverse) {
            return { validateEqual: false };
        }
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    return CustomValidator;
}());
CustomValidator = CustomValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* forwardRef */])(function () { return CustomValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Attribute */])('validateEqual')), __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Attribute */])('reverse')),
    __metadata("design:paramtypes", [String, String])
], CustomValidator);

var CustomValidator_1;
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingcartService = (function () {
    function ShoppingcartService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.setFromSavedCart();
    }
    ShoppingcartService.prototype.getShoppingCart = function () {
        var _this = this;
        //return this.shoppingCart;
        console.log("getting saved cart");
        if (this.authenticationService.isLoggedIn()) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
            headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
            // first setting shopping cart variable locally
            this.http.get('/api/shoppingcart/' + this.authenticationService.currentUser().email, options)
                .map(function (res) { return res.json(); }).subscribe(function (usercartitems) {
                if (usercartitems)
                    console.log(usercartitems);
                _this.shoppingCart = usercartitems;
            });
            // returning observable to calling component
            return this.http.get('/api/shoppingcart/' + this.authenticationService.currentUser().email, options)
                .map(function (res) { return res.json(); });
        }
        else {
            var savedShoppingCart = JSON.parse(localStorage.getItem('mea2necomm-shopping-cart'));
            if (savedShoppingCart) {
                this.shoppingCart = savedShoppingCart;
            }
            else {
                this.shoppingCart = [];
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(this.shoppingCart);
        }
    };
    ShoppingcartService.prototype.addItem = function (cartItem) {
        this.shoppingCart.push(cartItem);
        console.log("adding item to cart: " + this.shoppingCart);
        this.updateStorage();
    };
    ShoppingcartService.prototype.removeItem = function (index) {
        if (index < this.shoppingCart.length && index >= 0) {
            this.shoppingCart.splice(index, 1);
            this.updateStorage();
        }
    };
    ShoppingcartService.prototype.addItems = function (cartItems) {
        this.shoppingCart = this.shoppingCart.concat(cartItems);
        this.updateStorage();
    };
    ShoppingcartService.prototype.clearItems = function () {
        this.shoppingCart = [];
        this.updateStorage();
    };
    // this function updates the locally stored cart to the server
    // call on login
    ShoppingcartService.prototype.updateLocalStorageToServer = function () {
        //return Observable.of(true);
        var _this = this;
        if (this.authenticationService.isLoggedIn()) {
            var savedShoppingCart_1 = JSON.parse(localStorage.getItem('mea2necomm-shopping-cart'));
            if (savedShoppingCart_1) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
                headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
                /*
                this.http.get('/api/shoppingcart/'+ this.authenticationService.currentUser().email,options )
                  .map(res => res.json()).subscribe(usercartitems=> {
                  this.shoppingCart = usercartitems;
                  this.addItems(savedShoppingCart);
                  //resetting local storage
                  localStorage.setItem('mea2necomm-shopping-cart', JSON.stringify([]));
                });
                */
                //return Observable.of(true);
                return this.http.get('/api/shoppingcart/' + this.authenticationService.currentUser().email, options)
                    .map(function (res) {
                    var usercartitems = res.json();
                    _this.shoppingCart = usercartitems;
                    _this.addItems(savedShoppingCart_1);
                    //resetting local storage
                    localStorage.setItem('mea2necomm-shopping-cart', JSON.stringify([]));
                    return true;
                });
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(true);
            }
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].of(false);
        }
    };
    //function sets the local cart variable from either the server or the local storage
    ShoppingcartService.prototype.setFromSavedCart = function () {
        var _this = this;
        console.log("getting saved cart");
        if (this.authenticationService.isLoggedIn()) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
            headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
            // first setting shopping cart variable locally
            this.http.get('/api/shoppingcart/' + this.authenticationService.currentUser().email, options)
                .map(function (res) { return res.json(); }).subscribe(function (usercartitems) {
                if (usercartitems)
                    console.log(usercartitems);
                _this.shoppingCart = usercartitems;
            });
        }
        else {
            var savedShoppingCart = JSON.parse(localStorage.getItem('mea2necomm-shopping-cart'));
            if (savedShoppingCart) {
                this.shoppingCart = savedShoppingCart;
            }
            else {
                this.shoppingCart = [];
            }
        }
    };
    ShoppingcartService.prototype.updateStorage = function () {
        if (this.authenticationService.isLoggedIn()) {
            console.log("setting logged in users cart");
            var user = this.authenticationService.currentUser();
            // add to server
            //console.log(user);
            //console.log(JSON.stringify({ useremail: user.email, cartItems: this.shoppingCart }));
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });
            headers.append('Authorization', 'Bearer ' + this.authenticationService.getToken());
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
            //console.log(headers);
            this.http.post('/api/shoppingcart', JSON.stringify({ useremail: user.email, cartItems: this.shoppingCart }), options)
                .map(function (response) {
                if (response.status === 200) {
                    console.log("saved cart successfully to db");
                    // return true to indicate successful saved
                    return true;
                }
                else {
                    console.log("error while saving cart to db. Status: " + response.status);
                    // return false to indicate it did not save properly
                    return false;
                }
            })
                .catch(function (error, caught) {
                if (error.status === 401) {
                    console.log(error);
                }
                return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
            })
                .subscribe();
        }
        else {
            console.log("setting non-logged in users cart");
            localStorage.setItem('mea2necomm-shopping-cart', JSON.stringify(this.shoppingCart));
        }
    };
    ShoppingcartService.prototype.getItemNum = function () {
        return this.shoppingCart.length;
    };
    ShoppingcartService.prototype.getPricePerYear = function () {
        return 5;
    };
    return ShoppingcartService;
}());
ShoppingcartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], ShoppingcartService);

var _a, _b;
//# sourceMappingURL=shoppingcart.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".center-pills {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, ".scrollable-menu {\r\n  height: auto;\r\n  max-height: 200px;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.btn-block{\r\n  margin-bottom: 20px;\r\n}\r\n.form-control{\r\n  margin-left: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('mea2necomm-token');
    };
    AuthenticationService.prototype.saveToken = function (token) {
        console.log(token);
        localStorage.setItem('mea2necomm-token', token);
    };
    AuthenticationService.prototype.login = function (useremail, password) {
        var _this = this;
        return this.http.post('/api/login', { email: useremail, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                _this.saveToken(token);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        })
            .catch(function (error, caught) {
            if (error.status === 401) {
                console.log(error);
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    AuthenticationService.prototype.register = function (user) {
        var _this = this;
        console.log(user);
        return this.http.post('/api/register', { fname: user.firstName, lname: user.lastName, password: user.password, email: user.email })
            .map(function (res) {
            var token = res.json() && res.json().token;
            console.log(token);
            if (token) {
                _this.saveToken(token);
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error, caught) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('mea2necomm-token');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        if (token) {
            var payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    // Returns the user if user is logged in, or returns false if not logged in
    AuthenticationService.prototype.currentUser = function () {
        if (this.isLoggedIn()) {
            var token = this.getToken;
            var payload = JSON.parse(atob(token().split('.')[1]));
            var user = {
                name: payload.fname,
                email: payload.email
            };
            return user;
        }
        else
            return null;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"well\">\r\n<h1>\r\n  {{title}}\r\n</h1>\r\n<hr/>\r\n</div>-->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container well well-lg\">\r\n  <ul class=\"nav nav-pills center-pills\">\r\n    <li [ngClass]=\"{'active': paypalactive}\"><a (click)=\"paymethod('paypal')\">Paypal</a></li>\r\n    <li [ngClass]=\"{'active': creditactive}\"><a (click)=\"paymethod('credit')\">Credit Card </a></li>\r\n  </ul>\r\n  <div *ngIf=\"creditactive\" class=\"col-md-6 col-md-offset-3\">\r\n    <form (ngSubmit)=\"f.form.valid && pay()\" #f=\"ngForm\" novalidate>\r\n      <div class=\"form-group col-xs-12\" [ngClass]=\"{ 'has-error': f.submitted && !fname.valid }\">\r\n        <label for=\"fname\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"fname\" [(ngModel)]=\"firstname\" #fname=\"ngModel\" required />\r\n        <div *ngIf=\"f.submitted && !fname.valid\" class=\"help-block\">First Name is required</div>\r\n      </div>\r\n      <div class=\"form-group col-xs-12\" [ngClass]=\"{ 'has-error': f.submitted && !lname.valid }\">\r\n        <label for=\"lname\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"lname\" [(ngModel)]=\"lastname\" #lname=\"ngModel\" required />\r\n        <div *ngIf=\"f.submitted && !lname.valid\" class=\"help-block\">Last Name is required</div>\r\n      </div>\r\n      <div class=\"form-group col-xs-12\" [ngClass]=\"{ 'has-error': f.submitted && !cardnum.valid }\">\r\n        <label for=\"cardnum\">Card No.</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"cardnum\" [(ngModel)]=\"cardnumber\" #cardnum=\"ngModel\" required\r\n        pattern=\"^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$\"/>\r\n        <div *ngIf=\"f.submitted && !cardnum.valid\" class=\"help-block\">Invalid Card Number</div>\r\n      </div>\r\n      <div class=\"form-group col-xs-8\" [ngClass]=\"{ 'has-error': f.submitted && !expiry.valid }\">\r\n        <label for=\"expiry\">Expiry</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"expiry\" [(ngModel)]=\"expirydate\" #expiry=\"ngModel\" required\r\n               pattern=\"^(0[1-9]|1[0-2])\\/([0-9]{4})$\"/>\r\n        <div *ngIf=\"f.submitted && !expiry.valid\" class=\"help-block\">Invalid Card Number</div>\r\n      </div>\r\n      <div class=\"form-group col-xs-4\" [ngClass]=\"{ 'has-error': f.submitted && !code.valid }\">\r\n        <label for=\"code\">CVC</label>\r\n        <input type=\"text\" class=\"form-control\" name=\"code\" [(ngModel)]=\"cvcode\" #code=\"ngModel\" required\r\n               pattern=\"^([0-9]{3})$\"/>\r\n        <div *ngIf=\"f.submitted && !code.valid\" class=\"help-block\">Invalid Card Number</div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Pay</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div *ngIf=\"paypalactive\">\r\n    Paypal form here\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container well-lg\">\r\n  <div class=\"alert alert-dismissible alert-danger\">\r\n    <h1>Payment Unsuccessfull</h1>\r\n    <p>We are unable to process your payment. Please try again later. </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container well well-lg \">\r\n  <h4>General Information</h4>\r\n  <p>\r\n    <b>Disclaimer:</b>\r\n    We cannot guarantee that the information provided by this website is correct,\r\n    and we hereby disclaim all liability for any loss or inconvenience resulting\r\n    from its use.  In particular, it is impossible to predict precisely the dates\r\n    of many Muslim holidays inasmuch as these are determined annually by proclamations\r\n    from local religious authorities. Calculated dates for many Hindu and Buddhist\r\n    holidays are also approximate. In such cases, our calculations are usually correct\r\n    within a day.  In all cases it is advisable to cross check our results with the\r\n    relevant official agencies.</p>\r\n  <p>\r\n    <b>Request:</b>\r\n    If you notice any errors or omissions, or if you have ideas regarding how our service\r\n    might be improved, please let us know at <i>info@worldholidaysandevents.com</i>.\r\n  </p>\r\n  <p>\r\n    <b>For System Developers:</b>\r\n    The functionality of this website is available as a web service.  For details contact us at <i>info@worldholidaysandevents.com</i>.\r\n  </p>\r\n  <p>\r\n    <b>Acknowledgment:</b>\r\n    This website uses the <i>Calendrica</i> software package that is described in\r\n    <i>Calendrical Calculations: Third Edition</i>, by Nachum Dershowitz and\r\n    Edward M. Reingold, Cambridge University Press, 2008.\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container well well-lg \">\r\n  <h4>Instructions</h4>\r\n  <p>This website has the feature that a city appears in the lists\r\n    only if there are holidays or events that are unique to that city,\r\n    and a state (province, territory) appears in the lists only if\r\n    there are holidays or events that are unique to that state or to\r\n    some city within that state. This means that there are various ways\r\n    to get the holidays (and events) for a particular city. Two are described here.\r\n  </p>\r\n  <br>\r\n  <p>\r\n    <b>Method 1:</b> Select the country in which the city is located and get all\r\n    the holidays for that country. If any states are shown, look for the\r\n    state in which the city is located, and within that state look for the\r\n    city. The city celebrates all holidays associated with that city, state,\r\n    and country. If the state is shown, but not the city, the city celebrates\r\n    all the holidays associated with that state and country. If the state is\r\n    not shown, the city celebrates all the holidays associated with just the country.\r\n  </p>\r\n  <p>\r\n    If no states are shown but there are some cities, look for the city of interest.\r\n    If found, the city celebrates all holidays associated with that city and country.\r\n    If not, the city celebrates the holidays associated with just the country.\r\n  </p>\r\n  <br>\r\n  <p>\r\n    <b>Method 2:</b> \"Drill down\" through countries, states, and cities using the drop down\r\n    lists on the start page and apply the same principles as described above.\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<h1>Logout</h1>\r\n"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container well well-lg \">\r\n  <h4>Pricing Component!</h4>\r\n  <p>Pricing Component.</p>\r\n</div>\r\n"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container well-lg\">\r\n<div class=\"alert alert-dismissible alert-success\">\r\n  <h1>Payment Successfull</h1>\r\n  <p>Your payment was processed successfully. Please wait ... </p>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<app-hselection\r\n  [country] = \"this.country\"\r\n  [state] = \"this.state\"\r\n  [city] = \"this.city\"\r\n></app-hselection>\r\n<div class=\"container\" *ngIf=\"this.errorMessage\">\r\n  <div class=\"alert alert-dismissible alert-danger\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n    <strong>Oh snap!</strong> <a href=\"/\" class=\"alert-link\">Change a few things up</a> and try submitting again.\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!this.errorMessage\" class=\"container\">\r\n<table class=\"table table-striped table-hover \">\r\n  <thead>\r\n  <tr>\r\n    <th>Start Date</th>\r\n    <th>End Date</th>\r\n    <th>Name</th>\r\n    <th>Notes</th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr class=\"warning\" *ngFor=\"let holiday of holidays\">\r\n    <td>{{holiday.startDate}}</td>\r\n    <td>{{holiday.endDate}}</td>\r\n    <td>{{holiday.name}}</td>\r\n    <td><button type=\"button\" class=\"btn btn-info \" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"setholiday(holiday)\">Holiday Note</button></td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n<div id=\"myModal\" class=\"modal fade\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Note</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ul>\r\n          <li *ngIf=\"this.businessesClosed\">Bussinesses Closed : {{this.businessesClosed}}</li>\r\n          <li *ngIf=\"this.banksClosed\">Banks Closed : {{this.banksClosed}}</li>\r\n          <li *ngIf=\"this.religiousHoliday\">Religious Holiday : {{this.religiousHoliday}}</li>\r\n          <li *ngIf=\"this.religion\">Religion : {{this.religion}}</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<app-navbar [cartnumber] = \"cartnumber\"> </app-navbar>\r\n\r\n<div id=\"selectionbar\" class=\"panel-body\">\r\n  <h3 class=\"text-center\">\r\n    World Holidays and Events\r\n  </h3>\r\n  <hr/>\r\n<div class=\"container\">\r\n\r\n<div class=\"col-md-4\">\r\n<div class=\"dropdown\">\r\n  <button id=\"country\" class=\"btn btn-primary dropdown-toggle btn-block\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"btncountry\">\r\n    {{selectedcountry}}\r\n    <span class=\"caret\"></span>\r\n  </button>\r\n  <ul class=\"dropdown-menu scrollable-menu col-xs-12\" aria-labelledby=\"dLabel\">\r\n     <li *ngFor=\"let country of countries\" href=\"#\" (click)= countrySelect(country)>\r\n    \t{{country}}\r\n  \t</li>\r\n  </ul>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-md-4\">\r\n<div class=\"dropdown\">\r\n  <button id=\"state\" class=\"btn btn-primary dropdown-toggle btn-block\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"btnstate\">\r\n    {{selectedstate}}\r\n    <span class=\"caret\"></span>\r\n  </button>\r\n  <ul class=\"dropdown-menu scrollable-menu col-xs-12\" aria-labelledby=\"dLabel\">\r\n     <li *ngFor=\"let state of states\" href=\"#\" (click)= stateSelect(state)>\r\n    \t{{state}}\r\n  \t</li>\r\n  </ul>\r\n</div>\r\n</div>\r\n\r\n<div class=\"col-md-4\">\r\n<div class=\"dropdown\">\r\n  <button id=\"city\" class=\"btn btn-primary dropdown-toggle btn-block\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"btncity\">\r\n    {{selectedcity}}\r\n    <span class=\"caret\"></span>\r\n  </button>\r\n  <ul class=\"dropdown-menu scrollable-menu col-xs-12\" aria-labelledby=\"dLabel\">\r\n     <li *ngFor=\"let city of cities\" href=\"#\" (click)= citySelect(city)>\r\n    \t{{city}}\r\n  \t</li>\r\n  </ul>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form class=\"form-inline text-center\">\r\n      <fieldset>\r\n        <div>\r\n          <input [(ngModel)]=\"yearselect\" name=\"yearselect\" id=\"yearselect\" placeholder=\"Select Year (YYYY)\" class=\"form-control\" type=\"text\" [disabled]=\"yearentry\">\r\n          <button class=\"btn btn-primary form-control\" (click)=\"showDate()\" >Alternate time</button>\r\n        </div>\r\n        <div *ngIf=\"showAdvDate\" class=\"form-group\" >\r\n          <my-date-picker [options]=\"myFromDateOptions\" [placeholder]=\"fromdateplaceholder\" (dateChanged)=\"onFromDateChanged($event)\"></my-date-picker>\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n          <my-date-picker [options]=\"myToDateOptions\" [placeholder]=\"todateplaceholder\" (dateChanged)=\"onToDateChanged($event)\"></my-date-picker>\r\n          <br>\r\n          <br>\r\n        </div>\r\n        <div>\r\n          <button *ngIf=\"datecheck()\" type=\"submit\" class=\"btn btn-primary form-control\"  [disabled]=\"enablesubmit()\" (click)=\"fetchHolidays()\" >Get Holidays</button>\r\n          <button *ngIf=\"!datecheck()\" type=\"submit\" class=\"btn btn-primary form-control\"  [disabled]=\"enablesubmit()\" (click)=\"addtocart()\">&nbsp;Add to Cart</button>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n  <h2>Login</h2>\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !useremail.valid }\">\r\n      <label for=\"useremail\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"useremail\" [(ngModel)]=\"model.useremail\" #useremail=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !useremail.valid\" class=\"help-block\">Email is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n      <a class=\"btn btn-link\" (click)=\"register()\">Register</a>\r\n    </div>\r\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Holidays</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li [ngClass]=\"{active: selection == 1}\"><a href=\"#\" id=\"btnholidaysearch\">Search Holidays<span class=\"sr-only\">(current)</span></a></li>\r\n        <li [ngClass]=\"{active: selection == 2}\"><a href=\"/instructions\" >Instructions</a></li>\r\n        <li [ngClass]=\"{active: selection == 3}\"><a href=\"/pricing\" >Pricing</a></li>\r\n        <li [ngClass]=\"{active: selection == 4}\"><a href=\"/info\" >General Information</a></li>\r\n      </ul>\r\n\r\n\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li *ngIf=\"isloggedin\" class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Welcome {{currentUser.name}} <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li><a (click)=\"logout($event)\">Logout</a></li>\r\n            <li><a href=\"/orders\">Orders</a></li>\r\n          </ul>\r\n        </li>\r\n        <li *ngIf=\"cartnumber === undefined\"><a href=\"/shoppingcart\">Cart <span class=\"glyphicon glyphicon-shopping-cart badge\">{{this.numitems}}</span></a></li>\r\n        <li *ngIf=\"cartnumber !== undefined\"><a href=\"/shoppingcart\">Cart <span class=\"glyphicon glyphicon-shopping-cart badge\">{{cartnumber}}</span></a></li>\r\n        <li *ngIf=\"!isloggedin\"><a href=\"/login\">Login</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<app-navbar [cartnumber] = \"cartnumber\"> </app-navbar>\r\n<div class=\"container\" >\r\n  <h3 class=\"text-center\">\r\n    Orders\r\n  </h3>\r\n\r\n  <div *ngIf=\"orders.length>0\" class=\"container well well-lg\">\r\n    <table class=\"table table-striped table-hover \">\r\n      <thead>\r\n      <tr>\r\n        <th>Purchase Date</th>\r\n        <th>Order Details </th>\r\n        <th>Payment Details</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr class=\"warning\" *ngFor=\"let order of orders; let i = index\">\r\n        <td>{{order.date}}</td>\r\n        <td><a data-toggle=\"modal\" data-target=\"#orderModal\" (click)=\"getorderdetails(i)\">Order details </a></td>\r\n        <td><a data-toggle=\"modal\" data-target=\"#payModal\" (click)=\"getpayment(order.paymentid)\">{{order.total | currency:'USD':true:'.2-4'}}</a></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngIf=\"this.orders.length<=0\" class=\"container well well-lg\">\r\n    <p> You do not have any orders. <a href=\"/\">Buy</a> </p>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div id=\"orderModal\" class=\"modal fade\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Note</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"table table-striped table-hover \">\r\n          <thead>\r\n          <tr>\r\n            <th>Country</th>\r\n            <th>State</th>\r\n            <th>City</th>\r\n            <th>Range</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr class=\"warning\" *ngFor=\"let item of cartitems; let i = index\">\r\n            <td>{{item.country}}</td>\r\n            <td *ngIf=\"item.state != 'State'\">{{item.state}}</td>\r\n            <td *ngIf=\"item.state == 'State'\">No state Selected</td>\r\n            <td *ngIf=\"item.city != 'City'\">{{item.city}}</td>\r\n            <td *ngIf=\"item.city == 'City'\">No city selected</td>\r\n            <td>{{item.fromMonth}}/{{item.fromDay}}/{{item.fromYear}}&nbsp;-&nbsp;{{item.toMonth}}/{{item.toDay}}/{{item.toYear}} </td>\r\n            <td><button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\" [routerLink]=\"['/holidaylist',item.country,item.state,item.city,item.fromYear,item.fromMonth,item.fromDay,item.toYear,item.toMonth,item.toDay]\">View Holidays</button></td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"payModal\" class=\"modal fade\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Note</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ul>\r\n          <li *ngIf=\"payment!==undefined\">{{payment.create_time}}</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n  <h2>Register</h2>\r\n  <form (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\r\n      <label for=\"firstName\">First Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\r\n      <label for=\"lastName\">Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n      <label for=\"email\">Email Id</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"/>\r\n      <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required. Format : <i>abc@def.com</i></div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required validateEqual = \"confpassword\" reverse=\"true\" minlength=\"8\"/>\r\n      <div *ngIf=\"password.control.hasError('minlength')\" class=\"help-block\">Password isn't long enough.</div>\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confpassword.valid }\">\r\n      <label for=\"confpassword\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"confpassword\" [(ngModel)]=\"model.confpassword\" #confpassword=\"ngModel\" required validateEqual = \"password\" reverse=\"false\"/>\r\n      <div *ngIf=\"f.submitted && !confpassword.valid\" class=\"help-block\">Password mismatch</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n      <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<app-navbar [cartnumber] = \"cartnumber\"></app-navbar>\r\n<div class=\"panel-body\">\r\n  <h3 class=\"text-center\">Shopping Cart</h3>\r\n  <hr />\r\n  <div *ngIf=\"cartitems.length>0\" class=\"container well well-lg\">\r\n    <table class=\"table table-striped table-hover \">\r\n      <thead>\r\n      <tr>\r\n        <th>Country</th>\r\n        <th>State</th>\r\n        <th>City</th>\r\n        <th>Range</th>\r\n        <th>Price</th>\r\n        <th class=\"text-right\">Delete</th>\r\n\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr class=\"warning\" *ngFor=\"let item of cartitems; let i = index\">\r\n        <td>{{item.country}}</td>\r\n        <td *ngIf=\"item.state != 'State'\">{{item.state}}</td>\r\n        <td *ngIf=\"item.state == 'State'\">No state Selected</td>\r\n        <td *ngIf=\"item.city != 'City'\">{{item.city}}</td>\r\n        <td *ngIf=\"item.city == 'City'\">No city selected</td>\r\n        <td>{{item.fromMonth}}/{{item.fromDay}}/{{item.fromYear}}&nbsp;-&nbsp;{{item.toMonth}}/{{item.toDay}}/{{item.toYear}} </td>\r\n        <td>{{price*(item.toYear-item.fromYear+1) | currency:'USD':true:'.2-4'}}</td>\r\n        <td class=\"text-center\"><button type=\"button\" class=\"close text-center\" (click)=\"removefromcart(i)\" aria-hidden=\"true\">&times;</button></td>\r\n      </tr>\r\n      <tr class=\"info\">\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n        <td>Total:</td>\r\n        <td>{{total | currency:'USD':true:'.2-4'}}</td>\r\n        <td></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    <button type=\"button\" class=\"btn btn-info \"  (click)=\"checkout()\">Checkout</button>\r\n    <button type=\"button\" class=\"btn btn-info \" (click)=\"removeallfromcart()\">Empty cart</button>\r\n  </div>\r\n  <div *ngIf=\"cartitems.length<=0\" class=\"container well well-lg\">\r\n    <p> There are no items in your shopping cart, <a href=\"/\">Add Items</a> </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HselectionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HselectionService = (function () {
    function HselectionService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    // Get all posts from the API
    HselectionService.prototype.getAllCountries = function () {
        return this.http.get('/api/countries')
            .map(function (res) { return res.json(); });
    };
    HselectionService.prototype.getStates = function (country) {
        return this.http.get('/api/countryStates/' + country)
            .map(function (res) { return res.json(); });
    };
    HselectionService.prototype.getCountryCites = function (country) {
        return this.http.get('/api/countryCities/' + country).map(function (res) { return res.json(); });
    };
    HselectionService.prototype.getCities = function (state, country) {
        return this.http.get('/api/countryStateCities/' + state + '/' + country)
            .map(function (res) { return res.json(); });
    };
    HselectionService.prototype.getHolidays = function (data) {
        console.log(this.authentication.getToken());
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ' + this.authentication.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get('/api/holidays/' + data.country + '/' + data.state + '/' + data.city + '/' + data.fromYear + '/' + data.fromMonth + '/' + data.fromDay + '/' + data.toYear + '/' + data.toMonth + '/' + data.toDay, options)
            .map(function (res) { return res.json(); });
    };
    HselectionService.prototype.getFreeHolidays = function (data) {
        console.log(data);
        return this.http.get('/api/freeholidays/' + data.country + '/' + data.state + '/' + data.city + '/' + data.fromYear + '/' + data.fromMonth + '/' + data.fromDay + '/' + data.toYear + '/' + data.toMonth + '/' + data.toDay)
            .map(function (res) { return res.json(); });
    };
    HselectionService.prototype.getYear = function () {
        return this.http.get('/api/currentyear')
            .map(function (res) { return res.json(); });
    };
    return HselectionService;
}());
HselectionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], HselectionService);

var _a, _b;
//# sourceMappingURL=hselection.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shoppingcart_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderService = (function () {
    function OrderService(cartservice, authservice, http, router) {
        this.cartservice = cartservice;
        this.authservice = authservice;
        this.http = http;
        this.router = router;
    }
    OrderService.prototype.pushtoorders = function (paymentid, total) {
        var _this = this;
        this.cartservice.getShoppingCart().subscribe(function (cartitems) {
            var user = _this.authservice.currentUser();
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });
            headers.append('Authorization', 'Bearer ' + _this.authservice.getToken());
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
            _this.http.post('/api/orders', JSON.stringify({
                useremail: user.email,
                cartItems: cartitems,
                paymentid: paymentid,
                total: total
            }), options)
                .map(function (response) {
                if (response.status === 200) {
                    console.log("saved cart successfully to db");
                    // return true to indicate successful saved
                    return true;
                }
                else {
                    console.log("error while saving cart to db. Status: " + response.status);
                    // return false to indicate it did not save properly
                    return false;
                }
            })
                .catch(function (error, caught) {
                if (error.status === 401) {
                    console.log(error);
                }
                return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
            })
                .subscribe(function (res) {
                if (res == true) {
                    _this.cartservice.clearItems();
                    _this.router.navigate(['/success']);
                }
                else {
                    _this.router.navigate(['/failure']);
                }
            }, function (error) {
                console.log(error);
                _this.router.navigate(['/failure']);
            });
        });
    };
    OrderService.prototype.getuserorders = function () {
        if (this.authservice.isLoggedIn()) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Accept': 'application/json' });
            headers.append('Authorization', 'Bearer ' + this.authservice.getToken());
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
            var user = this.authservice.currentUser();
            return this.http.get('/api/orders/' + user.email, options)
                .map(function (res) { return res.json(); });
        }
    };
    return OrderService;
}());
OrderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object])
], OrderService);

var _a, _b, _c, _d;
//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentService = (function () {
    function PaymentService(http, orderservice, router) {
        this.http = http;
        this.orderservice = orderservice;
        this.router = router;
    }
    PaymentService.prototype.createpayment = function (data) {
        var _this = this;
        console.log(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        this.http.post('/api/create', JSON.stringify({
            expmon: data.expire_month,
            expyear: data.expire_year,
            fname: data.first_name,
            lname: data.last_name,
            method: data.method,
            cnum: data.number,
            total: data.total,
            type: data.type,
            cvv2: data.cvv2
        }), options)
            .map(function (res) {
            return res.json();
        }).catch(function (error, caught) {
            if (error.status === 400) {
                console.log(error);
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(error);
        })
            .subscribe(function (result) {
            console.log(result);
            _this.paymentid = result.id;
            if (result.state == "approved") {
                _this.orderservice.pushtoorders(_this.paymentid, data.total);
            }
            if (result.state == "failed") {
            }
        }, function (error) {
            console.log(error);
            _this.router.navigate(['/failure']);
        });
    };
    PaymentService.prototype.getPaymentDetails = function (paymentid) {
        console.log(paymentid);
        return this.http.get('/api/payment/' + paymentid).map(function (res) { return res.json(); });
    };
    return PaymentService;
}());
PaymentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__order_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PaymentService);

var _a, _b, _c;
//# sourceMappingURL=payment.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.gaurd.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shoppingcart_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_payment_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = (function () {
    function CheckoutComponent(cartservice, paymentservice) {
        this.cartservice = cartservice;
        this.paymentservice = paymentservice;
        this.paypalactive = false;
        this.creditactive = false;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.price = this.cartservice.getPricePerYear();
        this.cartservice.getShoppingCart().subscribe(function (cartitems) {
            _this.cartitems = cartitems;
            _this.total = _this.totalprice();
            console.log(_this.total);
        });
        //if user is logged in fetch from a different method
    };
    CheckoutComponent.prototype.totalprice = function () {
        var total = 0;
        for (var i = 0; i < this.cartitems.length; i++) {
            total += (this.cartitems[i].toYear - this.cartitems[i].fromYear + 1) * this.price;
        }
        return total;
    };
    CheckoutComponent.prototype.paymethod = function (type) {
        if (type === 'paypal') {
            this.paypalactive = true;
            this.creditactive = false;
        }
        if (type === 'credit') {
            this.creditactive = true;
            this.paypalactive = false;
        }
    };
    CheckoutComponent.prototype.getType = function (number) {
        var re = new RegExp("^4");
        if (number.match(re) != null)
            return "visa";
        // Mastercard
        re = new RegExp("^5[1-5]");
        if (number.match(re) != null)
            return "mastercard";
        // AMEX
        re = new RegExp("^3[47]");
        if (number.match(re) != null)
            return "amex";
        // Discover
        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (number.match(re) != null)
            return "discover";
        // Diners
        re = new RegExp("^36");
        if (number.match(re) != null)
            return "diners";
    };
    CheckoutComponent.prototype.pay = function () {
        var type = this.getType(this.cardnumber);
        console.log(type);
        if (this.creditactive) {
            var payment = {
                "total": this.total,
                "method": "credit",
                "type": type,
                "number": this.cardnumber,
                "expire_month": this.expirydate.split("/")[0],
                "expire_year": this.expirydate.split("/")[1],
                "first_name": this.firstname,
                "last_name": this.lastname,
                "cvv2": this.cvcode
            };
            this.paymentservice.createpayment(payment);
        }
        if (this.paypalactive) {
        }
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-checkout',
        template: __webpack_require__(253),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shoppingcart_service__["a" /* ShoppingcartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shoppingcart_service__["a" /* ShoppingcartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]) === "function" && _b || Object])
], CheckoutComponent);

var _a, _b;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FailureComponent = (function () {
    function FailureComponent() {
    }
    FailureComponent.prototype.ngOnInit = function () { };
    return FailureComponent;
}());
FailureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-failure',
        template: __webpack_require__(254)
    }),
    __metadata("design:paramtypes", [])
], FailureComponent);

//# sourceMappingURL=failure.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () { };
    return InfoComponent;
}());
InfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-info',
        template: __webpack_require__(255)
    }),
    __metadata("design:paramtypes", [])
], InfoComponent);

//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstructionsComponent = (function () {
    function InstructionsComponent() {
    }
    InstructionsComponent.prototype.ngOnInit = function () { };
    return InstructionsComponent;
}());
InstructionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-instructions',
        template: __webpack_require__(256)
    }),
    __metadata("design:paramtypes", [])
], InstructionsComponent);

//# sourceMappingURL=instructions.component.js.map

/***/ })

},[532]);
//# sourceMappingURL=main.bundle.js.map