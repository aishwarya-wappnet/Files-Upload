# Files-Upload Validation Using Javascript

![image](https://user-images.githubusercontent.com/123728432/219033438-45bea700-e6ad-4e36-a4bf-c1b28949496b.png)

## Flow

**Global variable: fileUpload.** The global variable sets and unsets its value while passing through various functions to check if the file was 'uploaded'.

**'Submit' Button:** Js file consists of a listener which listens for the click event on 'submit' and the 'checkForEmptyFiles()' function is fired.
- checkForEmptyFiles(): This function shows
     - Alert popup box for the following:
          - When any or no files are selected and uploaded.
          - When any file is selected but not uploaded.
     - Confirm popup box:
          - When all files are selected and uploaded.
          - On confirming 'Ok', the page gets redirected to 'submitted.html' confirming successful submission. On confirming 'cancel', the confirm popup box disappears.
          ![image](https://user-images.githubusercontent.com/123728432/219047404-2946b30b-0216-4465-ac7a-d85a5d0d3f70.png)

**'Upload' Button:** When the 'upload' button is clicked, 'checkForFile()' function is fired.
- checkForFile(): This function shows
     - Error Messages:
          - When the file input is missing.
          - When the file extension is apart from the allowed file extensions.
     - The 'Upload' button changes to 'Uploaded' on successful file upload.
     
**'+' Button:** When the '+' button is clicked, 'addFileOption()' function is fired.
- addFileOption(): This function shows:
     - Alert popup box  for the following:
          - When the current file is not selected.
          - When the current file is selected but not uploaded.
     - Appends the child (new file upload option) to the parent on successful file upload.

**'x' Button:** When the 'x' button is clicked, 'removeFileOption()' function is fired.
- removeFileOption(): This function
     - Does not remove the child (new file upload option) if it is the only child to the parent.
     - Removes the current child (new file upload option) from the parent.  

