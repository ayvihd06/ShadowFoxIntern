document.addEventListener('DOMContentLoaded', function() {
    const cheerButton = document.getElementById('cheer-button');
    const cheerMessage = document.getElementById('cheer-message');
    const backToTopButton = document.getElementById('back-to-top');
  
    // Show or hide the cheer message
    cheerButton.addEventListener('click', function() {
      if (cheerMessage.style.display === 'none' || cheerMessage.style.display === '') {
        cheerMessage.style.display = 'block';
        setTimeout(function() {
          cheerMessage.style.display = 'none';
        }, 3000); // Message visible for 3 seconds
      } else {
        cheerMessage.style.display = 'none';
      }
    });
  
    // Show or hide the back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    // Smooth scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  