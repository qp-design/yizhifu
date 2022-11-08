import { fetchResource } from '../utils';
import { ComponentType } from '../utils/type';
import { useState } from 'react';

const resource = fetchResource();

export function useComponent() {
    const [state] = useState<ComponentType>(() => resource.read());
    return state;
}
