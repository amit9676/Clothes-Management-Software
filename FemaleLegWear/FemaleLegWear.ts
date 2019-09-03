abstract class FemaleLegWear extends Clothes
{
    //data members
    private _circumfence: number;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, circumfence: number)
    {
        super(manufactor, model, price, size, color);
        this.circumfence = circumfence;
    }

    //getters
    public get circumfence(): number
    {
        return this._circumfence;
    }

    //setters
    public set circumfence(value: number)
    {
        if ((value <= 0) || (value > 300)) {
            throw new Error("Error! circumfence must be between 1 and 300 centimeters.");
        }

        this._circumfence = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Circumfence: " + this.circumfence + " cm<br>");
    }

    public abstract displayImage():void

}