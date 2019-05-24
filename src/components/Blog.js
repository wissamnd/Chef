import React, { Component } from 'react';
import './Blog.css'
import Item1 from '../images/item1.JPG'
import Post from './Post'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Blog extends Component {
    render() {
        return (
            // blog title
            <div classNameName="pt-2">
            <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                containerId={'A'}  />
      <div className="jumbotron p-5 p-md-5 text-white rounded bg-secondary text-center">
        <div className="col-md-12 px-0">
          <h1 className="display-4 font-italic">Add more veggies to your plate with this Apple Broccoli Cauliflower Salad that’s tossed in a creamy, lemony garlic dressing.</h1>
          <p className="lead my-3">I’ll admit, there are times where I lack on my veggie intake, skip meals and mindlessly eat. This usually corresponds with a heavy travel schedule paired with too many</p>
          <p className="lead mb-0"><a href="https://therealfoodrds.com/apple-broccoli-cauliflower-salad/" target="_blank" className="text-white font-weight-bold">Continue reading...</a></p>
        </div>
      </div>
      <div className="row m-2 ">
        <div className="col-md-6">
        <Post
          category={"Food"}
          title = {"Trending"}
          date = {"APRIL 3, 2019"}
          shortDesc = {"homemade oat milk recipe Share on FacebookPin on PinterestEmail this to someoneShare..."}
          image = {Item1}
          />
        </div>
        <div className="col-md-6">
        <Post
          category={"Health"}
          title = {"Featured"}
          date = {"Nov 13"}
          shortDesc = {"Eating breakfast won’t help you lose weight, but skipping it might not either..."}
          image = {Item1}
          />
        </div>
      </div>
    </div>
    
        );
    }
}

export default Blog;