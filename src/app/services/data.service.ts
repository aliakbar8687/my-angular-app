import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { Service } from '../models/service.model';
import { News } from '../models/news.model';
import { Partner } from '../models/partner.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }



getServices() {
  const services: Service[] = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Custom web solutions tailored to your business needs.',
      icon: 'fa-code',
      category: 'Development',
      features: ['Responsive Design', 'SEO Optimization', 'CMS Integration'],
      price: 'Starting from $999',
      duration: '4-6 weeks'
    },
    // Add more services as needed
  ];
  return of(services);
}


getNews() {
  const news: News[] = [
    {
      id: 1,
      title: 'Sayvaxia Launches New Innovation Lab',
      // summary: 'Our new lab facility is now open for research and development projects.',
      // content: 'Full content here...',
      excerpt: 'Our new innovation lab opens doors for future R&D.',
      image: 'assets/images/news/lab-opening.jpg',
      publishDate: new Date('2023-09-01'),
      author: 'Admin',
      tags: ['Announcement', 'Facility'],
      category: 'innovation',
      featured: true
    },
  ];
  return of(news);
}


getPartners() {
const partners: Partner[] = [
  {
    id: 1,
    name: 'Masho',
    logo: 'https://app.masho.com/commonincludes/images/logos/mashologoblacknew.png',
    website: 'https://www.masho.com/',
    partnershipDate: '2019-01-10',
    description: 'Fashion',
    fullDescription: 'Masho.com established with an aim of providing best online store for Muslim Women’s who are in search for modest and elegant fashion.',
    category: 'Fashion',
    country: 'India',
    featured: false
  },
  {
    id: 2,
    name: 'geepas',
    logo: 'https://www.westerninternationalllc.com/images/brands/brand-geepas.png',
    website: 'https://catalogue.geepas.com/',
    partnershipDate: '2013-01-10',
    description: 'Quality Electronics for Everyone',
    fullDescription: 'Geepas is known for delivering high-quality electronic appliances catering to households across the globe.',
    category: 'Electronics',
    country: 'Africa',
    featured: false
  },
  {
    id: 3,
    name: 'nestogroup',
    logo: 'https://westerninternationalllc.com/images/brands/brand-nesto.png',
    website: 'https://nestogroup.com/',
    partnershipDate: '2008-11-05',
    description: 'Your One-Stop Shopping Destination',
    fullDescription: 'Nesto Group is a retail chain offering a wide range of groceries, fashion, and household items in one place.',
    category: 'Retail',
    country: 'UK',
    featured: false
  },
  {
    id: 4,
    name: 'royalford',
    logo: 'https://www.westerninternationalllc.com/images/brands/brand-royalford.png',
    website: 'https://royalford.ae/',
    partnershipDate: '2019-06-18',
    description: 'Artistic Designs & Excellent Quality',
    fullDescription: 'Royalford offers home essentials combining artistic design with exceptional quality for everyday living.',
    category: 'Home',
    country: 'India',
    featured: false
  },
  {
    id: 5,
    name: 'olsenmark',
    logo: 'https://www.dombelo.com/wp-content/uploads/2022/07/olsenmark-logo-uganda.png',
    website: 'https://www.olsenmark.com/om/',
    partnershipDate: '2022-02-01',
    description: 'Home To The Widest Range Of Affordable Electronics',
    fullDescription: 'Olsenmark provides a vast range of affordable electronics tailored to the needs of modern households.',
    category: 'Electronics',
    country: 'Dubai',
    featured: false
  },
  {
    id: 6,
    name: 'younglifeworld',
    logo: 'https://westerninternationalllc.com/images/brands/brand-younglife.png',
    website: 'https://younglifeworld.com/',
    partnershipDate: '2021-08-22',
    description: 'Trendsetting Comfort',
    fullDescription: 'Young Life World is a brand that blends style and comfort in its range of fashion wear and accessories.',
    category: 'Fashion',
    country: 'Kuwait',
    featured: false
  },
  {
    id: 7,
    name: 'parajohn',
    logo: 'https://parajohn.com/cdn/shop/files/parajohn-01.png?v=1725600638&width=600',
    website: 'https://parajohn.com/',
    partnershipDate: '2020-05-14',
    description: 'Journey in Style',
    fullDescription: 'Parajohn offers high-quality luggage and travel accessories built for comfort, durability, and style.',
    category: 'Travel',
    country: 'Oman',
    featured: false
  },
  {
    id: 8,
    name: 'krypton',
    logo: 'https://www.westerninternationalllc.com/images/brands/brand-krypton.png',
    website: 'https://westerninternationalllc.com/krypton.php',
    partnershipDate: '2022-04-09',
    description: 'Welcome to the World of Happiness',
    fullDescription: 'Krypton delivers affordable and reliable consumer electronics and home appliances with a commitment to satisfaction.',
    category: 'Electronics',
    country: 'Saudi',
    featured: false
  },
  {
    id: 9,
    name: 'wigme',
    logo: 'https://www.westerninternationalllc.com/images/brands/brand-wigme.png',
    website: 'https://westerninternationalllc.com/wigme.php',
    partnershipDate: '2023-01-27',
    description: 'Shop with a Click',
    fullDescription: 'Wigme is a modern online store providing a seamless shopping experience with a wide variety of products.',
    category: 'E-commerce',
    country: 'UAE',
    featured: false
  },
    {
    id: 10,
    name: 'DELCASA ',
    logo: 'https://assets.wfcdn.com/im/92631318/compr-r85/1758/175831078/delcasa.jpg',
    website: 'https://www.westerninternationalllc.com/delcasa.php',
    partnershipDate: '2023-01-27',
    description: 'Kitchenware, Tableware, Decoware, Homeware, Cookware and Cleaning Accessories',
    fullDescription: 'DELCASA offers premium quality Kitchenware, Tableware, Decoware, Homeware, Cookware and Cleaning Accessories designed to help customers create homes of their dreams.',
    category: 'Kitchenware',
    country: 'China',
    featured: false
  },
    {
    id: 11,
    name: 'Yes Mobiles ',
    logo: 'https://www.westerninternationalllc.com/images/brands/brand-yesmobile.png',
    website: 'https://yesmobile.me/',
    partnershipDate: '2021-01-27',
    description: 'Electronic gadget',
    fullDescription: 'Yes Mobiles, a part of Western International Group, is an international mobile and electronic gadget retailer committed to redefining the lifestyle at affordable prices and the finest quality.',
    category: 'Electronic gadget',
    country: 'UAE',
    featured: false
  },
    {
    id: 12,
    name: 'Mark & Save ',
    logo: 'https://markandsaveimages.s3.ap-south-1.amazonaws.com/wp-content/uploads/2019/11/25065448/markandsave_logo.png',
    website: 'https://www.markandsave.com/',
    partnershipDate: '2022-05-27',
    description: 'Retail chain',
    fullDescription: 'Our stores are dedicated to offering a wide range of quality products at affordable prices, ensuring an exceptional shopping experience for our customers.',
    category: 'Retail chain',
    country: 'Oman',
    featured: false
  },
    {
    id: 13,
    name: 'Nesto Technologies',
    logo: 'https://media.licdn.com/dms/image/v2/D4D3DAQGAMJnapWCn6A/image-scale_191_1128/image-scale_191_1128/0/1724483769118/nestotechnologies_cover?e=2147483647&v=beta&t=Yv5VX7RSDqH8C0zNMfqAAK4LtF37HVRJkgv1H66Y6c4',
    website: 'https://nestotechnologies.com/',
    partnershipDate: '2022-05-27',
    description: 'IT consulting',
    fullDescription: 'Nesto is a team of inspiring, talented and experienced engineers who aspires in providing IT consulting and solutions to customers all around the globe. ',
    category: 'IT consulting',
    country: 'Bangalore',
    featured: false
  },
    {
    id: 14,
    name: 'Beauty World',
    logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/54/04/04/54040427-5089-d2ef-2460-517344d29052/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png',
    website: 'https://beautyworldtrd.com/',
    partnershipDate: '2022-05-27',
    description: 'Beauty Products',
    fullDescription: 'We have launched 10 new Beauty, Health, and Home Care Brands: AMALFI, AGRADO, ROMAR, FRESH FEEL, DICORA, DESTELLO, GARLEY, KIRIRKO, NELLY, WINIX',
    category: 'Beauty Products',
    country: 'Dubai',
    featured: false
  },
    {
    id: 15,
    name: 'Jazp',
    logo: 'https://media.licdn.com/dms/image/v2/C4E1BAQEJcKXVTHVWTQ/company-background_10000/company-background_10000/0/1625721801879/jazp_cover?e=2147483647&v=beta&t=J0PJTU18Ss16XMoBumEekXoQi6DTBlMpGNycXRTJjVU',
    website: 'https://qatar.jazp.com/qa-en/',
    partnershipDate: '2018-05-27',
    description: 'Ecommerce',
    fullDescription: 'Jazp.com is the leading online shopping platform in the Middle East. ',
    category: 'Ecommerce',
    country: 'Qatar',
    featured: false
  }
];

  return of(partners);
}

}