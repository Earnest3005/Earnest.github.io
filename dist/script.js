const bodyEl = document.querySelector("body");
const episodeEl = document.querySelector(".episode");
const episodeTitleEl = document.querySelector(".episode-title");
const ratingEl = document.querySelector(".rating");
const plotEl = document.querySelector(".plot");

generateRandomEpisode();

function generateRandomEpisode() {
  let season, episode, title, rating, plot, imageUrl;
  const random = randomEpisode();

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      season = data.episodes[random].seasonNumber;
      episode = data.episodes[random].episodeNumber;
      title = data.episodes[random].title;
      rating = data.episodes[random].imDbRating;
      plot = data.episodes[random].plot;
      imageUrl = data.episodes[random].image;

      episodeEl.innerText = `S${season}E${episode}`;
      episodeTitleEl.innerText = title;
      ratingEl.innerText = rating;
      plotEl.innerText = plot;

      bodyEl.setAttribute(
        "style",
        `
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('${imageUrl}');
        background-repeat: no-repeat;
        background-attachment: fixed; 
        background-size: cover;
        z-index: -1;
      `
      );
    });
}

function randomEpisode() {
  return Math.floor(Math.random() * 110);
}
