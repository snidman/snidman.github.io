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

    document.getElementById("combinationsButton").addEventListener("click", function() {
        var number1 = parseInt(document.getElementById("number1").value);
        var number2 = parseInt(document.getElementById("number2").value);
        var combinations = generateCombinations(number1, number2);

        document.getElementById("combinationsResult").innerText = "Combinations: " + combinations.join(", ");
    });

    function generateCombinations(number1, number2) {
        var combinations = [];
        for (var i = 1; i <= number1; i++) {
            for (var j = i + 1; j <= number2; j++) {
                combinations.push(i + "" + j);
            }
        }
        return combinations;
    }
});
