import axios from "axios";

export function fetchRandomCatGif() {
    const apiURL = "https://cataas.com/cat?json=true";

    axios.get(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const catData = data;
      const catImageContainer = document.getElementById("catImageContainer");

      if (catData._id) {
        const catImage = document.createElement("img");
        catImage.src = `https://cataas.com/cat/${catData._id}`;
        catImage.alt = "Random Cat";
        catImageContainer.appendChild(catImage);
      }
    })
        .catch((error) => {
            console.error('Error fetching cat image:', error);
        })
}