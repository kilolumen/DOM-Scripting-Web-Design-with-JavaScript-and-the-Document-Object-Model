function positionMessage() {
  if (!document.getElementById) false;
  if (!document.getElementById("message")) return false;
  var elem = document.getElementById("message");
  elem.style.position = "absolute";
  elem.style.top = "100px";
  elem.style.left = "50px";
  moveElement("message",125,25,20);
  if (!document.getElementById("message2")) return false;
  var elem = document.getElementById("message2");
  elem.style.position = "absolute";
  elem.style.left = "50px"
  elem.style.top = "50px";
  moveElement("message2",125,125,20);
}
addLoadEvent(positionMessage);