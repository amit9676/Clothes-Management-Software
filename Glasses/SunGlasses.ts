class SunGlasses extends Glasses
{
    //data members
    public glassesColor: string;

    //constructor
    public constructor(manufactor: string, model: string, price: number, frameColor: string, glassesColor: string)
    {
        super(manufactor, model, price, frameColor);
        this.glassesColor = glassesColor;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Glasses color: " + this.glassesColor + "<br>");
    } 

    public displayImage(): void
    {
        document.write("<img src='/images/sunglasses.jpg' width='20%' height='20%'>");
    }
}