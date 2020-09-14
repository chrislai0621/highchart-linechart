const orignalData =[
  {
    register:20,
    createDate:'2020-09-01 16:02:02'
  },
  {
    register: 5,
    createDate: '2020-09-02 18:02:02'
  },
  {
    register: 20,
    createDate: '2020-09-03 18:02:02'
  },
  {
    register: 6,
    createDate: '2020-09-04 18:02:02'
  },
  {
    register: 30,
    createDate: '2020-09-05 18:02:02'
  },
  {
    register: 50,
    createDate: '2020-09-06 18:02:02'
  },
  {
    register: 10,
    createDate: '2020-09-10 16:02:02'
  },
  {
    register: 30,
    createDate: '2020-09-11 16:02:02'
  },
  {
    register: 20,
    createDate: '2020-09-12 16:02:02'
  },
  {
    register: 100,
    createDate: '2020-09-13 16:02:02'
  },
  {
    register: 30,
    createDate: '2020-09-14 16:02:02'
  },
  {
    register: 20,
    createDate: '2020-09-19 16:02:02'
  },
  {
    register: 100,
    createDate: '2020-09-20 16:02:02'
  },
  {
    register: 35,
    createDate: '2020-09-21 16:02:02'
  },
  {
    register: 100,
    createDate: '2020-09-25 16:02:02'
  },
  {
    register: 35,
    createDate: '2020-09-30 16:02:02'
  },
  {
    register: 100,
    createDate: '2020-10-20 16:02:02'
  },
  {
    register: 35,
    createDate: '2020-10-21 16:02:02'
  },
  {
    register: 100,
    createDate: '2020-10-25 16:02:02'
  },
  {
    register: 35,
    createDate: '2020-10-30 16:02:02'
  },
  {
    register: 20,
    createDate: '2020-11-01 16:02:02'
  },
  {
    register: 10,
    createDate: '2020-11-10 16:02:02'
  },
  {
    register: 30,
    createDate: '2020-11-18 16:02:02'
  },
  {
    register: 20,
    createDate: '2020-11-19 16:02:02'
  },
  {
    register: 100,
    createDate: '2020-11-20 16:02:02'
  },
  {
    register: 35,
    createDate: '2020-11-21 16:02:02'
  },
  {
    register: 100,
    createDate: '2020-11-25 16:02:02'
  },
  {
    register: 35,
    createDate: '2020-11-30 16:02:02'
  },
]
var dataArray =[];//传入的叠数
var lineColor ='#BF2621';//折线的颜色
var chartTitle='注册人数';//x单位
var yName='人';//y单位
var dateColumName = 'createDate';
var unitColumName = 'register';
var DateRangeType=2;//0本日 1本週 2月 3自訂
var tickInterval = 24 * 3600 * 1000;
switch (DateRangeType)
{
    case 0:
    case 1:
      tickInterval = 24 * 3600 * 1000;
      break;
    case 2:
    case 3:
      tickInterval = 7 * 24 * 3600 * 1000;
      break;  
   default :
      tickInterval = 7 * 24 * 3600 * 1000;

}
for(let i = 0;i < orignalData.length ;i++)
{
  let date = new Date(orignalData[i][dateColumName].replace(/-/g, "/"));
  dataArray.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), orignalData[i][unitColumName]]);
}
let parameterObj = {
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
    tickInterval:tickInterval,
    tickColor: '#C6AB80',
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
        const date = new Date(this.value);
        const m = date.getMonth() + 1;

        return m + '/' + date.getDate();
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
    formatter: function () {
      const date = new Date(this.x);
      const m = date.getMonth() + 1;
      let htmlStr = `<b>${m}月${date.getDate()}日</b><br>
     ${chartTitle}: ${this.y}${yName}`;
      return htmlStr;
    },
  },
  plotOptions: {
    series: {
      marker: {
        enabled: true
      },
      color: this.lineColor, // 中間折線圖的顏色條改
      showInLegend: false //隱藏系列名稱
    }
  },
  credits: {
    enabled: false//不显示右下角官方LOGO
  },
  exporting: //匯出設定
  {
    enabled: false //是否顯示匯出的漢堡選單
  },

  series: [{
    name: "",
    data: this.dataArray,
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
}
Highcharts.chart('container', parameterObj);