import React from 'react'

export default function Landing() {
    return (
        <div id="main-div" class="container">
            <div id="landing-div" class="row align-items-center justify-content-center">
                <div id="product-img-holder" class="col-12 col-md-7">
                    <img class="img-fluid" src=" https://svgshare.com/i/Jc8.svg" alt="main img" />
                </div>
                <div class="col-12 col-md-5">
                    <h2 class="text-white font-weight-bold text-center text-md-left mt-5 mt-md-0"> Welcome</h2>
                <p class="text-white text-center text-md-left">Our todo app, requires to login, if you are a member, or register if this is your first time here!
                    Create your list of todos as you engage in genuine discussion.</p>
                <div id="register-btn-holder" class="d-flex justify-content-center justify-content-md-start">
                    <button class="btn btn-lg bg-blue rounded-pill px-5 text-center"><a href="/register">Register</a></button>&nbsp; &nbsp;
                    <button type="button" class="btn btn-lg bg-blue rounded-pill px-5 text-center"><a href="/login">Login</a></button>
                </div>
             </div>
            </div>
        </div>
    )
}
