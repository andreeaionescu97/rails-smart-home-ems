/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const dailyCharts = (chartId) => {
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create(chartId, am4charts.XYChart);
chart.scrollbarX = new am4core.Scrollbar();

// Add data
chart.data = [{
  "Time": "00:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "01:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "02:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "03:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "04:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "05:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "06:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "07:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "08:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "09:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "10:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "11:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "12:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "13:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "14:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "15:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "16:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "17:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "18:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "19:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "20:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "21:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "22:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}, {
  "Time": "23:00",
  "Watts": Math.floor((Math.random() * 10) + 1)
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Time";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.minHeight = 110;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minWidth = 50;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.sequencedInterpolation = true;
series.dataFields.valueY = "Watts";
series.dataFields.categoryX = "Time";
series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
series.columns.template.strokeWidth = 0;

series.tooltip.pointerOrientation = "vertical";

series.columns.template.column.cornerRadiusTopLeft = 10;
series.columns.template.column.cornerRadiusTopRight = 10;
series.columns.template.column.fillOpacity = 0.8;

// on hover, make corner radiuses bigger
let hoverState = series.columns.template.column.states.create("hover");
hoverState.properties.cornerRadiusTopLeft = 0;
hoverState.properties.cornerRadiusTopRight = 0;
hoverState.properties.fillOpacity = 1;

series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

// summing
let sumDataday = 0
chart.data.forEach(element => {
  
  sumDataday += element.Watts
  
});
const chartDailySum = document.getElementById(chartId);
const chartDayIndex = chartDailySum.dataset.id;
// console.log(chartDayIndex)
document.getElementById(`daily-sum${chartDayIndex}`).innerText = sumDataday

// highest value
var highestArrayDay = []
chart.data.forEach(element => {
  
  highestArrayDay.push(element.Watts)
});
var highestValueDay = Math.max(...highestArrayDay);

const dayHighId = document.getElementById(chartId);
const dayHighIndex = dayHighId.dataset.id;
// console.log(dayHighIndex)

document.getElementById(`daily-high${dayHighIndex}`).innerText = highestValueDay

// lowest value
var lowestArrayDay  = []
chart.data.forEach(element => {
  
  lowestArrayDay.push(element.Watts)
});
var lowestValueDay = Math.min(...lowestArrayDay);

const dayLowId = document.getElementById(chartId);
const dayLowIndex = dayLowId.dataset.id;
// console.log(charHighIndex)

document.getElementById(`daily-low${dayLowIndex}`).innerText = lowestValueDay

// price 

var dailyPrice = sumDataday * 20;

const dailyPriceCost = document.getElementById(chartId);
const dailyPriceIndex = dailyPriceCost.dataset.id;

document.getElementById(`daily-price${dailyPriceIndex}`).innerText = dailyPrice



// Cursor
chart.cursor = new am4charts.XYCursor();
};



export { dailyCharts }