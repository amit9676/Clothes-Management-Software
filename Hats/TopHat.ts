class TopHat extends Hat
{
    //data members
    private _height: number;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, diameter: number, height: number)
    {
        super(manufactor, model, price, size, color, diameter);
        this.height = height;
    }

    //getter
    public get height(): number
    {
        return this._height;
    }

    //setter
    public set height(value: number)
    {
        if ((value <= 0) || (value > 300)) {
            throw new Error("Error! height must be between 1  and 300 centimeters.");
        }

        this._height = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Height: " + this.height + " cm<br>");
    }

    public displayImage(): void {
        document.write("<img src='/images/tophat.jpg'>");
    }
}