import React from 'react';

import { mdiArrowRightBox } from '@mdi/js';
import Icon from '@mdi/react';

const ProjectCarouselItem = ({imageUrl, title, description, link, longDescription}) => {
    return(
        <div className="item">
            <div className="info">
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>{longDescription}</h3>
                <a className="learn-more" href={link}>Learn More <Icon path={mdiArrowRightBox} size={0.9}/></a>
            </div>
            <div className="img-bg">
                {(imageUrl !== "")? <img src={imageUrl} alt={title} />: null}
            </div>
        </div>
    );
}

export default ProjectCarouselItem;