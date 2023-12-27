import { Footer } from './layout/footer/Footer';
import { Main } from './layout/main/Main';
import { AboutMe } from './layout/sections/AboutMe';
import { Slider } from './layout/sections/Slider';


function App() {
    return (
        <div className="App">
            <Main />
            <AboutMe />
            <Slider />
            <Footer />
        </div>
    );
}

export default App;