let selected = '';

// Recipe data (you can expand this with more recipes)


const recipes = {
    a1:{
        name: 'pink lady peach green tea sc',
        gtea: 250,
        peach:50,
        peach: '2 pieces',
        instructions: 'blender 5 seconds',
    },

    a2:{
        name: 'jasmine green tea sc',
        gtea: 300,
        jasmine: 30,
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
        tea: 'see b1',
        toppings: 'grass jelly and pudding',
    },

    b6:{
        name: 'jasmine milk tea',
        tea: 'see b1',
        syrup: 'jasmine 30',
    },

    b7:{
        name: 'milk tea with purple rice & red bean',
        tea: 'see b1',
        toppings: 'purple rice and red bean'
    },

    b8:{
        name: 'milk tea with boba & crystal boba',
        tea: 'see b1',
        toppings: 'boba and crystal boba'
    },

    b8:{
        name: 'pudding milk tea',
        tea: 'see b1',
        toppings: 'egg pudding'
    },

    b10:{
        name: 'cake milk tea',
        tea: 'see b1',
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
        btea: 100,
        sugar: 20,
        taropowder: '1 spoon',
        instructions: 'after whisking, fill shaker completely full with ice, then completely fill with milk, shake, make sure to put fresh taro around cup',
    },

    b15:{
        name: 'happy family',
        instructions: 'either 200 ml b1 or 200 ml coconut milk',
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

    c1:{
        name: 'passion yakult',
        gtea: 300,
        yogurt: 60,
        passion: 40,
        toppings: '1 spoon fresh passion',
    },

    c2:{
        name: 'mango yakult',
        gtea: 300,
        yogurt: 60,
        mango: 40,
        toppings: 'half spoon mango',
    },

    c3:{
        name: 'strawberry yakult',
        gtea: 300,
        yogurt: 60,
        strawberry: 40,
        toppings: 'half spoon mango',
    },

    c4:{
        name: 'kumquat passion yakult',
        gtea: 300,
        yogurt: 60,
        passion: 25,
        kumquat: 25,
        toppings: 'crush kumquat and 1 spoon passion',
    },

    c5:{
        name: 'grapefruit yakult',
        gtea: 300,
        yogurt: 60,
        grapefruit: 40,
        toppings: '1 spoon grapefruit',
    },

    d1:{
        name: 'fruit fusion green tea',
        gtea: 300,
        orange: 20,
        passion: 40,
        sugar: 20,
        toppings: '3 lime, 2 lemon, 1 orange, crush, watermelon, sliced strawberry',

    },

    d2:{
        name: 'grapefruit green tea',
        gtea: 300,
        grapefruit: 50,
        sugar: 20,
        toppings: '1 spoon grapefruit',
    },

    d3:{
        name: 'passion green tea',
        gtea: 300,
        passion: 40,
        sugar: 20,
        toppings: '1 spoon passion',

    },

    d4:{
        name: 'kumquat green tea',
        gtea: 300,
        kumquat: 60,
        sugar: 40,
        toppings: '1 crushed kumquat',

    },

    d5:{
        name: 'watermelon orange green tea',
        gtea: 300,
        orange: 50,
        passion: 40,
        sugar: 20,
        toppings: 'half juiced orange, orange slice, watermelon cube',

    },

    d6:{
        name: 'lychee orange green tea',
        gtea: 300,
        orange: 25,
        lychee: 25,
        sugar: 20,
        toppings: 'half juiced orange',
    },

    d7:{
        name: 'hk style tea',
        hktea: 150,
        water:100,
        sugar: 70,
        toppings: '7 lemon slices',

    },

    d8:{
        name: 'hey lemon tea',
        heylemon: 300,
        sugar: 70,
        instructions: 'in big cup, fill 400 ice, 3 slices lime, 3 slices, lemon, crush, add tea & shake, pour all into cup',
    },


    h1:{
        name: 'mango dreamer slush',
        water: 100,
        sugar: 30,
        mango:50,
        instructions: 'add 1 spoon of ice, 1.5 for large, and 1 piece of mango. after blending, line cup with mango syrup and pour, put mango pieces on top',
    },

    h2:{
        name: 'strawberry lover slush',
        water: 100,
        sugar: 30,
        strawberry: 50,
        instructions: 'add 1 spoon of ice, 1.5 for large, and 2 pieces of strawberry. after blending, line cup with mango syrup and pour, put strawberry syrup on top',
    },

    h3:{
        name: 'lychee grape slush',
        water: 100,
        sugar: 30,
        lychee: 50,
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

    gardenia:{
        name: 'gardenia lime tea',
        ice:400,
        tea: 'gardenia 300 (1 spoon, use hot water and metal cup)',
        sugar: '70',
        instructions: 'crush ice with 6 limes, pour tea in, shake, pour all in cup'
    },


    coconutredbean:{
        name: 'coconut red bean smoothie',
        coconutmilk: 100,
        water: 50,
        sugar: 20,
        redbean: '1.5 spoons',
        coconut: '4 spoons',
        ice: '1 spoon of ice, 1.5 for large',
    },

    matcha:{
        name: 'matcha refill',
        instructions:'first, in blender, tare on scale and pour 400g matcha powder from silver bag, 30g from paper bag, and add 500ml hot water. blend until smooth, meanwhile fill refill container with 1500ml hot water. Once blended, pour blender mixture into refill container and mix well'
    },

    coconutmilk:{
        name: 'coconut milk refill',
        hotwater:1500,
        coconutpowder: 420,
        instructions: 'mix',
    },

    saltedcheese:{
        name: 'salted cheese refill',
        instructions:'in blender, blend till smooth:',
        creamcheese: '1 block',
        hotwater: '100g',
        seasalt: '5g',
        milk: '100g',
        mixerinstructions: 'in mixer, start on lowest setting and move to top setting over the course of 30 seconds, then go down to 4th level for a minute',
        heavycream: '400g',
        cheesepowder: '100g',
        blendermix: 'pour into mixer'

    }
};

// Function to load and display the selected recipe
function loadRecipe(element,name) {
    const recipeSelect = document.getElementById("recipe-select");
    const recipeDetails = document.getElementById("recipe-details");
    if(selected == element){
        selected.classList.remove('selected');
        recipeDetails.innerHTML = "";
        selected = '';
        return;
    }
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
    let arrow = element.querySelector('.down');
    if (drop.classList.contains('visible')) {
        drop.classList.remove('visible')
    } else {
        drop.classList.add('visible')
    }
    if(arrow.classList.contains('up')){
        arrow.classList.remove('up');
    } else {
        arrow.classList.add('up');
    }
}

function toggle(element){
    let parent = element.parentNode.parentNode;
    let number = parent.querySelector('#number');  
    let numbers = number.textContent.split('/');
    let numerator = parseInt(numbers[0]);
    let denominator = parseInt(numbers[1]);
    if(element.classList.contains('selected')){
        element.classList.remove('selected');
        numerator -=1;
    } else {
        element.classList.add('selected');
        numerator +=1;
    }
    if(numerator == denominator){
        let button = parent.querySelector('button');
        button.classList.add('done');
    } else {
        let button = parent.querySelector('button');
        button.classList.remove('done');
    }
    number.textContent = numerator.toString()+'/'+ denominator.toString();
}

let total = 1;

function calculate(){
    let filled = 0;
    let drawer = document.querySelector('.drawer');
    let inputs = drawer.querySelectorAll('input');
    let total = 0;
    let sales = document.querySelector('#cash-sale').value;
    if(sales!=''){
        sales=parseFloat(sales);
        console.log(sales);
        let drop = document.querySelector('#cash-sale').parentNode.parentNode;
        if(!drop.classList.contains('selected')){
            toggle(drop);
        }
    } else {
        sales = 0;
    }

    inputs.forEach((input)=>{
        let parent = input.parentNode;
        let value = parseInt(parent.textContent.slice(0,-1));
        if(input.value != ''){
            let amount = parseInt(input.value);
            total += (value * amount); 
            filled +=1;
            let drop = input.parentNode.parentNode.parentNode.parentNode
            if(!drop.classList.contains('selected')){
                toggle(drop);
            }
        }

    });
    let totalElement = document.querySelector('#total');
    totalElement.textContent = '$' + total.toFixed(2);
    totalElement.style.color = 'var(--accent)';
    let cash = document.querySelector('#cash');
    cash.textContent = 'cash:' + '$'+sales.toFixed(2);
}

function tips(){
    let tip = document.querySelector('.tip');
    let input = parseFloat(tip.querySelector('input').value);
    let total = tip.querySelector('h1');
    input = (input*0.95).toFixed(2);
    total.textContent = '$' + input;
    if(!tip.classList.contains('selected')){ 
        toggle(tip);
    }
    total.style.color = 'var(--accent)';
    let cardTips = document.querySelector('#cardtips');
    cardTips.textContent = 'card tips:' + '$'+input;

}

function addOnline(){
    console.log(document.querySelector('.online').value);
    if(document .querySelector('.online').value == ''){return;}
    let onlineOrders = document.querySelector('#online-orders');
    let online = parseFloat(parseFloat(document.querySelector('.online').value).toFixed(2));
    let div = document.createElement('h2');
    let total = onlineOrders.parentNode.querySelector('#total');
    let totalnum =parseFloat(total.textContent.slice(1));
    console.log(total.textContent.slice(1));
    totalnum += online; 
    console.log(parseFloat(total.textContent.slice(1)));
    div.classList.add('accent');
    div.textContent = online.toFixed(2);
    total.textContent = '$'+totalnum.toFixed(2);
    total.style.color = 'var(--accent)';
    onlineOrders.appendChild(div);
    if(!onlineOrders.parentNode.classList.contains('selected')){
        toggle(onlineOrders.parentNode);
    }
    let onlineOrder = document.querySelector('#onlineorder');
    document.querySelector('.online').value = '';
    onlineOrder.textContent = 'online:' + '$'+totalnum.toFixed(2);
}

function subtractOnline(){
    let onlineOrders = document.querySelector('#online-orders');
    let online = parseFloat(onlineOrders.lastChild.textContent);
    let total = onlineOrders.parentNode.querySelector('#total');
    let totalnum = parseFloat(total.textContent.slice(1))-online;
    total.textContent = '$'+totalnum.toFixed(2);
    onlineOrders.removeChild(onlineOrders.lastChild);
    let onlineOrder = document.querySelector('#onlineorder');
    onlineOrder.textContent = 'online:' +'$'+totalnum.toFixed(2);

}

function date(){
    var currentDate = new Date();
    // Get the individual components of the date
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
    var day = currentDate.getDate();

    // Format the date as a string (optional)
    var formattedDate = month + '/' + day + '/' + year ;

    // Output the current date
    let dates = document.querySelectorAll('#date');
    dates.forEach((date)=>{
        date.innerHTML = formattedDate;
    });
}

function purchase(){
    let purchase = document.querySelector('#shop-purchases');
    let input = parseFloat(purchase.value);
    input = (input).toFixed(2);
    if(!purchase.parentNode.classList.contains('selected')){ 
        toggle(purchase.parentNode);
    }
    let purchases = document.querySelector('#purchases');
    purchases.textContent = 'purchases:' + '$'+input;
}

function calculateTotals(element){
    let totals = document.querySelector('#totals');
    let total = 0;
    let cash = totals.querySelector('#cash');
    let tips = totals.querySelector('#cardtips');
    let onlineorder = totals.querySelector('#onlineorder');
    let purchase = totals.querySelector('#purchases');
    let cashtips = totals.querySelector('#cashtips');
    if(cash.textContent!=''){
        total += parseFloat(cash.textContent.split('$')[1]);
        if(tips.textContent!=''){
            total -= parseFloat(tips.textContent.split('$')[1]);
        }
        if(onlineorder.textContent!=''){
            total -= parseFloat(onlineorder.textContent.split('$')[1]);
        }
        if(purchase.textContent!=''){
            total -= parseFloat(purchase.textContent.split('$')[1]);
        }
        if(cashtips.textContent!=''){
            total -= parseFloat(cashtips.textContent.split('$')[1]);
        }
    }
    let cashsale = document.querySelector('#cashsale');
    cashsale.textContent = 'total: ' + total.toFixed(2);
    if(!element.classList.contains('selected')){ toggle(element); }
    let totalcash = parseInt(document.querySelector('#total').textContent.slice(1));
    let drawerCash = document.querySelector('#drawercash');
    let difference = totalcash-total
    drawerCash.textContent = 'cash:' + '$'+difference.toFixed(2);
    
}

function cashTip(){
    let cashtip = document.querySelector('#cash-tip');
    let cashTipVal = parseInt(cashtip.value);
    let cashTipTotal = document.querySelector('#cashtips');
    cashTipTotal.textContent = 'cash tips: $' + cashTipVal.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    let money = document.querySelector('.moneycontainer');
    if(money){
        let inputs = money.querySelectorAll('input');
        inputs.forEach((input)=>{
            input.addEventListener('input', calculate)
        });
    }

    let purchase1 = document.querySelector('#shop-purchases');
    if(purchase1){
        purchase1.addEventListener('input',purchase);
    }

    let cashsale = document.querySelector('#cash-sale');
    if(cashsale){
        cashsale.addEventListener('input',calculate);
    }

    let tip = document.querySelector('.tip');
    if(tip){
        let rinputs = tip.querySelector('input');
        rinputs.addEventListener('input',tips)
        date();
    }
    let totals = document.querySelector('#totals');
    totals.addEventListener('change',calculateTotals);
    let cashtip = document.querySelector('#cash-tip');
    if(cashtip){
        cashtip.addEventListener('input',cashTip);
    }
});