function openPicker() {
    // Open the picker.html in a new window
    window.open('picker.html', 'Image Picker', 'height=600,width=800');
}

// Function to receive message from picker window
window.addEventListener('message', function (event) {
    // Check origin for security reasons
    if (event.origin !== window.location.origin) return;

    // Set the image URL to the input box
    const imageUrlInput = document.getElementById('imageUrl');
    imageUrlInput.value = event.data;
}, false);
