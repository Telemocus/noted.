const addBox =  document.querySelector(".add-box");
const popupBox =  document.querySelector(".popup-box");
const closeIcon =  popupBox.querySelector("header i");
const titleTag =  popupBox.querySelector("input");
const descTag =  popupBox.querySelector("textarea");
const addBtn =  popupBox.querySelector("button");


// Open and close the notes popup
addBox.addEventListener('click', ()=>{
    popupBox.classList.add('show');
});
closeIcon.addEventListener('click', ()=>{
    popupBox.classList.remove('show');
});

// add note button functionality

addBtn.addEventListener('click',e =>{
    e.preventDefault();

    let noteTitle = titleTag.value,
    noteDecr = descTag.value;

    console.log('');
})