import {
    Link,
  } from "react-router-dom";
export default function Home() {
    return (
        <div className="Page">
        <figure>
            <img src="/images/GardenOfClocks.jpg"/>
            <figcaption>
            What proportion of each circle is colored? (The 12 dots are equally spaced).  <br/>
            This puzzle is called "Garden of Clocks" and was created by <a href="https://twitter.com/Cshearer41" target="_blank">Catriona Shearer</a>,
            you can check out more of her puzzles <a href="http://www.murderousmaths.co.uk/teacher/Catrionas%20Puzzles.htm" target="_blank">here</a>.
            </figcaption>
        </figure>

            <h1>About</h1>
            <p>
                I am a senior undergraduate student studying computer science engineering and (honors) mathematics at the <b>University of Michigan</b>. 
            </p>
            <p>
                My main interests are in <b>pure math </b> 
                (especially graph theory and probability theory), <b>statistics</b>, <b>machine learning </b> (mainly reinforcement learning), and 
                <b> theoretical computer science</b>.
            </p>
            <p>
                I like solving math and programming puzzles, and I am fairly active in the <b>competetive programming </b> community - mainly on Codeforces, where you can find me as 
                <a href="https://codeforces.com/profile/runoxinabox" target="_blank"> runoxinabox</a>.
            </p>

            <h1>Experience</h1>
            <p>
                I am currently working as a researcher at the University of Michigan statistics department, advised by prof. <a href="https://ambujtewari.github.io/" target="_blank">Ambuj Tewari</a>.
                My work is on reinforcement learning, you can read more about it
                <Link to="/research"> here</Link>.
            </p>

            <p>
                In Summer 2022 I worked at <b>Citadel</b> as a quantitative development intern in New York. <br/>
                In Summer 2021 I interned at <b>Citadel</b> as a software engineering intern in Chicago. <br/>
                In Summer 2020, I worked as an SDE intern at <b> Amazon</b>.
            </p>

            <p>
                In Summer 2019, I participated in a study-abroad program at the <b>Shanghai Jiao Tong University</b> in Shanghai, China.
            </p>

            <p>
                I was also a grader for EECS 376: Foundations of Computer Science in 2020-2021.
            </p>

            <div className="Bottom"/>
        </div>
    )
}