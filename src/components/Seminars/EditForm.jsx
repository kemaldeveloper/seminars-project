import { format } from 'date-fns';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name} className="form-label">
        {label}
      </label>
      <input {...field} {...props} className="form-control" />
      {meta.touched && meta.error ? <div className="text-danger">{meta.error}</div> : null}
    </>
  );
};

const schema = Yup.object({
  title: Yup.string().min(2, 'Минимум 2 символа!').required('Обязательное поле!'),
  description: Yup.string().min(10, 'Не менее 10 символов'),
  photo: Yup.string().url('Введите корректную ссылку').required('Обязательное поле'),
});

export const EditForm = ({ onEdit }) => {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        photo: '',
        date: format(new Date(), 'yyyy.MM.dd'),
        time: format(new Date(), 'H:m'),
      }}
      validationSchema={schema}
      onSubmit={values => onEdit(JSON.stringify(values))}
    >
      <Form>
        <div className="mb-3">
          <MyTextInput
            label="Название семинара"
            name="title"
            id="title"
            type="text"
            placeholder="Введите название..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Описание
          </label>
          <Field id="description" name="description" as="textarea" className="form-control" placeholder="Текст..." />
          <ErrorMessage className="text-danger" name="description" component="div" />
        </div>
        <div className="mb-3">
          <MyTextInput label="Ссылка на изображение" name="photo" type="text" placeholder="Вставьте ссылку..." />
        </div>
        <Button type="submit">Подтвердить</Button>
      </Form>
    </Formik>
  );
};
