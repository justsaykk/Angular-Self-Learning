var sports = ["golf", "cricket", "tennis", "swimming"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var element = sports_1[_i];
    if (element == "cricket") {
        console.log("".concat(element, " is my favourte sport!"));
        continue;
    }
    console.log(element);
}
