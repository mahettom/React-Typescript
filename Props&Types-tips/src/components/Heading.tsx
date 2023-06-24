import { HeadingProps } from "./Heading.types"


export const Heading = ({ children }: HeadingProps) => {


  return (
    <h3>{children}</h3>
  )
}