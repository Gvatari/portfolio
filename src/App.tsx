import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { MyDescription } from './layout/sections/MyDescription';
import { Skills } from './layout/sections/Skills';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <MyDescription />
        </div>
    );
}

export default App;