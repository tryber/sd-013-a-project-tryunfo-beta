import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="x">
          <input id="x" type="text" />
        </label>
      </form>
    );
  }
}

export default Form;
