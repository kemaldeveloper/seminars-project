import { Button, Modal } from 'react-bootstrap';

export const UiModal = ({ isOpen, handleClose, content, title, onConfirm, confirmLabel }) => {
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {onConfirm ? (
          <Button variant="primary" onClick={() => onConfirm()}>
            {confirmLabel}
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
};
