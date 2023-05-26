class precisePage {

    get buttonCek() {
        return $('body > div.container.body > div > div.top_nav > div > nav > ul');
    }

    open() {
        return browser.newWindow(`http://phmprecise.pertamina.com/`);
    }
}

export default new precisePage();
