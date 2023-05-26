// 搜索和筛选组件
import { TextField, DatePicker, Select, MenuItem, Button } from "@mui/material";

function Filters({ onChange }) {
  const [search, setSearch] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [launch_success, setLaunchSuccess] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleStartDateChange(date) {
    setStartDate(date.toISOString().split("T")[0]);
  }

  function handleEndDateChange(date) {
    setEndDate(date.toISOString().split("T")[0]);
  }

  function handleSuccessChange(e) {
    setLaunchSuccess(e.target.value);
  }

  function handleSubmit() {
    onChange({
      search,
      start_date,
      end_date,
      launch_success,
    });
  }

  return (
    <div>
      <TextField label="Search" value={search} onChange={handleSearch} />
      <DatePicker label="Start Date" value={start_date} onChange={handleStartDateChange} />
      <DatePicker label="End Date" value={end_date} onChange={handleEndDateChange} />
      <Select label="Success" value={launch_success} onChange={handleSuccessChange}>
        <MenuItem value="">All</MenuItem>
        <MenuItem value="true">Yes</MenuItem>
        <MenuItem value="false">No</MenuItem>
      </Select>
      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default Filters;
