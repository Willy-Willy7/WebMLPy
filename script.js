document.getElementById('predictBtn').addEventListener('click', async () => {
    const feature1 = document.getElementById('feature1').value;
    const feature2 = document.getElementById('feature2').value;

    // Validate input
    if (feature1 === '' || feature2 === '') {
        alert('Please enter values for both features.');
        return;
    }

    const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            features: [parseFloat(feature1), parseFloat(feature2)]
        }),
    });

    if (!response.ok) {
        alert('Error: Unable to get prediction.');
        return;
    }

    const data = await response.json();
    document.getElementById('result').innerText = `Prediction: ${data.prediction}`;
});
