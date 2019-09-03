var Dimentions = /** @class */ (function () {
    //constructor
    function Dimentions(height, length, width) {
        this.height = height;
        this.length = length;
        this.width = width;
    }
    Object.defineProperty(Dimentions.prototype, "height", {
        //getters
        get: function () {
            return this._height;
        },
        //setters
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! height must be between 1  and 300 centimeters.");
            }
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimentions.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! length must be between 1  and 300 centimeters.");
            }
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimentions.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if ((value <= 0) || (value > 300)) {
                throw new Error("Error! width must be between 1  and 300 centimeters");
            }
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    //methods
    Dimentions.prototype.displayDetails = function () {
        document.write("height: " + this.height + " cm, length: " + this.length + " cm, width: " + this.length + " cm");
    };
    return Dimentions;
}());
//# sourceMappingURL=Dimentions.js.map