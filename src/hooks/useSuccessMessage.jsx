import { useState } from "react";

export const useSuccessMessage = () => {
  // state
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // comportement
  const displaySuccessMessage = () => {
    // set isFormSubmitted to true to show success message
    setIsFormSubmitted(true);
    // set isFormSubmitted to false after 2s to hide success message
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 2000);
  };
  return { isFormSubmitted, displaySuccessMessage };
};
