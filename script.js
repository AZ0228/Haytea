// Recipe data (you can expand this with more recipes)
const recipes = {
    classic: {
      name: "Classic Boba Tea",
      milk: "150ml",
      tea: "30ml",
      sugar: "20g",
      boba: "60g",
    },
    taro: {
      name: "Taro Milk Tea",
      milk: "200ml",
      tea: "20ml",
      sugar: "30g",
      boba: "50g",
    },
  };
  
// Function to load and display the selected recipe
function loadRecipe(name) {
  const recipeSelect = document.getElementById("recipe-select");
  const recipeDetails = document.getElementById("recipe-details");

  // Clear previous recipe details
  recipeDetails.innerHTML = "";

  if (name !== "") {
    const recipe = recipes[name];

    // Create HTML elements for each recipe detail
    Object.keys(recipe).forEach((key) => {
      const label = document.createElement("label");
      label.textContent = key.charAt(0).toUpperCase() + key.slice(1) + " ";
      
      const detail = document.createElement("span");
      detail.textContent = recipe[key];

      const div = document.createElement("div");
      div.appendChild(label);
      div.appendChild(detail);

      recipeDetails.appendChild(div);
    });
  }
}

function toggleDrop(element){
    let parent = element.parentNode;
    let drop = parent.querySelector('.options');
    if(drop.classList.contains('visible')){
        drop.classList.remove('visible')
    } else {
        drop.classList.add('visible')
    }
}