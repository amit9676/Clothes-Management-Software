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
var Hat = /** @class */ (function (_super) {
    __extends(Hat, _super);
    //constructor
    function Hat(manufactor, model, price, size, color, diameter) {
        var _this = _super.call(this, manufactor, model, price, size, color) || this;
        _this.diameter = diameter;
        return _this;
    }
    Object.defineProperty(Hat.prototype, "diameter", {
        //getter
        get: function () {
            return this._diameter;
        },
        //setter
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! diameter must be between 1 and 300 centimeters!");
            }
            this._diameter = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    Hat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Diameter: " + this.diameter + " cm<br>");
    };
    return Hat;
}(Clothes));
//# sourceMappingURL=Hat.js.map