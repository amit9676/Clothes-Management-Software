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
var TopHat = /** @class */ (function (_super) {
    __extends(TopHat, _super);
    //constructor
    function TopHat(manufactor, model, price, size, color, diameter, height) {
        var _this = _super.call(this, manufactor, model, price, size, color, diameter) || this;
        _this.height = height;
        return _this;
    }
    Object.defineProperty(TopHat.prototype, "height", {
        //getter
        get: function () {
            return this._height;
        },
        //setter
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! height must be between 1  and 300 centimeters.");
            }
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    TopHat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Height: " + this.height + " cm<br>");
    };
    TopHat.prototype.displayImage = function () {
        document.write("<img src='/images/tophat.jpg'>");
    };
    return TopHat;
}(Hat));
//# sourceMappingURL=TopHat.js.map