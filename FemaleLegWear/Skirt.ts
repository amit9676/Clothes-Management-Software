class Skirt extends FemaleLegWear
{
    //data members
    public skirtType: SkirtType;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, circumfence: number, skirtType: SkirtType)
    {
        super(manufactor, model, price, size, color, circumfence);
        this.skirtType = skirtType;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Skirt's type: " + this.skirtType + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/skirt.jpg' width='350' height='350'>");
    }
}