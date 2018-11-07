import React from 'react'

import './ImageUploader.scss'

const ImageUploader = props => {
  const handleFileChanges = e => {
    const file = e.target.files[0]

    const maxPhotoSize = 2000000; // 2 MB
    const isImage = (file.type.includes('image/jpeg') || file.type.includes('image/png'));

    if (file.size > maxPhotoSize && isImage) {
      const photoUrl = window.URL.createObjectURL(file)
      props.emitPhotoUrl(photoUrl)
    } else {
      // not image validation
    }

  }

  return (
    <div className="file-input">
      <input id="file" type="file" onChange={(e) => handleFileChanges(e)} />
      <i className="fas fa-arrow-down" />
      <label htmlFor="file" className="file-label">Choose a file</label>
    </div>
  )
}

export default ImageUploader