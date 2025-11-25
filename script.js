document.addEventListener("DOMContentLoaded", () => {
    inputs = document.querySelectorAll("input");
    urlPage = new URL(document.location.pathname, document.location.origin).href;
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            customCSS = `@import url("${ urlPage }css/custom.css");

:root {
    --titleColor: ${inputs[0].value};
    --gradient: linear-gradient(to bottom, ${inputs[1].value}, ${inputs[2].value});
    --width: ${inputs[3].value}px;
    --move: translate(${inputs[4].value}px, ${inputs[5].value}px);
    --image: url("${inputs[6].value ? inputs[6].value : (urlPage + "doge.svg") }") no-repeat center center / contain;
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
