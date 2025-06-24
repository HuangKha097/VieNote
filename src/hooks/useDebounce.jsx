import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const hendler = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(hendler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
};

export default useDebounce;
