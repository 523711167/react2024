import React, {useLayoutEffect, useRef, useState} from 'react';
import {createPortal} from "react-dom";

/**
 *
 * useEffect是发生在浏览器渲染DOM完成后执行
 * useLayoutEffect是会阻塞浏览器DOM渲染，执行hook后再渲染DOM
 * @Author pxx
 * @DATA 2023/12/8 17:11
 */
function Index() {
    return (
        <>
            <ButtonWithTooltip
                tooltipContent={
                    <div>
                        This tooltip does not fit above the button.
                        <br/>
                        This is why it's displayed below instead!
                    </div>
                }
            >
                Hover over me (tooltip above)
            </ButtonWithTooltip>
            <div style={{height: 50}}/>
            <ButtonWithTooltip
                tooltipContent={
                    <div>This tooltip fits above the button</div>
                }
            >
                Hover over me (tooltip below)
            </ButtonWithTooltip>
            <div style={{height: 50}}/>
            <ButtonWithTooltip
                tooltipContent={
                    <div>This tooltip fits above the button</div>
                }
            >
                Hover over me (tooltip below)
            </ButtonWithTooltip>
        </>
    );
}


function TooltipContainer({children, x, y, contentRef}) {
    return (
        <div
            style={{
                position: 'absolute',
                pointerEvents: 'none',
                left: 0,
                top: 0,
                transform: `translate3d(${x}px, ${y}px, 0)`
            }}
        >
            <div ref={contentRef} className="tooltip">
                {children}
            </div>
        </div>
    );
}

function Tooltip({children, targetRect}) {
    const ref = useRef(null);
    const [tooltipHeight, setTooltipHeight] = useState(0);

    // 人为地减慢了渲染
    let now = performance.now();
    while (performance.now() - now < 100) {
        // console.log(performance.now() - now)
        // 不做任何事情...
    }

    //可以替换为useEffect有不同的效果
    useLayoutEffect(() => {
        const {height} = ref.current.getBoundingClientRect();
        setTooltipHeight(height);
    }, []);

    let tooltipX = 0;
    let tooltipY = 0;
    if (targetRect !== null) {
        tooltipX = targetRect.left;
        tooltipY = targetRect.top - tooltipHeight;
        if (tooltipY < 0) {
            // 它不适合上方，因此把它放在下面。
            tooltipY = targetRect.bottom;
        }
    }

    return createPortal(
        <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
            {children}
        </TooltipContainer>,
        document.body
    );
}

function ButtonWithTooltip({tooltipContent, ...rest}) {
    const [targetRect, setTargetRect] = useState(null);
    const buttonRef = useRef(null);
    return (
        <>
            <button
                {...rest}
                ref={buttonRef}
                onPointerEnter={() => {
                    const rect = buttonRef.current.getBoundingClientRect();
                    setTargetRect({
                        left: rect.left,
                        top: rect.top,
                        right: rect.right,
                        bottom: rect.bottom,
                    });
                }}
                onPointerLeave={() => {
                    setTargetRect(null);
                }}
            />
            {targetRect !== null && (
                <Tooltip targetRect={targetRect}>
                    {tooltipContent}
                </Tooltip>
            )
            }
        </>
    );
}

export default Index;