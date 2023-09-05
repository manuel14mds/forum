import './Home.css'
import economy from '../../assets/publications/economy.jpg'
import sport from '../../assets/publications/sport.jpg'
import music from '../../assets/publications/music.jpg'
import politic from '../../assets/publications/politic.png'
import eslint from '../../assets/technologies/eslint.svg'
import typescript from '../../assets/technologies/typescript-icon.svg'
import reactIcon from '../../assets/technologies/react.svg'
export const Home: React.FC = () => {
    return (
        <>
        <section className='about'>
            <h2 className='about-title'>Discover the forum</h2>
            <p className='about-text'
            >I created this project to apply a few knowledges I got lately, like Semantic HTML and Project Structure Organization. Also, I coded with TypeScript using esLint to practice them.
            JSON Place holder is a free fake API for testing and prototyping that I used for getting the publications and comments. </p>
        </section>

        <section className='publications'>
            <h2 className='publications-title'>Forum's Publications</h2>
            <div className='box' role='list'>
                <div className="item item1" role='listitem'>
                    <h3 className='item-topic'>Economy</h3>
                    <p className='topic-title'>The latest new about the global inflation </p>
                    <img src={economy} alt="dollar image" />
                </div>
                <div className="item item2" role='listitem'>
                    <h3 className='item-topic'>Sport</h3>
                    <p className='topic-title'>Cristiano Ronaldo is training with Portugal team </p>
                    <img src={sport} alt="Cristiano Ronaldo image" />
                </div>
                <div className="item item3" role='listitem'>
                    <h3 className='item-topic'>Politics</h3>
                    <p className='topic-title'>Falling population, rising costs: what is bedevilling the City of Angels? </p>
                    <img src={politic} alt="La skyline image" />
                </div>
                <div className="item item4" role='listitem'>
                    <h3 className='item-topic'>Music</h3>
                    <p className='topic-title'>Beautiful Ariana Grande </p>
                    <img src={music} alt="Ariana grande image" />
                </div>
            </div>
            <a className='all-publication-btn' role='button'>See all publications</a>
        </section>

        <section className='technologies'>
            <h2 className='tech-title'>Technologies</h2>
            <div className="tech-list" role='list'>
                <div className="tech-item" role='listitem'>
                    <img src={reactIcon} alt="react logo" />
                    <h3 className="tech-name">React</h3>
                </div>
                <div className="tech-item" role='listitem'>
                    <img src={typescript} alt="typescript logo" />
                    <h3 className="tech-name">TypeScript</h3>
                </div>
                <div className="tech-item" role='listitem'>
                    <img src={eslint} alt="eslint logo" />
                    <h3 className="tech-name">esLint</h3>
                </div>
            </div>
        </section>

        <section className='comments'>
            <h2 className='comments-title'>Vibrant Community Comments</h2>
            <p className='comments-text'>Let lively debates spark new insights. Our bustling comment section harnesses diverse perspectives for creating a vibrant and enriching environment.</p>
        </section>
        </ >
    )
}
