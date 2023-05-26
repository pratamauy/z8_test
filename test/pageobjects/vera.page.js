class veraPage {

    get buttonCek() {
        return $('body > nav > div > ul:nth-child(2) > li:nth-child(1)');
    }
    
    open() {
        return browser.newWindow(`http://phmvera.pertamina.com/`);
    }
}

export default new veraPage();
