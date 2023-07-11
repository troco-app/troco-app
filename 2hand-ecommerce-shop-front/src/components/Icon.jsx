// eslint-disable-next-line react/prop-types
export function Icon({ name, className }) {
    return (
        <span className={"material-symbols-rounded " + className}>{name}</span>
    );
}
