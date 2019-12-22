import React from "react";

const ModalCofirm = (props) => {
  const {close, text} = props;
  return(
    <section className={"modal"} onClick={close}>
      <div
        className={"modal__inner modal__inner--prompt"}
        onClick={e => e.stopPropagation()}>
        <div className="modal__body">
          <h1 className="modal__heading">{text}</h1>
        </div>
        <div className="modal__footer modal__footer--prompt">
          <button
            tabIndex={1}
            className="button"
            onClick={() => {props.callback(); close();}}>Yes</button>
          <button
            tabIndex={2}
            className="button"
            onClick={close}>No</button>
        </div>
      </div>
    </section>
  )
}

export default ModalCofirm;
