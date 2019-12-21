import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Filter from '../src/components/Filter/Filter';

export default {
    title: 'Filter',
    decorators: [withKnobs],
};

export const view = () => {
    class StoryComp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: this.props.value || 'title',
            };
        }

        onButtonClick = (value) => this.setState({ value });

        render() {
            return (
                <Filter title="Search by" selected={this.state.value} buttons={
                    [
                        {
                            text: 'Title', value: 'title', handler: () => this.onButtonClick('title'), key: 1,
                        },
                        {
                            text: 'Genre', value: 'genres', handler: () => this.onButtonClick('genres'), key: 2,
                        },
                    ]
                }/>
            );
        }
    }

    return <StoryComp/>;
};
