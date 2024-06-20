import React from 'react'
import imgNotFound from '../assets/image_not_found.jpg'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={imgUrl ? imgUrl : imgNotFound} className="card-img-top" alt="News" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="card-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    );
}
export default NewsItem