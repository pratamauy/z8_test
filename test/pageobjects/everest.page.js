class everestPage {

    get buttonCek() {
        return $('#phm_header > div > div.phm-container > div.dropdown');
    }

    open() {
        return browser.newWindow(`http://phmeverest.pertamina.com/`);
    }
}

export default new everestPage();