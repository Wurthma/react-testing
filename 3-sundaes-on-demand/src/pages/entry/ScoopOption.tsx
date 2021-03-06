import Col from 'react-bootstrap/Col';
import { OptionProps } from '../../models/OptionProps';

export default function ScoopOptions(props: OptionProps) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
            <img
                style={{ width: '75%' }}
                src={`http://localhost:3030/${props.imagePath}`}
                alt={`${props.name} scoop`}
            />
        </Col>
    );
}