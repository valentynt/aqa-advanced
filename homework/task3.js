const number = 7;

console.log("Таблиця множення для числа " + number + " (цикл for):");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log("\nТаблиця множення для числа " + number + " (цикл while):");
let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
