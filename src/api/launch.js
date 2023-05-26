const API_URL = "https://api.spacexdata.com/v4/launches";

async function getLaunches(filters) {
  let url = API_URL;
  if (filters.limit) {
    url += `?limit=${filters.limit}`;
  }
  if (filters.launch_success) {
    url += `&launch_success=${filters.launch_success}`;
  }
  if (filters.start_date || filters.end_date) {
    url += "&start_date=" + filters.start_date + "&end_date=" + filters.end_date;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default {
  getLaunches,
};
