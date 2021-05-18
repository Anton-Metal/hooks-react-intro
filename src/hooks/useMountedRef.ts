
//useMountedRef.ts
import { useRef, useEffect } from 'react';

export function useMountedRef() {
    const mounted = useRef(false);

    useEffect(() => {
		// i current lägger man värdet man vill ha
        mounted.current = true;
        return (): void => { mounted.current = false };
    });
    return mounted;
}
//man använder ref variabler när man behöver göra saker med domen