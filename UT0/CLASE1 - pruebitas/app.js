function addElementOnClickToList1(){
    const input = document.getElementById("addElement1");
    const list = document.getElementById("ul");
    var newElem = document.createElement("li");
    newElem.appendChild(document.createTextNode(input.value));
    list.appendChild(newElem);
    newElem.addEventListener('click', function handleClick(event) {
        list.removeChild(newElem);
      });
}

function addElementOnClickToList2(){
    const input = document.getElementById("addElement2");
    const list = document.getElementById("ol");
    var newElem = document.createElement("li");
    newElem.appendChild(document.createTextNode(input.value));
    list.appendChild(newElem);
    newElem.addEventListener('click', function handleClick(event) {
        list.removeChild(newElem);
      });
}
