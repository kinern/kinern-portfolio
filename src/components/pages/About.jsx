import React, { Component } from 'react';
import Icon from '@mdi/react'
import { mdiTennis, mdiTea } from '@mdi/js';

import AOS from 'aos';
import 'aos/dist/aos.css';

const interests = [
    {icon: 'mdi-tea', title: 'Tea', text: 'I start every morning with a hot cup of tea. My current favorites are Lupicia\'s Cookie Black Flavored Tea and Amanatsu Oolong Tea'},
    {icon: 'mdi-tennis', title: 'Tennis and Badminton', text: 'I enjoy playing Badminton and other racket sports, and was an active member of the badminton club while I was working as an Assistant Language Teacher.'},
    {icon: 'hiragana-a', title: 'Japanese Language and Culture', text: 'I have taught in Japan for two years in a small village in Southern Japan. Some of my greatest experiences and came from there.'},
    {icon: 'laptop-code', title: 'Web, Game and Mobile Development', text: 'I started programming on my own while I was in Junior Highschool. I decided to pursue my interest further in uniersity and graduated with a degree in Computer Science.'},
    {icon: 'pencil-ruler', title: 'Lineart Illustration', text: 'I enjoy participating in events like Inktober and 24-Hour Comic.'},
    {icon: 'palette', title: 'Watercolor and Goauche Painting', text: 'Painting has become a new hobby of mine. You can see my artwork on my instagram profile.'},
    {icon: 'th', title: 'Pixel Artwork', text: 'Going hand-in-hand with game development, creating artwork by pixels is a great way to understand composition on a smaller scale.'}
];



class About extends Component {
    state = { }

    renderInterests = () => {
        return (
        <div className="interest-icons">
            {interests.map(item=>{

                const iconClasses = `interest-icon ${(this.state.interestIcon === item.icon)? 'active': ''}`;

                switch(item.icon){
                    case 'hiragana-a':
                        return (<div 
                            key={item.icon}
                            className={iconClasses} 
                            onClick={()=>this.changeInterestText(item)}
                            >あ</div>);
                    case 'mdi-tennis':
                        return (<div key={item.icon} className={iconClasses} ><Icon 
                            path={mdiTennis}
                            size={1.4}
                            className="mdi-icon" 
                            onClick={()=>this.changeInterestText(item)}
                            /></div>);
                    case 'mdi-tea':
                        return (<div key={item.icon} className={iconClasses} ><Icon 
                            path={mdiTea}
                            size={1.4}
                            className="mdi-icon" 
                            onClick={()=>this.changeInterestText(item)}
                            /></div>);
                    default:
                        return (<div 
                            key={item.icon}
                            className={iconClasses} 
                            onClick={()=>this.changeInterestText(item)}
                            ><i className={`fa fa-${item.icon}`}></i></div>);

                }
            })}
        </div>
        );
    }

    changeInterestText(interest){
        const {title, text, icon} = interest;
        if (this.state.interestIcon === icon){
            this.setState({
                interestTitle: '',
                interestText: '',
                interestIcon: ''
            });
        } else {
            this.setState({
                interestTitle: title,
                interestText: text,
                interestIcon: icon
            });
        }
    }

    componentDidMount(){
        AOS.init({
          duration : 1500
        })
    }

    render() { 
        return (  
        <div className="fluid-container about" id="about">
            <div className="container">
                <div className="row" data-aos='fade-left'>
                    <div className="col-sm about-title">
                        <h2>About Me</h2>
                        <img className="profile-img" alt="Profile"src={require('../../images/portfolio-portrait.png')} />
                    </div>
                    <div className="col-lg">
                        <hr />
                        <div>
                            Hello! my name is Natalie. I am a Software Engineer living in the PNW.
                            Programming is something I have enjoyed doing for many years.
                            Recently I have been working as a Full Stack Web Developer.
                            I like collaborating with others on large software projects, but I also 
                            delve into solo projects from time to time.
                        </div>
                        <br />
                        <div>
                            My other creating outlet in my artwork, which I have been producing since I was a kid. 
                            I am accustomed to colored pencil and lineart, 
                            but I have also recently picked up watercolors painting.
                            You can see a glimpse of my artwork on my Instragram profile.
                            I enjoy drawing wildlife and natural landscapes.
                        </div>
                        <br />
                        <div>
                            Something people may not know about is my interest in Japanese 
                            language and culture. After I graduated university, I was an 
                            assistant language teacher for two years Southern Japan. 
                            I have fond memories of giving students English lessons and 
                            being a part of the community. 
                            I started learning Japanese in high school and hope to pass the 
                            N2 Japanese Language Proficiency Test (JLPT) at the end of 2021.
                        </div>
                    </div>
                </div>
                {/*
                <div className="row interests" data-aos='fade-right'>
                    <div className="col-lg">
                    <h2>Interests & Hobbies</h2>
                        {this.renderInterests()}
                        {
                            this.state.interestText
                            ?
                                <div className="interests-text">
                                    <h5>{this.state.interestTitle}</h5>
                                    <hr />
                                    <p>{this.state.interestText}</p>
                                </div>
                            :
                                null
                        }
                    </div>
                </div>
                */}
            </div> 
            {/*
            <div className="about-technology" data-aos='fade-right'>
                    <div className="about-title">
                        <h2>Web Development</h2>
                    </div>
                    <h5 className="text-center">
                        Technologies That I Work With
                    </h5>
                    <Badges />
                </div>
            */}
        </div>
        );
    }
}
 
export default About;