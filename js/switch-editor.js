const { registerPlugin } = wp.plugins;
const { Button } = wp.components;
const { withSelect } = wp.data;
const { Fragment } = wp.element;

const SwitchEditorButton = ({ isClassic }) => {
    const handleClick = () => {
        if (isClassic) {
            // Redirect to Gutenberg editor
            window.location.href = 'edit.php?post_type=post'; // Update as needed
        } else {
            // Redirect to Classic editor
            window.location.href = 'edit.php?page=classic-editor'; // Update as needed
        }
    };

    return (
        <Fragment>
            <Button isPrimary onClick={handleClick}>
                {isClassic ? 'Back to Gutenberg' : 'Go to Classic Editor'}
            </Button>
        </Fragment>
    );
};

const enhance = withSelect((select) => {
    return {
        isClassic: select('core/editor').getCurrentPostType() === 'post' && !select('core/editor').getEditorType() === 'editor'
    };
});

registerPlugin('gcs-switch-editor-button', {
    render: enhance(SwitchEditorButton),
});
