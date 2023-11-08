const listItem = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listItem.length}`);

listItem.forEach(categorie=>{
    const categorieName = categorie.querySelector("h2")
    console.log(`Category: ${categorieName.textContent}`)
    const categorieList = categorie.querySelectorAll("li")
    console.log(`Elements: ${categorieList.length}` );
    }
)
    