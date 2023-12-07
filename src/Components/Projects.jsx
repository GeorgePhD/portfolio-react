import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { jobs } from '../data/jobs';



export const Projects = () => {

    const [project, setProject] = useState({});
    const params = useParams();

    useEffect(() => {
        let project = jobs.filter(job => job.id === params.id);
        setProject(project[0]);

    }, []);

    return (
        <div className='page page-work'>

            <h1 className='h1'>{project.id}</h1>
            <div className="mask">
                <img className='img work-img' src={'/images/' + project.id + '.jpg'} alt='image' />
            </div>
            <p className="paragraph">{project.tech}</p>
            <a href={project.url} className='link' target='_blank'>Ir al proyecto</a>



        </div>
    )
}
