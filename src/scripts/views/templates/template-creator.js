import CONFIG from '../../globals/config';

const createDetailArtichel = (data) => `
<section class="post-header">
        <div class="header-content post-container">
            <!-- Title -->
            <h1 class="header-title">${data.title}</h1>
            <!-- Post Image -->
            <img src="${CONFIG.BASE_IMAGE_URL + data.thumbnail}" alt="${data.title}" class="header-img">
        </div>
    </section>
    <!-- Posts -->
    <section class="post-content post-container">
        <p class="post-text">${data.abstract}</p>
        <p class="post-text">${data.description}</p>
    </section>
`;

const createTemplateArtichel = (data) => `
        <div class="post-box">
            <img src="${CONFIG.BASE_IMAGE_URL + data.thumbnail}" alt="${data.title}" class="post-img">
            <h2 class="category">Pendidikan</h2>
            <a href="/#/article/${data.article_id}" class="post-title">
            ${data.title}
            </a>
            <span class="post-date">29 Mei 2023</span>
            <p class="post-description">${data.abstract}</p>
        </div>
`;

export { createDetailArtichel, createTemplateArtichel };
