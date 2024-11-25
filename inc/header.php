<?php
include 'constant.php';
$loadEnquiryModalPopup = !isset($_COOKIE['enquiry_submitted']);

?>

<!DOCTYPE html>
<html>

<head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-HTYJ6F99BV"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-HTYJ6F99BV');
	</script>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta property="og:url" content="https://everglolhr.laserhairtreatments.in/" />
	<meta property="og:title" content=" Ever Glo Aesthetic Clinic " />
	<meta property="og:site_name" content=" Ever Glo Aesthetic Clinic " />
	<meta property="og:description" content=" Ever Glo Aesthetic Clinic in Chennai" />
	<meta property="og:type" content="landing-page" />
	<meta name="Keywords" content=" laser hair removal, hair removal, smooth skin, waxing alternative, threading alternative, permanent hair removal, painless hair removal, hair reduction, beauty treatment">

	<link rel="icon" type="image/webp" sizes="16x16" href="assets/images/favicon-artes.webp">

	<title> Ever Glo Aesthetic Clinic </title>

	<link rel="stylesheet" type="text/css" href="assets/css/slick.css" />
	<link rel="stylesheet" href="assets/css/slick-theme.css">
	<!-- <link href="assets/css/bootstrap-5.css" rel="stylesheet"> -->
	<link href="assets/css/thankyou.css" rel="stylesheet" type="text/css">
	<link href="assets/css/theme.min.css" rel="stylesheet" type="text/css" />
	<link href="assets/css/style-index.min.css" rel="stylesheet" type="text/css">
	<link href="assets/css/responsive.css" rel="stylesheet" type="text/css">
	<link href="assets/css/privacy.min.css" rel="stylesheet" type="text/css">
</head>

<body>

	<header class="header_area">
		<div class="container-c">
			<nav>
				<a href="index.php" class="logo">
					<img src="assets/images/artes-logo-1.webp" alt="">
				</a>
				<div class="btn-grp">
					<!-- <a href="javascript:void(0);" class="f-btn w-btn-c whats-btn modal-link-wa ">
						<img src="assets/images/whats-up-icon.webp" alt="">
						<span> <span class="brk"> Chat us on </span> WhatsApp </span>
					</a> -->

					<div class="cnt-inf">
						<a href="javascript:void(0);" class="cnt-inf-a modal-link">
							<span class="cnt-inf-icon">
								<img src="assets/images/call-icon-w.webp" alt="">
							</span>
							<span class="cnt-inf-text"> Call Us Now </span>
						</a>
					</div>
				</div>
			</nav>
		</div>
	</header>


	<div id="custom-modal" class="custom-modal custom-modal-call">
		<div class="custom-modal-dialog">
			<div class="custom-modal-content">
				<span class="close-modal close-modal-x">&#x2715</span>
				<div class="custom-modal-body">
					<div class="custom-modal-inner">
						<h3 class="modal-title">One Final Step </h3>
						<div class="call-modal-vec">
							<div class="loading-dots">
								<span class="dot one">.</span>
								<span class="dot two">.</span>
								<span class="dot three">.</span>
								<span class="dot one">.</span>
								<span class="dot two">.</span>
								<span class="dot three">.</span>
								<span class="dot one">.</span>
								<span class="dot two">.</span>
								<span class="dot three">.</span>
								<span class="dot one">.</span>
								<span class="dot two">.</span>
								<span class="dot three">.</span>
							</div>
							<div class="call-modal-vec-img">
								<img src="assets/images/call-modal.webp" alt="">
							</div>
						</div>
						<div class="call-modal-input">
							<div class="call-modal-input-single">
								<h6>+91</h6>
								<input type="text" placeholder="Enter Mobile Number to Call" id="f_call_mobile">
							</div>
							<button href="tel:+919884401282" class="f-btn" id="f_call_btn" data-for=<?= FINAL_CALL_FORM ?>>
								<img src="assets/images/call-icon.webp" alt="">
								<span> Call Now </span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

	<div id="custom-modal" class="custom-modal-wa custom-modal">
		<div class="custom-modal-dialog">
			<div class="custom-modal-content">
				<span class="close-modal close-modal-x">&#x2715</span>
				<div class="custom-modal-body">
					<div class="custom-modal-inner">
						<h3 class="modal-title">One Final Step </h3>
						<div class="call-modal-vec">
							<div class="loading-dots">
								<span class="dot one">.</span>
								<span class="dot two">.</span>
								<span class="dot three">.</span>
								<span class="dot one">.</span>
								<span class="dot two">.</span>
								<span class="dot three">.</span>
								<span class="dot one">.</span>
								<span class="dot two">.</span>
								<span class="dot three">.</span>
								<span class="dot one">.</span>
								<span class="dot two">.</span>
								<span class="dot three">.</span>
							</div>
							<div class="call-modal-vec-img">
								<img src="assets/images/whats-up-icon.webp" alt="">
							</div>
						</div>
						<div class="call-modal-input">
							<div class="call-modal-input-single">
								<h6>+91</h6>
								<input type="text" placeholder=" Enter Mobile Number to Chat " id="f_wa_mobile">
							</div>
							<button href="https://wa.me/+919884401282?text=I would like to enquire about laser treatment " target="_Blank" class="f-btn" id="f_wa_btn" data-for=<?= FINAL_WA_FORM ?>>
								<img src="assets/images/whats-up-icon.webp" alt="">
								<span> Chat on whatsapp </span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

	<div id="custom-modal-auto" class="custom-modal custom-modal-auto custom-modal-b">
		<div class="custom-modal-dialog">
			<div class="custom-modal-content">
				<span class="close-modal-auto close-modal">&#x2715</span>
				<div class="custom-modal-body">
					<div class="modal-header-n">
						<h4>Make Your Appointment</h4>
					</div>
					<div class="modal-body-n">
						<div class="form-body modal-input-n">
							<form action="javascript:void(0);" method="post" name="feedback-form">
								<input type="hidden" placeholder="Name" value="<?= SIMPLE_MODAL_POPUP_APPOINTMENT ?>" id="simple_modal_popup_appointment">
								<div class="input-grp">
									<div class="input-grp-single">
										<input type="text" id="simple_modal_popup_appointment_fname" name="fname" placeholder="First Name">
									</div>
									<div class="input-grp-single">
										<input type="text" id="simple_modal_popup_appointment_lname" name="lname" placeholder="Last Name">
									</div>
								</div>

								<div class="input-grp">
									<div class="input-grp-single">

										<input type="email" id="simple_modal_popup_appointment_email" name="email" placeholder="Email ID">
									</div>
									<div class="input-grp-single">

										<input type="tel" id="simple_modal_popup_appointment_mobile" name="tel" placeholder="Phone Number">
									</div>
								</div>

								<div class="input-grp">
									<textarea id="simple_modal_popup_appointment_message" name="message" placeholder="Your comment here ..."></textarea>
								</div>

								<div class="modal-input-btn-n">
									<span>Free Consultation</span>
									<button id="simple_modal_popup_appointment_btn" type="submit " name="submit" class="f-btn">
										<img src="assets/images/btn-aro.webp" alt="">
										Make an appointment
									</button>
								</div>

							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>