import React from 'react';

import Magnifier from '../src';

export default {
    title: 'Magnifier',
    component: Magnifier,
};

const Template = () => (
    <Magnifier zoomImg={'https://picsum.photos/id/190/1000/1000'} width={1000} height={1000} offsetLeft={10}>
        <img src={'https://picsum.photos/id/190/400/400'} height={400} width={400} alt="Lorem picsum" />
    </Magnifier>
);

export const Primary = Template.bind({});
