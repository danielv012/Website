const scriptURL = 'https://script.google.com/macros/s/AKfycbyL9Fwku0o8R4WNdTWy7MvQenQtDNUgONHBLCxYNnhu2tvOjgbdZzUKwdPh4Xp5wLY1pQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
msg.innerHTML = "Sending..."
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){ msg.innerHTML = "" }, 5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})