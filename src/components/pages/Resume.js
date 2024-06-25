import React from "react";

function Resume() {
    return (
        <div className="p-20 bg-base-200">
            <h1 className="text-5xl text-center font-bold mb-2">Chase Friedman</h1>
            <p className="text-center">Los Angeles, CA | (619) 866-8663 | chaseafriedman@gmail.com</p>
            <p className="text-center">LinkedIn: <a className='text-primary' href="https://www.linkedin.com/in/chase-friedman-a20372133/">Chase Friedman</a></p>
            <p className="text-center">GitHub: <a className='text-primary' href="https://github.com/cfriedman2156">cfriedman2156</a></p>
            <section className="m-10">
                <h2 className="text-3xl font-bold mt-6 text-center ">Summary</h2>
                <p className="px-6 py-2 text-center mx-32">Full Stack Web Developer with a diverse background in content creation, project management, and talent representation. Demonstrated expertise in developing user-friendly applications, managing high-profile projects, and building substantial online followings. Known for effective content strategy, audience engagement, and strong communication skills.</p>

                <h2 className="text-3xl font-bold mt-6 text-center">Technical Skills</h2>
                <p className="px-6 py-2 text-center"><span className="font-semibold">Languages: </span>HTML, CSS, JavaScript, React, NextJS, NodeJS, Handlebars</p>
                <p className="px-6 text-center"><span className="font-semibold">Applications: </span>Git, Jest, Insomnia, GraphQL, MongoDB, PostgreSQL, Microsoft Office</p>

                <h2 className="text-3xl font-bold mt-6 text-center">Projects</h2>
                <div className="text-center">
                    <h3 className="text-xl font-bold mt-4 px-6 ">ReadyCheck</h3>
                    <div className="px-6 py-2">
                        <p>GitHub: <a className='text-primary' href="https://github.com/jasongalas/ready-check">jasongalas/ready-check</a> | Deployed: <a className='text-primary' href="https://ready-check.onrender.com/">ready-check.onrender.com</a></p>
                        <p>A scheduling and event management tool with invite and RSVP functionality.</p>
                        <p>Core responsibilities: Developed the frontend using React and Tailwind, implemented backend with NodeJS and MongoDB.</p>
                        <p>Tools/languages used: React, NodeJS, MongoDB, Socket.io</p>
                    </div>
                    <div className="px-6 py-2">
                        <h3 className="text-xl font-bold mt-4">PlayPoint</h3>
                        <p>GitHub: <a className='text-primary' href="https://github.com/cfriedman2156/playpoint">cfriedman2156/playpoint</a> | Deployed: <a className='text-primary' href="https://playpoint.onrender.com/">playpoint.onrender.com</a></p>
                        <p>A game rating app where you can add friends, see and share their reviews.</p>
                        <p>Core responsibilities: Designed and implemented the page using Tailwind CSS, DaisyUI, and Handlebars. Made backend routes for Sequelize database.</p>
                        <p>Tools/languages used: Node, Handlebars, Insomnia, PostgreSQL</p>
                    </div>
                    <div className="px-6 py-2">
                        <h3 className="text-xl font-bold mt-4">2 The Rescue Animal Sanctuary</h3>
                        <p>GitHub: <a className='text-primary' href="https://github.com/cfriedman2156/2-the-rescue">cfriedman2156/2-the-rescue</a></p>
                        <p>An animal sanctuary website, with details and all animals listed, donate, sponsor and shop options integrated with Stripe.</p>
                        <p>Core responsibilities: Solo project, created all JS, styling, server side, client side, Multer and Stripe integration.</p>
                        <p>Tools/languages used: Next.js, Tailwind, MongoDB, Multer, Stripe</p>
                    </div>
                </div>
                <div className="mx-28">
                    <h2 className="text-3xl font-bold mt-6">Experience</h2>
                    <div>
                        <h3 className="text-xl font-bold mt-4">Content Creator</h3>
                        <p className="font-semibold">Self-Employed, Los Angeles, CA, August 2022 - Present</p>
                        <p>Documented and shared the journey of full recovery from a C4-C7 spinal cord injury.</p>
                        <p>Built a substantial and engaged follower base of over 500,000. Negotiated brand deals and provided personalized consultation to spinal cord injury patients.</p>                        
                        <p className="font-semibold mt-2">Key Accomplishments:</p>
                        <ul className="list-disc list-inside">
                            <li>Grew social media following to 500,000+ through effective content strategy.</li>
                            <li>Negotiated profitable brand deals independently. </li>
                            <li>Provided support and guidance to spinal cord injury patients.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-4">Project Manager</h3>
                        <p className="font-semibold">Levity Live, Los Angeles, CA, November 2021 - August 2022</p>
                        <p>Managed day-to-day business operations for high-profile clients.</p>
                        <p>Produced and promoted multiple Netflix Comedy Specials</p>
                        <p>Developed innovative solutions during the COVID-19 pandemic.</p>
                        <p className="font-semibold mt-2">Key Accomplishments: </p>
                        <ul className="list-disc list-inside">
                            <li>Produced and promoted Netflix Comedy Specials, achieving Top 10 releases.</li>
                            <li>Developed and managed Bert Kreischer’s drive-in theater tour during COVID-19.</li>
                            <li>Negotiated high-value deals and promoted successful comedy tours.</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-4">Assistant</h3>
                        <p className="font-semibold">Levity Live, Los Angeles, CA, March 2019 - November 2021</p>
                        
                            <p>Supported the President of Talent, managed client calendars, and communicated with producers and casting directors.</p>
                        

                        <h3 className="text-xl font-bold mt-4">Assistant</h3>
                        <p className="font-semibold">Paradigm Talent Agency, Beverly Hills, CA, June 2018 - March 2019</p>
                        
                            <p>Supported the head of TV Talent department, scheduled auditions, and evaluated scripts.</p>
                        
                    </div>
                    <h2 className="text-3xl font-bold mt-6">Education</h2>
                    <div>
                        <p className="font-semibold">Full Stack Web Development Boot Camp Certificate</p>
                        <p>UCLA Extension, Los Angeles, CA</p>
                        <p className="font-semibold">Bachelor of Arts in Film and Media Studies</p>
                        <p>Whitman College, Walla Walla, WA, Graduated May 2018</p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Resume;
