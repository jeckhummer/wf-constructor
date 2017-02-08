import React from 'react';
import {ScrollSync} from '../common/ScrollSync';
import {ScrollScope} from '../common/ScrollScope';
import {Grid} from '../common/Grid';

export class CoordinatePlane extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.state = {
            xScroll: '0',
            yScroll: '0'
        };
    }

    onScroll(e) {
        this.setState({
            yScroll: e.target.scrollTop,
            xScroll: e.target.scrollLeft,
        });
    }

    render() {
        const {
            children,
            contentHeight,
            contentWidth,
            hRulerContent,
            vRulerContent,
            cornerContent,
            cornerHeight,
            cornerWidth,
            border,
        } = this.props;

        const corner = (
            <ScrollScope
                width={cornerWidth}
                height={cornerHeight}>
                {cornerContent}
            </ScrollScope>
        );

        const hRuler = hRulerContent ? (
            <ScrollScope
                height={cornerHeight}
                width={contentWidth}
                vScroll={true}>
                <ScrollSync left={this.state.xScroll}>
                    {hRulerContent}
                </ScrollSync>
            </ScrollScope>
        ) : null;

        const vRuler = vRulerContent ? (
            <ScrollScope
                height={contentHeight}
                width={cornerWidth}
                hScroll={true}>
                <ScrollSync top={this.state.yScroll}>
                    {vRulerContent}
                </ScrollSync>
            </ScrollScope>
        ) : null;

        const _content = (
            <ScrollScope
                height={contentHeight}
                width={contentWidth}
                hScroll={true}
                vScroll={true}
                onScroll={this.onScroll.bind(this)}>
                {children}
            </ScrollScope>
        );

        let matrix;

        if (vRuler && hRuler) {
            matrix = [
                [corner, hRuler],
                [vRuler, _content]
            ];
        } else if (vRuler) {
            matrix = [
                [vRuler, _content]
            ];
        } else if (hRuler) {
            matrix = [
                [hRuler],
                [_content]
            ];
        } else {
            matrix = [[_content]];
        }

        return (
            <Grid
                matrix={matrix}
                border={border}
            />
        );
    };
}