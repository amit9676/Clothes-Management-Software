abstract class FlatShoes extends Shoes
{
    //data members
    public hasLaces: boolean;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, producingCountry: string, hasLaces: boolean)
    {
        super(manufactor, model, price, size, color, producingCountry);
        this.hasLaces = hasLaces;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Do the shoes have laces? " + this.hasLaces + "<br>");
    }

    public abstract displayImage(): void
}