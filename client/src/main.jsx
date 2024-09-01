import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Comments from "./components/Comments.jsx";
import UserProfile from "./components/UserProfile.jsx";
const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<App />} />
        <Route path="/comments/:id" element={<Comments />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>

    {router}
  </ApolloProvider>
);
