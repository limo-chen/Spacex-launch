// 单个发射项目组件
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Collapse,
} from "@mui/material";

function LaunchItem({ launch }) {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <CardMedia image={launch.links.patch.small} />
      <CardContent>
        <Typography>{launch.date_utc}</Typography>
        <Typography variant="h5">{launch.name}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setOpen(true)}>
          Details
        </Button>
      </CardActions>
      <Collapse in={open}>
        <LaunchDetail launch={launch} />
      </Collapse>
    </Card>
  );
}

export default LaunchItem;
