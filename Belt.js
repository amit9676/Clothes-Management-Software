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
var Belt = /** @class */ (function (_super) {
    __extends(Belt, _super);
    //constructor
    function Belt(manufactor, model, price, beltColor, buckleColor, buckleMatrial, height, length, width) {
        var _this = _super.call(this, manufactor, model, price) || this;
        _this.beltColor = beltColor;
        _this.buckleColor = buckleColor;
        _this.buckleMatrial = buckleMatrial;
        _this.dimentions = new Dimentions(height, length, width);
        return _this;
    }
    //methods
    Belt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Belt color: " + this.beltColor + "<br>");
        document.write("Buckle color: " + this.buckleColor + "<br>");
        document.write("Buckle matrial: " + this.buckleMatrial + "<br>");
        document.write("Belt Dimentions: ");
        this.dimentions.displayDetails();
        document.write("<br>");
    };
    Belt.prototype.displayImage = function () {
        document.write("<img src='/images/belt.jpg'>");
    };
    return Belt;
}(Garments));
//# sourceMappingURL=Belt.js.map