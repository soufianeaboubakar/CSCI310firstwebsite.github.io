function openTab(evt, tabName) {
  const tabs = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-button");

  // Hide all tab contents
  tabs.forEach(tab => {
    tab.classList.remove("active", "animate-in");
  });

  // Remove active class from all buttons
  buttons.forEach(btn => btn.classList.remove("active"));

  // Show the selected tab
  const panel = document.getElementById(tabName);
  if (panel) {
    panel.classList.add("active");

    // Force reflow to restart animation
    void panel.offsetWidth;

    panel.classList.add("animate-in");
  }

  // Mark the clicked tab as active
  if (evt) evt.currentTarget.classList.add("active");
}
