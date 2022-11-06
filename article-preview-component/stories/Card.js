import { createIMG } from "./Image";
import { createAvatar } from "./Avatar";

export const createCard = ({
  hasCard = false,
  hasImage = false,
  hasContent = false,
  hasAvatar = false,
  hasCaption = false,
  title = "Default Title",
  text = "Lorem Ipsum",
  url = "/drawers.jpg",
  alt = "drawers",
  avatarURL = "/avatar-michelle.jpg",
  avatarALT = "michelle",
  name = "Michelle Appleton",
  date = "28 Jun 2020",
}) => {
  const card = document.createElement("article");
  const cardInner = document.createElement("div");
  const cardTitle = document.createElement("h1");
  const cardText = document.createElement("p");
  const cardImage = createIMG({ url, alt });
  const cardAvatar = createAvatar({
    hasCaption,
    avatarURL,
    avatarALT,
    name,
    date,
  });

  card.className = "card";
  cardInner.className = "card-inner";

  cardTitle.className = "heading";
  cardTitle.innerText = title;

  cardText.className = "text";
  cardText.innerText = text;

  hasImage && card.appendChild(cardImage);
  hasCard && card.appendChild(cardInner);
  hasContent && cardInner.appendChild(cardTitle);
  hasContent && cardInner.appendChild(cardText);
  hasAvatar && cardInner.appendChild(cardAvatar);

  return card;
};
