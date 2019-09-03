class Generator
{
    public getRandomItem(): Garments
    {
        let rnd = this.rand(1, 20);
        switch (rnd)
        {
            case 1: return this.makeBelt();
            case 2: return this.makeSunGlasses();
            case 3: return this.makeReadingGlasses();
            case 4: return this.makeTopHat();
            case 5: return this.makeCasketHat();
            case 6: return this.makeSportShoes();
            case 7: return this.makeElegantShoes();
            case 8: return this.makeComfortShoes();
            case 9: return this.makeSkirt();
            case 10: return this.makeDress();
            case 11: return this.makeEveningDress();
            case 12: return this.makeJacket();
            case 13: return this.makeCoat();
            case 14: return this.makeJeans();
            case 15: return this.makeTrainingPants();
            case 16: return this.makeShortPants();
            case 17: return this.makeTShirt();
            case 18: return this.makeButtonsShirt();
            case 19: return this.makeWomenShirt();
            case 20: return this.makeHeels();
        }    
    }

    private rand(min, max): number
    {
        let rando = Math.floor((Math.random() * (max - min + 1)) + min);
        return rando;
    }

    //generate classes
    private makeBelt(): Belt
    {
        return new Belt(this.getManufactor(), this.getModel(), this.getPrice(), this.getColor(), this.getColor(), this.getBuckleMaterial(), this.getSize(), this.getSize(), this.getSize());
    }

    private makeSunGlasses(): SunGlasses {
        return new SunGlasses(this.getManufactor(), this.getModel(), this.getPrice(), this.getColor(), this.getColor());
    }

    private makeReadingGlasses(): ReadingGlasses {
        return new ReadingGlasses(this.getManufactor(), this.getModel(), this.getPrice(), this.getColor(), this.getSafeReadingDistance());
    }

    private makeTopHat(): TopHat {
        return new TopHat(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(),this.getSize(),this.getSize());
    }

    private makeCasketHat(): CasketHat {
        return new CasketHat(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getBooleanicParameter());
    }

    private makeHeels(): Heels {
        return new Heels(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getProducingCountry(), this.getHeelType());
    }

    private makeSportShoes(): SportShoes {
        return new SportShoes(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getProducingCountry(), this.getBooleanicParameter(), this.getProductionDateDay(), this.getProductionDateMonth(), this.getProductionDateYear());
    }

    private makeElegantShoes(): ElegantShoes {
        return new ElegantShoes(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getProducingCountry(), this.getBooleanicParameter(), this.getElegantShoeMaterial());
    }

    private makeComfortShoes(): ComfortShoes {
        return new ComfortShoes(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getProducingCountry(), this.getBooleanicParameter(), this.getBooleanicParameter());
    }

    private makeSkirt(): Skirt {
        return new Skirt(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getSkirtType());
    }

    private makeDress(): Dress {
        return new Dress(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getSize(), this.getBooleanicParameter());
    }

    private makeEveningDress(): EveningDress {
        return new EveningDress(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getSize(), this.getBooleanicParameter(), this.getFabricMaterial());
    }

    private makeJacket(): Jacket {
        return new Jacket(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getNumOf());
    }

    private makeCoat(): Coat {
        return new Coat(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getBooleanicParameter());
    }

    private makeJeans(): Jeans {
        return new Jeans(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getBooleanicParameter());
    }

    private makeTrainingPants(): TrainingPants {
        return new TrainingPants(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getNumOf());
    }

    private makeShortPants(): ShortPants {
        return new ShortPants(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getFabricMaterial());
    }

    private makeTShirt(): TShirt {
        return new TShirt(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getShirtPrinting());
    }

    private makeButtonsShirt(): ButtonShirt {
        return new ButtonShirt(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getNumOf());
    }

    private makeWomenShirt(): WomenShirt {
        return new WomenShirt(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getFabricMaterial());
    }

    //general
    private getBooleanicParameter(): boolean
    {
        //function for all boolean parameters
        let boolean = this.rand(1, 2);
        switch (boolean) {
            case 1: return true;
            case 2: return false;
        }
    }

    private getSize(): number {
        //this function is for all size variants: size, length, width, height, diameter, circumfence, thickness.
        let size = this.rand(1, 300);
        return size;
    }

    private getNumOf(): number
    {
        //this function is for all variables which count number of items in certain garment
        let numOf = this.rand(0, 10);
        return numOf;
    }

    private getFabricMaterial(): string {
        //this function is for all fabric material parameters
        let material = ['cloth', "fleece", "cotton", "satin", "poliaster"];
        let rnd = this.rand(0, material.length - 1);
        return material[rnd];
    }


    //clothes
    private getManufactor(): string
    {
        let manufactors = ["Diesel", "Nike", "Aigle", "Adidas", "Airness", "Burberry", "Canali", "Diadora"];
        let rnd = this.rand(0, manufactors.length - 1);
        return manufactors[rnd];
    }

    private getModel(): string
    {
        let models = ["T-500", "stormcloth", "toppest", "plusforyou", "POP-Cloth"];
        let rnd = this.rand(0, models.length - 1);
        return models[rnd];
    }

    private getPrice(): number
    {
        let price = this.rand(1, 1000);
        return price;
    }

    private getColor(): string {
        let color = ["green", "blue", "black", "red", "white", "yellow", "purple", "orange", "cyan", "brown", "pink"];
        let rnd = this.rand(0, color.length - 1);
        return color[rnd];
    }

    

    //Glasses
    private getSafeReadingDistance(): number
    {
        let price = this.rand(1, 100);
        return price;
    }

    //Belt
    private getBuckleMaterial(): BuckleMaterial
    {
        let material = [BuckleMaterial.cloth, BuckleMaterial.leather, BuckleMaterial.metal, BuckleMaterial.plastic];
        let rnd = this.rand(0, material.length - 1);
        return material[rnd];
    }

    //Shoes
    private getProducingCountry(): string
    {
        let country = ['Israel', 'United States', 'Canada', 'United Kingdom', 'Sweden', 'Japan', 'China', 'Nigeria', 'Argentina', 'New Zealand'];
        let rnd = this.rand(0, country.length - 1);
        return country[rnd];
    }

    private getElegantShoeMaterial(): ElegantShoesMaterial
    {
        let material = [ElegantShoesMaterial.cloth, ElegantShoesMaterial.leather, ElegantShoesMaterial.suede];
        let rnd = this.rand(0, material.length - 1);
        return material[rnd];
    }

    private getProductionDateYear(): number
    {
        let year = this.rand(2000, 2019);
        return year;
    }

    private getProductionDateMonth(): number {
        let month = this.rand(1, 12);
        return month;
    }

    private getProductionDateDay(): number {
        let day = this.rand(1, 31);
        return day;
    }

    private getHeelType(): HeelType
    {
        let material = [HeelType.lowHeel, HeelType.mediumHeel, HeelType.highHeel];
        let rnd = this.rand(0, material.length - 1);
        return material[rnd];
    }

    //FemaleLegWear
    private getSkirtType(): SkirtType
    {
        let material = [SkirtType.shortSkirt, SkirtType.longSkirt];
        let rnd = this.rand(0, material.length - 1);
        return material[rnd];
    }

    //Shirt
    private getShirtPrinting(): string
    {
        let printing = ['', 'HELLO', 'ISRAEL', 'I LOVE NEW YORK', 'BEST SHIRT EVER'];
        let rnd = this.rand(0, printing.length - 1);
        return printing[rnd]; 
    }
}