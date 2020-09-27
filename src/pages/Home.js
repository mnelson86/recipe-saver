import React, { Component } from "react";
import Hero from "../components/Hero";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from '../components/Card';
import CardBtn from "../components/CardBtn";
import CardText from '../components/CardText';
import SearchForm from '../components/SearchForm';
import Footer from '../components/Footer';
import recipes from '../recipes.json';

class Home extends Component {
    state= {
        recipes: recipes,
        search: "",
        view: "All Recipes"
    }

    handleNavBtn = data => {
        let value = (data.target.getAttribute("value"));
        if(value === "favorites") {
            let favFilter =this.state.recipes.filter(recipes => (recipes.favorite !== false))
            this.setState({recipes: favFilter, view: "Favorites"})
        }
        else {
            this.setState({recipes: recipes, view: "All Recipes"})
        }
    }
    handleInputChange = event => {
        this.setState({search: event.target.value});
    }
    handleFormSubmit = event => {
        event.preventDefault();
        let searchInput = recipes.filter(recipes => (recipes.name === this.state.search))
        this.setState({recipes: searchInput})
    }
    handleBtnClick = item => {
        if(item.favorite === true) {
            item.favorite = false
        }
        else {
            item.favorite = true
        }
        this.setState(this.state.recipes)
    };
    render() {
        return (
            <div>
                <Navbar onClick={(event) => this.handleNavBtn(event)}/>
                <Wrapper>
                    <Hero backgroundImage="https://www.pexels.com/photo/aroma-aromatic-assortment-bottles-531446/">
                        <h1>5 At Home</h1>
                        <h2>Chicken Recipes</h2>
                        <SearchForm
                            handleFormSubmit= {this.handleFormSubmit}
                            handleInputChange= {this.handleInputChange}
                            recipes= {recipes} />
                    </Hero>
                    <Col size= "12" style= {{textAlign: 'center', marginTop: 30, color: 'white'}}>
                        <h2>{this.state.view}</h2>
                    </Col>
                    <Container fluid={true} style={{marginTop: 30}}>
                        <Row fluid= {true}>
                            <Col size= "s-12">
                                {this.state.recipes.map(item => (
                                    <Card title= {item.name} key={item.id}>
                                        <CardText
                                        recipe={item.recipe}
                                        id= {item.id}
                                        />
                                        <CardBtn
                                            onClick= {() => this.handleBtnClick(item)}
                                            data-value={item.favorite ? "favorite" : ""}
                                            />
                                    </Card>
                                ))}
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
                <Footer/>
            </div>
        );
    }

}

export default Home;