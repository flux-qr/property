function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const budget = document.getElementById("budget").value;
  const ptype = document.getElementById("ptype").value;
  const permission = document.getElementById("permission").checked;

  if (!permission) {
    alert("You must give permission to proceed.");
    return false;
  }

  // This is where data is captured
  const lead = {
    name,
    phone,
    budget,
    ptype,
    consent: true,
    datetime: new Date().toLocaleString()
  };

  console.log("Lead Saved:", lead);

  document.getElementById("form-status").innerHTML =
    "Thank you! Your enquiry has been submitted.";

  event.target.reset();
  return false;
}
