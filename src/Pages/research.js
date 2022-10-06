export default function Research() {
    return (
        <div className="Page">
            <h1>Research</h1>
            <p>
                I am an undergraduate researcher at the University of Michigan department of statistics, where I am fortunate to be advised by professor <a href="https://ambujtewari.github.io/" target="_blank">Ambuj Tewari</a>.
                I have also collaborated with professor <a href="https://sites.lsa.umich.edu/zimmerman-lab/author/paulzim/" target="_blank"> Paul Zimmerman </a> in exploring the applications of machine learning
                in computational chemistry.
            </p>
            <p>
                My current work is in reinforcement learning (RL), and how it can be applied to the conformer generation and other tasks in computational chemistry.
                I am interested in exploring models that involve hierarchical RL and multi-agent RL, and their effectiveness in conformer generation.
                I am also investigating how deep learning methods - particularly transfer and curriculum learning - can be used to improve training, 
                as well as how modifications to graph neural network and attention network architectures can improve agent performance.
            </p>

            <h1>Publications</h1>

            <h2>2022</h2>
            <p>
                <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/jcc.26984" target="_blank">Conformer-RL: A deep reinforcement learning library for conformer generation</a> <br/>
                <b>Runxuan Jiang</b>, Tarun Gogineni, Joshua Kammeraad, Yifei He, Ambuj Tewari, and Paul M. Zimmerman <br/>
                In the Journal of Computational Chemistry.
            </p>

            <h2>2020</h2>
            <p>
                <a href="https://proceedings.neurips.cc/paper/2020/hash/e904831f48e729f9ad8355a894334700-Abstract.html" target="_blank">TorsionNet: A Reinforcement Learning Approach to Sequential Conformer Search</a> <br/>
                Tarun Gogineni, Ziping Xu, Exequiel Punzalan, <b>Runxuan Jiang</b>, Joshua Kammeraad, Ambuj Tewari, and Paul M. Zimmerman <br/>
                In 2020 Conference on Neural Information Processing Systems (<a href="https://nips.cc/Conferences/2020" target="_blank">NeurIPS 2020</a>).
            </p>
        </div>
    )
}