import { lazy, Suspense } from 'react';
import './styles/global.css';

const Navbar=lazy(()=>import('./components/Navbar/Navbar'));
const Hero=lazy(()=>import('./components/Hero/Hero'));
const Stats=lazy(()=>import('./components/Stats/Stats'));
const Services=lazy(()=>import('./components/Services/Services'));
const WhyChooseUs=lazy(()=>import('./components/WhyChooseUs/WhyChooseUs'));
const HowItWorks=lazy(()=>import('./components/HowItWorks/HowItWorks'));
const Industries=lazy(()=>import('./components/Industries/Industries'));
const GSTCalculator=lazy(()=>import('./components/GSTCalculator/GSTCalculator'));
const CompareStructures=lazy(()=>import('./components/CompareStructures/CompareStructures'));
const Testimonials=lazy(()=>import('./components/Testimonials/Testimonials'));
const Pricing=lazy(()=>import('./components/Pricing/Pricing'));
const FAQ=lazy(()=>import('./components/FAQ/FAQ'));
const CTA=lazy(()=>import('./components/CTA/CTA'));
const Contact=lazy(()=>import('./components/Contact/Contact'));
const Footer=lazy(()=>import('./components/Footer/Footer'));
const WhatsApp=lazy(()=>import('./components/WhatsApp/WhatsApp'));
const ScrollToTop=lazy(()=>import('./components/ScrollToTop/ScrollToTop'));

function PageLoader(){return <div className="page-loader"><div className="page-loader__spinner"></div><span>Loading...</span></div>}

function App(){return <Suspense fallback={<PageLoader/>}><div className="gst-page"><Navbar/><main><Hero/><Stats/><Services/><WhyChooseUs/><HowItWorks/><Industries/><GSTCalculator/><CompareStructures/><Testimonials/><Pricing/><FAQ/><CTA/><Contact/></main><Footer/><WhatsApp/><ScrollToTop/></div></Suspense>}
export default App;
