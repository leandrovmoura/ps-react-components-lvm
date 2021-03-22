import React from 'react';
import TextInputStyledComponents from 'ps-react-components-lvm/TextInputStyledComponents';

/** Required TextBox with error */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInputStyledComponents
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
