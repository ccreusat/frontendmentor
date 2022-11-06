export const createIMG = props => {
  const imageWrapper = document.createElement("div");
  const image = document.createElement("img");

  image.src = Object.values(props)[0];
  image.alt = Object.values(props)[1];

  imageWrapper.className = "aspect-box";
  imageWrapper.appendChild(image);

  return imageWrapper;
};
