/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const priceWatts = 20;

const dailyChartsPrice = (chartId) => {

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create(chartId, am4charts.XYChart);

// putting the data in to big chart


let arryNummonthly = [0,1,2,3];
// const chartDailySumTotalId = document.getElementById(chartId)
// const chartDayTotalId = chartDailySumTotalId.dataset.id
// let test101 = document.getElementById(chartId);

let savingChartDatamonthly = arryNummonthly.map(num => {
    let savingSummonthly = parseInt(document.getElementById(`monthly-sum${num}`).innerText, 10);
    let savingNamemonthly = document.getElementById(`name${num}`).innerText;
    return { 
    "date": savingNamemonthly,
    "value": savingSummonthly
    }
    // console.log(savingName,savingSum)
 //console.log(document.getElementById(`daily-sum${chartId}`))
});


// putting the data in to big chart

// Add data
chart.data = [{
  "date": "00:00",
  "value": Math.floor((Math.random() * (10 * priceWatts) + 8))
}, {
  "date": "01:00",
  "value": Math.floor((Math.random() * (9 * priceWatts) + 7))
}, {
  "date": "02:00",
  "value": Math.floor((Math.random() * (9 * priceWatts) + 7))
}, {
  "date": "03:00",
  "value": Math.floor((Math.random() * (9 * priceWatts) + 7))
}, {
  "date": "04:00",
  "value": Math.floor((Math.random() * (8 * priceWatts) + 6))
}, {
  "date": "05:00",
  "value": Math.floor((Math.random() * (8 * priceWatts) + 6))
}, {
  "date": "06:00",
  "value": 22
}, {
  "date": "07:00",
  "value": 23
}, {
  "date": "08:00",
  "value": 20
}, {
  "date": "09:00",
  "value": 17
}, {
  "date": "10:00",
  "value": 16
}, {
  "date": "11:00",
  "value": 18
}, {
  "date": "12:00",
  "value": 21
}, {
  "date": "13:00",
  "value": 26
}, {
  "date": "14:00",
  "value": 24
}, {
  "date": "15:00",
  "value": 29
}, {
  "date": "16:00",
  "value": 32
}, {
  "date": "17:00",
  "value": 18
}, {
  "date": "18:00",
  "value": 24
}, {
  "date": "19:00",
  "value": 22
}, {
  "date": "20:00",
  "value": 18
}, {
  "date": "21:00",
  "value": 19
}, {
  "date": "22:00",
  "value": 14
}, {
  "date": "23:00",
  "value": 15
}];

// Set input format for the dates
chart.dateFormatter.inputDateFormat = "HH:MM";

// Create axes
let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

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

export { dailyChartsPrice }