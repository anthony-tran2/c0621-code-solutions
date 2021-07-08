var contactForm = document.querySelector('#contact-form');
var formData = {
  name: contactForm.elements.name.value,
  email: contactForm.elements.email.value,
  message: contactForm.elements.message.value
};

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  formData.name = contactForm.elements.name.value;
  formData.email = contactForm.elements.email.value;
  formData.message = contactForm.elements.message.value;
  console.log('formData:', formData);
  contactForm.reset();
});
