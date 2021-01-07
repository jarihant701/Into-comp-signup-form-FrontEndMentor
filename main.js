function checkForm() {
  var Fname = document.forms["Form"]["Fname"];
  var Lname = document.forms["Form"]["Lname"];
  var email = document.forms["Form"]["email"];
  var pass = document.forms["Form"]["pass"];
  if (
    Fname.value == null ||
    Fname.value == "" ||
    Lname.value == null ||
    Lname.value == "" ||
    email.value == null ||
    email.value == "" ||
    pass.value == null ||
    pass.value == "" ||
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    if (Fname.value == null || Fname.value == "") {
      Fname.classList.add("error");
      document.getElementById("FnameError").style.display = "block";
    } else {
      Fname.classList.remove("error");
      document.getElementById("FnameError").style.display = "none";
    }
    if (Lname.value == null || Lname.value == "") {
      Lname.classList.add("error");
      document.getElementById("LnameError").style.display = "block";
    } else {
      Lname.classList.remove("error");
      document.getElementById("LnameError").style.display = "none";
    }
    if (email.value == null || email.value == "") {
      email.classList.add("error");
      document.getElementById("EmailError").style.display = "block";
    } else if (
      email.value != "" ||
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email.value
      )
    ) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email.value
        )
      ) {
        email.classList.remove("error");
        document.getElementById("EmailErrorValid").style.display = "none";
        document.getElementById("EmailError").style.display = "none";
      } else {
        email.classList.add("error");
        document.getElementById("EmailErrorValid").style.display = "block";
        email.style.color = "red";
      }
    } else {
      email.classList.remove("error");
      document.getElementById("EmailError").style.display = "none";
    }
    if (pass.value == null || pass.value == "") {
      pass.classList.add("error");
      document.getElementById("PassError").style.display = "block";
    } else {
      pass.classList.remove("error");
      document.getElementById("PassError").style.display = "none";
    }
    return false;
  }
}
