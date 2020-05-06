import React from 'react';
import './UnderlineOnHoverAnchor.scss';

// Wanted to just make this a span that could wrap props.children, but the pointer
// is being weird when you hover over it...
function UnderlineOnHoverAnchor(props) {
  return (
    <a href={props.href} className={'UnderlineOnHoverAnchor ' + (props.className || '')} id={props.id} style={props.style}>
      {props.children}
    </a>
  )
}

export default UnderlineOnHoverAnchor;