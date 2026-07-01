//Array in Js

// 1. Continuous  2. Holey

// * SMI (small Ineger)
// * PACKED ELEMENT
// * DOUBLE(float, string, function)

const arrOne = [1,2,3,4,5];
// PACKED_SMI

arrOne.push(6.0);
// Packed_Double_element

arrOne.push('7');

//packed_elements

arrOne[10] = 11;
// Holey_packed_elements
console.log(arrOne);

const arrTwo = new Array(3);
// Holey_SMI_Element

arrTwo[0] = '1'; // holey_Element
arrTwo[1] = '2'; // "     "
arrTwo[2] = '3'; // "     "

const arrThree = [];

arrThree[0] = '1'; // Placked_element;

const arrFour = [1,2,3];
// Packed_SMI_Element

arrFour.push(NaN); //Packed_Double_Element

arrFour.push(Infinity) // packed_Double_Element