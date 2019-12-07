
/**
 * require puppeteer library
 */
const puppeteer = require("puppeteer");

async function tweetTwitterWithPuppeteer() {
    try {
        /** handle browser activity */
        await handleBrowser();
        /** handle login Activity */
        await loginTweeter();
        /** handle tweet activity */
        await tweetTweeter();
    } catch (err) {
        console.log(err);
        return err;
    }
}
/**
 * call tweetTwitterWithPuppeteer() i.e is handling whole process
 */
tweetTwitterWithPuppeteer();

async function loginTweeter() {
    try {
        /** Define twitter fields */
        let twitterAccount = {
            userField: "input[name='session[username_or_email]']",
            passField: "input[name='session[password]']",
            loginSubmit: ".EdgeButton"
        };
        await page.goto('https://twitter.com');

        await page.waitFor(5000);
        /** Enter twitter id */
        await page.waitForSelector(twitterAccount.userField);
        await page.click(twitterAccount.userField);
        await page.keyboard.type('krdheeraj51');
        /** Enter twiiter password */
        await page.waitForSelector(twitterAccount.passField);
        await page.click(twitterAccount.passField);
        await page.keyboard.type('enter twitter password');
        /** Click Button  */
        await page.waitFor(2000);
        await page.waitForSelector(twitterAccount.loginSubmit);
        await page.click(twitterAccount.loginSubmit);
        await page.waitFor(3000);
    } catch (err) {
        console.log(err);
        return err;

    }
}

async function tweetTweeter() {
    try {
        await page.goto('https://twitter.com/home');
        /** 
         * tweet on twitter
         */
        await page.waitForSelector('.DraftEditor-editorContainer');
        await page.click('.DraftEditor-editorContainer');
        /**
         * write your twitter post
         */
        await page.keyboard.type("krdheeraj51 #krdheeraj #freelearning #100DaysOfCode #puppeteer #googlechrome  I like Puppeteer because it automate browser-specific tasks.");
        await page.waitFor(3000);
        /**
         * Click tweet button for submit post
         */
        await page.waitForSelector('#react-root > div > div > div > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-1tlfku8.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-14lw9ot.r-184en5c > div.css-1dbjc4n.r-156q2ks > div:nth-child(1) > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-15d164r.r-5f2r5o.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(2) > div > div > div:nth-child(2) > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1n0xq6e.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr')[0];
        await page.click('#react-root > div > div > div > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-1tlfku8.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-14lw9ot.r-184en5c > div.css-1dbjc4n.r-156q2ks > div:nth-child(1) > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-15d164r.r-5f2r5o.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(2) > div > div > div:nth-child(2) > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1n0xq6e.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr')[0];
        await page.waitFor(5000);
        console.log("Tweet has been posted successfully.");
        /**Close browser */
        browser.close();

    } catch (err) {
        console.log(err);

    }
}
async function handleBrowser() {
    /**
     * Open Browser 
     */
    browser = await puppeteer.launch({
        headless: false,
    })
    //open new page
    page = await browser.newPage();
    //set screen 
    await page.setViewport({ width: 1280, height: 800 })

}
