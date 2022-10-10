//var DoneSurvey = 0;
//var ShowScore = 0;
var xMonth = "ตค. - ธค.";
var xMonthDetail = "ประจำไตรมาส 3 (ตค. - ธค. 2565)";
var xThisMonth = "ภาพรวมเดือนตุลาคม 2565";
var A1,A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2;


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
      dayMonth = "11/01/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
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
  dbLeagueMember = firebase.firestore().collection("BBD_LeagueMember");
  GetLinePicture();
  //CheckRH();
  //CheckScore();
  CheckScore();
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


/*
function CheckScore() {
  var i = 0;
  dbBBDKickoff
  .orderBy('NewRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      if(i==0) {
        id0 = doc.id;
        n0 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a0 = parseFloat(doc.data().Total_100);
      } else if(i==1) { 
        id1 = doc.id;
        n1 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a1 = parseFloat(doc.data().Total_100);
      } else if(i==2) { 
        id2 = doc.id;
        n2 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a2 = parseFloat(doc.data().Total_100);
      } else if(i==3) { 
        id3 = doc.id;
        n3 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a3 = parseFloat(doc.data().Total_100);
      } else if(i==4) { 
        id4 = doc.id;
        n4 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a4 = parseFloat(doc.data().Total_100);
      } else if(i==5) { 
        id5 = doc.id;
        n5 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a5 = parseFloat(doc.data().Total_100);
      } else if(i==6) { 
        id6 = doc.id;
        n6 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a6 = parseFloat(doc.data().Total_100);
      } else if(i==7) { 
        id7 = doc.id;
        n7 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a7 = parseFloat(doc.data().Total_100);
      } else if(i==8) { 
        id8 = doc.id;
        n8 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a8 = parseFloat(doc.data().Total_100);
      } else if(i==9) { 
        id9 = doc.id;
        n9 = doc.data().Round1+"-"+doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a9 = parseFloat(doc.data().Total_100);
      }
      i++;
    });
    NewSet();
  });
}


function NewSet() {
  str = '';
  str += "<div class='bar' onclick='OpenProfile(\""+ id0 +"\")'><div class='bar-info rsoc7' data-total="+ a0 +">"+ n0 +"";
  str += "<span class='percent' style='float: right;'>"+ a0 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id1 +"\")'><div class='bar-info rsoc2' data-total="+ a1 +">"+ n1 +"";
  str += "<span class='percent' style='float: right;'>"+ a1 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id2 +"\")'><div class='bar-info rsoc3' data-total="+ a2 +">"+ n2 +"";
  str += "<span class='percent' style='float: right;'>"+ a2 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id3 +"\")'><div class='bar-info rsoc4' data-total="+ a3 +">"+ n3 +"";
  str += "<span class='percent' style='float: right;'>"+ a3 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id4 +"\")'><div class='bar-info rsoc5' data-total="+ a4 +">"+ n4 +"";
  str += "<span class='percent' style='float: right;'>"+ a4 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id5 +"\")'><div class='bar-info rsoc6' data-total="+ a5 +">"+ n5 +"";
  str += "<span class='percent' style='float: right;'>"+ a5 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id6 +"\")'><div class='bar-info rsoc7' data-total="+ a6 +">"+ n6 +"";
  str += "<span class='percent' style='float: right;'>"+ a6 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id7 +"\")'><div class='bar-info rsoc8' data-total="+ a7 +">"+ n7 +"";
  str += "<span class='percent' style='float: right;'>"+ a7 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id8 +"\")'><div class='bar-info rsoc9' data-total="+ a8 +">"+ n8 +"";
  str += "<span class='percent' style='float: right;'>"+ a8 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id9 +"\")'><div class='bar-info rsoc10' data-total="+ a9 +">"+ n9 +"";
  str += "<span class='percent' style='float: right;'>"+ a9 +"</span></div></div>";  
  $('#DisplayZone').html(str);

  function skillSet() {
    $('.bar-info').each(function() {
      total = $(this).data("total");
      $(this).css("width", total + "%");
    });
    
    $('.percent').each(function() {
      var $this = $(this);
      $({
        Counter: 10
      }).animate({
        Counter: $this.text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter) + "%");
        }
      });
    });
  };
  setTimeout(skillSet, 1000);
}


function OpenProfile(uid) {
  var str = "";
  dbBBDKickoff.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      const results = LinePictureArr.filter(obj => {return obj.EmpID === doc.data().EmpID;});
      str += '<center>';
      str += '<div><img src="'+results[0].EmpPicture+'" class="add-profile" style="margin:40px auto 0px auto;" onerror="javascript:imgError(this)"></div>';
      str += '<div class="text-1">'+doc.data().EmpName+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>สำนักงานเขตธุรกิจสาขา-'+doc.data().EmpZone+' ('+doc.data().EmpRH+')</b><br>สาย <b>'+ doc.data().Round1+ '</b></div>';
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
    document.getElementById("id02").style.display = "block";
  });
}
*/

/*
function CheckRH() {
  //var CalRatio = 15;
  var i = 0;
  dbBBDRH
  //.orderBy('TotalPoint','desc')
  .orderBy('TotalRank','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //console.log(doc.data().EmpZone+" === "+doc.data().TotalPoint);
      if(i==0) {
        iid0 = doc.id;
        nn0 = doc.data().EmpRH;
        aa0 = doc.data().Total_100+"%";
      } else if(i==1) { 
        iid1 = doc.id;
        nn1 = doc.data().EmpRH;
        aa1 = doc.data().Total_100;
      } else if(i==2) { 
        iid2 = doc.id;
        nn2 = doc.data().EmpRH;
        aa2 = doc.data().Total_100;
      } else if(i==3) { 
        iid3 = doc.id;
        nn3 = doc.data().EmpRH;
        aa3 = doc.data().Total_100;
      } else if(i==4) { 
        iid4 = doc.id;
        nn4 = doc.data().EmpRH;
        aa4 = doc.data().Total_100;
      } else if(i==5) { 
        iid5 = doc.id;
        nn5 = doc.data().EmpRH;
        aa5 = doc.data().Total_100;
      }
      i++;
    });
    SetRH();
  });
}

function SetRH() {
  str = '';
  str += "<div class='bar' onclick='OpenRH(\""+ iid0 +"\")'><div class='bar-info rsoc11' data-total="+ aa0 +">"+ nn0 +"";
  str += "<span class='percent' style='float: right;'>"+ aa0 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid1 +"\")'><div class='bar-info rsoc12' data-total="+ aa1 +">"+ nn1 +"";
  str += "<span class='percent' style='float: right;'>"+ aa1 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid2 +"\")'><div class='bar-info rsoc13' data-total="+ aa2 +">"+ nn2 +"";
  str += "<span class='percent' style='float: right;'>"+ aa2 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid3 +"\")'><div class='bar-info rsoc14' data-total="+ aa3 +">"+ nn3 +"";
  str += "<span class='percent' style='float: right;'>"+ aa3 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid4 +"\")'><div class='bar-info rsoc15' data-total="+ aa4 +">"+ nn4 +"";
  str += "<span class='percent' style='float: right;'>"+ aa4 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenRH(\""+ iid5 +"\")'><div class='bar-info rsoc16' data-total="+ aa5 +">"+ nn5 +"";
  str += "<span class='percent' style='float: right;'>"+ aa5 +"</span></div></div>";  
  $('#DisplayRH').html(str);
}


function OpenRH(uid) {
  var str = "";
  //console.log(uid);
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
    document.getElementById("id02").style.display = "block";
  });
}
*/



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
  //document.getElementById('id02').style.display='none';
  //document.getElementById('id03').style.display='none';
}

/*
function CloseVDO() {
  var video = document.querySelector("#video");
  video.pause();
  video.currentTime = 0;
  document.getElementById('id01').style.display='none';
}
*/


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
