import React, { useState, useEffect } from 'react';
import axios from 'axios';




function Cards(props) {

  return (
    <div className="col-lg-4 col-md-6">
      <div class="card">
        <img
          class="card-img-top img-fluid"
          src={props.avatar}
          alt="Card image cap"
        />
        <div class="card-body">
          <h4 class="card-title">
            {props.fName} {props.lName}
          </h4>
          <p class="card-text">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
