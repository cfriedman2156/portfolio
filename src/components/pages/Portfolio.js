import React from "react";
import playpoint from '../images/playpoint.png';
import trvlr from '../images/trvlr.png';
import readyCheck from '../images/readycheck.png';
import comingSoon from '../images/comingsoon.gif';

function Portfolio() {
    const projects = [
        {
            title: "ReadyCheck",
            description: "An app that allows you to send out 'group-up' notifications to your friends! Get together for a gaming session, pickleball or anything in between. Built with MongoDB, GraphQL API, Express.js, Node.js and React.",
            image: readyCheck,
            deployed: "https://ready-check.onrender.com/",
            github: "https://github.com/jasongalas/ready-check"
        },
        {
            title: "PlayP🎯int",
            description: "A gaming review app where you can search for any game, write reviews, update reviews, add friends and see their reviews. Built using Node.js, Express.js, Handlebars.js, PostgreSQL and Sequelize. (Deployed with Render, please give it time to load)",
            image: playpoint,
            deployed: "https://playpoint.onrender.com/signup",
            github: "https://github.com/cfriedman2156/playpoint"
        },
        {
            title: "TRVLR",
            description: "Using TRVLR you can plan upcoming trips! By entering your destination you can convert currency and learn fun facts about your destination. Built with HTML, CSS and JS.",
            image: trvlr,
            deployed: "https://cfriedman2156.github.io/travel-companion-app/",
            github: "https://github.com/cfriedman2156/travel-companion-app"
        },
        
        {
            title: "2 The Rescue Animal Sanctuary",
            description: "A website for an animal sanctuary that stores all animal data in MongoDB. Integration with Stripe for donations and monthly sponsorships.",
            image: comingSoon,
            deployed: ""
        },
    ];

    return (
        <div className="pt-20 hero min-h-screen gradient">
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-5xl text-white font-bold mt-6">Portfolio</h1>
                    <p className="py-6 text-xl text-white">Check out some of my projects!</p>
                    <section className="flex flex-wrap justify-evenly lg:flex-row">
                        {projects.map((project, index) => (
                            <div key={index} className="m-3 card w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                                </figure>
                                <div className="card-body text-left">
                                    <h2 className="card-title">{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div className="card-actions justify-around">
                                        {project.deployed ? (
                                            <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Deployed Site</a>
                                        ) : (
                                            <button className="btn btn-primary" disabled>Coming Soon!</button>
                                        )}
                                        {project.github ? (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github</a>
                                        ) : (
                                            <button className="btn btn-primary" disabled>Coming Soon!</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
