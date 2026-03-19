const activities = [
    { name: "Complete React Tutorial", description: "Learn the basics of React.", status: "Pending" },
    { name: "Write a blog post", description: "Write about JavaScript.", status: "Pending" },
    { name: "Complete assignment", description: "Finish the HTML/CSS assignment.", status: "Pending" },
    { name: "Read a chapter of JavaScript Book", description: "Read the first chapter of JavaScript book.", status: "Pending" }
];

let completedCount = 0;

function updateProgress() {
    const progressSummary = document.getElementById("progress-summary");
    progressSummary.textContent = `${completedCount} out of ${activities.length} activities completed`;
}

function markAsCompleted(index) {
    if (activities[index].status === "Pending") {
        activities[index].status = "Completed";
        completedCount++;
        renderActivities();
        updateProgress();
    }
}

function renderActivities() {
    const activityList = document.getElementById("activity-list");
    activityList.innerHTML = "";  // Clear the list before re-rendering

    activities.forEach((activity, index) => {
        const activityElement = document.createElement("div");
        activityElement.classList.add("activity-item");

        activityElement.innerHTML = `
            <div>
                <strong>${activity.name}</strong><br>
                <small>${activity.description}</small><br>
                <em>Status: ${activity.status}</em>
            </div>
            <button onclick="markAsCompleted(${index})" ${activity.status === 'Completed' ? 'disabled' : ''}>
                ${activity.status === 'Completed' ? 'Completed' : 'Mark as Completed'}
            </button>
        `;

        activityList.appendChild(activityElement);
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Initialize the page
renderActivities();
updateProgress();
