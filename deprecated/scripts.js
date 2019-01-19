// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     console.log("data field updating");
//     if (message.call == "data_prev_html") {
//         document.getElementById("textBox1").value = message.value;
//     } else if (message.call == "data_curr_html") {
//         if (message.value != "") {
//             document.getElementById("textBox2").disabled = false;
//             document.getElementById("textBox2").value = message.value;
//         } else {
//             // No value
//             document.getElementById("textBox2").disabled = true;
//             document.getElementById("checkbox2").disabled = true;
//         }
//     } else if (message.call == "data_curr_url") {
//         document.getElementById("textbox3").value = message.value;
//     }
// });

function getActiveTabId(callback) {
    chrome.tabs.query({
            active: true
        },
        function (tabArray) {
            callback(tabArray[0]);
        });
}


var oneCount = 0;
var twoCount = 0;
var threeCount = 0;
function checkTicked1() {
    var data = document.getElementById('textBox1').value;
    var current = document.getElementById('textBox4').value;
    if(oneCount % 2 == 0) {
        current += data;
        oneCount++;
    }
    else {
        current = current.replace(data, "");
        oneCount++;
    }
    document.getElementById('textBox4').value = current;
}

function checkTicked2() {
    var checkbox = document.getElementById('checkBox2');
    var data = document.getElementById('textBox2').value;
    var current = document.getElementById('textBox4').value;
    if(twoCount % 2 == 0) {
        current += data;
        twoCount++;
    }
    else {
        current = current.replace(data, "");
        twoCount++;
    }
    document.getElementById('textBox4').value = current;
}

function checkTicked3() {
    var checkbox = document.getElementById('checkBox3');
    var data = document.getElementById('textBox3').value;
    var current = document.getElementById('textBox4').value;
    if(threeCount % 2 == 0) {
        current += data;
        threeCount++;
    }
    else {
        current = current.replace(data, "");
        threeCount++;
    }
    document.getElementById('textBox4').value = current;
}

function saveButtonClicked() {
    chrome.storage.sync.set({
    fileNamePrefix: document.getElementById('textBox4').value,
  }, function() {
    var status = document.getElementById('savebutton');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 5000);
  });
}

console.log("hi");

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkbox1').addEventListener('click', checkTicked1);
    document.getElementById('checkbox2').addEventListener('click', checkTicked2);
    document.getElementById('checkbox3').addEventListener('click', checkTicked3);
    document.getElementById('savebutton').addEventListener('click', saveButtonClicked);

    // doInCurrentTab(function (tab) { activeTab = tab.id; })
    // chrome.tabs.sendMessage(activeTab, {
    //         call: "prev_html"
    //     },
    //     {},
    //     function (response) {
    //         document.getElementById("textBox1").value = response.prev_html;
    //         if (response.curr_html != "") {
    //             document.getElementById("textBox2").disabled = false;
    //             document.getElementById("textBox2").value = response.curr_html;
    //         } else {
    //             // No value
    //             document.getElementById("textBox2").disabled = true;
    //             document.getElementById("checkbox2").disabled = true;
    //         }
    //         document.getElementById("textBox3").value = response.curr_url;
    //     });
    var activeTabId = -1;
    getActiveTabId(function (tab) { activeTabId = tab.id; });
    console.log(activeTabId);
    // chrome.tabs.sendMessage(activeTab, {
    //         call: "prev_html"
    //     },
    //     function (response) {
    //         document.getElementById("textBox1").value = response.prev_html;
    //     });
});
