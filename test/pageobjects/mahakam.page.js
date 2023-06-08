class mahakamPage {

    get buttonCek() {
        return $('#phm_header > div > div.phm-container > div.dropdown');
    }

    open(username, password) {
        return browser.url(`http://`+username+`:`+password+`@mahakamnet.pertamina.com/`);
    }
}

export default new mahakamPage();
