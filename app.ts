//this project was made by Amit Goffer

function main(): void
{
    try {
        
        let test: Test = new Test();
        test.test();
    }
    catch (Error)
    {
        document.write(Error.message);
    }
    
}
main();
