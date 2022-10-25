import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode | any;
    [v: string]: unknown;
}
export const View = ({ children, ...props } : Props) => {
    return <div {...props}> { children }</div>;
};
