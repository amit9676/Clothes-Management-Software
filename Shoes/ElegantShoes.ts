class ElegantShoes extends FlatShoes
{
    //data members
    public materialType: ElegantShoesMaterial;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, producingCountry: string, hasLaces: boolean, materialType: ElegantShoesMaterial)
    {
        super(manufactor, model, price, size, color, producingCountry, hasLaces);
        this.materialType = materialType;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Material's type: " + this.materialType + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/elegantshoes.jpg'>");
    }
}