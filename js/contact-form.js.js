document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const notification = document.getElementById('form-notification');
    const notificationMessage = document.getElementById('notification-message');
    const closeNotification = document.getElementById('close-notification');
    const submitButton = form.querySelector('button[type="submit"]');
    const spinner = submitButton.querySelector('.loading-spinner');

    // Show notification
    const showNotification = (message, type) => {
        notificationMessage.textContent = message;
        notification.classList.remove('success', 'error');
        notification.classList.add(type, 'show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000); // Hide after 5 seconds
    };

    // Close notification on click
    closeNotification.addEventListener('click', () => {
        notification.classList.remove('show');
    });

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Show loading spinner
        submitButton.disabled = true;
        spinner.classList.remove('hidden');

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (result.success) {
                showNotification('Mail Sent Successfully!', 'success');
                form.reset(); // Reset form fields
            } else {
                showNotification('Failed to Send Mail. Please Try Again.', 'error');
            }
        } catch (error) {
            showNotification('An Error Occurred. Please Try Again.', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Hide loading spinner
            submitButton.disabled = false;
            spinner.classList.add('hidden');
        }
    });
});