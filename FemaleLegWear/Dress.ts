class Dress extends FemaleLegWear
{
    //data members
    private _length: number;
    public hasBackCleavage: boolean;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, circumfence: number, length: number, hasBackCleavage: boolean)
    {
        super(manufactor, model, price, size, color, circumfence);
        this.length = length;
        this.hasBackCleavage = hasBackCleavage;
    }

    //getters
    public get length(): number
    {
        return this._length;
    }

    //setters
    public set length(value: number)
    {
        if ((value <= 0) || (value > 300)) {
            throw new Error("Error! length must be between 1  and 300 centimeters.");
        }

        this._length = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Length: " + this.length + " cm<br>");
        document.write("Does the dress has back's cleavage? " + this.hasBackCleavage + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/dress.jpg' width='20%'>");
    }
}