var BUTTONID = 0;

function loadStorage() {
    var size = chrome.storage.sync.get(["size"], function(items){});
    for (var i = 0; i < size; i++) {
        var data = chrome.storage.sync.get([i],
            function(arrayItems) {
            })
        var favorites = document.getElementById('addNewControls');
        var newButton = document.createElement("BUTTON");
        var text = document.createTextNode(data);
        newButton.appendChild(text);
        favorites.appendChild(newButton);

        // newButton.value = data;
        createNewEventListener(newButton);

        BUTTONID++;
    }
}

var count = 1;
function create() {
    var data = document.getElementById('addMeBox').value;
    document.getElementById('addNewControls').innerHTML+='<input type="button" id="'+count+'" value="'+data+'">';
    //e.prventDefault();
    document.getElementById(""+count).addEventListener('click', function () {
        var current = document.getElementById('finalTextBox').value;
        current += data;
        document.getElementById('finalTextBox').value = current;
    });
    count++;
}



function clickAddMeButton() {
    // Create new button with value, in "addNewControls" container
    // Add eventListener for button.onclick, pass value to final
    var data = document.getElementById('addMeBox').value;
    var text = document.createTextNode(data);

    var newButton = document.createElement("BUTTON");
    // newButton.id = BUTTONID;
    newButton.appendChild(text);

    var favorites = document.getElementById('addNewControls');
    favorites.appendChild(newButton);

    // newButton.value = data;
    newButton.addEventListener('click', function() {
        var copyData = document.getElementById('addMeBox').value;
        current += data;
        document.getElementById('finalTextBox').value = current;
    });

    //ADD STORAGE GLOBALLY
    //Add "storage"in permission
    chrome.storage.sync.set({
        BUTTONID: data
    }, function(){
    //  A data saved callback omg so fancy
    });
    BUTTONID++;
}

// DONE
function saveButtonClicked() {
    var fileNameWritten = document.getElementById('finalTextBox').value + ".pdf";
    if(fileNameWritten != ".pdf") {
        console.log(urlWritten);
        chrome.downloads.download({
            url: urlWritten,
            filename: fileNameWritten,
            saveAs: true
        }, function(downloadId) {
            console.log("File saved!");
        });
    }
}

var urlWritten;
    chrome.tabs.query({'active': true}, function (tabs) {
        urlWritten = tabs[0].url;
    });
    loadStorage();

    document.getElementById('addMeButton').addEventListener('click', create);
    document.getElementById('savebutton').addEventListener('click', saveButtonClicked);
