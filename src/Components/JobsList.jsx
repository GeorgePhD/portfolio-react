import { jobs } from '../data/jobs';
import { Link } from 'react-router-dom';


const JobsList = () => {

    return (

        
            <section className='jobs'>
                {
                    jobs.map(job => { //you can return in 2 ways, the second one will be downsides.
                        return (
                            <article className='article' key={job.id}>
                                <div className="mask">
                                    <img className='img' src={'/images/' + job.id + '.jpg'} alt='image' />
                                </div>
                                <h2 className='h2'><Link to={'/Projects/' + job.name} className='link link-l'>{job.name}</Link></h2>
                                <p className="paragraph">{job.description}</p>
                                <Link to={job.url} className='link' target='_blank'>{job.url}</Link>
                                <h3 className='paragraph'> tecnologías: {job.tech}</h3>
                            </article>
                        );
                    })
                }
                </section>
    )
}
export  default JobsList