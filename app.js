/* G2Market Application v2 */

// === CONFIG ===
const CONFIG = {
  siteName: 'G2Market',
  phone: '+91 7506193335',
  phone2: '+91 9322185151',
  whatsapp: 'https://api.whatsapp.com/send/?phone=917506193335&text=Hi+%2AAuthentic+Indian+products%2A%21+I+need+more+info+about+Authentic+Indian+products+https%3A%2F%2Fg2market.net&type=phone_number&app_absent=0',
  email: 'care@g2market.net',
  address: 'B2 502, Unity Complex, Type B Bharti Park, Near Balaji International Hotel, Mira Road East Thane, Maharashtra, India - 401107',
  social: {
    linkedin: 'https://www.linkedin.com/company/g2market-net/?viewAsMember=true',
    facebook: 'https://www.facebook.com/people/G2Market/61569205462896/',
    instagram: 'https://www.instagram.com/g2mar.ket/',
    youtube: 'https://www.youtube.com/@g2market',
    twitter: 'https://x.com/G2_Market',
    pinterest: '#'
  }
};

// === DATA ===
const STORES = [
  { name: 'Amazon India', icon: '🛒', desc: "India's largest marketplace", slug: 'amazon-india' },
  { name: 'Flipkart', icon: '🛍️', desc: 'Electronics & fashion', slug: 'flipkart' },
  { name: 'Myntra', icon: '👗', desc: 'Fashion & lifestyle', slug: 'myntra' },
  { name: 'Nykaa', icon: '💄', desc: 'Beauty & wellness', slug: 'nykaa' },
  { name: 'Ajio', icon: '👔', desc: 'Trendy fashion', slug: 'ajio' },
  { name: 'FirstCry', icon: '👶', desc: 'Baby & kids products', slug: 'firstcry' },
  { name: 'Tata Cliq', icon: '🏬', desc: 'Premium shopping', slug: 'tata-cliq' },
  { name: 'Jio Mart', icon: '🛒', desc: 'Groceries & essentials', slug: 'jio-mart' }
];

const CATEGORIES = [
  { name: 'Grocery & Spices', img: 'img/grocery-img.png', slug: 'grocery' },
  { name: 'Fashion & Clothing', img: 'img/fashion-img.png', slug: 'fashion' },
  { name: 'Ayurvedic Products', img: 'img/ayurved.jpg', slug: 'ayurvedic' },
  { name: 'Sweets & Namkeen', img: 'img/sweets.png', slug: 'sweets' },
  { name: 'Cosmetics & Jewellery', img: 'img/cosmetic.jpg', slug: 'cosmetics' },
  { name: 'Organic Products', img: 'img/organic.png', slug: 'organic' },
  { name: 'Tea & Coffee', img: 'img/tea-coffee.jpg', slug: 'tea' },
  { name: 'Dried Fruits & Nuts', img: 'img/dried-fruits.png', slug: 'dried-fruits' },
  { name: 'Leather Goods', img: 'img/leather.jpg', slug: 'leather' },
  { name: 'Copper & Metal', img: 'img/copper.jpg', slug: 'metal' },
  { name: 'Ethnic Wear', img: 'img/ethnic.png', slug: 'ethnic' },
  { name: 'Festival Specials', img: 'img/festival.jpg', slug: 'festival' }
];

// ALL countries for calculator
const ALL_COUNTRIES = [
  { code: 'us', name: 'United States', flag: '🇺🇸', rate: 1200, express: 1800, time: '7-10 days', expressTime: '5-7 days' },
  { code: 'gb', name: 'United Kingdom', flag: '🇬🇧', rate: 1100, express: 1700, time: '7-12 days', expressTime: '5-7 days' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦', rate: 1300, express: 1900, time: '8-12 days', expressTime: '7-9 days' },
  { code: 'au', name: 'Australia', flag: '🇦🇺', rate: 1400, express: 2100, time: '8-14 days', expressTime: '7-10 days' },
  { code: 'de', name: 'Germany', flag: '🇩🇪', rate: 1300, express: 1900, time: '8-12 days', expressTime: '5-8 days' },
  { code: 'fr', name: 'France', flag: '🇫🇷', rate: 1300, express: 1900, time: '8-12 days', expressTime: '5-8 days' },
  { code: 'nl', name: 'Netherlands', flag: '🇳🇱', rate: 1300, express: 1900, time: '8-12 days', expressTime: '5-8 days' },
  { code: 'it', name: 'Italy', flag: '🇮🇹', rate: 1350, express: 2000, time: '9-14 days', expressTime: '6-9 days' },
  { code: 'es', name: 'Spain', flag: '🇪🇸', rate: 1350, express: 2000, time: '9-14 days', expressTime: '6-9 days' },
  { code: 'ae', name: 'UAE', flag: '🇦🇪', rate: 900, express: 1400, time: '4-7 days', expressTime: '3-5 days' },
  { code: 'sa', name: 'Saudi Arabia', flag: '🇸🇦', rate: 1000, express: 1500, time: '5-8 days', expressTime: '3-5 days' },
  { code: 'qa', name: 'Qatar', flag: '🇶🇦', rate: 1000, express: 1500, time: '5-8 days', expressTime: '3-5 days' },
  { code: 'kw', name: 'Kuwait', flag: '🇰🇼', rate: 1000, express: 1500, time: '5-8 days', expressTime: '3-5 days' },
  { code: 'sg', name: 'Singapore', flag: '🇸🇬', rate: 1100, express: 1600, time: '5-8 days', expressTime: '3-5 days' },
  { code: 'my', name: 'Malaysia', flag: '🇲🇾', rate: 1100, express: 1600, time: '5-8 days', expressTime: '3-5 days' },
  { code: 'nz', name: 'New Zealand', flag: '🇳🇿', rate: 1500, express: 2200, time: '10-14 days', expressTime: '7-10 days' },
  { code: 'jp', name: 'Japan', flag: '🇯🇵', rate: 1400, express: 2000, time: '7-12 days', expressTime: '5-7 days' },
  { code: 'kr', name: 'South Korea', flag: '🇰🇷', rate: 1400, express: 2000, time: '7-12 days', expressTime: '5-7 days' },
  { code: 'ie', name: 'Ireland', flag: '🇮🇪', rate: 1300, express: 1900, time: '8-12 days', expressTime: '5-8 days' },
  { code: 'pt', name: 'Portugal', flag: '🇵🇹', rate: 1350, express: 2000, time: '9-14 days', expressTime: '6-9 days' },
  { code: 'ch', name: 'Switzerland', flag: '🇨🇭', rate: 1400, express: 2100, time: '8-12 days', expressTime: '5-8 days' },
  { code: 'se', name: 'Sweden', flag: '🇸🇪', rate: 1350, express: 2000, time: '9-14 days', expressTime: '6-9 days' },
  { code: 'dk', name: 'Denmark', flag: '🇩🇰', rate: 1350, express: 2000, time: '9-14 days', expressTime: '6-9 days' },
  { code: 'no', name: 'Norway', flag: '🇳🇴', rate: 1400, express: 2100, time: '9-14 days', expressTime: '6-9 days' },
  { code: 'be', name: 'Belgium', flag: '🇧🇪', rate: 1300, express: 1900, time: '8-12 days', expressTime: '5-8 days' },
  { code: 'at', name: 'Austria', flag: '🇦🇹', rate: 1350, express: 2000, time: '9-14 days', expressTime: '6-9 days' },
  { code: 'pl', name: 'Poland', flag: '🇵🇱', rate: 1300, express: 1900, time: '9-14 days', expressTime: '6-9 days' },
  { code: 'th', name: 'Thailand', flag: '🇹🇭', rate: 1000, express: 1500, time: '5-8 days', expressTime: '3-5 days' },
  { code: 'ph', name: 'Philippines', flag: '🇵🇭', rate: 1200, express: 1700, time: '7-10 days', expressTime: '5-7 days' },
  { code: 'in', name: 'Sri Lanka', flag: '🇱🇰', rate: 800, express: 1200, time: '4-7 days', expressTime: '2-4 days' },
  { code: 'bh', name: 'Bahrain', flag: '🇧🇭', rate: 1000, express: 1500, time: '5-8 days', expressTime: '3-5 days' },
  { code: 'om', name: 'Oman', flag: '🇴🇲', rate: 1000, express: 1500, time: '5-8 days', expressTime: '3-5 days' },
  { code: 'za', name: 'South Africa', flag: '🇿🇦', rate: 1500, express: 2200, time: '10-14 days', expressTime: '7-10 days' },
  { code: 'mx', name: 'Mexico', flag: '🇲🇽', rate: 1600, express: 2400, time: '12-18 days', expressTime: '8-12 days' },
  { code: 'br', name: 'Brazil', flag: '🇧🇷', rate: 1700, express: 2500, time: '14-20 days', expressTime: '10-14 days' },
  { code: 'other', name: 'Other Country', flag: '🌍', rate: 1500, express: 2200, time: '10-20 days', expressTime: '7-12 days' }
];

const COUNTRIES_DISPLAY = [
  { name: 'USA', flag: '🇺🇸', time: '7-10 days', rate: 'From ₹1,200/kg', bg: 'linear-gradient(135deg, #1a3a6c 0%, #2d5aa0 100%)', slug: 'usa' },
  { name: 'UK', flag: '🇬🇧', time: '7-12 days', rate: 'From ₹1,100/kg', bg: 'linear-gradient(135deg, #1a3a6c 0%, #c8102e20 100%)', slug: 'uk' },
  { name: 'Canada', flag: '🇨🇦', time: '8-12 days', rate: 'From ₹1,300/kg', bg: 'linear-gradient(135deg, #d52b1e20 0%, #1a3a6c 100%)', slug: 'canada' },
  { name: 'Australia', flag: '🇦🇺', time: '8-14 days', rate: 'From ₹1,400/kg', bg: 'linear-gradient(135deg, #01216920 0%, #FF993320 100%)', slug: 'australia' }
];

const TESTIMONIALS = [
  { name: 'Priya Sharma', location: 'New Jersey, USA', initials: 'PS', text: 'G2Market made it so easy to get authentic Indian spices and sweets for Diwali. The consolidation saved me almost 60% on shipping!', rating: 5 },
  { name: 'Rajesh Patel', location: 'London, UK', initials: 'RP', text: 'I use G2Market every month for groceries and puja items. Their virtual address service is reliable and the team is very responsive.', rating: 5 },
  { name: 'Anita Desai', location: 'Toronto, Canada', initials: 'AD', text: "The personal shopper service is a lifesaver. They bought medicines from India that I couldn't find here. Highly recommended!", rating: 5 },
  { name: 'Vikram Singh', location: 'Sydney, Australia', initials: 'VS', text: 'Fast shipping, great packaging, and excellent customer support. G2Market is the best parcel forwarding service from India.', rating: 5 },
  { name: 'Meera Nair', location: 'California, USA', initials: 'MN', text: 'Love the premium membership! Priority processing and consolidation discounts have saved me hundreds of dollars.', rating: 5 },
  { name: 'Arjun Reddy', location: 'Manchester, UK', initials: 'AR', text: 'From Flipkart fashion to Nykaa beauty products — G2Market delivers everything perfectly.', rating: 5 }
];

const BLOG_POSTS = [
  { title: 'How to Shop from Amazon India and Ship to USA', category: 'NRI Shopping Tips', emoji: '🛒', excerpt: "Complete guide on buying from Amazon India and getting products delivered to your US address.", date: 'Jun 15, 2026', readTime: '5 min' },
  { title: 'Top 10 Indian Products NRIs Miss the Most', category: 'Indian Product Guides', emoji: '🇮🇳', excerpt: 'From regional snacks to Ayurvedic remedies — discover what Indians abroad crave the most.', date: 'Jun 10, 2026', readTime: '7 min' },
  { title: 'Understanding Customs Duties: India to UK', category: 'Customs Guides', emoji: '📋', excerpt: 'Everything you need to know about customs regulations when shipping from India to the UK.', date: 'Jun 5, 2026', readTime: '6 min' },
  { title: 'Diwali Shopping Guide 2026: Best Deals from India', category: 'Festival Shopping', emoji: '🪔', excerpt: 'Plan your Diwali shopping early. Here are the best stores and deals for NRIs.', date: 'May 28, 2026', readTime: '8 min' },
  { title: 'Parcel Consolidation: How to Save 65% on Shipping', category: 'Shipping Updates', emoji: '📦', excerpt: 'Learn how combining multiple packages into one shipment can dramatically reduce your costs.', date: 'May 20, 2026', readTime: '4 min' },
  { title: "Nykaa vs Purplle: Which is Better for NRIs?", category: 'Product Comparisons', emoji: '💄', excerpt: "A detailed comparison of India's top beauty platforms for international shoppers.", date: 'May 15, 2026', readTime: '6 min' }
];

// === ICONS ===
const ICONS = {
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  barChart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  messageSquare: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  logOut: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  pinterest: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/></svg>'
};

// === STATE ===
const state = { currentPage: 'home', isLoggedIn: false, isAdmin: false, user: null, mobileMenuOpen: false };

// === ROUTER ===
const routes = {
  'home': renderHomePage,
  'calculator': renderCalculatorPage,
  'signup': renderSignupPage,
  'login': renderLoginPage,
  'blog': renderBlogPage,
  'about': renderAboutPage,
  'contact': renderContactPage,
  'dashboard': renderDashboardPage,
  'admin': renderAdminPage,
  'personal-shopper': renderPersonalShopperPage,
  'shop-amazon-india': () => renderShopPage('Amazon India', '🛒', 'Shop from Amazon India', "Browse millions of products from India's largest online marketplace."),
  'shop-flipkart': () => renderShopPage('Flipkart', '🛍️', 'Shop from Flipkart', "India's leading e-commerce store for electronics, fashion, home essentials and more."),
  'shop-myntra': () => renderShopPage('Myntra', '👗', 'Shop from Myntra', "India's top fashion destination with trendy clothing, footwear and accessories."),
  'shop-nykaa': () => renderShopPage('Nykaa', '💄', 'Shop from Nykaa', "Premium beauty, skincare and wellness products from India's top beauty platform."),
  'shop-ajio': () => renderShopPage('Ajio', '👔', 'Shop from Ajio', "Reliance's fashion platform with curated collections from top brands."),
  'shop-firstcry': () => renderShopPage('FirstCry', '👶', 'Shop from FirstCry', "Everything for your baby and kids — diapers, clothing, toys and maternity products."),
  'ship-to-usa': () => renderCountryPage('USA', '🇺🇸'),
  'ship-to-uk': () => renderCountryPage('UK', '🇬🇧'),
  'ship-to-canada': () => renderCountryPage('Canada', '🇨🇦'),
  'ship-to-australia': () => renderCountryPage('Australia', '🇦🇺')
};

function navigate(page) {
  state.currentPage = page;
  window.location.hash = page;
  window.scrollTo(0, 0);
  renderPage();
  closeMobileMenu();
}

function renderPage() {
  const main = document.getElementById('app-main');
  const renderer = routes[state.currentPage] || renderHomePage;
  main.innerHTML = renderer();
  initPageInteractions();
  initScrollReveal();
}

// === HEADER ===
function renderHeader() {
  const header = document.getElementById('site-header');
  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Shopping', page: 'shop-amazon-india' },
    { label: 'Calculator', page: 'calculator' },
    { label: 'Blog', page: 'blog' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];
  header.innerHTML = `
    <div class="header-inner">
      <a href="#home" class="logo-area" onclick="event.preventDefault(); navigate('home')">
        <img src="img/logo.png" alt="G2Market - Shop From India, Deliver Anywhere" class="logo-img">
      </a>
      <nav class="main-nav">
        ${navLinks.map(l => `<a href="#${l.page}" class="nav-link${state.currentPage===l.page?' active':''}" onclick="event.preventDefault(); navigate('${l.page}')">${l.label}</a>`).join('')}
      </nav>
      <div class="header-actions">
        <div class="social-icons">
          <a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener" class="social-icon" aria-label="LinkedIn">${ICONS.linkedin}</a>
          <a href="${CONFIG.social.facebook}" target="_blank" rel="noopener" class="social-icon" aria-label="Facebook">${ICONS.facebook}</a>
          <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener" class="social-icon" aria-label="Instagram">${ICONS.instagram}</a>
          <div style="position:relative">
            <button class="social-more-btn" onclick="toggleSocialDropdown(event)" aria-label="More social links">${ICONS.more}</button>
            <div class="social-dropdown" id="social-dropdown">
              <a href="${CONFIG.social.youtube}" target="_blank" rel="noopener">${ICONS.youtube} YouTube</a>
              <a href="${CONFIG.social.twitter}" target="_blank" rel="noopener">${ICONS.twitter} X (Twitter)</a>
              <a href="${CONFIG.social.pinterest}" target="_blank" rel="noopener">${ICONS.pinterest} Pinterest</a>
            </div>
          </div>
        </div>
        <a href="#login" class="btn btn-secondary btn-sm" onclick="event.preventDefault(); navigate('login')">Login</a>
        <a href="#signup" class="btn btn-primary btn-sm" onclick="event.preventDefault(); navigate('signup')">Sign Up Free</a>
      </div>
      <button class="mobile-menu-btn" id="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Menu">
        <div class="hamburger"><span></span><span></span><span></span></div>
      </button>
    </div>
    <div class="mobile-nav" id="mobile-nav">
      ${navLinks.map(l => `<a href="#${l.page}" class="nav-link" onclick="event.preventDefault(); navigate('${l.page}')">${l.label}</a>`).join('')}
      <div style="display:flex; gap:0.75rem; margin-top:1.5rem;">
        <a href="#login" class="btn btn-secondary" style="flex:1" onclick="event.preventDefault(); navigate('login')">Login</a>
        <a href="#signup" class="btn btn-primary" style="flex:1" onclick="event.preventDefault(); navigate('signup')">Sign Up</a>
      </div>
      <div class="footer-social" style="margin-top:1.5rem; justify-content:center;">
        <a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener">${ICONS.linkedin}</a>
        <a href="${CONFIG.social.facebook}" target="_blank" rel="noopener">${ICONS.facebook}</a>
        <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener">${ICONS.instagram}</a>
        <a href="${CONFIG.social.youtube}" target="_blank" rel="noopener">${ICONS.youtube}</a>
        <a href="${CONFIG.social.twitter}" target="_blank" rel="noopener">${ICONS.twitter}</a>
      </div>
    </div>`;
}

function initHeaderScroll() {
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// === FOOTER ===
function renderFooter() {
  const footer = document.getElementById('site-footer');
  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#home" class="logo-area" onclick="event.preventDefault(); navigate('home')" style="text-decoration:none">
          <img src="img/logo.png" alt="G2Market" class="logo-img" style="height:44px">
        </a>
        <p>Your trusted partner for shopping from India and delivering worldwide. Authentic Indian products, virtual address, and parcel consolidation for NRIs across 149+ countries.</p>
        <div class="footer-social">
          <a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
          <a href="${CONFIG.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
          <a href="${CONFIG.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
          <a href="${CONFIG.social.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.youtube}</a>
          <a href="${CONFIG.social.twitter}" target="_blank" rel="noopener" aria-label="X">${ICONS.twitter}</a>
        </div>
      </div>
      <div>
        <h4 class="footer-heading">Useful Links</h4>
        <ul class="footer-links">
          <li><a href="#about" onclick="event.preventDefault(); navigate('about')">About Us</a></li>
          <li><a href="#contact" onclick="event.preventDefault(); navigate('contact')">Contact Us</a></li>
          <li><a href="#blog" onclick="event.preventDefault(); navigate('blog')">Shipping FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Prohibited Items</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Refund & Cancellation</a></li>
        </ul>
      </div>
      <div>
        <h4 class="footer-heading">Services</h4>
        <ul class="footer-links">
          <li><a href="#shop-amazon-india" onclick="event.preventDefault(); navigate('shop-amazon-india')">Shop Amazon India</a></li>
          <li><a href="#shop-flipkart" onclick="event.preventDefault(); navigate('shop-flipkart')">Shop Flipkart</a></li>
          <li><a href="#shop-myntra" onclick="event.preventDefault(); navigate('shop-myntra')">Shop Myntra</a></li>
          <li><a href="#personal-shopper" onclick="event.preventDefault(); navigate('personal-shopper')">Personal Shopper</a></li>
          <li><a href="#ship-to-usa" onclick="event.preventDefault(); navigate('ship-to-usa')">Ship to USA</a></li>
          <li><a href="#ship-to-uk" onclick="event.preventDefault(); navigate('ship-to-uk')">Ship to UK</a></li>
          <li><a href="#ship-to-canada" onclick="event.preventDefault(); navigate('ship-to-canada')">Ship to Canada</a></li>
          <li><a href="#ship-to-australia" onclick="event.preventDefault(); navigate('ship-to-australia')">Ship to Australia</a></li>
        </ul>
      </div>
      <div class="footer-newsletter">
        <h4 class="footer-heading">Stay Updated</h4>
        <p>Get the latest deals, shipping tips, and NRI shopping guides delivered to your inbox.</p>
        <form class="newsletter-form" onsubmit="event.preventDefault(); this.querySelector('input').value=''; alert('Thank you for subscribing!')">
          <input type="email" placeholder="Your email address" required>
          <button type="submit" class="btn btn-primary btn-sm">Subscribe</button>
        </form>
        <div style="margin-top:1.5rem">
          <p style="color:rgba(255,255,255,0.5); font-size:0.825rem; margin-bottom:0.5rem">Contact Us</p>
          <p style="color:rgba(255,255,255,0.7); font-size:0.85rem; display:flex; align-items:center; gap:0.5rem">
            <span style="width:16px;height:16px;display:inline-flex">${ICONS.phone}</span>
            <a href="tel:${CONFIG.phone}" style="color:rgba(255,255,255,0.7); text-decoration:none">${CONFIG.phone}</a>
          </p>
          <p style="color:rgba(255,255,255,0.7); font-size:0.85rem; margin-top:0.375rem; display:flex; align-items:center; gap:0.5rem">
            <span style="width:16px;height:16px;display:inline-flex">${ICONS.mail}</span>
            <a href="mailto:${CONFIG.email}" style="color:rgba(255,255,255,0.7); text-decoration:none">${CONFIG.email}</a>
          </p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} G2Market. All rights reserved. | Shop from India, Deliver Anywhere.</p>
    </div>`;
}

// === HELPER FUNCTIONS ===
function renderFAQItems() {
  const faqs = [
    { q: 'How does G2Market work?', a: 'Sign up to get a free virtual Indian address. Shop from any Indian website and have products delivered to your virtual address. We consolidate your packages and ship them internationally to your doorstep.' },
    { q: 'Which countries do you ship to?', a: 'We ship to 149+ countries worldwide including USA, UK, Australia, Canada, Germany, France, UAE, Singapore, and many more. Use our shipping calculator to get instant cost estimates.' },
    { q: 'How much can I save with parcel consolidation?', a: 'With parcel consolidation, you can save up to 65% on international shipping costs by combining multiple packages from different stores into a single shipment.' },
    { q: 'What is a virtual Indian address?', a: 'A virtual Indian address is a unique address we provide upon registration. Use it when shopping on Indian websites. We receive your packages at our warehouse and forward them internationally.' },
    { q: 'How long does shipping take?', a: 'Shipping times vary: USA 7-10 days, UK 7-12 days, Canada 8-12 days, Australia 8-14 days, UAE 4-7 days. Express options available for faster delivery.' },
    { q: 'What items cannot be shipped?', a: 'Firearms, illegal substances, perishable foods, hazardous materials, and items prohibited by customs cannot be shipped. Contact us for a complete list.' },
    { q: 'What is the Personal Shopper service?', a: "If you can't purchase directly from Indian websites, our Personal Shopper buys products on your behalf. We handle payment, procurement, and shipping." }
  ];
  return faqs.map(f => `<div class="faq-item"><button class="faq-question" onclick="toggleFaq(this)">${f.q}<span class="faq-icon">${ICONS.plus}</span></button><div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div></div>`).join('');
}

function renderCTASection() {
  return `<section class="section cta-section"><div class="section-container" style="text-align:center; max-width:700px; margin:0 auto"><h2 class="section-title" style="color:white">Start Your Indian Shopping Journey</h2><p style="color:rgba(255,255,255,0.9); font-size:1.05rem; margin-bottom:2rem">Join 10,000+ NRIs who trust G2Market for authentic Indian products delivered worldwide.</p><div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap"><a href="#signup" class="btn cta-btn-white btn-lg" onclick="event.preventDefault(); navigate('signup')">Get Started Free ${ICONS.arrowRight}</a><a href="${CONFIG.whatsapp}" target="_blank" class="btn btn-outline-white btn-lg">Chat on WhatsApp</a></div></div></section>`;
}

// === PAGE RENDERERS ===

function renderHomePage() {
  return `
    <section class="hero">
      <div class="hero-grid">
        <div class="hero-content">
          <div class="hero-badge reveal">
            <span class="hero-badge-dot"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>
            Trusted by 10,000+ NRIs in 149+ Countries
          </div>
          <h1 class="reveal reveal-delay-1">Shop From India.<br><span class="highlight">Deliver Anywhere.</span></h1>
          <p class="hero-subtitle reveal reveal-delay-2">Buy authentic Indian products from your favourite Indian stores — Amazon, Flipkart, Myntra, Nykaa & 1000+ more — and get them delivered safely to USA, UK, Australia, Canada & worldwide.</p>
          <div class="hero-ctas reveal reveal-delay-3">
            <a href="#signup" class="btn btn-primary btn-lg" onclick="event.preventDefault(); navigate('signup')">Get Virtual Address ${ICONS.arrowRight}</a>
            <a href="#calculator" class="btn btn-secondary btn-lg" onclick="event.preventDefault(); navigate('calculator')">Calculate Shipping</a>
          </div>
          <div class="trust-badges reveal reveal-delay-4">
            <div class="trust-badge"><div class="trust-badge-icon">${ICONS.shield}</div>Secure Payments</div>
            <div class="trust-badge"><div class="trust-badge-icon">${ICONS.globe}</div>149+ Countries</div>
            <div class="trust-badge"><div class="trust-badge-icon">${ICONS.box}</div>Save Up To 65%</div>
            <div class="trust-badge"><div class="trust-badge-icon">${ICONS.heart}</div>NRI Trusted</div>
          </div>
        </div>
        <div class="hero-visual reveal reveal-delay-2">
          <div class="hero-card">
            <div class="hero-card-header">
              <div class="hero-card-avatar">G2</div>
              <div><div class="hero-card-title">Shipment Tracking</div><div class="hero-card-sub">Active Deliveries</div></div>
            </div>
            <div class="hero-route">
              <div class="hero-route-point"><div class="hero-route-flag">🇮🇳</div><div class="hero-route-label">From</div><div class="hero-route-name">Mumbai, India</div></div>
              <div class="hero-route-arrow">→</div>
              <div class="hero-route-point"><div class="hero-route-flag">🇺🇸</div><div class="hero-route-label">To</div><div class="hero-route-name">New Jersey, USA</div></div>
            </div>
            <div class="hero-stats">
              <div class="hero-stat"><div class="hero-stat-value">2.4 kg</div><div class="hero-stat-label">Weight</div></div>
              <div class="hero-stat"><div class="hero-stat-value">8 days</div><div class="hero-stat-label">Delivery</div></div>
              <div class="hero-stat"><div class="hero-stat-value">₹2,180</div><div class="hero-stat-label">Cost</div></div>
            </div>
          </div>
          <div class="hero-float hero-float-1"><span style="color:#10B981">✓</span> Package Consolidated</div>
          <div class="hero-float hero-float-2"><span style="color:#F47F20">★</span> 4.9 Rating</div>
        </div>
      </div>
    </section>

    <section class="stats-bar">
      <div class="stats-bar-inner">
        <div><div class="stat-item-value">10,000+</div><div class="stat-item-label">Happy Customers</div></div>
        <div><div class="stat-item-value">50,000+</div><div class="stat-item-label">Packages Shipped</div></div>
        <div><div class="stat-item-value">149+</div><div class="stat-item-label">Countries Served</div></div>
        <div><div class="stat-item-value">500+</div><div class="stat-item-label">Indian Brands</div></div>
      </div>
    </section>

    <section class="section" style="background:white">
      <div class="section-container">
        <div style="text-align:center; max-width:700px; margin:0 auto">
          <div class="section-label" style="justify-content:center">Why G2Market</div>
          <h2 class="section-title">Everything You Need to Shop from India</h2>
          <p class="section-subtitle" style="margin:0 auto">From virtual address to doorstep delivery — we handle everything so you can enjoy authentic Indian products anywhere in the world.</p>
        </div>
        <div class="benefits-grid">
          ${[
            { icon: ICONS.tag, title: 'Save Up To 65%', text: 'With parcel consolidation, combine multiple packages into one shipment and save up to 65% on international shipping costs.' },
            { icon: ICONS.globe, title: 'Shop From Any Indian Website', text: 'Amazon India, Flipkart, Myntra, Ajio, Nykaa, Tata Cliq, FirstCry, Jio Mart — shop from thousands of Indian online stores.' },
            { icon: ICONS.home, title: 'One Virtual Indian Address', text: 'Get your own virtual Indian address. Receive purchases from multiple Indian stores at one convenient location.' },
            { icon: ICONS.box, title: 'Package Consolidation', text: 'Combine multiple packages from different stores into a single shipment. Reduce weight, save money, simplify tracking.' },
            { icon: ICONS.refresh, title: 'Repacking Services', text: 'Reduce volumetric weight by removing unnecessary packaging. Our repacking service helps you save significantly on shipping.' },
            { icon: ICONS.truck, title: 'Worldwide Shipping', text: 'Fast and reliable international delivery to 149+ countries including USA, UK, Australia, Canada, UAE, Europe and more.' }
          ].map((b, i) => `<div class="benefit-card reveal reveal-delay-${Math.min(i % 3 + 1, 3)}"><div class="benefit-icon">${b.icon}</div><h3>${b.title}</h3><p>${b.text}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section" style="background:#FFF9F3">
      <div class="section-container">
        <div style="text-align:center; max-width:700px; margin:0 auto">
          <div class="section-label" style="justify-content:center">Shop by Category</div>
          <h2 class="section-title">Authentic Indian Products, Delivered Worldwide</h2>
          <p class="section-subtitle" style="margin:0 auto">From groceries to fashion, Ayurvedic to cosmetics — we ship every category of Indian products to your doorstep.</p>
        </div>
        <div class="category-showcase">
          ${CATEGORIES.map((c, i) => `
            <a href="#shop-amazon-india" class="category-card reveal reveal-delay-${Math.min(i % 4 + 1, 4)}" onclick="event.preventDefault(); navigate('shop-amazon-india')">
              <img src="${c.img}" alt="${c.name} - Ship from India" loading="lazy">
              <div class="category-card-overlay"><h4>${c.name}</h4><p>Shop & Ship</p></div>
            </a>`).join('')}
        </div>
      </div>
    </section>

    <section class="section stores-section">
      <div class="section-container">
        <div style="text-align:center; max-width:700px; margin:0 auto">
          <div class="section-label" style="justify-content:center">Popular Stores</div>
          <h2 class="section-title">Shop From India's Top Online Stores</h2>
          <p class="section-subtitle" style="margin:0 auto">We can purchase from any Indian online store and ship to your international address.</p>
        </div>
        <div class="stores-grid">
          ${STORES.map((s, i) => `<a href="#shop-${s.slug}" class="store-card reveal reveal-delay-${Math.min(i % 4 + 1, 4)}" onclick="event.preventDefault(); navigate('shop-${s.slug}')"><div style="font-size:2.5rem; margin-bottom:0.75rem">${s.icon}</div><h4>${s.name}</h4><p>${s.desc}</p></a>`).join('')}
        </div>
      </div>
    </section>

    <section class="section how-it-works">
      <div class="section-container">
        <div style="text-align:center; max-width:700px; margin:0 auto">
          <div class="section-label" style="justify-content:center">How It Works</div>
          <h2 class="section-title">Start Shopping in 4 Simple Steps</h2>
        </div>
        <div class="steps-grid">
          ${[
            { n: '1', t: 'Sign Up Free', d: 'Create your account and get your unique virtual Indian address instantly.' },
            { n: '2', t: 'Shop Online', d: 'Order from any Indian website using your virtual address as the delivery address.' },
            { n: '3', t: 'We Consolidate', d: 'We receive, repack, and consolidate your packages to minimize shipping costs.' },
            { n: '4', t: 'Delivered to You', d: 'Your consolidated shipment is delivered safely to your international doorstep.' }
          ].map((s, i) => `<div class="step-card reveal reveal-delay-${i+1}"><div class="step-number">${s.n}</div><h3>${s.t}</h3><p>${s.d}</p></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="section calculator-section">
      <div class="section-container">
        <div class="calc-grid">
          <div class="calc-info">
            <div class="section-label" style="color:rgba(255,255,255,0.6)">Shipping Calculator</div>
            <h2 class="section-title" style="color:white">Calculate Your Shipping Cost</h2>
            <p class="section-subtitle" style="color:rgba(255,255,255,0.7)">Get an instant estimate for shipping your packages from India to 149+ countries worldwide.</p>
            <ul class="calc-features">
              ${['Instant cost estimates for 149+ countries','Chargeable weight calculation','Delivery timeline estimates','Standard & Express options','No hidden charges'].map(f => `<li><span class="check-icon">${ICONS.check}</span>${f}</li>`).join('')}
            </ul>
            <a href="#calculator" class="btn btn-primary btn-lg" style="margin-top:2rem" onclick="event.preventDefault(); navigate('calculator')">Use Full Calculator ${ICONS.arrowRight}</a>
          </div>
          <div class="calc-form" id="quick-calc-form">
            <h3 style="font-family:'Playfair Display',serif">Quick Estimate</h3>
            <div class="form-group">
              <label class="form-label">Destination Country</label>
              <select class="form-select" id="qc-country"><option value="">Select country</option>${ALL_COUNTRIES.map(c => `<option value="${c.code}">${c.flag} ${c.name}</option>`).join('')}</select>
            </div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">Weight (kg)</label><input type="number" class="form-input" id="qc-weight" placeholder="e.g. 2" min="0.1" step="0.1"></div>
              <div class="form-group"><label class="form-label">Service Type</label><select class="form-select" id="qc-service"><option value="standard">Standard</option><option value="express">Express</option></select></div>
            </div>
            <button class="btn btn-primary" style="width:100%" onclick="calculateQuick()">Calculate Estimate</button>
            <div class="calc-result" id="qc-result">
              <div class="calc-result-row"><span class="calc-result-label">Estimated Weight</span><span class="calc-result-value" id="qc-est-weight">—</span></div>
              <div class="calc-result-row"><span class="calc-result-label">Delivery Timeline</span><span class="calc-result-value" id="qc-timeline">—</span></div>
              <div class="calc-result-row total"><span class="calc-result-label">Estimated Cost</span><span class="calc-result-value highlight" id="qc-cost">—</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:white">
      <div class="section-container">
        <div style="text-align:center; max-width:700px; margin:0 auto">
          <div class="section-label" style="justify-content:center">Global Shipping</div>
          <h2 class="section-title">Ship From India to Your Country</h2>
          <p class="section-subtitle" style="margin:0 auto">We deliver to 149+ countries. Here are our most popular destinations.</p>
        </div>
        <div class="country-cards">
          ${COUNTRIES_DISPLAY.map((c, i) => `<a href="#ship-to-${c.slug}" class="country-card reveal reveal-delay-${i+1}" onclick="event.preventDefault(); navigate('ship-to-${c.slug}')"><div class="country-card-banner" style="background:${c.bg}"><span style="font-size:3.5rem">${c.flag}</span></div><div class="country-card-body"><h3>Ship to ${c.name}</h3><p>Fast and affordable shipping from India to ${c.name} with full tracking.</p><div class="country-card-meta"><span>${ICONS.clock} ${c.time}</span><span>${ICONS.tag} ${c.rate}</span></div></div></a>`).join('')}
        </div>
        <div style="text-align:center; margin-top:2rem">
          <a href="#calculator" class="btn btn-secondary" onclick="event.preventDefault(); navigate('calculator')">View All 149+ Countries ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>

    <section class="section testimonials-section">
      <div class="section-container">
        <div style="text-align:center; max-width:700px; margin:0 auto">
          <div class="section-label" style="justify-content:center">Customer Reviews</div>
          <h2 class="section-title">Loved by NRIs Worldwide</h2>
        </div>
        <div class="testimonials-grid">
          ${TESTIMONIALS.slice(0, 3).map((t, i) => `<div class="testimonial-card reveal reveal-delay-${i+1}"><div class="testimonial-stars">${Array(t.rating).fill(ICONS.star).join('')}</div><blockquote>"${t.text}"</blockquote><div class="testimonial-author"><div class="testimonial-avatar">${t.initials}</div><div><div class="testimonial-name">${t.name}</div><div class="testimonial-location">${t.location}</div></div></div></div>`).join('')}
        </div>
        <div class="review-cta reveal"><a href="https://g2market.lovable.app/" target="_blank" class="btn btn-primary btn-lg">Review Us on Google ${ICONS.star}</a></div>
      </div>
    </section>

    ${renderCTASection()}

    <section class="section" style="background:white">
      <div class="section-container">
        <div style="text-align:center; max-width:700px; margin:0 auto">
          <div class="section-label" style="justify-content:center">FAQ</div>
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">${renderFAQItems()}</div>
      </div>
    </section>`;
}

function renderCalculatorPage() {
  return `
    <section class="page-hero">
      <div class="breadcrumbs"><a href="#home" onclick="event.preventDefault(); navigate('home')">Home</a> <span>/</span> <span>Shipping Calculator</span></div>
      <h1>Shipping Cost Calculator</h1>
      <p>Get an instant estimate for shipping your packages from India to 149+ countries worldwide.</p>
    </section>
    <section class="section" style="background:white">
      <div class="section-container" style="max-width:800px; margin:0 auto">
        <div class="calc-form" style="background:#FFF9F3; border-color:rgba(244,127,32,0.15)">
          <h3 style="font-family:'Playfair Display',serif; color:#0D1421; font-size:1.5rem; text-align:center; margin-bottom:2rem">Calculate Your Shipping Cost</h3>
          <div class="form-group"><label class="form-label" style="color:#273C63">Destination Country</label>
            <select class="form-input" id="calc-country" style="background:#F0F3F8; border:1.5px solid transparent; color:#1A2842">
              <option value="">Select country</option>${ALL_COUNTRIES.map(c => `<option value="${c.code}">${c.flag} ${c.name}</option>`).join('')}
            </select>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem">
            <div class="form-group"><label class="form-label" style="color:#273C63">Length (cm)</label><input type="number" class="form-input" id="calc-length" placeholder="30" min="1" style="background:#F0F3F8; border:1.5px solid transparent; color:#1A2842"></div>
            <div class="form-group"><label class="form-label" style="color:#273C63">Width (cm)</label><input type="number" class="form-input" id="calc-width" placeholder="20" min="1" style="background:#F0F3F8; border:1.5px solid transparent; color:#1A2842"></div>
            <div class="form-group"><label class="form-label" style="color:#273C63">Height (cm)</label><input type="number" class="form-input" id="calc-height" placeholder="15" min="1" style="background:#F0F3F8; border:1.5px solid transparent; color:#1A2842"></div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem">
            <div class="form-group"><label class="form-label" style="color:#273C63">Actual Weight (kg)</label><input type="number" class="form-input" id="calc-weight" placeholder="2" min="0.1" step="0.1" style="background:#F0F3F8; border:1.5px solid transparent; color:#1A2842"></div>
            <div class="form-group"><label class="form-label" style="color:#273C63">Service Type</label>
              <select class="form-input" id="calc-service" style="background:#F0F3F8; border:1.5px solid transparent; color:#1A2842"><option value="standard">Standard</option><option value="express">Express</option></select>
            </div>
          </div>
          <button class="btn btn-primary btn-lg" style="width:100%; margin-top:0.5rem" onclick="calculateFull()">Calculate Shipping Cost</button>
          <div class="calc-result" id="calc-result" style="background:rgba(244,127,32,0.08); border-color:rgba(244,127,32,0.2)">
            <div class="calc-result-row"><span class="calc-result-label" style="color:#4164A5">Volumetric Weight</span><span class="calc-result-value" style="color:#1A2842" id="calc-vol-weight">—</span></div>
            <div class="calc-result-row"><span class="calc-result-label" style="color:#4164A5">Chargeable Weight</span><span class="calc-result-value" style="color:#1A2842" id="calc-charge-weight">—</span></div>
            <div class="calc-result-row"><span class="calc-result-label" style="color:#4164A5">Delivery Timeline</span><span class="calc-result-value" style="color:#1A2842" id="calc-delivery">—</span></div>
            <div class="calc-result-row total" style="border-color:rgba(244,127,32,0.3)"><span class="calc-result-label" style="color:#1A2842; font-size:1rem">Estimated Cost</span><span class="calc-result-value highlight" id="calc-total-cost">—</span></div>
          </div>
        </div>
        <div style="margin-top:3rem; text-align:center">
          <h3 style="font-family:'Playfair Display',serif; font-size:1.25rem; margin-bottom:0.5rem; color:#0D1421">Want to ship at these rates?</h3>
          <p style="color:#4164A5; font-size:0.9rem; margin-bottom:1.5rem">Sign up now and start shipping from India today.</p>
          <a href="#signup" class="btn btn-primary btn-lg" onclick="event.preventDefault(); navigate('signup')">Get Your Virtual Address ${ICONS.arrowRight}</a>
        </div>
      </div>
    </section>`;
}

function renderShopPage(storeName, icon, title, description) {
  return `
    <section class="page-hero">
      <div class="breadcrumbs"><a href="#home" onclick="event.preventDefault(); navigate('home')">Home</a> <span>/</span> <span>Shopping</span> <span>/</span> <span>${storeName}</span></div>
      <h1>${title}</h1>
      <p>${description}</p>
    </section>
    <section class="section" style="background:white">
      <div class="section-container">
        <div class="shopping-hero">
          <div>
            <h2 style="font-family:'Playfair Display',serif; font-size:1.75rem; color:#0D1421; margin-bottom:1rem">How to Shop from ${storeName}</h2>
            <ol style="padding-left:1.25rem; color:#273C63; display:flex; flex-direction:column; gap:0.75rem; margin-bottom:1.5rem">
              <li><strong>Sign up</strong> on G2Market to get your virtual Indian address</li>
              <li><strong>Shop</strong> on ${storeName} using your virtual address as delivery address</li>
              <li><strong>We receive</strong> your package at our Indian warehouse</li>
              <li><strong>We consolidate</strong> and repack to minimize shipping costs</li>
              <li><strong>We ship</strong> your package to your international doorstep</li>
            </ol>
            <a href="#signup" class="btn btn-primary btn-lg" onclick="event.preventDefault(); navigate('signup')">Start Shopping Now ${ICONS.arrowRight}</a>
          </div>
          <div>
            <div style="background:linear-gradient(135deg, #FFEDD5, #FFD9A8); border-radius:24px; padding:3rem; text-align:center">
              <div style="font-size:4rem; margin-bottom:1rem">${icon}</div>
              <h3 style="font-family:'Playfair Display',serif; font-size:1.5rem; color:#0D1421; margin-bottom:0.5rem">${storeName}</h3>
              <p style="color:#4164A5; font-size:0.9rem">Shop now and ship to 149+ countries</p>
            </div>
          </div>
        </div>
        <div class="shopping-features" style="margin-top:3rem">
          ${[
            { icon: ICONS.home, t: 'Virtual Address', d: 'Use our Indian address on ' + storeName },
            { icon: ICONS.box, t: 'Package Consolidation', d: 'Combine with other store orders' },
            { icon: ICONS.shield, t: 'Safe & Secure', d: 'Full insurance and tracking' },
            { icon: ICONS.truck, t: 'Fast Delivery', d: '4-14 days to 149+ countries' }
          ].map(f => `<div class="shopping-feature"><div class="shopping-feature-icon">${f.icon}</div><div><h4>${f.t}</h4><p>${f.d}</p></div></div>`).join('')}
        </div>
      </div>
    </section>
    ${renderCTASection()}`;
}

function renderCountryPage(country, flag) {
  const data = {
    'USA': { time: '7-10 business days', rate: '₹1,200/kg', customs: 'Goods up to $800 can be imported duty-free under de minimis threshold. Electronics, clothing, and personal items are commonly shipped.', stores: 'Amazon India, Flipkart, Myntra, Nykaa' },
    'UK': { time: '7-12 business days', rate: '₹1,100/kg', customs: 'Goods up to £135 are exempt from customs duty. VAT applies at 20% on most goods.', stores: 'Amazon India, Flipkart, Ajio, FirstCry' },
    'Canada': { time: '8-12 business days', rate: '₹1,300/kg', customs: 'Goods up to CAD 20 are duty-free. Higher values may attract GST/HST.', stores: 'Amazon India, Myntra, Nykaa, Tata Cliq' },
    'Australia': { time: '8-14 business days', rate: '₹1,400/kg', customs: 'Goods up to AUD 1,000 are generally duty-free. Biosecurity regulations apply to food items. GST at 10%.', stores: 'Amazon India, Flipkart, Ajio, FirstCry' }
  };
  const d = data[country] || data['USA'];
  return `
    <section class="page-hero">
      <div class="breadcrumbs"><a href="#home" onclick="event.preventDefault(); navigate('home')">Home</a> <span>/</span> <span>Ship to ${country}</span></div>
      <h1>Ship From India to ${country} ${flag}</h1>
      <p>Fast, affordable, and reliable international shipping from India to ${country}.</p>
    </section>
    <section class="section" style="background:white">
      <div class="section-container" style="max-width:900px; margin:0 auto">
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-bottom:3rem">
          <div style="background:#FFF9F3; border-radius:16px; padding:1.5rem; text-align:center"><div style="width:32px;height:32px;margin:0 auto 0.5rem;color:#F47F20">${ICONS.clock}</div><h4 style="font-size:0.85rem; color:#6783B7; margin-bottom:0.25rem">Delivery Time</h4><p style="font-size:1.1rem; font-weight:700; color:#0D1421">${d.time}</p></div>
          <div style="background:#FFF9F3; border-radius:16px; padding:1.5rem; text-align:center"><div style="width:32px;height:32px;margin:0 auto 0.5rem;color:#F47F20">${ICONS.tag}</div><h4 style="font-size:0.85rem; color:#6783B7; margin-bottom:0.25rem">Starting Rate</h4><p style="font-size:1.1rem; font-weight:700; color:#F47F20">${d.rate}</p></div>
          <div style="background:#FFF9F3; border-radius:16px; padding:1.5rem; text-align:center"><div style="width:32px;height:32px;margin:0 auto 0.5rem;color:#F47F20">${ICONS.package}</div><h4 style="font-size:0.85rem; color:#6783B7; margin-bottom:0.25rem">Popular Stores</h4><p style="font-size:0.85rem; font-weight:600; color:#0D1421">${d.stores}</p></div>
        </div>
        <h3 style="font-family:'Playfair Display',serif; font-size:1.35rem; margin-bottom:1rem; color:#0D1421">Customs Information for ${country}</h3>
        <p style="color:#4164A5; line-height:1.7; margin-bottom:2rem">${d.customs}</p>
        <h3 style="font-family:'Playfair Display',serif; font-size:1.35rem; margin-bottom:1rem; color:#0D1421">Frequently Asked Questions</h3>
        <div class="faq-list" style="margin-top:1rem">
          <div class="faq-item"><button class="faq-question" onclick="toggleFaq(this)">How long does shipping to ${country} take?<span class="faq-icon">${ICONS.plus}</span></button><div class="faq-answer"><div class="faq-answer-inner">Standard shipping to ${country} takes ${d.time}. Express options are available for faster delivery.</div></div></div>
          <div class="faq-item"><button class="faq-question" onclick="toggleFaq(this)">What is the shipping cost to ${country}?<span class="faq-icon">${ICONS.plus}</span></button><div class="faq-answer"><div class="faq-answer-inner">Shipping starts from ${d.rate}. Final cost depends on weight, dimensions, and service type. Use our calculator for an exact estimate.</div></div></div>
          <div class="faq-item"><button class="faq-question" onclick="toggleFaq(this)">Can I track my shipment to ${country}?<span class="faq-icon">${ICONS.plus}</span></button><div class="faq-answer"><div class="faq-answer-inner">Yes, all shipments include full tracking. You'll receive a tracking number once dispatched.</div></div></div>
        </div>
        <div style="text-align:center; margin-top:3rem"><a href="#signup" class="btn btn-primary btn-lg" onclick="event.preventDefault(); navigate('signup')">Start Shipping to ${country} ${ICONS.arrowRight}</a></div>
      </div>
    </section>`;
}

function renderPersonalShopperPage() {
  return `
    <section class="page-hero">
      <div class="breadcrumbs"><a href="#home" onclick="event.preventDefault(); navigate('home')">Home</a> <span>/</span> <span>Personal Shopper</span></div>
      <h1>Personal Shopper Service</h1>
      <p>Can't shop from Indian websites yourself? Let us buy on your behalf. We handle everything from product sourcing to international delivery.</p>
    </section>
    <section class="section" style="background:white">
      <div class="section-container">
        <div class="shopper-benefits">
          ${[
            { icon: ICONS.globe, t: 'Product Sourcing', d: 'We find and source any product available in India, from any store or marketplace.' },
            { icon: ICONS.shield, t: 'Payment Assistance', d: "Can't pay in Indian Rupees? We handle the payment on your behalf with secure options." },
            { icon: ICONS.box, t: 'Consolidation', d: 'We combine all your purchases into a single shipment, saving up to 65% on shipping.' },
            { icon: ICONS.truck, t: 'International Delivery', d: 'Safe and tracked delivery to your doorstep in 149+ countries worldwide.' }
          ].map((b, i) => `<div class="shopper-benefit reveal reveal-delay-${i+1}"><div class="shopper-benefit-icon">${b.icon}</div><div><h4>${b.t}</h4><p>${b.d}</p></div></div>`).join('')}
        </div>
        <div style="max-width:600px; margin:3rem auto 0; background:#FFF9F3; border-radius:20px; padding:2rem; text-align:center">
          <h3 style="font-family:'Playfair Display',serif; font-size:1.25rem; margin-bottom:0.75rem; color:#0D1421">Need Something from India?</h3>
          <p style="color:#4164A5; font-size:0.9rem; margin-bottom:1.5rem">Tell us what you need and we'll get it for you.</p>
          <a href="${CONFIG.whatsapp}" target="_blank" class="btn btn-primary" style="margin-right:0.5rem">Chat on WhatsApp</a>
          <a href="#contact" class="btn btn-secondary" onclick="event.preventDefault(); navigate('contact')">Contact Us</a>
        </div>
      </div>
    </section>
    ${renderCTASection()}`;
}

function renderBlogPage() {
  return `
    <section class="page-hero">
      <div class="breadcrumbs"><a href="#home" onclick="event.preventDefault(); navigate('home')">Home</a> <span>/</span> <span>Blog</span></div>
      <h1>NRI Shopping Blog</h1>
      <p>Tips, guides, and updates for shopping from India and shipping internationally.</p>
    </section>
    <section class="section" style="background:white">
      <div class="section-container">
        <div class="blog-grid">
          ${BLOG_POSTS.map((p, i) => `<div class="blog-card reveal reveal-delay-${Math.min(i % 3 + 1, 3)}"><div class="blog-card-image">${p.emoji}</div><div class="blog-card-body"><span class="blog-card-category">${p.category}</span><h3>${p.title}</h3><p>${p.excerpt}</p><div class="blog-card-meta"><span>${p.date}</span><span>${p.readTime} read</span></div></div></div>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderAboutPage() {
  return `
    <section class="page-hero">
      <div class="breadcrumbs"><a href="#home" onclick="event.preventDefault(); navigate('home')">Home</a> <span>/</span> <span>About Us</span></div>
      <h1>About G2Market</h1>
      <p>Bridging the distance between India and NRIs worldwide through reliable shopping and shipping services.</p>
    </section>
    <section class="section" style="background:white">
      <div class="section-container" style="max-width:800px; margin:0 auto">
        <div style="margin-bottom:3rem">
          <h2 style="font-family:'Playfair Display',serif; font-size:1.5rem; color:#0D1421; margin-bottom:1rem">Our Mission</h2>
          <p style="color:#4164A5; line-height:1.8">G2Market was founded with a simple mission: to help NRIs and international buyers access authentic Indian products without the hassle of international shipping complexities. We believe that no matter where you live in the world, you should have easy access to the products, brands, and stores you love from India.</p>
        </div>
        <div style="margin-bottom:3rem">
          <h2 style="font-family:'Playfair Display',serif; font-size:1.5rem; color:#0D1421; margin-bottom:1rem">What We Do</h2>
          <p style="color:#4164A5; line-height:1.8">While we fly high with two beautiful wings — Forwarding and Courier Services — partnered with all of the main Indian online businesses and shipping giants such as DHL and DTDC, we generate whirlwinds in the industry with our steadfastness and promptness. We reduce shipping costs by 60% to 80% through our fine-tuned system of storing, repackaging, combining, and shipping each package.</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-bottom:3rem">
          <div style="text-align:center; padding:1.5rem; background:#FFF9F3; border-radius:16px"><div style="font-size:2rem; font-weight:700; color:#F47F20; font-family:'Playfair Display',serif">10,000+</div><div style="font-size:0.85rem; color:#6783B7; margin-top:0.25rem">Happy Customers</div></div>
          <div style="text-align:center; padding:1.5rem; background:#FFF9F3; border-radius:16px"><div style="font-size:2rem; font-weight:700; color:#F47F20; font-family:'Playfair Display',serif">50,000+</div><div style="font-size:0.85rem; color:#6783B7; margin-top:0.25rem">Packages Shipped</div></div>
          <div style="text-align:center; padding:1.5rem; background:#FFF9F3; border-radius:16px"><div style="font-size:2rem; font-weight:700; color:#F47F20; font-family:'Playfair Display',serif">149+</div><div style="font-size:0.85rem; color:#6783B7; margin-top:0.25rem">Countries Served</div></div>
        </div>
        <div>
          <h2 style="font-family:'Playfair Display',serif; font-size:1.5rem; color:#0D1421; margin-bottom:1rem">Why Choose G2Market?</h2>
          <ul style="color:#4164A5; line-height:2; padding-left:1.25rem">
            <li>Trusted by thousands of NRIs across USA, UK, Australia, Canada, UAE, Europe and 149+ countries</li>
            <li>Save up to 65% with our parcel consolidation service</li>
            <li>Shop from 500+ Indian brands and 1000+ online stores</li>
            <li>Personal shopper service for hassle-free purchasing</li>
            <li>Transparent pricing with no hidden charges</li>
            <li>Dedicated customer support via WhatsApp, email, and phone</li>
            <li>Partnered with DHL, DTDC and major shipping carriers</li>
          </ul>
        </div>
      </div>
    </section>
    ${renderCTASection()}`;
}

function renderContactPage() {
  return `
    <section class="page-hero">
      <div class="breadcrumbs"><a href="#home" onclick="event.preventDefault(); navigate('home')">Home</a> <span>/</span> <span>Contact Us</span></div>
      <h1>Contact Us</h1>
      <p>Have questions? We're here to help. Reach out through any channel below.</p>
    </section>
    <section class="section" style="background:white">
      <div class="section-container" style="max-width:1000px; margin:0 auto">
        <div class="contact-grid">
          <div>
            <h3 style="font-family:'Playfair Display',serif; font-size:1.25rem; margin-bottom:1.5rem; color:#0D1421">Get in Touch</h3>
            <div class="contact-info-card"><div class="contact-info-icon">${ICONS.phone}</div><div><h4>Phone</h4><p><a href="tel:${CONFIG.phone}">${CONFIG.phone}</a></p><p><a href="tel:${CONFIG.phone2}">${CONFIG.phone2}</a></p></div></div>
            <div class="contact-info-card"><div class="contact-info-icon">${ICONS.mail}</div><div><h4>Email</h4><p><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p></div></div>
            <div class="contact-info-card"><div class="contact-info-icon" style="color:#25D366"><svg viewBox="0 0 24 24" fill="#25D366" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg></div><div><h4>WhatsApp</h4><p><a href="${CONFIG.whatsapp}" target="_blank">Chat with us</a></p></div></div>
            <div class="contact-info-card"><div class="contact-info-icon">${ICONS.mapPin}</div><div><h4>Office Address</h4><p style="line-height:1.6">B2 502, Unity Complex, Type B Bharti Park,<br>Near Balaji International Hotel,<br>Mira Road East Thane,<br>Maharashtra, India - 401107</p></div></div>
          </div>
          <div class="contact-form">
            <h3 style="font-family:'Playfair Display',serif; font-size:1.25rem; margin-bottom:1.5rem; color:#0D1421">Send Us a Message</h3>
            <form onsubmit="event.preventDefault(); alert('Thank you! We will get back to you soon at care@g2market.net'); this.reset();">
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem">
                <div class="form-group"><label class="form-label">Full Name</label><input type="text" class="form-input" placeholder="Your name" required></div>
                <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" placeholder="your@email.com" required></div>
              </div>
              <div class="form-group"><label class="form-label">Subject</label><select class="form-select" required><option value="">Select subject</option><option>General Enquiry</option><option>Shipping Question</option><option>Account Issue</option><option>Personal Shopper</option><option>Partnership</option><option>Other</option></select></div>
              <div class="form-group"><label class="form-label">Message</label><textarea class="form-input" placeholder="How can we help?" required></textarea></div>
              <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Send Message ${ICONS.arrowRight}</button>
            </form>
          </div>
        </div>
      </div>
    </section>`;
}

function renderSignupPage() {
  return `
    <div class="auth-container">
      <div class="auth-card">
        <div style="text-align:center; margin-bottom:1.5rem"><img src="img/logo.png" alt="G2Market" style="height:60px; margin:0 auto"></div>
        <h2 style="text-align:center">Create Your Account</h2>
        <p class="subtitle" style="text-align:center">Get your free virtual Indian address and start shopping</p>
        <form class="auth-form" onsubmit="event.preventDefault(); handleSignup();">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem">
            <div class="form-group"><label class="form-label">First Name</label><input type="text" class="form-input" placeholder="First name" required></div>
            <div class="form-group"><label class="form-label">Last Name</label><input type="text" class="form-input" placeholder="Last name" required></div>
          </div>
          <div class="form-group"><label class="form-label">Email Address</label><input type="email" class="form-input" placeholder="your@email.com" required></div>
          <div class="form-group"><label class="form-label">Phone Number</label><input type="tel" class="form-input" placeholder="+1 234 567 8900" required></div>
          <div class="form-group"><label class="form-label">Country</label><select class="form-input" required><option value="">Select your country</option><option>United States</option><option>United Kingdom</option><option>Canada</option><option>Australia</option><option>UAE</option><option>Singapore</option><option>Germany</option><option>France</option><option>Other</option></select></div>
          <div class="form-group"><label class="form-label">Password</label><input type="password" class="form-input" placeholder="Min 8 characters" required minlength="8"></div>
          <div style="display:flex; align-items:flex-start; gap:0.5rem; margin-bottom:1.25rem"><input type="checkbox" id="terms" required style="margin-top:0.25rem"><label for="terms" style="font-size:0.8rem; color:#4164A5">I agree to the Terms & Conditions and Privacy Policy</label></div>
          <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Create Account ${ICONS.arrowRight}</button>
        </form>
        <p class="auth-link">Already have an account? <a href="#login" onclick="event.preventDefault(); navigate('login')">Login</a></p>
      </div>
    </div>`;
}

function renderLoginPage() {
  return `
    <div class="auth-container">
      <div class="auth-card">
        <div style="text-align:center; margin-bottom:1.5rem"><img src="img/logo.png" alt="G2Market" style="height:60px; margin:0 auto"></div>
        <h2 style="text-align:center">Welcome Back</h2>
        <p class="subtitle" style="text-align:center">Login to access your dashboard and virtual address</p>
        <form class="auth-form" onsubmit="event.preventDefault(); handleLogin();">
          <div class="form-group"><label class="form-label">Email Address</label><input type="email" class="form-input" placeholder="your@email.com" required></div>
          <div class="form-group"><label class="form-label">Password</label><input type="password" class="form-input" placeholder="Your password" required></div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem">
            <label style="display:flex; align-items:center; gap:0.375rem; font-size:0.825rem; color:#4164A5; cursor:pointer"><input type="checkbox"> Remember me</label>
            <a href="#" style="font-size:0.825rem; color:#F47F20; text-decoration:none; font-weight:500" onclick="event.preventDefault(); alert('Password reset link sent to your email')">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="width:100%">Login ${ICONS.arrowRight}</button>
        </form>
        <p class="auth-link">Don't have an account? <a href="#signup" onclick="event.preventDefault(); navigate('signup')">Sign Up Free</a></p>
      </div>
    </div>`;
}

function renderDashboardPage() {
  if (!state.isLoggedIn) { navigate('login'); return ''; }
  const userName = state.user?.name || 'User';
  return `
    <div class="dashboard-layout">
      <aside class="dashboard-sidebar">
        <div class="dash-user"><div class="dash-user-name">${userName}</div><div class="dash-user-email">${state.user?.email || 'user@email.com'}</div><span class="dash-user-badge ${state.user?.premium ? 'premium' : 'normal'}">${state.user?.premium ? '★ Premium' : 'Normal Member'}</span></div>
        <ul class="dash-nav">
          <li><a href="#" class="active">${ICONS.home} Dashboard</a></li>
          <li><a href="#">${ICONS.mapPin} My Virtual Address</a></li>
          <li><a href="#">${ICONS.package} My Shipments</a></li>
          <li><a href="#">${ICONS.fileText} Upload Invoices</a></li>
          <li><a href="#">${ICONS.user} My Addresses</a></li>
          <li><a href="#">${ICONS.messageSquare} Support</a></li>
          ${!state.user?.premium ? '<li><a href="#" style="color:#F47F20; font-weight:600">' + ICONS.star + ' Upgrade to Premium</a></li>' : ''}
          <li><a href="#" onclick="event.preventDefault(); handleLogout()">${ICONS.logOut} Logout</a></li>
        </ul>
      </aside>
      <div class="dashboard-content">
        <h2 style="font-family:'Playfair Display',serif; font-size:1.5rem; margin-bottom:0.25rem; color:#0D1421">Welcome back, ${userName.split(' ')[0]}!</h2>
        <p style="color:#6783B7; font-size:0.9rem; margin-bottom:2rem">Here's your account overview</p>
        <div class="dash-stats">
          <div class="dash-stat-card"><div class="dash-stat-label">Active Shipments</div><div class="dash-stat-value">3</div><div class="dash-stat-change">+1 this week</div></div>
          <div class="dash-stat-card"><div class="dash-stat-label">Packages Received</div><div class="dash-stat-value">12</div><div class="dash-stat-change">+4 this month</div></div>
          <div class="dash-stat-card"><div class="dash-stat-label">Total Saved</div><div class="dash-stat-value">₹8,420</div><div class="dash-stat-change">From consolidation</div></div>
          <div class="dash-stat-card"><div class="dash-stat-label">Membership</div><div class="dash-stat-value" style="font-size:1.25rem">${state.user?.premium ? '★ Premium' : 'Normal'}</div>${!state.user?.premium ? '<div class="dash-stat-change" style="color:#F47F20; cursor:pointer" onclick="alert(\'Premium upgrade request submitted!\')">Upgrade now →</div>' : '<div class="dash-stat-change">Active</div>'}</div>
        </div>
        <div style="background:white; border-radius:16px; padding:1.5rem; border:1px solid rgba(26,40,66,0.06); margin-bottom:1.5rem">
          <h3 style="font-size:1rem; font-weight:600; color:#0D1421; margin-bottom:1rem">Your Virtual Indian Address</h3>
          <div style="background:#FFF9F3; border-radius:12px; padding:1.25rem; border:1px dashed rgba(244,127,32,0.3)">
            <p style="font-weight:600; color:#0D1421; margin-bottom:0.25rem">${userName}</p>
            <p style="color:#4164A5; font-size:0.9rem; line-height:1.6">G2Market Warehouse<br>Unit #${Math.floor(Math.random()*9000+1000)}<br>B2 502, Unity Complex, Type B Bharti Park<br>Mira Road East Thane, Maharashtra 401107<br>India<br>Phone: ${CONFIG.phone}</p>
          </div>
          <p style="font-size:0.775rem; color:#8DA2C9; margin-top:0.75rem">Use this address when shopping on Indian websites. Packages received here will be forwarded to your international address.</p>
        </div>
        <div style="background:white; border-radius:16px; padding:1.5rem; border:1px solid rgba(26,40,66,0.06)">
          <h3 style="font-size:1rem; font-weight:600; color:#0D1421; margin-bottom:1rem">Recent Shipments</h3>
          <div style="display:flex; flex-direction:column; gap:0.75rem">
            ${[{id:'G2M-2026-0847',status:'In Transit',to:'New Jersey',date:'Jun 12, 2026'},{id:'G2M-2026-0831',status:'Delivered',to:'New Jersey',date:'Jun 05, 2026'},{id:'G2M-2026-0798',status:'Processing',to:'New Jersey',date:'Jun 16, 2026'}].map(s => `<div style="display:flex; align-items:center; justify-content:space-between; padding:0.875rem 1rem; background:#F8FAFC; border-radius:10px"><div><span style="font-weight:600; font-size:0.875rem; color:#0D1421">${s.id}</span><span style="font-size:0.8rem; color:#6783B7; margin-left:0.75rem">Mumbai → ${s.to}</span></div><div style="display:flex; align-items:center; gap:0.75rem"><span style="font-size:0.775rem; color:#8DA2C9">${s.date}</span><span style="padding:0.2rem 0.625rem; border-radius:100px; font-size:0.725rem; font-weight:600;${s.status==='Delivered'?'background:rgba(16,185,129,0.1); color:#059669':s.status==='In Transit'?'background:rgba(244,127,32,0.1); color:#F47F20':'background:rgba(100,116,139,0.1); color:#475569'}">${s.status}</span></div></div>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

function renderAdminPage() {
  if (!state.isAdmin) { navigate('login'); return ''; }
  return `
    <div class="dashboard-layout">
      <aside class="dashboard-sidebar">
        <div class="dash-user"><div class="dash-user-name">Admin</div><div class="dash-user-email">admin@g2market.net</div><span class="dash-user-badge premium">Admin</span></div>
        <ul class="dash-nav">
          <li><a href="#" class="active">${ICONS.barChart} Analytics</a></li>
          <li><a href="#">${ICONS.users} Users</a></li>
          <li><a href="#">${ICONS.package} Shipments</a></li>
          <li><a href="#">${ICONS.star} Premium Requests</a></li>
          <li><a href="#">${ICONS.messageSquare} Enquiries</a></li>
          <li><a href="#">${ICONS.fileText} Blog Posts</a></li>
          <li><a href="#">${ICONS.tag} Coupons</a></li>
          <li><a href="#">${ICONS.settings} Settings</a></li>
          <li><a href="#" onclick="event.preventDefault(); handleLogout()">${ICONS.logOut} Logout</a></li>
        </ul>
      </aside>
      <div class="dashboard-content">
        <h2 style="font-family:'Playfair Display',serif; font-size:1.5rem; margin-bottom:2rem; color:#0D1421">Admin Dashboard</h2>
        <div class="dash-stats">
          <div class="dash-stat-card"><div class="dash-stat-label">Total Users</div><div class="dash-stat-value">10,247</div><div class="dash-stat-change">+142 this week</div></div>
          <div class="dash-stat-card"><div class="dash-stat-label">Active Shipments</div><div class="dash-stat-value">1,893</div><div class="dash-stat-change">+87 today</div></div>
          <div class="dash-stat-card"><div class="dash-stat-label">Revenue (Month)</div><div class="dash-stat-value">₹12.4L</div><div class="dash-stat-change">+18% vs last month</div></div>
          <div class="dash-stat-card"><div class="dash-stat-label">Premium Members</div><div class="dash-stat-value">2,341</div><div class="dash-stat-change">+56 this week</div></div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem">
          <div style="background:white; border-radius:16px; padding:1.5rem; border:1px solid rgba(26,40,66,0.06)">
            <h3 style="font-size:1rem; font-weight:600; color:#0D1421; margin-bottom:1rem">Country-wise Users</h3>
            ${[{c:'🇺🇸 USA',n:4521,p:44},{c:'🇬🇧 UK',n:2834,p:28},{c:'🇨🇦 Canada',n:1687,p:16},{c:'🇦🇺 Australia',n:1205,p:12}].map(x => `<div style="margin-bottom:0.875rem"><div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.25rem"><span style="color:#273C63; font-weight:500">${x.c}</span><span style="color:#6783B7">${x.n.toLocaleString()}</span></div><div style="height:6px; background:#F0F3F8; border-radius:3px; overflow:hidden"><div style="height:100%; width:${x.p}%; background:linear-gradient(90deg,#F47F20,#E06B10); border-radius:3px"></div></div></div>`).join('')}
          </div>
          <div style="background:white; border-radius:16px; padding:1.5rem; border:1px solid rgba(26,40,66,0.06)">
            <h3 style="font-size:1rem; font-weight:600; color:#0D1421; margin-bottom:1rem">Recent Enquiries</h3>
            ${[{n:'Priya S.',s:'Shipping to Texas',t:'2h ago'},{n:'Rahul M.',s:'Premium upgrade',t:'4h ago'},{n:'Anita K.',s:'Personal shopper request',t:'6h ago'},{n:'Vikram P.',s:'Bulk shipping query',t:'1d ago'}].map(e => `<div style="display:flex; align-items:center; justify-content:space-between; padding:0.625rem 0; border-bottom:1px solid rgba(26,40,66,0.04)"><div><div style="font-size:0.875rem; font-weight:500; color:#0D1421">${e.n}</div><div style="font-size:0.775rem; color:#6783B7">${e.s}</div></div><span style="font-size:0.725rem; color:#8DA2C9">${e.t}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </div>`;
}

// === INTERACTIONS ===

function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (btn) btn.classList.toggle('open');
  if (nav) nav.classList.toggle('open');
  document.body.style.overflow = state.mobileMenuOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  state.mobileMenuOpen = false;
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (btn) btn.classList.remove('open');
  if (nav) nav.classList.remove('open');
  document.body.style.overflow = '';
}

function toggleSocialDropdown(e) {
  e.stopPropagation();
  const dd = document.getElementById('social-dropdown');
  if (dd) dd.classList.toggle('open');
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  if (item) item.classList.toggle('open');
}

function getCountryData(code) {
  return ALL_COUNTRIES.find(c => c.code === code) || ALL_COUNTRIES[ALL_COUNTRIES.length - 1];
}

function calculateQuick() {
  const code = document.getElementById('qc-country')?.value;
  const weight = parseFloat(document.getElementById('qc-weight')?.value);
  const service = document.getElementById('qc-service')?.value || 'standard';
  if (!code || !weight) { alert('Please select a country and enter weight.'); return; }
  const country = getCountryData(code);
  const rate = service === 'express' ? country.express : country.rate;
  const cost = Math.round(weight * rate);
  const timeline = service === 'express' ? country.expressTime : country.time;
  const result = document.getElementById('qc-result');
  if (result) {
    document.getElementById('qc-est-weight').textContent = weight + ' kg';
    document.getElementById('qc-timeline').textContent = timeline;
    document.getElementById('qc-cost').textContent = '₹' + cost.toLocaleString('en-IN');
    result.classList.add('visible');
  }
}

function calculateFull() {
  const code = document.getElementById('calc-country')?.value;
  const l = parseFloat(document.getElementById('calc-length')?.value) || 0;
  const w = parseFloat(document.getElementById('calc-width')?.value) || 0;
  const h = parseFloat(document.getElementById('calc-height')?.value) || 0;
  const weight = parseFloat(document.getElementById('calc-weight')?.value) || 0;
  const service = document.getElementById('calc-service')?.value || 'standard';
  if (!code || !weight) { alert('Please fill in all required fields.'); return; }
  const country = getCountryData(code);
  const volWeight = (l * w * h) / 5000;
  const chargeWeight = Math.max(weight, volWeight);
  const rate = service === 'express' ? country.express : country.rate;
  const cost = Math.round(chargeWeight * rate);
  const timeline = service === 'express' ? country.expressTime : country.time;
  const result = document.getElementById('calc-result');
  if (result) {
    document.getElementById('calc-vol-weight').textContent = volWeight > 0 ? volWeight.toFixed(2) + ' kg' : 'N/A';
    document.getElementById('calc-charge-weight').textContent = chargeWeight.toFixed(2) + ' kg';
    document.getElementById('calc-delivery').textContent = timeline;
    document.getElementById('calc-total-cost').textContent = '₹' + cost.toLocaleString('en-IN');
    result.classList.add('visible');
  }
}

function handleSignup() {
  state.isLoggedIn = true;
  state.user = { name: 'New User', email: 'user@email.com', premium: false };
  alert('Account created successfully! Welcome to G2Market.');
  navigate('dashboard');
}

function handleLogin() {
  state.isLoggedIn = true;
  state.user = { name: 'Priya Sharma', email: 'priya@email.com', premium: false };
  navigate('dashboard');
}

function handleLogout() {
  state.isLoggedIn = false;
  state.user = null;
  navigate('home');
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initPageInteractions() {
  document.addEventListener('click', (e) => {
    const dd = document.getElementById('social-dropdown');
    if (dd && !e.target.closest('.social-more-btn') && !e.target.closest('.social-dropdown')) {
      dd.classList.remove('open');
    }
  });
}

// === INIT ===
function init() {
  renderHeader();
  renderFooter();
  const hash = window.location.hash.slice(1) || 'home';
  state.currentPage = hash;
  renderPage();
  initScrollReveal();
  initHeaderScroll();
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1) || 'home';
  if (hash !== state.currentPage) { state.currentPage = hash; renderPage(); initScrollReveal(); }
});
