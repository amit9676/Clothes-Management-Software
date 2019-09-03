abstract class Clothes extends Garments
{
    //data members
    private _size: number;
    public color: string;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string)
    {
        super(manufactor, model, price);
        this.size = size;
        this.color = color;
    }

    //getter
    public get size(): number
    {
        return this._size;
    }

    //setter
    public set size(value: number)
    {
        if ((value <= 0) || (value > 300))
        {
            throw new Error("Error! size must be between 1 and 300 centimeters.");
        }

        this._size = value;
    }

    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Size: " + this.size + " cm<br>");
        document.write("Color: " + this.color + "<br>");
    }

    public abstract displayImage():void
}