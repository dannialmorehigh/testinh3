document.getElementByTagName('input')[0].value = "Input Value";
function getAndSetValue(){
  var txt1 = document.getElementById('txt').value;
  document.getElementById('txt2').value = txt1;
  var txt3 = document.getElementById('txt3').value;
  document.getElementById('txt4').value = txt3;
  var txt5 = document.getElementById('txt5').value;
  document.getElementById('txt6').value = txt5;
  var txt7 = document.getElementById('txt7').value;
  document.getElementById('txt8').value = txt7;
  var txt9 = document.getElementById('txt9').value;
  document.getElementById('txt10').value = txt9;

}

  function getValue(){
    var txt = document.getElementById('txt').value;
    alert(txt);
  }

  dragElement(document.getElementById("txt"));
