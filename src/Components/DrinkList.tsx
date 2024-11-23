const DrinksMenu = () => {
  const DrinksList = [
    { name: "Espresso", roast: "Dark Roast", img: "src/assets/espresso.png" },
    {
      name: "Ice Vanilla Latte",
      roast: "Dark Roast",
      img: "src/assets/latte.png",
    },
    { name: "Macchiato", roast: "Light Roast", img: "src/assets/mecciato.png" },
    { name: "Americano", roast: "Dark Roast", img: "src/assets/americano.png" },
    {
      name: "Iced Coffee",
      roast: "Medium Roast",
      img: "src/assets/ilish_coffe.png",
    },
    {
      name: "Cream Latte",
      roast: "Medium Roast",
      img: "src/assets/latte_with_ceam.png",
    },
    { name: "Espresso", roast: "Dark Roast", img: "src/assets/espresso.png" },
    {
      name: "Ice Vanilla Latte",
      roast: "Dark Roast",
      img: "src/assets/latte.png",
    },
    { name: "Macchiato", roast: "Light Roast", img: "src/assets/mecciato.png" },
    { name: "Americano", roast: "Dark Roast", img: "src/assets/americano.png" },
    {
      name: "Iced Coffee",
      roast: "Medium Roast",
      img: "src/assets/ilish_coffe.png",
    },
    {
      name: "Cream Latte",
      roast: "Medium Roast",
      img: "src/assets/latte_with_ceam.png",
    },
  ];
  return (
    <section className="DrinksList">
      {DrinksList.map((Drink) => (
        <div
          className="DrinkCard"
          style={{ backgroundImage: `url(${Drink.img})` }}
        >
          <section className="DrinkCardInfo">
            <img
              src="src\assets\beans33.png"
              alt="Coffee Bean"
              className="CoffeeIcon"
            />
            <div className="Info">
              <p className="DrinkName">{Drink.name}</p>
              <p className="RoastType">{Drink.roast}</p>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
};

export default DrinksMenu;
