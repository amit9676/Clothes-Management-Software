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
var Shirt = /** @class */ (function (_super) {
    __extends(Shirt, _super);
    //constructor
    function Shirt(manufactor, model, price, size, color, sleevesLength) {
        var _this = _super.call(this, manufactor, model, price, size, color) || this;
        _this.sleevesLength = sleevesLength;
        return _this;
    }
    Object.defineProperty(Shirt.prototype, "sleevesLength", {
        //getters
        get: function () {
            return this._sleevesLength;
        },
        //setters
        set: function (value) {
            if ((value <= 0) || (value >= 300)) {
                throw new Error("Error! sleeves length must be between 1 and 300 centimeters.");
            }
            this._sleevesLength = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    Shirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Sleeves length: " + this.sleevesLength + " cm<br>");
    };
    return Shirt;
}(Clothes));
//# sourceMappingURL=Shirt.js.map