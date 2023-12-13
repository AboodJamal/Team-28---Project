import React from 'react';
import DestinationCard from './DestinationCard';

function TopDistenationsCards() {
    return (
        <div className="container px-4 px-lg-5 mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="m-0" style={{ fontSize: '25px', fontWeight: 'bold' }}>Top Destinations</h1>
            </div>
            <div className="row gx-2 gx-md-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <DestinationCard imgLink="https://upload.wikimedia.org/wikipedia/commons/8/8e/Arabian_Desert_-_panoramio.jpg" title="California" underTitle="Business & Conferences" />
                <DestinationCard imgLink="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg" title="Los Angeles" underTitle="Events & Parties"/>
                <DestinationCard imgLink="https://hips.hearstapps.com/hmg-prod/images/cat-instagram-captions-64ff2dfa47e9a.jpg?crop=1xw:0.84375xh;center,top" title="London" underTitle="Arts & Entertainment"/>
                <DestinationCard imgLink="https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg" title="London" underTitle="Arts & Entertainment"/>
            </div>
        </div>
    );
}
// row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center
export default TopDistenationsCards;    