const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, { drawer, button });
    });
  },

  _toggleDrawer(event, { drawer, button }) {
    event.stopPropagation();
    drawer.classList.toggle('active');
    button.classList.toggle('active');
  },

  _closeDrawer(event, { drawer, button }) {
    event.stopPropagation();
    button.classList.remove('active');
    drawer.classList.remove('active');
  },
};

export default DrawerInitiator;