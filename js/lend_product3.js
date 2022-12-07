var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "A";
var xMonth = "ตค. - ธค.";
var xMonthDetail = "ประจำไตรมาส 4 (ตค. - ธค. 2565)";
var xThisMonth = "ภาพรวมเดือนธันวาคม 2565";
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
  GetLinePicture();
  TargetAPE();
  Achievement();
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
  dbBBDRH = firebase.firestore().collection("Championship_LendRH");
  dbBBDKickoff = firebase.firestore().collection("Championship_LendZone");
  dbLeagueMember = firebase.firestore().collection("BBD_LeagueMember");
  //CheckScore();
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
  for (i = 1; i < 3; i++) {
    document.getElementById(i).classList.remove('box-menu44');
  }   
    //console.log(x);
  if(x!="") {
    //document.getElementById('loading').style.display='block';
    xClickMenu = x;
    //console.log(xx);
    document.getElementById(xx).classList.add('box-menu44');
    document.getElementById('DisplayWaitting').style.display='block';
    if(x=="A") {
      Achievement();
    } else if(x=="B") { 
      SuccessSeller();
    } else if(x=="C") { 
      ProductMix();
    }
    //loadData()
  }
}


var MTDTarget = 0;
var MTDIssue = 0;
var MTDRatio = 0;
function TargetAPE() {
  str = "";
  dbBBDRH.orderBy('TotalRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      MTDTarget = MTDTarget + parseFloat(doc.data().MTDTarget_3);
      MTDIssue = MTDIssue + parseFloat(doc.data().MTDIssue_3);
    });
    console.log(MTDTarget+"==="+MTDIssue);
    MTDTarget = ((MTDIssue / MTDTarget) * 100).toFixed(2);
    console.log(MTDTarget);
    str += '<div class="bar_background"><div style="padding-top:8px;"><div class="bar_body">'+xMonth+'</div>';
    str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ MTDTarget +'%"></div></div>';
    str += '<div class="bar_body1" style="width:15%;margin-left:10px;">'+ MTDTarget +'%</div></div><div class="clr"></div></div>';
    $("#DisplayTarget").html(str);  
    document.getElementById('DisplayWaittingTarget').style.display='none';
    document.getElementById('DisplayTarget').style.display='block';
  })
}





function Achievement() {
  var str = "";
  var sRH = "";
  str += '<div class="btn-t33" style="margin-top:30px; background-color: #94a9b3;border: solid #94a9b3 1px;">หมวด % CC+FC Achievement<br>'+xMonthDetail+'</div>';
  str += '<div style="margin:10px auto;text-align: center; width:90%;">';
  str += '<div style="width:30%;float: left;text-align: left;"><img src="./img/click-1.png"></div><div style="width:40%;float: left;">&nbsp;</div>';
  str += '<div style="width:30%;float: left;text-align: right;"><img src="./img/click-2.png"></div></div><div class="clr"></div>';
  dbBBDRH.orderBy('Achieve_3','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(sRH=="") { sRH = doc.data().EmpRH; }
      str += '<div class="bar_background"><div style="padding-top:8px;">';
      str += '<div class="bar_body"><div class="btn-t66" onclick="ShowZone(\''+ doc.data().EmpRH +'\')">'+ doc.data().EmpRH +'</div></div>';
      if(doc.data().MTDTarget_3<doc.data().MTDIssue_3) { 
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Achieve_3 +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Achieve_3 +'"></div></div>';
      }
      str += '<div class="bar_body1" onclick="OpenProfile(\''+ doc.id +'\')" style="width:15%;margin-left:10px;">'+ doc.data().Achieve_3 +'</div>';
      str += '</div><div class="clr"></div></div>';
      if(doc.data().EmpRH!=sRH) {
        var str1 = "";
        dbBBDKickoff.where('EmpRH','==', doc.data().EmpRH)
        .orderBy('Achieve_3','desc')
        .get().then((snapshot)=> {
          snapshot.forEach(doc=> {
            //console.log(doc.data().EmpZone);
            str1 += '<div class="bar_background"><div style="padding-top:8px;">';
            str1 += '<div class="bar_body"><div class="btn-t66" onclick="OpenProfile1(\''+ doc.id +'\')">'+ doc.data().EmpZone +'</div></div>';
            str1 += '<div class="progress2" style="float: left;width:60%;margin-top:6px;"><div class="bar2" style="width:'+ doc.data().Achieve_3 +'"></div></div>';
            str1 += '<div class="bar_body1">'+ doc.data().Achieve_3 +'</div>';
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
  str += '<center><div class="btn-t4" style="margin-top:30px;margin-bottom: 14px;">หมวด % CC+FC Achievement<br>'+xThisMonth+'<br>สำนักงานภาคธุรกิจสาขา สังกัด '+RH+'</div>';
  dbBBDKickoff.where('EmpRH','==', RH)
  .orderBy('Achieve_3','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str += '<div class="bar_background" style="width:95%;"><div style="padding-top:8px;">';
      str += '<div class="bar_body" style="width:30%;margin-right:6px;"><div class="btn-t666">'+ doc.data().EmpZone +'</div></div>';
      if(doc.data().MTDTarget_3<doc.data().MTDIssue_3) {
        str += '<div class="progress2" style="float: left;width:46%;margin-top:6px;"><div class="bar4" style="width:'+ doc.data().Achieve_3 +'"></div></div>';
      } else {
        str += '<div class="progress2" style="float: left;width:46%;margin-top:6px;"><div class="bar3" style="width:'+ doc.data().Achieve_3 +'"></div></div>';
      }
      str += '<div class="bar_body">'+ doc.data().Achieve_3 +'</div>';
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
      str += '<div class="btn-t4">ผลงาน -> '+doc.data().Target_Total+' | อันดับ -> '+doc.data().TotalRank+'</div>';

      str += '<div>';
      str += '<div class="btn-t77">1. หมวด CYH Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;">'+doc.data().MTDTarget_3+'</td></tr>';
      str += '<tr><th scope="row">MTD Drawdown</th><td style="text-align:center;">'+doc.data().MTDIssue_3+'</td></tr>';
      str += '<tr><th scope="row">% Achievement</th><td style="text-align:center;">'+doc.data().Achieve_3+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">2. หมวด C2G+BT+CCC Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;">'+doc.data().MTDTarget_3+'</td></tr>';
      str += '<tr><th scope="row">MTD Drawdown</th><td style="text-align:center;">'+doc.data().MTDIssue_3+'</td></tr>';
      str += '<tr><th scope="row">% Achievement</th><td style="text-align:center;">'+doc.data().Achieve_3+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">3. หมวด CC+FC Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;">'+doc.data().MTDTarget_3+'</td></tr>';
      str += '<tr><th scope="row">MTD Card Approved</th><td style="text-align:center;">'+doc.data().MTDIssue_3+'</td></tr>';
      str += '<tr><th scope="row">% Achievement</th><td style="text-align:center;">'+doc.data().Achieve_3+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">4. Total % Weighted</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">35% CYH Achievement</th><td style="text-align:center;">'+doc.data().Target_1+'</td></tr>';
      str += '<tr><th scope="row">35% C2G+BT+CCC Achievement</th><td style="text-align:center;">'+doc.data().Target_2+'</td></tr>';
      str += '<tr><th scope="row">30% CC+FC Achievement</th><td style="text-align:center;">'+doc.data().Target_3+'</td></tr>';
      str += '<tr><th scope="row">% Total</th><td style="text-align:center;">'+doc.data().Target_Total+'</td></tr>';
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

function CloseAll() {
  document.getElementById('id01').style.display='none';
}


function imgError(image) {
    image.onerror = "";
    image.src = "./img/box.jpg";
    return true;
}
