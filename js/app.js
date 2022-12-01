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
        recherche(words);
    });
}

function recherche (words) {
    if (input.value.length >= 3) {
        let filtre = words.filter(el => el.startsWith(input.value)).slice(0, 10);
        for (let i = 0; i < filtre.length; i++) {
            let new_li = document.createElement("li");
            ul.appendChild(new_li);
            new_li.textContent = filtre[i];
            new_li.addEventListener("click", () => {
                input.value = filtre[i];
            });
        }
    } else {
        ul.innerHTML = "";
    }
}