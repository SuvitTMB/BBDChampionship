var xMonth = "ตค. - ธค.";
var xMonthDetail = "ประจำไตรมาส 4 (ตค. - ธค. 2565)";
var xThisMonth = "ภาพรวมเดือนธันวาคม 2565";
var _0x5b6515=_0x3a7b;function _0x3a7b(_0x48f2a6,_0x142fd4){var _0x4d3c17=_0x4d3c();return _0x3a7b=function(_0x3a7b39,_0x2977b8){_0x3a7b39=_0x3a7b39-0x103;var _0x55b9b9=_0x4d3c17[_0x3a7b39];return _0x55b9b9;},_0x3a7b(_0x48f2a6,_0x142fd4);}(function(_0x44cbc5,_0x5c728d){var _0x23fa46=_0x3a7b,_0x3d1411=_0x44cbc5();while(!![]){try{var _0x3b9a3c=parseInt(_0x23fa46(0x133))/0x1*(-parseInt(_0x23fa46(0x13f))/0x2)+parseInt(_0x23fa46(0x15c))/0x3*(-parseInt(_0x23fa46(0x10d))/0x4)+parseInt(_0x23fa46(0x136))/0x5*(parseInt(_0x23fa46(0x132))/0x6)+parseInt(_0x23fa46(0x167))/0x7+parseInt(_0x23fa46(0x142))/0x8*(-parseInt(_0x23fa46(0x10b))/0x9)+-parseInt(_0x23fa46(0x11d))/0xa+parseInt(_0x23fa46(0x14b))/0xb;if(_0x3b9a3c===_0x5c728d)break;else _0x3d1411['push'](_0x3d1411['shift']());}catch(_0x176015){_0x3d1411['push'](_0x3d1411['shift']());}}}(_0x4d3c,0x7f0b6));var dateString=new Date()[_0x5b6515(0x140)](_0x5b6515(0x103),{'timeZone':_0x5b6515(0x15f)}),xClickMenu='A',Zone1='',Zone2='',Zone3='',Zone4='',Zone5='',Zone6='',A1=0x0,A2=0x0,A3=0x0,B1=0x0,B2=0x0,B3=0x0,C1=0x0,C2=0x0,C3=0x0,D1=0x0,D2=0x0,D3=0x0,E1=0x0,E2=0x0,E3=0x0,F1=0x0,F2=0x0,F3=0x0;$(document)[_0x5b6515(0x129)](function(){var _0x400713=_0x5b6515;sessionStorage[_0x400713(0x11c)](_0x400713(0x158))==null&&(location[_0x400713(0x150)]=_0x400713(0x12b)),Connect_DB();});function Connect_DB(){var _0x20ba8f=_0x5b6515,_0x4e17f5={'apiKey':_0x20ba8f(0x160),'authDomain':'retailproject-6f4fc.firebaseapp.com','projectId':_0x20ba8f(0x125),'databaseURL':'https://file-upload-6f4fc.firebaseio.com','storageBucket':_0x20ba8f(0x10e),'messagingSenderId':_0x20ba8f(0x11f),'appId':_0x20ba8f(0x139),'measurementId':'G-9SKTRHHSW9'};firebase[_0x20ba8f(0x164)](_0x4e17f5),dbBBDKickoff=firebase[_0x20ba8f(0x157)]()[_0x20ba8f(0x154)](_0x20ba8f(0x163)),dbBBDRH=firebase[_0x20ba8f(0x157)]()[_0x20ba8f(0x154)](_0x20ba8f(0x166)),dbLeagueMember=firebase[_0x20ba8f(0x157)]()[_0x20ba8f(0x154)](_0x20ba8f(0x13b)),GetLinePicture(),Achievement();}function GetLinePicture(){var _0x40478d=_0x5b6515,_0x29afb3=0x0,_0x12e619='';LineEmpIDArr=[],LinePictureArr=[],dbLeagueMember['orderBy']('EmpID','asc')[_0x40478d(0x117)]()[_0x40478d(0x10a)](_0x3bd221=>{var _0x4930e8=_0x40478d;_0x3bd221[_0x4930e8(0x13c)](_0xbd9672=>{var _0xef46f3=_0x4930e8;LineEmpIDArr[_0xef46f3(0x12a)](_0xbd9672[_0xef46f3(0x13a)]()[_0xef46f3(0x119)]),LinePictureArr[_0xef46f3(0x12a)]({'EmpID':_0xbd9672[_0xef46f3(0x13a)]()[_0xef46f3(0x119)],'EmpName':_0xbd9672['data']()['LineName'],'EmpPicture':_0xbd9672[_0xef46f3(0x13a)]()[_0xef46f3(0x12e)],'EmpRef':_0xbd9672['id']});});});}function Achievement(){var _0x4547c5=_0x5b6515,_0x5aa5a6='',_0x41978b='';_0x5aa5a6+='<div\x20class=\x22btn-t33\x22\x20style=\x22margin-top:30px;\x20background-color:\x20#94a9b3;border:\x20solid\x20#94a9b3\x201px;\x22>ผลงานสะสม\x20RH\x20Championship<br>'+xMonthDetail+_0x4547c5(0x173),_0x5aa5a6+=_0x4547c5(0x143),_0x5aa5a6+=_0x4547c5(0x131),_0x5aa5a6+=_0x4547c5(0x159),dbBBDRH['orderBy'](_0x4547c5(0x153),_0x4547c5(0x138))['get']()[_0x4547c5(0x10a)](_0x5534c2=>{var _0x42bc64=_0x4547c5;_0x5534c2[_0x42bc64(0x13c)](_0x4a3b57=>{var _0x446336=_0x42bc64;_0x41978b==''&&(_0x41978b=_0x4a3b57[_0x446336(0x13a)]()[_0x446336(0x134)]);_0x5aa5a6+='<div\x20class=\x22bar_background\x22><div\x20style=\x22padding-top:8px;\x22>',_0x5aa5a6+=_0x446336(0x144)+_0x4a3b57[_0x446336(0x13a)]()[_0x446336(0x134)]+_0x446336(0x12d)+_0x4a3b57[_0x446336(0x13a)]()[_0x446336(0x134)]+_0x446336(0x123);_0x4a3b57[_0x446336(0x13a)]()[_0x446336(0x11a)]<_0x4a3b57['data']()['MTDIssue_1']?_0x5aa5a6+=_0x446336(0x109)+_0x4a3b57['data']()[_0x446336(0x11b)]+_0x446336(0x118):_0x5aa5a6+=_0x446336(0x130)+_0x4a3b57[_0x446336(0x13a)]()[_0x446336(0x11b)]+_0x446336(0x118);_0x5aa5a6+='<div\x20class=\x22bar_body1\x22\x20onclick=\x22OpenProfile(\x27'+_0x4a3b57['id']+_0x446336(0x15b)+_0x4a3b57[_0x446336(0x13a)]()[_0x446336(0x11b)]+_0x446336(0x173),_0x5aa5a6+=_0x446336(0x16c);if(_0x4a3b57[_0x446336(0x13a)]()[_0x446336(0x134)]!=_0x41978b){var _0x3bae79='';dbBBDKickoff['where'](_0x446336(0x134),'==',_0x4a3b57[_0x446336(0x13a)]()[_0x446336(0x134)])[_0x446336(0x141)](_0x446336(0x156),_0x446336(0x138))[_0x446336(0x117)]()[_0x446336(0x10a)](_0x294229=>{var _0x1b1f47=_0x446336;_0x294229[_0x1b1f47(0x13c)](_0x45ea4b=>{var _0x36f1bc=_0x1b1f47;_0x3bae79+=_0x36f1bc(0x16d),_0x3bae79+=_0x36f1bc(0x121)+_0x45ea4b['id']+_0x36f1bc(0x12d)+_0x45ea4b[_0x36f1bc(0x13a)]()[_0x36f1bc(0x156)]+_0x36f1bc(0x123),_0x3bae79+=_0x36f1bc(0x130)+_0x45ea4b[_0x36f1bc(0x13a)]()[_0x36f1bc(0x11b)]+_0x36f1bc(0x118),_0x3bae79+=_0x36f1bc(0x10c)+_0x45ea4b['data']()[_0x36f1bc(0x107)]+_0x36f1bc(0x173),_0x3bae79+=_0x36f1bc(0x16c);}),_0x5aa5a6+=''+_0x3bae79,_0x41978b=_0x4a3b57[_0x1b1f47(0x13a)]()[_0x1b1f47(0x134)];});}}),$('#DisplayReport')[_0x42bc64(0x149)](_0x5aa5a6),document[_0x42bc64(0x13e)](_0x42bc64(0x11e))[_0x42bc64(0x14e)][_0x42bc64(0x128)]='none',document['getElementById'](_0x42bc64(0x148))[_0x42bc64(0x14e)][_0x42bc64(0x128)]=_0x42bc64(0x14d);});}function ShowZone(_0x53b3a7){var _0x3caa76=_0x5b6515,_0x287bfd='';_0x287bfd+=_0x3caa76(0x120)+xThisMonth+'<br>ผลงานรวมของ\x20ZONE\x20สังกัด\x20->\x20'+_0x53b3a7+_0x3caa76(0x173),dbBBDKickoff[_0x3caa76(0x12c)](_0x3caa76(0x134),'==',_0x53b3a7)[_0x3caa76(0x141)](_0x3caa76(0x127),_0x3caa76(0x138))['get']()[_0x3caa76(0x10a)](_0x56f41c=>{var _0x114dd6=_0x3caa76;_0x56f41c[_0x114dd6(0x13c)](_0x22721e=>{var _0x1c17a5=_0x114dd6;_0x287bfd+=_0x1c17a5(0x147),_0x287bfd+=_0x1c17a5(0x16b)+_0x22721e[_0x1c17a5(0x13a)]()['EmpZone']+_0x1c17a5(0x123),_0x22721e[_0x1c17a5(0x13a)]()['MTDTarget_1']<_0x22721e[_0x1c17a5(0x13a)]()[_0x1c17a5(0x171)]?_0x287bfd+='<div\x20class=\x22progress2\x22\x20style=\x22float:\x20left;width:46%;margin-top:6px;\x22><div\x20class=\x22bar4\x22\x20style=\x22width:'+_0x22721e[_0x1c17a5(0x13a)]()[_0x1c17a5(0x11b)]+_0x1c17a5(0x118):_0x287bfd+=_0x1c17a5(0x15d)+_0x22721e[_0x1c17a5(0x13a)]()[_0x1c17a5(0x11b)]+_0x1c17a5(0x118),_0x287bfd+=_0x1c17a5(0x162)+_0x22721e[_0x1c17a5(0x13a)]()[_0x1c17a5(0x11b)]+_0x1c17a5(0x173),_0x287bfd+='</div><div\x20class=\x22clr\x22></div></div>';}),_0x287bfd+=_0x114dd6(0x106),_0x287bfd+=_0x114dd6(0x13d),$(_0x114dd6(0x170))[_0x114dd6(0x149)](_0x287bfd),document['getElementById'](_0x114dd6(0x152))[_0x114dd6(0x14e)][_0x114dd6(0x128)]=_0x114dd6(0x14d);});}function OpenProfile(_0x239e9a){var _0x9876ff=_0x5b6515,_0x5139ba='';dbBBDRH['where'](firebase[_0x9876ff(0x157)]['FieldPath']['documentId'](),'==',_0x239e9a)['get']()[_0x9876ff(0x10a)](_0x264065=>{var _0x57fba3=_0x9876ff;_0x264065[_0x57fba3(0x13c)](_0x612146=>{var _0x5b04cc=_0x57fba3;const _0x3a3c3e=LinePictureArr[_0x5b04cc(0x135)](_0xd23bc5=>{var _0x394566=_0x5b04cc;return _0xd23bc5['EmpID']===_0x612146[_0x394566(0x13a)]()[_0x394566(0x119)];});_0x5139ba+=_0x5b04cc(0x12f),_0x5139ba+='<div><img\x20src=\x22'+_0x3a3c3e[0x0][_0x5b04cc(0x114)]+_0x5b04cc(0x161),_0x5139ba+='<div\x20class=\x22text-1\x22>'+_0x612146['data']()['EmpName']+_0x5b04cc(0x173),_0x5139ba+='<div\x20class=\x22text-2\x22\x20style=\x22margin-top:0px;\x22><b>'+_0x612146['data']()[_0x5b04cc(0x112)]+_0x5b04cc(0x113)+_0x612146[_0x5b04cc(0x13a)]()[_0x5b04cc(0x134)]+_0x5b04cc(0x110),_0x5139ba+=_0x5b04cc(0x165)+_0x612146['data']()[_0x5b04cc(0x11b)]+_0x5b04cc(0x122)+_0x612146[_0x5b04cc(0x13a)]()[_0x5b04cc(0x153)]+_0x5b04cc(0x173),_0x5139ba+=_0x5b04cc(0x15e),_0x5139ba+=_0x5b04cc(0x116),_0x5139ba+=_0x5b04cc(0x104),_0x5139ba+=_0x5b04cc(0x151),_0x5139ba+='<tbody>',_0x5139ba+=_0x5b04cc(0x146)+_0x612146[_0x5b04cc(0x13a)]()['MTDTarget_1']+_0x5b04cc(0x137),_0x5139ba+='<tr><th\x20scope=\x22row\x22>MTD\x20Issue</th><td\x20style=\x22text-align:center;\x22>'+_0x612146[_0x5b04cc(0x13a)]()[_0x5b04cc(0x171)]+_0x5b04cc(0x137),_0x5139ba+=_0x5b04cc(0x111)+_0x612146[_0x5b04cc(0x13a)]()[_0x5b04cc(0x107)]+_0x5b04cc(0x137),_0x5139ba+=_0x5b04cc(0x169),_0x5139ba+=_0x5b04cc(0x15a),_0x5139ba+=_0x5b04cc(0x108),_0x5139ba+=_0x5b04cc(0x104),_0x5139ba+=_0x5b04cc(0x151),_0x5139ba+=_0x5b04cc(0x14f),_0x5139ba+=_0x5b04cc(0x14a)+_0x612146[_0x5b04cc(0x13a)]()[_0x5b04cc(0x10f)]+_0x5b04cc(0x137),_0x5139ba+='<tr><th\x20scope=\x22row\x22>Product\x20Focus</th><td\x20style=\x22text-align:center;\x22>'+_0x612146['data']()[_0x5b04cc(0x16e)]+'</td></tr>',_0x5139ba+=_0x5b04cc(0x172)+_0x612146[_0x5b04cc(0x13a)]()['ProductAchieve_2']+_0x5b04cc(0x137),_0x5139ba+='</tbody>',_0x5139ba+=_0x5b04cc(0x15a),_0x5139ba+=_0x5b04cc(0x16f),_0x5139ba+=_0x5b04cc(0x104),_0x5139ba+=_0x5b04cc(0x151),_0x5139ba+='<tbody>',_0x5139ba+=_0x5b04cc(0x105)+_0x612146[_0x5b04cc(0x13a)]()[_0x5b04cc(0x124)]+_0x5b04cc(0x137),_0x5139ba+=_0x5b04cc(0x126)+_0x612146[_0x5b04cc(0x13a)]()[_0x5b04cc(0x14c)]+_0x5b04cc(0x137),_0x5139ba+=_0x5b04cc(0x16a)+_0x612146[_0x5b04cc(0x13a)]()['Total_100']+_0x5b04cc(0x137),_0x5139ba+='<tr><th\x20scope=\x22row\x22>Rank</th><td\x20style=\x22text-align:center;\x22>'+_0x612146[_0x5b04cc(0x13a)]()[_0x5b04cc(0x153)]+_0x5b04cc(0x137),_0x5139ba+=_0x5b04cc(0x169),_0x5139ba+=_0x5b04cc(0x15a),_0x5139ba+=_0x5b04cc(0x173),_0x5139ba+=_0x5b04cc(0x106),_0x5139ba+=_0x5b04cc(0x155),_0x5139ba+='</center>';}),$(_0x57fba3(0x170))[_0x57fba3(0x149)](_0x5139ba),document[_0x57fba3(0x13e)](_0x57fba3(0x152))[_0x57fba3(0x14e)]['display']=_0x57fba3(0x14d);});}function imgError(_0x38eba9){var _0x1b7aa6=_0x5b6515;return _0x38eba9[_0x1b7aa6(0x115)]='',_0x38eba9[_0x1b7aa6(0x168)]=_0x1b7aa6(0x145),!![];}function _0x4d3c(){var _0x3373a9=['initializeApp','<div\x20class=\x22btn-t4\x22>ผลงาน\x20->\x20','Championship_RH','2580291telgQB','src','</tbody>','<tr><th\x20scope=\x22row\x22>%\x20Total</th><td\x20style=\x22text-align:center;\x22>','<div\x20class=\x22bar_body\x22\x20style=\x22width:30%;margin-right:6px;\x22><div\x20class=\x22btn-t666\x22>','</div><div\x20class=\x22clr\x22></div></div>','<div\x20class=\x22bar_background\x22><div\x20style=\x22padding-top:8px;\x22>','ProductFocus_2','<div\x20class=\x22btn-t77\x22>3.\x20Total\x20%\x20Weighted</div>','#DisplayProfile','MTDIssue_1','<tr><th\x20scope=\x22row\x22>%\x20Target\x20Focus\x20Product</th><td\x20style=\x22text-align:center;\x22>','</div>','en-US','<table\x20class=\x22table\x20table-bordered\x20table-hover\x22\x20style=\x22width:90%;\x20max-width:\x20400px;\x20margin:auto;\x22>','<tr><th\x20scope=\x22row\x22>50%\x20APE\x20Achievement</th><td\x20style=\x22text-align:center;\x22>','<div\x20class=\x22btn-t2\x22\x20onclick=\x22CloseAll()\x22\x20style=\x22margin-top:15px;\x22>ปิดหน้าต่างนี้</div>','APEAchieve_1','<div\x20class=\x22btn-t77\x22>2.\x20หมวด\x20%\x20Focus\x20Product\x20Achievement</div>','<div\x20class=\x22progress2\x22\x20style=\x22float:\x20left;width:60%;margin-top:6px;\x22><div\x20class=\x22bar4\x22\x20style=\x22width:','then','711XlpewC','<div\x20class=\x22bar_body1\x22>','140MdGsGN','retailproject-6f4fc.appspot.com','ProductTarget_2',')</div>','<tr><th\x20scope=\x22row\x22>%\x20APE\x20Achievement</th><td\x20style=\x22text-align:center;\x22>','EmpPosition','</b>\x20(','EmpPicture','onerror','<div\x20class=\x22btn-t77\x22>1.\x20หมวด\x20%\x20APE\x20Achievement</div>','get','\x22></div></div>','EmpID','MTDTarget_1','Total_100','getItem','5236810rpXLWZ','DisplayWaitting','653667385625','<center><div\x20class=\x22btn-t4\x22\x20style=\x22margin-top:30px;margin-bottom:\x2014px;\x22>','<div\x20class=\x22bar_body\x22><div\x20class=\x22btn-t66\x22\x20onclick=\x22OpenProfile1(\x27','\x20|\x20อันดับ\x20->\x20','</div></div>','APE_50','retailproject-6f4fc','<tr><th\x20scope=\x22row\x22>50%\x20Focused\x20Product</th><td\x20style=\x22text-align:center;\x22>','NewRank','display','ready','push','index.html','where','\x27)\x22>','LinePicture','<center>','<div\x20class=\x22progress2\x22\x20style=\x22float:\x20left;width:60%;margin-top:6px;\x22><div\x20class=\x22bar2\x22\x20style=\x22width:','<div\x20style=\x22width:30%;float:\x20left;text-align:\x20left;\x22><img\x20src=\x22./img/click-1.png\x22></div><div\x20style=\x22width:40%;float:\x20left;\x22>&nbsp;</div>','425460mFhwRJ','21SiIYal','EmpRH','filter','25XdlqhX','</td></tr>','asc','1:653667385625:web:a5aed08500de80839f0588','data','BBD_LeagueMember','forEach','<div\x20class=\x22clr\x22\x20style=\x22height:\x2025px;\x22></div></center>','getElementById','68888VkyqBq','toLocaleString','orderBy','65416uJOuxA','<div\x20style=\x22margin:10px\x20auto;text-align:\x20center;\x20width:90%;\x22>','<div\x20class=\x22bar_body\x22><div\x20class=\x22btn-t66\x22\x20onclick=\x22ShowZone(\x27','./img/box.jpg','<tr><th\x20scope=\x22row\x22>MTD\x20Target</th><td\x20style=\x22text-align:center;\x22>','<div\x20class=\x22bar_background\x22\x20style=\x22width:95%;\x22><div\x20style=\x22padding-top:8px;\x22>','DisplayReport','html','<tr><th\x20scope=\x22row\x22>Target</th><td\x20style=\x22text-align:center;\x22>','22148049baYtjD','Product_50','block','style','<tbody>','href','<thead\x20class=\x22thead-dark\x22><tr><th\x20scope=\x22col\x22\x20class=\x22col_td\x22>รายการ</th><th\x20scope=\x22col\x22\x20class=\x22col_td\x22>รายละเอียด</th></thead>','id01','TotalRank','collection','<div\x20class=\x22clr\x22\x20style=\x22height:\x2025px;\x22></div>','EmpZone','firestore','EmpID_Kickoff','<div\x20style=\x22width:30%;float:\x20left;text-align:\x20right;\x22><img\x20src=\x22./img/click-2.png\x22></div></div><div\x20class=\x22clr\x22></div>','</table>','\x27)\x22\x20style=\x22width:15%;margin-left:10px;\x22>','27708ueYZKF','<div\x20class=\x22progress2\x22\x20style=\x22float:\x20left;width:46%;margin-top:6px;\x22><div\x20class=\x22bar3\x22\x20style=\x22width:','<div>','Asia/Jakarta','AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','\x22\x20class=\x22add-profile\x22\x20style=\x22margin:30px\x20auto\x200px\x20auto;\x22\x20onerror=\x22javascript:imgError(this)\x22></div>','<div\x20class=\x22bar_body\x22>','Championship_Zone'];_0x4d3c=function(){return _0x3373a9;};return _0x4d3c();}function CloseAll(){var _0x33f614=_0x5b6515;document[_0x33f614(0x13e)]('id01')[_0x33f614(0x14e)][_0x33f614(0x128)]='none';}
