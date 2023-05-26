// 发射详情组件
import Typography from "@mui/material";

function LaunchDetail({ launch }) {
  return (
    <div>
      <Typography variant="h4">{launch.name}</Typography>
      <Typography>{launch.date_utc}</Typography>
      <img src={launch.links.patch.large} alt={launch.name} />

      <Typography>Details:</Typography>
      <Typography>Rocket: {launch.rocket.name}</Typography>
      <Typography>Payload: {launch.payload_ids.join(", ")}</Typography>
      <Typography>Launch Site: {launch.launch_site.name}</Typography>
      <Typography>Launch Success: {launch.launch_success ? "Yes" : "No"}</Typography>
      <Typography>Details: {launch.details}</Typography>
    </div>
  );
}

export default LaunchDetail;
