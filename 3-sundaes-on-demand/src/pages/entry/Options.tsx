import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ScoopOption, { ScoopOptionsProps } from './ScoopOption';

interface OptionsProps {
    optionType: string;
}

export default function Options(props: OptionsProps) {
    const [items, setItems] = useState([]);

    // optionsType is 'scoops' or 'toppings'
    useEffect(() => {
        axios.get(`http://localhost:3030/${props.optionType}`)
            .then(response => setItems(response.data))
            .catch((error) => {
                // TODO: handle error response
            });
    }, [props.optionType]);

    // TODO: replace second 'ScoopOption' with ToppingOption when available
    const ItemComponent = props.optionType === 'scoops' ? ScoopOption : ScoopOption;

    const optionItems = items.map((item: ScoopOptionsProps) =>
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />);

    return <Row>{optionItems}</Row>
}