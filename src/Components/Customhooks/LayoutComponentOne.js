import useWindwoResize from "./useWindwoResize";

const LayoutComponentOne = () => {
    const onsmallscreen = useWindwoResize(800);
    return (
        <div>
             <h1>You are browsing on {(onsmallscreen)? 'small': 'Large'} screen</h1>
        </div>
    );
};

export default LayoutComponentOne;