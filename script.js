const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");

sidebarClose.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

const menuItems = document.querySelectorAll(".item a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const content = document.querySelector(".main");
    const contentId = item.getAttribute("href");

    // Do not display the #
    content.innerHTML = `
      <h1>${contentId.slice(1)}</h1>
      <p>This is the content for ${contentId.slice(1)}.</p>
    `;

    const noTags = content.textContent.replace(/<[^>]+>/g, "");

    content.innerHTML = noTags;
  });
});
