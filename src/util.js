//Media resize 


export const smallImage = (imageURL, size) => {
  if (imageURL) {
  const image = imageURL.match(/media\/screenshots/)
    ? imageURL.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imageURL.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
} else {
  return;
}
};
