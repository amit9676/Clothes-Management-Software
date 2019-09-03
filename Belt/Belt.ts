class Belt extends Garments
{
    //data members
    public beltColor: string;
    public buckleColor: string;
    public buckleMaterial: BuckleMaterial;
    public dimentions: Dimentions;

    //constructor
    public constructor(manufactor: string, model: string, price: number, beltColor: string, buckleColor: string, buckleMatrial: BuckleMaterial, height: number, length: number, width: number)
    {
        super(manufactor, model, price);
        this.beltColor = beltColor;
        this.buckleColor = buckleColor;
        this.buckleMaterial = buckleMatrial;
        this.dimentions = new Dimentions(height, length, width);
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Belt color: " + this.beltColor + "<br>");
        document.write("Buckle color: " + this.buckleColor + "<br>");
        document.write("Buckle material: " + this.buckleMaterial + "<br>");
        document.write("Belt Dimentions: "); this.dimentions.displayDetails(); document.write("<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/belt.jpg'>");
    }

}