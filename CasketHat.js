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
var CasketHat = /** @class */ (function (_super) {
    __extends(CasketHat, _super);
    //constructor
    function CasketHat(manufactor, model, price, size, color, diameter, hasAdvertPrint) {
        var _this = _super.call(this, manufactor, model, price, size, color, diameter) || this;
        _this.hasAdvertPrint = hasAdvertPrint;
        return _this;
    }
    //methods
    CasketHat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Does the casket has printed advertisment? " + this.hasAdvertPrint + "<br>");
    };
    CasketHat.prototype.displayImage = function () {
        document.write("<img src='/images/caskethat.jpg'>");
    };
    return CasketHat;
}(Hat));
//# sourceMappingURL=CasketHat.js.map