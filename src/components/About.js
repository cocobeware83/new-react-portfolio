import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>a little about me...</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               </div>
            </div>
      </section>
    );
  }
}