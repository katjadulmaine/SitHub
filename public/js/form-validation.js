$(function() {
  $("form[name='parents']").validate({
    rules: {
      zipCode: "required",
      daySelected: "required"
    },

    messages: {
      zipCode: "Please enter your zipcode",
      daySelected: "Please select a day of the week"
    },

    submitHandler: function() {
      form.submit();
    }
  });
});

$(function() {
  $("form[name='sitters']").validate({
    rules: {
      firstNameSitter: "required",
      lastNameSitter: "required",
      zipcodeSitter: "required",
      emailSitter: {
        required: true,
        email: true
      },
      passwordSitter: {
        required: true,
        minLength: 5
      },
      picSitter: "required",
      daySitter: "required"
    },

    messages: {
      firstNameSitter: "Please enter your first name",
      lastNameSitter: "Please enter your last name",
      zipcodeSitter: "Please enter your zipcode",
      emailSitter: "Please enter your email",
      passwordSitter: "Please enter a password of 5 or more characters",
      picSitter: "required",
      daySitter: "required"
    }
  });
});
