import React from 'react';

import image1 from '../assets/images/images/BIO/1.JPG';
import Contribute from '../components/Contribute';
// import image2 from '../../assets/images/images/Bio/use15.JPG';
// import image3 from '../../assets/images/images/Bio/use16.JPG';
// import image4 from '../../assets/images/images/Bio/use17.JPG';

export default function Bio({ bio }) {
    return (
        <>
            <section className="section-bio u-section-padding">
                <div className="row">
                    <h2 className="heading-secondary u-center-text u-margin-bottom-big">
                        Bio
                    </h2>
                    <div className="col-6-of-12">
                        <div className="image-box">
                            <img
                                src={image1}
                                alt=""
                                className="image-box__image"
                            />
                        </div>
                    </div>
                    <div className="col-6-of-12">
                        {/* <p className="paragraph">{bio[0].description}</p>
                        <p className="paragraph">{bio[1].description}</p>
                        <p className="paragraph">{bio[2].description}</p> */}
                        {bio?.map((b) => (
                            <p
                                className="paragraph u-justify u-margin-bottom-medium"
                                key={b.id}
                            >
                                {b.description}
                            </p>
                        ))}
                    </div>
                </div>
            </section>
            <Contribute />
        </>
    );
}
