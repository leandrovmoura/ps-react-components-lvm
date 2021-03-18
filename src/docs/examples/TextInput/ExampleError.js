import React from 'react';
import TextInput from 'ps-react-components-lvm/TextInput';

/** Required TextBox with error */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInput
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
