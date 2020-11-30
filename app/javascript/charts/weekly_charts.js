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
  "Watts": (302*24)
}, {
  "Week": "Tuesday",
  "Watts": (188*24)
}, {
  "Week": "Wednesday",
  "Watts": (180*24)
}, {
  "Week": "Thursday",
  "Watts": (132*24)
}, {
  "Week": "Friday",
  "Watts": (112*24)
}, {
  "Week": "Saturday",
  "Watts": (111*24)
}, {
  "Week": "Sunday",
  "Watts": (231*24)
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

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minWidth = 50;

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
let sumData = 0
chart.data.forEach(element => {
  
  sumData += element.Watts
  
});
console.log(sumData)
document.getElementById('weekly-sum<%=index%>').innerText = sumData
// Cursor
chart.cursor = new am4charts.XYCursor();


};
// var sum = 0
// array.forEach((element,index) => {
//  if (index < 1) return;
//   sum += element[1] 
// })

// let sumData = 0
// chart.data.forEach(element => {
//   debugger
//   sumData = element.Watts
  
// });


export { weeklyCharts }