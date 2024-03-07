import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import TodoScreen from "./Screens/TodoScreen";
import WordsScreen from "./Screens/WordsScreen";
// import Words from "./components/Words";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import WordsApp from "./features/WordsApp";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <section>
        <Routes>
          <Route path="/" index={true} element={<HomeScreen />} />
          <Route path="/words" element={<WordsScreen />} />
          <Route path="/todo" element={<TodoScreen />} />
          <Route path="/wordsSlice" element={<WordsApp />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
