const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card" style={{
      backgroundColor: 'var(--card-bg)',
      color: 'var(--card-text)',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
      margin: '1rem',
      width: '360px', // Increased width for larger card size
      padding: '1rem', // Added padding for spacing
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start' // Align all elements to the left
    }}>
      <img 
        src={restaurant.image} 
        onError={(e) => {
          e.target.src = restaurant.fallbackImage || "/images/default-restaurant.jpg";
        }}
        alt={restaurant.name}
        style={{
          width: '100%',
          height: '240px', // Increased height for larger image
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '1rem' // Space below the image
        }}
      />
      <h3 style={{ 
        color: 'var(--text-primary)',
        margin: '0 0 0.5rem 0',
        fontSize: '1.1rem', // Reduced font size
        textAlign: 'left', // Align title to the left
        lineHeight: '1.4' // Reduced line height
      }}>
        {restaurant.name}
      </h3>
      <p style={{ 
        color: 'var(--text-secondary)',
        margin: '0 0 1rem 0',
        fontSize: '0.85rem', // Reduced font size
        lineHeight: '1.4', // Reduced line height
        textAlign: 'left', // Align description to the left
        whiteSpace: 'normal', // Ensure text wraps normally
        overflow: 'visible', // Prevent truncation
        textOverflow: 'clip' // Disable ellipsis
      }}>
        {restaurant.description}
      </p>
    </div>
  );
};

export default RestaurantCard;