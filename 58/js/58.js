function iconin() {
  document.querySelector(".erweima").src = './images/erweima_h@2x.png';
}

function iconout() {
  document.querySelector(".erweima").src = './images/erweima@2x.png';
}

function iconin2() {
  document.querySelector('.pcpic').src = './images/PC_h@2x.png';
}

function iconout2() {
  document.querySelector('.pcpic').src = './images/PC@2x.png';
}


var lg = false;


function colorchange(num) {
  if (num === 0) {
    lg = false;
    document.getElementsByClassName('warningfont')[0].innerHTML = '您还未输入用户名';
    document.getElementsByClassName('warningfont')[1].innerHTML = '您还未输入密码';
    document.getElementsByClassName('text')[0].style.color = '#FF552E';
    document.getElementsByClassName('text')[0].style.borderBottom = '1px solid #FF552E';
    document.getElementsByClassName('text')[1].style.color = '#666';
    document.getElementsByClassName('text')[1].style.borderBottom = '1px solid #ebebeb';
    document.getElementsByClassName('textinput')[0].setAttribute("placeholder", "账号名");
    document.getElementsByClassName('textinput')[1].setAttribute("placeholder", "密码");
    document.getElementsByClassName('getcode')[0].style.display = 'none';
    document.getElementsByClassName('eyes')[0].style.display = 'block';
    document.getElementsByClassName('forgetpassword')[0].innerHTML = '忘记密码';
    document.getElementsByClassName('forgetpassword')[0].href = 'https://passport.58.com/forgetpassword?path=https%3A%2F%2Fcd.58.com%2F%3Futm_source%3Dmarket%26spm%3Du-2d2yxv86y3v43nkddh1.BDPCPZ_BT%26pts%3D1645689069983&isredirect=false&source=58-homepage-pc';
    document.getElementsByClassName('uncheckicon')[0].style.display = 'block';
    document.getElementsByClassName('onefont')[0].style.display = 'block';
  } else if (num === 1) {

    lg = true;
    document.getElementsByClassName('text')[1].style.color = '#FF552E';
    document.getElementsByClassName('text')[1].style.borderBottom = '1px solid #FF552E';
    document.getElementsByClassName('text')[0].style.color = '#666';
    document.getElementsByClassName('text')[0].style.borderBottom = '1px solid #ebebeb';

    document.getElementsByClassName('textinput')[0].setAttribute("placeholder", "手机号");
    document.getElementsByClassName('textinput')[1].setAttribute("placeholder", "动态码");
    document.getElementsByClassName('getcode')[0].style.display = 'block';
    document.getElementsByClassName('eyes')[0].style.display = 'none';
    document.getElementsByClassName('forgetpassword')[0].innerHTML = '账号申述';
    document.getElementsByClassName('forgetpassword')[0].href = 'https://passport.58.com/sec/complainv2/pc/index#/';
    document.getElementsByClassName('uncheckicon')[0].style.display = 'none';
    document.getElementsByClassName('onefont')[0].style.display = 'none';

    document.getElementsByClassName('warningdiv')[0].style.display = 'none';
    document.getElementsByClassName('warningdiv')[1].style.display = 'none';

    document.getElementsByClassName('textinput')[0].value = '';
    document.getElementsByClassName('textinput')[1].value = '';
  }
}

function openborder(num) {
  if (num === 0) {
    document.getElementsByClassName("bodyinput")[0].style.border = "2px solid #999";
  } else if (num === 1) {
    document.getElementsByClassName("bodyinput2")[0].style.border = "2px solid #999";
  }
}
var codeflag = false;

function inputchange() {
  var phone = document.getElementsByClassName("textinput")[0].value;
  var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
  if (!myreg.test(phone)) {
    document.getElementsByClassName('getcode')[0].style.color = '#999';
  } else {
    document.getElementsByClassName('getcode')[0].style.color = '#FF552E';
    codeflag = true;
  }
}

var num = 60;

function getcurrectcode(obj) {
  if (codeflag === true) {
    if (num === 0) {
      clearInterval(timer);
      document.getElementsByClassName('getcode')[0].innerHTML = '获取动态码';
      document.getElementsByClassName('getcode')[0].style.color = '#FF552E';
      num = 60;
      return
    } else {
      obj.innerHTML = num + "s后重新获取";
      document.getElementsByClassName('getcode')[0].style.color = '#999';
      num--;
    }
    this.timer = setTimeout(function() {
      getcurrectcode(obj);
    }, 1000)
  }
}

function closeborder(num) {
  if (num === 0) {
    document.getElementsByClassName("bodyinput")[0].style.border = "2px solid #EBEBEB";
    var username = document.getElementsByClassName('textinput')[0].value;
    if (username === '') {
      document.getElementsByClassName('warningdiv')[0].style.display = 'block';
    } else if (username !== '') {
      document.getElementsByClassName('warningdiv')[0].style.display = 'none';
    }
  } else if (num === 1) {
    document.getElementsByClassName("bodyinput2")[0].style.border = "2px solid #EBEBEB";
    var password = document.getElementsByClassName('textinput')[1].value;
    if (password === '') {
      document.getElementsByClassName('warningdiv')[1].style.display = 'block';
    } else if (password !== '') {
      document.getElementsByClassName('warningdiv')[1].style.display = 'none';
    }
  }

  if (lg === true) {
    document.getElementsByClassName('warningfont')[0].innerHTML = '请输入手机号';
    document.getElementsByClassName('warningfont')[1].innerHTML = '请输入正确的手机动态码';
  } else if (lg === false) {
    document.getElementsByClassName('warningfont')[0].innerHTML = '您还未输入用户名';
    document.getElementsByClassName('warningfont')[1].innerHTML = '您还未输入密码';
  }
}


var flag = false

function picchange() {
  flag = !flag;
  if (flag) {
    document.getElementsByClassName("eyes")[0].src = "./images/user-list-show.png";
    document.getElementsByClassName("textinput")[1].type = "text";
  } else {
    document.getElementsByClassName("eyes")[0].src = "./images/user-list-hide.png";
    document.getElementsByClassName("textinput")[1].type = "password";
  }
}

function showactive() {
  var text = document.getElementsByClassName("textinput")[1].value;
  if (text !== '') {
    document.getElementsByClassName("closeactive")[0].style.display = "block";
  } else if (text === '') {
    document.getElementsByClassName("closeactive")[0].style.display = "none";
  }
}

function valuedelete() {
  document.getElementsByClassName("textinput")[1].value = '';
  document.getElementsByClassName("closeactive")[0].style.display = "none";
}

function iconshow(num) {
  if (num === 0) {
    document.getElementsByClassName("threes")[0].src = './images/qq_h@2x.png';
  } else if (num === 1) {
    document.getElementsByClassName("threes")[1].src = './images/weixin_h@2x.png';
  } else if (num === 2) {
    document.getElementsByClassName("threes")[2].src = './images/weibo_h@2x.png';
  }
}

function iconhidden(num) {
  if (num === 0) {
    document.getElementsByClassName("threes")[0].src = './images/qq@2x.png';
  } else if (num === 1) {
    document.getElementsByClassName("threes")[1].src = './images/weixin@2x.png';
  } else if (num === 2) {
    document.getElementsByClassName("threes")[2].src = './images/weibo@2x.png';
  }
}

function iconchange(num) {
  flag = !flag;
  if (num === 0) {
    if (flag) {
      document.getElementsByClassName('uncheckicon')[0].src = './images/user-list-check.png';
    } else {
      document.getElementsByClassName('uncheckicon')[0].src = './images/user-list-uncheck.png';
    }
  } else if (num === 1) {
    if (flag) {
      document.getElementsByClassName('uncheckicon')[1].src = './images/user-list-check.png';
    } else {
      document.getElementsByClassName('uncheckicon')[1].src = './images/user-list-uncheck.png';
    }
  }
}

function toRegister() {
  document.getElementsByClassName('overflow')[0].style.display = 'none';
  document.getElementsByClassName('nousernamediv')[0].style.display = 'block';
}

function changelogintext() {
  document.getElementsByClassName('body')[0].style.display = 'none';
  document.getElementsByClassName('body2')[0].style.display = 'block';
}

function changelogintext2() {
  document.getElementsByClassName('body')[0].style.display = 'block';
  document.getElementsByClassName('body2')[0].style.display = 'none';
}

function picchange2(num) {
  if (num === 0) {
    document.getElementsByClassName('clearfloat')[0].style.display = 'none';
    document.getElementsByClassName('twopic')[0].style.display = 'block';

  } else if (num === 1) {
    document.getElementsByClassName('clearfloat')[0].style.display = 'block';
    document.getElementsByClassName('twopic')[0].style.display = 'none';
  }
}