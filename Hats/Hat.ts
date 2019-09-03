abstract class Hat extends Clothes
{
    //data members
    private _diameter: number

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, diameter: number)
    {
        super(manufactor, model, price, size, color);
        this.diameter = diameter;
    }

    //getter
    public get diameter(): number
    {
        return this._diameter;
    }

    //setter
    public set diameter(value: number)
    {
        if ((value <= 0) || (value > 300))
        {
            throw new Error("Error! diameter must be between 1 and 300 centimeters.");
        }

        this._diameter = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Diameter: " + this.diameter + " cm<br>")
    }

    public abstract displayImage():void
}