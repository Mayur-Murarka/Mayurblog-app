const puppeteer = require("puppeteer");

(async () => {
  const url = process.argv[2] || "http://localhost:3000";
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Inject global error collectors before any scripts run
  await page.evaluateOnNewDocument(() => {
    window.__collectedErrors = window.__collectedErrors || [];
    window.addEventListener("error", (e) => {
      try {
        window.__collectedErrors.push({
          type: "error",
          message: e.message,
          filename: e.filename,
          lineno: e.lineno,
          colno: e.colno,
          stack: e.error && e.error.stack,
        });
      } catch (err) {}
    });
    window.addEventListener("unhandledrejection", (e) => {
      try {
        const r = e.reason || {};
        window.__collectedErrors.push({
          type: "unhandledrejection",
          message: r.message || String(r),
          stack: r.stack,
        });
      } catch (err) {}
    });
  });

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
  try {
    const pageErrors = await page.evaluate(
      () => window.__collectedErrors || [],
    );
    console.log("--- PAGE ERRORS START ---");
    console.log(JSON.stringify(pageErrors, null, 2));
    console.log("--- PAGE ERRORS END ---");
  } catch (e) {
    console.log("--- PAGE ERRORS FETCH FAILED ---");
  }
  console.log("--- BROWSER LOGS END ---");

  await browser.close();
  // Exit with success
  process.exit(0);
})();
