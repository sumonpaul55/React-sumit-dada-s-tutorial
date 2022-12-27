class Context{
    constructor(value = null){
        this.value = value;
    }
    //Provider

    Provider = ({children, value})=>{
        this.value = value;
        return children;
    }

    //cosumer
    Consumer = ({children})=> children(this.value);
}
function CreatContext(value = null) {
    const context = new Context(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer,
    }
}