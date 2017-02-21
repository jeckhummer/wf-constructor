import React from 'react';
import {connect} from 'react-redux';
import {getCustomFieldEditorState} from "../../selectors/ui";
import {AddNewCustomFieldButton} from "./AddNewCustomFieldButton";
import {SaveCustomFieldButton} from "./SaveCustomFieldButton";
import {CloseCustomFieldEditorButton} from "./CloseCustomFieldEditorButton";

const mapStateToProps = (state) => {
    const {isNewCustomField} = getCustomFieldEditorState(state);

    return {isNewCustomField};
};

const component = ({isNewCustomField}) => {
    return (
        <div>
            <CloseCustomFieldEditorButton/>
            {
                isNewCustomField
                    ? <AddNewCustomFieldButton/>
                    : <SaveCustomFieldButton/>
            }
        </div>
    )
};

export const CustomFieldEditorActions = connect(mapStateToProps)(component);