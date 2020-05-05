export default {
    overview: {
      'balance': '$918,430.73',
      'tradeMarginAvailiable':'$911,829.44',
      'margin':'$35,350.79',
      'profit':'$28,711.40',
      'gross': '$75,781.00',
    },
    option1 : {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(255,255,255,0.8)',
          textStyle: {
            color: '#000',
            fontSize: 11,
          },
          formatter: '{b}&nbsp&nbsp&nbsp&nbsp&nbsp{d}%',
        },
        legend: {
          orient: 'vertical',
          right: 50,
          icon: 'circle',
          data: ['EUR/USD', 'USD/JPY', 'GBP/JPY',
            'EUR/SEK', 'GBP/USD', 'OTHERS'],
          itemWidth: 8,
          itemHeight: 8,
          formatter: '{name}',
          textStyle: {
            color: '#333',
            fontWeight : 'lighter',
            fontSize: 14,
            lineHeight: 28,
          },
        },
        color: ['#0080FF', '#00E3E3', '#00BB00', '#FFD306', '#FF0000', '#6F00D2'],
        series: [
          {
            name: "",
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            right: 200,
            label: {
              show: false,
            },
            labelLine: {
              show: false
            },
            hoverAnimation: false,
            data: [
              { value: 1919, name: 'EUR/USD' },
              { value: 1758, name: 'USD/JPY' },
              { value: 1730, name: 'GBP/JPY' },
              { value: 1629, name: 'EUR/SEK' },
              { value: 1482, name: 'GBP/USD' },
              { value: 1482, name: 'OTHERS' }
            ]
          }
        ]
      },
    
      option2 : {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255)',
          textStyle: {
            color: '#000',
            fontSize: 11,
          },
        },
        legend: {
          bottom: 0,
          icon: 'rect',
          data: ['buy', 'sell'],
          itemWidth: 10,
          itemHeight: 10,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        color: ['#0080FF', '#00BB00'],
        dataset: {
          source: [
            ['trade', 'buy', 'sell'],
            ['00:00', 18.9, 12.4],
            ['03:00', 28.8, 23.2],
            ['06:00', 39.3, 34.5],
            ['09:00', 81.4, 99.7],
            ['12:00', 47, 52.6],
            ['15:00', 20.3, 35.5],
            ['18:00', 24, 37.4],
            ['21:00', 35.6, 42.4],
          ]
        },
        xAxis: {
          type: 'category',
          axisTick:{
            alignWithLabel: true,
          },
          axisLine:{
            lineStyle:{
              color : '#999',
            }
          },
          axisLabel:{
            color:'#333',
          }
         
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dotted'
            }
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          min: 0,
          max: 100,
          interval: 20,
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar' },
          { type: 'bar' }
        ]
      }
  }