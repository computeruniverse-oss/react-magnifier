import React, { cloneElement, FC, PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface IProps {
    zoomImg: string;
    alt?: string;
}

const PinchZoom: FC<PropsWithChildren<IProps>> = ({ children, zoomImg, alt }) => {
    const [domRect, setDomRect] = useState<DOMRect>();
    const [loadZoomImg, setLoadZoomImg] = useState(false);
    const [hideOriginalImg, setHideOriginalImg] = useState(false);
    const imageElementRef = useRef<HTMLDivElement>(null);
    let animationFrameRequest: number;

    const hideOriginalImgWrapper = () => {
        if (!hideOriginalImg) setHideOriginalImg(true);
    };

    useEffect(() => {
        if (imageElementRef?.current) {
            const newDomRect: DOMRect | undefined = imageElementRef.current.getBoundingClientRect();

            if (
                domRect?.top !== newDomRect?.top ||
                domRect?.left !== newDomRect?.left ||
                domRect?.width !== newDomRect?.width ||
                domRect?.height !== newDomRect?.height
            ) {
                setDomRect(newDomRect);
            }
        }
        setHideOriginalImg(false);
    }, [children]);

    useEffect(() => {
        animationFrameRequest = window.requestAnimationFrame(() => {
            setLoadZoomImg(true);
        });
        return () => window.cancelAnimationFrame(animationFrameRequest);
    });

    return (
        <>
            <div style={{ position: 'relative', touchAction: 'none' }}>
                {!hideOriginalImg && children && cloneElement(children as ReactElement, { ref: imageElementRef })}
                {loadZoomImg && (
                    <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
                        <TransformWrapper
                            onPinchingStart={hideOriginalImgWrapper}
                            onWheelStart={hideOriginalImgWrapper}
                        >
                            <TransformComponent>
                                <img src={zoomImg} alt={alt} height={domRect?.height} width={domRect?.width} />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                )}
            </div>
        </>
    );
};

export default PinchZoom;
