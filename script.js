const daysContainer = document.querySelector(".days");
const monthElement = document.querySelector(".month");
const liveTimeElement = document.querySelector(".live-time");
const todayBtn = document.querySelector(".today-btn");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup-content .details");
const closeBtn = document.querySelector(".popup .close-btn");

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

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar() {
    daysContainer.innerHTML = "";
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

    monthElement.innerHTML = `${months[currentMonth]} ${currentYear}`;

    for (let i = 1; i <= lastDate; i++) {
        const day = document.createElement("div");
        day.className = "day";
        if (
            i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ) {
            day.classList.add("today");
        }
        day.innerText = i;
        daysContainer.appendChild(day);
    }
}

function updateTime() {
    const now = new Date();
    liveTimeElement.innerText = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

todayBtn.addEventListener("click", () => {
    currentMonth = new Date().getMonth();
    currentYear = new Date().getFullYear();
    renderCalendar();
});

renderCalendar();
