import React from "react";
import { Card } from "react-bootstrap";

const TentangKami = () => {
  return (
    <div>
      <div>
        <div className="container" style={{ paddingTop: "80px" }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Card>
                <Card.Header className="bg-primary text-white">
                  Tentang Kami
                </Card.Header>
                <Card.Body style={{ textAlign: "justify" }}>
                  <p>
                    Selamat datang di Prediksi Hoaks, platform yang
                    didedikasikan untuk membantu memeriksa kebenaran
                    artikel berita. Kami menggunakan teknologi terkini dalam
                    menganalisis teks dan memberikan prediksi apakah suatu
                    berita dapat dianggap sebagai hoaks atau tidak.
                  </p>
                  <p>
                    Tim kami terdiri dari pakar-pakar dalam bidang pemrosesan
                    bahasa alami dan kecerdasan buatan. Kami berkomitmen untuk
                    memberikan layanan prediksi hoaks yang akurat dan andal.
                  </p>
                  <p>
                    Terima kasih telah menggunakan Prediksi Hoaks. Jangan ragu
                    untuk menghubungi kami jika Anda memiliki pertanyaan atau
                    masukan.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TentangKami;
