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
var TShirt = /** @class */ (function (_super) {
    __extends(TShirt, _super);
    //constructor
    function TShirt(manufactor, model, price, size, color, sleevesLength, shirtPrinting) {
        if (shirtPrinting === void 0) { shirtPrinting = null; }
        var _this = _super.call(this, manufactor, model, price, size, color, sleevesLength) || this;
        _this.shirtPrinting = shirtPrinting;
        return _this;
    }
    Object.defineProperty(TShirt.prototype, "shirtPrinting", {
        //setters
        get: function () {
            return this._shirtPrinting;
        },
        set: function (value) {
            if (value === '') {
                this._shirtPrinting = null;
            }
            else {
                this._shirtPrinting = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    //methods
    TShirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Shirt's printing: " + this.shirtPrinting + "<br>");
    };
    TShirt.prototype.displayImage = function () {
        document.write("<img src='/images/tshirt.jpg' width='300px'>");
    };
    return TShirt;
}(Shirt));
//# sourceMappingURL=TShirt.js.map