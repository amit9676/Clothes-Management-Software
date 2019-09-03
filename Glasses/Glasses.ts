abstract class Glasses extends Garments
{
    //data members
    public frameColor: string;

    //constructor
    public constructor(manufactor: string, model: string, price: number, frameColor: string)
    {
        super(manufactor, model, price);
        this.frameColor = frameColor;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Frame color: " + this.frameColor + "<br>");
    }

    public abstract displayImage(): void
}