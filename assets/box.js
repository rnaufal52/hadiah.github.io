const orderButton = document.querySelector(".order");

const addRemoveClass = () => {
  if (!orderButton.classList.contains("animate")) {
    orderButton.classList.add("animate");
    setTimeout(() => {
      orderButton.classList.remove("animate");
      window.location.href = "love.html";
    }, 10000);
  }
};

orderButton.addEventListener("click", addRemoveClass);
