
const Text = ({addEmoji}) => {

    
    const text = 'We should use functional component instead of class component ! and composition is better than inheritance !';
    return <h2>{addEmoji ? addEmoji(text, '👌'): text}</h2>
};

export default Text;