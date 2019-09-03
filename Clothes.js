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
var Clothes = /** @class */ (function (_super) {
    __extends(Clothes, _super);
    //constructor
    function Clothes(manufactor, model, price, size, color) {
        var _this = _super.call(this, manufactor, model, price) || this;
        _this.size = size;
        _this.color = color;
        return _this;
    }
    Object.defineProperty(Clothes.prototype, "size", {
        //getter
        get: function () {
            return this._size;
        },
        //setter
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! size must be between 1 and 300 centimeters.");
            }
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Clothes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Size: " + this.size + " cm<br>");
        document.write("Color: " + this.color + "<br>");
    };
    return Clothes;
}(Garments));
//# sourceMappingURL=Clothes.js.map