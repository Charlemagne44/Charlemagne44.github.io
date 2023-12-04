import React from "react";
import Button from "@mui/material/Button";

function ShareButton(props) {
  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Your sharing title",
          text: "Your sharing text",
          url: "https://example.com", // Replace with your actual URL
        });
      } else {
        throw new Error("Web Share API is not supported in this browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
      // Handle the error or provide a fallback sharing mechanism
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleShareClick}>
      Share
    </Button>
  );
}

export default ShareButton;
