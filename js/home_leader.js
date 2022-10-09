var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xLeague = "Champion League";
var xClickMenu = "A";
var xRatio = 18;


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
  dbLeagueMember = firebase.firestore().collection("BBD_LeagueMember");
  GetLinePicture();
  CheckScore();
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


function CheckScore() {
  console.log(xClickMenu);
  var i = 0;
  dbBBDKickoff
  //.where('League','==', xLeague)
  .where('Round1','==', xClickMenu)
  .orderBy('TotalRank','asc')
  .orderBy('Total_100','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      //console.log(doc.data().EmpZone+" === "+doc.data().TotalPoint);
      if(i==0) {
        id0 = doc.id;
        n0 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a0 = parseFloat(doc.data().Total_100);
      } else if(i==1) { 
        id1 = doc.id;
        n1 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a1 = parseFloat(doc.data().Total_100).toFixed(2);
      } else if(i==2) { 
        id2 = doc.id;
        n2 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a2 = parseFloat(doc.data().Total_100).toFixed(2);

      } else if(i==3) { 
        id3 = doc.id;
        n3 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a3 = parseFloat(doc.data().Total_100).toFixed(2);
      } else if(i==4) { 
        id4 = doc.id;
        n4 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a4 = parseFloat(doc.data().Total_100).toFixed(2);
      } else if(i==5) { 
        id5 = doc.id;
        n5 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a5 = parseFloat(doc.data().Total_100).toFixed(2);
      } else if(i==6) { 
        id6 = doc.id;
        n6 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a6 = parseFloat(doc.data().Total_100).toFixed(2);
      } else if(i==7) { 
        id7 = doc.id;
        n7 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a7 = parseFloat(doc.data().Total_100).toFixed(2);
      } else if(i==8) { 
        id8 = doc.id;
        n8 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a8 = parseFloat(doc.data().Total_100).toFixed(2);
      } else if(i==9) { 
        id9 = doc.id;
        n9 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a9 = parseFloat(doc.data().Total_100).toFixed(2);
      } else if(i==10) { 
        id10 = doc.id;
        n10 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a10 = parseFloat(doc.data().Total_100).toFixed(2);
      } else if(i==11 && xClickMenu!="C") { 
        id11 = doc.id;
        n11 = doc.data().EmpZone+" ("+doc.data().EmpRH+")";
        a11 = parseFloat(doc.data().Total_100).toFixed(2);
      }
      i++;
    });
    NewSet();
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
    //document.getElementById('loading').style.display='block';
    xClickMenu = x;
    //console.log(xx);
    document.getElementById(xx).classList.add('box-menu2');
    CheckScore()
  }
}


function NewSet() {
  str = '';
  str += '<div style="margin:10px auto;text-align: center; width:95%;">';
  str += '<div style="width:30%;float: left;text-align: left;"><img src="./img/click-1.png"></div><div style="width:60%;float: left;">&nbsp;</div>';
  str += '</div><div class="clr" style="height:10px;"></div>';

  str += "<div class='bar' onclick='OpenProfile(\""+ id0 +"\")'><div class='bar-info rsoc6' data-total="+ a0 +">"+ n0 +"";
  str += "<span class='percent' style='float: right;'>"+ a0 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id1 +"\")'><div class='bar-info rsoc4' data-total="+ a1 +">"+ n1 +"";
  str += "<span class='percent' style='float: right;'>"+ a1 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id2 +"\")'><div class='bar-info rsoc3' data-total="+ a2 +">"+ n2 +"";
  str += "<span class='percent' style='float: right;'>"+ a2 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id3 +"\")'><div class='bar-info rsoc5' data-total="+ a3 +">"+ n3 +"";
  str += "<span class='percent' style='float: right;'>"+ a3 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id4 +"\")'><div class='bar-info rsoc2' data-total="+ a4 +">"+ n4 +"";
  str += "<span class='percent' style='float: right;'>"+ a4 +"</span></div></div>";  

  str += "<div class='bar' onclick='OpenProfile(\""+ id5 +"\")'><div class='bar-info rsoc7' data-total="+ a5 +">"+ n5 +"";
  str += "<span class='percent' style='float: right;'>"+ a5 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id6 +"\")'><div class='bar-info rsoc8' data-total="+ a6 +">"+ n6 +"";
  str += "<span class='percent' style='float: right;'>"+ a6 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id7 +"\")'><div class='bar-info rsoc9' data-total="+ a7 +">"+ n7 +"";
  str += "<span class='percent' style='float: right;'>"+ a7 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id8 +"\")'><div class='bar-info rsoc10' data-total="+ a8 +">"+ n8 +"";
  str += "<span class='percent' style='float: right;'>"+ a8 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id9 +"\")'><div class='bar-info rsoc11' data-total="+ a9 +">"+ n9 +"";
  str += "<span class='percent' style='float: right;'>"+ a9 +"</span></div></div>";  
  str += "<div class='bar' onclick='OpenProfile(\""+ id10 +"\")'><div class='bar-info rsoc12' data-total="+ a10 +">"+ n10 +"";
  str += "<span class='percent' style='float: right;'>"+ a10 +"</span></div></div>";  
  if(xClickMenu!="C") {
    str += "<div class='bar' onclick='OpenProfile(\""+ id11 +"\")'><div class='bar-info rsoc13' data-total="+ a11 +">"+ n11 +"";
    str += "<span class='percent' style='float: right;'>"+ a11 +"</span></div></div>";  
  }
  $('#Display').html(str);

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
  console.log(uid);
  dbBBDKickoff.where(firebase.firestore.FieldPath.documentId(), "==", uid)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      const results = LinePictureArr.filter(obj => {return obj.EmpID === doc.data().EmpID;});
      str += '<center>';
      str += '<div><img src="'+results[0].EmpPicture+'" class="add-profile" style="margin:30px auto 0px auto;" onerror="javascript:imgError(this)"></div>';
      str += '<div class="text-1">'+doc.data().EmpName+'</div>';
      str += '<div class="text-2" style="margin-top:0px;"><b>เขตธุรกิจสาขา-'+doc.data().EmpZone+' ('+doc.data().EmpRH+')</b><br>สาย <b>'+ doc.data().Round1+ '</b></div>';
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
}
