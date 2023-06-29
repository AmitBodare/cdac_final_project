import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';
export default class Footercomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          url: "https://twitter.com/jaketrent",
        },
        {
          id: 2,
          url: "https://linkedin.com/in/jaketrent"
        },
        {
          id: 3,
          url: "https://api.whatsapp.com/send?phone=917030141305&text=Hello%20Sumit.%0d%0aHow%20are%20you%20%3f%0d%0aI%20came%20from%20your%20website.&source=&data=#"
        },
        {
          id: 4,
          url: "https://facebook.com"
        },
        {
          id: 5,
          url: "https://instagram.com"
        }
      ]
    }
  }
  render() {
    const { data } = this.state;

    return (
      <>
        <div className="footer container-fluid position:fixed" style={{ minHeight: 75, alignContent: "center", backgroundColor: '#95BDFF', position: 'absolute', bottom: '0' }} >
          <div className='row'>
            <div className='col-sm-0 col-md-4'></div>
            <div className='col'>
              <span className='ms-5 ps-5' style={{ alignContent: "center" }}>
                {data.map((data) => {
                  return <SocialIcon url={data.url} key={data.id} />
                })}
              </span>
              <span><h5 style={{ textAlign: "center", color: "gray", fontFamily: "cursive" }}>All Rights Reserved 2023 @CDAC</h5></span>
            </div>
            <div className='col-sm-0 col-md-4'></div>
          </div>
        </div>
      </>
    )
  }
}
