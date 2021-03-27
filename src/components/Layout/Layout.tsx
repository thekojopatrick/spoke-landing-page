import { ReactNode } from "react";


interface IProps {
	children: ReactNode;
	// any other props that come into the component
}

export default function Layout({ children }:IProps) {
	return <div>{children}</div>;
}


