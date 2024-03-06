import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage"
import About from "./pages/About.jsx"
import CharactersPage from "./pages/CharactersPage.jsx";
import EpisodesPage from "./pages/EpisodesPage.jsx"

const router = createBrowserRouter([
    {

        path: "/",
        element:<App />,
        children: [
            {
                index: true,
                path:"home",
                element: <HomePage />,
            },
            {
                path: "about",
                element:<About />,
            },
            {
                path:"characters",
                element:<CharactersPage />
            },
            {
                path:"episodes",
                element:<EpisodesPage />
            }
        ],
    },



]);

export default router;