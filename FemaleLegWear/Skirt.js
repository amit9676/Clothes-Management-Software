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
var Skirt = /** @class */ (function (_super) {
    __extends(Skirt, _super);
    //constructor
    function Skirt(manufactor, model, price, size, color, circumfence, skirtType) {
        var _this = _super.call(this, manufactor, model, price, size, color, circumfence) || this;
        _this.skirtType = skirtType;
        return _this;
    }
    //methods
    Skirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Skirt's type: " + this.skirtType + "<br>");
    };
    Skirt.prototype.displayImage = function () {
        document.write("<img src='/images/skirt.jpg' width='350' height='350'>");
    };
    return Skirt;
}(FemaleLegWear));
//# sourceMappingURL=Skirt.js.map