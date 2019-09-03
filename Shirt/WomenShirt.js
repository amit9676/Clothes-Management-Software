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
var WomenShirt = /** @class */ (function (_super) {
    __extends(WomenShirt, _super);
    //constructor
    function WomenShirt(manufactor, model, price, size, color, sleevesLength, fabricMaterial) {
        var _this = _super.call(this, manufactor, model, price, size, color, sleevesLength) || this;
        _this.fabricMaterial = fabricMaterial;
        return _this;
    }
    //methods
    WomenShirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Fabric's material: " + this.fabricMaterial + "<br>");
    };
    WomenShirt.prototype.displayImage = function () {
        document.write("<img src='/images/womenshirt.jpg' style='margin-left:-85px;'>");
    };
    return WomenShirt;
}(Shirt));
//# sourceMappingURL=WomenShirt.js.map