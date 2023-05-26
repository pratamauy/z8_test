class eelsPage {

    get buttonCek() {
        return $('#phm_header > div > div.phm-container > div.dropdown');
    }

    open() {
        return browser.newWindow(`http://phmeels.pertamina.com/`);
    }
}

export default new eelsPage();
