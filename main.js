function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }
    
    alert('Form submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
    return true;
}

  
   gsap.fromTo('.info-card', {y:100 , opacity:0}, {y:0,opacity:1 , duration:7 })

    


