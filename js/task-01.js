const elems = document.querySelectorAll("li.item");
console.log("Number of categories:", elems.length);
elems.forEach(function (element) {
  console.log("Category:", element.querySelector("h2").textContent);
  console.log("Elements:", element.querySelectorAll("li").length);
});


