$(document).ready(function () {
    // 初始化 wilddog
    var config = {
        authDomain: "miemie.wilddog.com"
    };
    wilddog.initializeApp(config);
    
    $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
    });
    $('.ui.menu a.item').on('click', function() {
        $(this).addClass('active')
        .siblings()
        .removeClass('active');
    });
});

/**
 * 首页标题打字效果  
 */
 $(function () {
    $(".site-header .typed").typed({
        strings: ["这里是咩咩单词 MIE~", "MIEMIE BY AIRING"],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 700
    });
});

/**
 * 首页开始按钮点击事件，显示登录弹窗  
 */
 function start() {
    $('#modal1.modal').modal('show');
}

/**
 * 首页显示注册弹窗  
 */
 function showSignUp() {
    $('#modal2.modal').modal('show');
}

/**
 * 用户登录  
 */
 function signIn() {
    var email = $('#signInEmail').val();
    var pwd = $('#signInPassword').val();
    console.log(email)
    wilddog.auth().signInWithEmailAndPassword(email, pwd)
    .then(function () {
        console.info("login success, currentUser->", wilddog.auth().currentUser);
        location.href = "./app/index.html";
    }).catch(function (err) {
        console.info('login failed ->', err);
    });
}

/**
 * 用户注册
 */
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


/**
 * 学习页标题打字效果  
 */
 $(function () {
    $(".menu-title .typed").typed({
        strings: ["这里是咩咩单词 MIE~", "MIEMIE"],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 700
    });
});