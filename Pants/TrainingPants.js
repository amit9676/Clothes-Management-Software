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
var TrainingPants = /** @class */ (function (_super) {
    __extends(TrainingPants, _super);
    //constructor
    function TrainingPants(manufactor, model, price, size, color, pantsLength, numOfPockets) {
        var _this = _super.call(this, manufactor, model, price, size, color, pantsLength) || this;
        _this.numOfPockets = numOfPockets;
        return _this;
    }
    Object.defineProperty(TrainingPants.prototype, "numOfPockets", {
        //getters
        get: function () {
            return this._numOfPockets;
        },
        //setters
        set: function (value) {
            if ((value < 0) || (value > 10)) {
                throw new Error("Error! number of pockers must be between 0 and 10.");
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
    TrainingPants.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("Number of pockets: " + this.numOfPockets + "<br>");
    };
    TrainingPants.prototype.displayImage = function () {
        document.write("<img src='/images/trainingpants.jpg' width='350px' style='margin-left:-50px;'>");
    };
    return TrainingPants;
}(Pants));
//# sourceMappingURL=TrainingPants.js.map