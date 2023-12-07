
import { jobs } from '../data/jobs';
import { Link } from 'react-router-dom';
//started doing different in video 119. filtered projects in home page.

export const Portfolio = () => {

  return (

    <div>
    <h1 className='h1'>Portafolio</h1>
    
    <div className='portfolio-container'>
      
      {
        jobs.map(job => { //you can return in 2 ways, the second one will be downsides.
          return (
            <article className='article' key={job.id}>
              <div className="mask">
                <img className='img' src={'/images/'+job.id+'.jpg'} alt='image'/>
              </div>
              <h2 className='h2'><Link to={'/Projects/'+ job.name} className='link link-l'>{job.name}</Link></h2>
              <p className="paragraph">{job.description}</p>
              <Link to={job.url} className='link' target='_blank'>{job.url}</Link>
              <h3 className='paragraph'> tecnologías: {job.tech}</h3>
            </article>
          );
        })
      }
      </div>
      {/*  {
        jobs.map(job => ( // second way = automatic return

          
              <article>
                <h2>{job.name}</h2>
                
              </article>
          
        ))
        
      } */}

    </div>
  )
}
