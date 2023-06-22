let selected = '';

// Recipe data (you can expand this with more recipes)


const recipes = {
    a1:{
        name: 'pink lady peach green tea',
        gtea: 250,
        syrup: 'peach 50ml',
        peach: '2 pieces',
        blender: '5 seconds',
    },

    a2:{
        name: 'jasmine green tea',
        jtea: 300,
        syrup: 'jasmine 30ml',
        toppings: 'salted cheese',
    },

    a3:{
        name: 'four seasons',
        tea: 'four seasons 300 5 min',
        sugar: 30
    },

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
function loadRecipe(element,name) {
    const recipeSelect = document.getElementById("recipe-select");
    const recipeDetails = document.getElementById("recipe-details");
    if(selected != ''){
        selected.classList.remove('selected');
    }
    selected = element;
    element.classList.add('selected');
    // Clear previous recipe details
    recipeDetails.innerHTML = "";

    if (name !== "") {
        const recipe = recipes[name];

        // Create HTML elements for each recipe detail
        Object.keys(recipe).forEach((key) => {
            if(key=="name"){
                const heading = document.createElement("b");
                heading.textContent = recipe[key];
                const div = document.createElement("div");
                div.appendChild(heading);
                recipeDetails.appendChild(div);
                div.classList.add('title');
            } else {
                const label = document.createElement("label");
                label.textContent = key + '    ';
    
                const detail = document.createElement("span");
                detail.textContent = recipe[key];
    
                const div = document.createElement("div");
                div.appendChild(label);
                div.appendChild(detail);
                recipeDetails.appendChild(div);
            }

        });
    }
}

function toggleDrop(element) {
    let parent = element.parentNode;
    let drop = parent.querySelector('.options');
    if (drop.classList.contains('visible')) {
        drop.classList.remove('visible')
    } else {
        drop.classList.add('visible')
    }
}