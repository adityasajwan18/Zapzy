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
});
