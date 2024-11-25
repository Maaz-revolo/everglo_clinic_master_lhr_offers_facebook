$(document).ready(function() {

    $("#quick_appointment_btn").click(function(e) {
        // e.preventDefault();
        var email_type = $("#quick_appointment").val();
        var fields = [{
                id: "quick_appointment_name",
                message: "Please enter your name."
            },
            {
                id: "quick_appointment_mobile",
                message: "Please enter a valid mobile number.",
                validationFunction: isValidMobile
            }
            
        ];

        // Validate form fields
        if (!validateForm(fields)) {
            return;
        }

        var name = $("#quick_appointment_name").val();
        var mobile = $("#quick_appointment_mobile").val();
        // Gather form data

        var originalBtnText = $(this).text();
        // Perform AJAX request
        $.ajax({
            url: "send_email.php",
            method: "POST",
            data: {
                name: name,
                mobile: mobile,
                email_type: email_type
            },
            dataType: "json",
            beforeSend: function() {
                $("#quick_appointment_btn").prop('disabled', true);
                $("#quick_appointment_btn").text("Submitting...");
            },
            success: function(response) {
                if (response.success) {
                    alert(response.message); // Show success message
                    window.location.href = 'thank-you.php';
                } else {
                    alert("Error: " + response.message); // Show error message
                }
            },
            error: function() {
                alert("Error submitting form.");
            },
            complete: function() {
                $("#quick_appointment_btn").prop('disabled', false);
                $("#quick_appointment_btn").text(originalBtnText);
            }
        });
    });

    $("#footer_appointment_btn").click(function(e) {
        // e.preventDefault();
        var email_type = $("#footer_appointment").val();
        var fields = [{
                id: "footer_appointment_fname",
                message: "Please enter your first name."
            },
            {
                id: "footer_appointment_lname",
                message: "Please enter your last name."
            },
            {
                id: "footer_appointment_email",
                message: "Please enter a valid Email.",
                validationFunction: isValidEmail
            },
            {
                id: "footer_appointment_mobile",
                message: "Please enter a valid mobile number.",
                validationFunction: isValidMobile
            }
        ];

        // Validate form fields
        if (!validateForm(fields)) {
            return;
        }

        var firstName = $("#footer_appointment_fname").val();
        var lastName = $("#footer_appointment_lname").val();
        var email = $("#footer_appointment_email").val();
        var mobile = $("#footer_appointment_mobile").val();
        var message = $("#footer_appointment_message").val();
        // Gather form data

        var originalBtnText = $(this).text();

        // Perform AJAX request
        $.ajax({
            url: "send_email.php",
            method: "POST",
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile,
                message: message,
                email_type: email_type
            },
            dataType: "json",
            beforeSend: function() {
                $("#footer_appointment_btn").prop('disabled', true);
                $("#footer_appointment_btn").text("Submitting...");
            },
            success: function(response) {
                if (response.success) {
                    alert(response.message); // Show success message
                    window.location.href = 'thank-you.php';
                } else {
                    alert("Error: " + response.message); // Show error message
                }
            },
            error: function() {
                alert("Error submitting form.");
            },
            complete: function() {
                $("#footer_appointment_btn").prop('disabled', false);
                $("#footer_appointment_btn").text(originalBtnText);
            }
        });
    });

    $("#simple_modal_popup_appointment_btn").click(function(e) {
        // e.preventDefault();
        var email_type = $("#simple_modal_popup_appointment").val();
        var fields = [{
                id: "simple_modal_popup_appointment_fname",
                message: "Please enter your first name."
            },
            {
                id: "simple_modal_popup_appointment_lname",
                message: "Please enter your last name."
            },
            {
                id: "simple_modal_popup_appointment_email",
                message: "Please enter a valid Email.",
                validationFunction: isValidEmail
            },
            {
                id: "simple_modal_popup_appointment_mobile",
                message: "Please enter a valid mobile number.",
                validationFunction: isValidMobile
            }
        ];

        // Validate form fields
        if (!validateForm(fields)) {
            return;
        }

        var firstName = $("#simple_modal_popup_appointment_fname").val();
        var lastName = $("#simple_modal_popup_appointment_lname").val();
        var email = $("#simple_modal_popup_appointment_email").val();
        var mobile = $("#simple_modal_popup_appointment_mobile").val();
        var message = $("#simple_modal_popup_appointment_message").val();
        // Gather form data

        var originalBtnText = $(this).text();

        // Perform AJAX request
        $.ajax({
            url: "send_email.php",
            method: "POST",
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile,
                message: message,
                email_type: email_type
            },
            dataType: "json",
            beforeSend: function() {
                $("#simple_modal_popup_appointment_btn").prop('disabled', true);
                $("#simple_modal_popup_appointment_btn").text("Submitting...");
            },
            success: function(response) {
                if (response.success) {
                    alert(response.message); // Show success message
                    window.location.href = 'thank-you.php';
                } else {
                    alert("Error: " + response.message); // Show error message
                }
            },
            error: function() {
                alert("Error submitting form.");
            },
            complete: function() {
                $("#simple_modal_popup_appointment_btn").prop('disabled', false);
                $("#simple_modal_popup_appointment_btn").text(originalBtnText);
            }
        });
    });

    $("#f_call_btn").click(function (e) {
        // e.preventDefault();
        // e.stopPropagation();
        var email_type = $(this).data('for');
        var fields = [
            {
                id: "f_call_mobile",
                message: "Please enter a valid mobile number.",
                validationFunction: isValidMobile
            }

        ];

        // Validate form fields
        if (!validateForm(fields)) {
            return;
        }

        var mobile = $("#f_call_mobile").val();

        // Gather form data

        var originalBtnText = $(this).text();
        var linkHref = $(this).attr('href');
        // Perform AJAX request
        $.ajax({
            url: "send_email.php",
            method: "POST",
            data: {
                mobile: mobile,
                email_type: email_type
            },
            dataType: "json",
            beforeSend: function () {
                $("#f_call_btn").prop('disabled', true);
                $("#f_call_btn").text("Redirecting...");
            },
            success: function (response) {
                if (response.success) {
                    // window.open(linkHref, '_blank');
                    window.location.href = linkHref;
                } else {
                    alert("Error: " + response.message); // Show error message
                }
            },
            error: function () {
                alert("Error submitting form.");
            },
            complete: function () {
                $("#f_call_btn").prop('disabled', false);
                $("#f_call_btn").text(originalBtnText);
            }
        });
    });

    $("#f_wa_btn").click(function (e) {
        // e.preventDefault();
        // e.stopPropagation();

        var email_type = $(this).data('for');
        var fields = [
            {
                id: "f_wa_mobile",
                message: "Please enter a valid mobile number.",
                validationFunction: isValidMobile
            }

        ];

        // Validate form fields
        if (!validateForm(fields)) {
            return;
        }

        var mobile = $("#f_wa_mobile").val();

        // Gather form data

        var originalBtnText = $(this).text();
        var linkHref = $(this).attr('href');
        window.open(linkHref, '_blank');
        // Perform AJAX request
        $.ajax({
            url: "send_email.php",
            method: "POST",
            data: {
                mobile: mobile,
                email_type: email_type
            },
            dataType: "json",
            beforeSend: function () {
                $("#f_wa_btn").prop('disabled', true);
                $("#f_wa_btn").text("Redirecting...");
            },
            success: function (response) {
                if (response.success) {

                    // window.open(linkHref, '_blank');
                    // window.location.href = linkHref;
                } else {
                    alert("Error: " + response.message); // Show error message
                }
            },
            error: function () {
                alert("Error submitting form.");
            },
            complete: function () {
                $("#f_wa_btn").prop('disabled', false);
                $("#f_wa_btn").text(originalBtnText);
            }
        });
    });

    function validateForm(fields) {
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            var value = $("#" + field.id).val();
            $("#" + field.id).next(".validation-message").remove();

            if (value.trim() === "") {
                displayValidationMessage(field.id, field.message);
                return false;
            }

            if (field.validationFunction && !field.validationFunction(value)) {
                displayValidationMessage(field.id, field.message);
                return false;
            }
        }

        return true;
    }

    function isValidMobile(mobile) {
        // Mobile number validation regex (10 digits)
        var mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
    }

    function isValidEmail(email) {
        // Basic email validation using regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayValidationMessage(fieldId, message) {
        $("#" + fieldId).after('<span class="validation-message" style="color:red; font-size:12px; margin-top:2px; line-height:0;">' + message + '</span>');
    }

     var clinics = {
            'Pune': ['Baner', 'Karve Road', 'Koregaon Park'],
            'Jaipur': ['Bapu Nagar'] 
        };

        function populateClinics(cityDropdown, clinicsData) {
            var selectedCity = $(cityDropdown).val();
            var clinicDropdown = $(cityDropdown).closest('form').find('.clinic_dropdown');
            var clinicOptions = clinicsData[selectedCity] || [];

            $(clinicDropdown).html('<option value="" selected=""> Select Clinic </option>'); 

            $.each(clinicOptions, function(index, value) {
                $(clinicDropdown).append('<option value="' + value + '">' + value + '</option>');
            });

            // $(clinicDropdown).append('<option value="Others">Others</option>');
        }

        $('.city_dropdown').change(function() {
            console.log($(this).val())
            populateClinics(this, clinics);
        });
});