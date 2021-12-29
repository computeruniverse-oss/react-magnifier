import React, { useEffect, useRef, useState, FC } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
    zoomImg: string;
    width: number;
    height: number;
    offsetTop?: number;
    offsetLeft?: number;
}

const MagnifierPortal: FC = ({ children }): React.ReactPortal => {
    const container = useRef(document.createElement('div'));

    useEffect(() => {
        const currentContainer = container.current;
        window.document.body.appendChild(currentContainer);
        return () => {
            window.document.body.removeChild(currentContainer);
        };
    }, []);

    return createPortal(children, container.current);
};

function calcImagePosition(
    mousePosition: { pageX: number | undefined; pageY: number | undefined } | null,
    domRect: DOMRect | undefined,
    lens: { height: number; width: number },
) {
    const lensPositionTop = calcLensPosition(lens.height, mousePosition?.pageY, domRect?.height);
    const lensPositionLeft = calcLensPosition(lens.width, mousePosition?.pageX, domRect?.width);

    let x = ((lensPositionLeft - (domRect?.left || 0)) / (domRect?.width || 1)) * 100;
    let y = ((lensPositionTop - (domRect?.top || 0)) / (domRect?.height || 1)) * 100;

    if (x > 100) {
        x = 100;
    } else if (x < 0) {
        x = 0;
    }

    if (y > 100) {
        y = 100;
    } else if (y < 0) {
        y = 0;
    }

    return { x, y };
}

const calcLensPosition = (lensLength: number, mousePosition = 0, domRectValue = 0) => {
    const position = mousePosition - lensLength / 2;
    if ((mousePosition || 0) + lensLength / 2 > domRectValue) {
        return domRectValue - lensLength;
    } else if (position < 0) {
        return 0;
    }

    return position;
};

const Magnifier: FC<IProps> = ({ zoomImg, offsetLeft, offsetTop, children }) => {
    const [showPortal, setShowPortal] = useState(false);
    const [domRect, setDomRect] = useState<DOMRect>();
    const [mousePosition, setMousePosition] = useState<{ pageX: number; pageY: number } | null>(null);
    const imageHolderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (imageHolderRef && imageHolderRef.current) {
            setDomRect(imageHolderRef.current.getBoundingClientRect());
        }
    }, [zoomImg, children]);

    const imageElement = imageHolderRef.current?.querySelector<HTMLImageElement>('img');

    const lensHeight = (domRect?.height || 1) / 4;
    const lensWidth = (domRect?.width || 1) / 4;

    const backgroundPosition = calcImagePosition(mousePosition, domRect, { height: lensHeight, width: lensWidth });

    const lensPositionTop = calcLensPosition(lensHeight, mousePosition?.pageY, domRect?.height);
    const lensPositionLeft = calcLensPosition(lensWidth, mousePosition?.pageX, domRect?.width);

    return (
        <>
            <span
                ref={imageHolderRef}
                style={{ display: 'inline-block', position: 'relative' }}
                onMouseEnter={() => {
                    setShowPortal(true);
                }}
                // onMouseLeave={() => {
                //     setShowPortal(false);
                // }}
                onMouseMove={(e) => {
                    setMousePosition({ pageX: e.pageX, pageY: e.pageY });
                }}
            >
                <div style={{ opacity: showPortal ? '0.5' : '1' }}>{children}</div>
                <div
                    style={{
                        position: 'absolute',
                        background: 'scroll',
                        backgroundImage: `url(${imageElement?.src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `-${lensPositionLeft}px -${lensPositionTop}px`,
                        height: lensHeight,
                        width: lensWidth,
                        top: lensPositionTop,
                        left: lensPositionLeft,
                    }}
                />
            </span>
            {showPortal && (
                <MagnifierPortal>
                    <div
                        style={{
                            position: 'absolute',
                            border: '1px solid black',
                            backgroundImage: `url(${zoomImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
                            height: domRect?.height,
                            width: domRect?.width,
                            top: (domRect?.top || 0) + (offsetTop || 0),
                            left: (domRect?.left || 0) + (domRect?.width || 0) + (offsetLeft || 0),
                        }}
                    />
                </MagnifierPortal>
            )}
        </>
    );
};

export default Magnifier;
