/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const priceWattsWeekly = 0.02;

const weeklyChartsPrice = (chartId) => {

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create(chartId, am4charts.XYChart);

// Add data
chart.data = [{
  "date": "30-11-2020",
  "value": Math.floor((Math.random() * (10 * priceWattsWeekly) + 8))
}, {
  "date": "01-12-2020",
  "value": Math.floor((Math.random() * (9 * priceWattsWeekly) + 7))
}, {
  "date": "02-12-2020",
  "value": Math.floor((Math.random() * (9 * priceWattsWeekly) + 7))
}, {
  "date": "03-12-2020",
  "value": Math.floor((Math.random() * (9 * priceWattsWeekly) + 7))
}, {
  "date": "04-12-2020",
  "value": Math.floor((Math.random() * (8 * priceWattsWeekly) + 6))
}, {
  "date": "05-12-2020",
  "value": Math.floor((Math.random() * (8 * priceWattsWeekly) + 6))
}, {
  "date": "06-12-2020",
  "value": Math.floor((Math.random() * (8 * priceWattsWeekly) + 6))
}];

// Set input format for the dates
chart.dateFormatter.inputDateFormat = "dd-MM-yyyy";

// Create axes
let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

valueAxis.title.text = "Price (£)";
dateAxis.title.text = "Time (Days)";


// Create series
let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.tooltipText = "{value}"
series.strokeWidth = 2;
series.minBulletDistance = 15;

// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 20;
series.tooltip.background.strokeOpacity = 0;
series.tooltip.pointerOrientation = "vertical";
series.tooltip.label.minWidth = 40;
series.tooltip.label.minHeight = 40;
series.tooltip.label.textAlign = "middle";
series.tooltip.label.textValign = "middle";

// Make bullets grow on hover
let bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");

let bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;

// Make a panning cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panXY";
chart.cursor.xAxis = dateAxis;
chart.cursor.snapToSeries = series;

// Create vertical scrollbar and place it before the value axis
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.parent = chart.leftAxesContainer;
chart.scrollbarY.toBack();

// Create a horizontal scrollbar with previe and place it underneath the date axis
chart.scrollbarX = new am4charts.XYChartScrollbar();
chart.scrollbarX.series.push(series);
chart.scrollbarX.parent = chart.bottomAxesContainer;

dateAxis.start = 0.79;
dateAxis.keepSelection = true;

};

export { weeklyChartsPrice }
