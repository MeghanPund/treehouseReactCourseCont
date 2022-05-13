import React, { Component } from "react";

class AddPlayerForm extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter a player's name"
        />
      </form>
    );
  }
}

export default AddPlayerForm;