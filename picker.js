function selectImage(src) {
    // Send the image URL back to the parent window
    window.opener.postMessage(src, window.location.origin);
    // Close the picker window
    window.close();
}
