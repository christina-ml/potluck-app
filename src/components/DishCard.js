import { Component } from "react";

class DishCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { image, name } = this.props.dish;

    return (
    <div className="dish-card">
      <div>dish name: {name}</div>
      <img src={image} alt="dish" />
    </div>
    )
  }
}

export default DishCard;
