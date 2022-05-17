let form = [];
let formConsole = [];

function movieForm(event) {
    event.preventDefault()

    let content = document.getElementById('content');
    
    let movie = document.getElementById('movie');
    let year = document.getElementById('year');
    let actors = document.getElementById('actors');

    content.innerHTML += 'Názov filmu: ' + movie.value + ' Rok vydania: ' + year.value + ' Herci: ' + actors.value + "<br>";

    form.push({movie:movie.value, year:year.value, actors:actors.value});

    console.log(form)

    formConsole.push({movie:movie.value, year:year.value, actors:actors.value});
}

function del(event) {
    event.preventDefault()

    content.removeChild(content.lastChild);

    form.pop({movie:movie.value, year:year.value, actors:actors.value});
    
    console.log(form)
}

function dellAll(event) {
    event.preventDefault()

    content = document.getElementById("content");

    while (content.hasChildNodes()) {
    content.removeChild(content.lastChild);
    }

    form = [];
    console.log(form)
}