function hello(){

  if(document.frm1.irum.value != "")
    alert("아이디가 확인되었습니다")
    return;
 }

 function gaib(){

   na1 = document.frm1.irum.value;
   na2 = document.frm1.id.value;
   na3 = document.frm1.pw.value;
   na4 = document.frm1.sex.value;

   if(na1 ==""){
      alert("이름을 입력하세요");
      document.frm1.irum.focus();
      //return;
      }
   else if(na2 ==""){
      alert("아이디를 입력하세요");
      document.frm1.id.focus();
      //return;
      }
  else if(na3 ==""){
      alert("비밀번호를 입력하세요");
      document.frm1.pw.focus();
      //return;
  }
   else if(na3 != document.frm1.pw1.value){
        alert("비밀번호가 다릅니다. 다시 확인하세요.");
      document.frm1.pw.focus();
      document.frm1.pw.value="";
      document.frm1.pw1.value="";
      //return;
   }
   else{
     newW = window.open("","","top=50,left=100,width=200,height=300,toolbar=no,scrollbars=no")
     newW.document.write("<center><h3>가입 내용 확인 합니다</h3><hr><b>" + na1 + "</b>님!!<br><br> 아이디는<b>" + na2  + " </b>이고,<br><br>성별은<b> " + na4 +"</b>입니다<br><br><br><hr><input type=button value='닫기' onClick='window.close()'>")
     }
 }
