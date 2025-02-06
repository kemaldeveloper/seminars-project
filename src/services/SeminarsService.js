import { useHttp } from '../hooks/http.hook';

// Глобальный хук сервис семинар, в котором реализованы методы получения, удаление и редактирования семинаров
const useSeminarsService = () => {
  const { request } = useHttp();

  const _baseUrl = 'http://localhost:3000/seminars';

  const getAllSeminars = async () => {
    const res = await request(_baseUrl);
    return res;
  };

  const deleteSeminar = async id => {
    const res = await request(`${_baseUrl}/${id}`, 'DELETE');
    return res;
  };

  const editSeminar = async (id, body) => {
    const res = await request(`${_baseUrl}/${id}`, 'PUT', body);
    return res;
  };

  return { getAllSeminars, deleteSeminar, editSeminar };
};

export default useSeminarsService;
