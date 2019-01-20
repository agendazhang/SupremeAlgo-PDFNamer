Team Name: SupremeAlgo
Project Name: PDFNamer
==
# Inspiration
When we download a new PDF file online, it is often tedious to key in all the words to rename the file. For example, if a student is downloading lecture notes of a module `CS1010` and trying to rename each note as `CS1010-lecture-1.pdf`, `CS1010-lecture-2.pdf`, `CS1010-lecture-3.pdf` etc, he or she always need to type the keywords `CS1010` and `lecture` repeatedly. Much time would be conserved if he or she can save the keywords somewhere so as to reuse them next time.

# What it does
This chrome extension saves keywords that a user want to repeatedly use when renaming a file name when downloading a PDF file. Going back to the previous example, a user can save the keywords `CS1010` and `lecture` in the extension. Then, the user can use the keyword by clicking it from the keywords box in the extension whenever he wants to rename a similar PDF file when downloading it.

## How to install and use this Google Chrome extension

1. Clone this repo into a local drive.
2. In Google Chrome, go to `chrome://extensions/` and turn `Developer Mode` to ON. Then click on `Load Unpacked` and add the cloned folder.
3. Go to a PDF file on a website and open the extension. The extension can only be loaded if it is on a page that ends with `.pdf`.
4. Add new keywords that you want to use frequently in file names (e.g. a module code when downloading the modules' lecture notes) in the `Add Name` text box. A new button with the keyword should appear.
5. Now if you click on the newly created keyword buttons, the keyword will be appended to the end of the `Final File Name` text box.
6. You can also manually edit the `Final File Name` text box.
7. Click on `Save To` button to choose the directory to save the PDF file. The name of the file is same as the one in the `Final File Name` text box.

# How we built it
A popup window with a "add me" button reads the input a user key in. It saves the data locally so that it can be recovered whenever a user trying to download a file. Each keyword added works as a button that can add the corresponding keyword into a final text box when the button is clicked.

# Challenges we ran into
1) Our storage of user-defined buttons are not preserved across different sessions. We would like these previous user-defined buttons to be loaded into the extension everytime the user loads the extension at a website.

2) Difficulties in message parsing that led us to scrap automated scraping of contextually relevant terms from the pdf document and website.

# Accomplishments that we're proud of
There were many big and small challenges when debugging the code. Even more, we have no experience with Javascript at all before the hackathon. Starting from scratch to create a chrome extension that has the basic functionalities was fulfilling. We are confident to fix the bugs if we are given more time and deliver the complete extension.

# What we learned
This was the first hackathon for all of us in the team. Since many parts in our program depends on the other parts, knowing how we can separate each task effectively wasn’t straightforward at first. Through many different trials, we learned what kind of things we need to consider when designing the workflow.

# What’s next?
We are planning to fix the current bugs and deliver the complete extension. This will give more choices to the user that can meet the user’s need in a better way when renaming files.
