<!-- <div class="wa-btn-n-sec">
	<img src="assets/images/down-arrow.webp" alt="" class="wa-arow">
	<a href="javascript:void(0); " class="f-btn wa-btn-n  modal-link-wa" >
		Support Helpline! <span> Click Here </span>	
		<img src="assets/images/whats-up-icon.webp" alt=""> 
	</a>
</div> -->




<footer class="padng-sec">
	<div class="container-c">
		<div class="ftr-cnt">
			<a href="index.php" class="ftr-logo">
				<img src="assets/images/artes-logo-1.webp" class="ftr-lgo-img" alt="">
			</a>
			<a href="privacy.php" target="_blank" class="ftr-link"> Privacy policy</a>
		</div>
	</div>
	<div class="copyright-c">
		<p>Copyright © 2024 <a href="index.php"> Ever Glo Aesthetic Clinic </a>. All rights reserved.</p>
	</div>
</footer>

<script>
	var loadEnquiryModalPopup = <?= $loadEnquiryModalPopup ? 'true' : 'false'; ?>;
</script>
<script src="assets/js/jquery.js"></script>
<!-- <script src="assets/js/bootstrap-5.js" defer ></script> -->
<script src="assets/js/slick.js" defer></script>
<script src="assets/js/jquery.waypoints.min.js"></script>
<script src="assets/js/jquery.countup.js"></script>
<script src="assets/js/custom.js" defer></script>
<script src="assets/js/send_email.js?v=3"></script>
<script>
	$('.counter').countUp();
</script>
<script>
	window.addEventListener('load', function() {
		jQuery('[href*="tel:"]').click(function() {
			gtag('event', 'conversion', {
				'send_to': 'AW-16740251891/meOlCLP5-eoZEPPxr64-'
			});
		});
	})
</script>
<script>
	window.addEventListener('load', function() {
		jQuery('[href*="wa.me"]').click(function() {
			gtag('event', 'conversion', {
				'send_to': 'AW-16740251891/iCM7CKuZ7uoZEPPxr64-'
			});
		});
	});
</script>
</body>

</html>