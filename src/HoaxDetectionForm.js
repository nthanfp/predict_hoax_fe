// HoaxDetectionForm.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Form, Button, Alert } from "react-bootstrap";

const HoaxDetectionForm = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card>

            <Card.Header className="bg-primary text-white">
              Deteksi Hoax{" "}
            </Card.Header>

            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="news_title">Judul Berita</Form.Label>
                  <Form.Control
                    type="text"
                    id="news_title"
                    name="news_title"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="news">Artikel Berita</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="news"
                    name="news"
                    rows="8"
                    required
                  />
                </Form.Group>

                <div className="mb-3 text-center">
                  <Button type="submit" variant="primary" className="me-2">
                    Submit
                  </Button>
                  <Button type="reset" variant="secondary">
                    Reset
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          <Alert variant="success" className="text-center mt-4">
            <i className="fa fa-check-circle fa-5x text-success"></i>
            <p>Berita ini BENAR (real)!</p>
          </Alert>

          <Alert variant="danger" className="text-center mt-4">
            <i className="fa fa-times-circle fa-5x text-danger"></i>
            <p>Berita ini PALSU (fake)!</p>
          </Alert>

        </div>
      </div>
    </div>
  );
};

export default HoaxDetectionForm;
