
    $(document).ready(function() {
      $('#contactForm').submit(function(event) {
        event.preventDefault();
        var isValid = validateForm();

        if (isValid) {
          // Form submission logic goes here
          alert('Form submitted successfully!');
          // Reset the form
          $('#contactForm')[0].reset();
        }
      });

      function validateForm() {
        const isValid = true;

        // Reset error messages
        $('.error').html('');

        // Validate name
       const name = $('#name').val();
        if (!name) {
          $('#nameError').html('Please enter your name.');
          isValid = false;
        }

        // Validate email
        const email = $('#email').val();
        if (!email) {
          $('#emailError').html('Please enter your email.');
          isValid = false;
        } else if (!isValidEmail(email)) {
          $('#emailError').html('Please enter a valid email address.');
          isValid = false;
        }

        // Validate message
        const message = $('#message').val();
        if (!message) {
          $('#messageError').html('Please enter your message.');
          isValid = false;
        }

        return isValid;
      }

      function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
      }

      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ruthjoy76@gmail.com",
        Password : "229437CA73913975A10BC385F05AC017C06C",
        To : 'ruthjoy76@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    });
