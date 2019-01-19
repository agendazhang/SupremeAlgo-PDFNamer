
/////// RETRIEVE DATA FIELDS
// MESSAGE PASSING FROM CONTENT.JS
// Must be done from here to ensure corrent data field retrieved from active tab

// Unstable field
function get_prev_html_title() {
    chrome.runtime.sendMessage({
            call: "getPrevTitle",
            url: document.URL
        },
        function (response) {
            console.log("prev_html", response);
            chrome.tabs.sendMessage({
                    call: "data_prev_html",
                    value: response
                },
                function (response) {
                    return true;
                });

        });
}

// Doesn't work for .pdf files (only body tags appear)
// EG: http://kmmc.in/wp-content/uploads/2014/01/lesson2.pdf
// Q: Where does HTML title come from?
function get_html_title() {
    var titles = document.getElementsByTagName("title");
    var response = "";
    if (titles.length != 0) response = titles[0].innerHTML;
    console.log("curr_html", response);
    chrome.runtime.sendMessage({
            call: "data_curr_html",
            value: response
        },
        function (response) {
            return true;
        });
}

// Guaranteed result
function get_current_URL() {
    var str_array = document.URL.split("/");
    var name_pdf = str_array[str_array.length-1];
    var response = name_pdf.substring(0, name_pdf.length-4);
    console.log("curr_url", response);
    chrome.runtime.sendMessage({
            call: "data_curr_url",
            value: response
        },
        function (response) {
            return true;
        });
}

///////////////

// get_prev_html_title();
// get_html_title();
// get_current_URL();

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.call == "prev_html") {
        chrome.runtime.sendMessage({
                call: "getPrevTitle",
                url: document.URL
            },
            function (response) {
                console.log("prev_html", response);
                sendResponse(response);
            });
    }
    // if (message.call == "data_prev_html") {
    //     document.getElementById("textBox1").value = message.value;
    // } else if (message.call == "data_curr_html") {
    //     if (message.value != "") {
    //         document.getElementById("textBox2").disabled = false;
    //         document.getElementById("textBox2").value = message.value;
    //     } else {
    //         // No value
    //         document.getElementById("textBox2").disabled = true;
    //         document.getElementById("checkbox2").disabled = true;
    //     }
    // } else if (message.call == "data_curr_url") {
    //     document.getElementById("textbox3").value = message.value;
    // }
});
