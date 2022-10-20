import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode | any;
    [v: string]: unknown;
}
export const View: React.FC<Props> = ({ children, ...props }) => {
    return React.createElement('div', Object.assign({}, props), children);
};
