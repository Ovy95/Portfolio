import React from 'react';


const ProjectList = ({ items }) => {
  return (
    <div className = "section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc,link} = menuItem;
        return (
          <article key={id} className='menu-item'>
          <a href={link} target="_blank" rel="noreferrer" ><img src={img} alt={title} className='photo' /></a>
          <div className='item-info'>
            <header>
          <h4>{title}</h4>
              

            </header>
            <p className='item-text'>{desc}</p>
          </div>
        </article>
          );
          })}
          </div>


  );
};

export default ProjectList;