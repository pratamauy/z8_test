class pitPage {

    get buttonCek() {
        return $('body > div.wrapper > header > nav > div > ul > li');
    }

    open(username, password) {
        return browser.newWindow(`http://`+username+`:`+password+`@phmbpnapwi001/PIT/`);
    }
}

export default new pitPage();
