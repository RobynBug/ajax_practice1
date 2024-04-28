console.log("Let's get this party started!");

// get request function
async function getGifRequest(searchRequest) {
  try {
    const res = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${searchRequest}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    );
    const dataArray = Array.from(res.data.data);
    getRandomGif(dataArray);
  } catch (e) {
    alert("No GIF found");
    const res = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    );
    const dataArray = Array.from(res.data.data);
    getRandomGif(dataArray);
  }
}
// get random image from returned GIFs
function getRandomGif(array) {
  const lengthOfArray = array.length;
  const randomNum = Math.floor(Math.random() * lengthOfArray);
  displayGif(array[randomNum]);
}

//display on page
function displayGif(object) {
  const image = $("<img>");
  image.attr("src", object.images.original.url);
  $(".gifResults").append(image);
}

//delete function
function deleteGifs() {
  $(".gifResults").html("");
}

//submit button listener
$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    const input = $("#inputSearch").val();
    getGifRequest(input);
    $("#inputSearch").val("");
  });
  $("#delete").click(function (e) {
    e.preventDefault();
    deleteGifs();
  });
});
//delete button listener
