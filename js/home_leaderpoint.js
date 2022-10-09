var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xLeague = "Champion League";
var xClickMenu = "A";
var Zone1 = "";
var Zone2 = "";
var Zone3 = "";
var Zone4 = "";
var Zone5 = "";
var Zone6 = "";
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


$(document).ready(function() {
  if(sessionStorage.getItem("EmpID_Kickoff")==null) { location.href = "index.html"; }
  Connect_DB();
  document.getElementById(1).classList.add('box-menu2');
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

  Zone1 = "";
  Zone2 = "";
  Zone3 = "";
  Zone4 = "";
  Zone5 = "";
  Zone6 = "";
  Zone7 = "";
  Zone8 = "";
  Zone9 = "";
  Zone10 = "";
  Zone11 = "";
  Zone12 = "";
  Zone13 = "";
  A1 = 0;
  A2 = 0;
  A3 = 0;
  B1 = 0;
  B2 = 0;
  B3 = 0;
  C1 = 0;
  C2 = 0;
  C3 = 0;
  D1 = 0;
  D2 = 0;
  D3 = 0;
  E1 = 0;
  E2 = 0;
  E3 = 0;
  F1 = 0;
  F2 = 0;
  F3 = 0;
  G1 = 0;
  G2 = 0;
  G3 = 0;
  H1 = 0;
  H2 = 0;
  H3 = 0;
  I1 = 0;
  I2 = 0;
  I3 = 0;
  J1 = 0;
  J2 = 0;
  J3 = 0;
  K1 = 0;
  K2 = 0;
  K3 = 0;
  L1 = 0;
  L2 = 0;
  L3 = 0;
  M1 = 0;
  M2 = 0;
  M3 = 0;

  dbBBDKickoff
  //.where('League','==', xLeague)
  .where('Round1','==', xClickMenu)
  .orderBy('TotalRank','asc')
  .orderBy('Total_100','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //console.log(doc.data().EmpZone+" === "+doc.data().APEAchieve_1+" === "+doc.data().ProductAchieve_2+" === "+doc.data().APEAchieve_3);
      if(i==0) {
        Zone1 = doc.data().EmpZone  + "\n("+ doc.data().EmpRH +")";
        A1 = parseFloat(doc.data().APEAchieve_1);
        A2 = parseFloat(doc.data().ProductAchieve_2);
        console.log(A1+"==="+A2);
      } else if(i==1) { 
        Zone2 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        B1 = parseFloat(doc.data().APEAchieve_1);
        B2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==2) { 
        Zone3 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        C1 = parseFloat(doc.data().APEAchieve_1);
        C2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==3) { 
        Zone4 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        D1 = parseFloat(doc.data().APEAchieve_1);
        D2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==4) { 
        Zone5 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        E1 = parseFloat(doc.data().APEAchieve_1);
        E2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==5) { 
        Zone6 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        F1 = parseFloat(doc.data().APEAchieve_1);
        F2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==6) { 
        Zone7 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        G1 = parseFloat(doc.data().APEAchieve_1);
        G2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==7) { 
        Zone8 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        H1 = parseFloat(doc.data().APEAchieve_1);
        H2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==8) { 
        Zone9 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        I1 = parseFloat(doc.data().APEAchieve_1);
        I2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==9) { 
        Zone10 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        J1 = parseFloat(doc.data().APEAchieve_1);
        J2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==10) { 
        Zone11 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        K1 = parseFloat(doc.data().APEAchieve_1);
        K2 = parseFloat(doc.data().ProductAchieve_2);
      } else if(i==11 && xClickMenu=="A") { 
        Zone12 = doc.data().EmpZone + "\n("+ doc.data().EmpRH +")";
        L1 = parseFloat(doc.data().APEAchieve_1);
        L2 = parseFloat(doc.data().ProductAchieve_2);
      }
      i++;

    });
    drawStacked();
  })
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);


function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ['Zone', '% APE Achievement',{ role: 'annotation'}, '% Focus Product Achievement',{ role: 'annotation'}],
    [ Zone1, A1, A1+"%", A2, A2+"%"],
    [ Zone2, B1, B1+"%", B2, B2+"%"],
    [ Zone3, C1, C1+"%", C2, C2+"%"],
    [ Zone4, D1, D1+"%", D2, D2+"%"],
    [ Zone5, E1, E1+"%", E2, E2+"%"],
    [ Zone6, F1, F1+"%", F2, F2+"%"],
    [ Zone7, G1, G1+"%", G2, G2+"%"],
    [ Zone8, H1, H1+"%", H2, H2+"%"],
    [ Zone9, I1, I1+"%", I2, I2+"%"],
    [ Zone10, J1, J1+"%", J2, J2+"%"],
    [ Zone11, K1, K1+"%", K2, K2+"%"],
    [ Zone12, L1, L1+"%", L2, L2+"%"]
  ]);
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
      chartArea: {width: '60%',height: '100%'},
      legend: { position: 'none' },
      title: 'ข้อมูลการแข่งขันของสาย '+xClickMenu,
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
  if(x=="A") {
    xx = 1;
  } else if(x=="B") { 
    xx = 2;
  } else if(x=="C") { 
    xx = 3;
  }
  var i = 1;
  for (i = 1; i < 4; i++) {
    document.getElementById(i).classList.remove('box-menu2');
  }   
  if(x!="") {
    xClickMenu = x;
    document.getElementById(xx).classList.add('box-menu2');
    CheckScore()
  }
}

