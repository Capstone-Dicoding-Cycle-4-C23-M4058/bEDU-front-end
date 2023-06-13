import CONFIG from '../../globals/config';

const createSindoArtichel = (data) => {
  const jsonString = `{"pubDate": "${data.pubDate}"}`;
  const jsonObject = JSON.parse(jsonString);
  const createdAt = jsonObject.pubDate;
  const tanggal = createdAt.substring(0, 10);
  const tanggalAwal = tanggal;
  const Newtanggal = new Date(tanggalAwal);
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const tanggalFormat = Newtanggal.toLocaleDateString('id-ID', options);
  return `
    <div class="post-box">
        <img src="${data.thumbnail}" alt="${data.title}" class="post-img">
        <h2 class="category">SINDO News</h2>
        <a href="${data.link}" class="post-title">
        ${data.title}
        </a>
        <span class="post-date">${tanggalFormat}</span>
        <p class="post-description">${data.description}</p>
    </div>
`;
};

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

const createTemplateArtichel = (data) => {
  const jsonString = `{"created_at": "${data.created_at}"}`;
  const jsonObject = JSON.parse(jsonString);
  const createdAt = jsonObject.created_at;
  const tanggal = createdAt.substring(0, 10);
  const tanggalAwal = tanggal;
  const Newtanggal = new Date(tanggalAwal);
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const tanggalFormat = Newtanggal.toLocaleDateString('id-ID', options);

  return `
      <div class="post-box">
        <img src="${CONFIG.BASE_IMAGE_URL + data.thumbnail}" alt="${data.title}" class="post-img">
        <h2 class="category">${data.label}</h2>
        <a href="/#/article/${data.article_id}" class="post-title">
          ${data.title}
        </a>
        <span class="post-date">${tanggalFormat}</span>
        <p class="post-description">${data.abstract}</p>
      </div>
    `;
};

export {
  createDetailArtichel,
  createTemplateArtichel,
  createSindoArtichel,
};
