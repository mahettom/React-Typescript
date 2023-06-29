import { Greet } from "../Greet"


export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {

  return (

    <div>
        {props.isLoggedIn}
    </div>
  )
}

// extract a props type when we don't have access to it