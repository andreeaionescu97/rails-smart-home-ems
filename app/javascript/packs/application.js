// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("chartkick")
require("chart.js")
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------
// External imports
import "bootstrap";
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { initLanding } from '../components/initLanding';
// import { initLogIn } from '../components/initLogIn';
import { initSideBar } from '../components/initSideBar';
import { dailyCharts } from '../charts/daily_charts';
import { weeklyCharts } from '../charts/weekly_charts';
import { monthlyCharts } from '../charts/monthly_charts';
import { dailyChartsPrice } from '../charts/daily_price_charts';
import { weeklyChartsPrice } from '../charts/weekly_price_charts';
import { monthlyChartsPrice } from '../charts/monthly_price_charts';
import { dailyTotalChart } from '../charts/daily_total_charts';
import { weeklyTotalChart } from '../charts/weekly_total_charts';
import { monthlyTotalChart } from '../charts/monthly_total_charts';
import { dailyTotalPriceChart } from '../charts/daily_total_price_charts';
import { weeklyTotalPriceChart2 } from '../charts/weekly_total_price_charts';
import { monthlyTotalPriceChart2 } from '../charts/monthly_total_price_charts';
// Geomaps stuff
 import { initMapbox } from '../plugins/init_mapbox';
document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:




const menuButton = document.getElementById("openSidebarMenu");
const toggleContainer = document.querySelector(".page-padding-dashboard");
if(menuButton){
  menuButton.addEventListener("click", (event) => {
    toggleContainer.classList.toggle("sidebar-closed");
  })
}


  console.log(window.location.pathname == "");
  console.log("loaded log-in");
  let sighnUpButton = document.querySelector('#signUp');
  console.log(sighnUpButton);
  let sighnInButton = document.querySelector('#signIn');
  let container = document.querySelector('#container');
  if (sighnUpButton) {
    sighnUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });
  }
  if (sighnInButton) {
    sighnInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }
    initMapbox();
// daily charts
const charts = document.querySelectorAll(".charts")
charts.forEach(chart => {
 dailyCharts(chart.id);
});
// weekly charts
const weeklyAmCharts = document.querySelectorAll(".week-amcharts")
weeklyAmCharts.forEach(chart => {
  weeklyCharts(chart.id);
});
// monthly charts
const monthlyAmCharts = document.querySelectorAll(".monthly-amcharts")
monthlyAmCharts.forEach(chart => {
  monthlyCharts(chart.id);
});
// daily price charts
const dailyAmPrice = document.querySelectorAll(".daily-amcharts-price")
dailyAmPrice.forEach(chart => {
  dailyChartsPrice(chart.id);
});
// weekly price charts
const weeklyAmPrice = document.querySelectorAll(".weekly-amcharts-price")
weeklyAmPrice.forEach(chart => {
  weeklyChartsPrice(chart.id);
});
// monthly price charts
const monthlyAmPrice = document.querySelectorAll(".monthly-amcharts-price")
monthlyAmPrice.forEach(chart => {
  monthlyChartsPrice(chart.id);
});
// daily  total chart
const dailyTotalChartId = document.querySelectorAll(".daily-amcharts-total")
dailyTotalChartId.forEach(chart => {
  dailyTotalChart(chart.id);
});
// weekly  total chart
const weeklyTotalChartId = document.querySelectorAll(".weekly-amcharts-total")
weeklyTotalChartId.forEach(chart => {
  weeklyTotalChart(chart.id);
});
// monthly  total chart
const monthlyTotalChartId = document.querySelectorAll(".monthly-amcharts-total")
monthlyTotalChartId.forEach(chart => {
  monthlyTotalChart(chart.id);
});
// daily  total price chart
const dailyTotalPriceChartId = document.querySelectorAll(".daily-amcharts-total-price")
dailyTotalPriceChartId.forEach(chart => {
  dailyTotalPriceChart(chart.id);
});
// weekly  total price chart
const weeklyTotalPriceChartId = document.querySelectorAll(".weekly-amcharts-total-price")
weeklyTotalPriceChartId.forEach(chart => {
  weeklyTotalPriceChart2(chart.id);
});
// monthly  total price chart
const monthlyTotalPriceChartId = document.querySelectorAll(".monthly-amcharts-total-price")
monthlyTotalPriceChartId.forEach(chart => {
  monthlyTotalPriceChart2(chart.id);
});
//monthly sum of charts
// var sum = 0
// array.forEach((element,index) => {
//  if (index < 1) return;
//   sum += element[1]
// })
// console.log(sum)
//document.getElementById('daily-sum<%=index%>').innerText = sum
  // initLogIn();
});
