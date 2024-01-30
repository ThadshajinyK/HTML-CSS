function findTriangleArea(side1, side2, side3) {
      
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    return area;
  }

  
  const side1 = 5;
  const side2 = 6;
  const side3 = 7;


  const triangleArea = findTriangleArea(side1, side2, side3);

 
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = `
    <p>Triangle sides: ${side1}, ${side2}, ${side3}</p>
    <p>Area of the triangle: ${triangleArea.toFixed(2)}</p>
  `;