// This file contains the JavaScript code for the portfolio website.
// It handles loading the JSON data and populating the portfolio items.

document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/portfolio.json')
        .then(response => response.json())
        .then(data => {
            const portfolioContainer = document.getElementById('portfolio');
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                const projectImage = document.createElement('img');
                projectImage.src = project.image;
                projectImage.alt = project.title;

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = project.title;

                const projectDescription = document.createElement('p');
                projectDescription.textContent = project.description;

                const projectLink = document.createElement('a');
                projectLink.href = project.link;
                projectLink.textContent = 'View Project';
                projectLink.target = '_blank';

                projectElement.appendChild(projectImage);
                projectElement.appendChild(projectTitle);
                projectElement.appendChild(projectDescription);
                projectElement.appendChild(projectLink);
                portfolioContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error loading portfolio data:', error));
});