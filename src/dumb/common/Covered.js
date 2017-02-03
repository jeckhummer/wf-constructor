import React from 'react';

export class Covered extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.state = {
            hovered: false
        };
    }

    onMouseEnter() {
        this.setState({hovered: true});
    }
    onMouseLeave() {
        this.setState({hovered: false});
    }

    render() {
        const {children, cover} = this.props;

        return (
            <div
                style={{
                    position: 'relative',
                    float: 'left'
                }}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}>
                {children}
                {
                    this.state.hovered
                        ? (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '0px',
                                    left: '0px',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                {cover}
                            </div>
                        )
                        : null
                }
            </div>
        );
    };
}