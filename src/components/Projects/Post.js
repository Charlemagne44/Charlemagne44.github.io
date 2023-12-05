import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Post(props) {
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
    }
  };

  const handleLearnMoreClick = () => {
    window.open(props.url, "_blank");
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 300,
        maxHeight: 550,
        minHeight: 550,
        backgroundColor: "rgba(226, 224, 227, 1)",
        color: "white",
      }}
    >
      <CardMedia sx={{ height: 400 }} image={props.img} title={props.alt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color={"black"}>
          <b>{props.title}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(0, 0, 0, 0.78)" }}>
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "blue" }} onClick={handleShareClick}>
          Share
        </Button>
        <Button
          size="small"
          sx={{ color: "blue" }}
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
