var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "RH1";
var Zone1 = "";
var Zone2 = "";
var Zone3 = "";
var Zone4 = "";
var Zone5 = "";
var Zone6 = "";
var Zone7 = "";
var A1 = 0;
var A2 = 0;
var A3 = 0;
var B1 = 0;
var B2 = 0;
var B3 = 0;
var C1 = 0;
var C2 = 0;
var C3 = 0;
var D1 = 0;
var D2 = 0;
var D3 = 0;
var E1 = 0;
var E2 = 0;
var E3 = 0;
var F1 = 0;
var F2 = 0;
var F3 = 0;
var G1 = 0;
var G2 = 0;
var G3 = 0;


$(document).ready(function() {
  if(sessionStorage.getItem("EmpID_Kickoff")==null) { location.href = "index.html"; }
  Connect_DB();
  document.getElementById(1).classList.add('box-menu33');
});


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    databaseURL: "https://file-upload-6f4fc.firebaseio.com",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbBBDKickoff = firebase.firestore().collection("Championship_Zone");
  CheckScore();
}


function CheckScore() {
  var i = 0;
  dbBBDKickoff.where('EmpRH','==', xClickMenu)
  .orderBy('TotalRank','asc')
  .orderBy('Total_100','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      console.log(doc.data().EmpZone);
      if(i==0) {
        Zone1 = doc.data().EmpZone;
        A1 = parseFloat(doc.data().APE_50);
        A2 = parseFloat(doc.data().Product_50);
      } else if(i==1) { 
        Zone2 = doc.data().EmpZone;
        B1 = parseFloat(doc.data().APE_50);
        B2 = parseFloat(doc.data().Product_50);
      } else if(i==2) { 
        Zone3 = doc.data().EmpZone;
        C1 = parseFloat(doc.data().APE_50);
        C2 = parseFloat(doc.data().Product_50);
      } else if(i==3) { 
        Zone4 = doc.data().EmpZone;
        D1 = parseFloat(doc.data().APE_50);
        D2 = parseFloat(doc.data().Product_50);
      } else if(i==4) { 
        Zone5 = doc.data().EmpZone;
        E1 = parseFloat(doc.data().APE_50);
        E2 = parseFloat(doc.data().Product_50);
      } else if(i==5) { 
        Zone6 = doc.data().EmpZone;
        F1 = parseFloat(doc.data().APE_50);
        F2 = parseFloat(doc.data().Product_50);
      } else if(i==6) { 
        Zone7 = doc.data().EmpZone;
        G1 = parseFloat(doc.data().APE_50);
        G2 = parseFloat(doc.data().Product_50);
      }
      i++;
    });
    drawStacked();
  })
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);


function drawStacked() {
  if(xClickMenu=="RH1") {
    var data = google.visualization.arrayToDataTable([
      ['Zone', '% APE Achievement',{ role: 'annotation'}, '% Focus Product Achievement',{ role: 'annotation'}],
      [ Zone1, A1, A1+"%", A2, A2+"%"],
      [ Zone2, B1, B1+"%", B2, B2+"%"],
      [ Zone3, C1, C1+"%", C2, C2+"%"],
      [ Zone4, D1, D1+"%", D2, D2+"%"],
      [ Zone5, E1, E1+"%", E2, E2+"%"],
      [ Zone6, F1, F1+"%", F2, F2+"%"],
      [ Zone7, G1, G1+"%", G2, G2+"%"]
    ]);
  } else if(xClickMenu=="RH4" || xClickMenu=="RH6") {
    var data = google.visualization.arrayToDataTable([
      ['Zone', '% APE Achievement',{ role: 'annotation'}, '% Focus Product Achievement',{ role: 'annotation'}],
      [ Zone1, A1, A1+"%", A2, A2+"%"],
      [ Zone2, B1, B1+"%", B2, B2+"%"],
      [ Zone3, C1, C1+"%", C2, C2+"%"],
      [ Zone4, D1, D1+"%", D2, D2+"%"],
      [ Zone5, E1, E1+"%", E2, E2+"%"]
    ]);
  } else {
    var data = google.visualization.arrayToDataTable([
      ['Zone', '% APE Achievement',{ role: 'annotation'}, '% Focus Product Achievement',{ role: 'annotation'}],
      [ Zone1, A1, A1+"%", A2, A2+"%"],
      [ Zone2, B1, B1+"%", B2, B2+"%"],
      [ Zone3, C1, C1+"%", C2, C2+"%"],
      [ Zone4, D1, D1+"%", D2, D2+"%"],
      [ Zone5, E1, E1+"%", E2, E2+"%"],
      [ Zone6, F1, F1+"%", F2, F2+"%"]
    ]);
  }
  var options = {
      annotations: {textStyle: { fontName: 'ekachon-regular' }},
      hAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
      vAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
      titleTextStyle: { fontName: 'ekachon-regular' },
      tooltip: {textStyle: {fontName: 'ekachon-regular' }},
      fontName: 'ekachon-regular',
      fontSize: 11,
      Top: 0,
      width: 360,
      chartArea: {width: '50%'},
      legend: { position: 'none' },
      title: 'ข้อมูลภาพรวมของ '+xClickMenu,
      bars: 'horizontal',
      backgroundColor: '#dbe5f3',
      isStacked: true,
      bar: { groupWidth: "90%" }
  };
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}



function SelectBox(x) {
  var xx = "";
  if(x=="RH1") {
    xx = 1;
  } else if(x=="RH2") { 
    xx = 2;
  } else if(x=="RH3") { 
    xx = 3;
  } else if(x=="RH4") { 
    xx = 4;
  } else if(x=="RH5") { 
    xx = 5;
  } else if(x=="RH6") { 
    xx = 6;
  }
  var i = 1;
  for (i = 1; i < 7; i++) {
    document.getElementById(i).classList.remove('box-menu33');
  }   
  if(x!="") {
    console.log(x+"==="+xx);
    xClickMenu = x;
    document.getElementById(xx).classList.add('box-menu33');
    CheckScore()
  }
}


