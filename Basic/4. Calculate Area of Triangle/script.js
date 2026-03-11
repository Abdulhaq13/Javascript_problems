// 4. Calculate Area of Triangle (Sides: 5, 6, 7)
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

function areaOfTriangle(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area.toFixed(1));
}

areaOfTriangle(5, 6, 7);
