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
var Heels = /** @class */ (function (_super) {
    __extends(Heels, _super);
    //constructor
    function Heels(manufactor, model, price, size, color, producingCountry, heelType) {
        var _this = _super.call(this, manufactor, model, price, size, color, producingCountry) || this;
        _this.heelType = heelType;
        return _this;
    }
    //methods
    Heels.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Heels type: " + this.heelType + "<br>");
    };
    Heels.prototype.displayImage = function () {
        document.write("<img src='/images/heels.jpg'>");
    };
    return Heels;
}(Shoes));
//# sourceMappingURL=Heels.js.map