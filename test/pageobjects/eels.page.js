class eelsPage {

    get buttonCek() {
        return $('#phm_header > div > div.phm-container > div.dropdown');
    }

    open(username, password) {
        return browser.newWindow(`http://`+username+`:`+password+`@phmeels.pertamina.com/`);
    }
}

export default new eelsPage();
