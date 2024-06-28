let firstDate = document.querySelector(".first-date");
let secondDate = document.querySelector(".second-date");
let checkBtn = document.querySelector(".btn");
let dateOutput = document.querySelector(".dateOutput");

checkBtn.addEventListener("click", () => {
  let firstDateVal = firstDate.value;
  let secondDateVal = secondDate.value;
  let dateOne = new Date(firstDateVal);
  let dateTwo = new Date(secondDateVal);
  // console.log(dateOne.getTime());
  if (firstDateVal === "" || secondDateVal === "") {
    dateOutput.style.display = "block";
    dateOutput.innerHTML = "Please select a valid date";
    window.setTimeout(function () {
      dateOutput.style.display = "none";
    }, 4000);
  } else {
    let daysTimeDiff = dateOne.getTime() - dateTwo.getTime();
    let daysDiff = Math.abs(daysTimeDiff / (1000 * 3600 * 24));
    dateOutput.style.display = "block";
    dateOutput.innerHTML = `Difference between the two dates is <span>${daysDiff}</span> days`;
    window.setTimeout(function () {
      dateOutput.style.display = "none";
    }, 4000);
  }
});
