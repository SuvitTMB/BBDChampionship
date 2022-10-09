var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xLeague = "Champion League";
var xClickMenu = "A";
var xRatio = 18;

$(document).ready(function () {
  if(sessionStorage.getItem("EmpID_Kickoff")==null) { location.href = "index.html"; }
  Connect_DB()
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
  dbBBDKickoff = firebase.firestore().collection("Championship_LendZone");
  dbLeagueMember = firebase.firestore().collection("BBD_LeagueMember");
  GetLinePicture();
  loadData();
  //loadUser();
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



function loadData() {
  var i = 0;
  var str = "";
  str += '<table class="table" style="width:95%; margin:10px auto;"><tbody>';
  dbBBDKickoff
  .where('Round1','==', xClickMenu)
  .orderBy('TotalRank','asc')
  //.orderBy('EmpZone','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      const results = LinePictureArr.filter(obj => {return obj.EmpID === doc.data().EmpID;});
      str += '<tr onclick="OpenProfile(\''+ doc.id +'\')" class="LinkProfile">';
      str += '<td class="td-center td-padding" style="width:18%;text-align:center;"><img src="'+results[0].EmpPicture+'" class="profile-team" onerror="javascript:imgError(this)" style="margin-top:14px;"></td>';
      str += '<td class="td-padding" style="width:83%;padding-top:5px;"><font color="#0056ff"><b>สนข. '+doc.data().EmpZone+' ('+doc.data().EmpRH+')</b></font>';
      str += '<font color="#002d63"><br><b>คุณ'+doc.data().EmpName+'</b></font><br><b>อันดับที่ : '+doc.data().TotalRank+' | ผลงาน : '+doc.data().Target_Total+'</b>';
      str += '<div class="progress2" style="float: left;width:90%;margin-top:3px;"><div class="bar2" style="width:'+ doc.data().Target_Total +'"></div></div>';
      str += '</td>';

      str += '<td class="td-center td-padding" onclick="OpenProfile(\''+ doc.id +'\')"><div class="btn-t1" style="width:40px;margin-top:20px;font-size:9px;">View</div></td>';
      str += '</tr>';
      i++;
    }); 
    str += '</tbody></table>';
    $("#DisplayTeam").html(str);  
    $("#DisplaySum").html("<div class='btn-t33' style='background-color: #94a9b3;border: solid #94a9b3 1px;margin-top:15px;'>ข้อมูลการแบ่งสายการแข่งขัน<br>สาย  "+ xClickMenu +" จำนวน "+ i +" สำนักงานเขตธุรกิจสาขา</div>");  
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
  for (i = 1; i < 4; i++) {
    document.getElementById(i).classList.remove('box-menu2');
  }   
  if(x!="") {
    xClickMenu = x;
    //console.log(xx+"==="+x);
    document.getElementById(xx).classList.add('box-menu2');
    loadData()
  }
}



function OpenTeam(x) {
  xClickMenu = x;
  loadData()
  //location.href = 'team.html?gid='+x;
}



function OpenProfile(uid) {
  var str = "";
  console.log(uid);
  dbBBDKickoff.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      const results = LinePictureArr.filter(obj => {return obj.EmpID === doc.data().EmpID;});
      str += '<center>';
      str += '<div><img src="'+results[0].EmpPicture+'" class="add-profile" style="margin:30px auto 0px auto;" onerror="javascript:imgError(this)"></div>';
      str += '<div class="text-1">'+doc.data().EmpName+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>เขตธุรกิจสาขา-'+doc.data().EmpZone+' ('+doc.data().EmpRH+')</b><br>สาย <b>'+ doc.data().Round1+ '</b></div>';
      str += '<div class="btn-t4">ผลงาน -> '+doc.data().Target_Total+' | อันดับ -> '+doc.data().TotalRank+'</div>';

      str += '<div>';
      str += '<div class="btn-t77">1. หมวด CYH Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;">'+doc.data().MTDTarget_1+'</td></tr>';
      str += '<tr><th scope="row">MTD DD</th><td style="text-align:center;">'+doc.data().MTDIssue_1+'</td></tr>';
      str += '<tr><th scope="row">% Achievement</th><td style="text-align:center;">'+doc.data().Achieve_1+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">2. หมวด C2G+BT+CCC Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;">'+doc.data().MTDTarget_2+'</td></tr>';
      str += '<tr><th scope="row">MTD DD</th><td style="text-align:center;">'+doc.data().MTDIssue_2+'</td></tr>';
      str += '<tr><th scope="row">% Achievement</th><td style="text-align:center;">'+doc.data().Achieve_2+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">3. หมวด CC+FC Achievement</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">MTD Target</th><td style="text-align:center;">'+doc.data().MTDTarget_3+'</td></tr>';
      str += '<tr><th scope="row">MTD DD</th><td style="text-align:center;">'+doc.data().MTDIssue_3+'</td></tr>';
      str += '<tr><th scope="row">% Achievement</th><td style="text-align:center;">'+doc.data().Achieve_3+'</td></tr>';
      str += '</tbody>';
      str += '</table>';

      str += '<div class="btn-t77">4. Total % Weighted</div>';
      str += '<table class="table table-bordered table-hover" style="width:90%; max-width: 400px; margin:auto;">';
      str += '<thead class="thead-dark"><tr><th scope="col" class="col_td">รายการ</th><th scope="col" class="col_td">รายละเอียด</th></thead>';
      str += '<tbody>';
      str += '<tr><th scope="row">35% CYH Achievement</th><td style="text-align:center;">'+doc.data().Target_1+'</td></tr>';
      str += '<tr><th scope="row">35% C2G+BT+CCC Achievement</th><td style="text-align:center;">'+doc.data().Target_2+'</td></tr>';
      str += '<tr><th scope="row">35% CC+FC Achievement</th><td style="text-align:center;">'+doc.data().Target_3+'</td></tr>';
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


function imgError(image) {
    image.onerror = "";
    image.src = "./img/box.jpg";
    return true;
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
  //document.getElementById('id02').style.display='none';
}
