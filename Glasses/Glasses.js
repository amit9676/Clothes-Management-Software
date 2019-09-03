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
var Glasses = /** @class */ (function (_super) {
    __extends(Glasses, _super);
    //constructor
    function Glasses(manufactor, model, price, frameColor) {
        var _this = _super.call(this, manufactor, model, price) || this;
        _this.frameColor = frameColor;
        return _this;
    }
    //methods
    Glasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Frame color: " + this.frameColor + "<br>");
    };
    return Glasses;
}(Garments));
//# sourceMappingURL=Glasses.js.map