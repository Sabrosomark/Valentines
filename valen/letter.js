function openEnvelope() {
  const envelope = document.getElementById("envelope");
  const letterView = document.getElementById("letter-view");

  envelope.classList.add("open");

  setTimeout(() => {
    letterView.classList.add("active");
  }, 1400);
}

function closeLetter() {
  const envelope = document.getElementById("envelope");
  const letterView = document.getElementById("letter-view");

  // Hide letter modal
  letterView.classList.remove("active");

  // Close the envelope again
  envelope.classList.remove("open");
}
