// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
if (pickup > 42){
    return pickup - 42;
}
else {
    return 42 - pickup;
}
}

function distanceFromHqInFeet(street){
if (street > 42){
    return (street - 42) * 264
}
else {
    return (42 - street) * 264
}
}


function distanceTravelledInFeet(feet1,feet2){
if (feet1 < feet2 ){
    return (feet2 - feet1)*264;
}
else {
    return (feet1 - feet2)*264;
}
}

function calculatesFarePrice(start, destination){
let end = distanceTravelledInFeet(start,destination);
if (end < 400){
    return 0
}
else if (end>= 400 && end <= 2000){
    return (end -400)* 0.02
}
else if (end >2000 && end <=2500){
    return 25
}
else if (end >2500){
    return 'cannot travel that far'
}
}
