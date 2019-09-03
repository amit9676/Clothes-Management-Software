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
var Jacket = /** @class */ (function (_super) {
    __extends(Jacket, _super);
    //constructor
    function Jacket(manufactor, model, price, size, color, fabricThickness, numOfPockets) {
        var _this = _super.call(this, manufactor, model, price, size, color, fabricThickness) || this;
        _this.numOfPockets = numOfPockets;
        return _this;
    }
    Object.defineProperty(Jacket.prototype, "numOfPockets", {
        //getter
        get: function () {
            return this._numOfPockets;
        },
        //setter
        set: function (value) {
            if ((value < 0) || (value > 10)) {
                throw new Error("Error! number of pockets must be between 0 and 10.");
            }
            else if (value % 1 != 0) {
                throw new Error("Error! number of pockers must be an integer.");
            }
            this._numOfPockets = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    Jacket.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Number of pockets: " + this.numOfPockets + "<br>");
    };
    Jacket.prototype.displayImage = function () {
        document.write("<img src='/images/jacket.jpg' width='20%' height='20%'>");
        //document.write("<img src='/images/jacket.jpg'>");
    };
    return Jacket;
}(OuterWear));
//# sourceMappingURL=Jacket.js.map