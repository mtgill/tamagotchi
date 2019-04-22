import util from '../helpers/util';

const pictureButton = () => {
  let domString = '';
  domString = '<div id="picture-div">';
  domString += '<input type="text" id="pictureURL" placeholder="Picture URL">';
  domString += '<button id="picture-btn">Add a picture!</button>';
  domString += '</div>';
  util.printToDom('pet', domString);
};

const getPicture = () => {
  const picture = document.getElementById('pictureURL').value;
  let domString = '';
  domString += `<img src="${picture}"></img>`;
  util.printToDom('pet', domString);
};

const pictureButtonEvent = () => {
  document.getElementById('picture-btn').addEventListener('click', getPicture);
};

export default { pictureButton, pictureButtonEvent };
