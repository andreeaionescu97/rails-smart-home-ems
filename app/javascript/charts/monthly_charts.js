/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const monthlyCharts = (chartId) => {
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create(chartId, am4charts.XYChart);
chart.scrollbarX = new am4core.Scrollbar();

// Add data
chart.data = [{
  "Month": "Week 1",
  "Watts": Math.floor((Math.random() * 700) + 70)
}, {
  "Month": "Week 2",
  "Watts": Math.floor((Math.random() * 700) + 70)
}, {
  "Month": "Week 3",
  "Watts": Math.floor((Math.random() * 700) + 70)
}, {
  "Month": "Week 4",
  "Watts": Math.floor((Math.random() * 700) + 70)
}];

// 

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Month";
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
series.dataFields.categoryX = "Month";
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
let sumDataMonth = 0
chart.data.forEach(element => {
  
  sumDataMonth += element.Watts
  
});
const chartWeeklySum = document.getElementById(chartId);
const chartWeekIndex = chartWeeklySum.dataset.id;
// console.log(chartWeekIndex)
document.getElementById(`monthly-sum${chartWeekIndex}`).innerText = sumDataMonth

// highest value
var highestArrayMonth = []
chart.data.forEach(element => {
  
  highestArrayMonth.push(element.Watts)
});
var highestValueMonth = Math.max(...highestArrayMonth);

const monthHighId = document.getElementById(chartId);
const monthHighIndex = monthHighId.dataset.id;
// console.log(monthHighIndex)

document.getElementById(`monthly-high${monthHighIndex}`).innerText = highestValueMonth

// lowest value
var lowestArrayMonth  = []
chart.data.forEach(element => {
  
  lowestArrayMonth.push(element.Watts)
});
var lowestValueMonth = Math.min(...lowestArrayMonth);

const monthLowId = document.getElementById(chartId);
const monthLowIndex = monthLowId.dataset.id;
// console.log(charHighIndex)

document.getElementById(`monthly-low${monthLowIndex}`).innerText = lowestValueMonth

// price 

var monthlyPrice = sumDataMonth * 20;

const monthlyPriceCost = document.getElementById(chartId);
const weekPriceIndex = monthlyPriceCost.dataset.id;

document.getElementById(`monthly-price${weekPriceIndex}`).innerText = monthlyPrice



// Cursor
chart.cursor = new am4charts.XYCursor();
};



export { monthlyCharts }