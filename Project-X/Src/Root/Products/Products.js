/* List Of Video Games - Line */
const containerGame = document.getElementById("cardBxID");

/* Sticky Navbar */
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

/* List Of Video Games */
const url =
  "https://evosiss-game-database.p.rapidapi.com/getGameList/ldlap3MPTGYdcbsaEYAI2mgmNQmOD5bK/0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5aeb1ca73amshb0ef220fc6fd65dp1165e6jsncf1cbd6f915f",
    "X-RapidAPI-Host": "evosiss-game-database.p.rapidapi.com",
  },
};

try {
  fetch(url, options)
    .then((response) => response.json())
    .then((res_data) => {
      const { data } = res_data;
      for (let i = 0; i < data.length; i++) {
        let titleGame = document.createElement('h4')
        const card = document.createElement("div")
        const info = document.createElement("div")
        const seriesGame = document.createElement("p")
        info.classList.add("info")
        card.classList.add("content")
        titleGame.innerText = data[i].title;
        seriesGame.innerText = data[i].serialName ? data[i].serialName: "Standalone"
        info.appendChild(seriesGame)
        card.appendChild(info)
        card.appendChild(titleGame)
        containerGame.appendChild(card)
      }
    })
    .catch((error) => console.log(error));
} catch (error) {
  console.error(error);
}
