abstract class Garments
{
    //data members
    public manufactor: string;
    public model: string;
    private _price: number;

    //constructor
    public constructor(manufactor: string, model: string, price: number)
    {
        this.manufactor = manufactor;
        this.model = model;
        this.price = price;
    }

    //getters
    public get price(): number
    {
        return this._price;
    }

    public get brand(): string
    {
        return "manufactor: " + this.manufactor + ", model: " + this.model + "<br>";
    }

    //setters
    public set price(value: number)
    {
        if (value <= 0)
        {
            throw new Error("Error! Value of a price must be positive!");
        }

        this._price = value;
    }

    //methods
    public displayDetails(): void
    {
        document.write("Manufactor: " + this.manufactor + "<br>");
        document.write("Model: " + this.model + "<br>");
        document.write("Price: " + this.price + " shekels<br>");
        document.write("Price without vat: " + this.getPriceWithoutVat() + " shekels<br>");
    }

    public abstract displayImage(): void

    public getPriceWithoutVat(): Number
    {
        let vat = this.price / 100 * 17;
        let deVatPrice = this.price - vat;

        if (deVatPrice * 100 % 1 != 0) {
            return Number(deVatPrice.toFixed(2));
        }
        else
        {
            return deVatPrice;
        }
    }
}