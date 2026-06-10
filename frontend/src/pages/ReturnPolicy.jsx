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


const ReturnPolicy = () => {
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
      <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Return & Refund Policy</h1>
      <p style={{ marginBottom: '32px', fontSize: '0.9rem', color: '#6b7280' }}>
        Returns accepted within 30 days of receiving your order.
      </p>

      <Section title="Eligibility for Returns">
        Items must be unused, in original condition, and in original packaging. 
        Proof of purchase is required.
      </Section>

      <Section title="Refund Processing">
        Once your return is received and inspected, we will notify you by email. 
        Approved refunds are processed within 5-7 business days to your original payment method.
      </Section>

      <Section title="Non-Returnable Items">
        Perishable goods, digital media, custom software, or items that have been 
        tampered with are not eligible for returns.
      </Section>

      <Section title="Shipping Costs">
        You are responsible for return shipping costs. Restocking fees may apply.
      </Section>

      <p style={{ marginTop: '32px', fontSize: '0.85rem', color: '#6b7280', fontStyle: 'italic' }}>
        For any questions, please contact our support team.
      </p>
    </div>
  );
};



export default ReturnPolicy;