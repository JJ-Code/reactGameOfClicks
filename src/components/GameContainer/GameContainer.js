import React, {
    Component
} from "react";
import giphys from './giphys.json'
import './App.css';
import Navpills from "../Navpills/Navpills.js";
import Title from '../Title/Title.js'
import GiphyCard from '../GiphyCard/GiphyCard.js'
import Wrapper from '../Wrapper/Wrapper.js'


class GameContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Click a gif to begin",
            topScore: 0,
            currentScore: 0,
            deselectedCards: [],
            giphys: giphys
        } //end of state 
        this.shuffleCards = this.shuffleCards.bind(this);
        this.selectGiphy = this.selectGiphy.bind(this);
    }//end of const 






    // componentDidMount() {

    // } //end of component. Similar on document.ready

    shuffleCards(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[i], array[j]];
        } //end of for loop
        return array;
    } //end of shuffle 

    selectGiphy(name) {
        console.log(name);
        console.log(this.state.deselectedCards);
        const findGif =
            this.state.deselectedCards.find(item => item.name === name);

        if (findGif) {
            this.setState({
                message: "Wrong, you already slected that!",
                topScore: (this.state.currentScore > this.state.topScore) ?
                    this.state.currentScore : this.state.topScore,
                currentScore: 0,
                giphys: giphys,
                deselectedCards: giphys
            });
        } else {
            const newGif =
                this.state.deselectedCards.filter(item =>
                    item.name !== name);

            this.setState({
                message: "Correct!",
                currentScore: this.state.currentScore + 1,
                giphys: giphys,
                deselectedCards: newGif
            });
        } //end of else 
        this.shuffleCards(giphys)
    }; //end of selectGiphy 

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.giphys.map(giphy => (
                        <GiphyCard
                            name={giphy.name}
                            gif={giphy.gif}
                            selectGiphy={this.selectGiphy}
                            currentScore={this.state.currentScore}
                        />

                    ))
                }

            </Wrapper>
        )
    } //end of render


} //end of GameContainer 

export default GameContainer;