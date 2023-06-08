class dailyPage {

    get buttonCek() {
        return $('#O365_MainLink_Me');
    }
    
    open(username, password) {
        return browser.newWindow(`http://`+username+`:`+password+`@phmsp-dailynews.pertamina.com/`);
    }
}

export default new dailyPage();
