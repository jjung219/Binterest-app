import React from 'react';

import { Dropdown } from 'react-bootstrap';

const DropDownItem = props => {
  const albumId = props.id

  function clickHandler () {
    props.onClick(albumId);
  }

  return (
    <Dropdown.Item 
      onClick={clickHandler}
    >
      {props.name}
    </Dropdown.Item>
  )
}

export default DropDownItem;