const puppeteer = require('puppeteer');
const beep = require('beepbeep')

async function login() {
  console.log(Math.floor(Date.now()/1000), 'checking ATMs...');
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.goto('https://www.tinkoff.ru/maps/atm/?latitude=43.60903553201178&longitude=39.737957221972344&zoom=13&currency=USD&amount=100&partner=tcs');
    await page.waitForTimeout(10_000);
    await page.waitForSelector('[data-qa-file=UnitedMapAlert]');
  } catch (e) {
    console.log('Here is money!!!');
    beep(5);
  }
  await browser.close();
}

setInterval(login, 60_000);

