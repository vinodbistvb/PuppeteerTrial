const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless : false})
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://www.google.com/')
  
  await page.setViewport({ width: 1440, height: 821 })
  
  await page.waitForSelector('div > .A8SBwf > .FPdoLc > center > .gNO89b')
  await page.click('div > .A8SBwf > .FPdoLc > center > .gNO89b')
  
  await navigationPromise
  
  // #tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input
  await page.waitForSelector('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
  await page.click('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')

  await page.keyboard.type("vinod singh bist");
  
  await page.screenshot({path: 'example.png'});
  await page.waitFor(2000);
  await navigationPromise
  
  await browser.close()
})()