document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    // Show the button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            backToTopButton.classList.remove('hidden');
        } else {
            backToTopButton.classList.add('hidden');
        }
    });

    ;
    // Scroll back to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log('Button clicked!');
    });
});


function validateForm() {
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    
    if (!name || !email || !mobile || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    } 
    alert("Form submitted successfully!");
}
