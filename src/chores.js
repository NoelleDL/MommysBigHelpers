import React from 'react';

export default class Chores extends React.Component {
  constructor() {
    super();
      const chores = [
        "clean bathroom sink - upstairs",
        "clean bathroom sink - downstairs",
        "dust family room",
        "sweep kithchen floor",
      ]

      const chore = var chore = chores[Math.floor(Math.random() * chores.length)];
    }
  }

  render() {
    return (
      <div>
      <chore={chore} />
      </div>
    )
  };
}
