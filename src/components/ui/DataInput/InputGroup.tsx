import React from 'react';

interface InputGroupType extends React.ComponentPropsWithRef<'div'> {
    label: string;
    name: string;
    onChange?: (e: any) => void;
    className?: string;
}

export const InputGroup = ({ label, name, className, onChange, ...rest }: InputGroupType) => {
    return (
        <div className={`flex flex-col max-w-sm mt-2 ${className}`}>
            <label htmlFor={name} className="mb-1">
                {label}
            </label>
            <input
                name={name}
                // {...rest}
                className="border rounded px-3 py-1 outline-offset-1 focus:outline-green-700"
                onChange={onChange}
            />
        </div>
    );
};

InputGroup.displayName = InputGroup;
