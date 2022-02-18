import React from 'react';
import { Form } from 'react-bootstrap';

type InputProps = {
	className?: string;
	type: string;
	placeholder?: string;
};

export default function Input({ className, type, placeholder }: InputProps) {
	return (
		<Form.Control className={className} type={type} placeholder={placeholder} />
	);
}
