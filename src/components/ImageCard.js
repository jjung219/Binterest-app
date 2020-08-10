import React from 'react'

class ImageCard extends React.Component {

  render () {
    return (
      <div>
        <img
          src={this.props.image.urls.regular}
        />
      </div>
    )
  }

}

export default ImageCard