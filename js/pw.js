function myPassword() {
    var generator = document.getElementsByClassName(".pw-english")[0].getAttribute("data-id");
    console.info("password type: ", generator);
    if (generator === "english") {
        $(".english-result").append("");
        if (generator === "chinese");
        $(".chinese-result").append("");
    } else {
        $(".arabic-result").append("");
    }
}
myPassword();
