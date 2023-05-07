let noteArray = [];

let NoteObject = function (pData, pType, pPriority) {
    this.data = pData;
    this.type = pType;
    this.priority = pPriority;
}

noteArray.push(new NoteObject("Tester One", "Work", 1));
noteArray.push(new NoteObject("Tester Two", "Work", 2));
noteArray.push(new NoteObject("Tester Three", "Work", 3));

let selectedType = "";

document.addEventListener("DOMContentLoaded", function (event) {
    createList();

    document.getElementById("addButton").addEventListener("click", function () {
        noteArray.push(new NoteObject(document.getElementById("dataInput").value, selectedType, document.getElementById("priorityInput").value));
        document.getElementById("dataInput").value = "";
        document.getElementById("priorityInput").value = "";

        createList();
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });
});

function createList() {
    var noteUl = document.getElementById("noteUl");
    noteUl.innerHTML = "";

    noteArray.forEach(function (element,) {
        var li = document.createElement('li');
        li.innerHTML = element.priority + ". " + element.type + ":   " + element.data;
        noteUl.appendChild(li);
    });
};