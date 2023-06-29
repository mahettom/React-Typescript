

type ButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>


export const CustomButton = ({variant, children, ...rest}: ButtonProps) => {

  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}

// & React.ComponentProps allow to acces the children and the rest of the props that was given without being to specific
// { ...rest } -> spread the rest of the props given into the component that we gonna render