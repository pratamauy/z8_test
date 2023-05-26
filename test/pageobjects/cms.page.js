class cmsPage {

    get buttonCek() {
        return $('#O365_MainLink_Me');
    }

    open() {
        return browser.newWindow(`http://phmsp-cms.pertamina.com/`);
    }
}

export default new cmsPage();
