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
var ElegantShoes = /** @class */ (function (_super) {
    __extends(ElegantShoes, _super);
    //constructor
    function ElegantShoes(manufactor, model, price, size, color, producingCountry, hasLaces, materialType) {
        var _this = _super.call(this, manufactor, model, price, size, color, producingCountry, hasLaces) || this;
        _this.materialType = materialType;
        return _this;
    }
    //methods
    ElegantShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Material's type: " + this.materialType + "<br>");
    };
    ElegantShoes.prototype.displayImage = function () {
        document.write("<img src='/images/elegantshoes.jpg'>");
    };
    return ElegantShoes;
}(FlatShoes));
//# sourceMappingURL=ElegantShoes.js.map