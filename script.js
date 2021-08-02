let search = document.querySelector('#search');

let p = document.querySelector('#filmsCount');

function getFilmsCount() {
    if (!(search.value === undefined) && !(search.value === null) && !(search.value === '')) {
        let list = document.querySelectorAll('li');
        let textList = [];
        for (i = 0; i <= list.length - 1; i++) {
            textList[i] = list[i].innerHTML.toLocaleLowerCase();
        }
        let filtered = textList.filter(element => element.includes(search.value.toLocaleLowerCase()));
        p.innerHTML = filtered.length; 
    } else {
        p.innerHTML = "enter the search value";
    }
}

search.addEventListener('input', getFilmsCount)

