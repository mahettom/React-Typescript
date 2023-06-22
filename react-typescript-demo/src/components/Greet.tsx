
type GreetProps = {
    name: string;
}


export const Greet = (props: GreetProps) => {


    return (
        <>
        <h1>Welcome back {props.name}</h1>
        <h3>You have 10 new messages</h3>
        </>
    )
}