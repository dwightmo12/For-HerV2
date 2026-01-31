let noClickCount = 0;

function moveButton() {
    const noBtn = document.getElementById("noBtn");
    
    // Calculate random positions
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    
    noClickCount++;

    // After 5 attempts, trigger email and refresh
    if (noClickCount >= 5) {
        answerNoFinal();
    }
}

function answerNoFinal() {
    const email = "dwight701moore@gmail.com";
    const subject = "Valentine Update";
    const body = "She tried to click No 5 times... removing the option now.";
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    localStorage.setItem("rejectedOnce", "true");
    
    setTimeout(() => {
        alert("Nice try! But you're stuck with me.");
        location.reload();
    }, 500);
}

function answerYes() {
    // Tyler Childers - All Your'n
    window.open("https://youtu.be/NfbEuyMAstg?si=Kq3hfGxOccpNs-ns", "_blank");
}

function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; 
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 5000);
}

window.onload = function() {
    // If she already failed 5 times, don't even show the No button
    if (localStorage.getItem("rejectedOnce") === "true") {
        document.getElementById("noBtn").style.display = "none";
    }
    setInterval(createHeart, 300);
}