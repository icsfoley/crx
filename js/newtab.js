const bookmarks = document.querySelectorAll('.bookmark');
for (const bookmark of bookmarks) {
  bookmark.onkeydown = (ev) => {
    if (ev.code === 'Space') {
      bookmark.click();
    }
  };
}
