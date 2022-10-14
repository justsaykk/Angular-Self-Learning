let sports: string[] = ["golf", "cricket", "tennis", "swimming"];

for (const element of sports) {
    if (element == "cricket") {
        console.log(`${element} is my favourte sport!`);
        continue;
    }
    console.log(element);
}