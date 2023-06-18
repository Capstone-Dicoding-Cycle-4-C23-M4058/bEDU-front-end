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
      <button type="button" id="deleteArticle" class="btn btn-danger btn-del btn-block mb-4" data-id="${data.article_id}">Delete</button>
      <button type="button" id="editArticle" class="btn btn-danger btn-edit btn-block mb-4" data-id="${data.article_id}">Edit</button>
    </div>
  `;
};

const createArticleForm = () => `
<section class="admin"></section>
<section class="admin">
 <div class="form-container">
  <div class="form-wrapper edit-wrapper">
  <form id="CreateArticleForm" enctype="multipart/form-data">
  <h3>Create Article</h3>
      <div class="form-outline mb-4">
          <label class="form-label" for="title">Judul Artikel</label>
          <input type="text" id="title" class="form-control" />
      </div>

      <div class="form-outline mb-4">
          <label class="form-label" for="abstract">Abstract</label>
          <textarea id="abstract" rows="10" class="form-control"></textarea>
      </div>

    <div class="form-outline mb-4">
        <label class="form-label" for="description">Isi Artikel</label>
        <textarea id="description" rows="10" class="form-control"></textarea>
    </div>

      <div class="form-outline mb-4">
          <label class="form-label" for="label">Label</label>
          <input type="text" id="label" class="form-control" />
      </div>

      <div class="form-outline mb-4 upload-file">
          <label class="form-label" for="thumbnail">Thumbnail Artikel</label>
          <input type="file" id="thumbnail" class="form-control btn-upl" >
      </div>

      <div class="form-outline mb-4 upload-file">
          <label class="form-label" for="image">Image Tambahan Artikel</label>
          <input type="file" id="image" class="form-control btn-upl" />
      </div>

      <pre id="preview"></pre>

      <button type="button" id="CreateArticle" class="btn btn-primary btn-acc btn-block mb-4">Create Article</button>
  </form>
  </div>
  </div>
  </section>
  <section class="admin"></section>
`;

const RegisterAdminForm = () => `
<section class=""></section>
<section class="admin">
<div class="form-container">
  <div class="form-wrapper regist-wrapper">
  <form id="RegisterAdminForm" enctype="multipart/form-data">
  <h3>Register Admin</h3>
  <!-- Nama input -->
  <div class="form-outline mb-4">
      <label class="form-label" for="namaLengkap">Nama Lengkap</label>
      <input type="email" id="namaLengkap" class="form-control" />
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
      <label class="form-label" for="emailInput">Username</label>
      <input type="email" id="username" class="form-control" />
  </div>
  <!-- Email input -->
  <div class="form-outline mb-4">
      <label class="form-label" for="emailInput">Email address</label>
      <input type="email" id="emailInput" class="form-control" />
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
      <label class="form-label" for="passwordInput">Password</label>
      <input type="password" id="passwordInput" class="form-control" />
  </div>

  <div class="form-outline mb-4">
      <label class="form-label" for="passwordInput">Password Confirm</label>
      <input type="password" id="passwordConfirm" class="form-control" />
  </div>

  <button type="button" id="RegisterAdminButton" class="btn btn-primary btn-acc btn-block mb-4">Register Admin</button>
  </form>
  </div>
  </div>
  </section>
  <section class=""></section>
`;

const loginAdminForm = () => `

  <div class="form-container">
      <div class="form-wrapper ">
          <form id="loginAdminForm" enctype="multipart/form-data">
          <h3>Login Admin</h3>
              <div class="form-outline mb-4">
                  <label class="form-label" for="emailInput">Username</label>
                  <input type="email" id="username" class="form-control" />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                  <label class="form-label" for="passwordInput">Password</label>
                  <input type="password" id="passwordInput" class="form-control" />
              </div>

              <button type="button" id="signInBtn" class="btn btn-primary btn-acc btn-block mb-4">Sign in</button>
          </form>
      </div>
  </div>
`;
const RegisterUserForm = () => `
<section class="admin">
<div class="form-container">
  <div class="form-wrapper regist-wrapper">
  <form id="RegisterUserForm" enctype="multipart/form-data">
  <h3>Register User</h3>
  <!-- Nama input -->
  <div class="form-outline mb-4">
      <label class="form-label" for="namaLengkap">Nama Lengkap</label>
      <input type="email" id="namaLengkap" class="form-control" />
  </div>

  <!-- Email input -->
  <div class="form-outline mb-4">
      <label class="form-label" for="emailInput">Username</label>
      <input type="email" id="username" class="form-control" />
  </div>
  <!-- Email input -->
  <div class="form-outline mb-4">
      <label class="form-label" for="emailInput">Email address</label>
      <input type="email" id="emailInput" class="form-control" />
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
      <label class="form-label" for="passwordInput">Password</label>
      <input type="password" id="passwordInput" class="form-control" />
  </div>

  <div class="form-outline mb-4">
      <label class="form-label" for="passwordInput">Password Confirm</label>
      <input type="password" id="passwordConfirm" class="form-control" />
  </div>

  <button type="button" id="RegisterUserButton" class="btn btn-primary btn-acc btn-block mb-4">Register</button>
  </form>
  </div>
  </div>
  </section>

`;

const loginUserForm = () => `
<div class="form-container">
      <div class="form-wrapper">
          <form id="loginUser" enctype="multipart/form-data">
          <h3>Login User</h3>
              <div class="form-outline mb-4">
                  <label class="form-label" for="emailInput">Username</label>
                  <input type="email" id="username" class="form-control" />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                  <label class="form-label" for="passwordInput">Password</label>
                  <input type="password" id="passwordInput" class="form-control" />
              </div>

              <button type="button" id="signInBtn" class="btn btn-primary btn-acc btn-block mb-4">Sign in</button>
              <p> Don't have an account? <a href="/#/register_user">Register</a></p>
          </form>
      </div>
  </div>
`;

const updateArticle = data => `
<section class="admin1"></section>
<section class="admin">
<div class="form-container edit-article">
  <div class="form-wrapper edit-wrapper">
    <form id="UpdateArticleForm" enctype="multipart/form-data">
        <div class="form-outline mb-4">
            <label class="form-label" for="title">Judul Artikel</label>
            <input type="text" id="title" class="form-control" value="${data.title}"/>
        </div>

        <div class="form-outline mb-4">
        <label class="form-label" for="abstract">Abstract</label>
        <textarea id="abstract" rows="10" class="form-control">${data.abstract}</textarea>
    </div>

    <div class="form-outline mb-4">
        <label class="form-label" for="description">Isi Artikel</label>
        <textarea id="description" rows="10" class="form-control">${data.description}</textarea>
    </div>

        <div class="form-outline mb-4">
            <label class="form-label" for="label">Label</label>
            <input type="text" id="label" class="form-control" value="${data.label}"/>
        </div>

        <div class="form-outline mb-4">
        <label class="form-label" for="thumbnail">Thumbnail Artikel</label>
        <img src="${data.thumbnail}" alt="${data.title}" class="post-img">
            <input type="file" id="thumbnail" class="form-control" />
        </div>

        <div class="form-outline mb-4">
        <label class="form-label" for="image">Image Tambahan Artikel</label>
        <img src="${data.image}" alt="${data.title}" class="post-img">
            <input type="file" id="image" class="form-control" />
        </div>

        <button type="button" id="UpdateArticle" class="btn btn-primary btn-acc btn-block mb-4">Update Article</button>
    </form>
  </div>
  </div>
  </section>
  <section class="admin1"></section>
`;

export {
  createTemplateAdminArticle,
  updateArticle,
  RegisterAdminForm,
  loginAdminForm,
  loginUserForm,
  RegisterUserForm,
  createArticleForm,
  createDetailArtichel,
  createTemplateArtichel,
  createSindoArtichel,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
