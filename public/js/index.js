//for collapsible side nav-bar
const collapsedClass = "nav--collapsed";
const lsKey = "navCollapsed";
const nav = document.querySelector(".nav");
const navBorder = nav.querySelector(".nav__border");
if (localStorage.getItem(lsKey) === "true") {
    nav.classList.add(collapsedClass);
}
navBorder.addEventListener("click", () => {
    nav.classList.toggle(collapsedClass);
    localStorage.setItem(lsKey, nav.classList.contains(collapsedClass));
});

//resolving refreshing issue by creating buttons to hide and show elements
const btns = [document.querySelector('#display-dashboard'), document.querySelector('#display-map'), document.querySelector('#display-c_csv'), document.querySelector('#display-tp_csv')];
const newDisplay = [document.querySelector('#dashboard-container'), document.querySelector('#map-container'), document.querySelector('#c_csv-container'), document.querySelector('#tp_csv-container')]

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        newDisplay.forEach((open) => {
            if (open.className == e.target.className && open.className == "dashboard_c"){
                open.style = "display: block !important;"
            }
            else if (open.className == e.target.className && open.className == "map_c"){
                open.style = "display: block !important;"
            }
            else if (open.className == e.target.className && open.className == "c_csv_c"){
                open.style = "display: block !important;"
            }
            else if (open.className == e.target.className && open.className == "tp_csv_c"){
                open.style = "display: block !important;"
            }
            else{
                open.style = "display: none !important;"
            }
        })
    })
})



//highchart js graphs
//altitude chart
var alt = Highcharts.chart('container6', {
    chart: {
  backgroundColor: '#f6f6f6',
  polar: true,
  type: 'spline',
},
title: {
    text: 'ALTITUDE',
    verticalAlign: 'top',
    align:'left',
    x: 5,
    y:20
},

/* subtitle: {
    text: 'Source: thesolarfoundation.com'
}, */

yAxis: {
    title: {
        text: 'Altitude (m)'
    }
},

xAxis: {
title: {
        text: 'Time (s)'
    },
    /* accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
    } */
},

legend: {
    /* layout: 'horizontal',
    align: 'center-top',
    verticalAlign: 'middle' */
    enabled: true,
    floating: true,
    verticalAlign: 'top',
    align:'center',
    y:5, 
    x:35
},

plotOptions: {
    series: {
        // label: {
        //     connectorAllowed: false
        // },
        // pointStart: 2010
        shadow: {
            color:'#333', 
            // offsetX:, 
            // offsetY, 
            opacity: 0.5,
            width: 2
        }
    }
}, 

series: [{
    name: 'Container_Altitude',
    color:'#006600',
    // data: [43, 152, 127, 169, 97, 189, 137, 154]
    data: container_alt
}, {
    name: 'TP_Altitude',
    color:'#9900cc',
    // data: [24, 94, 59, 115, 52, 30, 72, 99]
    data: tp_alt
}, /*{
    name: 'Yaw',
    data: [11, 72, 86, 81, 20, 24, 32, 49]
}*//* , {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
}, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
} */
],

responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                y:0,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top'
            }
        }
    }]
}

});


// gyroscope chart
Highcharts.chart('container5', {
    chart: {
  backgroundColor: '#f6f6f6',
  polar: true,
  type: 'line',
},
title: {
    text: 'GYROSCOPE',
    verticalAlign: 'top',
    align:'left',
    x: 15,
    y:20
},

/* subtitle: {
    text: 'Source: thesolarfoundation.com'
}, */

yAxis: {
    title: {
        text: 'Gyroscope (rad/s)'
    }
},

xAxis: {
title: {
        text: 'Time (s)'
    },
    /* accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
    } */
},

legend: {
    /* layout: 'horizontal',
    align: 'center-top',
    verticalAlign: 'middle' */
    enabled: true,
    floating: true,
    verticalAlign: 'top',
    align:'center',
    /* y:10, */
    x:60
},

plotOptions: {
    series: {
        // label: {
        //     connectorAllowed: false
        // },
        // pointStart: 2010
        shadow: {
            color:'#333', 
            // offsetX:, 
            // offsetY, 
            opacity: 0.5,
            width: 2
        }
    }
}, 

series: [{
    name: 'Roll',
    // color: '#0066FF',
    // color:'#1f3f49',
    color:'#006600',
    data: [43, 152, 157, 169, 97, 119, 137, 154]
}, {
    name: 'Pitch',
    // color: 'red',
    color: '#ff6666',
    data: [24, 104, 129, 99, 52, 60, 72, 99]
}, {
    name: 'Yaw',
    // color: '#4a006a',
    // color:'#8500be',
    color:'#9900cc',
    data: [11, 72, 86, 51, 20, 24, 32, 49]
}/* , {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
}, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
} */
],

responsive: {
    rules: [{
        condition: {
            maxWidth: 1500
        },
        chartOptions: {
            legend: {
                    y:0,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top'
            }
        }
    }]
}

});

//magnetometer chart
Highcharts.chart('container1', {
    chart: {
  backgroundColor: '#f6f6f6',
  polar: true,
  type: 'spline',
},
title: {
    text: 'MAGNETOMETER',
    verticalAlign: 'top',
    align:'left',
    x: 15,
    y:20
},

/* subtitle: {
    text: 'Source: thesolarfoundation.com'
}, */

yAxis: {
    title: {
        text: 'Magnetometer (microTesla)'
    }
},

xAxis: {
title: {
        text: 'Time (s)'
    },
    /* accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
    } */
},

legend: {
    /* layout: 'horizontal',
    align: 'center-top',
    verticalAlign: 'middle' */
    enabled: true,
    floating: true,
    verticalAlign: 'top',
    align:'center',
    /* y:10, */
    x:60
},
plotOptions: {
    series: {
        // label: {
        //     connectorAllowed: false
        // },
        // pointStart: 2010
        shadow: {
            color:'#333', 
            // offsetX:, 
            // offsetY, 
            opacity: 0.5,
            width: 2
        }
    }
}, 

series: [{
    name: 'Roll',
    // color:'#8500be',
    color:'#9900cc',
    data: [43, 152, 157, 169, 97, 119, 137, 154]
}, {
    name: 'Pitch',
    // color:'#1f3f49',
    color:'#006600',
    data: [24, 104, 129, 99, 52, 60, 72, 99]
}, {
    name: 'Yaw',
    // color:'red',
    color: '#ff6666',
    data: [11, 72, 86, 51, 20, 24, 32, 49]
}/* , {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
}, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
} */
],

responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                    y:0,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top'
            }
        }
    }]
}

});

//voltage chart
Highcharts.chart('container2', {
    chart: {
  backgroundColor: '#f6f6f6',
  polar: true,
  type: 'spline',
},
title: {
    text: 'VOLTAGE',
    verticalAlign: 'top',
    align:'left',
    x: 5,
    y:20
},

/* subtitle: {
    text: 'Source: thesolarfoundation.com'
}, */

yAxis: {
    title: {
        text: 'Voltage (V)'
    }
},

xAxis: {
title: {
        text: 'Time (s)'
    },
    /* accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
    } */
},

legend: {
    /* layout: 'horizontal',
    align: 'center-top',
    verticalAlign: 'middle' */
    enabled: true,
    floating: true,
    verticalAlign: 'top',
    align:'center',
    y:5, 
    x:35
},

plotOptions: {
    series: {
        // label: {
        //     connectorAllowed: false
        // },
        // pointStart: 2010
        shadow: {
            color:'#333', 
            // offsetX:, 
            // offsetY, 
            opacity: 0.5,
            width: 2
        }
    }
}, 

series: [{
    name: 'Container_Voltage',
    color:'#9900cc',
    data: [43, 152, 127, 169, 97, 189, 137, 154]
}, {
    name: 'TP_Voltage',
    color: '#ff6666',
    data: [24, 94, 59, 115, 52, 30, 72, 99]
}, /*{
    name: 'Yaw',
    data: [11, 72, 86, 81, 20, 24, 32, 49]
}*//* , {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
}, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
} */
],

responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                y:0,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top'
            }
        }
    }]
}

});

//accelerometer chart
Highcharts.chart('container3', {
    chart: {
  backgroundColor: '#f6f6f6',
  polar: true,
  type: 'line',
},
title: {
    text: 'ACCELEROMETER',
    verticalAlign: 'top',
    align:'left',
    x: 5,
    y:20
},

/* subtitle: {
    text: 'Source: thesolarfoundation.com'
}, */

yAxis: {
    title: {
        text: 'Accelerometer (m/s^2)'
    }
},

xAxis: {
title: {
        text: 'Time (s)'
    },
    /* accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
    } */
},

legend: {
    /* layout: 'horizontal',
    align: 'center-top',
    verticalAlign: 'middle' */
    enabled: true,
    floating: true,
    verticalAlign: 'top',
    align:'center',
    y:5, 
    x:75
},

plotOptions: {
    series: {
        // label: {
        //     connectorAllowed: false
        // },
        // pointStart: 2010
        shadow: {
            color:'#333', 
            // offsetX:, 
            // offsetY, 
            opacity: 0.5,
            width: 2
        }
    }
}, 

series: [{
    name: 'Roll',
    color: '#ff6666',
    data: [43, 152, 157, 169, 97, 119, 137, 154]
}, {
    name: 'Pitch',
    // color:'#8500be',
    color:'#9900cc',
    data: [24, 104, 129, 99, 52, 60, 72, 99]
}, {
    name: 'Yaw',
    // color:'#1f3f49',
    color:'#006600',
    data: [11, 72, 86, 51, 20, 24, 32, 49]
}/* , {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
}, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
} */
],

responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                y:0,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top'
            }
        }
    }]
}

});

//temperature chart 
Highcharts.chart('container4', {
    chart: {
  backgroundColor: '#f6f6f6',
  polar: true,
  type: 'spline',
},
title: {
    text: 'TEMPERATURE',
    verticalAlign: 'top',
    align:'left',
    x: 5,
    y:20
},

/* subtitle: {
    text: 'Source: thesolarfoundation.com'
}, */

yAxis: {
    title: {
        text: 'Temperature (`C)'
    }
},

xAxis: {
title: {
        text: 'Time (s)'
    },
    /* accessibility: {
        rangeDescription: 'Range: 2010 to 2017'
    } */
},

legend: {
    /* layout: 'horizontal',
    align: 'center-top',
    verticalAlign: 'middle' */
    enabled: true,
    floating: true,
    verticalAlign: 'top',
    align:'center',
    y:5, 
    x:57
},

plotOptions: {
    series: {
        // label: {
        //     connectorAllowed: false
        // },
        // pointStart: 2010
        shadow: {
            color:'#333', 
            // offsetX:, 
            // offsetY, 
            opacity: 0.5,
            width: 2
        }
    }
}, 

series: [{
    name: 'Container_Temp',
    color: '#ff6666',
    data: [43, 152, 127, 169, 97, 189, 137, 154]
}, {
    name: 'TP_Temp',
    color:'#006600',
    data: [24, 94, 59, 115, 52, 30, 72, 99]
}, /*{
    name: 'Yaw',
    data: [11, 72, 86, 81, 20, 24, 32, 49]
}*//* , {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
}, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
} */
],

responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                y:0,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'top'
            }
        }
    }]
}

});

//backend formatting
var container_time = [], tp_time = [];
var container_alt = [], tp_alt = [];
var container_temp = [], tp_temp = [];
var container_volt = [], tp_volt = [];
var gyro_r = [], gyro_p = [], gyro_y = [];
var accel_r = [], accel_p = [], accel_y = [];
var mag_r = [], mag_p = [], mag_y = [];

//for connection to backend via socket
const socket = io.connect('http://localhost:3000/');

socket.on('data', (arr) => {
    document.getElementById('time-value').textContent = arr[1];
    document.getElementById('pc_text').textContent = arr[2];
    if(arr[3] == "C"){
        // container_time.push(data[1]);
        document.getElementById('pt_text').textContent = 'Container';
        container_alt.push(arr[6]);
        container_temp.push(arr[7]);
        container_volt.push(arr[8]); 
        if(arr[4]=="F"){
            document.getElementById('mode_text').textContent = 'Flight';
        } else if (arr[4]=='S'){
            document.getElementById('mode_text').textContent = 'Simulation';
        }
        if(arr[5]=="R"){
            document.getElementById('released_text').textContent = 'Released';
        } else if (arr[5]=='N'){
            document.getElementById('released_text').textContent = 'Not Released';
        }
        document.getElementById('ss_text').textContent = arr[14];

        //Container Data Table
        let ce = document.createElement("tr");
        arr.forEach(a => {
            // console.log(e);
            const td = document.createElement('td');
            td.textContent = a;  
            ce.appendChild(td);
            document.querySelector('#c_tbody').appendChild(ce);
        })
    } 
    else if(arr[3]=="T"){ 
        // const tpData = arrData;
        // console.log(tpData);
        // const tpData = JSON.parse(JSON.stringify(arrData)); 
        // console.log(tpData[0]);
        document.getElementById('pt_text').textContent = 'Tethered Payload';
        
        document.getElementById('tp_ss_text').textContent = arr[17];
        document.getElementById('pe_text').textContent = arr[16];
        //TP Graph
        // tp_time.push(arr[1]);
        tp_alt.push(arr[4]);
        tp_temp.push(arr[5]);
        tp_volt.push(arr[6]);
        gyro_r.push(arr[7]);
        gyro_p.push(arr[8]);
        gyro_y.push(arr[9]);
        accel_r.push(arr[10]);
        accel_p.push(arr[11]);
        accel_y.push(arr[12]);
        mag_r.push(arr[13]);
        mag_p.push(arr[14]);
        mag_y.push(arr[15]);

        //TP CSV
        let tr = document.createElement("tr");
        arr.forEach((tp) => {
            const td = document.createElement('td');
            td.textContent = tp;
            // console.log(td); 
            tr.appendChild(td);
            document.querySelector('#tp_tbody').appendChild(tr); 
        }) 
    } 
//     //Update
    alt.series[0].update(container_alt);
    alt.series[1].update(tp_alt);
//     temp.update();
//     volt.update();
//     gyro.update();
//     accel.update();
//     mag.update();
});