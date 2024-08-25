const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact_message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_57pibtj', 'template_s3lzllf', '#contact-form', 'CY11LZGOIQGT_j0HA')
    .then(() => {
            contactMessage.textContent = 'Message Sent Successfully';
    
            setTimeout(() => { 
                contactMessage.textContent = '';
            }, 5000);
    
            contactForm.reset();
        },
        (error) => {
            console.error('Error sending message:', error);
            contactMessage.textContent = 'Message Not Sent';
        }
    );
    
}

contactForm.addEventListener('submit',sendEmail)

