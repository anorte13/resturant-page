import { homeBody } from "./home";

export function menu() {
    const container = document.createElement("div");
    container.id = 'menu-container';
    body.appendChild(container);

    const header = document.createElement("div");
    header.id = "menu-header";
    header.innerHTML = 'Drink Menu'
    container.appendChild(header);

    const menuContainer = document.createElement("div");
    menuContainer.id = 'menu-item-container';
    container.appendChild(menuContainer);

    for (let i = 0; i < 5; i++) {
        const menuItem = document.createElement('div');
        const itemName = document.createElement('div');
        const itemPrice = document.createElement('div');
        const itemDescription = document.createElement('div');

        itemName.id = 'item' + i;
        itemPrice.id = 'item-price' + i;
        itemDescription.id = 'item-des' + i;

        menuItem.id = 'menu-items' + i;
        menuItem.classList.add('menu-item');
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(itemDescription);
        menuContainer.appendChild(menuItem);
    }
    const item1 = document.getElementById('item0').textContent = 'House Coffee';
    const itemDes1 = document.getElementById('item-des0').textContent = 'Our orignal house blend, changes monthly.'
    const itemPrice1 = document.getElementById('item-price0').textContent = 'S 3.99 | M 4.49| L 4.99';

    const item2 = document.getElementById('item1').textContent = 'Espresso';
    const itemDes2 = document.getElementById('item-des1').textContent = 'Organic espresso drinks inlcude either almond, coconut or oat milk'
    const itemPrice2 = document.getElementById('item-price1').textContent = 'S 2.95 | M 3.49| L 4.49';
     
    const item3 = document.getElementById('item2').textContent = 'Latte'
    const itemDes3 = document.getElementById('item-des2').textContent = 'Choose between either Caramel, Vanilla or Mexican Chocolate';
    const itemPrice3 = document.getElementById('item-price2').textContent = 'S 3.95 | M 4.49| L 5.49';

    const item4 = document.getElementById('item3').textContent = 'Macchiato';
    const itemDes4 = document.getElementById('item-des3').textContent = 'Iced or hot, choose between Caramel, Vanilla, Creme Brulee or Hazelnut';
    const itemPrice4 = document.getElementById('item-price3').textContent = 'S 3.99 | M 4.99| L 5.69';

   
    const item5 = document.getElementById('item4').textContent = 'Hot Teas';
    const itemDes5 = document.getElementById('item-des4').textContent = 'Iced or hot, choose between Dragonfruit, Green, Herbal, Hibiscus, or Earl Grey';
    const itemPrice5 = document.getElementById('item-price4').textContent = 'S 2.99 | M 3.99| L 4.29';

    const header2 = document.createElement("div");
    header2.id = "menu-header";
    header2.innerHTML = 'Food Menu'
    container.appendChild(header2);

    const menuContainer2 = document.createElement("div");
    menuContainer2.id = 'menu-item-container';
    container.appendChild(menuContainer2);

    for (let i = 0; i < 6; i++) {
        const menuItem = document.createElement('div');
        const itemName = document.createElement('div');
        const itemPrice = document.createElement('div');
        const itemDescription = document.createElement('div');

        itemName.id = 'item' + 5 + i;
        itemPrice.id = 'item-price' + 5 + i;
        itemDescription.id = 'item-des' + 5 + i;

        menuItem.id = 'menu-items' + 5 + i;
        menuItem.classList.add('menu-item');
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(itemDescription);
        menuContainer2.appendChild(menuItem);
    }  
    const item6 = document.getElementById('item50').textContent = 'The Halibut';
    const itemDes6 = document.getElementById('item-des50').textContent = 'Toasted bagel topped with cream cheese, smoked salmon, tomato, red onion, and capers.';
    const itemPrice6 = document.getElementById('item-price50').textContent = '10.95'

    const item7 = document.getElementById('item51').textContent = 'Mozzarella Sandwhich';
    const itemDes7 = document.getElementById('item-des51').textContent = 'Slices of fresh mozzarella cheese, basil, and tomato, with our tangy balsamic vinaigrette.';
    const itemPrice7 = document.getElementById('item-price51').textContent = '7.95'

    const item8 = document.getElementById('item52').textContent = 'Oatmeal';
    const itemDes8 = document.getElementById('item-des52').textContent = 'Berries, bananna, toasted almonds, apples, walnuts, raisins and chia seeds.';
    const itemPrice8 = document.getElementById('item-price52').textContent = '8.95'

    const item9 = document.getElementById('item53').textContent = 'Egg Scramble';
    const itemDes9 = document.getElementById('item-des53').textContent = 'Scrambled eggs, spinach, brown rice, bacon / ham / veggie sasuage';
    const itemPrice9 = document.getElementById('item-price53').textContent = '5.95'

    const item10 = document.getElementById('item54').textContent = 'Turkey Pesto';
    const itemDes10 = document.getElementById('item-des54').textContent = 'House pesto, oven-roasted turkey breast, jack cheese, sliced red onion, tomato, mixed greens, and mayo';
    const itemPrice10 = document.getElementById('item-price54').textContent = '9.25'

    const item11 = document.getElementById('item55').textContent = 'Veggie Girl';
    const itemDes11 = document.getElementById('item-des55').textContent = 'Baked tofu, house-made olive tapenade, sliced roasted red pepper, and arugula with our tangy balsamic vinaigrette';
    const itemPrice11 = document.getElementById('item-price55').textContent = '8.25'


}