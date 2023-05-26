class pitPage {

    get buttonCek() {
        return $('body > div.wrapper > header > nav > div > ul > li');
    }

    open() {
        return browser.newWindow(`http://phmbpnapwi001/PIT/`);
    }
}

export default new pitPage();
