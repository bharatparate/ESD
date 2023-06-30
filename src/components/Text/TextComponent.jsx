import React from 'react';

const TextComponent = (props) => {
 
  return (
    <>
    {props.title ? <h2 className='sectionTitle'>{props.title}</h2> : "" }
    {props.text ?<div dangerouslySetInnerHTML={{ __html: props.text }}></div> : "" }
    </>
  );
}

export default TextComponent;