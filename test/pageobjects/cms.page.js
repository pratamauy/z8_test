class cmsPage {

    get buttonCek() {
        return $('#O365_MainLink_Me');
    }

    open(username, password) {
        return browser.newWindow(`http://`+username+`:`+password+`@phmsp-cms.pertamina.com/`);
    }
}

export default new cmsPage();
