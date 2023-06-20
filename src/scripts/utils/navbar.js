/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
import Cookie from './cookie';

const NavbarEdited = {
    updateNavBtn() {
        const bEDUCookie = Cookie.getCookieValue('bEDUCookie');
        const parsedToken = Cookie.parseJwtPayload(bEDUCookie);
        const navBtn = document.getElementById("nav-btn4");
        const home = document.getElementById("nav-btn");

        const currentRoute = window.location.hash.substring(2);

        if (!parsedToken || parsedToken.role === 'Admin') {
            // eslint-disable-next-line no-constant-condition
            if (currentRoute === 'admin' || currentRoute === 'create_article' || currentRoute === 'profile_admin') {
                navBtn.innerHTML = "Logout";
                home.href = "/#/admin";
                navBtn.href = "/#/admin";

                // Cek apakah elemen "nav-btn5" sudah ada sebelumnya
                let createArticleBtn = document.getElementById("nav-btn5");
                if (!createArticleBtn) {
                    createArticleBtn = document.createElement("a");
                    createArticleBtn.href = "/#/create_article";
                    createArticleBtn.className = "nav-btn";
                    createArticleBtn.id = "nav-btn5";
                    createArticleBtn.innerHTML = "Create Article";
                    home.parentNode.insertBefore(createArticleBtn, home.nextSibling);
                }

                let profileButton = document.getElementById("nav-btn6");
                if (!profileButton) {
                    profileButton = document.createElement("a");
                    profileButton.href = "/#/profile_admin";
                    profileButton.className = "nav-btn";
                    profileButton.id = "nav-btn6";
                    profileButton.innerHTML = "Profile";
                    home.parentNode.insertBefore(profileButton, createArticleBtn.nextSibling);
                }

                const bookmarkBtn = document.getElementById("nav-btn2");
                if (bookmarkBtn) {
                    bookmarkBtn.parentNode.removeChild(bookmarkBtn);
                }

                const aboutBtn = document.getElementById("nav-btn3");
                if (aboutBtn) {
                    aboutBtn.parentNode.removeChild(aboutBtn);
                }
            } else {
                navBtn.innerHTML = "Login";

                // Hapus elemen "nav-btn5" jika ada
                const createArticleBtn = document.getElementById("nav-btn5");
                if (createArticleBtn) {
                    createArticleBtn.parentNode.removeChild(createArticleBtn);
                }
            }
        } else {
            navBtn.innerHTML = "Logout";

            // Hapus elemen "nav-btn5" jika ada
            const createArticleBtn = document.getElementById("nav-btn5");
            if (createArticleBtn) {
                createArticleBtn.parentNode.removeChild(createArticleBtn);
            }

            let aboutButton = document.getElementById("nav-btn3");
            let profileButton = document.getElementById("nav-btn6");
            if (!profileButton) {
                profileButton = document.createElement("a");
                profileButton.href = "/#/profile_user";
                profileButton.className = "nav-btn";
                profileButton.id = "nav-btn6";
                profileButton.innerHTML = "Profile";
                aboutButton.parentNode.insertBefore(profileButton, aboutButton.nextSibling);
            }
        }
    },
};

NavbarEdited.updateNavBtn(); // Panggil fungsi saat halaman dimuat

// Tambahkan event listener untuk menangani perubahan URL saat halaman diperbarui
window.addEventListener("hashchange", () => {
    NavbarEdited.updateNavBtn();
});
window.addEventListener("pageshow", () => {
    NavbarEdited.updateNavBtn();
});

export default NavbarEdited;
