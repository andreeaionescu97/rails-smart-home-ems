/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
const monthlyTotalChart = (chartId) => {
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
let chart = am4core.create(chartId, am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
// putting the data in to big chart
let arryNummonthly = document.getElementById("num_of_devices").dataset.num2.replace('[', '').replace(']', '').split(',');
// console.log(arryNummonthly);
// const chartDailySumTotalId = document.getElementById(chartId)
// const chartDayTotalId = chartDailySumTotalId.dataset.id
// let test101 = document.getElementById(chartId);
let savingChartDatamonthly = arryNummonthly.map(num => {
    let removeArrayMonthly = parseInt(num ,10)
    let savingSummonthly = parseInt(document.getElementById(`monthly-sum${removeArrayMonthly}`).innerText, 10);
    let savingNamemonthly = document.getElementById(`name${removeArrayMonthly}`).innerText;
    return {
    country: savingNamemonthly,
    visits: savingSummonthly
    }
    // console.log(savingName,savingSum)
 //console.log(document.getElementById(`daily-sum${chartId}`))
});
// putting the data in to big chart
chart.data = savingChartDatamonthly;
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


// let image = new am4core.Image();
// image.horizontalCenter = "middle";
// image.width = 20;
// image.height = 20;
// image.verticalCenter = "middle";
// image.adapter.add("href", (href, target)=>{
//   let category = target.dataItem.category;
//   if(category){
//     return "https://www.amcharts.com/wp-content/uploads/flags/" + category.split(" ").join("-").toLowerCase() + ".svg";
//   }
//   return href;
// })
// categoryAxis.dataItems.template.bullet = image;
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
let sumDataMonthTotal = 0
chart.data.forEach(element => {

  sumDataMonthTotal += element.visits
});

// console.log(chartWeekIndex)
document.getElementById("total-month-sum").innerText = sumDataMonthTotal


// highest value
var highestArrayTotalMonth = []
chart.data.forEach(element => {
  highestArrayTotalMonth.push(element.visits)
});
var highestValueTotalMonth = Math.max(...highestArrayTotalMonth);

// console.log(monthHighIndex)
document.getElementById("total-month-high").innerText = highestValueTotalMonth
// lowest value
var lowestArrayTotalMonth  = []
chart.data.forEach(element => {
  lowestArrayTotalMonth.push(element.visits)
});
var lowestValueTotalMonth = Math.min(...lowestArrayTotalMonth);
// console.log(charHighIndex)
document.getElementById("total-month-low").innerText = lowestValueTotalMonth


// price
var monthPriceTotal = (sumDataMonthTotal * 0.01).toFixed(2);


document.getElementById("total-month-price").innerText = monthPriceTotal





};
export { monthlyTotalChart }










