import Axios from "axios";

let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let day = new Date().getDate();
let endDate = String(year) + "-" + String(month) + "-" + String(day);

var dt = new Date(endDate);
dt.setDate(dt.getDate() - 15);
let dtMonth = dt.getMonth() + 1;
let dtDay = dt.getDate();
let dtYear = dt.getFullYear();
let dtDate = String(dtYear) + "-" + String(dtMonth) + "-" + String(dtDay);

const call = Axios.create({
  baseURL: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&start_date=${dtDate}&end_date=${endDate}`,
});

export default call;
