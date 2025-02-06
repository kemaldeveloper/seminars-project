import { useEffect, useState } from 'react';
import useSeminarsService from '../../services/SeminarsService';
import { UiModal } from '../ui/UiModal';
import { EditForm } from './EditForm';
import { SeminarsList } from './SeminarsList';

export const Seminars = () => {
  const [seminarsList, setSeminarsList] = useState([]);
  const [modal, setModal] = useState({ isOpen: false, type: '', data: null });
  const { getAllSeminars, deleteSeminar, editSeminar } = useSeminarsService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getAllSeminars().then(onSeminarsListLoaded);
  };

  const onSeminarsListLoaded = newSeminarsList => {
    setSeminarsList([...newSeminarsList]);
  };

  const handleShow = (type, data) => {
    setModal({ isOpen: true, type, data });
  };

  const handleClose = () => {
    setModal({ isOpen: false, type: '', data: null });
  };

  const onDelete = async () => {
    if (!modal.data.id) return;

    try {
      await deleteSeminar(modal.data.id);
      onRequest();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit = async body => {
    if (!modal.data.id) return;

    try {
      await editSeminar(modal.data.id, body);
      onRequest();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SeminarsList seminarsList={seminarsList} handleShow={handleShow} />
      <UiModal
        isOpen={modal.isOpen}
        handleClose={handleClose}
        title={modal.type === 'delete' ? 'Удаление семинара' : 'Редактирование семинара'}
        content={
          modal.type === 'delete' ? (
            <p>Вы уверены, что хотите удалить Семинар</p>
          ) : (
            <EditForm onEdit={onEdit} defaultValues={modal.data} />
          )
        }
        confirmLabel={modal.type === 'delete' ? 'Удалить' : undefined}
        onConfirm={modal.type === 'delete' ? onDelete : undefined}
      />
    </>
  );
};
