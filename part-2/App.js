const App = () => (
    <div>
        <Tweet 
            username="TimTam" 
            name="Timothy" 
            date={new Date().toString()}
            message="My name is Timothy"/>
        <Tweet 
            username="witches3" 
            name="Glinda" 
            date={new Date().toString()}
            message="The good witch"/>
        <Tweet 
            username="WWE" 
            name="Elphaba" 
            date={new Date().toString()}
            message="The Wicked Witch of the East"/>
    </div>
   
)


ReactDOM.render(<App />, document.getElementById('root'));