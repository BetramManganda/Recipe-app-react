import React from "react";
import "./Recipe_section.scss";
import Recipe_parent from "../Recipe_parent/Recipe_parent";

function Menu(props) {
  const { recipes } = props;
  return (
    <>
      {recipes.map((recipe) => (
        <Recipe_parent
          image={recipe.image}
          title={recipe.title}
          author={recipe.author}
        />
      ))}
    </>
  );
}

export default function Recipe_section() {
  const recipesArray = [
    {
      id: 1,
      image: "./src/images/recipe-1.jpeg",
      title: <h2>Avocado, and Tomato Salad</h2>,
      author: <p>dona's Kitchen</p>,
    },
    {
      id: 2,
      image: "./src/images/recipe-2.jpeg",
      title: <h2>Chickpea & Butternut Squash Salad</h2>,
      author: <p>Tasty Treat</p>,
    },
    {
      id: 3,
      image: "./src/images/recipe-3.jpeg",
      title: <h2>Spicy Chicken & Salad</h2>,
      author: <p>Yummy Foods</p>,
    },
    {
      id: 4,
      image: "./src/images/recipe-4.jpeg",
      title: <h2>Chips, Avocado Creamy Sauce</h2>,
      author: <p>Ella Olsson</p>,
    },
  ];

  return <Menu recipes={recipesArray} />;
}

// function Recipe_list(props) {
//   const { recipesArray } = props;
//   return (
//     <>
//       {recipesArray.map((recipe) => (
//         <>
//           <li>{recipe.img}</li>
//           <li>{recipe.h2}</li>
//           <li>{recipe.p}</li>
//         </>
//       ))}
//     </>
//   );
// }

// export default function Recipe_section() {
//   const recipes = [
//     {
//       id: 1,
//       img: "recipe-1.jpeg",
//       // src="./src/images/recipe-1.jpeg" width="190px" alt="",
//       h2: "Avocado, and Tomato Salad",
//       p: "dona's Kitchen",
//     },

//     {
//       id: 2,
//       img: 'src="./src/images/recipe-2.jpeg" width="190px" alt=""',
//       h2: "Chickpea & Butternut Squash Salad",
//       p: "Tasty Treat",
//     },
//     {
//       id: 3,
//       img: 'src="./src/images/recipe-3.jpeg" width="190px" alt=""',
//       h2: "Spicy Chicken & Salad",
//       p: "Yummy Foods",
//     },
//     {
//       id: 4,
//       img: 'img src="./src/images/recipe-4.jpeg" width="190px" alt=""',
//       h2: "Chips, Avocado Creamy Sauce",
//       p: "Ella Olsson",
//     },
//   ];

//   return <Recipe_list recipes={RecipesArray} />;
// }

// function Recipes(props) {
//   const { children } = props;
//   return <>{children}</>;
// }

// export default function Recipe_section() {
//   return (
//     <Recipes>
//       <div className="recipe">
//         <img src="./src/images/recipe-1.jpeg" width="190px" alt="" />
//         <h2>Avocado, and Tomato Salad</h2>
//         <p>dona's Kitchen</p>
//       </div>

//       <div className="recipe">
//         <img src="./src/images/recipe-2.jpeg" width="190px" alt="" />
//         <h2>Chickpea & Butternut Squash Salad</h2>
//         <p>Tasty Treat</p>
//       </div>

//       <div className="recipe">
//         <img src="./src/images/recipe-3.jpeg" width="190px" alt="" />
//         <h2>Spicy Chicken & Salad</h2>
//         <p>Yummy Foods</p>
//       </div>

//       <div className="recipe">
//         <img src="./src/images/recipe-4.jpeg" width="190px" alt="" />
//         <h2>Chips, Avocado Creamy Sauce</h2>
//         <p>Ella Olsson</p>
//       </div>
//     </Recipes>
//   );
// }

// import React from "react";
// import "./Recipe_section.scss";

// export default function Recipe_section() {
//   return (
//     <div className="recipe_section">
//       <div className="recipe">
//         <img src="./src/images/recipe-1.jpeg" width="190px" alt="" />
//         <h2>Avocado, and Tomato Salad</h2>
//         <p>dona's Kitchen</p>
//       </div>

//       <div className="recipe">
//         <img src="./src/images/recipe-2.jpeg" width="190px" alt="" />
//         <h2>Chickpea & Butternut Squash Salad</h2>
//         <p>Tasty Treat</p>
//       </div>

//       <div className="recipe">
//         <img src="./src/images/recipe-3.jpeg" width="190px" alt="" />
//         <h2>Spicy Chicken & Salad</h2>
//         <p>Yummy Foods</p>
//       </div>

//       <div className="recipe">
//         <img src="./src/images/recipe-4.jpeg" width="190px" alt="" />
//         <h2>Chips, Avocado Creamy Sauce</h2>
//         <p>Ella Olsson</p>
//       </div>
//     </div>
//   );
// }
