type TextOwnProps<E extends React.ElementType> = {
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary";
    children: React.ReactNode;
    as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({
    size,
    color,
    children,
    as,
}: TextProps<E>) => {
    const Component = as || "div";

    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    );
};

// polymorphic component allow us change the html tag inside of our component
// by providing as props, the specific html tag we want

// ———————————————————————————————————————————————————————————————————— STEP_1
// declare a type for props -> as?
// the type of as? need to be React.ElementType
// ———————————————————————————————————————————————————————————————————— STEP_2
// destructure and store it inside a variable
// like props as? is optionnal, also store a default 'div'
// change the name of the html tag inside the JSX to the variable name
// ———————————————————————————————————————————————————————————————————— STEP_3
//
