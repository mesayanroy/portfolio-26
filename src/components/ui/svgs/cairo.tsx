export function CairoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="size-8"
      {...props}
    >
      <title>Cairo</title>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L18.8 8 12 11.2 5.2 8 12 4.8zM4 9.4l7 3.3v6.5l-7-3.5V9.4zm9 9.8v-6.5l7-3.3v6.3l-7 3.5z" />
    </svg>
  );
}
