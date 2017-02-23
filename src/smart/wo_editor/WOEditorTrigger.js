import {openWOEditor} from "../actions/WOEditor";
import {connect} from "react-redux";
import {Icon} from "semantic-ui-react";

const mapStateToProps = () => {
    return {
        link: true,
        name: "setting",
        fitted: true,
        size: 'big'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(openWOEditor())
    };
};

export const WOEditorTrigger = connect(mapStateToProps, mapDispatchToProps)(Icon);