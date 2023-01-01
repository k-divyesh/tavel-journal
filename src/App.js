import './App.css';
import NavBar from './Components/NavBar';
import Card from './Components/Card';
import data from './Data';

function App() {
    // const cards = data.map((item, i) => {
    //     <Card key={i} {...item} />;
    // });

    return (
        <>
            <NavBar />
            <main>{/* {cards} */}</main>
        </>
    );
}

export default App;
