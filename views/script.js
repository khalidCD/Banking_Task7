window.onload = function () {
  const loginForm = document.getElementById("form");
  const customerIdInput = document.getElementById("customer-id");
  const passwordInput = document.getElementById("password");
  const idErrorMsg = document.querySelector(".cust-id-error");
  const passErrorMsg = document.querySelector(".cust-pass-error");

  loginForm.onsubmit = async function (event) {
    event.preventDefault();

    idErrorMsg.style.display = "none";
    passErrorMsg.style.display = "none";

    if (customerIdInput.value.trim() === "") {
      idErrorMsg.textContent = "Please enter your Customer ID";
      idErrorMsg.style.display = "block";
      return;
    }

    const password = passwordInput.value.trim();
    if (password === "") {
      passErrorMsg.textContent = "Please enter your Password";
      passErrorMsg.style.display = "block";
      return;
    } else if (password.length < 8) {
      passErrorMsg.textContent = "Password must be at least 8 characters";
      passErrorMsg.style.display = "block";
      return;
    }

    try {
      //when user clickes login button this send the req
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_id: customerIdInput.value.trim(),
          password: password,
        }),
      });//data send through json format

      var result = await response.json();

      if (result.success) {
        localStorage.setItem("cam", result.customer_id);
        window.location.href = "home.html";
      } else {
        alert(result.message || "Invalid credentials");
      }
    } catch (error) {
      console.log("Error during login:", error);
      alert("Login failed. Please try again later.");
    }
  };
};
