import React from 'react';

import Magnifier from '../src';

export default {
    title: 'Magnifier',
    component: Magnifier,
};

export const Basic = () => {
    return (
        <Magnifier
            zoomImg={'https://picsum.photos/id/190/1000/1000'}
            zoomImgHeight={1000}
            zoomImgWidth={1000}
            offsetLeft={10}
        >
            <img src={'https://picsum.photos/id/190/400/400'} height={400} width={400} alt="Lorem picsum " />
        </Magnifier>
    );
};

export const AsyncImageSizes = () => {
    return (
        <Magnifier
            zoomImg={'https://picsum.photos/id/234/800/1234'}
            zoomImgHeight={1234}
            zoomImgWidth={800}
            offsetLeft={10}
        >
            <img src={'https://picsum.photos/id/234/500/300'} height={300} width={500} alt="Lorem picsum" />
        </Magnifier>
    );
};

export const AsyncImages = () => {
    return (
        <Magnifier
            zoomImg={'https://picsum.photos/id/555/1000/1000'}
            zoomImgHeight={1000}
            zoomImgWidth={1000}
            offsetLeft={10}
        >
            <img src={'https://picsum.photos/id/111/500/300'} height={300} width={500} alt="Lorem picsum" />
        </Magnifier>
    );
};

export const BasicWithContentAround = () => {
    return (
        <>
            <header style={{ paddingTop: '200px' }}> i'm a header</header>
            <Magnifier
                zoomImg={'https://picsum.photos/id/190/1000/1000'}
                zoomImgHeight={1000}
                zoomImgWidth={1000}
                offsetLeft={10}
            >
                <img src={'https://picsum.photos/id/190/400/400'} height={400} width={400} alt="Lorem picsum " />
            </Magnifier>
        </>
    );
};
