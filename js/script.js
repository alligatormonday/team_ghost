$(document).ready(function () {
    const characters = [
        {
            name: "Hulk",
            // marvelId: "1009351",
            // comicVineId: "2267"
        },
        {
            name: "Spiderman",
        },
        {
            name: "Iron Man",
        },
        {
            name: "Thor",
        },
        {
            name: "Thanos",
        },
        {
            name: "Storm",
        },
        {
            name: "Venom",
        },
        {
            name: "Black Panther",
        },
        {
            name: "Hawkeye",
        },
        {
            name: "Captain Marvel",
        },
        {
            name: "Captain America",
        },
        {
            name: "Green Goblin",
        },
        {
            name: "Batwing",
        },
        {
            name: "Wolverine",
        },
        {
            name: "Callisto",
        },
        {
            name: "Ant-Man",
        },
        {
            name: "Copycat",
        },
        {
            name: "Vision",
        },
        {
            name: "Void",
        },
        {
            name: "Blade",
        },
    ];
    
    // Code to generate the buttons
    //***Left & Right Generated Buttons */
    //***Need to work on the Class to properly display the buttons */
    for (let i = 0; i < characters.length; i++) {
        //Left list of buttons
        let leftCharacterButton = $('<button class="leftButton btnSecond btn-primary" type="button">' + characters[i].name + '</button>');
        //Right list of buttons
        let rightCharacterButton = $('<button class=" rightButton btnSecond btn-primary" type="button">' + characters[i].name + '</button>');
        //Append Left&Right list of buttons
        $("#buttonsAreaRight").append(rightCharacterButton);
        $("#buttonsAreaLeft").append(leftCharacterButton);
    }    
    
    //Listens and detects if the user clicks the 'left-character-buttons'
    $(".leftButton").on("click", function () {
        let leftCharacter = ($(this).text());
        console.log("Left Selected: " + leftCharacter);
    });

    //Listens and detects if the user clicks the 'right-character-buttons'
    $(".rightButton").on("click", function () {
        let  rightCharacter = ($(this).text());
        console.log("Right Selected: " + rightCharacter);
    });
    




    
    console.log(md5("want"));

    let publicKey = "b96debf8a06e6f68f22924e2c930b450";
    let privateKey = "274ea5c7e32c0faf4d49d5ffc01a19459d78299a";
    let ts = 1;
    let hash = md5(ts + privateKey + publicKey);
    let character = "Thor";


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
            console.log("Marvel API Data:")
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
            console.log("ComicVine API Data:")
            console.log(response);
        });
    }
    comicVineAPI();
});
