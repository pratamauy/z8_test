class emopPage {

    get buttonCek() {
        return $('#tool-1017');
    }

    open() {
        return browser.newWindow(`http://phmemop.pertamina.com/`);
    }
}

export default new emopPage();
