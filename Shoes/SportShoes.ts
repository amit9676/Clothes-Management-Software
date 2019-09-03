class SportShoes extends FlatShoes
{
    //data members
    public productionDate: Date
    private _day: number;
    private _month: number;
    private _year: number;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, producingCountry: string, hasLaces: boolean, day: number, month: number, year: number)
    {
        super(manufactor, model, price, size, color, producingCountry, hasLaces);
        this.day = day;
        this.month = month;
        this.year = year;
        this.productionDate = new Date(year, month, day);
    }

    //getters
    public get day(): number
    {
        return this._day;
    }

    public get month(): number {
        return this._month;
    }

    public get year(): number {
        return this._year;
    }

    //setters
    public set day(value: number)
    {
        if ((value < 1) || (value > 31))
        {
            throw new Error("Error! day must be between 1 and 31.");
        }
        else if (value % 1 != 0) {
            throw new Error("Error! day must be an integer.");
        }

        this._day = value;
    }

    public set month(value: number) {
        if ((value < 1) || (value > 12)) {
            throw new Error("Error! month must be between 1 and 12.");
        }
        else if (value % 1 != 0) {
            throw new Error("Error! month must be an integer.");
        }

        this._month = value;
    }

    public set year(value: number) {
        if ((value < 2000) || (value > 2019)) {
            throw new Error("Error! year must be between 2000 and 2019.");
        }
        else if (value % 1 != 0)
        {
            throw new Error("Error! year must be an integer.");
        }

        this._year = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Date of production: " + this.productionDate.getDate() + '.' + (this.productionDate.getMonth()+1) + "." + this.productionDate.getFullYear() +  "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/sportshoes.jpg'>");
    }
}