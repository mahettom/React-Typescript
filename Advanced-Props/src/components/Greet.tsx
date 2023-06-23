
type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}


export const Greet = (props: GreetProps) => {
    
    const {messageCount = 0} = props

    return (
        <>
        {props.isLoggedIn ?
            <div>
                <h2>Welcome back {props.name}</h2>
                <h4>You have {messageCount} new messages</h4>
            </div>
        :
        <h1>Welcome</h1>
        }
        </>
    )
}