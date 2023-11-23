import React from "react";
import { Card } from "react-bootstrap";

const Kontak = () => {
  return (
    <div>
      <div>
        <div className="container" style={{ paddingTop: "80px" }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Card>
                <Card.Header className="bg-primary text-white">
                  Kontak
                </Card.Header>
                <Card.Body style={{ textAlign: "justify" }}>
                  
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
