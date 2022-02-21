export const Container = ({ fluid, children }) => (
    <main className={fluid ? "container-fluid" : "container"}>
        { children }
    </main>
)