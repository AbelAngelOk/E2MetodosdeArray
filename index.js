const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*****************************************************/
/***** a)  Las pizzas que tengan un id impar. ********/
/*****************************************************/

const PizzasDeIdImpares = pizzas.filter( (pizza) => {
    return pizza.id % 2 ==! 0
  }
);

const responseA = PizzasDeIdImpares.forEach( pizza => {
  console.log (`La pizza ${pizza.nombre} es el id ${pizza.id}` )
});



/***************************************************************************/
/****** b) Responder: ¿Hay alguna pizza que valga menos de $600? ***********/
/***************************************************************************/

const PizzasMenoresA = pizzas.filter( (pizza) => {
  return pizza.precio < 600
});

const responseB = PizzasMenoresA.forEach( ( pizza => {
      console.log(`La pizza ${pizza.nombre} tiene un precio de ${pizza.precio}`);
  }) 
);

/**************************************************************/
/**** c) El nombre de cada pizza con su respectivo precio. ****/
/**************************************************************/

const listaDePizzas = pizzas.forEach( pizza => { console.log(`Pizza ${pizza.nombre} a tan solo ${pizza.precio}$`) } );

/***********************************************************************************************************/
/****** d) Todos los ingredientes de cada pizza (En cada iteración imprimir                             ****/
/****** los ingredientes de la pizza que se esta recorriendo). Ayuda:                                   ****/
/****** van a tener que realizar dos recorridos, ya que cada pizza                                      ****/
/****** del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes. ****/
/***********************************************************************************************************/

const listaPizzas = pizzas.forEach( pizza => { 
  console.log(`La pizza ${pizza.nombre} tiene los ingredientes:`);
  pizza.ingredientes.forEach( ingrediente => { console.log(ingrediente)});
  
});

