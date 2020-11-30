//<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    //<script type="text/javascript">
    const dailyCharts = () => {
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawStuff);
      function drawStuff() {
        var data = new google.visualization.arrayToDataTable([
          ['Move', 'Watts'],
          ["00:00", (Math.floor((Math.random() * 100) + 1))],
          ["01:00", (Math.floor((Math.random() * 100) + 1))],
          ["02:00", (Math.floor((Math.random() * 100) + 1))],
          ["03:00", (Math.floor((Math.random() * 100) + 1))],
          ['04:00', (Math.floor((Math.random() * 100) + 1))],
          ["05:00", (Math.floor((Math.random() * 100) + 1))],
          ["06:00", (Math.floor((Math.random() * 100) + 1))],
          ["06:00", (Math.floor((Math.random() * 100) + 1))],
          ["07:00", (Math.floor((Math.random() * 100) + 1))],
          ["08:00", (Math.floor((Math.random() * 100) + 1))],
          ["09:00", (Math.floor((Math.random() * 100) + 1))],
          ["10:00", (Math.floor((Math.random() * 100) + 1))],
          ["11:00", (Math.floor((Math.random() * 100) + 1))],
          ["12:00", (Math.floor((Math.random() * 100) + 1))],
          ["13:00", (Math.floor((Math.random() * 100) + 1))],
          ["14:00", (Math.floor((Math.random() * 100) + 1))],
          ["15:00", (Math.floor((Math.random() * 100) + 1))],
          ["16:00", (Math.floor((Math.random() * 100) + 1))],
          ["17:00", (Math.floor((Math.random() * 100) + 1))],
          ["18:00", (Math.floor((Math.random() * 100) + 1))],
          ["19:00", (Math.floor((Math.random() * 100) + 1))],
          ["20:00", (Math.floor((Math.random() * 100) + 1))],
          ["21:00", (Math.floor((Math.random() * 100) + 1))],
          ["22:00", (Math.floor((Math.random() * 100) + 1))],
          ["23:00", (Math.floor((Math.random() * 100) + 1))]
        ]);
        var options = {
          width: 700,
          height: 500,
          colors: ['#7400b8'],
          legend: { position: 'none' },
          chart: {
            title: '<%=device.name%>',
            subtitle: 'Power Usage Daily' },
          axes: {
            x: {
              0: { side: 'bottom', label: 'Watts used in a day'} // Top x-axis.
            }
          },
          bar: { groupWidth: "90%" }
        };
        var chart = new google.charts.Bar(document.getElementById("daily_<%=index%>_div"));
        // Convert the Classic options to Material options.
        chart.draw(data, google.charts.Bar.convertOptions(options));
      };
    };
    //</script>