import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainSearch />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/:companyName" element={<CompanySearchResults />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
