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
var Dress = /** @class */ (function (_super) {
    __extends(Dress, _super);
    //constructor
    function Dress(manufactor, model, price, size, color, circumfence, length, hasBackCleavage) {
        var _this = _super.call(this, manufactor, model, price, size, color, circumfence) || this;
        _this.length = length;
        _this.hasBackCleavage = hasBackCleavage;
        return _this;
    }
    Object.defineProperty(Dress.prototype, "length", {
        //getters
        get: function () {
            return this._length;
        },
        //setters
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! length must be between 1  and 300 centimeters.");
            }
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    Dress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Length: " + this.length + " cm<br>");
        document.write("Does the dress has back's cleavage? " + this.hasBackCleavage + "<br>");
    };
    Dress.prototype.displayImage = function () {
        document.write("<img src='/images/dress.jpg' width='20%'>");
    };
    return Dress;
}(FemaleLegWear));
//# sourceMappingURL=Dress.js.map