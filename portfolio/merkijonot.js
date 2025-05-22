function showCharacter() {
    let text = document.getElementById("textInput").value;
    let index = parseInt(document.getElementById("indexInput").value) - 1;
    document.getElementById("result").innerText = text.charAt(index);
}

function findIndex() {
    let mainText = document.getElementById("mainText").value;
    let searchText = document.getElementById("searchText").value;
    document.getElementById("indexResult").innerText = mainText.indexOf(searchText);
}
function sliceString() {
    let text = document.getElementById("cutText").value;
    let start = parseInt(document.getElementById("startIndex").value);
    let end = parseInt(document.getElementById("endIndex").value);
    document.getElementById("sliceResult").innerText = text.substring(start, end);
}

function replaceText() {
    let text = document.getElementById("replaceText").value;
    let search = document.getElementById("searchReplace").value;
    let replace = document.getElementById("newReplace").value;
    document.getElementById("replaceResult").innerText = text.replaceAll(search, replace);
}

function splitString() {
    let text = document.getElementById("splitText").value;
    let delimiter = document.getElementById("delimiter").value;
    let parts = text.split(delimiter);
    let resultList = document.getElementById("splitResult");
    resultList.innerHTML = "";
    parts.forEach(part => {
        let li = document.createElement("li");
        li.innerText = part;
        resultList.appendChild(li);
    });
}


