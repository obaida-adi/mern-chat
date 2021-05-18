import CreateRoom from './CreateRoom';

function Home() {
    return (
        <div className="home-container">
            <h1>👋  Hi! New here? Start a chat room by giving a name (it's that simple)!</h1>
            <CreateRoom></CreateRoom>
        </div>
    );
}

export default Home;