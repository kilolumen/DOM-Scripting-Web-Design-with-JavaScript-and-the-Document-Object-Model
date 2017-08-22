window.onload = function() {
  var para = document.createElement("p");
  var txt1 = document.createTextNode("This is ");
  var emphasis = document.createElement("em");
  var txt2 = document.createTextNode("my");
  emphasis.appendChild(txt2);
  var txt3 = document.createTextNode(" content");
  para.appendChild(txt1);
  para.appendChild(emphasis);
  para.appendChild(txt3);
  var testdiv = document.getElementById("testdiv");
  testdiv.appendChild(para);
  /*var info = "nodeName: ";
  info += para.nodeName;
  info += " nodeType: ";
  info += para.nodeType;
  alert(info);*/
}
