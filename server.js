//Install dependencies from terminal using these commands
//npm init -y
//npm i serialport

//Import dependencies
const SerialPort = require("serialport"); //package in node js to connect to port
const Readline = require("@serialport/parser-readline"); //to make incoming data easily readable and clear for using

//npm i socket.io
const socket = require('socket.io');

//npm i express
const express = require('express');

//npm i fs
const fs = require('fs');

const app = express();
const server = app.listen(3000);
app.use(express.static('public'));

//defining the serial port 
const port = new SerialPort("COM5",{baudRate:115200,});

// serial port parser to format our data for us 
const parser = new Readline();
port.pipe(parser);

//read the data from the serial port by turning on the parser
// parser.on("data", (line) => console.log(line));

const io = socket(server);
io.sockets.on('connection', connect);

function connect(s) {
    console.log('Connected: '+s.id);
    parser.on("data", (line) => {
        // console.log(line);
        // s.emit('data', line);
        // if(line[0]==='1'){
        //     fs.writeFile('public/csv/container.csv',line,{'flag':'a'},(err)=>{
        //         if(err){
        //             throw err;
        //         }
        //     });
        // }
        // else if(line[0]==='6'){
        //     fs.writeFile('public/csv/payload.csv',line,{'flag':'a'},(err)=>{
        //         if(err){
        //             throw err;
        //         }
        //     });
        // }
        const arrData = line.split(',');
        
        const obj = {};
        const c_obj = {};
        const tp_obj = {};
        // if(arrData[3]=='C'){
        //     fs.writeFile('public/csv/container.csv',line,{'flag':'a'},(err)=>{
        //         if(err){
        //             throw err;
        //         }
        //     });
        // }
        // else if(arrData[3]=='T'){
        //     fs.writeFile('public/csv/payload.csv',line,{'flag':'a'},(err)=>{
        //         if(err){
        //             throw err;
        //         }
        //     });
        // }
        s.emit('data', arrData);
        // if(arrData[3]==='C'){
        //     c_obj.id = arrData[0];
        //     c_obj.mtime = arrData[1];
        //     c_obj.pc = arrData[2];
        //     c_obj.pt = arrData[3]; ///C or T
        //     c_obj.mode = arrData[4];
        //     c_obj.released = arrData[5];
        //     c_obj.alt = arrData[6];
        //     c_obj.temp = arrData[7];
        //     c_obj.volt = arrData[8];
        //     c_obj.gpstime = arrData[9];
        //     c_obj.gpslat = arrData[10];
        //     c_obj.gpslong = arrData[11];
        //     c_obj.gpsalt = arrData[12]
        //     c_obj.gpssats = arrData[13];
        //     c_obj.ss = arrData[14];
        //     c_obj.cmd = arrData[15];
        //     s.emit('data', c_obj);
        // }
        // else if(arrData[3]==='T'){
        //     tp_obj.id = arrData[0];
        //     tp_obj.mtime = arrData[1];
        //     tp_obj.pc = arrData[2];
        //     tp_obj.pt = arrData[3];
        //     tp_obj.alt = arrData[4];
        //     tp_obj.temp = arrData[5];
        //     tp_obj.volt = arrData[6];
        //     tp_obj.gyroR = arrData[7];
        //     tp_obj.gyroP = arrData[8];
        //     tp_obj.gyroY = arrData[9];
        //     tp_obj.accelR = arrData[10];
        //     tp_obj.accelP = arrData[11]
        //     tp_obj.accelY = arrData[12];
        //     tp_obj.magR = arrData[13];
        //     tp_obj.magP = arrData[14];
        //     tp_obj.magY = arrData[15];
        //     tp_obj.pe = arrData[16];
        //     tp_obj.ss = arrData[17];
        //     s.emit('data', tp_obj);
        // }
    });

};