import Alert from 'react-bootstrap/Alert';
import { AlertBannerProps } from '../../models/AlertBannerProps';

export default function AlertBanner(props: AlertBannerProps) {
    const alertMessage = props.message || 'An unexpected error ocurred. Please try again later.';
    const alertVariant = props.variant || 'danger';
    return (
        <Alert variant={alertVariant} style={{ backgroundColor: 'red' }}>
            {alertMessage}
        </Alert>
    );
}