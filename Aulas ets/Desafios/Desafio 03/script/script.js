function toggleText(button) {

    const text = button.nextElementSibling;

    if (text.style.display === "none") {
        text.style.display = "block";
        button.textContent = "Leia menos"
    }
    else {
        text.style.display = "none";
        button.textContent = "Leia mais";
    }
}

const buttons = document.querySelectorAll(".mybutton");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        toggleText(this); // Passa o próprio botão como argumento para a função
    });
});







