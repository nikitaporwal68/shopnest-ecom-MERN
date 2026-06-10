const About = () => {
    return (
        <div style={{ 
            maxWidth: '800px', 
            margin: '60px auto', 
            padding: '40px',
            background: 'rgba(255,255,255,0.04)',
            border: '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>About ShopNest</h1>
            <p style={{ color: '#9ca3af', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px' }}>
                ShopNest is a modern e-commerce platform built with the MERN stack. 
                Browse, shop, and checkout with ease.
            </p>

            <div style={{
                background: 'rgba(124,58,237,0.1)',
                border: '0.5px solid rgba(124,58,237,0.3)',
                borderRadius: '12px',
                padding: '24px'
            }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Built by</h3>
                <h2 style={{ fontSize: '1.8rem', color: '#a78bfa', marginBottom: '8px' }}>
                   Nikita Porwal
                </h2>
                <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
                    Full Stack Developer · MERN Stack
                </p>
            </div>
        </div>
    )
}
export default About;