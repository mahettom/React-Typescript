
type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}


export const Greet = (props: GreetProps) => {


    return (
        <>
        {props.isLoggedIn ?
            <div>
                <h2>Welcome back {props.name}</h2>
                <h4>You have {props.messageCount} new messages</h4>
            </div>
        :
        <h1>Welcome Guest</h1>
        }
        </>
    )
}