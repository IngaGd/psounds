import React from 'react';
import { Link } from 'react-router-dom';

export default function Studio() {
    return (
        <section className="section-studio u-section-padding">
            <div className="row">
                <h2 className="heading-secondary u-center-text u-margin-bottom-medium">
                    Studio
                </h2>

                <p className="paragraph u-center-text">
                    "Palms’ Studio” is based in Ozo str. 4-206, Vilnius,
                    Lithuania.
                </p>
                <p className="paragraph u-center-text">
                    For rental options, please{' '}
                    <Link className="link" to="/contact">
                        contact us
                    </Link>{' '}
                    .
                </p>
            </div>
        </section>
    );
}
