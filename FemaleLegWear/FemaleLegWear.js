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
var FemaleLegWear = /** @class */ (function (_super) {
    __extends(FemaleLegWear, _super);
    //constructor
    function FemaleLegWear(manufactor, model, price, size, color, circumfence) {
        var _this = _super.call(this, manufactor, model, price, size, color) || this;
        _this.circumfence = circumfence;
        return _this;
    }
    Object.defineProperty(FemaleLegWear.prototype, "circumfence", {
        //getters
        get: function () {
            return this._circumfence;
        },
        //setters
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! circumfence must be between 1 and 300 centimeters.");
            }
            this._circumfence = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    FemaleLegWear.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Circumfence: " + this.circumfence + " cm<br>");
    };
    return FemaleLegWear;
}(Clothes));
//# sourceMappingURL=FemaleLegWear.js.map