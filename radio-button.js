<script>
  // Check the checkboxes based on status of cookie preferences
  window.addEventListener("load", function checkCookie() {
      document.getElementById("input-statistics-1").checked = NHSCookieConsent.getStatistics();
      document.getElementById("input-statistics-2").checked = !NHSCookieConsent.getStatistics();
  });
  // Edit consent preferences based on checkbox input
  function changeConsent() {
  NHSCookieConsent.setStatistics(document.getElementById("input-statistics-1").checked);
    if(typeof NHSCookieConsent.setConsented === "function") {
      NHSCookieConsent.setConsented(true);
    }
  }
</script>