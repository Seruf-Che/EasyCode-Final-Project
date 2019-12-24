import React from "react";

const ModalInfo = (props) => {
  const {close, text} = props;
  return(
    <section className={"modal"} onClick={close}>
      <div
        className={"modal__inner modal__inner--prompt"}
        onClick={e => e.stopPropagation()}>
        <div className="modal__body">
          <h1 className="modal__heading">{text}</h1>
        </div>
        <div className="modal__footer">
          <button
            tabIndex={1}
            className="button"
            onClick={close}>Yes</button>
        </div>
      </div>
    </section>
  )
}

export default ModalInfo;
