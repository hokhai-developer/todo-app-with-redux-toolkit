import { useState, useEffect } from 'react';

function useDebounce(value, delay = 1000) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value.trim()), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
