/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


const dailyTotalPriceChart = (chartId) => {
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

let chart = am4core.create(chartId, am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

// putting the data in to big chart


let arryNumPrice = document.getElementById("num_of_devices").dataset.num2.replace('[', '').replace(']', '').split(',');
// const chartDailySumTotalId = document.getElementById(chartId)
// const chartDayTotalId = chartDailySumTotalId.dataset.id
// let test101 = document.getElementById(chartId);
let savingChartDataPrice = arryNumPrice.map(num => {
    let removeArrayPrice = parseInt(num ,10)
    let savingSumPrice = parseInt(document.getElementById(`daily-price${removeArrayPrice}`).innerText, 10);
    let savingNamePrice = document.getElementById(`name${removeArrayPrice}`).innerText;
    return {
    country: savingNamePrice,
    visits: savingSumPrice
    }
 //console.log(document.getElementById(`daily-sum${chartId}`))
});



// putting the data in to big chart


// console.log(savingChartData)
chart.data = savingChartDataPrice

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
//   console.log("category is daily :");
//   console.log(category);
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

valueAxis.title.text = "Price (£)";

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

};

export { dailyTotalPriceChart }
