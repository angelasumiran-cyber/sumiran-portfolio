function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const selected = document.getElementById(sectionId);
  if (selected) {
    selected.style.display = 'block';
  }
}