import mahakamPage from '../pageobjects/mahakam.page.js'
import eelsPage from '../pageobjects/eels.page.js'
import cmsPage from '../pageobjects/cms.page.js'
import veraPage from '../pageobjects/vera.page.js'
import pitPage from '../pageobjects/pit.page.js'
import emopPage from '../pageobjects/emop.page.js'
import princePage from '../pageobjects/prince.page.js'
import precisePage from '../pageobjects/precise.page.js'
import dailynewsPage from '../pageobjects/dailynews.page.js'
import everestPage from '../pageobjects/everest.page.js'
import eadminPage from '../pageobjects/eadmin.page.js'

let username = 'mk.pratama.yuda';
let password = 'Pertamina@2023123123'

describe('MAHAKAM', () => {
    it('Mahakam Test', async () => {
        await mahakamPage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await expect($('#container-logo > a > img')).toBeDisplayed({ timeout: 30000 });
        await mahakamPage.buttonCek.waitForClickable({ timeout: 30000 });
    })
})

//akses
describe('EELS', () => {
    it('EELS Test', async () => {
        await eelsPage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await expect($('#ext-gen1029')).not.toHaveText('You are not authorize to access this system, or your session has been expired.',{ timeout: 30000
            // , ignoreCase: true
         });
    })
})

describe('CMS', () => {
    it('CMS Test', async () => {
        await cmsPage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await expect($('#trigger')).toBeDisplayed({ timeout: 30000 });
        await cmsPage.buttonCek.waitForClickable({ timeout: 30000 });
    })
})

describe('VERA', () => {
    it('VERA Test', async () => {
        await veraPage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await veraPage.buttonCek.waitForClickable({ timeout: 30000 });
    })
})

describe('PIT', () => {
    it('PIT Test', async () => {
        await pitPage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await expect($('body > div.wrapper > header > a > span.logo-lg')).toBeDisplayed({ timeout: 30000 });
        await pitPage.buttonCek.waitForClickable({ timeout: 30000 });
    })
})

describe('EMOP', () => {
    it('EMOP Test', async () => {
        await emopPage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await emopPage.buttonCek.waitForClickable({ timeout: 30000 });
    })
})

describe('PRINCE', () => {
    it('PRINCE Test', async () => {
        await princePage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await expect($('body > div.page-header.navbar.navbar-fixed-top > div > div.page-logo > a > img')).toBeDisplayed({ timeout: 30000 });
        await princePage.buttonCek.waitForClickable({ timeout: 30000 });
    })
})

describe('PRECISE', () => {
    it('PRECISE Test', async () => {
        await precisePage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await expect($('#permit-chart')).toBeDisplayed({ timeout: 30000 });
        await precisePage.buttonCek.waitForClickable({ timeout: 30000 });
    })
})

describe('DAILY NEWS', () => {
    it('DAILY NEWS Test', async () => {
        await dailynewsPage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await expect($('#articleDataLatest > div:nth-child(1) > h3')).toBeDisplayed({ timeout: 30000 });
        await dailynewsPage.buttonCek.waitForClickable({ timeout: 30000 });
    })
})

describe('EVEREST', () => {
    it('EVEREST Test', async () => {
        await everestPage.open(username,password,{ 'pageLoad': 60000 });
        await $('body').waitForExist();
        await expect($('#kt_header_brand > div > a > img')).toBeDisplayed({ timeout: 30000 });
    })
})

describe('EADMIN', () => {
    it('EADMIN Test', async () => {
        await eadminPage.open();
        await $('body').waitForExist();
        await expect(eadminPage.imgDisp).toBeDisplayed({ timeout: 30000 });
        await eadminPage.buttonCek.waitForClickable({ timeout: 30000 });
    })
})


