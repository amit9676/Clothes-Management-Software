var Garments = /** @class */ (function () {
    //constructor
    function Garments(manufactor, model, price) {
        this.manufactor = manufactor;
        this.model = model;
        this.price = price;
    }
    Object.defineProperty(Garments.prototype, "price", {
        //getters
        get: function () {
            return this._price;
        },
        //setters
        set: function (value) {
            if (value <= 0) {
                throw new Error("Error! Value of a price must be positive!");
            }
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Garments.prototype, "brand", {
        get: function () {
            return "manufactor: " + this.manufactor + ", model: " + this.model + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    //methods
    Garments.prototype.displayDetails = function () {
        document.write("Manufactor: " + this.manufactor + "<br>");
        document.write("Model: " + this.model + "<br>");
        document.write("Price: " + this.price + " shekels<br>");
        document.write("Price without vat: " + this.getPriceWithoutVat() + " shekels<br>");
    };
    Garments.prototype.getPriceWithoutVat = function () {
        var vat = this.price / 100 * 17;
        var deVatPrice = this.price - vat;
        if (deVatPrice * 100 % 1 != 0) {
            return Number(deVatPrice.toFixed(2));
        }
        else {
            return deVatPrice;
        }
    };
    return Garments;
}());
//# sourceMappingURL=Garments.js.map