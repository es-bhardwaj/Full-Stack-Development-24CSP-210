let btn = document.getElementById("btn");
let job = document.getElementById("job");
const myForm = document.getElementById("form");

btn.addEventListener("click", function (event) {
    event.preventDefault();

    let name = document.getElementById("company-name").value;
    let position = document.getElementById("job-position").value;
    let location = document.getElementById("job-location").value;
    let desc = document.getElementById("job-description").value;
    let salary = document.getElementById("salary-range").value;

    let div = document.createElement("div");
    div.classList.add("cart-job");

    div.innerHTML = `
        <h3 class="title">${position}</h3>
        <h4 class="company">${name}</h4>
        <p class="location">${location}</p>
        <p class="description">
            ${desc}<br>
            <strong>CTC:</strong> ₹${salary} per annum
        </p>
    `;

    job.appendChild(div);

    myForm.reset();
});