class precisePage {

    get buttonCek() {
        return $('body > div.container.body > div > div.top_nav > div > nav > ul');
    }

    open(username, password) {
        return browser.newWindow(`http://`+username+`:`+password+`@phmprecise.pertamina.com/`);
    }
}

export default new precisePage();
