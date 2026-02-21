let btn = document.getElementById("btn");
let job = document.getElementById("job");
const myForm = document.getElementById("form");
let searchInput = document.getElementById("search-job");

let editMode = false;
let editElement = null;

btn.addEventListener("click", (event) => {
    event.preventDefault();

    let name = document.getElementById("company-name").value;
    let position = document.getElementById("job-position").value;
    let location = document.getElementById("job-location").value;
    let desc = document.getElementById("job-description").value;
    let salary = document.getElementById("salary-range").value;

    if (editMode) {
        editElement.querySelector(".title").innerText = position;
        editElement.querySelector(".company").innerText = name;
        editElement.querySelector(".location").innerText = location;
        editElement.querySelector(".description").innerHTML =
            `${desc}<br><strong>CTC:</strong> ₹${salary} per annum`;

        editMode = false;
        editElement = null;
        btn.innerText = "Publish Job";
    } else {
        let div = document.createElement("div");
        div.classList.add("cart-job");

        div.innerHTML = `
            <h3 class="title">${position}</h3>
            <h4 class="company">${name}</h4>
            <p class="location">${location}</p>
            <p class="description">${desc}<br><strong>CTC:</strong> ₹${salary} per annum</p>
            <button class="update-btn">Update</button>
            <button class="delete-btn">Delete</button>
        `;

        job.appendChild(div);
    }

    myForm.reset();
});

job.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("update-btn")) {
        editElement = e.target.parentElement;

        document.getElementById("job-position").value =
            editElement.querySelector(".title").innerText;

        document.getElementById("company-name").value =
            editElement.querySelector(".company").innerText;

        document.getElementById("job-location").value =
            editElement.querySelector(".location").innerText;

        let fullDesc = editElement.querySelector(".description").innerText;
        document.getElementById("job-description").value =
            fullDesc.split("CTC:")[0].trim();

        editMode = true;
        btn.innerText = "Update Job";
    }
});

searchInput.addEventListener("keyup", function () {
    let filter = searchInput.value.toLowerCase();
    let jobs = document.querySelectorAll(".cart-job");

    jobs.forEach(function (item) {
        let title = item.querySelector(".title").innerText.toLowerCase();

        if (title.includes(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});