// #navbarSideCollapse, .offcanvas-collapse

export const offcanvasCollapse = (dad, child, toggle = 'open') => {
    document.querySelector(dad, child).addEventListener('click', function () {
      document.querySelector(child).classList.toggle(toggle)
    });
}