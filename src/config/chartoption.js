export default {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        bottom: 0,
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
            data: [1680000, 1520471, 1550471, 1690369, 1532384, 2100000,  
                1600000,1520078, 1720078, 1510078, 1860078, 2430078]
        },
        {
            name: 'balance',
            type: 'line',
            smooth: true,
            data: [1120000, 1188693, 1088693, 1163582, 1032562, 1400000,  
                1000000,985000, 1035000, 1002000, 1200000, 1560000]
        },
    ]
}
