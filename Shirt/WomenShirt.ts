class WomenShirt extends Shirt
{
    //data members
    public fabricMaterial: string;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, sleevesLength: number, fabricMaterial: string) {
        super(manufactor, model, price, size, color, sleevesLength);
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
        document.write("<img src='/images/womenshirt.jpg' style='margin-left:-85px;'>");
    }
}