import React from 'react';
import reducer from '../reducer';

describe('reducer', () => {

    const initialState = {};

    it('should create handle RECEIVED_FILMS action correctly', () => {
        const action = {
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
        };
        expect(reducer(initialState, action)).toEqual(
            {
                ...initialState,
                films: [
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
    });

    it('should create handle SEARCH_BY action correctly', () => {
        const action = {type: 'SEARCH_BY', payload: 'title'};
        expect(reducer(initialState, action)).toEqual({...initialState, searchBy: 'title'});
    });

    it('should create handle SORT_BY action correctly', () => {
        const action = {type: 'SORT_BY', payload: 'rating'};
        expect(reducer(initialState, action)).toEqual({...initialState, sortBy: 'rating'});
    });

    it('should create handle unrecognized action correctly', () => {
        const action = {type: 'UNKNOWN_ACTION'};
        expect(reducer(initialState, action)).toEqual({...initialState});
    });

    it('should create handle undefined state correctly', () => {
        const action = {type: 'UNKNOWN_ACTION'};
        expect(reducer(undefined, action)).toEqual({});
    });

});