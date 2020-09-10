Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Regeister People'
  },
  subtitle: {
    text: '2020/09/01-2020/09/30'
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { // don't display the dummy year
      month: '%e. %b',
      year: '%b'
    },
    title: {
      text: 'Date'
    }
  },
  yAxis: {
    title: {
      text: 'Snow depth (m)'
    },
    min: 0
  },
  tooltip: {
    headerFormat: '<b>{point.x:%e. %b}</b><br>',
    pointFormat: 'Register People: {point.y:.2f} people'
  },

  plotOptions: {
    series: {
      marker: {
        enabled: true
      }
    }
  },

  colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

  // Define the data points. All series have a dummy year
  // of 1970/71 in order to be compared on the same x axis. Note
  // that in JavaScript, months start at 0 for January, 1 for February etc.
  series: [{
    name: "Register people",
    data: [
      [Date.UTC(2020, 9, 1), 5],
      [Date.UTC(2020, 9, 2), 15],
      [Date.UTC(2020, 9, 3), 25],
      [Date.UTC(2020, 9, 4), 35],
      [Date.UTC(2020, 9, 5), 45],
      [Date.UTC(2020, 9, 6), 20],
      [Date.UTC(2020, 9, 7), 45],
      [Date.UTC(2020, 9, 8), 200],
      [Date.UTC(2020, 9, 9), 150],
      [Date.UTC(2020, 9, 10), 50],
      [Date.UTC(2020, 9, 11), 50],
      [Date.UTC(2020, 9, 12), 15],
      [Date.UTC(2020, 9, 13), 25],
      [Date.UTC(2020, 9, 14), 35],
      [Date.UTC(2020, 9, 15), 45],
      [Date.UTC(2020, 9, 16), 20],
      [Date.UTC(2020, 9, 17), 45],
      [Date.UTC(2020, 9, 18), 200],
      [Date.UTC(2020, 9, 19), 150],
      [Date.UTC(2020, 9, 20), 150],
      [Date.UTC(2020, 9, 21), 150],
      [Date.UTC(2020, 9, 22), 15],
      [Date.UTC(2020, 9, 23), 25],
      [Date.UTC(2020, 9, 24), 35],
      [Date.UTC(2020, 9, 25), 45],
      [Date.UTC(2020, 9, 26), 20],
      [Date.UTC(2020, 9, 27), 45],
      [Date.UTC(2020, 9, 28), 200],
      [Date.UTC(2020, 9, 29), 150],
      [Date.UTC(2020, 9, 30), 50]
    ]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        plotOptions: {
          series: {
            marker: {
              radius: 2.5
            }
          }
        }
      }
    }]
  }
});