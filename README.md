PDF Namer
==
## How to use the extension

1. When you need to download a file online, load this extension
2. Add new keywords that you want to use frequently in file names (e.g. a module code when downloading the modules' lecture notes)
3. If you have added certain keywords you need before, the extension will save them for you! You can call them back by selecting one or a set of keywords from the keywords box. This will append the word in the final text box
4. You can also manually edit the final text box if you want to add few more letters from the keyword you selected (e.g. module code + '1')
5. Click on "Save To" to choose the directory to save the pdf file. The name of the file is same as the one in the final text box

# Inspiration
When we download a new file online, it is often tedious to key in all the words to rename the file. For example, if a student is downloading lecture notes of a module CS2040 and trying to rename each note as CS2040_1, CS2040_2, and so on, he or she always need to type ‘CS2040’ repeatedly. This will save a lot of time typing duplicate words.

# What it does
This chrome extension saves keywords that a user want to repeatedly use when renaming a file name. Going back to the previous example, a user can save ‘CS2040’ as a keyword in the popup window. Then, the user can use the keyword by clicking it from the keywords box in the popup window whenever renaming CS2040C lecture notes without typing out all the letters!

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
