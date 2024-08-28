import React from "react";
import playpoint from '../images/playpoint.webp';
import trvlr from '../images/trvlr.webp';
import readyCheck from '../images/readycheck.webp';
import rescue from '../images/2therescue.webp';

function Portfolio() {
    const projects = [
        {
            title: "ReadyCheck",
            description: "An app that allows you to send out 'group-up' notifications to your friends! Get together for a gaming session, pickleball or anything in between.",
            image: readyCheck,
            features: "MongoDB, GraphQL, Express.js, Node.js, Socket.io, React and Tailwind",
            deployed: "https://ready-check.onrender.com/",
            github: "https://github.com/jasongalas/ready-check"
        },
        {
            title: "2 The Rescue Animal Sanctuary",
            description: "A website for an animal sanctuary based in Ramona, CA, that homes a wide range of animals from horses and cows to peacocks. Users can browse through all the animals, donate, set up sponsorships, and even take a personality quiz to see which animal is most like them!",
            image: rescue,
            features: "Next.js, Node.js, GraphQL, Resend, Stripe, Multer, MongoDB, AWS S3, Tailwind",
            deployed: "https://www.2therescueanimalsanctuary.org/",
            github: "https://github.com/cfriedman2156/2-the-rescue"
        },
        {
            title: "PlayP🎯int",
            description: "A gaming review app where you can search for any game, write reviews, update reviews, add friends and see their reviews. (Deployed with Render, please give it time to load)",
            image: playpoint,
            features: "Node.js, Express.js, Handlebars.js, PostgreSQL, Sequelize, Tailwind",
            deployed: "https://playpoint.onrender.com/signup",
            github: "https://github.com/cfriedman2156/playpoint"
        },
        {
            title: "TRVLR",
            description: "Using TRVLR you can plan upcoming trips! By entering your destination you can convert currency and learn fun facts about your destination.",
            image: trvlr,
            features: "Built with HTML, CSS, Javascript, and Exchangerate-API.com",
            deployed: "https://cfriedman2156.github.io/travel-companion-app/",
            github: "https://github.com/cfriedman2156/travel-companion-app"
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
                                    <img src={project.image} alt={project.title} className="w-full object-contain" />
                                </figure>
                                <div className="card-body text-left">
                                    <h2 className="text-3xl font-bold text-center pb-4">{project.title}</h2>
                                    <div className="collapse collapse-plus bg-base-200">
                                        <input type="radio" name="my-accordion-3" defaultChecked />
                                        <div className="collapse-title text-xl font-medium">About</div>
                                        <div className="collapse-content">
                                            <p>{project.description}</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-plus bg-base-200">
                                        <input type="radio" name="my-accordion-3" />
                                        <div className="collapse-title text-xl font-medium">Features</div>
                                        <div className="collapse-content">
                                            <p>{project.features}</p>
                                        </div>
                                    </div>
                                    <div className="collapse collapse-plus bg-base-200">
                                        <input type="radio" name="my-accordion-3" />
                                        <div className="collapse-title text-xl font-medium">Links</div>
                                        <div className="collapse-content">
                                            <div className="card-actions justify-around pt-4">
                                                {project.deployed ? (
                                                    <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="btn w-32 btn-primary">Deployed Site</a>
                                                ) : (
                                                    <button className="btn btn-primary" disabled>Coming Soon!</button>
                                                )}
                                                {project.github ? (
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn w-32 btn-primary">Github</a>
                                                ) : (
                                                    <button className="btn btn-primary" disabled>Coming Soon!</button>
                                                )}
                                            </div>
                                        </div>
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
