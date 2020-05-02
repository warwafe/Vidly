import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies: getMovies()
     };

handleDelete = (movie)
    render() { 
        return <table className="table">
            <thead>
                <ty>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </ty>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={() => this.handleDelete()} className="btn btn-danger"> Delete </button></td>
                </tr>
                ))}
            </tbody>
        </table>
    }
}
 
export default Movies;