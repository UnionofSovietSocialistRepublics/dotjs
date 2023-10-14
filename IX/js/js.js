function getUserInformation() {
    const firstName = document.getElementById("name").value;
    localStorage.setItem("firstName", firstName);
  }
  
  document.getElementById("yourName").innerHTML =
    localStorage.getItem("firstName");
  document.getElementById("way2").innerHTML = window.location.search;