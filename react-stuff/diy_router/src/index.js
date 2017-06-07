import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { string, func} from 'prop-types';
import webRouter from './webRouter';

const JavaScript = () => <p>A high-level, dynamic, untyped, and interpreted programming language.</p>
const Haskell = () => <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.</p>
const CoffeeScript = () => <p>A programming language that transpiles into JavaScript, so we'll be redirecting there in 3.</p>

const Link = (props) => {
    const handleClick = (e)=>{
        e.preventDefault();
        webRouter.navigateTo(props.path);
    };
    
    return (
        <div>
            <a onClick={handleClick}>{props.children}</a>
        </div>
    );
};

Link.propTypes = {
    path: string.isRequired,
    children: string.isRequired
};

const Route = ({ path, component:Component } )=>{
    if(webRouter.path()===path){
        return <Component />;
    }
    return null;
};

Route.propTypes = {
    path: string.isRequired,
    component: func.isRequired
};

class App extends Component{
    constructor(props){
        super(props);
        webRouter.subscribe(this.rerender);
    }
    rerender=()=>{
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <Link path="/javascript" >JavaScript</Link>
                <Link path="/haskell" >Haskell</Link>
                <Link path="/coffeescript" >CoffeeScript</Link>
                <button onClick={this.rerender}>ReRender</button>
                <hr />
                <Route path="/javascript" component={JavaScript}/>
                <Route path="/haskell" component={Haskell}/>
                <Route path="/coffeescript" component={CoffeeScript}/>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('root'));
