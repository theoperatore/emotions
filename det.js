var inputs = {
  happy : 10,
  love  : 10,
  sad   : -10,
  anger : -10,
  nervous: -10
}, a, b, c, d, e;

function meta(a, b, c, d, e) {
  return ((a*inputs.happy) + (b*inputs.love)+ (c*inputs.sad) + (d*inputs.anger) + (e*inputs.nervous));
};

function xform(a, b, c, d, e) {
  inputs.happy += (a*inputs.happy);
  inputs.love += (b*inputs.love);
  inputs.sad += (c*inputs.sad);
  inputs.anger += (d*inputs.anger);
  inputs.nervous += (e*inputs.nervous);
}

function sum() {
  return inputs.happy + inputs.love + inputs.sad + inputs.anger + inputs.nervous;
}

a = parseFloat(process.argv[2]);
b = parseFloat(process.argv[3]);
c = parseFloat(process.argv[4]);
d = parseFloat(process.argv[5]);
e = parseFloat(process.argv[6]);

console.log("starting inputs");
console.log(inputs);
console.log("starting sum", sum());
console.log("meta", meta(a,b,c,d,e));
xform(a,b,c,d,e);
console.log("ending inputs");
console.log(inputs);
console.log("ending sum", sum());
