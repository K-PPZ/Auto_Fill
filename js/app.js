const httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "../liste_mot.txt");
httpRequest.onload = () => {
    ready();
}
httpRequest.send();

let input = document.getElementById("input");
let ul = document.getElementById("ul");

function ready () {
    let words = httpRequest.response.split("\r\n");
    input.addEventListener("input", () => {
        console.log(true);
        debounce(recherche, words);
    });
}

function recherche (words) {
    ul.innerHTML = "";
    ul.classList.remove("visible");
    ul.classList.add("hidden");
    let filtre = words.filter(el => el.startsWith(input.value)).slice(0, 10);
    if (input.value.length >= 3) {
        for (let i = 0; i < filtre.length; i++) {
            ul.classList.remove("hidden");
            ul.classList.add("visible");
            let new_li = document.createElement("li");
            ul.appendChild(new_li);

            new_li.addEventListener("click", () => {
                input.value = filtre[i];
                debounce(recherche, words);
            });

            new_li.textContent = filtre[i];
        }
    }
}

function debounce (func, param) {
    const time = setTimeout(() => {
        func(param);
    }, 500);
    input.addEventListener("input", () => {
        clearTimeout(time);
    });
}