// 'https://swapi.dev/api/people/1/'

const req = new XMLHttpRequest();

// onload will run if no error
req.onload = function () {
    console.log("IT LOADED!");
    const data = JSON.parse(this.responseText);
    console.log(data.name, data.height)
}

// onerror will run when will get error
req.onerror = function () {
    console.log("ERROR!");
    console.log(this);

}


req.open("GET", "https://swapi.dev/api/people/1/");
// after we opened we need to sen it
req.send();