class Jeans extends Pants
{
    //data members
    public hasTears: boolean;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, pantsLength: number, hasTears: boolean)
    {
        super(manufactor, model, price, size, color, pantsLength);
        this.hasTears = hasTears;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Do the jeans have tears? " + this.hasTears + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/jeans.jpg' width='350px' style='margin-left: -50px;'>");
    }
}