var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
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
var xMonth = "ตค. - ธค.";
var xMonthDetail = "ประจำไตรมาส 3 (ตค. - ธค. 2565)";
var xThisMonth = "ภาพรวมเดือนตุลาคม 2565";


$(document).ready(function() {
  if(sessionStorage.getItem("EmpID_Kickoff")==null) { location.href = "index.html"; }
  Connect_DB();
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
  dbBBDRH = firebase.firestore().collection("Championship_RH");
  dbLeagueMember = firebase.firestore().collection("BBD_LeagueMember");
  //CheckScore();
  GetLinePicture();
  Achievement();

}


/*
function CheckScore() {
  var i = 0;
  dbBBDRH
  .orderBy('EmpRH','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      console.log(doc.data().EmpRH+" === "+doc.data().APE_50+" === "+doc.data().Product_50);
      if(i==0) {
        Zone1 = doc.data().EmpRH;
        A1 = parseFloat(doc.data().APE_50);
        A2 = parseFloat(doc.data().Product_50);
      } else if(i==1) { 
        Zone2 = doc.data().EmpRH;
        B1 = parseFloat(doc.data().APE_50);
        B2 = parseFloat(doc.data().Product_50);
      } else if(i==2) { 
        Zone3 = doc.data().EmpRH;
        C1 = parseFloat(doc.data().APE_50);
        C2 = parseFloat(doc.data().Product_50);
      } else if(i==3) { 
        Zone4 = doc.data().EmpRH;
        D1 = parseFloat(doc.data().APE_50);
        D2 = parseFloat(doc.data().Product_50);
      } else if(i==4) { 
        Zone5 = doc.data().EmpRH;
        E1 = parseFloat(doc.data().APE_50);
        E2 = parseFloat(doc.data().Product_50);
      } else if(i==5) { 
        Zone6 = doc.data().EmpRH;
        F1 = parseFloat(doc.data().APE_50);
        F2 = parseFloat(doc.data().Product_50);
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
        ['RH', '% APE Achievement', { role: 'annotation'}, '% Focus Product Achievement', { role: 'annotation'}],
        ['RH1', A1, A1+"%", A2, A2+"%"],
        ['RH2', B1, B1+"%", B2, B2+"%"],
        ['RH3', C1, C1+"%", C2, C2+"%"],
        ['RH4', D1, D1+"%", D2, D2+"%"],
        ['RH5', E1, E1+"%", E2, E2+"%"],
        ['RH6', F1, F1+"%", F2, F2+"%"]
      ]);

      var options = {
        annotations: {textStyle: { fontName: 'ekachon-regular' }},
        hAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
        vAxis: {textStyle: { fontName: 'ekachon-regular' }, titleTextStyle: { fontName: 'ekachon-regular' }},
        titleTextStyle: { fontName: 'ekachon-regular' },
        tooltip: {textStyle: {fontName: 'ekachon-regular' }},
        fontName: 'ekachon-regular',
        fontSize: 11,
        width: 360,
        height: 300,
        chartArea: {width: '80%'},
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '90%' },
        backgroundColor: '#dbe5f3',
        isStacked: true,
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
}
*/


function GetLinePicture() {
  var i = 0;
  var str = "";
  LineEmpIDArr = [];
  LinePictureArr = [];
  dbLeagueMember
  .orderBy('EmpID','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      LineEmpIDArr.push(doc.data().EmpID);
      LinePictureArr.push({ EmpID: doc.data().EmpID, EmpName: doc.data().LineName , EmpPicture: doc.data().LinePicture, EmpRef: doc.id });
    });    
  });
}



function Achievement() {
  var str = "";
  var sRH = "";
  str += '<div class="btn-t33" style="margin-top:30px; background-color: #94a9b3;border: solid #94a9b3 1px;">ผลงานสะสม RH Championship<br>'+xMonthDetail+'</div>';
  str += '<div style="margin:10px auto;text-align: center; width:90%;">';
  str += '<div style="width:30%;float: left;text-align: left;"><img src="./img/click-1.png"></div><div style="width:40%;float: left;">&nbsp;</div>';
  str += '<div style="width:30%;float: left;text-align: right;"><img src="./img/click-2.png"></div></div><div class="clr"></div>';


  dbBBDRH.orderBy('TotalRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(sRH=="") { sRH = doc.data().EmpRH; }
      str += '<div class="bar_background"><div style="padding-top:8px;">';
      str += '<div class="bar_body"><div class="btn-t66" onclick="ShowZone(\''+ doc.data().EmpRH +'\')">'+ doc.data().EmpRH +'</div></div>';
      if(doc.data().MTDTarget_1<doc.data().MTDIssue_1) { 
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Total_100 +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Total_100 +'"></div></div>';
      }
      str += '<div class="bar_body1" onclick="OpenProfile(\''+ doc.id +'\')" style="width:15%;margin-left:10px;">'+ doc.data().Total_100 +'</div>';
      str += '</div><div class="clr"></div></div>';
      if(doc.data().EmpRH!=sRH) {
        var str1 = "";
        dbBBDKickoff.where('EmpRH','==', doc.data().EmpRH)
        .orderBy('EmpZone','asc')
        .get().then((snapshot)=> {
          snapshot.forEach(doc=> {
            //console.log(doc.data().EmpZone);
            str1 += '<div class="bar_background"><div style="padding-top:8px;">';
            str1 += '<div class="bar_body"><div class="btn-t66" onclick="OpenProfile1(\''+ doc.id +'\')">'+ doc.data().EmpZone +'</div></div>';
            str1 += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Total_100 +'"></div></div>';
            str1 += '<div class="bar_body1">'+ doc.data().APEAchieve_1 +'</div>';
            str1 += '</div><div class="clr"></div></div>';
          });
          str += ''+str1;
          //alert(str1);
          sRH = doc.data().EmpRH;
        })
      }
    });
    $("#DisplayReport").html(str);  
    document.getElementById('DisplayWaitting').style.display='none';
    document.getElementById('DisplayReport').style.display='block';
  })
}




function ShowZone(RH) {
  var str = "";
  str += '<center><div class="btn-t4" style="margin-top:30px;margin-bottom: 14px;">'+xThisMonth+'<br>ผลงานรวมของ ZONE สังกัด -> '+RH+'</div>';
  dbBBDKickoff.where('EmpRH','==', RH)
  .orderBy('NewRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<div class="bar_background"><div style="padding-top:8px;">';
      str += '<div class="bar_body" style="width:30%;margin-right:6px;"><div class="btn-t666">'+ doc.data().EmpZone +'</div></div>';
      if(doc.data().MTDTarget_1<doc.data().MTDIssue_1) {
        str += '<div class="progress2" style="float: left;width:46%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Total_100 +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:46%;margin-top:6px;"><div class="bar3" style="width:'+ doc.data().Total_100 +'"></div></div>';
      }
      str += '<div class="bar_body">'+ doc.data().Total_100 +'</div>';
      str += '</div><div class="clr"></div></div>';
    });
    str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:15px;">ปิดหน้าต่างนี้</div>';
    str += '<div class="clr" style="height: 25px;"></div></center>';
    $("#DisplayProfile").html(str);  
    document.getElementById("id01").style.display = "block";
  })
}



function OpenProfile(uid) {
  var str = "";
  dbBBDRH.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      const results = LinePictureArr.filter(obj => {return obj.EmpID === doc.data().EmpID;});
      str += '<center>';
      str += '<div><img src="'+results[0].EmpPicture+'" class="add-profile" style="margin:30px auto 0px auto;" onerror="javascript:imgError(this)"></div>';
      str += '<div class="text-1">'+doc.data().EmpName+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>'+doc.data().EmpPosition+'</b> ('+ doc.data().EmpRH+')</div>';
      str += '<div class="btn-t4">ผลงาน -> '+doc.data().Total_100+' | อันดับ -> '+doc.data().TotalRank+'</div>';

      str += '<div>';
      str += '<div class="btn-t77">1. หมวด % APE Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;">'+doc.data().MTDTarget_1+'</td></tr>';
      str += '<tr><th scope="row">MTD Issue</th><td style="text-align:center;">'+doc.data().MTDIssue_1+'</td></tr>';
      str += '<tr><th scope="row">% APE Achievement</th><td style="text-align:center;">'+doc.data().APEAchieve_1+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">2. หมวด % Focus Product Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">Target</th><td style="text-align:center;">'+doc.data().ProductTarget_2+'</td></tr>';
      str += '<tr><th scope="row">Product Focus</th><td style="text-align:center;">'+doc.data().ProductFocus_2 +'</td></tr>';
      str += '<tr><th scope="row">% Target Focus Product</th><td style="text-align:center;">'+doc.data().ProductAchieve_2+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">3. Total % Weighted</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">50% APE Achievement</th><td style="text-align:center;">'+doc.data().APE_50+'</td></tr>';
      str += '<tr><th scope="row">50% Focused Product</th><td style="text-align:center;">'+doc.data().Product_50+'</td></tr>';
      str += '<tr><th scope="row">% Total</th><td style="text-align:center;">'+doc.data().Total_100+'</td></tr>';
      str += '<tr><th scope="row">Rank</th><td style="text-align:center;">'+doc.data().TotalRank+'</td></tr>';
      str += '</tbody>';
      str += '</table>';
      str += '</div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:15px;">ปิดหน้าต่างนี้</div>';
      str += '<div class="clr" style="height: 25px;"></div>';
      str += '</center>';
    });
    $("#DisplayProfile").html(str);  
    document.getElementById("id01").style.display = "block";
  });
}






function imgError(image) {
    image.onerror = "";
    image.src = "./img/box.jpg";
    return true;
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}
