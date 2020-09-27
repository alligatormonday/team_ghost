$(document).ready(function () {
  const characters = [
    {
      name: "Hulk",
    },
    {
      name: "Spider-Man",
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
      name: "Carnage",
    },
    {
      name: "Black Panther",
    },
    {
      name: "Hawkeye",
    },
    {
      name: "Deadpool",
    },
    {
      name: "Captain America",
    },
    {
      name: "Cable",
    },
    {
      name: "Colossus",
    },
    {
      name: "Wolverine",
    },
    {
      name: "Callisto",
    },
    {
      name: "Cyclops",
    },
    {
      name: "Mysterio",
    },
    {
      name: "Vision",
    },
    {
      name: "Punisher",
    },
    {
      name: "Blade",
    },
  ];

  // <select id="charOneOptions">
  //         <option value="buttOne" disabled selected>Choose Your Character</option>
  //       </select>
  //       <label>CHARACTER</label>

  // Create the 'select' element dynamically
  let emptySelect = document.createElement("select");
  let emptySelect2 = document.createElement("select");
  emptySelect.setAttribute("id", "charOneOptions");
  emptySelect2.setAttribute("id", "charTwoOptions");

  // Go over characters in array and make each one an option with a value (map rather than fromEach to the array non-destructively)
  characters.map((item) => {
    let optionItem;
    // Handles 'spaces' in character names
    if (item.name.includes(" ")) {
      let urlString = item.name.replace(" ", "%20");
      optionItem = `<option value=${urlString}>${item.name}</option>`;
    } else {
      optionItem = `<option value=${item.name}>${item.name}</option>`;
    }
    $(emptySelect).append(optionItem);
    $(emptySelect2).append(optionItem);
  });
  //Render character options to page
  $("#charOneOptionsContainer").append(emptySelect);
  $("#charTwoOptionsContainer").append(emptySelect2);
  // initiate materialize UI
  $("select").formSelect();

  $("#charOneOptions").on("change", function () {
    let characterOne = $(this).val();
    marvelAPI(characterOne, "one");
    superHeroAPI(characterOne, "one");
  });
  $("#charTwoOptions").on("change", function () {
    let characterTwo = $(this).val();
    marvelAPI(characterTwo, "two");
    superHeroAPI(characterTwo, "two");
  });

  // console.log(md5("want"));

  // Marvel API Keys
  let publicKey = "b96debf8a06e6f68f22924e2c930b450";
  let privateKey = "274ea5c7e32c0faf4d49d5ffc01a19459d78299a";
  let ts = 1;
  let hash = md5(ts + privateKey + publicKey);

  function marvelAPI(character, boxToChange) {
    console.log(character);

    $.ajax({
      url:
        "https://gateway.marvel.com/v1/public/characters?apikey=b96debf8a06e6f68f22924e2c930b450&ts=1&hash=" +
        hash +
        "&name=" +
        character,
      method: "GET",
    }).then((response) => {
      let name = response.data.results[0].name;
      let image =
        response.data.results[0].thumbnail.path +
        "." +
        response.data.results[0].thumbnail.extension;
      let bio = response.data.results[0].description;
      console.log(image);
      if (boxToChange === "one") {
        $("#charOneName").text(name);
        console.log(image);
        $("#charOneImage").attr(
          "style",
          `background-image:url('${image}');background-size:contain;background-repeat: no-repeat;background-position: center; `
        );

        $("#charOneBio").text(bio);
      } else {
        $("#charTwoName").text(name);
        $("#charTwoImage").attr(
          "style",
          `background-image:url('${image}');background-size:contain;background-repeat: no-repeat;background-position: center; `
        );
        $("#charTwoBio").text(bio);
      }
    });
  }

  function superHeroAPI(character, boxToChange) {
    $.ajax({
      url:
        "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/3595773343780313/search/" +
        character,
      method: "GET",
    }).then(function (response) {
      if (boxToChange === "one") {
        let intP = `<p>Intelligence \n ${response.results[0].powerstats.intelligence}</p>`;
        let comP = `<p>Combat \n ${response.results[0].powerstats.combat}</p>`;
        let spdP = `<p>Speed \n ${response.results[0].powerstats.speed}</p>`;
        let strP = `<p>Strength \n ${response.results[0].powerstats.strength}</p>`;
        let powP = `<p>Power \n ${response.results[0].powerstats.power}</p>`;
        let duraP = `<p>Durability \n ${response.results[0].powerstats.durability}</p>`;
        $("#charOneIntelligence").html(intP);
        $("#charOnePower").html(powP);
        $("#charOneSpeed").html(spdP);
        $("#charOneStrength").html(strP);
        $("#charOneDurability").html(duraP);
        $("#charOneCombat").html(comP);
      } else {
        let intP = `<p>Intelligence \n ${response.results[0].powerstats.intelligence}</p>`;
        let comP = `<p>Combat \n ${response.results[0].powerstats.combat}</p>`;
        let spdP = `<p>Speed \n ${response.results[0].powerstats.speed}</p>`;
        let strP = `<p>Strength \n ${response.results[0].powerstats.strength}</p>`;
        let powP = `<p>Power \n ${response.results[0].powerstats.power}</p>`;
        let duraP = `<p>Durability \n ${response.results[0].powerstats.durability}</p>`;
        $("#charTwoIntelligence").html(intP);
        $("#charTwoPower").html(powP);
        $("#charTwoSpeed").html(spdP);
        $("#charTwoStrength").html(strP);
        $("#charTwoDurability").html(duraP);
        $("#charTwoCombat").html(comP);
      }
    });
  }

  function comicVineAPI(character) {
    $.ajax({
      url:
        "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/search/?api_key=178d99bd87c1b1682755f72ef5e4c9d8a10c479f&format=json&resources=issue&query=" +
        character,
      method: "GET",
    }).then(function (response) {
      console.log("ComicVine API Data:");
      console.log(response);
    });
  }
});

// Code to generate the buttons
//***Left & Right Generated Buttons */
//***Need to work on the Class to properly display the buttons */
//   const test = `<div class="input-field col s12">
//   <select multiple>
//     <option value="" disabled selected>Choose your option</option>
//     <option value="1">Option 1</option>
//     <option value="2">Option 2</option>
//     <option value="3">Option 3</option>
//   </select>
//   <label>Materialize Multiple Select</label>
// </div>`;
//   for (let i = 0; i < characters.length; i++) {
//     //Left list of buttons
//     let leftCharacterButton = $(
//       '<button class="leftButton btnSecond btn-primary" type="button">' +
//         characters[i].name +
//         "</button>"
//     );
//     //Right list of buttons
//     let rightCharacterButton = $(
//       '<button class=" rightButton btnSecond btn-primary" type="button">' +
//         characters[i].name +
//         "</button>"
//     );
//     //Append Left&Right list of buttons
//     $("#buttonsAreaRight").append(rightCharacterButton);

//   }
//   $("#buttonsAreaLeft").append(test);

//Listens and detects if the user clicks the 'left-character-buttons' AND goes out to the API to grab the data
// $(".leftButton").on("click", function () {
//   let leftCharacter = $(this).text();
//   console.log("Left Selected: " + leftCharacter);
//   marvelAPI(leftCharacter);
//   comicVineAPI(leftCharacter);
// });

// //Listens and detects if the user clicks the 'right-character-buttons' AND goes out to the API to grab the data
// $(".rightButton").on("click", function () {
//   let rightCharacter = $(this).text();
//   console.log("Right Selected: " + rightCharacter);
//   marvelAPI(rightCharacter);
//   comicVineAPI(rightCharacter);
// });
