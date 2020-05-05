export default {
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        textStyle:{
            color: '#000',
            fontSize: 11,
        },
        formatter:'{b}<br/>{a0}:&nbsp&nbsp&nbsp{c0}<br/>{a1}:&nbsp&nbsp&nbsp&nbsp&nbsp{c1}'
        
    },
    legend: {
        bottom: 0,
        //icon:'path://M100,200 C100,100 250,100 250,200 S400,300 400,200',
        icon:'path://"M664.1 783c-3.8 0-7.6-0.2-11.3-0.5-36.3-3.1-68.9-20.6-96.9-52.1-28.4-32-52.5-79.4-71.4-140.8-32.4-105-66.1-182.6-100.3-230.6-25.5-35.8-50.2-54-73.4-54h-0.4c-38.8 0.4-84.8 51-129.3 142.7-37 76.2-59.4 153-59.7 153.8L64 582.6c1-3.4 24.3-83.1 63.7-164.3 56.8-117 118.1-176.6 182.1-177.3h1c43 0 83.8 26.7 121.2 79.3 38.2 53.7 75.1 137.5 109.5 249.3 29.3 94.9 68.3 145.1 116 149.1 21.3 1.8 45.6-5.2 72.2-20.9 24.5-14.4 50.3-35.8 76.8-63.5 49.6-51.9 87.7-111.9 100.1-137.6L960 526c-14.6 30.4-56.4 96.4-111.4 154-30.4 31.8-60.6 56.6-89.9 73.9-32.8 19.3-64.6 29.1-94.6 29.1z"',
        data: ['available', 'balance']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    color:['#1890ff', '#66CD00'],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine:{
            lineStyle:{
                color: '#999'
            }
        },
        nameTextStyle:{
            color: '#333',
            fontWeitght: 'lighter',
            fontSize: 10,
        },

        data: ['12:00', '01:00', '02:00', '03:00', '04:00', '05:00',
                '06:00', '07:00', '08:00', '09:00', '10:00', '11:00']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle:{
                type:'dotted'
            }
        },
        nameTextStyle:{
            color: '#333',
            fontWeitght: 'lighter',
            fontSize: 10,
        },
        axisLine:{
            show : false,
        },
        axisTick:{
            show: false,
        },
        min: 800000,
        max: 2600000,
        interval: 200000,
        
    },
    series: [
        {
            name: 'available',
            type: 'line',
            smooth: true,
            symbol:'circle',
            symbolSize : 6,
            data: [1680000, 1520471, 1550471, 1690369, 1532384, 2100000,  
                1600000,1520078, 1720078, 1510078, 1860078, 2430078]
        },
        {
            name: 'balance',
            type: 'line',
            smooth: true,
            symbol:'circle',
            symbolSize : 6,
            data: [1120000, 1188693, 1088693, 1163582, 1032562, 1400000,  
                1000000,985000, 1035000, 1002000, 1200000, 1560000]
        },
    ]
}
