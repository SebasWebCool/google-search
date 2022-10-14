import React from 'react'

const News = ({results}) => {

    console.log(results);
  return (
    <section>
      {
        results?.map(res=>(
          <div>
            <h4>
              {res.date_time}
            </h4>
            <a href={res.url}>
              <img src={res.image} alt="" />
            </a>
            <a href={res.url}>
              <h2>
                {res.title}
              </h2>
              <p>
                {res.snippet}
              </p>
            </a>
              <span>
                {/* From {res.source.name} */}
              </span>
          </div>
        ))
      }
    </section>
  )
}

export default News