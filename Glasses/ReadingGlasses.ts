class ReadingGlasses extends Glasses
{
    //data members
    private _safeReadingDistance: number

    //constructor
    public constructor(manufactor: string, model: string, price: number, frameColor: string, safeReadingDistance: number)
    {
        super(manufactor, model, price, frameColor);
        this.safeReadingDistance = safeReadingDistance;
    }

    //getter
    public get safeReadingDistance(): number
    {
        return this._safeReadingDistance;
    }

    //setter
    public set safeReadingDistance(value: number)
    {
        if ((value <= 0) || (value > 100))
        {
            throw new Error("Error! safe reading distance must be between 1 and 100 centimeters.");
        }

        this._safeReadingDistance = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Safe reading distance: " + this.safeReadingDistance + " cm<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/readingglasses.jpg'>");
    }
}