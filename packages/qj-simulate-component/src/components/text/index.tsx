import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    [v:string]: unknown
}
export const View: React.FC<Props> = ({ children, ...props }) => {
    return <div {...props}>{children}</div>;
};
