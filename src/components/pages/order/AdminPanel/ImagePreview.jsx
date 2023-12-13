import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { isValidUrl } from "../../../../utils/ValidUrl";
const ImagePreview = ({ imageSource, title }) => {
  return (
    <StyledImagePreview className="image-preview">
      {imageSource && isValidUrl(imageSource) ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div className="image-preview">Aucune image</div>
      )}
    </StyledImagePreview>
  );
};

const StyledImagePreview = styled.div`
  grid-row: 1 / span 3;
  display: flex;
  color: ${theme.colors.greySemiDark};
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${theme.colors.greyLight};
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 5px;
  }
`;
export default ImagePreview;
