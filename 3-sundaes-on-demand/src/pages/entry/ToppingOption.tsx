import Col from 'react-bootstrap/Col';

export interface ToppingOptionProps {
    name: string;
    imagePath: string;
}

export default function ToppingOptionOptions(props: ToppingOptionProps) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
            <img
                style={{ width: '75%' }}
                src={`http://localhost:3030/${props.imagePath}`}
                alt={`${props.name} topping`}
            />
        </Col>
    );
}