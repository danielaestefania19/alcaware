type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary" }: Props) {
  const base =
    "px-6 py-3 rounded-full font-montserrat cursor-pointer transition-all duration-300 ease-out active:scale-95";

  const styles = {
    primary:
      "bg-primary text-black hover:brightness-110 hover:shadow-[0_0_20px_rgba(58,224,179,0.45)] hover:-translate-y-0.5",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(58,224,179,0.35)] hover:-translate-y-0.5",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}