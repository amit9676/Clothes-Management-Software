class CasketHat extends Hat
{
    //data members
    public hasAdvertPrint: boolean;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, diameter: number, hasAdvertPrint: boolean)
    {
        super(manufactor, model, price, size, color, diameter);
        this.hasAdvertPrint = hasAdvertPrint;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Does the casket has printed advertisment? " + this.hasAdvertPrint + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/caskethat.jpg'>");
    }
}