const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const popupTitle = popupBox.querySelector("header p");
const closeIcon = popupBox.querySelector("header i");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");
const addBtn = popupBox.querySelector("button");

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let  isUpdate = false, updateId;
// getting localStorage notes if exist and parsing them
// to JS object else passing an empty array
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

// Open and close the notes popup
addBox.addEventListener("click", () => {
  titleTag.focus();
  popupBox.classList.add("show");
});
closeIcon.addEventListener("click", () => {
  isUpdate = false;
  titleTag.value = '';
  descTag.value ='';
  addBtn.innerText = "Add Note"
  popupTitle.innerText = "Add a new Note"
  popupBox.classList.remove("show");
});

//Create
function showNotes() {
  document.querySelectorAll(".note").forEach(note => note.remove());
  notes.forEach((note,index) => {
    let liTag = `<li class="note">
                    <div class="details">
                      <p>${note.title}</p>
                      <span>${note.description}</span>
                    </div>
                    <div class="bottom-content">
                      <span>${note.date}</span>
                      <div class="settings">
                        <i onclick='showMenu(this)' class="uil uil-ellipsis-h"></i>
                        <ul class="menu">
                          <li onclick="updateNote(${index},'${note.title}','${note.description}')"<i class="uil uil-pen">Edit</i></li>
                          <li onclick="deleteNote(${index})"><i class="uil uil-trash">Delete</i></li>
                        </ul>
                      </div>
                    </div>
                  </li>`;
  addBox.insertAdjacentHTML("afterend", liTag);
  });
  
};


// Update
function updateNote(noteId, title , desc){
  updateId = noteId;
  isUpdate = true;
  addBox.click();
  titleTag.value = title;
  descTag.value = desc;
  addBtn.innerText = "Update Note"
  popupTitle.innerText = "Update This Note"
  console.log(noteId, title , desc);
}

// Delete
function deleteNote(noteId){
  notes.splice(noteId,1);
  localStorage.setItem("notes", JSON.stringify(notes));
};

showNotes(); 

function showMenu(elem){
  elem.parentElement.classList.add("show");
  document.addEventListener("click", e =>{
    if(e.target.tagName != "I" || e.target != elem){
      elem.parentElement.classList.remove('show')
    }
  })
};

showNotes();

// add note button functionality

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let noteTitle = titleTag.value,
    noteDesc = descTag.value;
  if (noteTitle || noteDesc) {
    // here we get the month,day,year from the current date
    let dateObj = new Date(),
    month = months[dateObj.getMonth()],
    day = dateObj.getDay(),
    year = dateObj.getFullYear();

    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${month} ${day} ${year}`,
    };
   

    let notes = JSON.parse(localStorage.getItem("notes"));
    if(!isUpdate){
      notes.push(noteInfo);
    }else {
      notes[updateId] = noteInfo;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    closeIcon.click();
    showNotes(); 
  }
});
