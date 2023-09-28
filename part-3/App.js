const App = () => {
    return (
        <div>
            <Person 
                name="Bianca" 
                age={27} 
                hobbies={['running', 'playing violin', 'hiking']}/>
            <Person 
                name="Trudy" 
                age={40} 
                hobbies={['watching tv', 'sewing', 'boxing']}/>
            <Person 
                name="Lillianna" 
                age={13} 
                hobbies={['writing', 'drawing']}/>
            <Person 
                name="Stellamaris" 
                age={4} 
                hobbies={['eating', 'drawing']}/>
        </div>
    )
}


// ReactDOM.render(<App />, document.getElementById('root'));