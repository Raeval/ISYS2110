document.addEventListener('DOMContentLoaded', (event) => {
  const language = document.getElementById('language');
  const languageOptions = document.getElementById('language-options');

  language.addEventListener('mouseenter', () => {
      languageOptions.style.display = 'flex';
  });

  language.addEventListener('mouseleave', () => {
      languageOptions.style.display = 'none';
  });

  languageOptions.addEventListener('mouseenter', () => {
      languageOptions.style.display = 'flex';
  });

  languageOptions.addEventListener('mouseleave', () => {
      languageOptions.style.display = 'none';
  });
});