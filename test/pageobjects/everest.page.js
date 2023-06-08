class everestPage {

    get buttonCek() {
        return $('#phm_header > div > div.phm-container > div.dropdown');
    }

    open(username, password) {
        return browser.newWindow(`http://`+username+`:`+password+`@phmeverest.pertamina.com/`);
    }
}

export default new everestPage();
