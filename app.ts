//  Union Type & literal types

function combine(
    input1:number|string,
    input2:number|string,
    resultConversion:"as-number" | "as-text"
    ){
    let result; // 어떤 타입이든 들어감
    if(typeof input1==="number" && typeof input2==="number" || resultConversion==="as-number"){
        result=+input1 + +input2;
    }else{
        // 둘 다 문자열이거나 숫자+문자열인 경우
        result=input1.toString()+input2.toString();
    }
    return result;
}

const combineAges=combine(30,26,"as-number");
const combineStringAges=combine("30","26","as-number");
const combineNames=combine("sara","choi","as-text");

console.log(combineAges);
console.log(combineStringAges);
console.log(combineNames);
