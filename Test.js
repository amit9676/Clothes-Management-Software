var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.test = function () {
        var array = prompt("Enter array's size: ");
        var array2 = Number(array);
        if ((array === null) || (array == '')) {
            throw new Error("Error! array must be a value!");
        }
        else if (isNaN(array2)) {
            throw new Error("Error! array must be a number!");
        }
        else if ((array2 % 1 !== 0) || (array2 <= 0)) {
            throw new Error("Error! array must be a positive integer!");
        }
        var garmentsArray = new Array(array2);
        var generator = new Generator();
        if (array2 <= 20) {
            var secondaryArray = new Array(0);
            var j = void 0;
            for (var i = 0; i < garmentsArray.length; i++) {
                garmentsArray[i] = generator.getRandomItem();
                if (secondaryArray.length > 0) {
                    for (j = 0; j < secondaryArray.length; j++) {
                        if (garmentsArray[i].constructor == secondaryArray[j].constructor) {
                            garmentsArray.slice(0, array2 - 1);
                            i--;
                            break;
                        }
                    }
                    if (j == secondaryArray.length) {
                        secondaryArray.push(garmentsArray[i]);
                    }
                }
                else {
                    secondaryArray.push(garmentsArray[i]);
                }
            }
        }
        else {
            for (var i = 0; i < garmentsArray.length; i++) {
                garmentsArray[i] = generator.getRandomItem();
            }
        }
        for (var i = 0; i < garmentsArray.length; i++) {
            garmentsArray[i].displayDetails();
            document.write("<br>");
            document.write("Brand: " + garmentsArray[i].brand);
            garmentsArray[i].displayImage();
            document.write("<br><hr><br><hr><br>");
        }
    };
    return Test;
}());
//# sourceMappingURL=Test.js.map