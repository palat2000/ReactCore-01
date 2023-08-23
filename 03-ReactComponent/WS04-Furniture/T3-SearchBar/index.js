// #1 Write Your Function Component
function SearchBar() {
    return (
        <div className="searchbar">
            <input type="text" />
        </div>
    )
}
// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
root.render(<SearchBar />);
