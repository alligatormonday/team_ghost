$(document).ready(function () {});

$(document).ready(function () {
  const characters = [
    {
      name: "Hulk",
      // marvelId: "1009351",
      // comicVineId: "2267"
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
      name: "AntMan",
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

  // <select id="charOneOptions">
  //         <option value="buttOne" disabled selected>Choose Your Character</option>
  //       </select>
  //       <label>CHARACTER</label>
  
  // create the select element dynamically
  let emptySelect = document.createElement("select");
  let emptySelect2 = document.createElement("select")
  emptySelect.setAttribute("id", "charOneOptions");
  emptySelect2.setAttribute("id", "charTwoOptions")
// go over characters and make each one an option with a value (map non-destructively)
  characters.map((item) => {
    let optionItem = `<option value=${item.name}>${item.name}</option>`;
    $(emptySelect).append(optionItem);
    $(emptySelect2).append(optionItem)
  });
//put it on the page
  $("#charOneOptionsContainer").append(emptySelect);
  $("#charTwoOptionsContainer").append(emptySelect2)
// initiate materialize UI 
  $("select").formSelect();

  $("#charOneOptions").on("change", function () {
    let characterOne =($(this).val());
  });
  $("#charTwoOptions").on("change", function () {
    let characterTwo = ($(this).val());
  });

  console.log(md5("want"));

  let publicKey = "b96debf8a06e6f68f22924e2c930b450";
  let privateKey = "274ea5c7e32c0faf4d49d5ffc01a19459d78299a";
  let ts = 1;
  let hash = md5(ts + privateKey + publicKey);

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
    });
  }

  function marvelAPI(character) {
    $.ajax({
      url:
        "https://gateway.marvel.com/v1/public/characters?apikey=b96debf8a06e6f68f22924e2c930b450&ts=1&hash=" +
        hash +
        "&name=" +
        character,
      method: "GET",
    }).then(function (response) {
      console.log("Marvel API Data:");
      console.log(response);
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