 document.addEventListener("DOMContentLoaded", () => {

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0]?.url) return;

    const domain = new URL(tabs[0].url).hostname;
    document.getElementById("domain").innerText = domain;

    const openTab = (url) => chrome.tabs.create({ url });

    document.getElementById("whois").onclick = () =>
      openTab(`https://who.is/whois/${domain}`);

    document.getElementById("dns").onclick = () =>
      openTab(`https://viewdns.info/dnsrecord/?domain=${domain}`);

    document.getElementById("reverseip").onclick = () =>
      openTab(`https://viewdns.info/reverseip/?host=${domain}`);

    document.getElementById("shodan").onclick = () =>
      openTab(`https://www.shodan.io/search?query=${domain}`);

    // ✅ VirusTotal Integration
    document.getElementById("virustotal").onclick = () =>
      openTab(`https://www.virustotal.com/gui/domain/${domain}`);

    // ✅ Google Dorks
    document.getElementById("runDork").onclick = () => {
      const dork = document.getElementById("dorkSelect").value;
      let query = "";

      switch (dork) {
        case "site":
          query = `site:${domain}`;
          break;
        case "login":
          query = `site:${domain} inurl:login`;
          break;
        case "index":
          query = `site:${domain} intitle:"index of"`;
          break;
        case "pdf":
          query = `site:${domain} filetype:pdf`;
          break;
        case "admin":
          query = `site:${domain} inurl:admin`;
          break;
        default:
          alert("Select a Google Dork");
          return;
      }

      openTab(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    };
  });

});



