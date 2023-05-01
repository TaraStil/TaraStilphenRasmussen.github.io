var theStagesOfJS = ["confidence, "sadness", "confusion", "realization", "debugging", "satisfaction"];

console.log('Original Array:');
console.log(theStagesOfJS);
console.log("---------------------");

var mapArrow1 = theStagesOfJS.map((item) => { 
    return item;
});

console.log('Mapped Array using Arrow Function:');
console.log(mapArrow1);
console.log("------------------------------------------");

var mapArrow2 = theStagesOfJS.map( item => { return item });

console.log('Mapped Array using Arrow Function:');
console.log(mapArrow2);
console.log("------------------------------------------");

