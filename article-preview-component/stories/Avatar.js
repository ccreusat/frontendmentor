import { createIMG } from "./Image";

export const createAvatar = ({
  hasCaption = false,
  avatarURL,
  avatarALT,
  name = "Michelle Appleton",
  date = "28 Jun 2020",
}) => {
  const avatar = document.createElement("figure");
  const avatarThumbnail = document.createElement("div");
  const avatarImage = createIMG({ avatarURL, avatarALT });

  const avatarFigcaption = document.createElement("figcaption");
  const avatarCaption = `<strong>${name}</strong><span>${date}</span>`;

  avatar.className = "avatar";
  avatarThumbnail.className = "avatar-thumbnail";
  avatarFigcaption.className = "avatar-caption";

  avatarThumbnail.appendChild(avatarImage);
  avatar.appendChild(avatarThumbnail);

  if (hasCaption) {
    avatarFigcaption.innerHTML = avatarCaption;
    avatar.appendChild(avatarFigcaption);
  }

  return avatar;
};
