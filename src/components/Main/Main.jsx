import React from 'react';
import StatusBar from "../StatusBar/StatusBar";
import FilmList from "../FilmList/FilmList";

export default class Main extends React.PureComponent {

    render() {
        return (
            <main>
                <StatusBar />
                <FilmList films={
                    [
                        {
                            src: './assets/sample/ffkingsglaive.jpg',
                            title: 'Final Fantasy: Kingsglaive',
                            alt: 'Final Fantasy: Kingsglaive cover',
                            genre: 'Drama/Fantasy',
                            date: 2016,
                            key: 1
                        },
                        {
                            src: './assets/sample/ffadventchildren.png',
                            title: 'Final Fantasy: Advent Children',
                            alt: 'Final Fantasy: Advent Children cover',
                            genre: 'Drama/Fantasy',
                            date: 2005,
                            key: 2
                        },
                        {
                            src: './assets/sample/greenbook.jpg',
                            title: 'Green Book',
                            alt: 'Green Book cover',
                            genre: 'Drama/Comedy',
                            date: 2018,
                            key: 3
                        },
                        {
                            src: './assets/sample/parasite.jpeg',
                            title: 'Parasite',
                            alt: 'Parasite cover',
                            genre: 'Drama/Mystery',
                            date: 2019,
                            key: 4
                        },
                        {
                            src: './assets/sample/jackhouse.jpg',
                            title: 'The House That Jack Built',
                            alt: 'The House That Jack Built cover',
                            genre: 'Drama/Thriller',
                            date: 2018,
                            key: 5
                        },
                        {
                            src: './assets/sample/joker.jpg',
                            title: 'Joker',
                            alt: 'Joker cover',
                            genre: 'Drama/Thriller',
                            date: 2019,
                            key: 6
                        }
                    ]
                } />
            </main>
        );
    }

}