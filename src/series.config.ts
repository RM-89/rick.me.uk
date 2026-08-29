export interface Series {
    title: string;
    description: string;
}

export const SERIES: Record<string, Series> = {
    'flecs-city': {
        title: "Flecs City",
        description: "Devlog about a C++ project for exploring game engine architecture.",
    },
    'iris-engine': {
        title: "Iris Engine",
        description: "Devlog about my first 3D game engine.",
    },
};
