/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
const weeklyCharts = (chartId) => {
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
// Create chart instance
let chart = am4core.create(chartId, am4charts.XYChart);
chart.scrollbarX = new am4core.Scrollbar();
// Add data
chart.data = [{
  "Week": "Monday",
  "Watts": Math.floor((Math.random() * 100) + 1)
}, {
  "Week": "Tuesday",
  "Watts": Math.floor((Math.random() * 100) + 1)
}, {
  "Week": "Wednesday",
  "Watts": Math.floor((Math.random() * 100) + 1)
}, {
  "Week": "Thursday",
  "Watts": Math.floor((Math.random() * 100) + 1)
}, {
  "Week": "Friday",
  "Watts": Math.floor((Math.random() * 100) + 1)
}, {
  "Week": "Saturday",
  "Watts": Math.floor((Math.random() * 100) + 1)
}, {
  "Week": "Sunday",
  "Watts": Math.floor((Math.random() * 100) + 1)
}];
// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Week";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.minHeight = 110;

categoryAxis.title.text = "Time (Days)";
categoryAxis.title.rotation = 0;
categoryAxis.title.align = "center";
// categoryAxis.title.valign = "top";
categoryAxis.title.dy = 12;
categoryAxis.title.fontSize = 20;
// categoryAxis.title.fontWeight = 600;


let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minWidth = 50;

valueAxis.title.text = "Kilowatts / kW h";



// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.sequencedInterpolation = true;
series.dataFields.valueY = "Watts";
series.dataFields.categoryX = "Week";
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
let sumDataWeek = 0
chart.data.forEach(element => {
  sumDataWeek += element.Watts
});
const chartWeeklySum = document.getElementById(chartId);
const chartWeekIndex = chartWeeklySum.dataset.id;
// console.log(chartWeekIndex)
document.getElementById(`weekly-sum${chartWeekIndex}`).innerText = sumDataWeek
// highest value
var highestArrayWeek = []
chart.data.forEach(element => {
  highestArrayWeek.push(element.Watts)
});
var highestValueWeek = Math.max(...highestArrayWeek);
const weekHighId = document.getElementById(chartId);
const weekHighIndex = weekHighId.dataset.id;
// console.log(weekHighIndex)
document.getElementById(`weekly-high${weekHighIndex}`).innerText = highestValueWeek
// lowest value
var lowestArrayWeek  = []
chart.data.forEach(element => {
  lowestArrayWeek.push(element.Watts)
});
var lowestValueWeek = Math.min(...lowestArrayWeek);
const weekLowId = document.getElementById(chartId);
const weekLowIndex = weekLowId.dataset.id;
// console.log(charHighIndex)
document.getElementById(`weekly-low${weekLowIndex}`).innerText = lowestValueWeek
// price
var weeklyPrice = sumDataWeek * 20;
const weeklyPriceCost = document.getElementById(chartId);
const weekPriceIndex = weeklyPriceCost.dataset.id;
document.getElementById(`weekly-price${weekPriceIndex}`).innerText = weeklyPrice
// Cursor
chart.cursor = new am4charts.XYCursor();
};
// var sum = 0
// array.forEach((element,index) => {
//  if (index < 1) return;
//   sum += element[1]
// })
// let sumDataWeek = 0
// chart.data.forEach(element => {
//   debugger
//   sumDataWeek = element.Watts
// });
export { weeklyCharts }
