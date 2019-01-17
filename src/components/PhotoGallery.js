import React, { Component } from 'react';
import LoadImageFile from './LoadImageFile';
import { connect } from 'react-redux';

class PhotoGallery extends Component {
  state = {
    wantToAdd: false,
    imgArr: [],
    currentImg: [],
    imgSrcArr: [],
  }
  handleAdd = () => {
    this.setState({
      wantToAdd: !this.state.wantToAdd
    })
  }
  componentWillMount = () => {
   const images = JSON.parse(localStorage.getItem("img"));
   this.setState({imgArr: images})
  }
  // componentDidUpdate = () => {
  //   this.setState({
  //     currentImg: this.props.imgSrc
  //   })
  // }

  handleSearch = (e) => {
    const targetVal = e.target.value.toLowerCase();
    const filteredArr = this.state.imgArr.filter(img => img.imgInfo.toLowerCase().includes(targetVal))
    this.setState({
      imgArr: filteredArr
    })
    
  }

  handleDelete = (e) => {
    const targetId = e.target.id;
    const newArr = JSON.parse(localStorage.getItem("img"))
    newArr.splice(targetId, 1)
    localStorage.removeItem("img")
    localStorage.setItem("img", JSON.stringify(newArr))
    this.setState({
      imgArr: newArr
    })
  }

  render() {
    const { imgArr, wantToAdd, currentImg } = this.state; 
    return (
      <div>
        <div className="header-container">
            <h1 className="header-container_heading">Photo Library</h1>
            <div className="add_icon" onClick={this.handleAdd}><span>+</span></div>
        </div>
        <form className="search-box">
            <i className="fas fa-search search-icon"></i>
            <input type="text" className="search-input" placeholder="Search Text" onChange={this.handleSearch} />
        </form>
        <div className="img-library">
        {
          imgArr && imgArr.map((img, i) => 
          <div key={i}>
            {
             img.imgFile ? <img className="img-item" src={img.imgFile} alt="gallery" id="gallery-img" multiple="multiple" /> :
             <img className="img-item" src={img.imgURL} alt="gallery" id="gallery-img" multiple="multiple" />

            }

            <button id={i} onClick={this.handleDelete}>Delete</button>
          </div>)
        }
          {
              currentImg && currentImg.map((img,i) => 
              <div key={i}>
              {
               img.imgFile ? <img className="img-item" src={img.imgFile} alt="gallery" id="gallery-img" multiple="multiple" /> :
               <img className="img-item" src={img.imgURL} alt="gallery" id="gallery-img" multiple="multiple" />
  
              }
  
              <button id={i} onClick={this.handleDelete}>Delete</button>
            </div>
              )
            }
        </div>
        {
          wantToAdd ?  <LoadImageFile handleRemove={this.handleAdd} /> : <div></div>
        }
       
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imgSrc: state.imgSrc
  }
}

export default connect(mapStateToProps)(PhotoGallery)