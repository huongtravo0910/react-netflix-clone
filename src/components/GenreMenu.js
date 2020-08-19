import React from "react";
import "./genreMenu.scss"

export default function GenreMenu(){
    return(
        <div className="genreMenu">
            <div className="genreMenu__col">
            <ul>
                <li>Action</li>
                <li>Anime</li>
                <li>Asian</li>
                <li>British</li>
                <li>Comedies</li>
                <li>Crime</li>
                <li>Docuseries</li>
            </ul>
            </div >
            <div className="genreMenu__col">
            <ul>
                <li>Drama</li>
                <li>European</li>
                <li>History</li>
                <li>Horror</li>
                <li>K-dramas</li>
                <li>Kids</li>
                <li>Reality & Talk</li>
            </ul>
            </div>
            <div className="genreMenu__col">
            <ul>
                <li>Romance</li>
                <li>Sci-Fi & Fanstasy</li>
                <li>Science & Nature</li>
                <li>Teen</li>
                <li>Thriller</li>
                <li>US</li>
            </ul>
            </div>
        </div>


    )
}