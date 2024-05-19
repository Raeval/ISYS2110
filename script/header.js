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

    const profile = document.getElementById('profile-img');
    const profile_options = document.getElementById('profile-hover');
  
    profile.addEventListener('mouseenter', () => {
        profile_options.style.display = 'flex';
    });
  
    profile.addEventListener('mouseleave', () => {
        profile_options.style.display = 'none';
    });
  
    profile_options.addEventListener('mouseenter', () => {
        profile_options.style.display = 'flex';
    });
  
    profile_options.addEventListener('mouseleave', () => {
        profile_options.style.display = 'none';
    });
});

// document.addEventListener('DOMContentLoaded', (event) => {
//     const profile = document.getElementById('profile');
//     const profile_options = document.getElementById('profile-hover');
  
//     profile.addEventListener('mouseenter', () => {
//         profile_options.style.display = 'flex';
//     });
  
//     profile.addEventListener('mouseleave', () => {
//         profile_options.style.display = 'none';
//     });
  
//     profile_options.addEventListener('mouseenter', () => {
//         profile_options.style.display = 'flex';
//     });
  
//     profile_options.addEventListener('mouseleave', () => {
//         profile_options.style.display = 'none';
//     });
//   });