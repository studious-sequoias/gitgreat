import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrls: [],
      eventId: null
    };
  }
  componentDidMount() {
    this.displayPhotos();
  }
  componentWillMount() {
    this.setState({
      eventId: sessionStorage.getItem('eventId') || 1 //INSERT EVENT ID HERE
    });
  }

  displayPhotos() {

    var photoLinks = [];
    $.get({
      url: '/displayImages',
      data: {
        eventId: this.state.eventId
      }
    }, function(data) {
      data.forEach(function(el) {
        photoLinks.push(el.url);
      });
      this.setState({
        photoUrls: photoLinks
      });
    }.bind(this));
  }
  uploadFile(e) {
    e.preventDefault();
    var formData = new FormData();
    var files = $('input[type=file]')[0].files[0];
    var context = this;
    if (files) {
      formData.append('imageFile', files);
      formData.append('eventId', this.state.eventId);
      $.ajax({
        url: '/uploadImage',
        type: 'POST',
        data: formData,
        processData: false, // tells jQuery not to process data
        contentType: false, // tells jQuery not to set contentType
        success: () => {
          console.log('post request successful and saved to db!');
        },
        failure: () => {
          console.log('Failed to upload');
        }
      });
    } else {
      console.log('no file selected!');
    }
  }
  render() {
    return (<div className="photoForm">Photos Tab Stuff Here
              <form method="post" encType="multipart/form-data" id="uploadForm">
                <input type="file" id="imageUpload" accept="image/*" multiple /><br/>
                <input className="btn" type="submit" value="submit" onClick={(e) => this.uploadFile(e)}/>
              </form>
              <div className="photos">
                {this.state.photoUrls.map((link, index) => <img key={index} src={link} />)}
              </div>
            </div>);
  }
}

export default Photos;