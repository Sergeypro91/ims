import React, { useState, useCallback, useLayoutEffect, useRef, useEffect, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import _ from 'lodash';
import { State } from 'redux/store';
import { CustomScrollbarState } from './customScrollbarType';
import './CustomScrollbar.scss';

const CustomScrollbarInner = (props: CustomScrollbarState) => {
    const [hovering, setHovering] = useState(false);
    const [scrollBoxHeight, setScrollBoxHeight] = useState(20);
    const [scrollBoxTop, setScrollBoxTop] = useState(0);
    const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
    const [isDragging, setDragging] = useState(false);
    const [ifScrollAreaSmall, setIfScrollAreaSmall] = useState(true);
    const scrollHostRef = useRef<HTMLDivElement>(null);
    const [scrollHostHeight, setScrollHostHeight] = useState(0);
    const hoverScrollBar = useRef(false);
    const marginScrollThumb = 10;

    const { windowSize } = useSelector((state: State) => state.app, shallowEqual);

    /* Catching mouse on enter in block with custom scroll */
    const handleMouseOver = useCallback(() => {
        if (!hovering) {
            setHovering(true);
        }
    }, [hovering]);

    /* Catching mouse on exit from block with custom scroll */
    const handleMouseOut = useCallback(() => {
        if (hovering) {
            setHovering(false);
        }
    }, [hovering]);

    /* Catching end of dragable event on using scrollthumb */
    const handleDocumentMouseUp = useCallback(
        (e: MouseEvent) => {
            if (isDragging) {
                e.preventDefault();
                setDragging(false);
            }
            hoverScrollBar.current = false;
        },
        [isDragging]
    );

    /* Calculate scroll thumb position on scrolling */
    const handleDocumentMouseMove = useCallback(
        (e: MouseEvent) => {
            if (isDragging) {
                e.preventDefault();
                e.stopPropagation();

                const scrollHostElement = scrollHostRef.current;
                const { scrollHeight, offsetHeight } = scrollHostElement!;
                const deltaY = e.clientY - lastScrollThumbPosition;
                const percentage = deltaY * (scrollHeight / (offsetHeight - marginScrollThumb));

                setScrollThumbPosition(e.clientY);
                setScrollBoxTop(
                    Math.min(Math.max(0, scrollBoxTop + deltaY), offsetHeight - marginScrollThumb - scrollBoxHeight)
                );

                scrollHostElement!.scrollTop = Math.min(
                    scrollHostElement!.scrollTop + percentage,
                    scrollHeight - (offsetHeight - marginScrollThumb)
                );
            }
        },
        [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
    );

    /* Catching start of draging scrollthumb, calculate his position */
    const handleScrollThumbMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setScrollThumbPosition(e.clientY);
        setDragging(true);

        hoverScrollBar.current = true;
    }, []);

    /* Catching scroll event on scrollbar, moving scrollthumb along scrollbar */
    const scrollCatch = useCallback((e: React.WheelEvent) => {
        if (!scrollHostRef) {
            return;
        }

        e.preventDefault();
        scrollHostRef.current!.scrollTo({
            top: scrollHostRef.current!.scrollTop + e.deltaY
        });
    }, []);

    /* Calculate ratio beatwyn mouse click coordinates by scrollbar, to height of scrollbar, going to this ratio on page */
    const scrolTo = useCallback((e: React.MouseEvent) => {
        const scrollHostElement = scrollHostRef.current;
        const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement!;
        const currentTargetRect = e.currentTarget.getBoundingClientRect();
        const eventOffsetY = e.pageY - currentTargetRect.top;

        if (eventOffsetY < scrollTop) {
            scrollHostElement!.scrollTo({
                top: eventOffsetY * (scrollHeight / (offsetHeight - marginScrollThumb)),
                behavior: 'smooth'
            });
        } else {
            scrollHostElement!.scrollTo({
                top:
                    eventOffsetY * (scrollHeight / (offsetHeight - marginScrollThumb)) -
                    (offsetHeight - marginScrollThumb),
                behavior: 'smooth'
            });
        }
    }, []);

    /* Calculate scrollthumb height */
    const handleScroll = useCallback(() => {
        if (!scrollHostRef) {
            return;
        }

        const scrollHostElement = scrollHostRef.current;
        const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement!;
        let newTop = (scrollTop / scrollHeight) * (offsetHeight - marginScrollThumb);

        newTop = Math.min(newTop, offsetHeight - marginScrollThumb - scrollBoxHeight);

        setScrollBoxTop(newTop);
    }, [scrollBoxHeight]);

    /* Calculate scrollbar div scrollheight, save new value when it change */

    const setScrollHostHeightOnChange = () => {
        setScrollHostHeight(scrollHostRef.current?.scrollHeight!);
    };

    useLayoutEffect(() => {
        const call = _.debounce(setScrollHostHeightOnChange, 250);

        call();
        // eslint-disable-next-line
    }, [scrollHostRef.current?.scrollHeight]);

    /* Render and rerender custom scrollbar */
    useEffect(() => {
        const scrollHostElement = scrollHostRef.current;
        const { offsetHeight, scrollHeight } = scrollHostElement!;

        if (offsetHeight >= scrollHeight) {
            setIfScrollAreaSmall(false);
        } else {
            setIfScrollAreaSmall(true);
        }

        const scrollThumbPercentage = (offsetHeight - marginScrollThumb) / scrollHeight;
        const scrollThumbHeight = Math.max(scrollThumbPercentage * offsetHeight, 50);

        setScrollBoxHeight(scrollThumbHeight);

        scrollHostElement!.addEventListener('scroll', handleScroll, true);

        return () => {
            scrollHostElement!.removeEventListener('scroll', handleScroll, true);
        };
    }, [windowSize, handleScroll, props.trigger, scrollHostHeight]);

    /* Setting up and clearing an event listener for catching interactions with the scroll bar */
    useEffect(() => {
        document.addEventListener('mousemove', handleDocumentMouseMove);
        document.addEventListener('mouseup', handleDocumentMouseUp);
        document.addEventListener('mouseleave', handleDocumentMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleDocumentMouseMove);
            document.removeEventListener('mouseup', handleDocumentMouseUp);
            document.removeEventListener('mouseleave', handleDocumentMouseUp);
        };
    }, [handleDocumentMouseMove, handleDocumentMouseUp]);

    return (
        <div
            className="scrollhost-container"
            onMouseOver={handleMouseOver}
            onFocus={() => void 0}
            onMouseOut={handleMouseOut}
            onBlur={() => void 0}>
            <div ref={scrollHostRef} className="scrollhost">
                {props.children}
            </div>

            {ifScrollAreaSmall && (
                <div
                    className={`scroll-bar${hovering ? ' shown' : ''}${hoverScrollBar.current ? ' hover' : ''}`}
                    onWheel={scrollCatch}
                    onMouseDown={scrolTo}>
                    <div
                        className="scroll-thumb"
                        style={{ height: scrollBoxHeight, top: scrollBoxTop }}
                        onMouseDown={handleScrollThumbMouseDown}
                    />
                </div>
            )}
        </div>
    );
};

export const CustomScrollbar = memo(CustomScrollbarInner);
