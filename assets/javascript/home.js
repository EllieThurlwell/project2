// load buttons for category choices and set innerHTML from CATEGORIES array
let categoryHtml = '';
CATEGORIES.forEach((eachCategory) => {
    categoryHtml += `<a href="quiz.html?category=${eachCategory.id}" class="btn">
    <span class="cat-btn" id="${eachCategory.id}">
        <p>${eachCategory.name}</p>
    </span>
  </a>`;
});
document.getElementById('category-container').innerHTML = categoryHtml;
