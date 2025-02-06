import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export const SeminarsList = ({ seminarsList, handleShow }) => {
  return (
    <section className="pt-5">
      <Container>
        <Row style={{ rowGap: '24px' }}>
          {seminarsList.map(seminar => (
            <Col key={seminar.id} xs={3}>
              <Card style={{ height: '100%' }} className="pt-2">
                <span className="text-end me-2 mb-2">
                  {seminar.date} - {seminar.time}
                </span>
                <Card.Img variant="top" src={seminar.photo} />
                <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                  <Card.Title>{seminar.title}</Card.Title>
                  <div style={{ flex: '1 1 auto' }} className="mb-5">
                    <Card.Text>{seminar.description}</Card.Text>
                  </div>
                  <div className="d-flex">
                    <Button variant="danger" onClick={() => handleShow('delete', { ...seminar })} className="me-2">
                      Удалить
                    </Button>
                    <Button variant="primary" onClick={() => handleShow('edit', { ...seminar })}>
                      Редактировать
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
