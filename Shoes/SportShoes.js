var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SportShoes = /** @class */ (function (_super) {
    __extends(SportShoes, _super);
    //constructor
    function SportShoes(manufactor, model, price, size, color, producingCountry, hasLaces, day, month, year) {
        var _this = _super.call(this, manufactor, model, price, size, color, producingCountry, hasLaces) || this;
        _this.day = day;
        _this.month = month;
        _this.year = year;
        _this.productionDate = new Date(year, month, day);
        return _this;
    }
    Object.defineProperty(SportShoes.prototype, "day", {
        //getters
        get: function () {
            return this._day;
        },
        //setters
        set: function (value) {
            if ((value < 1) || (value > 31)) {
                throw new Error("Error! day must be between 1 and 31.");
            }
            else if (value % 1 != 0) {
                throw new Error("Error! day must be an integer.");
            }
            this._day = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SportShoes.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            if ((value < 1) || (value > 12)) {
                throw new Error("Error! month must be between 1 and 12.");
            }
            else if (value % 1 != 0) {
                throw new Error("Error! month must be an integer.");
            }
            this._month = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SportShoes.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            if ((value < 2000) || (value > 2019)) {
                throw new Error("Error! year must be between 2000 and 2019.");
            }
            else if (value % 1 != 0) {
                throw new Error("Error! year must be an integer.");
            }
            this._year = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    SportShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Date of production: " + this.productionDate.getDate() + '.' + (this.productionDate.getMonth() + 1) + "." + this.productionDate.getFullYear() + "<br>");
    };
    SportShoes.prototype.displayImage = function () {
        document.write("<img src='/images/sportshoes.jpg'>");
    };
    return SportShoes;
}(FlatShoes));
//# sourceMappingURL=SportShoes.js.map