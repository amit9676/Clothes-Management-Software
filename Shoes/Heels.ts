class Heels extends Shoes
{
    //data members
    public heelType: HeelType;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, producingCountry: string, heelType: HeelType)
    {
        super(manufactor, model, price, size, color, producingCountry);
        this.heelType = heelType;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Heels type: " + this.heelType + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/heels.jpg'>");
    }
}