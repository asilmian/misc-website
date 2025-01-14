import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/about.sass'

const JoinPage = () => {
    return (
        <Layout>
            <SEO title="Join" />
            <Banner class_suffix="deep"/>
            <div className="about-container">
                <div className="about-content">
                    <h1>JOIN US.</h1>
                    <p>
                        Join us for weekly lessons on InfoSec and CySec fundamentals as well as talks and networking events with industry professionals.
                    </p>
                    <h1>Workshops</h1>
                    <p>
                        Weekly workshops typically take place throughout the semester on <b>Thursdays</b> from <b>1:15pm - 3pm</b> at some location in the Parkville campus (see the <Link to="/events">events page</Link> or our <a href="https://facebook.com/uomisc">Facebook page</a> for more details about workshops and other events). These workshops are aimed at giving you essential knowledge and letting you improve your practical skills with custom designed CTF-style challenges. We cover a range of topics including:
                    <ul>
                        <li>General Linux Skills</li>
                        <li>Web Application Security</li>
                        <li>Mobile Security</li>
                        <li>Reverse Engineering</li>
                        <li>Binary Exploitation</li>
                        <li>Forensics</li>
                        <li>Steganography</li>
                        <li>Cryptography</li>
                        <li>Penetration Testing</li>
                    </ul>
                    </p>
                    <h1>How To Join</h1>
                    <p>
                        <ol>
                            <li>Provide us with your details <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6yxrJFwokhd7GiJGSdd7YUn8kDvk4AGsnfjYv6yloEVuUaA/viewform">here</a>.</li>
                            <li>Come to any workshop session to make payment.</li>
                        </ol>
                        Membership is $5 anually for University of Melbourne students. <span style={{ fontSize: '9px' }}><br/>(very worth it for a year of pizza every week and awesome events)</span>.
                        <br/><br/>
                        Feel free to join our <a href="https://discord.gg/sUAJ9b3">Discord server</a> where we discuss challenges and post details about upcoming events.
                    </p>
                    <h1>Constitution</h1>
                    <p>The club's constitution can be found <a href="/misc-constitution-2018aug.pdf">here</a>.</p>
                </div>
            </div>
        </Layout>
    )

} 
export default JoinPage
