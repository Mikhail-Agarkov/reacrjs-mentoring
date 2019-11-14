import React from 'react';
import Filter from "../Filter/Filter";

export default class StatusBar extends React.PureComponent {

    sortByHandler = (type) => {
        //Api call
    };

    render() {
        return (
            <section>
                <Filter title='Sort by' buttons={
                    [
                        {text: 'Release date', handler: () => this.sortByHandler('Release date'), key: 1},
                        {text: 'Rating', handler: () => this.sortByHandler('Rating'), key: 2}
                    ]
                }/>
            </section>
        );
    }

}