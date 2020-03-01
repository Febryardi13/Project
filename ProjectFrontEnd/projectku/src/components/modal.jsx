import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = props => {
  const { className, toggle, modal, title, actionfunc, btnTitle } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <Button style={{ backgroundColor: "#212529" }} onClick={actionfunc}>
            {btnTitle}
          </Button>
          {/* onClick={actionfunc} ini ngebaca actionfunc dari modal yg ada di app.js */}
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
