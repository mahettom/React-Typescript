
type HeadingProps = {
    children: string
}


export const Heading = (props: HeadingProps) => {


  return (
    <h4>{props.children}</h4>
  )
}
