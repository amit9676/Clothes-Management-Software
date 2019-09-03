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
var Coat = /** @class */ (function (_super) {
    __extends(Coat, _super);
    //constructor
    function Coat(manufactor, model, price, size, color, fabricThickness, rainCoat) {
        var _this = _super.call(this, manufactor, model, price, size, color, fabricThickness) || this;
        _this.rainCoat = rainCoat;
        return _this;
    }
    //methods
    Coat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Is the coat rain resistant? " + this.rainCoat + "<br>");
    };
    Coat.prototype.displayImage = function () {
        document.write("<img src='/images/coat.jpg' width='20%' height='10%'>");
    };
    return Coat;
}(OuterWear));
//# sourceMappingURL=Coat.js.map