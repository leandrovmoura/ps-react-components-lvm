import React from 'react';
import TextInputBEM from 'ps-react-components-lvm/TextInputBEM';

/** Required TextBox with error */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInputBEM
                htmlId="example-error"
                label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="First name is required."
            />
        )
    }
}
