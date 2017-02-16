import {connect} from 'react-redux';
import {AddButton} from "../../dumb/buttons/AddButton";

const mapStateToProps = (state) => {
    return {
        content: "ADD NEW FIELD",
        color: 'blue'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            console.log('test');
        }
    };
};

export const AddNewCustomFieldButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton);