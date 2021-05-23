window.addEventListener("load", () => {
  const hamButton = document.querySelector(".ham");
  const mainNav = document.querySelector("#navigation");
  const dateFooter = document.querySelector(".date");
  const banner = document.querySelector(".banner");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayWeek = date.getDay();

  dateFooter.innerHTML = `${days[dayWeek]}, ${day} ${months[month]} ${year}`;

  if (dayWeek !== 5) {
    banner.style.display = "none";
  } else {
    banner.style.display = "flex";
  }

  hamButton.addEventListener(
    "click",
    () => {
      mainNav.classList.toggle("responsive");
    },
    false
  );
});