// global variable
let fileUpload;

// this function runs after submitting the form
function checkForEmptyFiles() {
    let files = document.querySelectorAll('input');
    if(fileUpload === false){
        alert('Please Upload All Files!');
        window.location("http://127.0.0.1:5500/index.html");
        return;
    }
    let allUploads = true;
    files.forEach((file) => {
        if(!file.value){
            allUploads = false;
        }
    });
    if(allUploads === false){
        alert('Please Upload All Files!');
        window.location("http://127.0.0.1:5500/index.html");
        return;
    }else{
        if(!confirm("Are you sure you want to submit?")){
            window.location("http://127.0.0.1:5500/index.html");
            return;
        }else{
            window.location.replace("http://127.0.0.1:5500/submitted.html");
            return;
        }
    }
}

// to update 'fileUpload' variable to false on just file selection
function selectedFile(){
    fileUpload = false;
}

// on 'upload' button click: to check if file is selected or not. If it is selected, 
// check for file extension and update 'fileUpload' variable accordingly 
function checkForFile(event, parentNode, currNode){
    event.preventDefault;
    let inputFile = parentNode.querySelector('input');
    let errorMsg = parentNode.querySelector('.errorMsg');
    let filePath = inputFile.value;

    if(!filePath){
        errorMsg.classList.add('d-block');
        errorMsg.innerText = "*File Missing.";
        fileUpload = false;
    }else{
        errorMsg.classList.remove('d-block');
        // Allowed file types
        var regex = /(.csv|.xlsx|.doc|.docx|.pdf)$/i;
       // The test() method tests for a match in a string.
        if(!regex.test(filePath)){
            errorMsg.classList.add('d-block');
            errorMsg.innerText = "*Only .docx, .csv, .xlsx, .pdf files allowed!"
            inputFile.value = '';
            fileUpload = false;
        }else{
            errorMsg.classList.remove('d-block');
            currNode.innerText = "Uploaded";
            fileUpload = true;
        }
    }
}

// add new file option via '+' button only if the current file is uploaded i.e checked 
// if the file exists with the allowed extensions
function addFileOption(event, parentNode){
    event.preventDefault;
    let parent = document.getElementById('divContainer');
    let div = document.getElementById('divContainer').firstElementChild;
    let inputFile = parentNode.querySelector('input');

    if(!inputFile.value){
        alert('Upload Current file!');
    }else if(fileUpload === false){
        alert('Upload Current File!');
    }else{
        let child = parent.appendChild(div.cloneNode(true));
        child.querySelector('input').value = '';
        child.querySelector('button').innerText = "Upload";
        fileUpload = false;
    }
}

// remove file option via 'x' button. Do not remove child if it is the only child present 
// in the parent i.e divContainer(here)
function removeFileOption(currParent){
    let parent = document.getElementById('divContainer');
    if(!(parent.children.length === 1)){
        parent.removeChild(currParent);
        fileUpload = true;
    }
}

// on submitting the form
let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkForEmptyFiles();
})

