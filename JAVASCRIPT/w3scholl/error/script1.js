try {
    var a = 1;
    a.toPrecision(500);
    console.log(a[2].length);
} catch (e) {
    console.log(e.name);
}

try {
    var a = estareferencianaoexiste;
    console.log(a)

} catch (e) {
    console.log(e.name);
}

try {
    eval("alert('Hello)"); 

} catch (e) {
    console.log(e.name);
}

try {
    num = 1;
    console.log(num.toUpperCase())

} catch (e) {
    console.log(e.name);
}

try {
    decodeURI("%%%");
  }
  catch(err) {
    console.log(err.name);
  }


