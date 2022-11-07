//var DoneSurvey = 0;
//var ShowScore = 0;
var xMonth = "ตค. - ธค.";
var xMonthDetail = "ประจำไตรมาส 3 (ตค. - ธค. 2565)";
var xThisMonth = "ภาพรวมเดือนตุลาคม 2565";
var A1,A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2;
var AA1,AA2,AA3,BB1,BB2,BB3,CC1,CC2,CC3,DD1,DD2,DD3,EE1,EE2,EE3,FF1,FF2,FF3,GG1,GG2,GG3;
var Zone1,Zone2,Zone3,Zone4,Zone5,Zone6;


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Kickoff")==null) { location.href = "index.html"; }
  Connect_DB();
});



(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/01/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);

  dbBBDKickoff = firebase.firestore().collection("Championship_Zone");
  dbBBDRH = firebase.firestore().collection("Championship_RH");
  dbLendingZone = firebase.firestore().collection("Championship_LendZone");
  dbLendingRH = firebase.firestore().collection("Championship_LendRH");
  dbLeagueMember = firebase.firestore().collection("BBD_LeagueMember");
  GetLinePicture();
  //CheckRH();
  //CheckScore();
  CheckScore();
  CheckScoreLending();
  //Achievement();
}


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


function OpenLink(page) {
  var str = "";
  if(page==1) {
    location.href = 'intro.html';
  } else if(page==2) {
    location.href = 'home_about.html';
  } else if(page==3) { // ประเมินผล
    str += '<center>';
    str += '<div class="btn-t3" style="margin-top:25px;">VDO แนะนำการแข่งขัน</div><div class="clr"></div>';
    str += '<video id="video" style="max-width:450px;width:99%;margin:25px auto 5px auto;" controls="controls" autoplay>';
    str += '<source src="https://firebasestorage.googleapis.com/v0/b/retailproject-6f4fc.appspot.com/o/vdo%2FBBDLeague.mp4?alt=media&token=62eb01b8-8c1f-4dca-955d-221dc4bba317" type="video/mp4"></video>';
    str += '<div class="clr"></div><div class="btn-t2" onclick="CloseVDO()" style="margin-top:15px;">ปิดวิดีโอ</div>';
    str += '</center><div class="clr" style="height: 25px;"></div>';
    $("#DisplayVDO").html(str);  
    document.getElementById('id01').style.display='block';
  } else if(page==4) { // ดูภาพกิจกรรม
    location.href = 'allteam.html';
  } else if(page==5) { // เอกสารอบรม
    location.href = 'rhpointmonth.html';
  } else if(page==6) {
    location.href = 'lendingproduct.html';
  }
  //location.href = 'notwork.html';
}


function Achievement() {
  var str = "";
  var sRH = "";
  str += '<div class="btn-t33" style="margin-top:30px; background-color: #94a9b3;border: solid #94a9b3 1px;">BBD Championship - BA Life<br>ผลงานสะสม RH Championship<br>'+xMonthDetail+'</div>';
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

function CheckScore() {
  var i = 0;
  dbBBDRH
  .orderBy('EmpRH','asc')
  //.orderBy('TotalPoint','desc')
  //.orderBy('TotalRank','asc')
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





function CheckScoreLending() {
  var i = 0;
  dbLendingRH
  .orderBy('EmpRH','asc')
  //.orderBy('TotalPoint','desc')
  //.orderBy('TotalRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      console.log(doc.data().EmpRH+" === "+doc.data().Target_1+" === "+doc.data().Target_2+" === "+doc.data().Target_3);
      if(i==0) {
        Zone1 = doc.data().EmpRH;
        AA1 = parseFloat(doc.data().Target_1);
        AA2 = parseFloat(doc.data().Target_2);
        AA3 = parseFloat(doc.data().Target_3);
      } else if(i==1) { 
        Zone2 = doc.data().EmpRH;
        BB1 = parseFloat(doc.data().Target_1);
        BB2 = parseFloat(doc.data().Target_2);
        BB3 = parseFloat(doc.data().Target_3);
      } else if(i==2) { 
        Zone3 = doc.data().EmpRH;
        CC1 = parseFloat(doc.data().Target_1);
        CC2 = parseFloat(doc.data().Target_2);
        CC3 = parseFloat(doc.data().Target_3);
      } else if(i==3) { 
        Zone4 = doc.data().EmpRH;
        DD1 = parseFloat(doc.data().Target_1);
        DD2 = parseFloat(doc.data().Target_2);
        DD3 = parseFloat(doc.data().Target_3);
      } else if(i==4) { 
        Zone5 = doc.data().EmpRH;
        EE1 = parseFloat(doc.data().Target_1);
        EE2 = parseFloat(doc.data().Target_2);
        EE3 = parseFloat(doc.data().Target_3);
      } else if(i==5) { 
        Zone6 = doc.data().EmpRH ;
        FF1 = parseFloat(doc.data().Target_1);
        FF2 = parseFloat(doc.data().Target_2);
        FF3 = parseFloat(doc.data().Target_3);
      }
      i++;
    });
    drawStackedLending();
  })
}

google.charts.setOnLoadCallback(drawStackedLending);


function drawStackedLending() {
      var data = google.visualization.arrayToDataTable([
        ['Zone', '% CYH',{ role: 'annotation'}, '% C2G BT CCC',{ role: 'annotation'}, '% CC FC',{ role: 'annotation'}],
        [ Zone1, AA1, AA1+"%", AA2, AA2+"%", AA3, AA3+"%"],
        [ Zone2, BB1, BB1+"%", BB2, BB2+"%", BB3, BB3+"%"],
        [ Zone3, CC1, CC1+"%", CC2, CC2+"%", CC3, CC3+"%"],
        [ Zone4, DD1, DD1+"%", DD2, DD2+"%", DD3, DD3+"%"],
        [ Zone5, EE1, EE1+"%", EE2, EE2+"%", EE3, EE3+"%"],
        [ Zone6, FF1, FF1+"%", FF2, FF2+"%", FF3, FF3+"%"]
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
      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
      chart.draw(data, options);
}
