import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';
import "./Modal.scss";

interface CornModalTypes {
  isModal: boolean, 
  toggle: () => void,
  isConfirm?: boolean, 
  confirm?: () => void,
  isCancel?: boolean, 
  cancel?: () => void,
  children?: any,
  isBody?: boolean,
  confirmName?: string,
}


const CornModal: React.FC<CornModalTypes> = ({
  isModal, 
  toggle,
  isConfirm,
  confirm,
  isCancel,
  cancel,
  children,
  isBody,
  confirmName = "",
}) => {

  return (
    <div>
      <Modal isOpen={isModal} toggle={toggle} className="col-12 col-lg-6 corn-modal">
        {
          isBody && (
          <ModalBody>
            <Table>
              { children }
            </Table>
          </ModalBody>
          )
        }
        {!isBody && children}
        {
          (isCancel || isConfirm) && (
            <ModalFooter>
            {isConfirm && <Button color="info" onClick={confirm}>{confirmName !== "" ? confirmName : "confirm"}</Button>}
            {isCancel && <Button color="info" type="submit" onClick={() => {
              toggle();
              if(!!cancel) {
                cancel();
              };
            }}>Cancel</Button>}
            </ModalFooter>
          )
        }
      </Modal>
    </div>
  );
}

export default CornModal;