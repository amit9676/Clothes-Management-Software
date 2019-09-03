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
var OuterWear = /** @class */ (function (_super) {
    __extends(OuterWear, _super);
    //constructor
    function OuterWear(manufactor, model, price, size, color, fabricThickness) {
        var _this = _super.call(this, manufactor, model, price, size, color) || this;
        _this.fabricThickness = fabricThickness;
        return _this;
    }
    Object.defineProperty(OuterWear.prototype, "fabricThickness", {
        //getter
        get: function () {
            return this._fabricThickness;
        },
        //setter
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! fabric's thickness must be between 1 and 300 centimeters.");
            }
            this._fabricThickness = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    OuterWear.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Fabric's thickness: " + this.fabricThickness + " cm<br>");
    };
    return OuterWear;
}(Clothes));
//# sourceMappingURL=OuterWear.js.map