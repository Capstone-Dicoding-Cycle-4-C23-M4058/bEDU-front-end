const About = {
  async render() {
    return `
    <section class="home" id="home">
        <div class="home-text container">
            <h2 class="home-title">About Bedah Edukasi</h2>
        </div>
    </section>
    <section class="about" id="about">
    <article class="about-articel">
        <figure class="about-figure">
          <img src="/img/Icon Bedu .png" alt="Bedu Fact Sheet">
          <figcaption>Logo Bedah Edukasi Juni 2023.</figcaption>
        </figure>
        <div class="about-content">
          <h1 class="about-title">Selamat Datang Di Bedah Edukasi!</h1>
          <p class="about-description">Kami adalah sumber terpercaya untuk informasi dan saran
            terkait pendidikan. Tujuan kami adalah memberikan pemahaman
            yang mendalam tentang berbagai topik Edukasi serta membantu
            anda dalam memperoleh pengetahuan dan keterampilan baru.</p>
        </div>
      </article>
</section>
<section class="profile" id="profile">
    <div class="headline-tentang">
    <p>Profile Developer</p>
    </div>
    <div class="main-card">
        <div class="cards">
          <div class="card">
           <div class="content">
             <div class="img">
              <img src="/img/profile1.png" alt="">
             </div>
             <div class="details">
               <div class="name">Jaka Ashputra</div>
               <div class="job">Frontend Developer</div>
             </div>
             <div class="media-icons">
               <a href="https://www.instagram.com/putra.ash/"><i class='bx bxl-instagram'></i></a>
               <a href="https://www.linkedin.com/in/jaka-ashputra-00632b224/"><i class='bx bxl-linkedin' ></i></a>
               <a href="https://github.com/JakaAshputra"><i class='bx bxl-github'></i></a>
             </div>
           </div>
          </div>
          <div class="card">
           <div class="content">
             <div class="img">
             <img src="/img/profile2.jpg" alt="">
             </div>
             <div class="details">
               <div class="name">Rahadina Budiman Sundara</div>
               <div class="job">Backend Developer</div>
             </div>
             <div class="media-icons">
              <a href="https://www.instagram.com/rahadinabudiman/"><i class='bx bxl-instagram'></i></a>
              <a href="https://www.linkedin.com/in/rahadinabudiman/"><i class='bx bxl-linkedin' ></i></a>
              <a href="https://github.com/rahadinabudiman"><i class='bx bxl-github'></i></a>
             </div>
           </div>
          </div>
          <div class="card">
            <div class="content">
              <div class="img">
               <img src="images/img2.jpg" alt="">
              </div>
              <div class="details">
                <div class="name">AlMalik Ashraf</div>
                <div class="job">UI</div>
              </div>
              <div class="media-icons">
                <a href="#"><i class='bx bxl-instagram'></i></a>
                <a href="#"><i class='bx bxl-linkedin' ></i></a>
                <a href="#"><i class='bx bxl-github'></i></a>
              </div>
            </div>
           </div>
          <div class="card">
           <div class="content">
             <div class="img">
              <img src="images/img3.jpg" alt="">
             </div>
             <div class="details">
               <div class="name">Ferdian Darma Putra</div>
               <div class="job">UX</div>
             </div>
             <div class="media-icons">
                <a href="#"><i class='bx bxl-instagram'></i></a>
                <a href="#"><i class='bx bxl-linkedin' ></i></a>
                <a href="#"><i class='bx bxl-github'></i></a>
             </div>
           </div>
          </div>
        </div>
        </div>
      </div>
</section>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default About;
