class princePage {

    get buttonCek() {
        return $('body > div.page-header.navbar.navbar-fixed-top > div > div.top-menu > ul > li');
    }

    open() {
        return browser.newWindow(`http://phmprince.pertamina.com/`);
    }
}

export default new princePage();
