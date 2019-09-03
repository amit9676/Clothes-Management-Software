abstract class OuterWear extends Clothes
{
    //data members
    private _fabricThickness: number;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, fabricThickness: number)
    {
        super(manufactor, model, price, size, color);
        this.fabricThickness = fabricThickness;
    }

    //getter
    public get fabricThickness(): number
    {
        return this._fabricThickness;
    }

    //setter
    public set fabricThickness(value: number)
    {
        if ((value <= 0) || (value > 300))
        {
            throw new Error("Error! fabric's thickness must be between 1 and 300 centimeters.");
        }

        this._fabricThickness = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Fabric's thickness: " + this.fabricThickness + " cm<br>");
    }

    public abstract displayImage():void
}