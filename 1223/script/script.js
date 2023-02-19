// 로그인 스크립트
function login_check() {
  
  // 1. 사용자가 입력한 데이터를(id, pw) 변수에 담는다.
  let id = document.getElementById('id_txt').value;
  let pw= document.getElementById('pw_txt').value;

  if(id=='master') { // id가 맞다면
    if(pw=='1234') { // pw검사해서 맞다면
      alert('로그인 성공')
    } else {
      alert('패스워드가 틀렸습니다. 다시확인하세요.');
    }
  } else if((id=='')||(pw=='')) { // id와 pw둘중에 하나라도 입력 안하면
    alert('아이디와 패스워드를 입력하지 않았습니다. 확인하세요.');
  } else {
    alert('아이디가 틀렸습니다. 다시확인하세요.');
  }
}