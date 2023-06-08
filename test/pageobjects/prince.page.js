class princePage {

    get buttonCek() {
        return $('body > div.page-header.navbar.navbar-fixed-top > div > div.top-menu > ul > li');
    }

    open(username, password) {
        return browser.newWindow(`http://`+username+`:`+password+`@phmprince.pertamina.com/`);
    }
}

export default new princePage();
