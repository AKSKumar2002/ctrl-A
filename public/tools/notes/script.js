const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
    attachDownloadListeners(); // Attach listeners after loading notes
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function attachDownloadListeners() {
    const downloadButtons = document.querySelectorAll(".download-btn");
    downloadButtons.forEach(button => {
        button.onclick = async (event) => {
            const noteContent = event.target.previousElementSibling.textContent;

            // Create a new Word document using the docx library
            const doc = new window.docx.Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new window.docx.Paragraph(noteContent),
                        ],
                    },
                ],
            });

            // Generate the .docx file
            const blob = await window.docx.Packer.toBlob(doc);
            const url = URL.createObjectURL(blob);

            // Create a download link
            const a = document.createElement("a");
            a.href = url;
            a.download = "note.docx";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        };
    });
}

createBtn.addEventListener("click", () => {
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";

    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = "Type your note here...";

    let downloadBtn = document.createElement("button");
    downloadBtn.className = "download-btn";
    downloadBtn.textContent = "Download Notes";

    let img = document.createElement("img");
    img.src = "images/delete.png";

    noteDiv.appendChild(inputBox);
    noteDiv.appendChild(downloadBtn);
    noteDiv.appendChild(img);

    notesContainer.appendChild(noteDiv);
    attachDownloadListeners(); // Attach listener to the new button
    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});