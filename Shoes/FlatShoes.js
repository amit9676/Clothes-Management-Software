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
var FlatShoes = /** @class */ (function (_super) {
    __extends(FlatShoes, _super);
    //constructor
    function FlatShoes(manufactor, model, price, size, color, producingCountry, hasLaces) {
        var _this = _super.call(this, manufactor, model, price, size, color, producingCountry) || this;
        _this.hasLaces = hasLaces;
        return _this;
    }
    //methods
    FlatShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Do the shoes have laces? " + this.hasLaces + "<br>");
    };
    return FlatShoes;
}(Shoes));
//# sourceMappingURL=FlatShoes.js.map