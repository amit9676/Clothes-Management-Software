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
var ReadingGlasses = /** @class */ (function (_super) {
    __extends(ReadingGlasses, _super);
    //constructor
    function ReadingGlasses(manufactor, model, price, frameColor, safeReadingDistance) {
        var _this = _super.call(this, manufactor, model, price, frameColor) || this;
        _this.safeReadingDistance = safeReadingDistance;
        return _this;
    }
    Object.defineProperty(ReadingGlasses.prototype, "safeReadingDistance", {
        //getter
        get: function () {
            return this._safeReadingDistance;
        },
        //setter
        set: function (value) {
            if ((value <= 0) || (value > 100)) {
                throw new Error("Error! safe reading distance must be between 1 and 100 centimeters.");
            }
            this._safeReadingDistance = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    ReadingGlasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Safe reading distance: " + this.safeReadingDistance + " cm<br>");
    };
    ReadingGlasses.prototype.displayImage = function () {
        document.write("<img src='/images/readingglasses.jpg'>");
    };
    return ReadingGlasses;
}(Glasses));
//# sourceMappingURL=ReadingGlasses.js.map