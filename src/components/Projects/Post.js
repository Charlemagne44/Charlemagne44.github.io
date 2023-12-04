import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia, makeStyles } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Post(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
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
        <Button size="small" sx={{ color: "blue" }}>
          Share
        </Button>
        <Button size="small" sx={{ color: "blue" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
