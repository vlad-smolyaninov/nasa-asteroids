import {act, renderHook} from '@testing-library/react';
import {useSort} from './useSort';

describe('useSort', () => {
    const initialData = [
        {name: 'Asteroid A', diameter: 100},
        {name: 'Asteroid B', diameter: 200},
        {name: 'Asteroid C', diameter: 300},
    ];

    it('should sort the data in ascending order when clicked once', () => {
        const {result} = renderHook(() => useSort(initialData));

        act(() => {
            result.current.onSortClick('diameter');
        });

        expect(result.current.sorted).toEqual([
            {name: 'Asteroid A', diameter: 100},
            {name: 'Asteroid B', diameter: 200},
            {name: 'Asteroid C', diameter: 300},
        ]);
        expect(result.current.sortedField).toBe('diameter');
        expect(result.current.sortedDirection).toBe('asc');
    });

    it('should sort the data in descending order when clicked twice', () => {
        const {result} = renderHook(() => useSort(initialData));

        act(() => {
            result.current.onSortClick('diameter');
        });

        act(() => {
            result.current.onSortClick('diameter');
        });

        expect(result.current.sorted).toEqual([
            {name: 'Asteroid C', diameter: 300},
            {name: 'Asteroid B', diameter: 200},
            {name: 'Asteroid A', diameter: 100},
        ]);
        expect(result.current.sortedField).toBe('diameter');
        expect(result.current.sortedDirection).toBe('desc');
    });

    it('should reset the sorting when clicked twice on the same field', () => {
        const {result} = renderHook(() => useSort(initialData));

        act(() => {
            result.current.onSortClick('diameter');
        });

        act(() => {
            result.current.onSortClick('diameter');
        });

        act(() => {
            result.current.onSortClick('diameter');
        });

        expect(result.current.sorted).toEqual(initialData);
        expect(result.current.sortedField).toBe(null);
        expect(result.current.sortedDirection).toBe(null);
    });
});
