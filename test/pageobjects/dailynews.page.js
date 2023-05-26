class dailyPage {

    get buttonCek() {
        return $('#O365_MainLink_Me');
    }
    
    open () {
        return browser.newWindow(`http://phmsp-dailynews.pertamina.com/`);
    }
}

export default new dailyPage();
