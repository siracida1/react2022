import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function FooterPage() {
  return (
    <MDBFooter bgColor='danger' className='text-center text-lg-start text-light gr'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conéctate con nosotros en las redes sociales:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>UNDERCHEF
              </h6>
              <p>
                Gastronomia colaborativa
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
              <p>
                <a href='/' className='text-reset'>
                  Gastronmia
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Bebidas
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Delivery
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Precio y Calidad
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>links</h6>
              <p>
                <a href='/Form/Form' className='text-reset'>
                  Registrate
                </a>
              </p>
              <p>
                <a href='/Form/Form' className='text-reset'>
                  Formar parte
                </a>
              </p>
              <p>
                <a href='https://wa.me/+5491124540483?text=Atencion%20al%20cliente' className='text-reset'>
                  Atencion al cliente
                </a>
              </p>
              <p>
                <a href='https://wa.me/+5491124540483?text=Ayuda' className='text-reset'>
                  Ayuda
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <i className='fas fa-home me-3'></i> Argentina, Leloir
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                siracida111@hotmail.com 
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> 0800-333-123456
              </p>
              <p>
                <i className='fas fa-print me-3'></i> 0800-333-654321
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://uchaef.com/'><br/>
          uchef.com
        </a>
      </div>
    </MDBFooter>
  );
}