/* ================= CONTACT FORM HANDLING ================= */

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = form.querySelector("input[type='text']").value;
        let email = form.querySelector("input[type='email']").value;
        let message = form.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill all fields!");
            return;
        }

        alert(`Thanks ${name}! Your message has been sent 👍`);

        form.reset();
    });
}