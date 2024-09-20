const filterButtons = document.querySelectorAll(".buttons button");
const filterImages = document.querySelectorAll(".cards .card");
const details = document.querySelector(".details");
const imgDetails = document.querySelector(".img-details")
const eyeIcons = document.querySelectorAll(".fa-eye");
const close = document.querySelector(".close");
filterButtons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    // Remove the active class from the currently active button
    document.querySelector(".active").classList.remove("active");
    // Add the active class to the clicked button
    e.target.classList.add("active");
    filterImages.forEach((items)=>{
      items.classList.add("hide");
      if(items.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        items.classList.remove("hide");
      }
    });
});
});
// Add event listener for eye icons to display the image
eyeIcons.forEach((icon)=>{
  icon.addEventListener("click",(e)=>{
    const clickedCard = e.target.closest(".card");
    const clickedImageSrc = clickedCard.querySelector("img").src;
    const existingImage = imgDetails.querySelector("img");
     // If there's an existing image, remove it
    if (existingImage) {
      imgDetails.removeChild(existingImage);
    }
     // Create a new image element and set its source to the clicked image
    const newImage = document.createElement("img");
    newImage.src = clickedImageSrc;
    newImage.alt = "Selected image";
    // Append the new image to the details div
    imgDetails.appendChild(newImage);
    details.style="display:flex;"
  });
});
// Add event listener for the close button to hide the details window
close.addEventListener("click",()=>{
  details.style="display:none;"
});


