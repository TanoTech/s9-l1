import './Bottoni.css'

const PrimoBottone = (props) => {
    return  <button type='button' onClick={() => console.log(`Grazie per avermi cliccato, sono il bottone ${props.button}`)}>Premimi</button>
};

export default PrimoBottone;