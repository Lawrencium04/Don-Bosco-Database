import React from 'react';
import './HomePage.css'
import HomeImage from './images/HomeImage.jpg'

function HomePage() {

    React.useEffect(() => {
            window.scrollTo(0,0);
    }, []);
    
    var teacher = 'none';
    var nrOfKids = 0;
    var nrOfMeals = 0;
    return(
        <>
            <div className='MainContent'>
                <div className='HomeImage'>
                    <img src={HomeImage}/>
                </div>
                <div className='WelcomeText'><p>Data Management. Easy and accessible...</p></div>
                <div className='goTo'><a href='#ProgramInfo'>▼ See today's program ▼</a></div>
                <div id='ProgramInfo'>
                    <div className='info'>
                    <h1>Today's Program</h1>
                    <table className='programTable'>
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>14:00-14:30</th>
                                <th>14:30-15:00</th>
                                <th>15:00-15:30</th>
                                <th>15:30-16:00</th>
                                <th>16:00-16:30</th>
                                <th>16:30-15:00</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Classroom 1</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>Classroom 2</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>Classroom 3</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>Classroom 4</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                            </tr>
                            <tr>
                                <td>Classroom 5</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                                <td>none</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className='spacing'></div>
                <div className='Statistics'>
                    <h1>Statistics</h1>
                    <section className='Classroom1'>
                        <h3>Classroom 1</h3>
                        <ul>
                            <li>Today's Teacher: {teacher}</li>
                            <li>Nr. of kids: {nrOfKids}</li>
                            <li>Nr. of meals: {nrOfMeals}</li>
                        </ul>
                    </section>
                    <section className='Classroom2'>
                        <h3>Classroom 2</h3>
                        <ul>
                            <li>Today's Teacher: {teacher}</li>
                            <li>Nr. of kids: {nrOfKids}</li>
                            <li>Nr. of meals: {nrOfMeals}</li>
                        </ul>
                    </section>
                    <section className='Classroom3'>
                        <h3>Classroom 3</h3>
                        <ul>
                            <li>Today's Teacher: {teacher}</li>
                            <li>Nr. of kids: {nrOfKids}</li>
                            <li>Nr. of meals: {nrOfMeals}</li>
                        </ul>
                    </section>
                    <section className='Classroom4'>
                        <h3>Classroom 4</h3>
                        <ul>
                            <li>Today's Teacher: {teacher}</li>
                            <li>Nr. of kids: {nrOfKids}</li>
                            <li>Nr. of meals: {nrOfMeals}</li>
                        </ul>
                    </section>
                    <section className='Classroom5'>
                        <h3>Classroom 5</h3>
                        <ul>
                            <li>Today's Teacher: {teacher}</li>
                            <li>Nr. of kids: {nrOfKids}</li>
                            <li>Nr. of meals: {nrOfMeals}</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HomePage;