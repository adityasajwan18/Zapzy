document.getElementById('join-room-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Get the room code from the input
    const roomCode = document.getElementById('room-code').value;

    // Simulate a student ID (replace with real user data in production)
    const studentId = 1;

    try {
        // API call to join the room
        const response = await fetch('http://localhost:5000/api/attendance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomCode, studentId }),
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = `Success: ${result.message}`;
            document.getElementById('message').style.color = 'green';
        } else {
            throw new Error(result.message || 'Something went wrong');
        }
    } catch (error) {
        document.getElementById('message').innerText = `Error: ${error.message}`;
        document.getElementById('message').style.color = 'red';
    }

    // Clear the input field
    document.getElementById('room-code').value = '';
    // Highlight option on hover
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('mouseover', () => {
        option.style.transform = 'scale(1.1)';
        option.style.transition = 'transform 0.2s';
    });

    option.addEventListener('mouseout', () => {
        option.style.transform = 'scale(1)';
    });

    option.addEventListener('click', () => {
        console.log(`${option.textContent.trim()} selected.`);
    });
});
// Common login validation script
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const id = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    // Validate fields
    if (!id) {
        alert('Please enter your ID.');
        return;
    }
    if (!password) {
        alert('Please enter your password.');
        return;
    }

    // Simulate successful login
    alert('Login successful!');
    console.log(`ID: ${id}, Password: ${password}`);

    // Redirect to dashboard (dummy URL for now)
    // window.location.href = '/dashboard.html';
});
document.getElementById('create-room-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const roomName = document.getElementById('room-name').value.trim();
    const roomCode = document.getElementById('room-code').value.trim();
    const subject = document.getElementById('subject').value.trim();

    if (!roomName || !roomCode || !subject) {
        alert('Please fill in all fields.');
        return;
    }

    // Add a success animation
    const formContainer = document.querySelector('.form-container');
    formContainer.style.animation = 'zoomOut 1s ease-in-out';
    setTimeout(() => {
        alert(`Room "${roomName}" created successfully! Room Code: ${roomCode}, Subject: ${subject}`);
        console.log({ roomName, roomCode, subject });

        // Optionally, clear the form
        this.reset();

        // Reset animation after success
        formContainer.style.animation = 'zoomIn 1.5s ease-in-out';
    }, 1000);
});

/* Add animation keyframes for zoomOut in CSS */
// Dummy student data
const students = [
    { id: 'S001', name: 'John Doe', status: 'Present' },
    { id: 'S002', name: 'Jane Smith', status: 'Absent' },
    { id: 'S003', name: 'Alex Johnson', status: 'Present' },
    { id: 'S004', name: 'Chris Lee', status: 'Absent' }
];

// Populate the table dynamically
function populateAttendanceTable() {
    const tableBody = document.querySelector('#attendance-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    students.forEach(student => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td class="${student.status === 'Present' ? 'present' : 'absent'}">${student.status}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Simulate real-time updates
function updateAttendance() {
    // Simulate a status change for a random student
    const randomIndex = Math.floor(Math.random() * students.length);
    students[randomIndex].status = students[randomIndex].status === 'Present' ? 'Absent' : 'Present';

    // Re-populate the table with updated data
    populateAttendanceTable();
}

// Initial population of the table
populateAttendanceTable();

// Simulate updates every 5 seconds
setInterval(updateAttendance, 5000);

});
