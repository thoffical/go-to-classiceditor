const { registerPlugin } = wp.plugins;
const { Button } = wp.components;
const { withSelect } = wp.data;
const { Fragment } = wp.element;
const { PluginToolbar } = wp.editPost;

const SwitchEditorButton = ({ currentEditorType }) => {
    const handleClick = () => {
        if (currentEditorType === 'editor') {
            window.location.href = 'edit.php?page=classic-editor'; // Redirect to Classic Editor
        } else {
            window.location.href = 'edit.php?post_type=post'; // Redirect to Gutenberg
        }
    };

    return (
        <PluginToolbar>
            <Button isPrimary onClick={handleClick}>
                {currentEditorType === 'editor' ? 'Go to Classic Editor' : 'Back to Gutenberg'}
            </Button>
        </PluginToolbar>
    );
};

const enhance = withSelect((select) => {
    return {
        currentEditorType: select('core/editor').getEditorType(),
    };
});

registerPlugin('gcs-switch-editor-button', {
    render: enhance(SwitchEditorButton),
});
