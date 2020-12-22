function check() {
    var inputs = document.getElementsByTagName('input');
    var length = inputs.length;
    for (var i = 0; i < length; i++) {
        if (inputs[i].value.length == 0)
            window.alert(inputs[i].name + ' field is empty');
    }

    checkIdSubjectTextArea();
    extractEmail();
    extractGitHub();
    checkMessage();
}

function checkIdSubjectTextArea() {
    var id = document.getElementById('id').value;
    var subject = document.getElementById('subject').value;
    var textarea = document.getElementById('area').value;

    if (isNaN(id))
        window.alert('ID field contains string values');

    if (!isNaN(subject))
        window.alert('subject must contains string ');

    if (!isNaN(textarea))
        window.alert('text must conatins words');

}

function extractEmail() {
    var email = document.getElementById('email').value;
    var pos1 = email.search("@");
    var pos2 = email.search('.com');
    var domain = email.substring(pos1 + 1, pos2);
    window.alert('your email domain is ' + domain);
}

function extractGitHub() {
    var url = document.getElementById('url').value;
    var pos = url.search('.github');
    var username = url.substring(0, pos);
    window.alert('your github user name is ' + username);
}

function checkMessage() {


}