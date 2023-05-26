import { useState } from "react";
import LaunchList from "./LaunchList";
import Filters from "./Filters";

function App() {
  const [launches, setLaunches] = useState([]);
  const [filters, setFilters] = useState({ limit: 12 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getLaunches(filters).then((launches) => {
      setLaunches((prev) => [...prev, ...launches]);
      setLoading(false);
    });
  }, [filters]);

  function handleFiltersChange(newFilters) {
    setFilters(newFilters);
    setLaunches([]); //清空列表并重新加载
  }

  return (
    <div>
      <Filters onChange={handleFiltersChange} />
      <LaunchList
        launches={launches}
        loading={loading}
        onLoadMore={() => setFilters((prev) => ({ ...prev, offset: prev.offset + 12 }))}
      />
    </div>
  );
}

export default App;
