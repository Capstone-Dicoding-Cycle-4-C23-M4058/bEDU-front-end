const createSindoArtichel = data => {
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

const createDetailArtichel = data => `
<section class="post-header">
        <div class="header-content post-container">
            <!-- Title -->
            <h1 class="header-title">${data.title}</h1>
            <!-- Post Image -->
            <img src="${data.thumbnail}" alt="${data.title}" class="header-img">
        </div>
</section>
<section></section>
    <!-- Posts -->
    <section class="post-content post-container ">
      <p class="post-text">${data.abstract}</p>
      <p class="post-text">${data.description}</p>
    </section>
`;

const createTemplateArtichel = data => {
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
        <img src="${data.thumbnail}" alt="${data.title}" class="post-img">
        <h2 class="category">${data.label}</h2>
        <a href="/#/article/${data.article_id}" class="post-title">
          ${data.title}
        </a>
        <span class="post-date">${tanggalFormat}</span>
        <p class="post-description">${data.abstract}</p>
      </div>
    `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
  <i class='bx bx-bookmark' ></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
  <i class='bx bxs-bookmark' ></i>
  </button>
`;

const createTemplateAdminArticle = data => {
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
      <img src="${data.thumbnail}" alt="${data.title}" class="post-img">
      <h2 class="category">Pendidikan</h2>
      <a href="/#/edit_article/${data.article_id}" class="post-title">
        ${data.title}
      </a>
      <span class="post-date">${tanggalFormat}</span>
      <p class="post-description">${data.abstract}</p>
      <button type="button" id="deleteArticle" class="btn btn-danger btn-block mb-4" data-id="${data.article_id}">Delete Article</button>
      <button type="button" id="editArticle" class="btn btn-danger btn-block mb-4" data-id="${data.article_id}">Edit Article</button>
    </div>
  `;
};

const createArticleForm = () => `
 <div class="form-container">
  <div class="form-wrapper">
  <form id="CreateArticleForm" enctype="multipart/form-data">
      <div class="form-outline mb-4">
          <input type="text" id="title" class="form-control" />
          <label class="form-label" for="title">Judul Artikel</label>
      </div>

      <div class="form-outline mb-4">
          <input type="text" id="abstract" class="form-control" />
          <label class="form-label" for="abstract">Abstract</label>
      </div>

      <div class="form-outline mb-4">
          <input type="text" id="description" class="form-control" />
          <label class="form-label" for="description">Isi Artikel</label>
      </div>

      <div class="form-outline mb-4">
          <input type="text" id="label" class="form-control" />
          <label class="form-label" for="label">Label</label>
      </div>

      <div class="form-outline mb-4">
          <input type="file" id="thumbnail" class="form-control" />
          <label class="form-label" for="thumbnail">Thumbnail Artikel</label>
      </div>

      <div class="form-outline mb-4">
          <input type="file" id="image" class="form-control" />
          <label class="form-label" for="image">Image Tambahan Artikel</label>
      </div>

      <button type="button" id="CreateArticle" class="btn btn-primary btn-block mb-4">Create Article</button>
  </form>
  </div>
  </div>
`;

const RegisterAdminForm = () => `
<div class="form-container">
  <div class="form-wrapper">
  <form id="RegisterAdminForm" enctype="multipart/form-data">
  <!-- Nama input -->
  <div class="form-outline mb-4">
      <input type="email" id="namaLengkap" class="form-control" />
      <label class="form-label" for="namaLengkap">Nama Lengkap</label>
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
      <input type="email" id="username" class="form-control" />
      <label class="form-label" for="emailInput">Username</label>
  </div>
  <!-- Email input -->
  <div class="form-outline mb-4">
      <input type="email" id="emailInput" class="form-control" />
      <label class="form-label" for="emailInput">Email address</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
      <input type="password" id="passwordInput" class="form-control" />
      <label class="form-label" for="passwordInput">Password</label>
  </div>

  <div class="form-outline mb-4">
      <input type="password" id="passwordConfirm" class="form-control" />
      <label class="form-label" for="passwordInput">Password Confirm</label>
  </div>

  <button type="button" id="RegisterAdminButton" class="btn btn-primary btn-block mb-4">Register Admin</button>
  </form>
  </div>
  </div>
`;

const loginAdminForm = () => `
  <div class="form-container">
      <div class="form-wrapper">
          <form id="loginAdminForm" enctype="multipart/form-data">
              <div class="form-outline mb-4">
                  <input type="email" id="username" class="form-control" />
                  <label class="form-label" for="emailInput">Username</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                  <input type="password" id="passwordInput" class="form-control" />
                  <label class="form-label" for="passwordInput">Password</label>
              </div>

              <button type="button" id="signInBtn" class="btn btn-primary btn-block mb-4">Sign in</button>
          </form>
      </div>
  </div>
`;

const updateArticle = data => `
<div class="form-container">
  <div class="form-wrapper">
  <form id="UpdateArticleForm" enctype="multipart/form-data">
      <div class="form-outline mb-4">
          <input type="text" id="title" class="form-control" value="${data.title}"/>
          <label class="form-label" for="title">Judul Artikel</label>
      </div>

      <div class="form-outline mb-4">
          <input type="text" id="abstract" class="form-control" value="${data.abstract}"/>
          <label class="form-label" for="abstract">Abstract</label>
      </div>

      <div class="form-outline mb-4">
          <input type="text" id="description" class="form-control" value="${data.description}"/>
          <label class="form-label" for="description">Isi Artikel</label>
      </div>

      <div class="form-outline mb-4">
          <input type="text" id="label" class="form-control" value="${data.label}"/>
          <label class="form-label" for="label">Label</label>
      </div>

      <div class="form-outline mb-4">
      <img src="${data.thumbnail}" alt="${data.title}" class="post-img">
          <input type="file" id="thumbnail" class="form-control" />
          <label class="form-label" for="thumbnail">Thumbnail Artikel</label>
      </div>

      <div class="form-outline mb-4">
      <img src="${data.image}" alt="${data.title}" class="post-img">
          <input type="file" id="image" class="form-control" />
          <label class="form-label" for="image">Image Tambahan Artikel</label>
      </div>

      <button type="button" id="UpdateArticle" class="btn btn-primary btn-block mb-4">Update Article</button>
  </form>
  </div>
  </div>
`;

export {
  createTemplateAdminArticle,
  updateArticle,
  RegisterAdminForm,
  loginAdminForm,
  createArticleForm,
  createDetailArtichel,
  createTemplateArtichel,
  createSindoArtichel,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
