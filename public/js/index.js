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
        container_time.push(arr[1]);
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
        tp_time.push(arr[1]);
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
    // alt.series[0].update(container_alt);
    // alt.series[1].update(tp_alt);
    alt.update();
    // temp.update();
    // volt.update();
    gyro.update();
    // accel.update();
    // mag.update();
});


//charts
Chart.defaults.global.legend.labels.usePointStyle = true;

//altitude chart
const altitude=document.getElementById('altitude').getContext('2d');
const alt = new Chart(altitude, {
    type: "line",
    data: {
        labels: container_time,
        datasets: [{
        fill: false,     
        label: ' CONTAINER ALTITUDE             ',
        lineTension: 0,
        // backgroundColor: "rgb(62, 149, 205, 1)",    
        // borderColor: "rgb(62, 149, 205)",
        borderColor: '#006600',
        pointBackgroundColor:"#006600",
        // radius: 0,
        data: container_alt,
        // borderWidth:2,
        // pointRadius:1,
        },
    {
        fill: false,
        label:' TP ALTITUDE',
        lineTension: 0,
        // backgroundColor: "rgb(228, 68, 150, 0.8)",    
        // borderColor: "rgb(255, 96, 178, 0.8)",
        borderColor:'#9900cc',
        // pointBackgroundColor:"rgb(255, 96, 178, 0.8)", 
        pointBackgroundColor:"#9900cc", 
        // radius: 0,
        data: tp_alt,
        // borderWidth:2,
        // pointRadius:1,
    }]
    },
    
    // options: {
    //     legend: {display: false},
    //     scales: {
    //     yAxes: [{ticks: {min: 0, max:20}}],  
    //     },
    // },
    options : {
        plugins: {
            legend: {
                display: true,
                // position: 'right',
                // align:'',
                // floating: true,
                // position: 'left',
                // verticalAlign: 'left',
                // align:'center',
                labels: {
                    // color: 'rgb(255, 99, 132)'
                    // usePointStyle:true,
                    font: {
                        size: 26,
                        family: "'Verdana', sans-serif",
                    }
                }
            }
        },
        // legend: {display: true},
        responsive: true,
        maintainAspectRatio: false,
    // title: {
    //     display: true,
    //     text: 'Altitude',
    //     position: 'left',
    //     // verticalAlign: 'top',
    //     // align:'left',
    //     // x: 5,
    //     // y:20
    //     // style: {font-size: 1, font-weight: bold}
    // },
    position:'left',
    align:'start',
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Time (s)'
            },
            ticks: {
                beginAtZero: true
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Altitude (m)'
            },
        }],
    }
    }
});

//gyroscope
const GYROSCOPE = document.getElementById('gyroscope').getContext('2d');
const gyro = new Chart(GYROSCOPE, {
    type: "line",
    data: { 
        labels: container_time,
        datasets: [{
        fill: false,     
        label:' GYRO Roll  ',
        lineTension:0,
        // backgroundColor: "rgb(87, 192, 236, 1)",    
        // borderColor: "rgb(62, 149, 205)",
        // pointBackgroundColor: "rgb(62, 149, 205)",
        borderColor: "#006600",
        pointBackgroundColor: "#006600",
        data: gyro_r, 
        // borderWidth:2,
        // pointRadius:2,
        },
        {
        fill: false,
        label:' GYRO Pitch  ',
        lineTension:0,
        // backgroundColor: "rgba(87, 192, 236, 1)",    
        // borderColor: "rgb(255, 96, 178, 0.8)",
        // pointBackgroundColor:"rgb(255, 96, 178, 0.8)",
        borderColor: "#ff6666",
        pointBackgroundColor: "#ff6666",
        data: gyro_p, 
        // borderWidth:2,
        // pointRadius:2,
    },
    {
        fill: false,
        label:' GYRO Yaw  ',
        lineTension:0,
        // backgroundColor: "rgba(87, 192, 236, 1)",    
        // borderColor: "rgb(48, 205, 205, 0.87)",
        // pointBackgroundColor:"rgb(48, 205, 205, 0.87)",
        borderColor: "#9900cc",
        pointBackgroundColor: "#9900cc",
        data: gyro_y,
        // borderWidth:2,
        // pointRadius:2,
    },
    ]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 26,
                        family: "'Verdana', sans-serif",
                    }
                }
            }
        },
    //     title: {
    //         display: true,
    //         text: 'Gyro'
    
    // },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Time (s)'
            },
            ticks: {
                beginAtZero: true
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Gyroscope (rad/s)'
            },
        }],
    }

}
});

//altitude chart
const TEMPERATURE=document.getElementById('temperature').getContext('2d');
const temp = new Chart(TEMPERATURE, {
    type: "line",
    data: {
        labels: container_time,
        datasets: [{
        fill: false,     
        label: ' CONTAINER TEMPERATURE             ',
        lineTension: 0,
        // backgroundColor: "rgb(62, 149, 205, 1)",    
        // borderColor: "rgb(62, 149, 205)",
        borderColor: '#ff6666',
        pointBackgroundColor:"#ff6666",
        // radius: 0,
        data: container_temp,
        // borderWidth:2,
        // pointRadius:1,
        },
    {
        fill: false,
        label:' TP TEMPERATURE',
        lineTension: 0,
        // backgroundColor: "rgb(228, 68, 150, 0.8)",    
        // borderColor: "rgb(255, 96, 178, 0.8)",
        borderColor:'#006600',
        // pointBackgroundColor:"rgb(255, 96, 178, 0.8)", 
        pointBackgroundColor:"#006600", 
        // radius: 0,
        data: tp_temp,
        // borderWidth:2,
        // pointRadius:1,
    }]
    },
    
    // options: {
    //     legend: {display: false},
    //     scales: {
    //     yAxes: [{ticks: {min: 0, max:20}}],  
    //     },
    // },
    options : {
        plugins: {
            legend: {
                display: true,
                // position: 'right',
                // align:'',
                // floating: true,
                // position: 'left',
                // verticalAlign: 'left',
                // align:'center',
                labels: {
                    // color: 'rgb(255, 99, 132)'
                    // usePointStyle:true,
                    font: {
                        size: 26,
                        family: "'Verdana', sans-serif",
                    }
                }
            }
        },
        // legend: {display: true},
        responsive: true,
        maintainAspectRatio: false,
    // title: {
    //     display: true,
    //     text: 'Altitude',
    //     position: 'left',
    //     // verticalAlign: 'top',
    //     // align:'left',
    //     // x: 5,
    //     // y:20
    //     // style: {font-size: 1, font-weight: bold}
    // },
    position:'left',
    align:'start',
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Time (s)'
            },
            ticks: {
                beginAtZero: true
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Temperature (`C)'
            },
        }],
    }
    }
});


//gyroscope
const MAGNETOMETER = document.getElementById('magnetometer').getContext('2d');
const mag = new Chart(MAGNETOMETER, {
    type: "line",
    data: { 
        labels: container_time,
        datasets: [{
        fill: false,     
        label:' MAG Roll  ',
        lineTension:0,
        // backgroundColor: "rgb(87, 192, 236, 1)",    
        // borderColor: "rgb(62, 149, 205)",
        // pointBackgroundColor: "rgb(62, 149, 205)",
        borderColor: "#006600",
        pointBackgroundColor: "#006600",
        data: mag_r, 
        // borderWidth:2,
        // pointRadius:2,
        },
        {
        fill: false,
        label:' MAG Pitch  ',
        lineTension:0,
        // backgroundColor: "rgba(87, 192, 236, 1)",    
        // borderColor: "rgb(255, 96, 178, 0.8)",
        // pointBackgroundColor:"rgb(255, 96, 178, 0.8)",
        borderColor: "#ff6666",
        pointBackgroundColor: "#ff6666",
        data: mag_p, 
        // borderWidth:2,
        // pointRadius:2,
    },
    {
        fill: false,
        label:' MAG Yaw  ',
        lineTension:0,
        // backgroundColor: "rgba(87, 192, 236, 1)",    
        // borderColor: "rgb(48, 205, 205, 0.87)",
        // pointBackgroundColor:"rgb(48, 205, 205, 0.87)",
        borderColor: "#9900cc",
        pointBackgroundColor: "#9900cc",
        data: mag_y,
        // borderWidth:2,
        // pointRadius:2,
    },
    ]
    },
    options:{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 26,
                        family: "'Verdana', sans-serif",
                    }
                }
            }
        },
    //     title: {
    //         display: true,
    //         text: 'Gyro'
    
    // },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Time (s)'
            },
            ticks: {
                beginAtZero: true
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Magnetometer (microTesla)'
            },
        }],
    }

}
});