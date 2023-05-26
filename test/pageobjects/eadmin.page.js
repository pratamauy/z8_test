class eadminPage {

    get buttonCek() {
        return $('#_id11_headerToolbar > table > tbody > tr > td:nth-child(10)');
    }
    open() {
        const link = 'http://idepbpn-uapoa01.ad.phm-pertamina.com:7002/workspace/faces/jsf/workspace/workspace.xhtml?param=284699002735395637453830V2478500426572111441108817310904438152176341298106483196466129041214496837572431384552596673';
        return browser.newWindow(link);
    }
}

export default new eadminPage();
