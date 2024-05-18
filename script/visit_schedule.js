// Form initialization
document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("apt-date");
    const today = new Date();

    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');

    const todayDate = `${year}-${month}-${day}`;

    dateInput.value = todayDate;
    dateInput.min = todayDate;

    const twoWeeksFromToday = new Date();
    twoWeeksFromToday.setDate(today.getDate() + 14);

    year = twoWeeksFromToday.getFullYear();
    month = String(twoWeeksFromToday.getMonth() + 1).padStart(2, '0');
    day = String(twoWeeksFromToday.getDate()).padStart(2, '0');

    const maxDate = `${year}-${month}-${day}`;
    dateInput.max = maxDate;
});

// Appointment submission
document.addEventListener("DOMContentLoaded", () => {
    function formatTime(date) {
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    }

    const timeSlots = document.querySelectorAll(".time-slot");
    const selectedTimeInput = document.getElementById("selected-time");
    const form = document.getElementById("apt-form");
    const aptTypeButtons = document.querySelectorAll(".apt-options");
    const aptTypeInput = document.getElementById("apt-type");

    timeSlots.forEach(slot => {
        slot.addEventListener("click", () => {
            document.querySelector(".choose-time .check").style.display = 'inline-block';
            document.querySelector(".choose-time .circle").style.display = 'none';
            timeSlots.forEach(s => s.classList.remove("selected"));
            slot.classList.add("selected");
            selectedTimeInput.value = slot.dataset.time;
        });
    });

    aptTypeButtons.forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".choose-type .check").style.display = 'inline-block';
            document.querySelector(".choose-type .circle").style.display = 'none';
            aptTypeButtons.forEach(b => b.classList.remove("selected"));
            button.classList.add("selected");
            aptTypeInput.value = button.textContent.trim();
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!selectedTimeInput.value || !aptTypeInput.value) {
            // Prevent form submission if no time is selected
            alert("Please select appointment type and time before submitting.");
        }
        else {
            document.querySelector('.apt-schedule').style.display = 'none';
            document.querySelector(".details .check").style.display = 'inline-block';
            document.querySelector(".details .circle").style.display = 'none';
            document.querySelector('.apt-confirm-container').style.display = 'block';

            const formData = new FormData(form);
            const formDataObject = Object.fromEntries(formData.entries());
            const data = document.getElementById('data');

            // Time
            const selectedTime = selectedTimeInput.value;
            const startTime = new Date(`2000-01-01T${selectedTime}`);
            const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);

            // Format times for display
            const formattedStartTime = formatTime(startTime);
            const formattedEndTime = formatTime(endTime);
            data.innerHTML = `
                <p><span class="key">Volunteer name &emsp;&nbsp;: </span>Mary Newport</p>
                <p><span class="key">Appointment Type :</span> ${aptTypeInput.value}</p>
                <p><span class="key">
                Time &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;:</span>
                ${formattedStartTime} - ${formattedEndTime}
                </p>
            `
        }
    });
});

// Order finish
document.addEventListener("DOMContentLoaded", () => {
    const confirmForm = document.getElementById('apt-confirm');
    confirmForm.addEventListener("submit", (event) => {
        event.preventDefault();
        document.querySelector('.apt-confirm-container').style.display = 'none';
        document.querySelector('.order-finish').style.display = 'flex';
        document.querySelector('.confirm-apt .circle').style.display = 'none';
        document.querySelector(".confirm-apt .check").style.display = 'inline-block';
    });
});