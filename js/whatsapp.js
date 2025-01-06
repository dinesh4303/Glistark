const closeButton = document.querySelector(".close");
const shareButton = document.querySelector(".share");
const shareButtons = document.querySelector(".share-buttons");

const onClickHandler = () => {
    shareButtons.classList.toggle("active");
}

closeButton.onclick = onClickHandler;
shareButton.onclick = onClickHandler;
    