export const Card = ({children} : {
    children: React.ReactNode
}) => {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        marginBottom: '16px'
    };
    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
}