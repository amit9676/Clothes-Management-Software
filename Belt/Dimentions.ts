class Dimentions
{
    //data members
    private _height: number;
    private _length: number;
    private _width: number;

    //constructor
    public constructor(height: number, length: number, width: number)
    {
        this.height = height;
        this.length = length;
        this.width = width;
    }

    //getters
    public get height(): number
    {
        return this._height;
    }

    public get length(): number {
        return this._length;
    }

    public get width(): number {
        return this._width;
    }

    //setters
    public set height(value: number)
    {
        if ((value <= 0) || (value > 300))
        {
            throw new Error("Error! height must be between 1  and 300 centimeters.");
        }

        this._height = value;
    }

    public set length(value: number) {
        if ((value <= 0) || (value > 300)) {
            throw new Error("Error! length must be between 1  and 300 centimeters.");
        }

        this._length = value;
    }

    public set width(value: number) {
        if ((value <= 0) || (value > 300)) {
            throw new Error("Error! width must be between 1  and 300 centimeters");
        }

        this._width = value;
    }

    //methods
    public displayDetails(): void
    {
        document.write("height: " + this.height + " cm, length: " + this.length + " cm, width: " + this.length + " cm");
    }
}