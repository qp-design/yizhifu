import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    [v: string]: unknown;
}
export const Text = ({ children, ...props }: Props) => {
    return <span {...props}> {children}</span>;
};
