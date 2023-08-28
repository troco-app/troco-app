/* eslint-disable react/prop-types */
export function Button({ children, onClick }) {
  return (
    <button className="material-symbols-rounded" onClick={onClick}>
      menu {children}
    </button>
  );
}
