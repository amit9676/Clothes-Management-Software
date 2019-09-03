class Test
{
    public test(): void
    {
        let array = prompt("Enter array's size: ");
        let array2 = Number(array);
        if ((array === null) || (array == ''))
        {
            throw new Error("Error! array must be a value!");
        }
        else if (isNaN(array2))
        {
            throw new Error("Error! array must be a number!");
        }
        else if ((array2 % 1 !== 0) || (array2 <= 0))
        {
            throw new Error("Error! array must be a positive integer!");
        }

        let garmentsArray = new Array<Garments>(array2);
        let generator: Generator = new Generator();
        if (array2 <= 20)
        {
            let secondaryArray = new Array<Garments>(0);
            let j: number;
            for (let i = 0; i < garmentsArray.length; i++)
            {
                garmentsArray[i] = generator.getRandomItem();
                if (secondaryArray.length > 0) {
                    for (j = 0; j < secondaryArray.length; j++)
                    {
                        if (garmentsArray[i].constructor == secondaryArray[j].constructor)
                        {
                            garmentsArray.slice(0, array2 - 1);
                            i--;
                            break;
                        }
                    }
                    if (j == secondaryArray.length) {
                        secondaryArray.push(garmentsArray[i]);
                    }
                }
                else
                {
                    secondaryArray.push(garmentsArray[i]);
                }
            }
        }
        else
        {
            for (let i = 0; i < garmentsArray.length; i++)
            {
                garmentsArray[i] = generator.getRandomItem();
            }
        }

        for (let i = 0; i < garmentsArray.length; i++)
        {
            garmentsArray[i].displayDetails();
            document.write("<br>");
            document.write("Brand: " + garmentsArray[i].brand);
            garmentsArray[i].displayImage();
            document.write("<br><hr><br><hr><br>");
        }
            
        
    }
}