# Team Name: SupremeAlgo
# Project Name: PDFNamer
# Description: A Google Chrome extension that helps users save time when renaming PDF files when saving them online.
==
# Inspiration
When we download a new PDF file online, it is often tedious to key in all the words to rename the file. For example, if a student is downloading lecture notes of a module `CS1010` and trying to rename each note as `CS1010-lecture-1.pdf`, `CS1010-lecture-2.pdf`, `CS1010-lecture-3.pdf` etc, he or she always need to type the keywords `CS1010` and `lecture` repeatedly. Much time would be conserved if he or she can save the keywords somewhere so as to reuse them next time.

# What this Google Chrome extension does
This chrome extension saves keywords that a user want to repeatedly use when renaming a file name when downloading a PDF file. Going back to the previous example, a user can save the keywords `CS1010` and `lecture` in the extension. Then, the user can use the keyword by clicking it from the keywords box in the extension whenever he wants to rename a similar PDF file when downloading it.

# How to install and use this Google Chrome extension

1. Clone this repo into a local drive.
2. In Google Chrome, go to `chrome://extensions/` and turn `Developer Mode` to ON. Then click on `Load Unpacked` and add the cloned folder.
3. Go to a PDF file on a website and open the extension. The extension can only be loaded if it is on a page that ends with `.pdf`.
4. Add new keywords that you want to use frequently in file names (e.g. a module code when downloading the modules' lecture notes) in the `Add Name` text box. A new button with the keyword should appear. These buttons will remain there every time you reload the extension.
5. Now if you click on the newly created keyword buttons, the keyword will be appended to the end of the `Final File Name` text box.
6. You can also manually edit the `Final File Name` text box.
7. Click on `Save To` button to choose the directory to save the PDF file. The name of the file is same as the one in the `Final File Name` text box.
8. You can also delete any keyword button by pressing the `X` button.
