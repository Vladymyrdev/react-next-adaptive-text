import React, { ReactNode } from 'react';
import { Form } from 'react-bootstrap';

type SelectProps = {
	children: ReactNode;
	className?: string;
};

export default function Select({ children, className }: SelectProps) {
	return (
		<Form.Select
			className={className}
			aria-label="Floating label select example"
		>
			{children}
		</Form.Select>
	);
}
