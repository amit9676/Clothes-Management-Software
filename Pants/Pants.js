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
var Pants = /** @class */ (function (_super) {
    __extends(Pants, _super);
    //constructor
    function Pants(manufactor, model, price, size, color, pantsLength) {
        var _this = _super.call(this, manufactor, model, price, size, color) || this;
        _this.pantsLength = pantsLength;
        return _this;
    }
    Object.defineProperty(Pants.prototype, "pantsLength", {
        //getters
        get: function () {
            return this._pantsLength;
        },
        //setters
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! pants length must be between 1 and 300 centimeters.");
            }
            this._pantsLength = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    Pants.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Pants's length: " + this.pantsLength + " cm<br>");
    };
    return Pants;
}(Clothes));
//# sourceMappingURL=Pants.js.map