class ShortPants extends Pants
{
    //data members
    public fabricMaterial: string;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, pantsLength: number, fabricMaterial: string) {
        super(manufactor, model, price, size, color, pantsLength);
        this.fabricMaterial = fabricMaterial;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Fabric's material: " + this.fabricMaterial + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/shortpants.jpg' width='320px'>");
    }
}