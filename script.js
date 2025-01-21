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

});
