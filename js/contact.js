function number() {
  var num= Number(document.getElementById('num').value);
  if (num > 9999999999 || num < 1000000000) {
    alert(num + " is an invalid number.")
    document.getElementById('num').value='';
  } else {

  }
}
