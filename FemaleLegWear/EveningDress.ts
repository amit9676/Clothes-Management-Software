class EveningDress extends Dress
{
    //data members
    public fabricMaterial: string;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, circumfence: number, length: number, hasBackCleavage: boolean, fabricMaterial: string)
    {
        super(manufactor, model, price, size, color, circumfence, length, hasBackCleavage);
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
        document.write("<img src='/images/eveningdress.jpg' style='margin-left:-60px;' width='400px'>");
    }
}