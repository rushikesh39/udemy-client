const pageData = {
  "development": ["web development", "data science", "mobile development", "programming language", 'game development'],
  "business": ["entrepreneurship", "communication", "management", "sales", "operations"],
  "Finance & Accounting": ["Accounting & Bookkeeping", "Compliance", "Cryptocurrency & Blockchain", "Economics", "Finance"],
  "IT & Software": ["IT Certifications", "Network & Security", "Hardware", "Operating Systems & Servers", "Other IT & Software"],
  "Office Productivity": ["Microsoft", "Apple", "Google", "SAP", "Oracle"],
  "Personal Development": ["Personal Transformation", "Personal Productivity", "Leadership", "Career Development", "Parenting & Relationships"],
  "Teaching & Academics": ["Engineering", "Humanities", "Math", "Science", "Online Education"],
  "Music": ["Instruments", "Music Production", "Music Fundamentals", "Vocal", "Music Techniques"],
  "Health & Fitness": ["Fitness", "General Health", "Sports", "Nutrition & Diet", "Yoga"],
  "Photography & Video": ["Digital Photography", "Photography", "Portrait Photography", "Photography Tools", "Commercial Photography"],
  "Lifestyle": ["Arts & Crafts", "Beauty & Makeup", "Esoteric Practices", "Food & Beverage", "Gaming"],
  "Marketing": ["Digital Marketing", "Search Engine Optimization", "Social Media Marketing", "Branding", "Marketing Fundamentals"],
  "Design": ["Web Design", "Graphic Design & Illustration", "Design Tools", "User Experience Design", "Game Design"]
};

export const Category = Object.keys(pageData)

export const SubCategory = Object.values(pageData)
