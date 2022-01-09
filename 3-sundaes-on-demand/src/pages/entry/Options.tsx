import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { OptionProps } from '../../models/OptionProps';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';

interface OptionsProps {
    optionType: string;
}

export default function Options(props: OptionsProps) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    // optionsType is 'scoops' or 'toppings'
    useEffect(() => {
        axios.get(`http://localhost:3030/${props.optionType}`)
            .then(response => setItems(response.data))
            .catch((error) => {
                setError(true);
            });
    }, [props.optionType]);

    if (error) {
        return <AlertBanner />
    }

    const ItemComponent = props.optionType === 'scoops' ? ScoopOption : ToppingOption;

    const optionItems = items.map((item: OptionProps) =>
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />);

    return <Row>{optionItems}</Row>
}