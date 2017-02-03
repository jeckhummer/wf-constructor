import React from 'react';
import {Icon} from "semantic-ui-react";

export const RulerItem = ({
    content,
    vertical,
    height,
    width,
    onPrevClick,
    onNextClick,
    style,
    last,
    first
}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: vertical ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: height,
            width: width,
            ...style,
        }}>
            {
                vertical
                ? (
                    <div style={{textAlign: 'center'}}>
                        {
                            first ? null : (
                                <div>
                                    <Icon
                                        link
                                        fitted
                                        name="chevron up"
                                        onClick={onPrevClick}/>
                                </div>
                            )
                        }
                        <div style={{
                            width: width,
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                        }}>
                            {content}
                        </div>
                        {
                            last ? null : (
                                <div>
                                    <Icon
                                        link
                                        fitted
                                        name="chevron down"
                                        onClick={onNextClick}/>
                                </div>
                            )
                        }
                    </div>
                )
                : (
                    <div style={{textAlign: 'center'}}>
                        {
                            first ? null : (
                                <span>
                                    <Icon
                                        link
                                        fitted
                                        name="chevron left"
                                        onClick={onPrevClick}/>
                                </span>
                            )
                        }
                        &nbsp;
                        &nbsp;
                        {content}
                        &nbsp;
                        &nbsp;
                        {
                            last ? null : (
                                <span>
                                    <Icon
                                        link
                                        fitted
                                        name="chevron right"
                                        onClick={onNextClick}/>
                                </span>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};