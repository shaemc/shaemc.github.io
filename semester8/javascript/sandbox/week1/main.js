const PI = 3.14;
let radius = 3;
let area = 0;
// area = radius * radius * PI;
radius = 4;

function findArea() {
    area = radius * radius * PI;
    return area
}

findArea();

console.log(area);
console.log("log1:", area);
console.log("log2:", radius);