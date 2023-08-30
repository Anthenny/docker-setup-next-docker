import Main from './components/Main/page';
import SchemaSection from './components/SchemaSection/page';
import TrainingSection from './components/TrainingSection/page';
import ReviewsSection from './components/ReviewsSection/page';
import InstagramSection from './components/InstagramSection/page';

export default function Home() {
  return (
    <div>
      <Main />
      <SchemaSection />
      <TrainingSection />
      <ReviewsSection />
      <InstagramSection />
    </div>
  );
}
