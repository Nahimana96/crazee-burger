export const isValidUrl = (imageUrl) => {
  const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
  return imageUrlRegex.test(imageUrl);
};
