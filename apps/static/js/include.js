document.addEventListener("DOMContentLoaded", function () {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(element => {
      const file = element.getAttribute('data-include');
      fetch(file)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${file}`);
          }
          return response.text();
        })
        .then(data => {
          element.innerHTML = data;
        })
        .catch(error => {
          console.error('Error loading include:', error);
          element.innerHTML = `<p>Error loading content: ${file}</p>`;
        });
    });
  });
  