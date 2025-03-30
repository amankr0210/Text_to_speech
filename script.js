document.getElementById('speakButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;

    if (textInput.trim() === '') {
        alert('Please enter some text to speak.');
        return;
    }

    const speech = new SpeechSynthesisUtterance();
    speech.text = textInput;

    // Optional: Set voice and language
    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // You can change the index to select different voices
    speech.lang = 'en-US'; // Set the language

    // Speak the text
    window.speechSynthesis.speak(speech);
});