import React, { useState } from "react";
import { Card, Form, Button, Alert, Spinner } from "react-bootstrap";

const HoaxDetectionForm = () => {
  const [formData, setFormData] = useState({
    news_title: "",
    news: "",
  });
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(formData);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "https://predict-hoax-backend.azurewebsites.net/api/news/predict",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();

      // Handle the response and update the state accordingly
      setPredictionResult(result.data.result_predict);
      setError(null);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    // Reset form data, prediction result, and error
    setFormData({
      news_title: "",
      news: "",
    });
    setPredictionResult(null);
    setError(null);
  };

  return (
    <div>
      <div className="container" style={{ paddingTop: "80px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Card>
              <Card.Header className="bg-primary text-white">
                Prediksi Hoaks
              </Card.Header>

              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="news_title">Judul Berita</Form.Label>
                    <Form.Control
                      type="text"
                      id="news_title"
                      name="news_title"
                      value={formData.news_title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="news">Artikel Berita</Form.Label>
                    <Form.Control
                      as="textarea"
                      id="news"
                      name="news"
                      value={formData.news}
                      onChange={handleChange}
                      rows="8"
                      required
                    />
                  </Form.Group>

                  <div className="mb-3 text-left">
                    <Button
                      type="submit"
                      variant="primary"
                      className="me-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        "Cek Prediksi"
                      )}
                    </Button>
                    <Button
                      type="button" // Gunakan type "button" agar tidak mengirimkan form
                      variant="danger"
                      className="pull-right"
                      onClick={handleReset}
                    >
                      Hapus
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            {predictionResult !== null && (
              <Alert
                variant={predictionResult === "REAL" ? "success" : "danger"}
                className="text-center mt-4"
              >
                <i
                  className={`fa ${
                    predictionResult === "REAL"
                      ? "fa-check-circle"
                      : "fa-times-circle"
                  } fa-5x ${
                    predictionResult === "REAL" ? "text-success" : "text-danger"
                  }`}
                ></i>
                <p>
                  Berita ini{" "}
                  {predictionResult === "REAL"
                    ? "BENAR (real)"
                    : "PALSU (fake)"}
                  !
                </p>
              </Alert>
            )}

            {error && (
              <Alert variant="danger" className="text-center mt-4">
                {error}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoaxDetectionForm;
