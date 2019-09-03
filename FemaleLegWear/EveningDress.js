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
var EveningDress = /** @class */ (function (_super) {
    __extends(EveningDress, _super);
    //constructor
    function EveningDress(manufactor, model, price, size, color, circumfence, length, hasBackCleavage, fabricMaterial) {
        var _this = _super.call(this, manufactor, model, price, size, color, circumfence, length, hasBackCleavage) || this;
        _this.fabricMaterial = fabricMaterial;
        return _this;
    }
    //methods
    EveningDress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Fabric's material: " + this.fabricMaterial + "<br>");
    };
    EveningDress.prototype.displayImage = function () {
        document.write("<img src='/images/eveningdress.jpg' style='margin-left:-60px;' width='400px'>");
    };
    return EveningDress;
}(Dress));
//# sourceMappingURL=EveningDress.js.map