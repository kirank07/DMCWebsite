import { faCheckSquare, faCoffee, faAd,faRectangleAd ,faHashtag } from '@fortawesome/free-solid-svg-icons';
import seo from '../../src/assets/images/seo.jpg';
import ppc from '../../src/assets/images/ppc.jpg';
import socialmediamkt from '../../src/assets/images/socialmediamkt.jpg';
import conetentwriting from '../../src/assets/images/conetentwriting.jpg';
import emailmarketing from '../../src/assets/images/emailmarketing.jpg';
import webdesign from '../../src/assets/images/webdesign.jpg';

const servicesData = [
    {
      id:'1',
      title:"Search Engine Optimization",
      description: "Improve your website's visibility and ranking on search engines like Google and Bing with our SEO services.",
      image: seo,
      icon: faCoffee,
    },
    {
      id: 2,
      title: "Pay-Per-Click Advertising",
      description: "Get targeted traffic to your website with our pay-per-click advertising services on platforms like Google Ads and Facebook Ads.",
      image: ppc,
      icon: faCheckSquare
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience on social media platforms like Facebook, Instagram, and Twitter.",
      image: socialmediamkt,
      icon: faHashtag
    },
    {
      id: 4,
      title: "Content Marketing",
      description: "Create and distribute valuable content to attract and retain your target audience and ultimately drive profitable customer action.",
      image: conetentwriting,    
      icon: faAd
  
    },
    {
      id: 5,
      title: "Email Marketing",
      description: "Reach out to your customers and prospects with personalized emails that promote your products and services and drive conversions.",
      image: emailmarketing,
      icon: faRectangleAd
    },
    {
      id: 6,
      title: "Website Design and Development",
      description: "Create a website that is visually appealing, easy to use, and optimized for search engines with our website design and development services.",
      image: webdesign,
      icon: "fa fa-Desktop"
    }
  ];

 export default servicesData;