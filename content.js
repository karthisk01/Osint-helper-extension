(function () {
    try {
        const pageInfo = {
            domain: window.location.hostname,
            url: window.location.href,
            title: document.title
        };

        // Send page info to popup.js (if needed in future)
        chrome.runtime.sendMessage({
            type: "PAGE_INFO",
            data: pageInfo
        });

        console.log("OSINT Helper: Page info collected", pageInfo);
    } catch (error) {
        console.error("OSINT Helper error:", error);
    }
})();
