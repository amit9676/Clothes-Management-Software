class ButtonShirt extends Shirt
{
    //data members
    private _numOfButtons: number;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, sleevesLength: number, numOfButtons: number)
    {
        super(manufactor, model, price, size, color, sleevesLength);
        this.numOfButtons = numOfButtons;
    }

    public get numOfButtons(): number
    {
        return this._numOfButtons;
    }

    public set numOfButtons(value: number)
    {
        if ((value < 0) || (value > 10))
        {
            throw new Error("Error! number of buttons must be between 0 and 10.");
        }
        else if (value % 1 != 0) {
            throw new Error("Error! number of buttons must be an integer.");
        }
        this._numOfButtons = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Number of buttons: " + this.numOfButtons + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/buttonshirt.jpg' width='320px'>");
    }
}