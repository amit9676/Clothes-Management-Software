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
var ButtonShirt = /** @class */ (function (_super) {
    __extends(ButtonShirt, _super);
    //constructor
    function ButtonShirt(manufactor, model, price, size, color, sleevesLength, numOfButtons) {
        var _this = _super.call(this, manufactor, model, price, size, color, sleevesLength) || this;
        _this.numOfButtons = numOfButtons;
        return _this;
    }
    Object.defineProperty(ButtonShirt.prototype, "numOfButtons", {
        get: function () {
            return this._numOfButtons;
        },
        set: function (value) {
            if ((value < 0) || (value > 10)) {
                throw new Error("Error! number of buttons must be between 0 and 10.");
            }
            else if (value % 1 != 0) {
                throw new Error("Error! number of buttons must be an integer.");
            }
            this._numOfButtons = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    ButtonShirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Number of buttons: " + this.numOfButtons + "<br>");
    };
    ButtonShirt.prototype.displayImage = function () {
        document.write("<img src='/images/buttonshirt.jpg' width='320px'>");
    };
    return ButtonShirt;
}(Shirt));
//# sourceMappingURL=ButtonShirt.js.map