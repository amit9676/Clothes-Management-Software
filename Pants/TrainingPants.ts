class TrainingPants extends Pants
{
    //data members
    private _numOfPockets: number;

    //constructor
    public constructor(manufactor: string, model: string, price: number, size: number, color: string, pantsLength: number, numOfPockets: number)
    {
        super(manufactor, model, price, size, color, pantsLength);
        this.numOfPockets = numOfPockets;
    }

    //getters
    public get numOfPockets(): number
    {
        return this._numOfPockets;
    }

    //setters
    public set numOfPockets(value: number)
    {
        if ((value < 0) || (value > 10))
        {
            throw new Error("Error! number of pockers must be between 0 and 10.");
        }
        else if (value % 1 != 0)
        {
            throw new Error("Error! number of pockers must be an integer.");
        }

        this._numOfPockets = value;
    }

    //methods
    public displayDetails(): void
    {
        super.displayDetails();
        document.write("Number of pockets: " + this.numOfPockets + "<br>");
    }

    public displayImage(): void
    {
        document.write("<img src='/images/trainingpants.jpg' width='350px' style='margin-left:-50px;'>");
    }
}