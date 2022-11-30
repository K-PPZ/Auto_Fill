const httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "../liste_mot.txt");
httpRequest.onload = () => {
    ready();
}
httpRequest.send();

let input = document.getElementById("input");
let ul = document.getElementById("ul");

function ready () {
    console.log(httpRequest.response.split("\r\n"));
    let words = httpRequest.response.split("\r\n");
    input.addEventListener("input", () => {
        recherche(words);
    });
}

function recherche (words) {
    if (input.value.length >= 3) {
        let new_li = document.createElement("li");
        new_li.textContent = words.filter(el => el.startsWith(input.value));
        ul.appendChild(new_li);
        console.log(words.filter(el => el.startsWith(input.value)));
    }
}



// if (input.value[3] == word_eclater[0]) {
//     let new_li = document.createElement("li");
//     new_li.classList.add("li");
//     new_li.textContent = word_eclater.join("");
//     ul.appendChild(new_li);

//     new_li.addEventListener("click", () => {
//         input.value = word_eclater.join("");
//     });
// }