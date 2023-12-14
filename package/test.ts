import ToInt from "./boolean/toInt";
import toBool from "./boolean/toBool";


function boolean_test(){
if (ToInt(true) === 1) {
    console.log('fromBoolToInt(true) === 1 PASSED');
} else {
    console.log('fromBoolToInt(true) !== 1 FAILED');
}
if (ToInt(false) === 0) {
    console.log('fromBoolToInt(false) === 0 PASSED');
} else {
    console.log('fromBoolToInt(false) !== 0 FAILED');
}
if (toBool(1) === true) {
    console.log('fromIntToBool(1) === true PASSED');
}
else {
    console.log('fromIntToBool(1) !== true FAILED');
}
if (toBool(0) === false) {
    console.log('fromIntToBool(0) === false PASSED');
} else {
    console.log('fromIntToBool(9) === true FAILED')
}
}
