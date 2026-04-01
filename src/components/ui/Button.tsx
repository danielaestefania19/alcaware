type Props = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary" }: Props) {
  const base = "px-6 py-3 rounded-full font-montserrat";

  const styles = {
    primary: "bg-primary text-black",
    outline: "border border-primary text-primary",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}