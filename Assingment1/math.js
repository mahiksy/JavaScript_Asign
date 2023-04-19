function diagonal(side){
    let d=Math.sqrt((side*side)*2);
    console.log(d)
    return d;
}
let num1=diagonal(9);

function triArea(x,y,z){
    let h= (x+y+z)/2;
    let area= Math.sqrt(h*((h-x)*(h-y)*(h-z)));
    console.log(area);
    return area
}
triArea(5,6,7);
const p=Math.PI;
console.log(p);
function circle(r){
    let c= 2*p*r
    let a=p*(r*r)
    console.log(c);
    console.log(a);
}
circle(4);