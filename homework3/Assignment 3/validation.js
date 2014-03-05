jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$( "#ContactUs" ).validate({
  rules: {
    field: {
      required: true,
      email: true
    }
  }
});
jQuery.validator.setDefaults({
	debuf: true,
	success: "valid"
});
$( "#createlogon" ).validate({
	rules: {
		field: {
			required: true,
			email: true
		}
	}
);