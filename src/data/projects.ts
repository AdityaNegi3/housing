import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'modern-loft-richmond',
    title: 'Modern Loft Conversion',
    category: 'Loft Conversion',
    description: 'Complete loft conversion creating a stunning master bedroom suite with ensuite bathroom and walk-in wardrobe.',
    heroImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    gallery: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      '/loft 1.jpg'
    ],
    challenge: 'The client needed additional bedroom space but had limited options for extension. The existing loft space was cramped with low ceiling height and poor natural light.',
    solution: 'We designed a dormer extension to maximize headroom and installed large skylights for natural light. Custom storage solutions were integrated to maximize the usable space while maintaining the elegant aesthetic.',
    completionDate: 'March 2024',
    duration: '8 weeks',
    clientType: 'Residential'
  },
  {
    id: 'garden-landscaping-kensington',
    title: 'Garden Transformation',
    category: 'Garden Landscaping',
    description: 'Complete garden redesign with water features, outdoor kitchen, and contemporary planting scheme.',
    heroImage: '/graden 0.webp',
    gallery: [
      '/gardne 2.jpeg',
      '/garden 3.jpg',
      '/garden 4.jpg',
      '/garden 5.jpg'
    ],
    challenge: 'The existing garden was overgrown and underutilized. The client wanted a contemporary outdoor entertaining space that would complement their newly renovated home.',
    solution: 'We created distinct zones including a dining area with outdoor kitchen, a water feature as a focal point, and contemporary planting that provides year-round interest. Quality materials and lighting extend the usable hours.',
    completionDate: 'July 2023',
    duration: '10 weeks',
    clientType: 'Residential'
  },
  {
    id: 'luxury-kitchen-chelsea',
    title: 'Luxury Kitchen Renovation',
    category: 'Kitchen Fit-Out',
    description: 'High-end kitchen renovation featuring bespoke cabinetry, premium appliances, and marble countertops.',
    heroImage: '/kitchen.png',
    gallery: [
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
      'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
    ],
    challenge: 'The existing kitchen was outdated and poorly laid out, with insufficient storage and workspace. The client wanted a modern, functional space that would complement their period property.',
    solution: 'We completely reconfigured the layout to create an open-plan kitchen-dining area. Custom cabinetry was designed to maximize storage while maintaining clean lines. Premium materials and integrated appliances created a seamless, luxury finish.',
    completionDate: 'January 2024',
    duration: '6 weeks',
    clientType: 'Residential'
  },
  {
    id: 'victorian-house-restoration',
    title: 'Victorian House Restoration',
    category: 'Refurbishment',
    description: 'Complete restoration of a Victorian townhouse, preserving period features while adding modern amenities.',
    heroImage: '/victoria 1.webp',
    gallery: [
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      '/image.png'
    ],
    challenge: 'This Grade II listed Victorian property required extensive restoration while maintaining its historical integrity. Structural issues and outdated systems needed addressing without compromising period features.',
    solution: 'We carefully restored original features including cornicing, fireplaces, and sash windows. Modern systems were discretely integrated, and a rear extension provided contemporary living space while respecting the building\'s character.',
    completionDate: 'November 2023',
    duration: '16 weeks',
    clientType: 'Residential'
  },
  {
    id: 'contemporary-extension-putney',
    title: 'Contemporary Extension',
    category: 'Extension',
    description: 'Modern glass extension creating seamless indoor-outdoor living with bi-fold doors and skylights.',
    heroImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    gallery: [
      '/contemp 1.jpg',
      '/contemp 2.jpg',
      '/contemp 3.webp',
      '/contemp 4.jpg'
    ],
    challenge: 'The client wanted to extend their Edwardian terrace to create a modern family space while maintaining the property\'s character and maximizing natural light in a narrow plot.',
    solution: 'We designed a contemporary glass extension with structural glazing and roof lights. The design creates a seamless transition between indoor and outdoor spaces while providing the additional living area the family needed.',
    completionDate: 'September 2023',
    duration: '12 weeks',
    clientType: 'Residential'
  },
  
  {
    id: 'new-build-wimbledon',
    title: 'New Build Family Home',
    category: 'New Build',
    description: 'Bespoke family home designed for modern living with sustainable features and smart home technology.',
    heroImage: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg',
    gallery: [
      '/famhouse 1.png',
      '/fam build 1.jpg',
      '/fam build 2.jpg',
      '/famhouse 2.png'
    ],
    challenge: 'The client wanted a contemporary family home that would be energy-efficient and future-proof, while fitting harmoniously into the established neighborhood.',
    solution: 'We designed a modern home with clean lines and sustainable materials. Smart home technology was integrated throughout, and the design maximizes natural light while maintaining privacy. Energy-efficient systems ensure minimal environmental impact.',
    completionDate: 'May 2023',
    duration: '24 weeks',
    clientType: 'Residential'
  }
];