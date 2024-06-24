function validate() {
    const email = document.querySelector('#contact-info p:nth-child(1)').innerText;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email.split(': ')[1])) {
        alert('Invalid email format!');
    }
}
