const openPopUp = document.getElementById('open-pop-up');
const formQuestions = document.getElementById('favorite-movies');
const questionsSubmit = document.getElementById('favorite-movies__submit');
const favoriteMoviesAdd = document.getElementById('favorite-movies__add');

openPopUp.addEventListener('click', openForm);
favoriteMoviesAdd.addEventListener('click', addMovies);
formQuestions.addEventListener('submit', getList);

let movieList = [];

function openForm() {
    formQuestions.classList.remove('hidden');
}

function addMovies(event) {
    event.preventDefault();
    const x = document.getElementById("favorite-movie").value;
    
    if (x.length < 4) {
        alert("Попробуйте ещё раз. Слишком мало букв");
    } else if (x.match(/[a-z-A-Z]/)) {
        alert("Попробуйте ещё раз. Надо писать на русском");
    }
    else {
        movieList.push(x);
        document.getElementById("favorite-movie").value = "";
    }
}
function sortReversList(list) {
    list.sort();
    list.reverse();
}

function getList(event) {
    event.preventDefault();
    sortReversList(movieList)
    console.log(movieList)
}
