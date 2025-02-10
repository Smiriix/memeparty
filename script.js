document.addEventListener("DOMContentLoaded", () => {
    inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            customCSS = `@import url("${ new URL(document.location.pathname, document.location.origin).href }css/custom.css");

:root {
    /* Цвет заголовка */
    --titleColor: ${inputs[0].value};
    /* Градиент прогресса */
    --gradient: linear-gradient(to bottom, ${inputs[1].value}, ${inputs[2].value});
    /* Ширина картинки*/
    --width: ${inputs[3].value}px;
    /* Положение картинки X и Y */
    --move: translate(${inputs[4].value}px, ${inputs[5].value}px);
    /* Ссылка на изображение */
    --image: url("${inputs[6].value ? inputs[6].value : new URL(document.location.pathname, document.location.origin).href . "doge.svg"}") no-repeat center center / contain;
}`;
            document.querySelector("#resultCss").value = customCSS;
            document.querySelector("#customCss").innerHTML = customCSS;
        });
    });
    document.querySelector("#copy").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#resultCss").select();
        document.execCommand("copy");
        alert(`Стили были скопированы!
Чтобы начать ими пользоваться, добавьте в "Свойства" -> "Поле CSS"`);
    });
});
