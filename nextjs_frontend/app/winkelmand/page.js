import Right__col from '@/../../app/components/cart/Right__col/page';
import Left__col from '@/../../app/components/cart/Left__col/page';
const page = () => {
  return (
    <div className="container FwOrderPage">
      <h2 className="section__title">Bestelling</h2>
      <form className="cOrderPage">
        <Left__col />
        <Right__col />
      </form>
    </div>
  );
};

export default page;
