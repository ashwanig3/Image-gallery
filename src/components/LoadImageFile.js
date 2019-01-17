import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateImg } from '../acttions/actionCreators';

class LoadImageFile extends Component {
  state = {
    imgFile: null,
    imgURL: '',
    imgInfo: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    }
    handleImgURL = (e) => {
      this.setState({
        imgFile: URL.createObjectURL(e.target.files[0])
      })
      
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const prevArray = JSON.parse(localStorage.getItem('img'));
      const currenImg = this.state;

      if(!prevArray) {
        localStorage.setItem('img', JSON.stringify([currenImg]))
      } else {
        localStorage.setItem('img', JSON.stringify([...prevArray, currenImg]))
      }
      this.props.dispatch(updateImg(currenImg))
      this.props.handleRemove()
    }

  render() {
    return (
      <div className="modale-container">
        <header className="modale-header">
          <h3>Add Photo</h3>
          <div className="remove-btn" onClick={() => this.props.handleRemove()}>x</div>
        </header>
        <div className="img-input">
          <form className="img-file-input">
            <input type="file" name="imgFile" onChange={this.handleImgURL} accept=".jpg, .jpeg, .png" multiple />
          </form>
          <form className="img-url-input">
            <input type="text" name="imgURL" placeholder="Enter URL of image" onChange={this.handleImgURL} />
          </form>
        </div>
        <form onSubmit={this.handleSubmit} className="img-info-input">
          <input type="text" placeholder="Type Something, hit enter" required name="imgInfo" onChange={this.handleChange} />
          <button type="submit">Upload</button>
        </form>
          
          {
            this.state.imgFile ? <img className="preview-img" src={this.state.imgFile} id="img-link" multiple="multiple" /> : <p>No Preview Avialable</p>
          }
          

      </div>
    )
  }
}

export default connect()(LoadImageFile)