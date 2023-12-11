const allCategories = document.querySelectorAll(".item");
console.log("Number of categories:", allCategories.length);

const newArray = [...allCategories];
newArray.forEach(element => {
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length);
});