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
var ComfortShoes = /** @class */ (function (_super) {
    __extends(ComfortShoes, _super);
    //constructor
    function ComfortShoes(manufactor, model, price, size, color, producingCountry, hasLaces, hasFootHold) {
        var _this = _super.call(this, manufactor, model, price, size, color, producingCountry, hasLaces) || this;
        _this.hasFootHold = hasFootHold;
        return _this;
    }
    //methods
    ComfortShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Do the shoes have Foot Holds? " + this.hasFootHold + "<br>");
    };
    ComfortShoes.prototype.displayImage = function () {
        document.write("<img src='/images/comfortshoes.jpg'>");
    };
    return ComfortShoes;
}(FlatShoes));
//# sourceMappingURL=ComfortShoes.js.map