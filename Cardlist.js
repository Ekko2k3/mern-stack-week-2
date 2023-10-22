// CardList.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cardlist = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <p className="card-text">This is the content of Card 1.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <p className="card-text">This is the content of Card 2.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <p className="card-text">This is the content of Card 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardlist;