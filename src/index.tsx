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
    });

    return createPortal(children, container.current);
};

const Magnifier: FC<IProps> = ({ zoomImg, offsetLeft, offsetTop, children }) => {
    const [showPortal, setShowPortal] = useState(false);
    const [domRect, setDomRect] = useState<DOMRect>();
    const [mousePosition, setMousePosition] = useState<{ pageX: number; pageY: number } | null>(null);
    const blaImgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (blaImgRef && blaImgRef.current) {
            setDomRect(blaImgRef.current.getBoundingClientRect());
        }
    }, [zoomImg, children]);

    const backgroundX = (((mousePosition?.pageX || 0) - (domRect?.left || 0)) / (domRect?.width || 1)) * 100;
    const backgroundY = (((mousePosition?.pageY || 0) - (domRect?.top || 0)) / (domRect?.height || 1)) * 100;

    return (
        <>
            <span
                ref={blaImgRef}
                style={{ display: 'inline-block' }}
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
                {children}
            </span>
            {showPortal && (
                <MagnifierPortal>
                    <div
                        style={{
                            position: 'absolute',
                            border: '1px solid black',
                            backgroundImage: `url(${zoomImg})`,
                            backgroundPosition: `${backgroundX}% ${backgroundY}%`,
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
