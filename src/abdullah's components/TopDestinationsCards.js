import React from 'react';
import DestinationCard from './DestinationCard';
import { useFireBase } from '../TeamFireBase/useFireBase';

function TopDistenationsCards() {
    const { items } = useFireBase("topDestinationCom");
    return (
        <>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="m-0" style={{ fontSize: '25px', fontWeight: 'bold' }}>Top Destinations</h1>
                </div>
                <div className="row gx-2 gx-md-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {items.map((item) => (
                                <DestinationCard key={item.id} imgLink={item.img} title={item.title} underTitle={item.underTitle} />
                    ))}
                </div>
            </div>
        </>
    );
}
// row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center
export default TopDistenationsCards;
