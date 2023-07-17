// eslint-disable-next-line react/prop-types
export function NavbarMenu({ menuHidden }) {
    return (
        <nav
            className="absolute flex flex-col-reverse bottom-14 bg-white pl-6 pr-4 min-h-[100px] border rounded-sm:"
            id="hiddenNav"
            style={{
                display: menuHidden ? "none" : "flex",
            }}
        >
            <a href="#">Login</a>
            <a href="#">Registrarse</a>
        </nav>
    );
}