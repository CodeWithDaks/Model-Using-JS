// console.log("Hello");

const modal=document.querySelector(".modal");
const openModalButton=document.querySelector(".openModalButton");
const closeModalButton=document.querySelector(".close_modal");


//For opening the Modal
const openModal=()=>{
    modal.classList.remove("close");
}

openModalButton.addEventListener("click",()=>{
    openModal();
});


//For closing the modal
const closeModal=()=>{
    modal.classList.add("close");
}

closeModalButton.addEventListener("click",()=>{
   closeModal();
})



