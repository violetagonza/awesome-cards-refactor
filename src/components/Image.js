import React from 'react';
import Input from './input';
import defaultImage from '../images/preview-photo.jpg';

const fr = new FileReader();
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      img: defaultImage,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.writeImg = this.writeImg.bind(this);
  }

  handleSubmit() {
    const myFile = this.fileInput.current.files[0];
    fr.addEventListener('load', this.writeImg);
    fr.readAsDataURL(myFile);
  }

  writeImg() {
    this.setState({
      img: fr.result,
    });
    this.props.handleImg(fr.result);
  }

  render() {
    console.log(this.props);

    return (
      <>
        <div className='form--file'>
          <Input className='form--file__input' type='file' name='form--file' />
          <input onChange={this.handleSubmit} ref={this.fileInput} className='form--file__input js-fill-file' type='file' accept='image/png, .jpeg, .jpg, image/gif' />
        </div>
        <div className='form--button__container'>
          <button className='form--button'>Añadir imagen</button>
          <img src={this.state.img} className='form--button__box' alt='previsualización de la imagen' />
        </div>
      </>
    );
  }
}

export default Image;