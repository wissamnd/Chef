import React, { Component } from 'react';
class Post extends Component {
    render() {
        return (
        
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">{this.props.category}</strong>
              <h3 class="mb-0">
                <a className="text-dark" href="#">{this.props.title}</a>
              </h3>
              <div className="mb-1 text-muted">{this.props.date}</div>
              <p className="card-text mb-auto">{this.props.shortDesc}</p>
              <a href="#">Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" src={this.props.image}/>
          </div>
        );
    }
}

export default Post;