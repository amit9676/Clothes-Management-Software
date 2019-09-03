class Coat extends OuterWear
{
    //data members
    public rainCoat: boolean;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, fabricThickness: number, rainCoat: boolean)
    {
        super(manufactor, model, price, size, color, fabricThickness);
        this.rainCoat = rainCoat;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Is the coat rain resistant? " + this.rainCoat + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/coat.jpg' width='20%' height='10%'>");
    }
}