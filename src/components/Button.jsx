function Button({ children, className = "", variant = "primary" }) {
  const baseStyle =
    "inline-flex items-center justify-center py-1.5 px-3 rounded-sm cursor-pointer transition-all duration-300";

  const variants = {
    black:
      "bg-transparent text-[#ddac3c] font-semibold text-[16px] border-[2px] border-[#ddac3c] hover:text-white",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
