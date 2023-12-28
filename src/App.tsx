import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { AboutMe } from './layout/sections/AboutMe';
import { Slider } from './layout/sections/Slider';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <AboutMe />
            <Slider />
            <Footer />
        </div>
    );
}

export default App;