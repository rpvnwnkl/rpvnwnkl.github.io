// Your JavaScript goes here...
function parse() {
    var request = new XMLHttpRequest();
    request.open("GET", "data.json", true);

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            msgBox = document.getElementById("messume");
            parsedJson = JSON.parse(request.responseText);

        //create html and enter in json field values
            for (i in parsedJson) {
            //create child
                currChild = msgBox.appendChild(document.createElement('div'));
                currChild.setAttribute('class', parsedJson[i].username);
            //create message and username elements
                currMsg = currChild.appendChild(document.createElement('span'));
                currMsg.setAttribute('class', 'message');
            //populate message from json
                currMsg.textContent = parsedJson[i].content;
            }
        }
    };

    request.send();
}
