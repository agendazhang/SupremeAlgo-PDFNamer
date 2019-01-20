function loadStorage() {
  chrome.storage.sync.get(['buttonIDMap'], function(result){
    var buttonIDMap = result.buttonIDMap;
    for (var key in buttonIDMap){
      (function () {
        var buttonID = key;
        var fileName = buttonIDMap[key];

        createAddMeButton(buttonID, fileName);
      }()); // immediate invocation
    }
  });
    // for (var i = 0; i < size; i++) {
    //     var data = chrome.storage.sync.get([i],
    //         function(arrayItems) {
    //         })
    //     var favorites = document.getElementById('addNewControls');
    //     var newButton = document.createElement("BUTTON");
    //     var text = document.createTextNode(data);
    //     newButton.appendChild(text);
    //     favorites.appendChild(newButton);
    //
    //     // newButton.value = data;
    //     createNewEventListener(newButton);
    //
    //     BUTTONID++;
    // }
}

function saveChanges() {
  // Get a value saved in a form.
  var theValue = textarea.value;
  // Check that there's some code there.
  if (!theValue) {
    message('Error: No value specified');
    return;
  }
  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({'value': theValue}, function() {
    // Notify that we saved.
    message('Settings saved');
  });
}

function createAddMeButton(buttonID, fileName){
  document.getElementById('addNewControls').insertAdjacentHTML(
    'beforeend',
    '<input type="button" id="' + buttonID + '" value="' + fileName + '">'
  );

  //e.prventDefault();
  document.getElementById(""+buttonID).addEventListener('click', function () {
      var current = document.getElementById('finalTextBox').value;
      if(current){
        current += "-";
      }
      current += fileName;
      document.getElementById('finalTextBox').value = current;
  });
}

function addMeButtonClicked() {
  var buttonID = 0;
  // load buttonIDMap from storage
  chrome.storage.sync.get(['buttonIDMap'], function(result){
    var buttonIDMap = result.buttonIDMap;
    if(typeof buttonIDMap === 'undefined'){
      buttonIDMap = {};
    } else {
      buttonID = Object.keys(buttonIDMap).length;
    }

    var fileName = document.getElementById('addMeBox').value;
    createAddMeButton(buttonID, fileName);
    buttonIDMap[buttonID] = fileName;

    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({'buttonIDMap': buttonIDMap}, function() {
      // Notify that we saved.
      console.log('Settings saved. Button ID = ' + buttonID + ". fileName = " + fileName);
      console.log('buttonIDMap: ' + buttonIDMap[buttonID]);

      buttonID += 1;
    });
  });
}

// function clickAddMeButton() {
//     // Create new button with value, in "addNewControls" container
//     // Add eventListener for button.onclick, pass value to final
//     var data = document.getElementById('addMeBox').value;
//     var text = document.createTextNode(data);
//
//     var newButton = document.createElement("BUTTON");
//     // newButton.id = BUTTONID;
//     newButton.appendChild(text);
//
//     var favorites = document.getElementById('addNewControls');
//     favorites.appendChild(newButton);
//
//     // newButton.value = data;
//     newButton.addEventListener('click', function() {
//         var copyData = document.getElementById('addMeBox').value;
//         current += data;
//         document.getElementById('finalTextBox').value = current;
//     });
//
//     //ADD STORAGE GLOBALLY
//     //Add "storage"in permission
//     chrome.storage.sync.set({
//         BUTTONID: data
//     }, function(){
//       message('Settings saved');
//     });
//     BUTTONID++;
// }

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

    document.getElementById('addMeButton').addEventListener('click', addMeButtonClicked);
    document.getElementById('savebutton').addEventListener('click', saveButtonClicked);
