var chart;
// var legend;

// Send list of objects for chart elements
var chartData = [{field: "NSU", value: 260},
                {field: "IUB", value: 201},
                {field: "AIUB", value: 65},
                {field: "DU", value: 39},
                {field: "BUET", value: 19},
                {field: "DIU", value: 10}];

AmCharts.ready(function() {
    // pie chart
    chart = new AmCharts.AmPieChart();
    chart.dataProvider = chartData;
    chart.titleField = "field";
    chart.valueField = "value";
    chart.outlineColor = "";
    chart.outlineAlpha = 0.8;
    chart.outlineThickness = 2;

    // this makes the chart 3D, Comment them to make a 2D graph
    chart.depth3D = 20;
    chart.angle = 30;

    // write chart to html dom
    chart.write("chartdiv");
});