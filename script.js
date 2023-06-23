let selected = '';

// Recipe data (you can expand this with more recipes)


const recipes = {
    a1:{
        name: 'pink lady peach green tea sc',
        gtea: 250,
        syrup: 'peach 50ml',
        peach: '2 pieces',
        instructions: 'blender 5 seconds',
    },

    a2:{
        name: 'jasmine green tea sc',
        jtea: 300,
        syrup: 'jasmine 30ml',
        toppings: 'salted cheese',
    },

    a3:{
        name: 'four seasons sc',
        tea: 'four seasons 300 5 min',
        sugar: 30,
        toppings: 'salted cheese',
    },

    a4:{
        name: 'oolong sc',
        oolongtea: 300,
        sugar: 40,
        toppings: 'salted cheese',
    },

    a5:{
        name: 'alishan green tea sc',
        alishantea: 300,
        sugar: 30,
        toppings: 'salted cheese',
    },

    a6:{
        name: 'high mountain sc',
        highmountain: 300,
        sugar: 35,
        toppings: 'salted cheese',
    },

    b1:{
        name: 'signature milk tea',
        btea: 200,
        sugar: 25,
        milk: '1 scoop',
    },

    b2:{
        name: 'matcha ice cream',
        matcha: '150 or over "hay tea logo"',
        sugar: 20,
        instructions: 'measure matcha and mix in sugar, put 2 scoops of ice cream at bottom, fill with ice, pour matcha, fill to top with milk',
    },

    b3:{
        name: 'mango coconut milk',
        coconutmilk: 200,
        sugar: 25,
        toppings: 'mango bits',
    },

    b4:{
        name: 'coffee milk tea',
        coffee: '150 or over "hay tea logo"',
        instructions: 'measure coffee, fill with ice, pour coffee, fill to top with milki',
    },

    b5:{
        name: 'milk tea with pudding and grass jelly',
        btea: 200,
        sugar: 25,
        toppings: 'grass jelly and pudding',
    },

    b6:{
        name: 'jasmine milk tea',
        jtea: 200,
        sugar: 25,
        syrup: 'jasmine 30',
    },

    b10:{
        name: 'cake milk tea',
        mtea: 200,
        sugar: 25,
        instructions: 'cream around the cup and on top of the tea, put brown sugar on top, use metal around the cup and torch, to turn on the torch, rotate knob left and press trigger, use from far away and make sure all sugar is melted',
    },

    b11:{
        name: 'hk style milk tea',
        hktea: 150,
        sugar: 30,
        evaporatedmilk: 100,
    },

    b12:{
        name: 'thai milk tea',
        thai: 200,
        sugar: 50,
        instructions: 'fill with ice, thai tea until hay tea logo is covered, fill to top with half n half',
    },

    b13:{
        name: 'taro milk tea',
        hwater: 100,
        sugar: 20,
        taropowder: '1 spoon',
        instructions: 'after whisking, fill shaker completely full with ice, then completely fill with milk, shake, make sure to put fresh taro around cup',
    },

    b15:{
        name: 'happy family',
        instructions: 'either 200 ml milktea or 200 ml coconut milk',
    },

    b16:{
        name: 'brown sugar milk tea',
        instructions: 'brown sugar ring around cup, 30ml heavy cream on top'
    },
    
    b17:{
        name: 'high mountain milk tea',
        hmtea: 200,
        sugar: 25,
        mtpowder: '1 spoon',
    },

    b18:{
        name: "oolong milk tea",
        oolongtea: 200,
        sugar: 25,
        mtpowder: '1 spoon',
    },

    b19:{
        name: 'four seasons milk tea',
        fourseasontea: 200,
        sugar: 25,
        mtpowder: '1 spoon',
    },

    h1:{
        name: 'mango dreamer slush',
        water: 100,
        sugar: 30,
        syrup: "mango 50",
        instructions: 'add 1 spoon of ice, 1.5 for large, and 1 piece of mango. after blending, line cup with mango syrup and pour, put mango pieces on top',
    },

    h2:{
        name: 'strawberry lover slush',
        water: 100,
        sugar: 30,
        syrup: "strawberry 50",
        instructions: 'add 1 spoon of ice, 1.5 for large, and 2 pieces of strawberry. after blending, line cup with mango syrup and pour, put strawberry syrup on top',
    },

    h3:{
        name: 'lychee grape slush',
        water: 100,
        sugar: 30,
        syrup: "lychee 50",
        instructions: 'add 1 spoon of ice, 1.5 for large, and 5 pieces of grape',
    },

    h4:{
        name: 'watermelon slush',
        sugar: 50,
        instructions: 'add 1 spoon of ice, 1.5 for large, and 6 pieces of watermelon.',
    },

    h6:{
        name: 'oreo smoothie',
        btea: 100,
        heavycream: 150,
        sugar: 50,
        instructions: 'add 1 spoon of ice, 1.5 for large, and 5 pieces of oreo',
    },

    h7:{
        name: 'taro smoothie',
        hotwater: 100,
        heavycream: 150,
        sugar: 20,
        taropowder: "1 spoon",
        instructions: 'add 1 spoon of ice, 1.5 for large',
    },

    h8:{
        name: 'avocado smoothie',
        water: 50,
        heavycream: 150,
        sugar: 50,
        instructions: 'add 1 spoon of ice, 1.5 for large, and half an avocado (whole small avocado)',
    },

    h9:{
        name: 'mocha frap',
        coffee: 150,
        heavycream: 150,
        sugar: 20,
        instructions: 'add 1 spoon of ice, 1.5 for large',
    },

    h10:{
        name: 'tiramisu smoothie',
        water: 50,
        heavycream: 150,
        sugar: 20,
        tiramisupowder: '6 spoons',
        instructions: 'add 1 spoon of ice, 1.5 for large',
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