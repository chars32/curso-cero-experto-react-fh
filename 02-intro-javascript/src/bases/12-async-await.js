const getImage = async () => {
  try {
    const api_key = "LKrJfOdqLV6F0tfJ2ZKz51ig86pJCDLZ";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );

    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch {
    // mensaje de error
    console.error(error);
  }
};

getImage();
