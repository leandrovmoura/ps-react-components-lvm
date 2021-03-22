import React from 'react';
import TextInputCSSModules from 'ps-react-components-lvm/TextInputCSSModules';

/** Required TextBox with error */
export default class ExampleOptional extends React.Component {
    render() {
        return (
            <TextInputCSSModules
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
