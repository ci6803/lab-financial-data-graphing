//const apiUrl = `https://api.coindesk.com/v1/bpi/historical/close.json`;

const dateFrom = document.getElementById("date-from");
const dateTo = document.getElementById("date-to");

const apiUrl = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${dateFrom.value}&end=${dateTo.value}&=BTC`;
// dateFrom.addEventListener("change", (e) => {
axios
  .get(apiUrl)
  .then((response) => {
    console.log("Response from API is: ", response.data);
    printTheChart(response.data);
  })
  .catch((err) => console.log(err));

function printTheChart(data) {
  const dailyData = data["bpi"];
  const dates = Object.keys(dailyData);
  const prices = Object.values(dailyData);

  const ctx = document.getElementById("my-chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      lable: dates,
      datasets: [
        {
          label: "Chart",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: prices,
        },
      ],
    },
  });
}
//});
