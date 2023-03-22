import React from 'react'
import PropTypes from 'prop-types'

function Modal({
  text,
  display,
  width,
  heigth,
  bgColor,
  margin,
  button,
  buttonText,
  buttonWidth,
  buttonHeight,
  buttonBgColor,
  buttonBorder,
  buttonMargin,
  buttonPadding,
}) {
  // useState/Effect to trigger modal display
  const [modalDisplay, setmodalDisplay] = React.useState(display)
  const onButtonClick = () => {
    setmodalDisplay('none')
  }
  React.useEffect(() => {
    const showModal = display ? 'block' : 'none'
    setmodalDisplay(showModal)
  }, [display])

  // check if the prop.button exist to display it
  let btnDisplay = 'none'
  if (button) {
    btnDisplay = 'inline-block'
  }

  return (
    <div
      className="modal-container"
      style={{
        display: modalDisplay,
      }}
    >
      <div
        className="modal"
        style={{
          width,
          heigth,
          backgroundColor: bgColor,
          margin,
        }}
      >
        <span className="close" onClick={onButtonClick}>
          &times;
        </span>

        <p>{text}</p>
        <button
          className="modalBtn"
          style={{
            display: btnDisplay,
            width: buttonWidth,
            height: buttonHeight,
            backgroundColor: buttonBgColor,
            border: buttonBorder,
            margin: buttonMargin,
            padding: buttonPadding,
          }}
          onClick={onButtonClick}
        >
          {' '}
          {buttonText}{' '}
        </button>
      </div>
    </div>
  )
}
Modal.propTypes = {
  text: PropTypes.string,
  display: PropTypes.bool,
  width: PropTypes.string,
  heigth: PropTypes.string,
  bgColor: PropTypes.string,
  margin: PropTypes.string,
  button: PropTypes.string,
  buttonText: PropTypes.string,
  buttonWidth: PropTypes.string,
  buttonHeight: PropTypes.string,
  buttonBgColor: PropTypes.string,
  buttonBorder: PropTypes.string,
  buttonMargin: PropTypes.string,
  buttonPadding: PropTypes.string,
}
export default Modal
