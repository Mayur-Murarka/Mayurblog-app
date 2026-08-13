const puppeteer = require("puppeteer");

(async () => {
  const url = process.argv[2] || "http://localhost:3000";
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  const logs = [];
  page.on("console", (msg) => {
    const args = msg.args().map((a) => {
      try {
        return a.jsonValue();
      } catch (e) {
        return a.toString();
      }
    });
    logs.push({ type: "console", level: msg.type(), text: msg.text(), args });
  });

  page.on("pageerror", (error) => {
    logs.push({ type: "pageerror", error: error.message, stack: error.stack });
  });

  page.on("requestfailed", (req) => {
    logs.push({
      type: "requestfailed",
      url: req.url(),
      failure: req.failure(),
    });
  });

  try {
    const resp = await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });
    logs.push({ type: "response", status: resp.status(), url: resp.url() });
  } catch (e) {
    logs.push({ type: "goto-error", message: e.message });
  }

  // Wait a bit to catch runtime logs
  await new Promise((res) => setTimeout(res, 4000));

  console.log("--- BROWSER LOGS START ---");
  console.log(JSON.stringify(logs, null, 2));
  console.log("--- BROWSER LOGS END ---");

  await browser.close();
  // Exit with success
  process.exit(0);
})();
