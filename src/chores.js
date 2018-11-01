import React from 'react';


export default class Chores extends React.Component {
  render() {
    const chores = [
      "cleaning the bathroom sink - upstairs",
      "cleaning the bathroom sink - downstairs",
      "dusting the family room",
      "sweeping the kithchen floor",
    ]
    const motivations = [
      "It's your lucky day because you'll be",
      "Man oh, Manischewitz! Thanks for",
      "Girl, keep it real. Don't lose steam while",
      "It's a good day for"
    ]
    const chore = chores[Math.floor(Math.random() * chores.length)];
    const motivation = motivations[Math.floor(Math.random() * motivations.length)]

    return (
      <div className="motivation">
        {motivation}:
        <div className="chore">
        {chore}
      </div>
      </div>
    )
  }
}
