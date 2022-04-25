var regflag = false;
var flag = false;
var num = 60;
var timer = null;

function returnlogin() {
  document.getElementsByClassName('overflow')[0].style.display = 'block';
  document.getElementsByClassName('nousernamediv')[0].style.display = 'none';
}

function changeborder(num) {
  if (num === 0) {
    document.getElementsByClassName('inputdiv')[0].style.border = '2px solid #999';
  } else if (num === 1) {
    document.getElementsByClassName('inputdiv')[1].style.border = '2px solid #999';
  } else if (num === 2) {
    document.getElementsByClassName('inputdiv')[2].style.border = '2px solid #999';
  } else if (num === 3) {
    document.getElementsByClassName('inputdiv')[3].style.border = '2px solid #999';
  } else if (num === 4) {
    document.getElementsByClassName('inputdiv')[4].style.border = '2px solid #999';
  }
}

function inputchange2() {
  var phonetext = document.getElementsByClassName('phonenum')[0].value;
  var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (!myreg.test(phonetext)) {
    document.getElementsByClassName('getdtcode')[0].style.color = '#999';
  } else {
    document.getElementsByClassName('getdtcode')[0].style.color = '#FF552E';
    document.getElementsByClassName('warnshow')[0].style.display = 'none';
    regflag = true;
  }
}

function downborder(num) {
  if (num === 0) {
    document.getElementsByClassName('inputdiv')[0].style.border = '2px solid #ebebeb';
    var phonetext = document.getElementsByClassName('phonenum')[0].value;
    if (phonetext === '') {
      document.getElementsByClassName('warnshow')[0].style.display = 'block';
    } else if (phonetext !== '' && regflag === false) {
      document.getElementsByClassName('warnshow')[0].style.display = 'block';
      document.querySelectorAll('.warningfont2')[0].innerHTML = '请填写正确的手机号';
    }
  } else if (num === 1) {
    document.getElementsByClassName('inputdiv')[1].style.border = '2px solid #ebebeb';
    var codetext = document.getElementsByClassName('dongtaima')[0].value;
    if (codetext === '') {
      document.getElementsByClassName('warnshow')[1].style.display = 'block';
    } else if (codetext !== '' && codetext.length >= 4) {
      document.getElementsByClassName('warnshow')[1].style.display = 'none';
    }
  } else if (num === 2) {
    document.getElementsByClassName('inputdiv')[2].style.border = '2px solid #ebebeb';
    var usernametext = document.getElementsByClassName('username')[0].value;
    if (usernametext === '') {
      document.getElementsByClassName('warnshow')[2].style.display = 'block';
    }
  } else if (num === 3) {
    document.getElementsByClassName('inputdiv')[3].style.border = '2px solid #ebebeb';
    var passwordreg = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/; // 密码长度8~16位
    var passwordreg2 = /(\w)*(\w)\2{2}(\w)*/g; //不能出现相同或连续字符
    var setpasswordtext = document.getElementsByClassName('setpassword')[0].value;
    if (setpasswordtext === '') {
      document.getElementsByClassName('warnshow')[3].style.display = 'block';
      document.getElementsByClassName('warningfont2')[3].innerHTML = '您还未输入密码';
    } else if (setpasswordtext.length < 8 || setpasswordtext.length > 16) {
      document.getElementsByClassName('warnshow')[3].style.display = 'block';
      document.querySelectorAll('.warningfont2')[3].innerHTML = '密码长度为8-16位，且不能是相同或连续字符';
    } else if (setpasswordtext !== '' && setpasswordtext.length >= 8 && setpasswordtext.length <= 16) {
      document.getElementsByClassName('warnshow')[3].style.display = 'none';
    }
  } else if (num === 4) {
    document.getElementsByClassName('inputdiv')[4].style.border = '2px solid #ebebeb';
    var confirmpasswordtext = document.getElementsByClassName('confirmpassword')[0].value;
    if (confirmpasswordtext === '') {
      document.getElementsByClassName('warnshow')[4].style.display = 'block';
    }
  }
}


function changeicon() {
  flag = !flag;
  if (flag) {
    document.getElementsByClassName('uncheckicons')[0].src = './images/user-list-check.png';
  } else {
    document.getElementsByClassName('uncheckicons')[0].src = './images/user-list-uncheck.png';
  }
}



function getcode() {
  if (regflag === true) {
    if (num === 0) {
      clearInterval(timer);
      document.getElementsByClassName('getdtcode')[0].innerHTML = '获取动态码';
      document.getElementsByClassName('getdtcode')[0].style.color = '#FF552E';
      num = 60;
      return
    } else {
      document.getElementsByClassName('getdtcode')[0].innerHTML = num + "s后重新获取";
      document.getElementsByClassName('getdtcode')[0].style.color = '#999';
      num--;
    }
    this.timer = setTimeout(function() {
      getcode();
    }, 1000)
  }
}