import FeaturesCourses from '@/components/FeaturesCourses'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Instructures from '@/components/Instructures'
import MusicSchoolTestimonials from '@/components/TestimonialsCards'
import UpcomingWebinars from '@/components/UpcomingWebinars'
import WhyChooseUs from '@/components/WhyChooseUs'

function Home() {
  return (
    <main className=''>
      <HeroSection />
      <FeaturesCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructures />
      <Footer />
    </main>
  )
}

export default Home