<!-- Set the url for cookie return -->
<th:block th:unless="${#httpServletRequest.requestURI == '/check-for-help-paying-nhs-costs/cookie-declaration'} or ${#httpServletRequest.requestURI == '/check-for-help-paying-nhs-costs/cookie-confirmation'}">
	<script>
		const getURL = () => {
				// runs if cookie pref isn't set
				if (NHSCookieConsent.getConsented() === false) {
						// gets the current URL
						const getURL = document.referrer;
						// stores URL in session storage
						sessionStorage.setItem("sessionURL", getURL);
				}
		}
		// Document ready
		(function() {
				getURL();
		})();
	</script>
</th:block>
<th:block th:if="${#httpServletRequest.requestURI == '/check-for-help-paying-nhs-costs/cookie-confirmation'}">
	<script>
		const getURL = () => {
				// Gets the stored URL
				const getSession = sessionStorage.getItem("sessionURL");
				// Assigns the href to the continue button
				document.getElementById("cookie-return-btn").setAttribute("href",getSession);
		}
		// Document ready
		(function() {
				getURL();
		})();
	</script>
</th:block>