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
var Shoes = /** @class */ (function (_super) {
    __extends(Shoes, _super);
    //constructor
    function Shoes(manufactor, model, price, size, color, producingCountry) {
        var _this = _super.call(this, manufactor, model, price, size, color) || this;
        _this.producingCountry = producingCountry;
        return _this;
    }
    //methods
    Shoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Producing country: " + this.producingCountry + "<br>");
    };
    return Shoes;
}(Clothes));
//# sourceMappingURL=Shoes.js.map