Highcharts.chart('container', {
  chart: {
    type: 'line',
    backgroundColor: 'black',
    polar: true,
  },
  title: {
    text: '注册人数',
    style: {
      color: '#C6AB80'//標題字型顏色
    }
  },
  subtitle: {
    text: '2020/09/01-2020/09/30'
  },
  xAxis: {
    tickInterval: 7 * 24 * 3600 * 1000, // one week
    tickColor:'#C6AB80',
    type: 'datetime',
    dateTimeLabelFormats: { // don't display the dummy year
      month: '%b %e',
      year: '%b'
    },
    title: {
      text: '',
      style: {
        color: '#C6AB80'
      }     
    },
    lineColor: '#C6AB80', //基線顏色
    gridLineColor: '#C6AB80',//網格（豎線）顏色
    labels: {
      style: {
        color: '#C6AB80' //X軸 123456的顏色
      },
      formatter: function () {
        const  date = new Date(this.value);
        const m = date.getMonth() +1;
        
        return m+'/' + date.getDate();
      },
    },
  },
  yAxis: {
    title: {
      text: '',
      style: {
        color: '#C6AB80'
      } 
    },
    lineColor: '#C6AB80',
    labels: {
      style: {
        color: '#C6AB80'
      }
    },
    min: 0
  },
  tooltip: {
    // headerFormat: '<b>{point.x:%b}/{point.x:%e}</b><br>',
    // pointFormat: '注册人数: {point.y:.2f} 人',
    formatter: function () {
      const date = new Date(this.x);
       const m = date.getMonth() +1;
      let htmlStr =`<b>${m}月${date.getDate()}日</b><br>
     注册人数: ${this.y}人`;        
        return htmlStr;
      },
  },

  plotOptions: {
    series: {
      marker: {
        enabled: true 
      },
      color: '#BF2621', // 中間折線圖的顏色條改
      showInLegend: false //隱藏系列名稱
    }
  },
  credits: {
    enabled: false//不显示右下角官方LOGO
  },
  exporting : //匯出設定
  {
    enabled: false //是否顯示匯出的漢堡選單
  },
  // Define the data points. All series have a dummy year
  // of 1970/71 in order to be compared on the same x axis. Note
  // that in JavaScript, months start at 0 for January, 1 for February etc.
  series: [{
    name: "",
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
        maxWidth: 550
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