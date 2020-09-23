$(document).ready(function () {
    const characters = [
        {
            name: "Hulk",
            marvelId: "1009351",
            comicVineId: "2267"
        },
    ];
    console.log(md5("want"));

    let publicKey = "b96debf8a06e6f68f22924e2c930b450";
    let privateKey = "274ea5c7e32c0faf4d49d5ffc01a19459d78299a";
    let ts = 1;
    let hash = md5(ts + privateKey + publicKey);
    let character = "Hulk";


    function searchMarvelAPI() {
        $.ajax({
            url:
                "https://gateway.marvel.com/v1/public/characters?apikey=b96debf8a06e6f68f22924e2c930b450&ts=1&hash=" +
                hash +
                "&name=" +
                character,
            method: "GET",
        }).then(function (response) {
            console.log(response);
        })
    }; 
    
    function marvelAPI() {
        $.ajax({
            url:
                "https://gateway.marvel.com/v1/public/characters?apikey=b96debf8a06e6f68f22924e2c930b450&ts=1&hash=" +
                hash +
                "&name=" +
                character,
            method: "GET",
        }).then(function (response) {
            console.log(response);
        })
    };
    marvelAPI();
    
    function comicVineAPI() {
        $.ajax({
            url:
                "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/character/4005-2267/?api_key=178d99bd87c1b1682755f72ef5e4c9d8a10c479f&format=json&field_list=deck,powers",
            method: "GET",
        }).then(function (response) {
            console.log(response);
        });
    }
    comicVineAPI();
});
