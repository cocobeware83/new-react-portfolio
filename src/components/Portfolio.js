import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>some of my projects...</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                   
                    <h5>{item.name}</h5>
                      <img src={`${item.imgurl}`} className="item-img"/>

                  </div>
                  <a href={`${item.code}`}><h5>View Code</h5></a>
                      <a href={`${item.deployed}`}><h5>Deployed Live</h5></a>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}