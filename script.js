document.getElementById("reg").onsubmit = function() {
    let emin = document.getElementById("email").value;
    let strengthBar = document.getElementById("strength-bar");
    let nameValue = document.querySelector("#name").value;
    let c_v = document.getElementById("comm");
    let f_v = document.getElementById("file");
    const filePath = this.value;
    let password = document.querySelector("#pass").value;
    let passwordConfirm = document.querySelector("#pass1").value;
    const Eng_p = /^[A-Za-z]+(\s+[A-Za-z]+){3}$/;
    const Arab_p = /^[\u0621-\u064A]+(\s+[\u0621-\u064A]+){3}$/;
    let emiR = /^[\w.-]+@(gmail|yaho|hotmail|outlook)\.(com|net|org|info)$/;
    const allowed_ex = /(\.jpeg|\.jpg|\.bmp|\.gif|\.png|\.svg)$/i; //uploaded file extentions


    name
    if (document.querySelector("#name").value == "") {
        alert("يجب عليك إدخال الاسم");
        return false;
    }

    if (!Eng_p.test(nameValue) && !Arab_p.test(nameValue)) {
        alert("يجب عليك إدخال الاسم الرباعي");
        return false;
    }

    //password
    if (strengthChecker() === false) {
        alert(" كلمه المرور ضعيفه يجب ان تحتوي على ارقام واحرف كبيره وصغيره ورموز ");
        return false;
    }
    if (!document.getElementById("pass1").value == document.getElementById("pass").value) {
        alert("كلمه المرور لاتطابق");
        return false;
    }

    //email
    if (emin === "") {
        alert("يجب عليك إدخال البريد الالكتروني");
        return false;
    }
    if (!emiR.test(emin)) {
        alert("يجب عليك إدخال البريد الالكتروني بشكل صحيح");
        return false;
    }



    if (document.Register.user_gender[0].checked == false && document.Register.user_gender[1].checked == false) {
        alert("يجب عليك إختيار الجنس");
        return false;
    }

    if (document.querySelector("#country").selectedIndex == 0) {
        alert("يجب عليك إختيار الدولة");
        return false;
    }

    if (comment.trim().length == "" && comment.trim().length < 50) {
        alert("يجب أن تحتوي الملاحظة على 50 حرفًا على الأقل.");
        return false;
    }

    if (!allowed_ex.exec(filePath)) {
        alert('  (JPEG, BMP, GIF, PNG, SVG)يجب ادخال الصور بصيغه ');
        this.value = '';
        return false;
    }

    return true;
}

function strengthChecker() {
    let password = document.querySelector("#pass").value;
    let strengthBar = document.getElementById("strength-bar");
    const minLength = 4;

    let parameters = {
        hasUpperCase: /[A-Z]+/.test(password),
        hasLowerCase: /[a-z]+/.test(password),
        hasNumbers: /[0-9]+/.test(password),
        hasSpecial: /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+/.test(password),
        isLongEnough: password.length >= minLength
    };

    let isStrong = parameters.hasUpperCase && parameters.hasLowerCase && parameters.hasNumbers && parameters.hasSpecial && parameters.isLongEnough;

    // Clear the strength bar
    strengthBar.innerHTML = "";
    let barLength = Object.values(parameters).filter(value => value).length;

    // Create strength bar based on the number of criteria met
    for (let i = 0; i < barLength; i++) {
        let span = document.createElement("span");
        span.classList.add("strength");
        strengthBar.appendChild(span);
    }

    let spanRef = document.getElementsByClassName("strength");
    for (let i = 0; i < spanRef.length; i++) {
        switch (barLength) {
            case 0:
                spanRef[i].style.background = "#ff3e36"; // Weak
                break;
            case 1:
                spanRef[i].style.background = "#ff691f"; // Fair
                break;
            case 2:
                spanRef[i].style.background = "#ffda36"; // Good
                break;
            case 3:
                spanRef[i].style.background = "#0be881"; // Strong
                break;
            case 4:
                spanRef[i].style.background = "#0be881"; // Strong
                break;
        }
    }

    return isStrong;
}






// Call the strength checker when the password changes
document.querySelector("#pass").addEventListener("input", strengthChecker);

function theChecker() {
    if (document.Register.agree.checked == true)
        document.Register.ok.disabled = false;
    else
        document.Register.ok.disabled = true;
}