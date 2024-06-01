import React from "react";
import playpointGif from '../images/playpointgif.gif';
import trvlrGif from '../images/trvlrgif.gif';
import comingSoon from '../images/comingsoon.gif';

function Portfolio() {
    const projects = [
        {
            title: "PlayP🎯int",
            description: "A gaming review app where you can search for any game, write reviews, update reviews, add friends and see their reviews. Built using Node.js, Express.js, Handlebars.js, PostgreSQL and Sequelize.",
            image: playpointGif,
            link: "https://playpoint.onrender.com/"
        },
        {
            title: "TRVLR",
            description: "Using TRVLR you can plan upcoming trips! By entering your destination you can convert currency and learn fun facts about your destination. Built with HTML, CSS and JS.",
            image: trvlrGif,
            link: "https://cfriedman2156.github.io/travel-companion-app/"
        },
        {
            title: "ReadyCheck",
            description: "An app that allows you to send out 'group-up' notifications to your friends! Get together for a gaming session, pickleball or anything in between. Built with MongoDB, GraphQL API, Express.js, Node.js and React.",
            image: comingSoon,
            link: ""
        }
    ];

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-5xl font-bold">Portfolio</h1>
                    <p className="py-6">Check out some of my projects!</p>
                    <section className="flex flex-wrap justify-evenly lg:flex-row">
                        {projects.map((project, index) => (
                            <div key={index} className="m-3 card w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                                </figure>
                                <div className="card-body text-left">
                                    <h2 className="card-title">{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div className="card-actions justify-end">
                                        {project.link ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
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
