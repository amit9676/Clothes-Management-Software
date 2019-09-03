class TShirt extends Shirt
{
    //data members
    private _shirtPrinting: string;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, sleevesLength: number, shirtPrinting: string = null)
    {
        super(manufactor, model, price, size, color, sleevesLength);
        this.shirtPrinting = shirtPrinting;
    }

    //setters
    public get shirtPrinting(): string
    {
        return this._shirtPrinting;
    }

    public set shirtPrinting(value: string)
    {
        if (value === '')
        {
            this._shirtPrinting = null;
        }
        else
        {
            this._shirtPrinting = value;
        }
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Shirt's printing: " + this.shirtPrinting + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/tshirt.jpg' width='300px'>");
    }

}