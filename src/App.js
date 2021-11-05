import { Component } from "react";
import "./App.css";
import DishCard from "./components/DishCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      possibleDishes: [
        {
          name: "pie",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F10%2F15%2Fketo-pumpkin-pie-dcms-large-2000.jpg",
        },
        {
          name: "stuffing",
          image:
            "https://www.howsweeteats.com/wp-content/uploads/2020/11/best-stuffing-12-500x500.jpg",
        },
        {
          name: "roast duck",
          image:
            "https://www.gastrosenses.com/wp-content/uploads/2020/11/Crispy-Whole-Roast-Duck.jpg",
        },
        {
          name: "ceviche",
          image:
            "https://www.muydelish.com/wp-content/uploads/2021/07/ceviche-de-camaron.jpg",
        },
        {
          name: "banana",
          image:
            "https://www.rastaimposta.com/DSN/rastaimpostacom/Commerce/ProductImages/lg1_000033.jpg",
        },
        {
          name: "baked mac n cheese",
          image:
            "https://www.recipetineats.com/wp-content/uploads/2020/11/Baked-Mac-and-Cheese-pull-shot.jpg",
        },
        {
          name: "lumpia",
          image:
            "https://assets.epicurious.com/photos/5fa46a30a56ece573cf73d0f/4:3/w_4416,h_3312,c_limit/Lumpia_HERO_RECIPE_110420_4613.jpg",
        },
        {
          name: "leche flan",
          image:
            "https://amiablefoods.com/wp-content/uploads/leche-flan-500-500x375.jpg",
        },
        {
          name: "creamed spinach",
          image:
            "https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Creamed-Spinach-25-500x500.jpg",
        },
        {
          name: "mashed potatoes",
          image:
            "https://images-gmi-pmc.edge-generalmills.com/1156f4ec-29c8-4cd9-80db-7d4ee330b1d0.jpg",
        },
        {
          name: "collard greens",
          image:
            "https://www.simplyrecipes.com/thmb/S7sx700tVOsYqS4sYcr-47FY1ew=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2005__12__collard-greens-vertical-a-1600-1-370d08b48fa2422ea910e84561450452.jpg",
        },
        {
          name: "green bean casserole",
          image:
            "https://hips.hearstapps.com/delish/assets/17/38/1505763623-green-bean-casserole-148-1.jpg",
        },
        {
          name: "rice and beans",
          image:
            "https://www.liveeatlearn.com/wp-content/uploads/2019/02/spanish-rice-beans-vert.jpg",
        },
        {
          name: "stuffing",
          image:
            "https://www.howsweeteats.com/wp-content/uploads/2020/11/best-stuffing-12-500x500.jpg",
        },
        {
          name: "sweet potato casserole",
          image:
            "https://hips.hearstapps.com/hmg-prod/images/delish-sweet-potato-casserole-marshmallows-horizontal-1530552310.jpg",
        },
      ],
      dishIndex: 0,
      dishesOnTable: [],
    };
  }

  changeDish = () => {
    const { possibleDishes } = this.state;

    this.setState({
      dishIndex: Math.floor(Math.random() * possibleDishes.length)
    })
  };

  addDish = () => {
    const { dishesOnTable, possibleDishes, dishIndex } = this.state;
    const currentDish = possibleDishes[dishIndex];

    this.setState({
      dishesOnTable: [...dishesOnTable, currentDish]
    })
  };

  handleReset = () => {};

  render() {
    const { possibleDishes, dishIndex, dishesOnTable } = this.state;
    const currentDish = possibleDishes[dishIndex];
    console.log({ dishesOnTable });

    return (
      <div className="App">
        <h1>8.2 Potluck Feast 🥧</h1>
        <div>
          <button onClick={this.changeDish}>Change dish</button>
          <button onClick={this.addDish}>Add dish to table</button>
          <button onClick={this.handleReset}>Clear table</button>
          <div>Currently selected dish: {currentDish.name}</div>
          <div>Number of dishes on table: {dishesOnTable.length}</div>
        </div>
      </div>
    );
  }
}

export default App;
