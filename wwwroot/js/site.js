document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});



function namePress() {
    var reg_name = document.getElementById("id_reg_name");
    var value = reg_name.value;
    var big = value.toUpperCase();
    reg_name.value = big;
    if (reg_name.value == "" || reg_name.value.length < 2 || reg_name.value.length > 35 || reg_name.value == " ") {
        reg_name.classList.remove("is-success");
        reg_name.classList.add("is-danger");
        document.getElementById("name_desc").classList.remove("is-success");
        document.getElementById("name_desc").classList.add("is-danger");
        document.getElementById("name_desc").innerHTML = "Lütfen adınızı eksiksiz ve doğru giriniz.";
    }
    else if (/^(?!Ğ)[\w\ğ\Ğ\Ü\ü\İ\ş\Ş\ö\Ö\Ç\ç\ı]+( [\w\ğ\Ğ\Ü\ü\İ\ş\Ş\ö\Ö\Ç\ç\ı]+)*$/.test(reg_name.value) == false) {

        reg_name.classList.remove("is-success");
        reg_name.classList.add("is-danger");
        document.getElementById("name_desc").classList.remove("is-success");
        document.getElementById("name_desc").classList.add("is-danger");
        document.getElementById("name_desc").innerHTML = "Lütfen adınızı eksiksiz ve doğru giriniz.";
    }
    else {
        reg_name.classList.remove("is-danger");
        reg_name.classList.add("is-success");
        document.getElementById("name_desc").classList.remove("is-danger");
        document.getElementById("name_desc").classList.add("is-success");
        document.getElementById("name_desc").innerHTML = "Bir sorun görünmüyor";
    }
};


function surnamePress() {
    var reg_surname = document.getElementById("id_reg_surname");
    var value = reg_surname.value;
    var big = value.toUpperCase();
    reg_surname.value = big;
    if (reg_surname.value == "" || reg_surname.value.length < 2 || reg_surname.value.length > 35 || reg_surname.value == " ") {
        reg_surname.classList.remove("is-success");
        reg_surname.classList.add("is-danger");
        document.getElementById("surname_desc").classList.remove("is-success");
        document.getElementById("surname_desc").classList.add("is-danger");
        document.getElementById("surname_desc").innerHTML = "Lütfen soyadınızı eksiksiz ve doğru giriniz.";
    }
    else if (/^(?!Ğ)[\w\ğ\Ğ\Ü\ü\İ\ş\Ş\ö\Ö\Ç\ç\ı]+( [\w\ğ\Ğ\Ü\ü\İ\ş\Ş\ö\Ö\Ç\ç\ı]+)*$/.test(reg_surname.value) == false) {

        reg_surname.classList.remove("is-success");
        reg_surname.classList.add("is-danger");
        document.getElementById("surname_desc").classList.remove("is-success");
        document.getElementById("surname_desc").classList.add("is-danger");
        document.getElementById("surname_desc").innerHTML = "Lütfen soyadınızı eksiksiz ve doğru giriniz.";
    }
    else {
        reg_surname.classList.remove("is-danger");
        reg_surname.classList.add("is-success");
        document.getElementById("surname_desc").classList.remove("is-danger");
        document.getElementById("surname_desc").classList.add("is-success");
        document.getElementById("surname_desc").innerHTML = "Bir sorun görünmüyor";
    }
};

function emailPress() {
    var reg_email = document.getElementById("id_reg_email");
    if (reg_email.value == "" || reg_email.value == " ") {
        reg_email.classList.remove("is-success");
        reg_email.classList.add("is-danger");
        document.getElementById("email_desc").classList.remove("is-success");
        document.getElementById("email_desc").classList.add("is-danger");
        document.getElementById("email_desc").innerHTML = "Lütfen E-Posta adresinizi eksiksiz ve doğru giriniz.";
    }
    else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(reg_email.value) == false) {

        reg_email.classList.remove("is-success");
        reg_email.classList.add("is-danger");
        document.getElementById("email_desc").classList.remove("is-success");
        document.getElementById("email_desc").classList.add("is-danger");
        document.getElementById("email_desc").innerHTML = "Lütfen E-Posta adresinizi eksiksiz ve doğru giriniz.";
    }
    else {
        reg_email.classList.remove("is-danger");
        reg_email.classList.add("is-success");
        document.getElementById("email_desc").classList.remove("is-danger");
        document.getElementById("email_desc").classList.add("is-success");
        document.getElementById("email_desc").innerHTML = "Bir sorun görünmüyor";
    }
};


function telPress() {
    var reg_tel = document.getElementById("id_reg_tel");
    if (reg_tel.value == "" || reg_tel.value == " " || reg_tel.value.length != 10) {
        reg_tel.classList.remove("is-success");
        reg_tel.classList.add("is-danger");
        document.getElementById("tel_desc").classList.remove("is-success");
        document.getElementById("tel_desc").classList.add("is-danger");
        document.getElementById("tel_desc").innerHTML = "Lütfen telefon numaranızı eksiksiz ve doğru giriniz.";
    }
    else if (/^\d+$/.test(reg_tel.value) == false) {

        reg_tel.classList.remove("is-success");
        reg_tel.classList.add("is-danger");
        document.getElementById("tel_desc").classList.remove("is-success");
        document.getElementById("tel_desc").classList.add("is-danger");
        document.getElementById("tel_desc").innerHTML = "Lütfen telefon numaranızı eksiksiz ve doğru giriniz.";
    }
    else {
        reg_tel.classList.remove("is-danger");
        reg_tel.classList.add("is-success");
        document.getElementById("tel_desc").classList.remove("is-danger");
        document.getElementById("tel_desc").classList.add("is-success");
        document.getElementById("tel_desc").innerHTML = "Bir sorun görünmüyor";
    }
};

function pwPress() {
    var reg_pw = document.getElementById("id_reg_pw");
    if (reg_pw.value == "" || reg_pw.value == " ") {
        reg_pw.classList.remove("is-success");
        reg_pw.classList.add("is-danger");
        document.getElementById("pw_desc").classList.remove("is-success");
        document.getElementById("pw_desc").classList.add("is-danger");
        document.getElementById("pw_desc").innerHTML = "Şifreniz 8-15 karakter aralığında olmalı, rakam, büyük ve küçük harf içermelidir.";
    }
    else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(reg_pw.value) == false) {

        reg_pw.classList.remove("is-success");
        reg_pw.classList.add("is-danger");
        document.getElementById("pw_desc").classList.remove("is-success");
        document.getElementById("pw_desc").classList.add("is-danger");
        document.getElementById("pw_desc").innerHTML = "Şifreniz 8-15 karakter aralığında olmalı, rakam, büyük ve küçük harf içermelidir.";

    }
    else {
        reg_pw.classList.remove("is-danger");
        reg_pw.classList.add("is-success");
        document.getElementById("pw_desc").classList.remove("is-danger");
        document.getElementById("pw_desc").classList.add("is-success");
        document.getElementById("pw_desc").innerHTML = "Bir sorun görünmüyor";
    }
};

