export default function Button({ children, textOnly, className, ...props }) {
  let cssClassess = textOnly ? "text-button" : "button";

  cssClassess += " " + className;

  return (
    <button {...props} className={cssClassess}>
      {children}
    </button>
  );
}
