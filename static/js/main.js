$(document).ready(function () {
    var config = {
        authDomain: "miemie.wilddog.com"
    };
    wilddog.initializeApp(config);
});
$(function () {
    $(".typed").typed({
        strings: ["这里是咩咩单词 MIE~", "MIEMIE BY AIRING"],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 700
    });
});

// Multiple Modals 无效
$('.united.modal')
    .modal({
        allowMultiple: false
    })
;
$('#modal2').modal('attach events', '#btn-modal-1');


function start() {
    $('#modal1.modal').modal('show');
}

// 临时 debug 注册事件
function showSignUp() {
    $('#modal2.modal').modal('show');
}

function signIn() {
    var email = $('#signInEmail').val();
    var pwd = $('#signInPassword').val();
    console.log(email)
    wilddog.auth().signInWithEmailAndPassword(email, pwd)
        .then(function () {
            console.info("login success, currentUser->", wilddog.auth().currentUser);
        }).catch(function (err) {
        console.info('login failed ->', err);
    });
}

function signUp() {

    var email = $('#signUpEmail').val();
    var pwd = $('#signUpPassword').val();

    wilddog.auth().createUserWithEmailAndPassword(email, pwd)
        .then(function (user) {
            console.info("user created.", user);
        }).catch(function (err) {
        console.info("create user failed.", err);
    });
}


// setting页面事件
function modify() {
    var form2 = $(".form2");
    var form1 = $(".form1");
    form2.removeClass("hidden");
    form1.addClass("hidden");

}

function save() {
    var form2 = $(".form2");
    var form1 = $(".form1");
    var name = $("#username").val();
    var birthday = $("#birthday").val();
    var sex = $("input[name='sex']:checked").val();
    var reg = /dddd\-dd\-dd/;
    if(!reg.test(birthday)) {
        alert("请输入正确的日期格式");
        return
    }
    form2.addClass("hidden");
    form1.removeClass("hidden");
}

function back() {
    var form2 = $(".form2");
    var form1 = $(".form1");
    form2.addClass("hidden");
    form1.removeClass("hidden");
}