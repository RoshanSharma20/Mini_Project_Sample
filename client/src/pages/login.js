import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {
  return (
    <div className='container-fluid p-4' style={{ fontFamily: 'Arial, sans-serif' }}>

      <div className='row'>

        <div className='col-md-6 text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-primary" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Welcome to the One Point Student <br />
            <span className="text-secondary">Verification System</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)', fontSize: '1.1rem', fontFamily: 'Georgia, serif' }}>
            Welcome to the <strong>One Point Student Verification System</strong>. This platform provides a secure and transparent way for institutes and students to authenticate academic records stored on the blockchain. To proceed, you need to have a <strong>MetaMask wallet</strong> and a valid <strong>Ethereum account</strong>.
          </p>

        </div>

        <div className='col-md-6 d-flex align-items-center justify-content-center'>
          <div className="card shadow-sm p-5 mb-5 bg-body rounded">
            <div className='card-body'>
              <h2 className="text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}><strong>Get Started By One Click</strong></h2>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-light btn-lg">
                  <i className="bi bi-building me-2"></i>Login as Institute
                </button>
                <p className="text-center text-muted">Authenticate as an institute to access student records.</p>
                <button type="button" className="btn btn-light btn-lg">
                  <i className="bi bi-person me-2"></i>Login as Student
                </button>
                <p className="text-center text-muted">Authenticate as a student to access your verified records.</p>
              </div>
              <hr className="my-4" />
              <p className="text-muted">
                <strong>Note:</strong> You need to have MetaMask installed in your browser and a valid Ethereum account to login and access the system's features.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Login;
