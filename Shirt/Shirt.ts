abstract class Shirt extends Clothes
{
    //data members
    private _sleevesLength: number;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, sleevesLength: number)
    {
        super(manufactor, model, price, size, color);
        this.sleevesLength = sleevesLength;
    }

    //getters
    public get sleevesLength(): number
    {
        return this._sleevesLength;
    }

    //setters
    public set sleevesLength(value: number)
    {
        if ((value <= 0) || (value >= 300))
        {
            throw new Error("Error! sleeves length must be between 1 and 300 centimeters.");
        }
        this._sleevesLength = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Sleeves length: " + this.sleevesLength + " cm<br>");
    }

    public abstract displayImage():void
}