

$(document).ready(function () {
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
  dbBALife_log = firebase.firestore().collection("BBD_Log");
  loadLog();
}



function loadLog(){
  var i = 0;
  var sAchievement = 0;
  count = 0;
  dataSet = "";
  dataSrc = [];
  dbBALife_log.orderBy('LogTimeStamp','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      i = (i+1);
      dataSet = [doc.data().EmpID, doc.data().EmpName, doc.data().LineName ,doc.data().ResultLogin, doc.data().LogDateTime, doc.data().LogTimeStamp, "<div class='btn-t1' id="+i+" style='margin-top:0px; padding:2px 15px; font-size: 10px; font-weight: 600;'>ลบข้อมูล</div>", doc.id, i];
      dataSrc.push(dataSet);
      count++;
    }); 
    dTable=$('#ex-table').DataTable({
      "bDestroy": true,    
      data: dataSrc,
      columns: [
        { title: "EmpID", className: "txt-center" },
        { title: "EmpName" },
        { title: "LineName" },
        { title: "รายการ" },
        { title: "LogDateTime" },
        { title: "LogTimeStamp", className: "txt-center"  },
        { title: "รายการ", className: "txt-center" }
        ],
        dom: 'lfrtipB',
        buttons: [
            'copy', 'excelFlash', 'excel', 'pdf', 'print'
        ],
          lengthMenu: [[50, 100, -1], [50, 100, "All"]],

        columnDefs: [ { type: 'num-fmt', 'targets': [5] } ],
        order: [[ 5, 'desc']]
      });   
      $('#ex-table tbody').on( 'click', 'tr', function () {
        var data = dTable.row( $(this).parents('tr') ).data();
        if(count!=0) {
            ClickID(dTable.row( this ).data()[7],dTable.row( this ).data()[8]);
        }
      });
  });
  $('#ex-table').DataTable().destroy();
  $("#ex-table tbody").remove();
}


var Eid = "";
function ClickID(x,id) {
  var sid = id;
  //alert(x+"==="+id);
  var str = "";
  dbBALife_log.where(firebase.firestore.FieldPath.documentId(), "==", x)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      Eid = doc.id;
      str += '<div><div style="padding:10px;color:#000000;font-size:14px;font-weight:600;">log การเข้าใช้ระบบงาน</div>';
      str += '<div style="padding:8px; font-weight: 600; color:#0056ff;">['+ doc.data().EmpID +'] <br>'+ doc.data().LogDateTime +'</div>';
      str += '<div class="btn-t4" onclick="DeleteRead(\''+ sid +'\')" style="width:140px;">ลบรายการ</div><div class="clr"></div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="width:140px;">ปิดหน้าต่าง</div>';
      str += '</div><dic class="clr" style="height:30px;"></div>';
    });
      $("#DisplayByItem").html(str);
      str = "";
      document.getElementById("id01").style.display = "block";
  });
}


function DeleteRead(id) {
  document.getElementById(id).style.display = "none";
  //alert("Cancel "+id);
  dbBALife_log.doc(Eid).delete();
  Eid = "";
  document.getElementById("id01").style.display = "none";
}


function UpdateData() {
  loadLog();
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}


function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

var MemberINClass = 0;
function DeleteDataLog() {
  MemberINClass = 0;
  dbBALife_log.get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      dbBALife_log.doc(doc.id).delete();
      MemberINClass = MemberINClass+1;
      console.log(MemberINClass+". ");
    });
    alert("Delete = "+MemberINClass);
    loadLog();
  });

}

