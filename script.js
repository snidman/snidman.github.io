document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");

    document.getElementById("sendEmailButton").addEventListener("click", function() {
        var email = document.getElementById("email").value;
        var result = document.getElementById("result").innerText.split(": ")[1];

        fetch("http://localhost:5000/send_email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                result: result
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while sending the email.");
        });
    });
});
