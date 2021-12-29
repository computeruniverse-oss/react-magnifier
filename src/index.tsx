import React, { useEffect, useRef, useState, FC } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
    zoomImg: string;
    zoomImgWidth: number;
    zoomImgHeight: number;
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
    zoomImgHeight: number,
    zoomImgWidth: number,
) {
    const lensPositionTop = calcLensPosition(lens.height, mousePosition?.pageY, domRect?.height, domRect?.top);
    const lensPositionLeft = calcLensPosition(lens.width, mousePosition?.pageX, domRect?.width, domRect?.left);

    const y = (lensPositionTop / (domRect?.height || 1)) * zoomImgHeight;
    const x = (lensPositionLeft / (domRect?.width || 1)) * zoomImgWidth;

    return { x, y };
}

const calcLensPosition = (lensLength: number, mousePosition = 0, domRectValue = 0, domRectPos = 0) => {
    const position = mousePosition - domRectPos - lensLength / 2;

    if (mousePosition - domRectPos + lensLength / 2 > domRectValue) {
        return domRectValue - lensLength;
    } else if (position < 0) {
        return 0;
    }

    return position;
};

const Magnifier: FC<IProps> = ({ zoomImg, offsetLeft, offsetTop, zoomImgWidth, zoomImgHeight, children }) => {
    const [showPortal, setShowPortal] = useState(false);
    const [domRect, setDomRect] = useState<DOMRect>();
    const [mousePosition, setMousePosition] = useState<{ pageX: number; pageY: number } | null>(null);
    const imageHolderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (imageHolderRef && imageHolderRef.current) {
            const imageElement = imageHolderRef.current?.querySelector<HTMLImageElement>('img');
            setDomRect(imageElement?.getBoundingClientRect());
        }
    }, [zoomImg, children]);

    const imageElement = imageHolderRef.current?.querySelector<HTMLImageElement>('img');

    // get the lens height / width in ratio to the zoom image dimensions
    const lensHeight = ((domRect?.height || 0) / zoomImgHeight) * (domRect?.height || 0);
    const lensWidth = ((domRect?.width || 0) / zoomImgWidth) * (domRect?.width || 0);

    // magnified position for the zoom container
    const backgroundPosition = calcImagePosition(
        mousePosition,
        domRect,
        { height: lensHeight, width: lensWidth },
        zoomImgHeight,
        zoomImgWidth,
    );

    // get position to display the lens
    const lensPositionTop = calcLensPosition(lensHeight, mousePosition?.pageY, domRect?.height, domRect?.top);
    const lensPositionLeft = calcLensPosition(lensWidth, mousePosition?.pageX, domRect?.width, domRect?.left);

    return (
        <>
            <span
                ref={imageHolderRef}
                style={{ display: 'inline-block', position: 'relative' }}
                onMouseEnter={() => {
                    setShowPortal(true);
                }}
                onMouseLeave={() => {
                    setShowPortal(false);
                }}
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
                            backgroundPosition: `-${backgroundPosition.x}px -${backgroundPosition.y}px`,
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
