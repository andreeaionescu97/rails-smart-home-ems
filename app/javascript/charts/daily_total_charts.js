/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


const dailyTotalChart = (chartId) => {
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

let chart = am4core.create(chartId, am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

// putting the data in to big chart


let arryNum = document.getElementById("num_of_devices").dataset.num2.replace('[', '').replace(']', '').split(',');
// const chartDailySumTotalId = document.getElementById(chartId)
// const chartDayTotalId = chartDailySumTotalId.dataset.id
// let test101 = document.getElementById(chartId);

let savingChartData = arryNum.map(num => {
    let removeArray = parseInt(num ,10)
    let savingSum = parseInt(document.getElementById(`daily-sum${removeArray}`).innerText, 10);
    let savingName = document.getElementById(`name${removeArray}`).innerText;
    return {
    country: savingName,
    visits: savingSum
    }
    // console.log(savingName,savingSum)
 //console.log(document.getElementById(`daily-sum${chartId}`))
});

// putting the data in to big chart


// console.log(savingChartData)
chart.data = savingChartData

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
let sumDatadayTotal = 0
chart.data.forEach(element => {

  sumDatadayTotal += element.visits
});

// console.log(chartWeekIndex)
document.getElementById("total-day-sum").innerText = sumDatadayTotal


// highest value
var highestArrayTotalDay = []
chart.data.forEach(element => {
  highestArrayTotalDay.push(element.visits)
});
var highestValueTotalDay = Math.max(...highestArrayTotalDay);

// console.log(monthHighIndex)
document.getElementById("total-day-high").innerText = highestValueTotalDay
// lowest value
var lowestArrayTotalDay  = []
chart.data.forEach(element => {
  lowestArrayTotalDay.push(element.visits)
});
var lowestValueTotalDay = Math.min(...lowestArrayTotalDay);
// console.log(charHighIndex)
document.getElementById("total-day-low").innerText = lowestValueTotalDay
// price
var dayPriceTotal = (sumDatadayTotal * 0.01).toFixed(2);


document.getElementById("total-day-price").innerText = dayPriceTotal












};

export { dailyTotalChart }
