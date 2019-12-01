import React from 'react';
import {shallow} from 'enzyme'
import { act } from 'react-dom/test-utils';
import {receivedFilms, setSearchBy, setSortBy, fetchFilms, SEARCH_BY} from '../actions';

describe('actions', () => {
    it('should create receivedFilms action correctly', () => {
        const actual = receivedFilms({
                data: [
                    {
                        "id": 129,
                        "title": "Spirited Away",
                        "vote_average": 8.4,
                        "vote_count": 5095,
                        "release_date": "2001-07-20"
                    }
                ]
            }
        );
        expect(actual).toEqual({
            type: 'RECEIVED_FILMS',
            payload: [
                {
                    "id": 129,
                    "title": "Spirited Away",
                    "vote_average": 8.4,
                    "vote_count": 5095,
                    "release_date": "2001-07-20"
                }
            ]
        });
    });


    it('should create setSearchBy action correctly', () => {
        const actual = setSearchBy('title');
        expect(actual).toEqual({type: 'SEARCH_BY', payload: 'title'});
    });

    it('should create setSortBy action correctly', () => {
        const actual = setSortBy('rating');
        expect(actual).toEqual({type: 'SORT_BY', payload: 'rating'});
    });

    // it('should create fetchFilms action correctly', async () => {
    //     const fakeSearchResponse = {
    //         films: []
    //     };
    //
    //     jest.spyOn(global, 'search').mockImplementation(() =>
    //         Promise.resolve({
    //             json: () => Promise.resolve(fakeSearchResponse)
    //         })
    //     );
    //
    //     await act(async () => {
    //         fetchFilms();
    //     });
    //
    //     global.fetch.mockRestore();
    // });
});