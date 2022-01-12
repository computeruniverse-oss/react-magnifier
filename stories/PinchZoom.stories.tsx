import PinchZoom from '../src/PinchZoom';
import React from 'react';

export default {
    title: 'PinchZoom',
    component: PinchZoom,
};

export const Basic = () => {
    return (
        <PinchZoom zoomImg={'https://picsum.photos/id/190/1000/1000'}>
            <img src={'https://picsum.photos/id/190/400/400'} height={400} width={400} alt="Lorem picsum " />
        </PinchZoom>
    );
};

export const BasicWithContentAround = () => {
    return (
        <>
            <header style={{ paddingTop: '200px' }}> i'm a header</header>
            <PinchZoom zoomImg={'https://picsum.photos/id/190/1000/1000'}>
                <img src={'https://picsum.photos/id/190/400/400'} height={400} width={400} alt="Lorem picsum " />
            </PinchZoom>
        </>
    );
};
