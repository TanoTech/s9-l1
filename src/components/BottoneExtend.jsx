import './Bottoni.css'
import { Component } from "react";

class ButtonExtend extends Component {
    render() {
        const {label} = this.props
        return <button type='button' onClick={() => console.log(`Grazie per avermi premuto. io sono il bottone ${label}`)}>Premi anche me!</button>
    }
}
 
export default ButtonExtend