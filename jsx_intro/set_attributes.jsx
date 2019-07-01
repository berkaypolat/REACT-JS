import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
};

const gooseImg = <img src={goose} />;
const panda = (
  <img
    src={pics.panda}
    alt="Lazy Panda" />
);
const owl = (
  <img
    src={pics.owl}
    alt="Unimpressed Owl" />
);
const owlCat = (
  <img
    src={pics.owlCat}
    alt="Ghastly Abomination" />
);
ReactDOM.render(gooseImg, document.getElementById('app'));
