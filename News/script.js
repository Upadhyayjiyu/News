const newsData = {
  sports: [
    { title: "Olympics 2025 Kicks Off", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b", link: "#" },
    { title: "Football League Finals", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2", link: "#" }
  ],
  technology: [
    { title: "AI Revolution in 2025", img: "https://images.unsplash.com/photo-1581091012184-5c7b5ae0cfa4", link: "#" },
    { title: "SpaceX Sets New Records", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", link: "#" }
  ],
  entertainment: [
    { title: "Top Movies of the Year", img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4", link: "#" },
    { title: "Music Festival Highlights", img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2", link: "#" }
  ],
  trending: [
    { title: "Global Stock Market Boom", img: "https://images.unsplash.com/photo-1542228262-3d663b30698d", link: "#" },
    { title: "Climate Change Summit", img: "https://images.unsplash.com/photo-1502303756781-68e4a7a52f3f", link: "#" }
  ]
};

// Render News
function renderNews(sectionId, articles) {
  const container = document.getElementById(sectionId);
  container.innerHTML = "";
  articles.forEach(article => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `
      <img src="${article.img}" alt="${article.title}">
      <div class="news-content">
        <h3>${article.title}</h3>
        <a href="${article.link}" target="_blank">Read More</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Load Sections
renderNews("sports-news", newsData.sports);
renderNews("tech-news", newsData.technology);
renderNews("ent-news", newsData.entertainment);

// Trending Sidebar
const trendingDiv = document.getElementById("trending-news");
newsData.trending.forEach(article => {
  const div = document.createElement("div");
  div.classList.add("news-card");
  div.innerHTML = `
    <img src="${article.img}" alt="${article.title}">
    <div class="news-content">
      <h4>${article.title}</h4>
    </div>
  `;
  trendingDiv.appendChild(div);
});

// Search Function
function searchNews() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  alert("Search results for: " + query);
}

// Dark Mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
