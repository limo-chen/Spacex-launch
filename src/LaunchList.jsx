// 发射列表组件
import Button from "@mui/material/Button";

function LaunchList({ launches, loading, onLoadMore }) {
  return (
    <div>
      {launches.map((launch) => (
        <LaunchItem key={launch.id} launch={launch} />
      ))}
      {loading && <CircularProgress />}
      <Button onClick={onLoadMore}>Load More</Button>
    </div>
  );
}

export default LaunchList;
