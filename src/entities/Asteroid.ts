export type Asteroid = {
    id: number,
    name: string,
    close_approach_data: {
        close_approach_date: string
    }[],
    absolute_magnitude_h: number,
}