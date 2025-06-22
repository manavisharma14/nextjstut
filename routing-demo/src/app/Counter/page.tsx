import Counter  from "./counter"

export const metadata = {
    title: 'Counter Page',
    description: 'A simple counter page',
}

export default function CounterPage() {
    return<Counter />
}