const api_key = "LKrJfOdqLV6F0tfJ2ZKz51ig86pJCDLZ";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch((err) => console.warn(err));
