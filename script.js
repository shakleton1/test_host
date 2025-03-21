document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    // Добавляем класс active для анимации появления контента
    setTimeout(() => {
        container.classList.add("active");
    }, 100);

    // Обработка перехода на другую страницу
    const goToPage2Button = document.getElementById("goToPage2");
    const goToPage1Button = document.getElementById("goToPage1");

    if (goToPage2Button) {
        goToPage2Button.addEventListener("click", () => {
            navigateTo("page2.html");
        });
    }

    if (goToPage1Button) {
        goToPage1Button.addEventListener("click", () => {
            navigateTo("index.html");
        });
    }

    function navigateTo(page) {
        // Убираем класс active для анимации исчезновения
        container.classList.remove("active");

        // Ждем завершения анимации перед переходом
        setTimeout(() => {
            window.location.href = page;
        }, 500); // Время должно совпадать с длительностью анимации в CSS
    }
});
