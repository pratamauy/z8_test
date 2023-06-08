class emopPage {

    get buttonCek() {
        return $('#tool-1017');
    }

    open(username, password) {
        return browser.newWindow(`http://`+username+`:`+password+`@phmemop.pertamina.com/`);
    }
}

export default new emopPage();
