import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
	className?: string;
}>;

function Section({ className, children }: SectionProps) {
	return <section className={`section ${className ?? ""}`.trim()}>{children}</section>;
}

export default Section;
