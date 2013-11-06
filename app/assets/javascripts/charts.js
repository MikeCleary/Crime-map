function drawChart(data) {
  console.log(data)
  var categories = _(data).countBy(function(d) {
    return d.category
  });

  var chart_data = [];
  for (i in categories){
  chart_data.push({
      label: i,  
      value: categories[i]
    });
  }

  new Morris.Donut({
    element: 'crime-chart', 
    data: chart_data
  })
};