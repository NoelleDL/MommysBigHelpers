import React from 'react';

export default class Chores extends React.Component {
  constructor(props) {
    super(props);
  
    }

  render() {
    const chores = [
      "clean bathroom sink - upstairs",
      "clean bathroom sink - downstairs",
      "dust family room",
      "sweep kithchen floor",
    ]
    const chore = chores[Math.floor(Math.random() * chores.length)];
    return (
      <div>
        {chore}
      </div>
    )
  }
}
