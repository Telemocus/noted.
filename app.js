const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");
const titleTag = popupBox.querySelector("input");
const descTag = popupBox.querySelector("textarea");
const addBtn = popupBox.querySelector("button");

const months = [
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

// Open and close the notes popup
addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});
closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show");
});

// add note button functionality

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let noteTitle = titleTag.value,
    noteDesc = descTag.value;
  if (noteTitle || noteDesc) {
    // here we get the month,day,year from the current date
    let dateObj = new Date();
    month = months[dateObj.getMonth()];
    day = dateObj.getDay();
    year = dateObj.getFullYear();
    console.log(month, day, year);

    let noteInfo = {
        title: noteTitle, description: noteDesc,

        date: `${month} ${day} ${year}`
    }
    const notes = [];

    
  }
});
