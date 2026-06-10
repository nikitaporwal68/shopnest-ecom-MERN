const Disclaimer = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '60px auto',
      padding: '40px',
      background: 'rgba(255,255,255,0.04)',
      border: '0.5px solid rgba(255,255,255,0.08)',
      borderRadius: '16px',
      lineHeight: '1.8',
      color: '#9ca3af'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Disclaimer</h1>
      <p style={{ marginBottom: '32px', fontSize: '0.9rem', color: '#6b7280' }}>
        Please read this before using ShopNest.
      </p>

      <Section title="Educational Purpose">
        ShopNest is built purely for learning and portfolio purposes. 
        It is not a real store and no actual products are sold.
      </Section>

      <Section title="Accuracy of Materials">
        Product data and images are dummy content for demonstration only. 
        They do not represent real physical products.
      </Section>

      <Section title="Payment Processing">
        No real payments are processed. All payment flows use Razorpay 
        sandbox (test) environment only. No money is charged.
      </Section>

      <Section title="External Links">
        ShopNest is not responsible for the content or behavior of any 
        third-party websites linked from this platform.
      </Section>

      <p style={{ marginTop: '32px', fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic' }}>
        By using this platform you agree to these terms.
      </p>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '24px' }}>
    <h4 style={{ 
      color: '#a78bfa', 
      marginBottom: '8px', 
      fontSize: '1rem', 
      fontWeight: '600' 
    }}>
      {title}
    </h4>
    <p>{children}</p>
  </div>
);

export default Disclaimer;