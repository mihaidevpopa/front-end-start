const store = {
    consoles: {
        inventory: 10,
        cost: 100
    },
    games: {
        invetory: 25,
        cost: 5
    }
};



let order = {
    items: [[consoles, 1], [games, 4]]
};

function checkStock(itemsInOrder) {
    const itemsArray = itemsInOrder.items;
    let inStock = itemsArray.every(item => store.item[0].inventory >=  )
}