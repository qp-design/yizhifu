import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    [v: string]: unknown;
}
export const Text: React.FC<Props> = ({ children, ...props }) => {
    return React.createElement('span', Object.assign({}, props), children);
};
