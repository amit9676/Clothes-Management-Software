abstract class Shoes extends Clothes
{
    //data members
    public producingCountry: string;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, producingCountry: string)
    {
        super(manufactor, model, price, size, color);
        this.producingCountry = producingCountry;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Producing country: " + this.producingCountry + "<br>");
    }

    public abstract displayImage():void
}