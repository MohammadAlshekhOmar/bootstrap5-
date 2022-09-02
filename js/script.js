function copy(value) {
    var copyText = document.getElementById(value);

    string = copyText.innerHTML.trim();
    navigator.clipboard.writeText(string);

    alert("Copied the text: " + string);
}