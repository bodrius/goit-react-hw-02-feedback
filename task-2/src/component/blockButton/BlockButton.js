import React from 'react'

const BlockButton = () => {
    return (
        <>
        <button onClick={this.onHandleClickButton} name="good">
          Good
        </button>
        <button onClick={this.onHandleClickButton} name="neutral">
          Neutral
        </button>
        <button onClick={this.onHandleClickButton} name="bad">
          Bad
        </button>
        </>
    );
}

export default BlockButton;