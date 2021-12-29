// //to display csv as data table
// onload = fetch("./csv/container.csv")
// .then(res => {
//     return res.text();
// }).then(data => {
//     let result = data.split('\n').map(e => {
//         return e.split(",")
//     })
//     // console.log(result);
//     result.forEach(e=>{
//         let m = e.map(e=>{
//             return `<td>${e}</td>`;
//         }).join("")
//         let ce = document.createElement("tr");
//         ce.innerHTML = m;
//         document.getElementById("c_tbody").appendChild(ce);
//         // console.log(m);
//     })
// });

// // document.getElementById("myInput_c").addEventListener("keyup", function(event) {
// // //     if (event.key === 'Enter')
// // // function myFunction() {
// //     if (event.key === 'Enter'){
// //         // console.log('Running');
// //         var input, filter, table, tr, td, i, txtValue;
// //         input = document.getElementById("myInput_c");
// //         filter = input.value.toUpperCase();
// //         if(filter!=""){
// //            // console.log(filter)
// //         table = document.getElementById("random_c");
// //         // console.log(table)
// //         // tbody = table.getElementById("kaam");
// //         tbody = table.querySelector("c_tbody");
// //         // tbody = table.tbody;
// //         // console.log(tbody)
// //         tr = tbody.getElementsByTagName("tr");
// //         // console.log(tr)
// //         for (i = 0; i < tr.length; i++) {
// //           tdx = tr[i].getElementsByTagName("td");
// //           for (let j=0; j<tdx.length; j++){
// //             td = tdx[j];
// //             // console.log(td)
// //         //   console.log(td.innerText)
// //           if (td) {
// //             txtValue = td.textContent || td.innerText || td.innerHTML;
// //             // tr[i].style.display = "";
// //             // console.log(txtValue);
// //             // console.log(txtValue.toUpperCase().indexOf(filter));
// //             if (txtValue.toUpperCase().indexOf(filter) > -1) {
// //               tr[i].style="display: flex; font-family: Arial, Helvetica, sans-serif;border-collapse: collapse;width: 100%; ";
// //             // console.log(tr[i].style)
// //             //   document.getElementById("out").innerHTML=tr[i];
// //               break;
// //             // tr[i].style.display = tr[i];
// //             } else {
// //               tr[i].style.display = "none";
// //             }
// //           }  
// //           }
// //         }
       
               
// //         }}});


// //for payload
// onload = fetch("./csv/payload.csv")
// .then(res => {
//     return res.text();
// }).then(data => {
//     let result = data.split('\n').map(e => {
//         return e.split(",")
//     })
//     // console.log(result);public\csv\payload.csv
//     result.forEach(e=>{
//         let m = e.map(e=>{
//             return `<td>${e}</td>`;
//         }).join("")
//         let ce = document.createElement("tr");
//         ce.innerHTML = m;
//         document.querySelector("tp_tbody").appendChild(ce);
//         // console.log(m);
//     })
// });