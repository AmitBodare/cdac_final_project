import React, { Component } from 'react'

export default class Marquee extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          id: 1,
          url: "../Images/hero.png",
          height: "100",
          width: "160",
          alt: "hero"
        },
        {
          id: 2,
          url: "../Images/ferrari.png",
          height: "100",
          width: "160",
          alt: "ferrari"
        },
        {
          id: 3,
          url: "../Images/ford.png",
          height: "100",
          width: "160",
          alt: "ford"
        },
        {
          id: 4,
          url: "../Images/mahindra.png",
          height: "100",
          width: "160",
          alt: "mahindra"
        },
        {
          id: 5,
          url: "../Images/suzuki.png",
          height: "100",
          width: "160",
          alt: "suzuki"
        },
        {
          id: 6,
          url: "../Images/tvs.png",
          height: "100",
          width: "160",
          alt: "tvs"
        },
        {
          id: 7,
          url: "../Images/unnamed.png",
          height: "100",
          width: "160",
          alt: "unnamed"
        },
        {
          id: 8,
          url: "../Images/tata.png",
          height: "100",
          width: "160",
          alt: "tata"
        },
        {
          id: 9,
          url: "../Images/rolls.png",
          height: "100",
          width: "160",
          alt: "rolls"
        }
      ]
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className='row'>
        {/* eslint-disable-next-line */}
        <marquee width="117%" >

          {data.map((data) => {
            return <img src={data.url} height={data.height} alt={data.alt} width={data.width} key={data.id} />
          })}
        </marquee>
      </div>
    )
  }
}
