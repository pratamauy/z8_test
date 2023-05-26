class mahakamPage {

    get buttonCek() {
        return $('#phm_header > div > div.phm-container > div.dropdown');
    }

    open() {
        return browser.url(`http://mahakamnet.pertamina.com/`);
    }
}

export default new mahakamPage();
