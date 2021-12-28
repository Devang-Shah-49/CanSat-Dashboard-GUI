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
const btns = [document.querySelector('#display-dashboard'), document.querySelector('#display-map'), document.querySelector('#display-c_csv')];
const newDisplay = [document.querySelector('#dashboard-container'), document.querySelector('#map-container'), document.querySelector('#c_csv-container')]

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
            else{
                open.style = "display: none !important;"
            }
        })
    })
})

//highchart js graphs
//altitude chart
Highcharts.chart('container6', {
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
    data: [43, 152, 127, 169, 97, 189, 137, 154]
}, {
    name: 'TP_Altitude',
    color:'#9900cc',
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


