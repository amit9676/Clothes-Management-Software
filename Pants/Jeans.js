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
var Jeans = /** @class */ (function (_super) {
    __extends(Jeans, _super);
    //constructor
    function Jeans(manufactor, model, price, size, color, pantsLength, hasTears) {
        var _this = _super.call(this, manufactor, model, price, size, color, pantsLength) || this;
        _this.hasTears = hasTears;
        return _this;
    }
    //methods
    Jeans.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Do the jeans have tears? " + this.hasTears + "<br>");
    };
    Jeans.prototype.displayImage = function () {
        document.write("<img src='/images/jeans.jpg' width='350px' style='margin-left: -50px;'>");
    };
    return Jeans;
}(Pants));
//# sourceMappingURL=Jeans.js.map