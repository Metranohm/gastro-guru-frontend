import React from "react";

class RecipeDetails extends React.Component {
constructor(props) {
super(props);
this.state = {
    recipe: null,
};
}

componentDidMount() {
// assuming the recipe ID is passed in via URL params
const recipeId = this.props.match.params.id;

// replace this URL with your actual API endpoint
fetch(`http://localhost:8000/api/recipes/${recipeId}`)
    .then((response) => response.json())
    .then((data) => this.setState({ recipe: data }))
    .catch((error) => console.error(error));
}

render() {
const { recipe } = this.state;
if (!recipe) {
    return <div>Loading...</div>;
}
return (
    <div>
    <h1>{recipe.title}</h1>
    <p>{recipe.description}</p>
    <ul>
        {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
        ))}
    </ul>
    <div>{recipe.instructions}</div>
    </div>
);
}
}

export default RecipeDetails;
