abstract class Pants extends Clothes
{
    //data members
    private _pantsLength: number;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, pantsLength: number)
    {
        super(manufactor, model, price, size, color);
        this.pantsLength = pantsLength;
    }

    //getters
    public get pantsLength(): number
    {
        return this._pantsLength;
    }

    //setters
    public set pantsLength(value: number)
    {
        if ((value <= 0) || (value > 300))
        {
            throw new Error("Error! pants length must be between 1 and 300 centimeters.");
        }

        this._pantsLength = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Pants's length: " + this.pantsLength + " cm<br>");
    }

    public abstract displayImage(): void
}