class veraPage {

    get buttonCek() {
        return $('body > nav > div > ul:nth-child(2) > li:nth-child(1)');
    }
    
    open(username, password) {
        return browser.newWindow(`http://`+username+`:`+password+`@phmvera.pertamina.com/`);
    }
}

export default new veraPage();
