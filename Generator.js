var Generator = /** @class */ (function () {
    function Generator() {
    }
    Generator.prototype.getRandomItem = function () {
        var rnd = this.rand(1, 20);
        switch (rnd) {
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
    };
    Generator.prototype.rand = function (min, max) {
        var rando = Math.floor((Math.random() * (max - min + 1)) + min);
        return rando;
    };
    //generate classes
    Generator.prototype.makeBelt = function () {
        return new Belt(this.getManufactor(), this.getModel(), this.getPrice(), this.getColor(), this.getColor(), this.getBuckleMaterial(), this.getSize(), this.getSize(), this.getSize());
    };
    Generator.prototype.makeSunGlasses = function () {
        return new SunGlasses(this.getManufactor(), this.getModel(), this.getPrice(), this.getColor(), this.getColor());
    };
    Generator.prototype.makeReadingGlasses = function () {
        return new ReadingGlasses(this.getManufactor(), this.getModel(), this.getPrice(), this.getColor(), this.getSafeReadingDistance());
    };
    Generator.prototype.makeTopHat = function () {
        return new TopHat(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getSize());
    };
    Generator.prototype.makeCasketHat = function () {
        return new CasketHat(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getBooleanicParameter());
    };
    Generator.prototype.makeHeels = function () {
        return new Heels(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getProducingCountry(), this.getHeelType());
    };
    Generator.prototype.makeSportShoes = function () {
        return new SportShoes(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getProducingCountry(), this.getBooleanicParameter(), this.getProductionDateDay(), this.getProductionDateMonth(), this.getProductionDateYear());
    };
    Generator.prototype.makeElegantShoes = function () {
        return new ElegantShoes(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getProducingCountry(), this.getBooleanicParameter(), this.getElegantShoeMaterial());
    };
    Generator.prototype.makeComfortShoes = function () {
        return new ComfortShoes(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getProducingCountry(), this.getBooleanicParameter(), this.getBooleanicParameter());
    };
    Generator.prototype.makeSkirt = function () {
        return new Skirt(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getSkirtType());
    };
    Generator.prototype.makeDress = function () {
        return new Dress(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getSize(), this.getBooleanicParameter());
    };
    Generator.prototype.makeEveningDress = function () {
        return new EveningDress(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getSize(), this.getBooleanicParameter(), this.getFabricMaterial());
    };
    Generator.prototype.makeJacket = function () {
        return new Jacket(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getNumOf());
    };
    Generator.prototype.makeCoat = function () {
        return new Coat(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getBooleanicParameter());
    };
    Generator.prototype.makeJeans = function () {
        return new Jeans(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getBooleanicParameter());
    };
    Generator.prototype.makeTrainingPants = function () {
        return new TrainingPants(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getNumOf());
    };
    Generator.prototype.makeShortPants = function () {
        return new ShortPants(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getFabricMaterial());
    };
    Generator.prototype.makeTShirt = function () {
        return new TShirt(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getShirtPrinting());
    };
    Generator.prototype.makeButtonsShirt = function () {
        return new ButtonShirt(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getNumOf());
    };
    Generator.prototype.makeWomenShirt = function () {
        return new WomenShirt(this.getManufactor(), this.getModel(), this.getPrice(), this.getSize(), this.getColor(), this.getSize(), this.getFabricMaterial());
    };
    //general
    Generator.prototype.getBooleanicParameter = function () {
        //function for all boolean parameters
        var boolean = this.rand(1, 2);
        switch (boolean) {
            case 1: return true;
            case 2: return false;
        }
    };
    Generator.prototype.getSize = function () {
        //this function is for all size variants: size, length, width, height, diameter, circumfence, thickness.
        var size = this.rand(1, 300);
        return size;
    };
    Generator.prototype.getNumOf = function () {
        //this function is for all variables which count number of items in certain garment
        var numOf = this.rand(0, 10);
        return numOf;
    };
    Generator.prototype.getFabricMaterial = function () {
        //this function is for all fabric material parameters
        var material = ['cloth', "fleece", "cotton", "satin", "poliaster"];
        var rnd = this.rand(0, material.length - 1);
        return material[rnd];
    };
    //clothes
    Generator.prototype.getManufactor = function () {
        var manufactors = ["Diesel", "Nike", "Aigle", "Adidas", "Airness", "Burberry", "Canali", "Diadora"];
        var rnd = this.rand(0, manufactors.length - 1);
        return manufactors[rnd];
    };
    Generator.prototype.getModel = function () {
        var models = ["T-500", "stormcloth", "toppest", "plusforyou", "POP-Cloth"];
        var rnd = this.rand(0, models.length - 1);
        return models[rnd];
    };
    Generator.prototype.getPrice = function () {
        var price = this.rand(1, 1000);
        return price;
    };
    Generator.prototype.getColor = function () {
        var color = ["green", "blue", "black", "red", "white", "yellow", "purple", "orange", "cyan", "brown", "pink"];
        var rnd = this.rand(0, color.length - 1);
        return color[rnd];
    };
    //Glasses
    Generator.prototype.getSafeReadingDistance = function () {
        var price = this.rand(1, 100);
        return price;
    };
    //Belt
    Generator.prototype.getBuckleMaterial = function () {
        var material = [BuckleMaterial.cloth, BuckleMaterial.leather, BuckleMaterial.metal, BuckleMaterial.plastic];
        var rnd = this.rand(0, material.length - 1);
        return material[rnd];
    };
    //Shoes
    Generator.prototype.getProducingCountry = function () {
        var country = ['Israel', 'United States', 'Canada', 'United Kingdom', 'Sweden', 'Japan', 'China', 'Nigeria', 'Argentina', 'New Zealand'];
        var rnd = this.rand(0, country.length - 1);
        return country[rnd];
    };
    Generator.prototype.getElegantShoeMaterial = function () {
        var material = [ElegantShoesMaterial.cloth, ElegantShoesMaterial.leather, ElegantShoesMaterial.suede];
        var rnd = this.rand(0, material.length - 1);
        return material[rnd];
    };
    Generator.prototype.getProductionDateYear = function () {
        var year = this.rand(2000, 2019);
        return year;
    };
    Generator.prototype.getProductionDateMonth = function () {
        var month = this.rand(1, 12);
        return month;
    };
    Generator.prototype.getProductionDateDay = function () {
        var day = this.rand(1, 31);
        return day;
    };
    Generator.prototype.getHeelType = function () {
        var material = [HeelType.lowHeel, HeelType.mediumHeel, HeelType.highHeel];
        var rnd = this.rand(0, material.length - 1);
        return material[rnd];
    };
    //FemaleLegWear
    Generator.prototype.getSkirtType = function () {
        var material = [SkirtType.shortSkirt, SkirtType.longSkirt];
        var rnd = this.rand(0, material.length - 1);
        return material[rnd];
    };
    //Shirt
    Generator.prototype.getShirtPrinting = function () {
        var printing = ['', 'HELLO', 'ISRAEL', 'I LOVE NEW YORK', 'BEST SHIRT EVER'];
        var rnd = this.rand(0, printing.length - 1);
        return printing[rnd];
    };
    return Generator;
}());
//# sourceMappingURL=Generator.js.map