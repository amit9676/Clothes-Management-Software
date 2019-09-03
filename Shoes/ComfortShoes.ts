class ComfortShoes extends FlatShoes
{
    //data members
    public hasFootHold: boolean;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, producingCountry: string, hasLaces: boolean, hasFootHold: boolean)
    {
        super(manufactor, model, price, size, color, producingCountry, hasLaces);
        this.hasFootHold = hasFootHold;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Do the shoes have Foot Holds? " + this.hasFootHold + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/comfortshoes.jpg'>");
    }
}