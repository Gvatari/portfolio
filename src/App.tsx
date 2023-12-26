import { Footer } from './layout/footer/Footer';
// import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { MyDescription } from './layout/sections/MyDescription';
import { Skills } from './layout/sections/Skills';
import { Slider } from './layout/sections/Slider';


function App() {
    return (
        <div className="App">
            {/* <Header /> */}
            <Main />
            <Skills />
            <MyDescription />
            <Slider />
            <Footer />
        </div>
    );
}

export default App;