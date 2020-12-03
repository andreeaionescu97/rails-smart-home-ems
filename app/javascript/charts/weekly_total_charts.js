/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
const weeklyTotalChart = (chartId) => {
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
let chart = am4core.create(chartId, am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
// putting the data in to big chart
let arryNumweekly = document.getElementById("num_of_devices").dataset.num2.replace('[', '').replace(']', '').split(',');
// const chartDailySumTotalId = document.getElementById(chartId)
// const chartDayTotalId = chartDailySumTotalId.dataset.id
// let test101 = document.getElementById(chartId);
let savingChartDataweekly = arryNumweekly.map(num => {
    let removeArrayWeekly = parseInt(num ,10)
    let savingSumweekly = parseInt(document.getElementById(`weekly-sum${removeArrayWeekly}`).innerText, 10);
    let savingNameweekly = document.getElementById(`name${removeArrayWeekly}`).innerText;
    return {
    country: savingNameweekly,
    visits: savingSumweekly
    }
    // console.log(savingName,savingSum)
 //console.log(document.getElementById(`daily-sum${chartId}`))
});
// putting the data in to big chart
chart.data = savingChartDataweekly;
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.fontSize = 11;
categoryAxis.renderer.labels.template.dy = 5;

categoryAxis.title.text = "Devices";
categoryAxis.title.rotation = 0;
categoryAxis.title.align = "center";
// categoryAxis.title.valign = "top";
categoryAxis.title.dy = 12;
categoryAxis.title.fontSize = 20;
// categoryAxis.title.fontWeight = 600;


let image = new am4core.Image();
image.horizontalCenter = "middle";
image.width = 20;
image.height = 20;
image.verticalCenter = "middle";
image.adapter.add("href", (href, target)=>{
  let category = target.dataItem.category;
  if(category){
    return "https://www.amcharts.com/wp-content/uploads/flags/" + category.split(" ").join("-").toLowerCase() + ".svg";
  }
  return href;
})
categoryAxis.dataItems.template.bullet = image;
let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.renderer.minGridDistance = 30;
valueAxis.renderer.baseGrid.disabled = true;

valueAxis.title.text = "Kilowatts / kW h";


let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.columns.template.tooltipText = "{valueY.value}";
series.columns.template.tooltipY = 0;
series.columns.template.strokeOpacity = 0;
// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});


// summing
let sumDataWeekTotal = 0
chart.data.forEach(element => {

  sumDataWeekTotal += element.visits
});

// console.log(chartWeekIndex)
document.getElementById("total-week-sum").innerText = sumDataWeekTotal


// highest value
var highestArrayTotalWeek = []
chart.data.forEach(element => {
  highestArrayTotalWeek.push(element.visits)
});
var highestValueTotalWeek = Math.max(...highestArrayTotalWeek);

// console.log(monthHighIndex)
document.getElementById("total-week-high").innerText = highestValueTotalWeek
// lowest value
var lowestArrayTotalWeek  = []
chart.data.forEach(element => {
  lowestArrayTotalWeek.push(element.visits)
});
var lowestValueTotalWeek = Math.min(...lowestArrayTotalWeek);
// console.log(charHighIndex)
document.getElementById("total-week-low").innerText = lowestValueTotalWeek

// price
var weekPriceTotal = sumDataWeekTotal * 0.02;


document.getElementById("total-week-price").innerText = weekPriceTotal




};
export { weeklyTotalChart }
